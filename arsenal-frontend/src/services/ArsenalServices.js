import Client from './api'

export const GetArsenal = async () => {
    try {
        const res = await Client.get('/api/myArsenal')  
        return res.data
    } catch (error) {
        throw(error)
    }
}

export const DeleteWeapFromArs = async (data) => {
    try {
        const res = await Client.delete(`/api/myArsenal/${data.playerId}/${data.choose_weaponId}`)
        return res.data
    } catch (error) {
        throw(error)
    }
}
 
export const DeleteArsenal = async (data) => {
    try {
        const res = await Client.delete(`/api/myArsenal/${data.playerId}`)
            return res.data
    } catch (error) {
        throw(error)
    }
}