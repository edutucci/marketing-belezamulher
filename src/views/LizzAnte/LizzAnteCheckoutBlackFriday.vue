<template lang="pug">
.bg-black.h-pa-md
  .row.justify-center
    .col-auto.maxsize-title.text-center.text-white
      .text-h4 ESSA É A HORA DE VOCÊ AGIR E CONQUISTAR O CABELO QUE 
        <span style="color: #FFF000;">SEMPRE SONHOU!</span>		

  .row.wrap.justify-center
    .col-auto.bg-white.h-mt-md.h-pr-md.h-pb-md(style="width: 300px")
      .border.border-radius.border-pink500.h-pa-md.text-center
        .text-h4.text-red900.text-bold 60% OFF
        .text-h5.text-red900.h-mt-md.text-bold TRATAMENTO PARA 90 DIAS

        .h-mt-md
        img(src="img/lizzante/kit3.png" style="width: 280px")

        .row.align-items-center.justify-center.text-red900
          .col-auto
            | 12x
          .col-auto.text-h4 R$32,03

        .text-h6.text-red900 (ou R$319 à vista)

        .text-h4.text-red900.text-bold.h-mt-md 9 PRODUTOS
        .text-h4.text-red900.text-bold + 2 BRINDES

        hr.h-mt-sm
        .text-gray.text-bold 03 unidades de Shampoo
        .text-gray.text-bold 03 unidades de Máscara
        .text-gray.text-bold 03 unidades de Tônico Capilar
        .text-gray.text-bold +1 Tônico Capilar (brinde)
        .text-gray.text-bold +1 Shampoo (brinde)
        hr

        .row.justify-center.h-mt-md
          .col-auto
            h-btn(
              rounded
              text="COMPRAR AGORA" text-color="text-white"
              bg-color="bg-yellow700"
              @click="openUrl(models.kit3)"
            )

        .text-h6.text-center.h-mt-md FRETE GRÁTIS

    .col-auto.bg-white.h-mt-md.h-pr-md(style="width: 300px")
      .border.border-radius.border-pink500.h-pa-md.text-center
        .text-h4.text-red900.text-bold 55% OFF
        .text-h5.text-red900.h-mt-md.text-bold TRATAMENTO PARA 60 DIAS

        .h-mt-md
        img(src="img/lizzante/kit2.png" style="width: 280px")

        .row.align-items-center.justify-center.text-red900
          .col-auto
            | 12x
          .col-auto.text-h4 R$22,99

        .text-h6.text-red900 (ou R$229 à vista)

        .text-h4.text-red900.text-bold.h-mt-md 6 PRODUTOS
        .text-h4.text-red900.text-bold + 1 BRINDE

        hr.h-mt-xs
        .text-gray.text-bold 02 unidades de Shampoo
        .text-gray.text-bold 02 unidades de Máscara
        .text-gray.text-bold 02 unidades de Tônico Capilar
        .text-gray.text-bold +1 Tônico Capilar (brinde)
        hr

        .row.justify-center.h-mt-md
          .col-auto
            h-btn(
              rounded
              text="COMPRAR AGORA" text-color="text-white"
              bg-color="bg-yellow700"
              @click="openUrl(models.kit2)"
            )

        .text-h6.text-center.h-mt-md FRETE GRÁTIS

    .col-auto.bg-white.h-mt-md.h-pr-md(style="width: 300px")
      .border.border-radius.border-red900.h-pa-md.text-center
        .text-h4.text-red900.text-bold 45% OFF
        .text-h5.text-red900.h-mt-md.text-bold TRATAMENTO PARA 30 DIAS

        .h-mt-md
          img(src="img/lizzante/kit1.png" style="width: 280px")

        .row.align-items-center.justify-center.text-red900
          .col-auto
            | 12x
          .col-auto.text-h4 R$14,96

        .text-h6.text-red900 (ou R$149 à vista)

        .text-h4.text-red900.text-bold.h-mt-md 3 PRODUTOS
        hr
        .text-gray.text-bold 01 unidade de Shampoo
        .text-gray.text-bold 01 unidade de Máscara
        .text-gray.text-bold 01 unidade de Tônico Capilar
        hr

        .row.justify-center.h-mt-md
          .col-auto
            h-btn(
              rounded
              text="COMPRAR AGORA" text-color="text-white"
              bg-color="bg-yellow700"
              @click="openUrl(models.kit1)"
            )

        .text-h6.text-center.h-mt-md FRETE GRÁTIS

iframe(src="https://app.monetizze.com.br/r/AKG11860451/?u=CA70064" width="100%" height="50px" style="border: none; padding: 0px; display: none;")

</template>

<script>

export default {
  setup () {
    const openUrl = (url) => {
      window.open(url);
    }

    const models = {
      kit1: 'https://app.monetizze.com.br/r/AJV23340536?u=c&pl=JE132223&src=site',
      kit2: 'https://app.monetizze.com.br/r/AJV23340536?u=c&pl=VS132224&src=site',
      kit3: 'https://app.monetizze.com.br/r/AJV23340536?u=c&pl=PR132225&src=site'
    }

    return {
      models,
      openUrl
    }
  },
}

</script>

<style scoped lang="css">

.maxsize-title {
  max-width: 1100px;
}

</style>