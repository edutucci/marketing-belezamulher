<template lang="pug">
.row.justify-center.align-items-center(style="height:calc(100vh - 100px)")
  .col-auto.text-center.h-mt-md
    img(src="/img/site/imgtudocerto.png")

    .text-h5.text-center.text-gray700.text-bold.h-mt-xl
      | Tudo certo!

    .text-h6.text-center.text-gray700.h-mt-md
      | Clique em continuar para ser direcionado para a página solicitada.

    .row.justify-center.h-mt-xl
      .col-auto
        h-btn(
          rounded
          text-color="text-white"
          bg-color="bg-green700"
          @click="onBtnClick"
        )
          .text-h5.text-center CONTINUAR
</template>

<script>
export default {
  methods: {
    onBtnClick() {
      this.$emit('click');
    },
  },
};
</script>
