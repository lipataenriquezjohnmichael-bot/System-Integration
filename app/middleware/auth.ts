export default defineNuxtRouteMiddleware((to) => {

    if (import.meta.server) return
    const user = localStorage.getItem('google_user')
    const isLoggedIn = !!user

    // Prevent logged-in users from accessing login page

    if (to.path === '/login' && isLoggedIn) {
        return navigateTo('/')
    }
    // Protect pages that require authentication
    //const publicPages = ['/login']
    if (to.path !== '/login' && !isLoggedIn)
        return navigateTo('/login')
})