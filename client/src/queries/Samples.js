import {gql} from '@apollo/client'

const GET_ALL_SAMPLES = gql`
    query getAllSamples{
        allSamples{
            id
            sampleCode
            styleId
            stage
            status
            addedBy{
                id
                name
                userType
            }
            addedOn
            updatedBy
            updatedOn
            assignedTo
            completedDate
            buyerComments
            sampleSize
            sampleQuantity
            notes}
    }
`
export {GET_ALL_SAMPLES}
