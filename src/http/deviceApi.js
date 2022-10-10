import { $authhost, $host } from "./index.js"

export const addType = async (type) => {
    const {data} = await $authhost.post('/api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('/api/type')
    return data
}

export const addBrand = async (brand) => {
    const {data} = await $authhost.post('/api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('/api/brand')
    return data
}

export const addDevice = async (device) => {
    const {data} = await $authhost.post('/api/device', device)
    return data
}

export const fetchDevices = async () => {
    const {data} = await $host.get('/api/device')
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('/api/device/' + id)
    return data
}

