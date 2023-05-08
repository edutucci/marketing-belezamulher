<template lang="pug">
h-page()
  .h-pos-abs-br(style="z-index: 100; right: 10px; bottom: 10px")
    h-btn(
        fab
        size="lg"
        text-color="text-white"
        bg-color="bg-green700"
        @click="openUrl(whatsapp)"
      )
        h-icon(icon="fab fa-whatsapp" text-color="text-white" size="32px")

  .row.justify-center.bg-purple700.text-white.h-pa-md
    .col-auto(style="max-width: 1100px;")
      .text-h4.text-center ÚLTIMAS HORAS! Até 75% OFF + BRINDES!

  .row.justify-center.overlay-dark-purple.text-white.h-pa-md
    .col-auto(style="max-width: 1100px;")
      .text-h4.text-center Para quem quer <span style="color: #D62F65;">cabelos lindos e saudáveis</span>
      .text-body1.text-center.text-bold Hollywood Hair é o mais poderoso suplemento para tratamento capilar que você já viu! Agora é possível ter cabelos lindos, saudáveis e brilhantes sem dores de cabeças com tratamentos complexos e lentos.

  .h-pa-md
    .row.justify-center
      .col-auto(style="max-width: 1100px;")
        .row.wrap.justify-center.align-items-center
          .text-center.col-mobile.col-xs-12.col-sm-6.col-md-5.col-lg-4.col-xl-3
            img(src="img/hollyhair/kit3meses.png" style="width:100%")
          .text-center.col-mobile.col-xs-12.col-sm-6.col-md-5.col-lg-4.col-xl-3
            .row.justify-center.h-mt-md
              .col-auto
                .row.h-mt-sm.justify-center
                  .col-auto
                    h-icon(icon="fas fa-check-circle" text-color="text-purple700")
                  .col.text-left.h-pl-sm.text-bold
                    | Crescimento até 6X mais rápido
                .row.h-mt-sm.justify-center
                  .col-auto
                    h-icon(icon="fas fa-check-circle" text-color="text-purple700")
                  .col.text-left.h-pl-sm.text-bold
                    | Diminui em até 95% a queda
                .row.h-mt-sm.justify-center
                  .col-auto
                    h-icon(icon="fas fa-check-circle" text-color="text-purple700")
                  .col.text-left.h-pl-sm.text-bold
                    | Fortalece as suas unhas
                .row.h-mt-sm.justify-center
                  .col-auto
                    h-icon(icon="fas fa-check-circle" text-color="text-purple700")
                  .col.text-left.h-pl-sm.text-bold
                    | Fios mais Macios, Fortes e Resistentes
                .row.h-mt-sm.justify-center
                  .col-auto
                    h-icon(icon="fas fa-check-circle" text-color="text-purple700")
                  .col.text-left.h-pl-sm.text-bold
                    | Auxilia no Crescimento dos Cílios
                .row.h-mt-sm.justify-center
                  .col-auto
                    h-icon(icon="fas fa-check-circle" text-color="text-purple700")
                  .col.text-left.h-pl-sm.text-bold
                    | Potencializado com Silício Inteligente
                .row.h-mt-sm.justify-center
                  .col-auto
                    h-icon(icon="fas fa-check-circle" text-color="text-purple700")
                  .col.text-left.h-pl-sm.text-bold
                    | Cabelos saudáveis e brilhantes
                .row.h-mt-sm.justify-center
                  .col-auto
                    h-icon(icon="fas fa-check-circle" text-color="text-purple700")
                  .col.text-left.h-pl-sm.text-bold
                    | Recuperação de danos externos
                .row.h-mt-sm.justify-center
                  .col-auto
                    h-icon(icon="fas fa-check-circle" text-color="text-purple700")
                  .col.text-left.h-pl-sm.text-bold
                    | Melhores vitaminas e minerais

        .row.justify-center.h-mt-md
          .col-auto
            h-btn(
              rounded
              text-color="text-white"
              bg-color="bg-purple700"
              @click="goToDiv('prices')"
            )
              .text-h5.text-center Quero Cabelos e Unhas Lindas Agora
        .row.justify-center.h-mt-md
          .col-auto
            img(src="img/hollyhair/compraseguracinza.png" style="width: 250px")

  .overlay-light-purple.text-black.h-pa-md
    .row.justify-center
      .text-center.col-mobile.col-xs-12.col-sm-6.col-md-4.col-lg-4.col-xl-3
        img(src="img/hollyhair/meninaholly.png" style="width:100%")
    .text-center.text-h5 Por que escolher o
    .text-center.text-h2 Hollywood <span style="color: #D62F65;">Hair</span>?
    .row.justify-center
      .text-center.text-h6(style="max-width: 80%") Hollywood Hair é muito mais do que um simples suplemento com vitaminas para o cabelo. Ele possui o mineral mais importante para a beleza dos cabelos e das unhas: o 'Silício Inteligente', conhecido como o 'mineral da beleza'.
    .row.justify-center.h-mt-md
      .text-center.text-h6(style="max-width: 80%") Com ele, você se livra rapidamente da queda capilar, terá o crescimento dos fios acelerado, cabelos fortes, saudáveis e muito mais brilhantes! Hollywood Hair é maravilhoso pois ele age de dentro para fora, sendo indicado para qualquer tipo de cabelo!

    .row.justify-center.h-mt-md
      .col-auto
        h-btn(
          rounded
          text-color="text-white"
          bg-color="bg-purple700"
          @click="goToDiv('prices')"
        )
          .text-h5.text-center Experimente Agora

    .row.justify-center.h-mt-md
      .col-auto
        img(src="img/hollyhair/compraseguracinza.png" style="width: 250px")

  .column.text-center.overlay-dark-purple.h-pa-lg
    .text-h5.text-white.text-bold E resultados? Será que tem?
    .text-h3.text-white.text-bold Antes X <span class="text-bold" style="color: #D62F65;">Depois</span>

    .col.h-mt-lg
      .row.wrap.justify-center
        .no-shrink.col-mobile.col-xs-6.col-sm-6.col-md-6.col-lg-3.col-xl-2
          img(
            src="img/hollyhair/antesdepois1.png" alt=""
            style="width:100%"
          )
        .no-shrink.col-mobile.col-xs-6.col-sm-6.col-md-6.col-lg-3.col-xl-2
          img(
            src="img/hollyhair/antesdepois2.png" alt=""
            style="width:100%"
          )
        .no-shrink.col-mobile.col-xs-6.col-sm-6.col-md-6.col-lg-3.col-xl-2
          img(
            src="img/hollyhair/antesdepois3.png" alt=""
            style="width:100%"
          )
        .no-shrink.col-mobile.col-xs-6.col-sm-6.col-md-6.col-lg-3.col-xl-2
          img(
            src="img/hollyhair/antesdepois4.png" alt=""
            style="width:100%"
          )

    .h-pa-xl

    .text-h5.text-white.text-bold O suplemento mais completo e eficaz
    .text-h3.text-white.text-bold A magia do <span style="color: #D62F65;">Hollywood Hair</span>
    .text-h6.text-white.text-bold.h-mt-md Não importa qual seja o tipo do seu cabelo, Hollywood Hair é o que ele precisa!

    .row.wrap.justify-center.text-white.h-mt-md
      .no-shrink.col-mobile.col-xs-12.col-sm-4.col-md-4.col-lg-4.col-xl-2.h-mt-md.h-mb-md
        h-image.border.border.border-indigo400.border-rounded.border-2(avatar src="img/hollyhair/magia1.png" size="250px")
        .text-h5.text-center Diminuição da Queda em até 95%
      .no-shrink.col-mobile.col-xs-12.col-sm-4.col-md-4.col-lg-4.col-xl-2.h-mt-md.h-mb-md
        h-image.border.border.border-indigo400.border-rounded.border-2(avatar src="img/hollyhair/magia2.png" size="250px")
        .text-h5.text-center Crescimento até 6x Mais Rápido
      .no-shrink.col-mobile.col-xs-12.col-sm-4.col-md-4.col-lg-4.col-xl-2.h-mt-md.h-mb-md
        h-image.border.border.border-indigo400.border-rounded.border-2(avatar src="img/hollyhair/magia3.png" size="250px")
        .text-h5.text-center FIOS MAIS MACIOS, FORTES E RESISTENTES
      .no-shrink.col-mobile.col-xs-12.col-sm-4.col-md-4.col-lg-4.col-xl-2.h-mt-md.h-mb-md
        h-image.border.border.border-indigo400.border-rounded.border-2(avatar src="img/hollyhair/magia4.png" size="250px")
        .text-h5.text-center Auxilia no Crescimento dos Cílios
      .no-shrink.col-mobile.col-xs-12.col-sm-4.col-md-4.col-lg-4.col-xl-2.h-mt-md.h-mb-md
        h-image.border.border.border-indigo400.border-rounded.border-2(avatar src="img/hollyhair/magia5.png" size="250px")
        .text-h5.text-center Fortalecimento das Unhas
      .no-shrink.col-mobile.col-xs-12.col-sm-4.col-md-4.col-lg-4.col-xl-2.h-mt-md.h-mb-md
        h-image.border.border.border-indigo400.border-rounded.border-2(avatar src="img/hollyhair/magia6.png" size="250px")
        .text-h5.text-center Nutre e evita o Ressecamento da Pele

    .row.justify-center.h-mt-md
      .col-auto
        h-btn(
          rounded
          size="lg"
          text-color="text-white"
          bg-color="bg-pink400"
          @click="goToDiv('prices')"
          style="width:280px"
        )
          .text-h5.text-center VAMOS EM FRENTE, EU QUERO AGORA

    .row.justify-center.h-mt-md
      .col-auto
        img(src="img/hollyhair/comprasegurabranca.png" style="width: 250px")

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
              img(src="img/hollyhair/comprasegurabranca.png" style="width: 100%")

      .no-shrink.col-mobile.col-xs-12.col-sm-9.col-md-3.col-lg-3.col-xl-2.h-mb-md.h-pa-xs
        h-card.bg-purple700(style="width:100%")
          h-card-section.text-center.text-white.text-bold.h-pa-md
            .row.justify-center
              .h-pa-md.col-auto.text-h6.bg-pink500.text-bold.border-radius
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
              img(src="img/hollyhair/comprasegurabranca.png" style="width: 100%")

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
              img(src="img/hollyhair/comprasegurabranca.png" style="width: 100%")

    .h-pa-xl

    .row.wrap.h-pa-md.align-items-center.justify-center
      .no-shrink.col-mobile.col-xs-12.col-sm-3.col-md-3.col-lg-3.col-xl-2
        img(src="img/hollyhair/selogarantia.png" style="width: 100%")

    .text-h5.text-white.text-bold Risco zero
    .text-h3.text-white.text-bold Desafio dos <span style="color: #D62F65;">90 dias</span>

    .row.justify-center
      .text-body1.text-center.text-white.text-bold(style="max-width: 80%") Acreditamos tanto na eficácia do nosso produto que criamos o Desafio 90 Dias Hollywood Hair. Como funciona? Simples, comprando o tratamento de 3 meses você já estará participando do desafio e caso não tenha resultados visíveis, nós devolvemos todo o seu dinheiro.

    .row.justify-center.h-mt-md
      .col-auto
        h-btn(
          rounded
          size="lg"
          text-color="text-white"
          bg-color="bg-pink400"
          @click="goToDiv('prices')"
          style="width: 280px"
        )
          .text-h5.text-center Comprar Agora com Garantia de Satisfação

    .row.justify-center.h-mt-md
      .col-auto
        img(src="img/hollyhair/comprasegurabranca.png" style="width: 250px")

  .overlay-light-purple
    .column.text-center.h-pa-md
      .text-h3.text-white.text-bold Dúvidas Frequentes

      h-collapsible.h-mt-md
        h-collapsible-menu(icon="fas fa-question-circle" text="Por que escolher Hollywood Hair?")
          .text-body.bg-gray200.h-pa-md Hollywood Hair vai muito além de vitaminas para o cabelo. Ele possui em sua formula, o mineral mais importante para a beleza dos cabelos e unhas: o “silício inteligente”, que é um componente maravilhoso, conhecido como mineral da beleza. Com o silício inteligente você se livra rapidamente da queda capilar, o seu cabelo cresce muito mais rápido, forte, saudável e muito mais brilhante! Além das unhas, que ficam super resistentes e lindas! Hollywood hair Hair é eficiente porque ele age de dentro pra fora, e é indicado para todos os tipos de cabelo.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Eu tomo anticoncepcional, posso fazer o tratamento?")
          .text-body.bg-gray200.h-pa-md Claro que sim! Hollywood Hair é composto apenas de nutrientes completamente naturais que não interferem na eficácia dos tratamentos contraceptivos. Ele também não engorda e não da espinhas.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Hollywood Hair engorda?")
          .text-body.bg-gray200.h-pa-md Hollywood Hair não engorda! Ele é composto apenas por vitaminas e minerais naturais, sem nenhum agente que cause efeitos colaterais no corpo.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Qual a composição?")
          .text-body.bg-gray200.h-pa-md Silício Inteligente, Biotina, Vitamina B6, Vitamina B2, Vitamina B1, Vitamina B5, (Ác. Pantotênico), Vitamina A, Vitamina C, Vitamina D, Vitamina E, Vitamina B12, Cromo, Selênio, Ferro, Cobre, Magnésio, Zinco.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Hollywood Hair é liberado pela Anvisa?")
          .text-body.bg-gray200.h-pa-md Sim! Hollywood Hair suplemento vitamínico e mineral é produzido em uma fábrica registrada pela ANVISA. Liberado de Registro Conforme RDC Nº 27/2010.

        h-collapsible-menu.h-mt-md(icon="fas fa-question-circle" text="Em quanto tempo meu pedido é enviado?")
          .text-body.bg-gray200.h-pa-md Nosso time de operação/logística é excelente! Pedidos confirmados até as 14 horas são enviados no mesmo dia, e após as 14, no dia seguinte! Você vai receber seu tratamento rapidinho!

  .overlay-dark-purple.h-pa-sm
    .row.wrap.justify-center
      .col-auto.h-pa-sm.text-white.text-center
        .text-body1.text-bold.text-center FORMA DE ENTREGA
        img.cursor-pointer(
          src="img/hollyhair/correio.png" alt=""
          style="width:150px"
        )
        .text-body1.text-bold.text-center FORMA DE PAGAMENTO
        img.cursor-pointer(
          src="img/hollyhair/formaspagamento.png" alt=""
          style="width:150px"
        )
      .col-auto.h-pa-sm.text-white.text-center
        .text-h6.text-bold.text-center DÚVIDAS
        div
          h-btn(text="Atendimento" bg-color="bg-positive" text-color="text-white"
            @click="openUrl(whatsapp)"
          )
        p Seg a Sex 13:00 às 21:30hs
        p Sab e Dom 9:00 as 14:00hs
        //- img.cursor-pointer(
        //-   src="img/hollyhair/siteblindado.png" alt=""
        //-   style="width:200px"
        //- )
      .col-auto.h-pa-sm.text-white
        .column.text-center
          .row.justify-center
            .col-auto
              img.text-center(
              src="img/hollyhair/seloreclameaqui.png" alt=""
              style="width:150px"
              )
          .text-body1.text-bold Sobre Nós
          | Rua Osvaldo Cruz, 255 <br>
          | Bairro Jardim Primavera - Piraquara, PR <br>
          | CEP 83302-14

  iframe(src="https://app.monetizze.com.br/r/AXY20769619" width="100%" height="50px" style="border: none; padding: 0px; display: none;")

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HollywoodHair',
  components: {
  },
  data() {
    return {
      kit1mes: 'https://app.monetizze.com.br/r/BBX1519729?src=site',
      kit3meses: 'https://app.monetizze.com.br/r/BTD1519730?src=site',
      kit6meses: 'https://app.monetizze.com.br/r/BTX1519732?src=site',
      whatsapp: 'https://api.whatsapp.com/send?phone=5516992369369&text=Ol%C3%A1%20vim%20do%20site%20do%20Hollywood%20hair%20e%20gostaria%20de%20atendimento',
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
  background-image: linear-gradient(180deg, #dab2e4 100%, #aa4daa 100%);
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
