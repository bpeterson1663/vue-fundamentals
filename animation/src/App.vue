<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello World</h2>
    <h2 v-else key="secondary">Another Flag</h2>
  </transition> -->

  <!-- <transition name="zoom" type="animation" appear>
    <h2 v-if="flag">Hello</h2>
  </transition> -->

  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="false"
    >
    <h2 v-if="flag">Transitions With JavaScript</h2>
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: true,

    }
  },
  methods: {
    beforeEnter(el){
      console.log('before-enter', el)
    },
    enter(el, done) {
      console.log('enter', el, done)
      const animation = el.animate([{transform: "scale3d(0,0,0)"}, {}], {
        duration: 1000
      });

      animation.onFinish = () => done();
    },
    afterEnter(el) {
      console.log('after-enter', el)
    },
    beforeLeave(el) {
      console.log('before-leave', el)
    },
    leave(el, done) {
      console.log('leave', el, done)
      const animation = el.animate([{}, {transform: "scale3d(0,0,0)"}], {
        duration: 1000
      });

      animation.onFinish = () => done();
    },
    afterLeave(el) {
      console.log('after-leave', el)
    }
  }
};
</script>

<style>

h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;

}
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active{
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 1s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 1s linear;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-enter-to {
  opacity: 0;
}
@keyframes zoom-in {
  from{
    transform: scale(0, 0);
  }

  to{
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from{
    transform: scale(1, 1);
  }

  to{
    transform: scale(0, 0);
  }
}
</style>
