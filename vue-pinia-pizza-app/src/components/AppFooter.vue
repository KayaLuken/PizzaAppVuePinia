<script>

import { RouterLink, RouterView, useRouter } from 'vue-router'
import pinia, {usePizzaStore} from '@/stores/pizza'
import {storeToRefs} from 'pinia'

const pizzaStore = usePizzaStore(pinia)
const router = useRouter()

const {description, price} = storeToRefs(pizzaStore)


export default {
    data() {
        return {
            description,
            price,
            showFooter: false
        }
    },
    watch: {
        $route(to, from) {
            if(to.name === 'home') {
                this.showFooter = false
            } else {
                this.showFooter = true
            }
        },
    },
}

</script>

<template>
    <div id="footer" v-if="showFooter">
        <div id="description">
            {{description}}
        </div>
        <div id="price">
            €{{price}}
        </div>
    </div>
</template>


<style scoped>

div#footer{
    display: flex;
    flex-direction: column;
    align-items: center;
}
div#description{
    font-style: italic;
    font-size: 1.5rem;
    width: auto;
}
div#price{
    font-weight: bold;
    font-size: 2rem;
    width: auto;
}
</style>