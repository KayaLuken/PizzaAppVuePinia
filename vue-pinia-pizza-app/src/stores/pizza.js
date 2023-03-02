import { defineStore, createPinia } from 'pinia'

const pinia = createPinia()
export default pinia

const STYLE_PRICES = {
    'Italian': 10,
    'American': 12,
}

const DOUGH_PRICES = {
    'Standard': 0,
    'Wholegrain': 2,
    'Sourdough': 3,
}

const TOPPING_PRICES = {
    'Pepperoni': 1,
    'Mushrooms': 0.5,
    'Onions': 0.5,
    'Sausage': 1,
    'Bacon': 1,
    'Salami': 1,
    'Garlic': 0.5,
    'Paprika': 0.5,
    'Extra cheese': 0.5,
    'Black olives': 0.5,
    'Green peppers': 0.5,
    'Pineapple': 0.5,
    'Spinach': 0.5,
    'tomatoes': 0.25,
}

export const usePizzaStore = defineStore('pizza', {
    state: () => (
        { 
            style: null,
            dough: null,
            toppings: [],
        }
        ),
    getters: {
      description: (state) => {
        if (state.style === null) {
          return 'Custom pizza'
        } else if (state.dough === null) {
          return `${state.style} pizza`
        } else if (state.toppings.length === 0) {
          return `${state.style} ${state.dough.toLowerCase()} pizza`
        } else if (state.toppings.length == 1) {
            return `${state.style} ${state.dough.toLowerCase()} pizza with ${state.toppings[0].toLowerCase()}`
        } else if (state.toppings.length > 1) {
          const initialToppings = state.toppings.slice(0, -1)
          const lastTopping = state.toppings.slice(-1)
          const initialToppingsStr = initialToppings.join(', ').toLowerCase()
          return `${state.style} ${state.dough.toLowerCase()} pizza with ${initialToppingsStr} & ${lastTopping[0].toLowerCase()}`
        }
      },
      price: (state) => {
        let price = 0
        if (state.style === null) {
          return price
        } else if (state.dough === null) {
          price += STYLE_PRICES[state.style]
          return price
        } else if (state.toppings.length === 0) {
          price += STYLE_PRICES[state.style]
          price += DOUGH_PRICES[state.dough]
          return price
        } else if (state.toppings.length > 0) {
          price += STYLE_PRICES[state.style]
          price += DOUGH_PRICES[state.dough]
          state.toppings.forEach(topping => {
            price += TOPPING_PRICES[topping]
          })
          return price
        }
      },
    },
    actions: {
      setStyle(style) {
        this.style = style
      },
      setDough(dough) {
        this.dough = dough
      },
      addTopping(topping) {
        const notFound = this.toppings.indexOf(topping) === -1
        if (notFound) {
          this.toppings.push(topping)
        }
      },
      removeTopping(topping) {
        const index = this.toppings.indexOf(topping)
        if (index > -1) {
          this.toppings.splice(index, 1)
        }
      }
    },
  })