const db = require("../config/dbConfig")

const createToken = async (req, res) => {
    const { created_by, created_at, service_id, query } = req.body
    
    // joi validation

    try {
        const result = await db('table_name').insert({
            created_by, created_at, service_id, query
        })

        if(result.length === 0){
            return res.status(200)
            .send({
                flag: 'FAIL',
                msg: 'Something went wrong'
            })
        }

        return res.status(200)
        .send({
            flag: 'SUCCESS',
            msg: 'Token Submitted'
        })
    } catch (err) {
        console.log('support | createToken | err:', err.message)
        return res.send({
            flag: 'FAIL',
            msg: 'Server Error'
        })
    }
}

const updateToken = async (req, res) => {
    const { created_by, created_at, service_id, query } = req.body
    
    // joi validation

    try {
        const result = await db('table_name').update({
            created_by, created_at, service_id, query
        })
        .where({ id: id })

        if(result.length === 0){
            return res.status(200)
            .send({
                flag: 'FAIL',
                msg: 'Something went wrong'
            })
        }

        return res.status(200)
        .send({
            flag: 'SUCCESS',
            msg: 'Token Submitted'
        })
    } catch (err) {
        console.log('support | createToken | err:', err.message)
        return res.send({
            flag: 'FAIL',
            msg: 'Server Error'
        })
    }
}


const deleteToken = async (req, res) => {
    const { created_by, created_at, service_id, query } = req.body
    
    // joi validation

    try {
        const result = await db('table_name').del({
            id
        })

        if(result.length === 0){
            return res.status(200)
            .send({
                flag: 'FAIL',
                msg: 'Something went wrong'
            })
        }

        return res.status(200)
        .send({
            flag: 'SUCCESS',
            msg: 'Token Submitted'
        })
    } catch (err) {
        console.log('support | createToken | err:', err.message)
        return res.send({
            flag: 'FAIL',
            msg: 'Server Error'
        })
    }
}


const getTokensByUser = async (req, res) => {
    const { created_by, created_at, service_id, query } = req.body
    
    // joi validation

    try {
        const result = await db('table_name').select('query_title')
                        .where('user_id', user_id)

        if(result.length === 0){
            return res.status(200)
            .send({
                flag: 'FAIL',
                msg: 'Something went wrong'
            })
        }

        return res.status(200)
        .send({
            flag: 'SUCCESS',
            msg: 'Token Submitted'
        })
    } catch (err) {
        console.log('support | createToken | err:', err.message)
        return res.send({
            flag: 'FAIL',
            msg: 'Server Error'
        })
    }
}

// get token details by id

module.exports = {
    createToken
}