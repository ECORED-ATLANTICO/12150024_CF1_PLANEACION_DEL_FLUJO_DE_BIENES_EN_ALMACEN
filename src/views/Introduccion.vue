<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    
    .row.justify-content-center.align-items-center.mb-4
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/intro/1.png" alt="Imagen decorativa")
      .col-lg-8
        p El componente formativo aborda el flujo de bienes como un proceso esencial en la gestión logística, analizando su concepto y normativa para garantizar eficiencia y cumplimiento legal. Los bienes, como elementos centrales de este flujo, se estudian en su definición, clasificación y documentación técnica, aspectos clave para su manejo adecuado. Además, se explora el almacén como unidad operativa, destacando sus características, tipos y funciones dentro de la cadena de suministro. Este marco teórico sienta las bases para comprender la importancia de una gestión organizada y normatizada en el ciclo de los bienes.
        .p-4.bg-color-terciario-t20.rounded-3
          p.mb-0 La operación de almacén se presenta como un conjunto de etapas y herramientas tecnológicas que optimizan procesos como recepción, almacenamiento y despacho. Asimismo, los movimientos de almacén, con sus características y tipos, permiten entender la dinámica interna de estos espacios. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-11
        p.mb-0 Este componente busca fortalecer competencias en la administración de inventarios, el uso de tecnologías y la aplicación de buenas prácticas, asegurando trazabilidad y control. Al integrar estos conocimientos, se facilita la toma de decisiones y se promueve la eficiencia en la gestión logística, impactando positivamente en la productividad organizacional.
      .col-xl-1.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/intro/2.png" alt="Imagen decorativa")

    .video.mb-2
      iframe(width="560" height="315" src="https://www.youtube.com/embed/hCZxnw4K5cw" title="Movilidad inteligente y circulación segura" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
    figcaption <strong>Video:</strong> Movilidad inteligente y circulación segura.

</template>

<script>
export default {
  name: 'Introduccion',
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
