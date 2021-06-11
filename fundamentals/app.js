const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Brady',
            middleName: '',
            lastName: 'Peterson',
            url: 'https://google.com',
            age: 32
        }
    },
    methods: {
        increment() {
            this.age++
        },
        updateLastName(message, event){
            console.log(message)
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        }
    },
    computed: {
        fullName() {
            console.log("full")
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        },
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 32
            },3000)
        }
    }
}).mount('#app')

// setTimeout(() => {
//     //Proxy setter and getter. Build into Vue
//     vm.firstName = 'Bob'
// }, 2000)