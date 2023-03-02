<script>
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Dropdown from '../components/Dropdown.vue'
import {PIZZA_STYLES} from '../const'
import { usePizzaStore } from '../stores/pizza'

const pizzaStore = usePizzaStore()
const pizzaStyles = PIZZA_STYLES

export default {
  components: {
    Dropdown,
  },

  data() {
    return {
      pizzaStyles,
      item: null
    }
  },
  methods: {
    handleItemClicked(item) {
      pizzaStore.setStyle(item)
    }
  }
}

</script>
<template>
    <div id="pizzastyles">
      <div id="placeholder">
        <nav>
        <RouterLink to="/dough">To dough selection</RouterLink>
        </nav>
      </div>
      <div id="dropdown">
        <img alt="Flag" class="logo" width="125" src="@/assets/flag.svg" />
        <Dropdown :text="'Select a style'" :items="pizzaStyles" @itemClicked="handleItemClicked" />
      </div>
        <nav>
        <RouterLink to="/dough">To dough selection</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
div#pizzastyles {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: auto;
    margin-bottom: 70px;
}
div#placeholder {
    visibility: hidden;
}
div#dropdown {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
}
</style>