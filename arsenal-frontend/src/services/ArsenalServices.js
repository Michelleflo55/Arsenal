import Client from './api'

export const GetArsenal = async () => {
    try {
        const res = await Client.get('/myArsenal')  
        return res.data
    } catch (error) {
        throw(error)
    }
}

export const DeleteWeapFromArs = async (data) => {
    try {
        const res = await Client.delete(`/myArsenal/${data.playerId}/${data.choose_weaponId}`)
        return res.data
    } catch (error) {
        throw(error)
    }
}
 
export const DeleteArsenal = async (data) => {
    try {
        const res = await Client.delete(`/myArsenal/${data.playerId}`)
            return res.data
    } catch (error) {
        throw(error)
    }
}

export const PushArsenal = async (data) => {
    try {
        const res = await Client.put('/myArsenal/update', data)
        return res.data 
    } catch (error) {
        
    }
} 