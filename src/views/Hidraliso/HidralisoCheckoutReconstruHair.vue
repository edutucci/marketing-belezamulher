<template lang="pug">
.h-pa-md
  .row.justify-center
    .maxsize-title.col-auto 
      .text-h5.text-center.text-bold.text-purple500 ESCOLHA O MELHOR PARA VOCÊ.

      .h-mt-md.text-body2.text-center.text-bold.text-gray600 ESCOLHA sua oferta COM PRODUTOS GRÁTIS e receba EM CASA COM FRETE GRÁTIS.

  .row.wrap.justify-center
    .col-auto.h-mt-md(style="width: 230px")
      .border.border-radius.border-pink500.h-pa-md.text-center
        .text-h4.text-purple500.text-bold 1 FRASCO
        .text-h5.text-purple500.text-bold LEVE GŔATIS

        .text-h6.text-center.text-purple500.h-mt-md.text-bold 1 RECONSTRUHAIR

        .text-h5.text-purple500.h-mt-md.text-bold + 3 EBOOKS EXCLUSIVOS

        .h-mt-md
          img(src="img/hidraliso/1pmaes.png" style="width: 200px")

        .row.align-items-center.justify-center.text-purple500
          .col-auto
            | 12x
          .col-auto.text-h4 R$14,76

        .text-h6.text-purple500 (ou R$147 à vista)

        .row.justify-center.h-mt-md
          .col-auto
            h-btn(
              rounded
              text="COMPRAR AGORA" text-color="text-white"
              bg-color="bg-pink500"
              @click="openUrl(models.kit1p)"
            )

        .text-h6.text-center.h-mt-md FRETE GRÁTIS

    .col-auto.h-mt-md(style="width: 250px")
      .border.border-radius.border-pink500.h-pa-md.text-center
        .text-h4.text-purple500.text-bold 2 FRASCOS
        .text-h5.text-purple500.text-bold LEVE GŔATIS

        .text-h6.text-center.text-purple500.h-mt-md.text-bold 1 HIDRALISO
        .text-h6.text-center.text-purple500.h-mt-md.text-bold + 1 RECONSTRUHAIR

        .text-h5.text-purple500.h-mt-md.text-bold + 3 EBOOKS EXCLUSIVOS

        .h-mt-md
          img(src="img/hidraliso/2pmaes.png" style="width: 200px")

        .row.align-items-center.justify-center.text-purple500
          .col-auto
            | 12x
          .col-auto.text-h4 R$19,78

        .text-h6.text-purple500 (ou R$197 à vista)

        .row.justify-center.h-mt-md
          .col-auto
            h-btn(
              rounded
              text="COMPRAR AGORA" text-color="text-white"
              bg-color="bg-pink500"
              @click="openUrl(models.kit2p)"
            )

        .text-h6.text-center.h-mt-md FRETE GRÁTIS

    .col-auto.h-mt-md(style="width: 250px")
      .border.border-radius.border-pink500.h-pa-md.text-center
        .text-h4.text-purple500.text-bold 3 FRASCOS
        .text-h5.text-purple500.text-bold LEVE GŔATIS

        .text-h6.text-center.text-purple500.h-mt-md.text-bold 1 HIDRALISO
        .text-h6.text-center.text-purple500.h-mt-md.text-bold + 1 RECONSTRUHAIR

        .text-h5.text-purple500.h-mt-md.text-bold + 3 EBOOKS EXCLUSIVOS

        .h-mt-md
          img(src="img/hidraliso/3pmaes.png" style="width: 200px")

        .row.align-items-center.justify-center.text-purple500
          .col-auto
            | 12x
          .col-auto.text-h4 R$24,80

        .text-h6.text-purple500 (ou R$247 à vista)

        .row.justify-center.h-mt-md
          .col-auto
            h-btn(
              rounded
              text="COMPRAR AGORA" text-color="text-white"
              bg-color="bg-pink500"
              @click="openUrl(models.kit3p)"
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
      kit1p: 'https://app.monetizze.com.br/r/AKG11860451?u=c&pl=UK210310&src=site',
      kit2p: 'https://app.monetizze.com.br/r/AKG11860451?u=c&pl=CS210311&src=site',
      kit3p: 'https://app.monetizze.com.br/r/AKG11860451?u=c&pl=LJ210312&src=site'
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