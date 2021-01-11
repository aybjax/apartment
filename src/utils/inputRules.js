export const notEmptyRule =  v => !!v || "Поле не должно быть пустым!"

export const psRules = [
    pswd => /[a-z]/.test(pswd) || "Пароль должен содержать минимум одну строчную латинскую букву",
    pswd => /[A-Z]/.test(pswd) || "Пароль должен содержать минимум одну заглавную латинскую букву",
    pswd => /[0-9]/.test(pswd) || "Пароль должен содержать минимум одну цифру",
    pswd => pswd.length >= 6 || "Пароль должен содержать не меньше 6 букв",
]

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/
export const emailRule = (email) => (
    emailRegex.test(email) 
    || "Введите правильный e-mail"
)

export const phoneRegex = /^[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/