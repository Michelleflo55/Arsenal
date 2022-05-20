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
       const res = await Client.post('/weapons/new', data)
       return res.data
    } catch (error) {
        throw(error)
    }
}

export const UpdateWeapon = async (data) => {
    try {
        const res = await Client.put(`/weapons/${data.choose_weaponsId}`, data)
        return res.data
    } catch (error) {
      throw(error)  
    }
}

export const DeleteWeapon = async (data) => {
    console.log(data.banana)
    try {
       const res = await Client.delete(`/weapons/${data.banana}`)
       console.log(res.data)
       return res.data
    } catch (error) {
        throw(error)
    }
}