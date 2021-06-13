let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  render() {
    return Vue.h(
      'h1',
      this.message
    )
  },
  beforeCreate() {
    console.log("beforeCreate called", this.message)
  },
  created(){
    console.log("created called", this.message)
  },
  beforeMount(){
    console.log("beforeMount called", this.$el)
  },
  mounted() {
    console.log("beforeMount called", this.$el)
  },
  beforeUpdate() {
    console.log("beforeUpdate called")
  },
  updated() {
    console.log("update")
  },
  beforeUnmount(){
    console.log("beforeUnmount called")
  },
  unmounted() {
    console.log("unmounted called")
  }
})

vm.mount('#app')

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000)