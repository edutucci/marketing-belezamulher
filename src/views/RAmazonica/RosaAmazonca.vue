<template lang="pug">
.h-pos-abs-br(style="z-index: 100; right: 10px; bottom: 10px")
  h-btn(
      fab
      size="lg"
      text-color="text-white"
      bg-color="bg-green700"
      @click="openUrl(models.whatsapp)"
    )
      h-icon(icon="fab fa-whatsapp" text-color="text-white" size="32px")

iframe(src="https://app.monetizze.com.br/r/AHX23164392" width="100%" height="100%" style="border: none; padding: 0px; display: block;")
</template>

<script>

import { reactive } from 'vue'
export default {
  components:{
  },
  setup () {
    const models = reactive({
      whatsapp: 'https://api.whatsapp.com/send?phone=5516992369369&text=Ol%C3%A1%20vim%20do%20site%20do%20RosaAmazonica%20e%20gostaria%20de%20atendimento'
    })


    return {
      models,
    }
  },
  methods: {
    openUrl(url) {
      window.open(url);
    },
    goToDiv(refName) {
      // console.log('goToElement: ', refName);
      const element = this.$refs[refName];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    onClickCheckout() {
      this.goToDiv('prices')
    }
  },
}

</script>