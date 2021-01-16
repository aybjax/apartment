import {notEmptyRule, psRules, emailRule, phoneRegex} from '@/utils/inputRules'
import fetcher from '@/utils/fetcher'

const passwordCheck = [
    notEmptyRule,
    ...psRules
]

export default {
    data(){
        return {
            valid: false,
            notSend:false,
            headers:{},
            form: {},
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
            if(this.notSend) {
                return
            }

            this.prepareForm()

            fetcher(this.url, {
                method: 'POST',
                headers: this.headers,
                body: this.form,
            }, this.$store.getters)
            .then(res => {
                if(res.ok)
                    return res.json()
                
                throw new Error('nok')
            })
            .then(data => {
                this.successFnx(data)
            })
            .catch((err) => {
                this.failFnx(err)
            })
        },
        successFnx(resposeBody){
            return resposeBody
        },
        failFnx(err){
            return err
        }
    }
}