import Client from "./api";

export const GetWeapons = async () => {
    try {
        const res = await Client.get('/api/weapons') 
        return res.data  
    } catch (error) {
        throw(error)
    }
}

export const GetWeapon = async (data) => {
    try {
        const res = await Client.get(`/api/weapons/${data}`)
        return res.data
    } catch (error) {
        throw(error)
    }
}

export const PostWeapon = async (data) => {
    try {
       const res = await Client.post()
    } catch (error) {
        throw(error)
    }
}