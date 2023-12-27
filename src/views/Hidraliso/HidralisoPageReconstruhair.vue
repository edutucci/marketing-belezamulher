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
        .text-h6.text-center.text-bold Parabéns! Escolha sua oferta e receba GRÁTIS um Reconstruhair!

        .h-mt-md.text-h6.text-center PROMOÇÃO VÁLIDA ENQUANTO DURAR O ESTOQUE!

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

    .row
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
    
        .row.justify-center.h-mt-md
          .col-auto
            h-btn(
              rounded
              text="QUERO MEU CABELO LISO" text-color="text-white"
              bg-color="bg-pink500"
              @click="goToDiv('prices')"
            )

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
          @click="goToDiv('prices')"
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
          @click="goToDiv('prices')"
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

    .row.h-pa-lg.text-white
      .col-auto
        .row
          .col-auto
            h-icon(icon="fas fa-check-circle" text-color="text-white")
          .h-ml-sm.col.text-left.text-caption.text-bold
            | O Hidraliso é o único produto que possui um blend de ativos capaz de realinhar a fibra capilar, deixando as cutículas dos fios protegidas e seladas eliminando danos ou frizz.

    .row.h-pa-lg.text-white
      .col-auto
        .row
          .col-auto
            h-icon(icon="fas fa-check-circle" text-color="text-white")
          .h-ml-sm.col.text-left.text-caption.text-bold
            | Nossa fórmula contém um composto Hidralisado condicionante que hidrata intensamente, dando emoliência, leveza e maciez, tratando os fios de dentro para fora. 

    .row.h-pa-lg.text-white
      .col-auto
        .row
          .col-auto
            h-icon(icon="fas fa-check-circle" text-color="text-white")
          .h-ml-sm.col.text-left.text-caption.text-bold
            | Possui o poder das algas aumentam 550 vezes o poder antioxidante da vitamina E. Possui ferro, ômega 3 e 6 que reduz as toxinas e combate o afinamento dos fios.

    .row.h-pa-lg.text-white
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
          @click="goToDiv('prices')"
        )
    .row.justify-center.h-mt-md
      .col-auto
        img(src="img/hidraliso/comprasegurabranca.png" style="width: 250px")

  div(ref="prices")
    HidralisoChechoutReconstruHair

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
          @click="goToDiv('prices')"
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
import HidralisoChechoutReconstruHair from './HidralisoCheckoutReconstruHair.vue'

export default {
  components:{
    HidralisoChechoutReconstruHair
  },
  setup () {
    const models = reactive({
      path: document.location.origin,
      bgheadersm: '/img/hidraliso/bg-header-reconstruhair-brinde.png',
      bgr1: {
        'background': 'url(/img/hidraliso/bg-reapeat1.png)'
      },
      whatsapp: 'https://api.whatsapp.com/send?phone=5516992369369&text=Ol%C3%A1%20vim%20do%20site%20do%20Hidraliso%20e%20gostaria%20de%20atendimento'
    })

    return {
      models
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