import {notEmptyRule, psRules, emailRule, phoneRegex} from '@/utils/inputRules'

const passwordCheck = [
    notEmptyRule,
    ...psRules
]

export default {
    data(){
        return {
            valid: false,
            headers:{},
            usernameRules: [
                notEmptyRule,
            ],
            emailRules: [
                notEmptyRule,
                emailRule,
            ],
            phoneRules: [
                (phoneInput) => {
                    const isValid = phoneRegex.test(phoneInput) 

                    if(isValid) {
                        this.phone = "8-7" + phoneInput
                        return true
                    }

                    this.phone = ""

                    return "Введите номер сотового как указано на примере"
                }
            ],
            passwordRules: [
                ...passwordCheck,
            ],
            passwordRules2: [
                ...passwordCheck,
                v => v === this.password || "Пароли должны быть одинакое",
            ],
            notEmptyRules: [notEmptyRule],
            moreOrLessRules: [
                v => v.split(/\s/).length <= this.descriptionMaxLength || `не более ${this.descriptionMaxLength} слов`,
                notEmptyRule,
            ],
            isIntegerRules: [
                v => v === parseInt(v).toString() || "Цена должно быть целым числом",
                notEmptyRule,
            ]
        }
    },
    methods: {
        submit(){
            if ( !(this.$refs.form.validate()) ) {
                return
            }

            this.sendData()
        },
        sendData(){
            this.prepareForm()

            console.log(this.form)

            fetch('http://localhost:3000', {
                method: 'POST',
                headers: this.headers,
                body: this.form,
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
        },
    }
}