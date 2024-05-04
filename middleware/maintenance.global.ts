export default defineNuxtRouteMiddleware(async (to, from) => {
    if (import.meta.server) {
        const isMaintenance = JSON.parse(useRuntimeConfig().maintenance)
        if (to.path != '/maintenance' && isMaintenance == true) {
            return navigateTo('/maintenance')
        }
        if (to.path == '/maintenance' && isMaintenance == false) {
            return navigateTo('/')
        }
    }
    if (import.meta.client) {
        try {
            const isMaintenance = JSON.parse(await $fetch('/api/maintenance'))
            if (to.path != "/maintenance" && isMaintenance == true) {
                return navigateTo('/maintenance')
            }
        }
        catch (error) {
            console.error(error)
        }
    }
})