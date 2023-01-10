const express = require('express')
const loginRouter = new express.Router()
const User = require('../models/User')


loginRouter.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (e) {
        return res.status(400).send()
    }
})

loginRouter.post('/register', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user,token})
    } catch (error) {
        return res.status(400).send(error)
    }
})

module.exports = loginRouter