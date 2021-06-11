const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Brady',
            lastName: 'Peterson',
            url: 'https://google.com',
            age: 32
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        },
        increment() {
            this.age++
        },
        updateLastName(message, event){
            event.preventDefault()
            console.log(message)
            this.lastName = event.target.value
        }
    }
}).mount('#app')

// setTimeout(() => {
//     //Proxy setter and getter. Build into Vue
//     vm.firstName = 'Bob'
// }, 2000)