import Client from './api'

export const GetPlayer = async (data) => {
    try {
        const res = await Client.get(`/api/players/${data}`)
        return res.data
    } catch (error) {
        throw(error)
    }
}

export const GetPlayers = async () => {
    try {
        const res = await Client.get('/api/players')
        return res.data
    } catch (error) {
        throw(error)
    }
}