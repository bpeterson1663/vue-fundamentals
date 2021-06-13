let vm = Vue.createApp({
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

vm.component('hello', {
  template: `<h1>{{ message }}</h1>`,
  data() {
    return {
      message: "Hello from a component"
    }
  }
})

vm.mount('#app')

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000)