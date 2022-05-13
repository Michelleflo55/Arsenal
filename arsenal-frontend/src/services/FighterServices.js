import Client from './api'


export const GetFighter = async (data) => {
    try {
        const res = await Client.get(`/fighters/${data}`)
        return res.data
    } catch (error) {
        throw(error)
    }
}

export const GetFighters = async () => {
    try {
        const res = await Client.get('/fighters')
        return res.data
    
    } catch (error) {
        throw(error)
    }
}