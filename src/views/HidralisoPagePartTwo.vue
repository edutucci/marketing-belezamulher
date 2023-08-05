<template lang="pug">
.row.justify-center
  .maxsize-title.col-auto
    .bg-purple500.text-white.h-pa-md
      .text-h6.text-center.text-bold RECEBA AINDA

      .text-h6.text-center.text-bold.bg-pink500 3 SUPER EBOOKS GRÁTIS

      .h-mt-md.text-body1.text-center.text-bold DICAS SECRETAS PARA MANTER SEUS CABELOS AINDA MAIS LINDOS!

.row.wrap.justify-center
  .col-auto.h-pa-sm
    .h-mt-md.text-center
      img(src="img/hidraliso/ebook1.png" style="width: 240px")
  .col-auto.h-pa-sm
    .h-mt-md.text-center
      img(src="img/hidraliso/ebook2.png" style="width: 240px")
  .col-auto.h-pa-sm
    .h-mt-md.text-center
      img(src="img/hidraliso/ebook3.png" style="width: 240px")

div(:style="models.bgr1")
  .h-mt-md.text-center
    img(src="img/hidraliso/garantia.png" style="width: 280px")

  .h-mt-md.text-h6.text-center.text-bold.bg-white.text-purple500 SATISFAÇÃO GARANTIDA OU SEU DINHEIRO DE VOLTA!

  .maxsize-title.h-pa-md.text-center.text-body1.text-white Acreditamos tanto na fórmula do nosso produto, que criamos o Desafio 30 Dias HIDRALISO. Na compra de qualquer kit você já estará participando do desafio.  Caso não tenha resultados visíveis na primeira aplicação, nós devolvemos seu dinheiro. É a certeza que somente o produto número 1 de vendas no Brasil pode oferecer.

  .row.justify-center.h-pa-md
    .col-auto
      h-btn(
        rounded
        text="ACEITO O DESAFIO" text-color="text-white"
        bg-color="bg-pink500"
        @click="onClickCheckout"
      )

.bg-gray800
  .row.wrap.justify-center.text-white
    .h-pa-md.no-shrink.col-xs-12.col-sm-5.col-md-4.col-lg-4.col-xl-3
      .text-h5.text-center.h-mt-md LINKS ÚTEIS

      .cursor-pointer.text-h6.text-center.h-mt-md(
        @click="openUrl('https://hidraliso.com.br/reembolso/')"
      ) 
        | Reembolso

      .cursor-pointer.text-h6.text-center.h-mt-md(
        @click="openUrl('https://hidraliso.com.br/politica-de-privacidade/')"
      ) 
        | Política de Privacidade

      .cursor-pointer.text-h6.text-center.h-mt-md(
        @click="openUrl('https://hidraliso.com.br/prazo-de-entrega/')"
      ) 
        | Prazo de Entrega

      .cursor-pointer.text-h6.text-center.h-mt-md(
        @click="openUrl('https://hidraliso.com.br/termos-e-condicoes/')"
      ) 
        | Termos e Condições

      .h-mt-md.text-center
        img(src="img/hidraliso/siteblindado.png" style="width: 250px")

    .h-pa-md.no-shrink.col-xs-12.col-sm-5.col-md-2.col-lg-2.col-xl-2
      .text-h6.text-center.h-mt-md CONTATO

      .row.justify-center.h-pa-md
        .col-auto
          h-btn(
            rounded
            text="RASTREAR PEDIDO" text-color="text-white"
            bg-color="bg-pink500"
            @click="openUrl('https://cademeupedido.log.br/?t=VmFuZ3VhcmRhCg==')"
          )

      .row.justify-center.h-pa-md
        .col-auto
          h-btn(
            rounded
            text="ATENDIMENTO" text-color="text-white"
            bg-color="bg-pink500"
            @click="openUrl(models.whatsapp)"
          )

  .h-pa-md.text-center.text-white A garantia estendida de 30 dias só pode ser acionada através de compras realizadas neste site oficial. Não compre falsificações, pode colocar a sua saúde em risco. Garanta um produto de qualidade comprando apenas do site original.

  iframe(src="https://app.monetizze.com.br/r/AKG11860451/?u=CA70064" width="100%" height="50px" style="border: none; padding: 0px; display: none;")

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