export default defineEventHandler(async (event) => {
    const isMaintenance = JSON.parse(useRuntimeConfig().maintenance)
    return isMaintenance
})