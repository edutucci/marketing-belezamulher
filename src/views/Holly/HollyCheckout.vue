<template lang="pug">
h-page()
  .row.justify-center.bg-purple700.text-white.h-pa-md
    .col-auto(style="max-width: 1100px;")
      .text-h4.text-center ÚLTIMAS HORAS! Até 75% OFF + BRINDES!

  .row.justify-center.overlay-dark-purple.text-white.h-pa-md
    .col-auto(style="max-width: 1100px;")
      .text-h4.text-center Para quem quer <span style="color: #D62F65;">cabelos lindos e saudáveis</span>
      .text-body1.text-center.text-bold Hollywood Hair é o mais poderoso suplemento para tratamento capilar que você já viu! Agora é possível ter cabelos lindos, saudáveis e brilhantes sem dores de cabeças com tratamentos complexos e lentos.

  .h-pa-md
  .row.justify-center
    .col-mobile.col-xs-12.col-sm-6.col-md-5.col-lg-4.col-xl-3
      img(src="img/hollyhair/kit3meses.png" style="width:100%")

  .row.justify-center
    .col-auto.text-white
      h-btn(
          rounded
          size="lg"
          text-color="text-white"
          bg-color="bg-purple700"
          style="width: 280px"
          @click="goToDiv('prices')"
        )
          .text-h5.text-center ESCOLHA SEU KIT ABAIXO

  .row.wrap.justify-around.align-items-center.h-pa-md.h-mt-xl.bg-white(ref="prices")
    .no-shrink.col-mobile.col-xs-12.col-sm-9.col-md-3.col-lg-3.col-xl-2.h-mb-md.h-pa-xs
      h-card.bg-purpleA100(style="width:100%")
        h-card-section.text-center.text-white.h-pa-md
          .text-h5.text-bold KIT 1 MÊS
          .text-h5.text-bold 40% DE DESCONTO
          img(
            src="img/hollyhair/kit1mes.png" alt=""
            style="width:100%"
          )

          p.text-bold De R$ 166,90 por apenas:

          .text-h4.text-bold R$ 99,99

        h-card-actions.text-center
          h-btn(
            rounded
            text="COMPRAR AGORA" text-color="text-white"
            bg-color="bg-purple700"
            @click="openUrl(kit1mes)"
          )
        h-card-section
          .h-mt-md.text-center
            img(src="img/happyhair/comprasegurabranca.png" style="width: 100%")

    .no-shrink.col-mobile.col-xs-12.col-sm-9.col-md-3.col-lg-3.col-xl-2.h-mb-md.h-pa-xs
      h-card.bg-purple700(style="width:100%")
        h-card-section.text-center.text-white.text-bold.h-pa-md
          .row.justify-center
            .h-pa-md.col-auto.text-h6.bg-purple200.text-bold.border-radius
              | MAIS VENDIDO
          .text-h5.text-bold.h-mt-md KIT 6 MESES
          .text-h5.text-bold 78% DE DESCONTO
          img(
            src="img/hollyhair/kit6meses.png" alt=""
            style="width:100%"
          )

          p.text-bold De R$ 899,94 por apenas:

          .text-h4.text-bold R$ 224,99

        h-card-actions.text-center
          h-btn(
            rounded
            text="COMPRAR AGORA" text-color="text-white"
            bg-color="bg-pink400"
            @click="openUrl(kit6meses)"
          )

        h-card-section
          .h-mt-md.text-center
            img(src="img/happyhair/comprasegurabranca.png" style="width: 100%")

    .no-shrink.col-mobile.col-xs-12.col-sm-9.col-md-3.col-lg-3.col-xl-2.h-mb-md.h-pa-xs
      h-card.bg-purpleA100(style="width:100%")
        h-card-section.text-center.text-white.text-bold.h-pa-md
          .text-h5.text-bold.h-mt-md KIT 3 MESES
          .text-h5.text-bold 75% DE DESCONTO
          img(
            src="img/hollyhair/kit3meses.png" alt=""
            style="width:100%"
          )

          p.text-bold De R$ 449,97 por apenas:

          .text-h4.text-bold R$ 149,99

        h-card-actions.text-center
          h-btn(
            rounded
            text="COMPRAR AGORA" text-color="text-white"
            bg-color="bg-purple700"
            @click="openUrl(kit3meses)"
          )

        h-card-section
          .h-mt-md.text-center
            img(src="img/happyhair/comprasegurabranca.png" style="width: 100%")

  iframe(src="https://app.monetizze.com.br/r/AXY20769619" width="100%" height="50px" style="border: none; padding: 0px; display: none")

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HollywoodHairCheckout',
  components: {
  },
  data() {
    return {
      kit1mes: 'https://app.monetizze.com.br/r/BBX1519729?src=site',
      kit3meses: 'https://app.monetizze.com.br/r/BTD1519730?src=site',
      kit6meses: 'https://app.monetizze.com.br/r/BTX1519732?src=site',
    };
  },
  mounted() {
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
};
</script>

<style scoped>
.img-header {
  max-height: 400px;
}

.product-card {
  width: 280px;
}

.overlay-light-purple {
  background-image: linear-gradient(180deg, #d698e6 100%, #aa4daa 100%);
  opacity: 0.95;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  background-color: transparent;
}

.overlay-dark-purple {
  background-image: linear-gradient(180deg, #4e1f4e 100%, #977493 100%);
  opacity: 0.95;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  background-color: transparent;
}

</style>
