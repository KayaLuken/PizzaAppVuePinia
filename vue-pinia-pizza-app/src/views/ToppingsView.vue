<script>

import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { usePizzaStore } from '../stores/pizza'
import {TOPPINGS} from '../const'
import {storeToRefs} from 'pinia'


const pizzaStore = usePizzaStore()
const {toppings} = storeToRefs(pizzaStore)


export default {

  data() {
      return {
        toppingsOptions:TOPPINGS,
        selectedToppings: toppings
      }
  },
  methods: {
    handleCheck(event) {
      const topping = event.target.value

      const isAlreadyChecked = this.selectedToppings.indexOf(topping) > -1
      if(isAlreadyChecked) {
        pizzaStore.removeTopping(topping)
      } else {
        pizzaStore.addTopping(topping)
      }
    }
  }
}



</script>
<template>
  <div id="toppings">
    <nav>
      <RouterLink to="/dough">To dough</RouterLink>
    </nav>
    <div id="checklist">
      <img alt="Toppings" class="logo" width="125" src="@/assets/tomato.svg" />
      <div class="grid">
        <div v-for="topping in toppingsOptions">
          <input  
              type="checkbox"
              v-on:click="handleCheck"
              :checked="selectedToppings.indexOf(topping)>-1"
              :value="topping"/>
          {{topping}}
        </div>
      </div>
    </div>
    <nav>
      <RouterLink to="/checkout">To checkout</RouterLink>
    </nav>
  </div>
</template>

<style>
div#toppings {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
div#checklist {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
}
div.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>