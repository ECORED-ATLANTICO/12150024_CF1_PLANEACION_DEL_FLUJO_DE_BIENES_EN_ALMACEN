<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se describe una visión general sobre los aspectos clave del desarrollo de los fundamentos del flujo de bienes. Comienza con el concepto del flujo de bienes y su normativa. Seguidamente, se hace referencia a las generalidades de los bienes, sus tipos y fichas técnicas correspondientes. Por otro lado, se hace mención a los almacenes, las generalidades, sus características, los tipos existentes y las funciones. Incluye lo referente a los diferentes procesos operativos que se ejecutan en almacén. Finalmente, se abordan los movimientos que realizan en el almacén, las características y los tipos existentes.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo 'Fundamentos del flujo de bienes' ofrece una visión general de los bienes y flujo, los almacenes, los procesos operativos y movimientos que se ejecutan en el almacén durante el flujo de bienes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
