<script>

import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import {storeToRefs} from 'pinia'
import { usePizzaStore } from '../stores/pizza'


const pizzaStore = usePizzaStore()
const {style, dough, toppings} = storeToRefs(pizzaStore)



export default {
    data() {
        return {
            style: style,
            dough: dough,
            toppings: toppings
        }
    },
    methods: {
        handleOrder() {
            console.log({style: this.style, dough: this.dough, toppings: Array.from(this.toppings)})
        }
    }
}

</script>
<template>
    <div id="checkout">
        <nav>
            <RouterLink to="/toppings">To toppings</RouterLink>
        </nav>
        <div id="dropdown">
            <img alt="Checkout" class="logo" width="125" src="@/assets/checkout.svg" />
            <n-button
            @click="handleOrder"
            role="link"
            >
            Finalise your order
            </n-button>
        </div>
        <div id="placeholder">
        <nav>
            <RouterLink to="/toppings">To toppings</RouterLink>
        </nav>       
     </div>
    </div>
</template>

<style>
div#checkout {
    display: flex;
    flex-direction: row;
    align-items: center;
}
div#dropdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
div#placeholder{
    visibility: hidden;
}
</style>