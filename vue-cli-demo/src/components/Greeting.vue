<template>
  <p v-if="age > 25">{{ msg }}</p>
  <p v-else>You must be 25 years or older to veiw this</p>
</template>

<script>
export default {
  name: 'Greeting',
  props: {
      age: {
          type: Number,
          required: true
      }
  },
  data() {
    return {
      msg: 'Hello World!',
    }
  }
}
</script>

<style scoped lang="scss">
$color: red;
    p {
        color: $color;
    }
</style>