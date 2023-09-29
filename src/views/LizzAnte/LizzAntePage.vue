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

  RSPage(
    @click="onRSPageClick"
  )

</template>

<script>

import { reactive } from 'vue'
import RSPage from '../RSPage'

export default {
  components:{
    RSPage
  },
  setup () {
    const models = reactive({
      path: document.location.origin,
      whatsapp: 'https://api.whatsapp.com/send?phone=5516992369369&text=Ol%C3%A1%20vim%20do%20site%20do%20LizzAnte%20e%20gostaria%20de%20atendimento'
    })

    const openUrl = (url) => {
      window.open(url);
    }

    const onRSPageClick = () => {
      openUrl('https://app.monetizze.com.br/r/AJV23340536?src=site')
    }


    return {
      models,
      onRSPageClick
    }
  }
}

</script>
