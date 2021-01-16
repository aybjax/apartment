export default function(url, options, getters) {
    const isAuth = getters['auth/isAuth']

    if(!isAuth) {
        return fetch(url, options)
    }

    const token = getters['auth/token']

    const bearer = 'Bearer ' + token

    if(!options) {
        options = {}
    }

    let headers = options.headers

    if(headers) {
        headers['Authorization'] = bearer
    } else {
        headers = {'Authorization': bearer}
    }

    options.headers = headers

    return fetch(url, options)
}