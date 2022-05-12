import Client from "./api";

export const GetWeapons = async () => {
    try {
        const res = await Client.get('api/weapons')   
    } catch (error) {
        throw(error)
    }
}