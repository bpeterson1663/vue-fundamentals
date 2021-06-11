const vm = Vue.createApp({
    data() {
        return {
            greeting: 'Hello',
            firstName: 'Brady'
        }
    },
    methods: {
        fullName() {
            return `${this.greeting} ${this.firstName}`
        }
    }
}).mount('#app')

// setTimeout(() => {
//     //Proxy setter and getter. Build into Vue
//     vm.firstName = 'Bob'
// }, 2000)