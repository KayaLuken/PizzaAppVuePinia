<script>

import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import {DOUGHS} from '../const'
import Dropdown from '../components/Dropdown.vue'
import { usePizzaStore } from '../stores/pizza'

const pizzaStore = usePizzaStore()

export default {
    components: {
    Dropdown,
  },
    data() {
    return {
      doughs: DOUGHS,
      item: null
    }
  },
  methods: {
    handleItemClicked(item) {
      pizzaStore.setDough(item)
    }
  }
}
</script>
<template>
    <div id="dough">
        <nav>
        <RouterLink to="/pizzastyles">To pizza styles</RouterLink>
        </nav>
        <div id="dropdown">
            <img alt="Dough" class="logo" width="125" src="@/assets/dough.svg" />
            <Dropdown :text="'Select a dough'" :items="doughs" @itemClicked="handleItemClicked" />            
        </div>
        <nav>
        <RouterLink to="/toppings">To toppings</RouterLink>
        </nav>
    </div>
</template>

<style>
div#dough {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 150px;
}
div#dropdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>