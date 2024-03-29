const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    userType: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contains "password".')
            }
        }
    },
    tokens: [{
        token:{
            type:String,
            required:true
        }
    }]
},{
    timestamps:true
})

// userSchema.virtual('myAddedSamples', {
//     ref: 'Sample',
//     localField: '_id',
//     foreignField: 'addedBy'
// })

// userSchema.virtual('myAssignedSamples', {
//     ref: 'Sample',
//     localField: '_id',
//     foreignField: 'assignedTo'
// })

// userSchema.virtual('myStyles', {
//     ref: 'Style',
//     localField: '_id',
//     foreignField: 'responsibleBuyer'
// })


userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

userSchema.methods.generateAuthToken= async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString()}, process.env.JWTPASS)

    user.tokens = user.tokens.concat({token})
    await user.save()

    return token

}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})

    if(!user){
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}

userSchema.pre('save', async function (next){
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

// userSchema.pre('remove', async function (next) {

//     next()
// })

const User = mongoose.model('User',userSchema)

module.exports = User