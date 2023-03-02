<script>
export default{
    watch: {
        $route(to, from) {
            if(to.name === 'home'){
                this.showSteps = false
            } else if(to.name === 'pizzastyles'){
                this.showSteps = true
                this.currentStep = 0
            } else if(to.name === 'dough'){
                this.showSteps = true
                this.currentStep = 1
            } else if(to.name === 'toppings'){
                this.showSteps = true
                this.currentStep = 2
            } else if(to.name === 'checkout'){
                this.showSteps = true
                this.currentStep = 3
            }
        },
    },
    data(){
        return{
            steps: ['Style','Dough', 'Toppings', 'Checkout'],
            currentStep: null,
            showSteps: false
        }
    }
}


</script>

<template>
    <div id="stepProgress" v-if="showSteps">
        <step-progress           
            :steps="steps"
          passive-color="#b5b5b5"
          active-color="#23d160"
          :passive-thickness="5"
          :active-thickness="5"
          :line-thickness="5"
          :current-step="currentStep"
          icon-class="fa fa-check">
        
        </step-progress>
    </div>
</template>

<style>
#stepProgress{
    width: auto;
}
</style>