<template lang="pug">

.h-pa-lg
  .row.justify-center
    .maxsize-title.col-auto 
      .text-h6.text-center.text-bold.text-purple500 O SEGREDO DAS BLOGUEIRAS

      .h-mt-md.text-body2.text-center.text-bold.text-gray600 COMPROVADO! 97% DAS MULHERES QUE USAM O HIDRALISO SE SENTEM MAIS SEGURAS.

  .h-mt-xl
    .row.wrap.justify-center
      iframe.h-pa-xs.video-item.no-shrink.col-mobile.col-xs-12.col-sm-10.col-md-2.col-lg-2.col-xl-2(width="100%" height="400" src="https://www.youtube.com/embed/r4l3ItmPWrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      iframe.h-pa-xs.video-item.no-shrink.col-mobile.col-xs-12.col-sm-10.col-md-2.col-lg-2.col-xl-2(width="100%" height="400" src="https://www.youtube.com/embed/0vg45MClsvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      iframe.h-pa-xs.video-item.no-shrink.col-mobile.col-xs-12.col-sm-10.col-md-2.col-lg-2.col-xl-2(width="100%" height="400" src="https://www.youtube.com/embed/1PbrvKlMAsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

  .row.justify-center.h-mt-md
    .col-auto
      h-btn(
        rounded
        text="QUERO MEU CABELO LISO" text-color="text-white"
        bg-color="bg-pink500"
        @click="onClickCheckout"
      )
  .row.justify-center.h-mt-md
    .col-auto
      img(src="img/hidraliso/compraseguracinza.png" style="width: 250px")

.h-pa-lg
  .row.justify-center
    .maxsize-title.col-auto 
      .text-h6.text-center.text-bold.text-purple500 BENEFÍCIOS INCOMPARÁVEIS

      .h-mt-md.text-body1.text-center.text-bold.text-gray600 POR QUE SOMOS DIFERENTES?

  .h-mt-md
    .row.wrap.justify-center
      .no-shrink.h-ma-md.border.border-radius.border-purple700.col-mobile.col-xs-12.col-sm-3.col-md-3.col-lg-3.col-xl-2
        .row.justify-center
          .col-auto
            img(src="img/hidraliso/hipoalergenico.png" style="width:130px")
        .row.justify-center.h-pa-md
          .text-body2.text-center.text-bold Sem Componentes Químicos
      .no-shrink.h-ma-md.border.border-radius.border-purple700.col-mobile.col-xs-12.col-sm-3.col-md-3.col-lg-3.col-xl-2
        .row.justify-center
          .col-auto
            img(src="img/hidraliso/prolongado.png" style="width:130px")
        .row.justify-center.h-pa-md
          .text-body2.text-center.text-bold Resultado Prolongado
      .no-shrink.h-ma-md.border.border-radius.border-purple700.col-mobile.col-xs-12.col-sm-3.col-md-3.col-lg-3.col-xl-2
        .row.justify-center
          .col-auto
            img(src="img/hidraliso/cabelo.png" style="width:130px")
        .row.justify-center.h-pa-md
          .text-body2.text-center.text-bold Não Danifica os Fios
      .no-shrink.h-ma-md.border.border-radius.border-purple700.col-mobile.col-xs-12.col-sm-3.col-md-3.col-lg-3.col-xl-2
        .row.justify-center
          .col-auto
            img(src="img/hidraliso/urgente1.png" style="width:130px")
        .row.justify-center.h-pa-md
          .text-body2.text-center.text-bold Efeito Imediato
      .no-shrink.h-ma-md.border.border-radius.border-purple700.col-mobile.col-xs-12.col-sm-3.col-md-3.col-lg-3.col-xl-2
        .row.justify-center
          .col-auto
            img(src="img/hidraliso/dinheiro.png" style="width:130px")
        .row.justify-center.h-pa-md
          .text-body2.text-center.text-bold Sem Gastar Muito
      .no-shrink.h-ma-md.border.border-radius.border-purple700.col-mobile.col-xs-12.col-sm-3.col-md-3.col-lg-3.col-xl-2
        .row.justify-center
          .col-auto
            img(src="img/hidraliso/hand1.png" style="width:130px")
        .row.justify-center.h-pa-md
          .text-body1.text-center.text-bold Sem Prejudicar a Saúde
  
  .row.justify-center.h-mt-md
    .col-auto
      h-btn(
        rounded
        text="QUERO MEU CABELO LISO" text-color="text-white"
        bg-color="bg-pink500"
        @click="onClickCheckout"
      )
  .row.justify-center.h-mt-md
    .col-auto
      img(src="img/hidraliso/compraseguracinza.png" style="width: 250px")

.h-pa-lg
  .row.justify-center
    .maxsize-title.col-auto 
      .text-h6.text-center.text-bold.text-purple500 RESULTADO NA PRIMEIRA APLICAÇÃO

      .h-mt-md.text-body1.text-center.text-bold.text-gray600 TRANSFORMAÇÃO REAL, com resultados surpreendentes

  .h-mt-md
    .row.wrap.justify-center
      .no-shrink.h-ma-md.col-mobile.col-xs-12.col-sm-5.col-md-3.col-lg-3.col-xl-2
        .row.justify-center
          .col-auto
            img(src="img/hidraliso/resultado1.png" style="width:100%")

      .no-shrink.h-ma-md.col-mobile.col-xs-12.col-sm-5.col-md-3.col-lg-3.col-xl-2
        .row.justify-center
          .col-auto
            img(src="img/hidraliso/resultado2.png" style="width:100%")

  .h-mt-md
    .row.wrap.justify-center
      iframe.h-pa-xs.video-item.no-shrink.col-mobile.col-xs-12.col-sm-10.col-md-2.col-lg-2.col-xl-2(width="100%" height="400" src="https://www.youtube.com/embed/HyKrJHG9wx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      iframe.h-pa-xs.video-item.no-shrink.col-mobile.col-xs-12.col-sm-10.col-md-2.col-lg-2.col-xl-2(width="100%" height="400" src="https://www.youtube.com/embed/XShvfCS4c18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

div(:style="models.bgr1")
  .row.justify-center
    .maxsize-title.col-auto.text-white.h-pa-lg 
      .text-h6.text-center.text-bold COMPOSIÇÃO E ATIVOS DO HIDRALISO

      .h-mt-md.text-body1.text-center ÚNICA FÓRMULA NO MUNDO QUE HIDRATA ENQUANTO ALISA

  .h-mt-md
    .row.wrap.justify-center
      iframe.h-pa-xs.video-item.no-shrink.col-mobile.col-xs-12.col-sm-10.col-md-2.col-lg-2.col-xl-2(width="100%" height="400" src="https://www.youtube.com/embed/MF44Wdfifb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

  .row.h-pa-md.text-white
    .col-auto
      .row
        .col-auto
          h-icon(icon="fas fa-check-circle" text-color="text-white")
        .h-ml-sm.col.text-left.text-caption.text-bold
          | O Hidraliso é o único produto que possui um blend de ativos capaz de realinhar a fibra capilar, deixando as cutículas dos fios protegidas e seladas eliminando danos ou frizz.

  .row.h-pa-md.text-white
    .col-auto
      .row
        .col-auto
          h-icon(icon="fas fa-check-circle" text-color="text-white")
        .h-ml-sm.col.text-left.text-caption.text-bold
          | Nossa fórmula contém um composto Hidralisado condicionante que hidrata intensamente, dando emoliência, leveza e maciez, tratando os fios de dentro para fora. 

  .row.h-pa-md.text-white
    .col-auto
      .row
        .col-auto
          h-icon(icon="fas fa-check-circle" text-color="text-white")
        .h-ml-sm.col.text-left.text-caption.text-bold
          | Possui o poder das algas aumentam 550 vezes o poder antioxidante da vitamina E. Possui ferro, ômega 3 e 6 que reduz as toxinas e combate o afinamento dos fios.

  .row.h-pa-md.text-white
    .col-auto
      .row
        .col-auto
          h-icon(icon="fas fa-check-circle" text-color="text-white")
        .h-ml-sm.col.text-left.text-caption.text-bold
          | Possui também ativos com base de Gengibre que tem o poder anti-inflamatório e antifúngico. Ajuda na vaso dilatação, aumentando a circulação de oxigênio e nutrientes até o couro cabeludo.

  .row.justify-center.h-mt-md
    .col-auto
      h-btn(
        rounded
        text="QUERO MEU CABELO LISO" text-color="text-white"
        bg-color="bg-pink500"
        @click="onClickCheckout"
      )
  .row.justify-center.h-mt-md
    .col-auto
      img(src="img/hidraliso/comprasegurabranca.png" style="width: 250px")

</template>

<script>

import { reactive } from 'vue'
import HidralisoCheckout from './HidralisoCheckout.vue'

export default {
  components:{
    HidralisoCheckout
  },
  setup (props, context) {
    const models = reactive({
      path: document.location.origin,
      bgheadersm: '/img/hidraliso/bg-header.png',
      bgr1: {
        'background': 'url(/img/hidraliso/bg-reapeat1.png)'
      },
      whatsapp: 'https://api.whatsapp.com/send?phone=5516992369369&text=Ol%C3%A1%20vim%20do%20site%20do%20Hidraliso%20e%20gostaria%20de%20atendimento'
    })

    const onClickCheckout = () => {
      context.emit('onClickCheckout')
    }

    return {
      models,
      onClickCheckout
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