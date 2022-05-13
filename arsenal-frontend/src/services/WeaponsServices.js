import Client from "./api";

export const GetWeapons = async () => {
    try {
        const res = await Client.get('/weapons') 
        return res.data  
    } catch (error) {
        throw(error)
    }
}

export const GetWeapon = async (data) => {
    try {
        const res = await Client.get(`/weapons/${data}`)
        return res.data
    } catch (error) {
        throw(error)
    }
}

export const CreateWeapon = async (data) => {
    
    try {
       const res = await Client.post(`/weapons/new/${data.playerId}/${data.choose_weaponsId}`)
       return res.data
    } catch (error) {
        throw(error)
    }
}

export const UpdateWeapon = async (data) => {
    try {
        const res = await Client.put(`/weapons/${data.choose_weaponsId}`)
    } catch (error) {
      throw(error)  
    }
}

export const DeletetWeapon = async (data) => {
    
    try {
       const res = await Client.delete(`/weapons/${data.playerId}/${data.choose_weaponsId}`)
       return res.data
    } catch (error) {
        throw(error)
    }
}