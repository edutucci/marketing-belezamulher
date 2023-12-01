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

  .bg-red900.h-pa-lg
    .row.justify-center
      .col-auto
        img(src="/img/lizzante/ofertanatallizzante.png" style="width: 280px")
    .row.justify-center.h-mt-xs
      .col-auto.text-center.text-h4.text-white
        <p style="margin: 5px">Descubra o<span style="color: #fff000;"> kit Nº 1 </span> mais potente em <span style="color: #fff000;">crescimento </span> e no combate a <span style="color: #fff000;">queda capilar!</span></p>						

    .row.justify-center
      .col-auto.text-center.text-h6.text-white
        <p style="margin: 5px">Com sua fórmula exclusiva, o <strong>Kit</strong> <strong>S.O.S Crescimento</strong> age diretamente no bulbo capilar, paralisando a queda, estimulando o crescimento acelerado dos fios, preenchendo falhas, nutrindo e fortalecendo os fios<strong> DESDE A PRIMEIRA APLICAÇÃO!</strong></p>						

    .row.justify-center.h-mt-md
      .col-auto
        h-btn(
          rounded
          text-color="text-black"
          bg-color="bg-yellow700"
          @click="goToDivPrices"
        )
          | SIM! QUERO RESTAURAR MEUS CABELOS

    .row.justify-center.h-mt-md
      .col-auto
        img(src="/img/lizzante/selo-compra-segura.svg" style="width: 325px")

    .row.justify-center.h-mt-md
      .col-auto
        img(src="/img/lizzante/produto1.png" style="width: 325px")

    .row.justify-center.h-mt-lg
      .col-auto.text-white
        .row
          .col-auto
            h-icon(icon="fas fa-check" text-color="text-yellow500")
          .h-ml-sm.col.text-left.text-h6.text-bold
            | Paralisa até 95% da queda capilar
        .row
          .col-auto
            h-icon(icon="fas fa-check" text-color="text-yellow500")
          .h-ml-sm.col.text-left.text-h6.text-bold
            | Estimula o crescimento até 7x mais rápido
        .row
          .col-auto
            h-icon(icon="fas fa-check" text-color="text-yellow500")
          .h-ml-sm.col.text-left.text-h6.text-bold
            | 5x mais potente que cápsulas
        .row
          .col-auto
            h-icon(icon="fas fa-check" text-color="text-yellow500")
          .h-ml-sm.col.text-left.text-h6.text-bold
            | Combate a calvície
        .row
          .col-auto
            h-icon(icon="fas fa-check" text-color="text-yellow500")
          .h-ml-sm.col.text-left.text-h6.text-bold
            | Preenche falhas
        .row
          .col-auto
            h-icon(icon="fas fa-check" text-color="text-yellow500")
          .h-ml-sm.col.text-left.text-h6.text-bold
            | Trata alopecia
        .row
          .col-auto
            h-icon(icon="fas fa-check" text-color="text-yellow500")
          .h-ml-sm.col.text-left.text-h6.text-bold
            | Testado e aprovado pela ANVISA
        .row
          .col-auto
            h-icon(icon="fas fa-check" text-color="text-yellow500")
          .h-ml-sm.col.text-left.text-h6.text-bold
            | Compatível com qualquer química

  .h-pa-md
    .row.justify-center
      .col-auto.text-center.text-h6.text-pink600
        <p>VEja o vídeo sobre como o kit SoS Crescimento age no seu cabelo!</p>

    .h-mt-xs
      .row.wrap.justify-center
        iframe.h-pa-xs.video-item.no-shrink(width="100%" height="400" src="https://www.youtube.com/embed/WnSjbuNE508" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

  .bg-red900.h-pa-lg
    .row.justify-center
      .col-auto.text-white.text-h5.text-center
        <h2>Pessoas reais, <span style="color: #FFF000;">RESULTADOS REAIS!</span></h2>		
    .row.justify-center
      .col-auto.text-white.text-h6.text-center
        | Menos queda, menos quebra, mais crescimento e maciez.

    .h-mt-md
      .row.wrap.justify-center
        .no-shrink.h-ma-md.col-mobile.col-xs-12.col-sm-5.col-md-3.col-lg-3.col-xl-2
          .row.justify-center
            .col-auto
              img(src="img/lizzante/resultado1.png" style="width:100%")

        .no-shrink.h-ma-md.col-mobile.col-xs-12.col-sm-5.col-md-3.col-lg-3.col-xl-2
          .row.justify-center
            .col-auto
              img(src="img/lizzante/resultado2.png" style="width:100%")

        .no-shrink.h-ma-md.col-mobile.col-xs-12.col-sm-5.col-md-3.col-lg-3.col-xl-2
          .row.justify-center
            .col-auto
              img(src="img/lizzante/resultado3.png" style="width:100%")

        .no-shrink.h-ma-md.col-mobile.col-xs-12.col-sm-5.col-md-3.col-lg-3.col-xl-2
          .row.justify-center
            .col-auto
              img(src="img/lizzante/resultado4.png" style="width:100%")
    .row.justify-center
      .col-auto.text-white.text-h5.text-center
        <h2>Cabelos fortes e saudáveis!</h2>
        .text-h3.text-yellow500 DESAFIO 60 DIAS
        <h3>USE E COMPROVE OS RESULTADOS!</h3>

    .row.justify-center.h-mt-md
      .col-auto
        h-btn(
          rounded
          text-color="text-white"
          bg-color="bg-green700"
          @click="goToDivPrices"
        )
          | SIM! QUERO RESTAURAR MEUS CABELOS

  .h-pa-lg
    .row.wrap.justify-center.align-items-center
      .col-auto.text-h4.text-center(style="max-width: 400px")
        <span style="color: #EA455F;">PORQUE ESCOLHER O KIT SOS CRESCIMENTO?</span>

    .text-h5.text-center.h-mt-md Veja as diferenças do kit para outros produtos:

    .h-mt-md
      .row.wrap.justify-center
        .no-shrink.h-ma-md.col-mobile.col-xs-12.col-sm-7.col-md-3.col-lg-3.col-xl-2
          .row.justify-center
            .col-auto
              img(src="img/lizzante/diferenca1.png" style="width:100%")

        .no-shrink.h-ma-md.col-mobile.col-xs-12.col-sm-7.col-md-3.col-lg-3.col-xl-2
          .row.justify-center
            .col-auto
              img(src="img/lizzante/diferenca2.png" style="width:100%")

  .bg-red900.h-pa-lg
    .row.wrap.justify-center.text-white.align-items-center
      .h-pa-md.col-auto.text-center(styke="width: 250px")
        .text-h3.text-yellow500 + 38 mil
        .text-h5 PRODUTOS VENDIDOS

      .h-pa-md.col-auto.text-center(styke="width: 250px")
        .text-h3.text-yellow500 + 35 mil
        .text-h5 RECOMPRAS

      .h-pa-md.col-auto.text-center(styke="width: 250px")
        .text-h3.text-yellow500 + 29 mil
        .text-h5 AVALIAÇÕES POSITIVAS

  .h-pa-md
    .row.justify-center
      .col-auto.text-center.text-h6.text-pink600
        <p>DEPOIMENTOS</p>

    .h-mt-xs
      .row.wrap.justify-center
        iframe.h-pa-xs.video-item.no-shrink(width="100%" height="400" src="https://www.youtube.com/embed/XeoUGsyuTHY" title="KIT SOS CRESCIMENTO LIZZ ANTE - O MELHOR!!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        iframe.h-pa-xs.video-item.no-shrink(width="100%" height="400" src="https://www.youtube.com/embed/KYad5zQCCpQ" title="KIT SOS CRESCIMENTO FUNCIONA? Veja a resenha da Jenny e surpreenda -se!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        iframe.h-pa-xs.video-item.no-shrink(width="100%" height="400" src="https://www.youtube.com/embed/C9meAhE-rl8" title="KIT SOS CRESCIMENTO FUNCIONA MESMO? Veja a Resenha que a Monalisa fez sobre o produto!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

  .bg-red900.h-pa-lg
    .row.justify-center
      .col-auto.text-h4.maxsize-title.text-white.text-center
        <span style="color: #FFF000;">MAIS DE 38 MIL MULHERES SATISFEITAS </span>
        br
        | confira abaixo opiniões de quem já usa

    .row.wrap.justify-center
      .no-shrink.h-ma-md.col-mobile.col-xs-12.col-sm-5.col-md-3.col-lg-3.col-xl-2
        .row.justify-center
          .col-auto
            img(src="img/lizzante/depoimento1.png" style="width:100%")

      .no-shrink.h-ma-md.col-mobile.col-xs-12.col-sm-5.col-md-3.col-lg-3.col-xl-2
        .row.justify-center
          .col-auto
            img(src="img/lizzante/depoimento2.png" style="width:100%")

  .h-pa-lg
    .row.wrap.justify-center.align-items-center
      .col-auto.text-h4.text-center(style="max-width: 400px")
        <span style="color: #EA455F;">Nossos especialistas</span>
        br
        div(style="opacity: 0.6")
          | irão te auxiliar durante toda sua jornada!
        
      .col-auto.h-pa-lg.text-center
        img(src="img/lizzante/especialistas.png" style="width:100%")

  div(ref="prices")
    LizzAnteCheckout

  .h-pa-lg
    .row.wrap.justify-center.align-items-center
      .col-auto.h-pa-lg.text-center
        img(src="img/lizzante/selogarantia.png" style="width: 300px")

      .col-auto.text-h6.text-center(style="max-width: 400px")
        <span style="color: #EA455F;">Sua satisfação ou seu dinheiro de volta!</span>
        <p style="opacity: 0.6">Faça parte do desafio 60 dias S.O.S CRESCIMENTO, são 2 meses de SATISFAÇÃO ou seu dinheiro de volta!</p>
        <p style="opacity: 0.6">Para participar basta adquirir o seu <strong>KIT</strong>. Faça o uso pelos próximos&nbsp;<strong>60 dias conforme indicado</strong>&nbsp;(mínimo 3x por semana). Caso não haja resultados você pode solicitar o estorno de&nbsp;<strong>100% do seu investimento.</strong></p>

    .column.text-center.h-pa-md
      .text-h3.text-pink600.text-bold Dúvidas Frequentes

      h-collapsible.h-mt-md
        h-collapsible-menu(
          bg-color="bg-red900"
          text-color="text-white"
          icon="fas fa-question-circle"
          text="O kit é original? O site é seguro?"
        )
          .text-body.h-pa-md Sim, o kit é original pois o site é direto da empresa! O site é 100% seguro, seus dados estão protegidos e criptografados com tecnologia de ponta a ponta!

        h-collapsible-menu(
          bg-color="bg-red900"
          text-color="text-white"
          icon="fas fa-question-circle"
          text="O kit é liberado para gestantes e lactantes? "
        )
          .text-body.h-pa-md Sim, pode ser usado por gestantes e lactantes. O kit não possui conta indicações!

        h-collapsible-menu(
          bg-color="bg-red900"
          text-color="text-white"
          icon="fas fa-question-circle"
          text="Quanto tempo leva para o pedido chegar no meu endereço?"
        )
          .text-body.h-pa-md
            p O prazo de entrega é o tempo que o produto leva pra chegar em sua casa, esse prazo é definido de acordo com a região que você mora e serviço pela qual a mercadoria foi despachada! 
            p Sábado, Domingo e Feriados não são dias úteis, portanto não são realizados envios. Se sua compra foi confirmada em algum desses dias, seu pedido começa a ser despachado no próximo dia útil. O envio do link de rastreamento é encaminhado via e-mail e WhatsApp dentro de um prazo de até 4 dias úteis! (Verifique sempre a caixa de SPAM)
            p O tempo que seu pedido será entregue, depende da região e modalidade de envio. Entenda:
            p.text-bold Correios – Via PAC
            p Norte/Nordeste de 6 a 16 dias úteis. (Algumas regiões apresentam exceções)
            p Região Centro Oeste de 6 a 12 dias úteis.
            p Sul/Sudeste de 4 a 8 dias úteis.

            hr
            p.text-bold Correios – Via SEDEX
            p Atende o estado de SP de 4 a 6 dias úteis. (Algumas regiões apresentam exceções)

        h-collapsible-menu(
          bg-color="bg-red900"
          text-color="text-white"
          icon="fas fa-question-circle"
          text="Eu tenho direito a frete grátis?"
        )
          .text-body.h-pa-md Todos os nossos clientes são contemplados com o frete gratuito em todo território nacional.

        h-collapsible-menu(
          bg-color="bg-red900"
          text-color="text-white"
          icon="fas fa-question-circle"
          text="É para todos os tipos de cabelos? Compatível com qualquer química?"
        )
          .text-body.h-pa-md Sim, o Kit S.O.S Crescimento é para todos os tipos de cabelos, compatível com qualquer química e não tem nenhuma contra indicação. A sua formulação são com produtos naturais, livre de qualquer dano a saúde. NÃO TESTADO EM ANIMAIS!

        h-collapsible-menu(
          bg-color="bg-red900"
          text-color="text-white"
          icon="fas fa-question-circle"
          text="Em quanto tempo consigo notar as diferença no crescimento?"
        )
          .text-body.h-pa-md Na primeira aplicação já será notável o fortalecimento dos fios, para se notar o crescimento e o nascimento de fios mais espessos e fortalecidos é indicado o tratamento de no mínimo 30 dias, normalmente os cabelos crescem de 0,5mm a 1cm ao mês, com o uso do kit o crescimento pode ser de 2 a 4cm, crescimento até 7x mais rápido!

        h-collapsible-menu(
          bg-color="bg-red900"
          text-color="text-white"
          icon="fas fa-question-circle"
          text="Por que não acompanha condicionador no kit? "
        )
          .text-body.h-pa-md
            p Primeiramente, a principal função de um condicionador é fechar as cutículas dos fios e deixar os fios maleáveis e sedosos, é aí que vem o diferencial do nosso Kit S.O.S Crescimento. Caso fosse utilizado um condicionador antes do tônico, todas as propriedades do tônico iriam se perder pois as cutículas estariam fechadas e os fios não iriam absorver as vitaminas, e o tônico já FAZ A FUNÇÃO DE FECHAR AS CUTÍCULAS.
            p E a Máscara S.O.S Crescimento além de tratar por completo a fibra capilar, ela também já tem o poder de deixar os fios maleáveis e sedosos, fazendo assim sendo dispensável a utilização de um condicionador.

        h-collapsible-menu(
          bg-color="bg-red900"
          text-color="text-white"
          icon="fas fa-question-circle"
          text="Como eu devo usar o KIT? "
        )
          .text-body.h-pa-md
            p Shampoo: Aplique sobre os cabelos molhados, massageando o couro cabeludo até que se forme uma espuma rica e cremosa. Deslize a espuma para as pontas. Enxágue por completo.
            p Máscara: Aplique a máscara com os cabelos úmidos em toda a área do fio. Pentear até que perceba uniformidade na aplicação . Deixe agir por 5 minutos. Enxágue normalmente e finalize com o Tônico S.O.S Crescimento.
            p Tônico Capilar: Com os Cabelos limpos e úmidos, borrife por todo o couro cabeludo e faça uma boa massagem para melhor circulação e absorção do produto! Penteie da raiz as pontas. Obs: Não usar secador sobre o produto para que os componentes principais não percam seu efeito. Uso diário. (Caso necessite utilizar qualquer fonte de calor, aguarde 20 minutos após aplicar o tônico) 
            p Atenção: Para resultados garantidos, use o tônico diariamente aplicando direto no couro cabeludo e recomendamos o uso do kit completo no mínimo 3x por semana.

        h-collapsible-menu(
          bg-color="bg-red900"
          text-color="text-white"
          icon="fas fa-question-circle"
          text="Posso usar um finalizador ou reparador junto com o kit?"
        )
          .text-body.h-pa-md
            p Pode sim, após utilizar o tônico você pode utilizar reparadores ou finalizadores de sua preferência! Isso não irá afetar no tratamento.

  .bg-red900
    .column.text-center.h-pa-md
      .text-h5.text-yellow700.text-bold LINKS IMPORTANTES

      h-collapsible.h-mt-md
        h-collapsible-menu(
          bg-color="bg-white"
          icon="fas fa-question-circle"
          text="TERMO DE GARANTIA"
        )
          .text-body.h-pa-md.bg-white
            <p><strong>#Projeto60Dias</strong></p>
            <p>Por confiarmos no nosso produto , nós damos 60 (sessenta) dias de garantia para reembolso.</p><p>Isso significa que se você não obtiver resultados satisfatórios no crescimento e na melhoria de queda e quebra, nós devolvemos o seu dinheiro.</p><p>Aplicam – se as seguintes regras:</p><p>– O cliente deverá utilizar o kit no mínimo 2x por semana no período de 60 dias.</p><p>– O cliente também deverá enviar e-mails semanalmente para o endereço <a href="mailto:comercial@lizzante.com.br">comercial@lizzante.com.br</a> contendo o assunto Projeto 60 dias informando o nome completo e CPF utilizado na compra.</p><p>No e-mail deverão constar 3 (três) fotos do seu cabelo, nos seguintes ângulos:</p><p>– Frente, mostrando toda a parte frontal.</p><p>– Lado direito, mostrando toda a lateral direta dos cabelos.</p><p>– Lado esquerdo, mostrando toda a lateral esquerda dos cabelos.</p><p>Com a insatisfação do cliente, o mesmo deverá enviar um e-mail na semana que completar 60 dias com o assunto Reembolso , nossa equipe irá averiguar os e-mails enviado semanalmente e caso haja a constatação do insucesso no tratamento, o reembolso será feito para o cliente.</p>

        h-collapsible-menu(
          bg-color="bg-white"
          icon="fas fa-question-circle"
          text="AVISO LEGAL"
        )
          .text-body.h-pa-md.bg-white
            <p>Os resultados deste produto podem variar de acordo com a pessoa. Todos os testemunhos, apesar de serem reais e gentilmente enviados por clientes, NÃO representam resultados únicos, já que cada indivíduo é diferente do outro.</p><p>Todos os conhecimentos, dicas e métodos compartilhados nesta página são de propósito meramente educativo e explicativo em relação ao produto comercializado.</p><p>Em caso de dúvida, envie um e-mail para comercial@lizzante.com.br&nbsp;e entraremos em contato o mais breve possível.</p>

        h-collapsible-menu(
          bg-color="bg-white"
          icon="fas fa-question-circle"
          text="QUEM SOMOS"
        )
          .text-body.h-pa-md.bg-white
            <p>A&nbsp;<strong>Lizz ante – Professional</strong>&nbsp;é uma indústria de cosméticos que há&nbsp;13 anos não economiza esforços e investimentos para que toda tecnologia e inovação esteja sempre disponível para você, oferecendo um mix de produtos profissionais de alta performance e qualidade. Com&nbsp;nossa linha de produtos profissionais, você alcançará&nbsp;os verdadeiros resultados para cada tipo de cabelo, com fios cheios de estilos e personalidades.</p><p>Somos especialistas em cabelos e apaixonados pelo que fazemos.</p><p><strong>Inovação e Beleza para seus Cabelos. </strong><strong>Use e apaixone-se.</strong></p><p>Lizz ante Professional – CNPJ 37.023.400/0001-22</p><p>Av. Marginal, 817 – Jardim Igaçaba</p><p>Mogi Guaçu/SP</p>

        h-collapsible-menu(
          bg-color="bg-white"
          icon="fas fa-question-circle"
          text="SEGURANÇA E PRIVACIDADE"
        )
          .text-body.h-pa-md.bg-white
            <p>Estamos empenhados em garantir que suas informações estejam sempre seguras. A fim de evitar o acesso não autorizado.</p><p>Colocamos em procedimentos eletrônicos e administrativos adequados para salvar, guardar e proteger as informações que coletamos online. Todos os dados de seu cartão não sofrem nenhum acesso humano, a transação de pagamento é realizada em ambiente seguro criptografado pelo meio de pagamento Monetizze&nbsp;e sua operadora de cartão.</p>

    .row.wrap.justify-center.text-white.align-items-center
      .h-pa-md.text-center.col-auto(style="width:250px")
        img(src="/img/lizzante/logo-lizzante.png" style="width: 100%")
      .h-pa-md.col-auto(style="width:250px")
        .text-h5.text-center.h-mt-md.text-yellow500 LINKS ÚTEIS

        .row.justify-center
          .col-auto
            h-btn(
              rounded
              text="RASTREAR PEDIDO" text-color="text-white"
              bg-color="bg-green700"
              @click="openUrl('https://www.linkcorreios.com.br/')"
            )

        .row.justify-center.h-mt-sm
          .col-auto
            h-btn(
              rounded
              text="ATENDIMENTO" text-color="text-white"
              bg-color="bg-green700"
              @click="openUrl(models.whatsapp)"
            )


      .h-pa-md.text-center.col-auto(style="width:250px")
        .text-h5.text-center.h-mt-md.text-yellow500 FORMAS DE PAGAMENTO
        img(src="/img/site/formaspagamento.png" style="width: 100%")
        br
        img(src="/img/site/siteblindado.png" style="width: 100%")

</template>

<script>

import { reactive, ref } from 'vue'
import LizzAnteCheckout from './LizzAnteCheckout.vue'

export default {
  components:{
    LizzAnteCheckout
  },
  setup () {
    const models = reactive({
      path: document.location.origin,
      whatsapp: 'https://api.whatsapp.com/send?phone=5516992369369&text=Ol%C3%A1%20vim%20do%20site%20do%20LizzAnte%20e%20gostaria%20de%20atendimento'
    })

    const prices = ref(null)

    const openUrl = (url) => {
      window.open(url);
    }

    const goToDivPrices = () => {
      const element = prices.value;
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    return {
      models,
      prices,
      openUrl,
      goToDivPrices
    }
  }
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