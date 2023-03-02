<script>
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'



export default {

}
</script>

<template>
  <div id="outer">

  <div id="landing">
    <img alt="Pizza" class="logo" width="250" src="@/assets/pizza.svg" />
    <router-link
      to="/pizzastyles"
      v-slot="{ navigate }"
    >
      <n-button
        @click="navigate"
        role="link"
      >
        Order your own custom pizza now!
      </n-button>
    </router-link>
  </div>
  
  </div>
</template>

<style scoped>
  div#landing {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

</style>