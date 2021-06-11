const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Brady',
            lastName: 'Peterson'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }
}).mount('#app')

// setTimeout(() => {
//     //Proxy setter and getter. Build into Vue
//     vm.firstName = 'Bob'
// }, 2000)