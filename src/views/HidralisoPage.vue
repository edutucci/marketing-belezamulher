<template lang="pug">
h-page

  .h-pos-abs-br(style="z-index: 100; right: 10px; bottom: 10px")
    h-btn(
        fab
        size="lg"
        text-color="text-white"
        bg-color="bg-green700"
        @click="openUrl(models.whatsapp)"
      )
        h-icon(icon="fab fa-whatsapp" text-color="text-white" size="32px")

  .bg-pink500
    .row.justify-center
      .maxsize-title.col-auto.text-white.h-pa-lg 
        .text-h6.text-center.text-bold Parabéns! Você GANHOU PRODUTOS GRÁTIS na escolha da sua oferta!

        //- .h-mt-md.text-h6.text-center PROMOÇÃO VÁLIDA ENQUANTO DURAR O ESTOQUE!

  div(:style="models.bgr1")
    .row.justify-center
      .col-auto
        img(:src="models.bgheadersm" style="max-width:1100px")

    .row.justify-center.h-mt-md
      .col-auto
        h-btn(
          rounded
          text="QUERO MEU CABELO LISO" text-color="text-white"
          bg-color="bg-pink500"
          @click="goToDiv('prices')"
        )

    .row.h-mt-md
      .maxsize-title.col-auto.text-white.h-pa-lg
        .text-h5.text-center.text-bold Resultado de Salão em Casa! Fórmula Exclusiva Que Alisa e Hidrata Naturalmente os Fios em Minutos com 5X Mais Brilho.
        
        .h-mt-md.text-h6.text-center O Mais Vendido do Brasil! Único com Composto Hidrolisado Importado!
        
        .row.h-mt-lg
          .col-auto
            .row
              .col-auto
                h-icon(icon="fas fa-check" text-color="text-white")
              .h-ml-sm.col.text-left.text-caption.text-bold
                | Sem Formol
            .row
              .col-auto
                h-icon(icon="fas fa-check" text-color="text-white")
              .h-ml-sm.col.text-left.text-caption.text-bold
                | Cabelos Lisos e Hidratados Na Primeira Aplicação
            .row
              .col-auto
                h-icon(icon="fas fa-check" text-color="text-white")
              .h-ml-sm.col.text-left.text-caption.text-bold
                | Não Desbota e Não Amarela os Fios
            .row
              .col-auto
                h-icon(icon="fas fa-check" text-color="text-white")
              .h-ml-sm.col.text-left.text-caption.text-bold
                | Compatível com Qualquer Química
            .row
              .col-auto
                h-icon(icon="fas fa-check" text-color="text-white")
              .h-ml-sm.col.text-left.text-caption.text-bold
                | Aplicação Rápida e Fácil
            .row
              .col-auto
                h-icon(icon="fas fa-check" text-color="text-white")
              .h-ml-sm.col.text-left.text-caption.text-bold
                | Efeito de Longa Duração

  HidralisoPagePartOne(
    @onClickCheckout="onClickCheckout"
  )

  div(ref="prices")
    HidralisoCheckout

  HidralisoPagePartTwo(
    @onClickCheckout="onClickCheckout"
  )

</template>

<script>

import { reactive } from 'vue'
import HidralisoPagePartOne from './HidralisoPagePartOne.vue'
import HidralisoCheckout from './HidralisoCheckout.vue'
import HidralisoPagePartTwo from './HidralisoPagePartTwo.vue'

export default {
  components:{
    HidralisoPagePartOne,
    HidralisoCheckout,
    HidralisoPagePartTwo
  },
  setup () {
    const models = reactive({
      path: document.location.origin,
      bgheadersm: '/img/hidraliso/bg-header.png',
      bgr1: {
        'background': 'url(/img/hidraliso/bg-reapeat1.png)'
      },
      whatsapp: 'https://api.whatsapp.com/send?phone=5516992369369&text=Ol%C3%A1%20vim%20do%20site%20do%20Hidraliso%20e%20gostaria%20de%20atendimento'
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

<style scoped lang="css">

.maxsize-title {
  max-width: 1100px;
}

.video-item {
  max-width: 700px;
  min-width: 240;
  min-height: 240px;
}

.bkblue {
  background-color: #9accee;
}

</style>