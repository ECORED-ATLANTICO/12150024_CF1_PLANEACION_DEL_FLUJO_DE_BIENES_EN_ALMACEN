<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Movimientos de almacén

    .fullwidth-bg.fullwidth-bg--2
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La importancia de los movimientos de almacén radica en su papel central para asegurar la fluidez y eficiencia de toda la cadena logística. Cada movimiento, ya sea la recepción, almacenamiento, traslado interno o expedición de mercancías, incide directamente en la capacidad de una empresa para responder ágilmente a la demanda y mantener un flujo constante de productos desde el origen hasta el cliente final.

    Separador

    #t_5_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 5.1	Concepto
    
    .row.justify-content-center.align-items-center.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema5/2.png', alt='Imagen de un operador logistico')(data-aos="fade-up")
      .col-lg-8
        p.mb-3 Los movimientos de almacén representan el conjunto de operaciones que permiten el desplazamiento, control y gestión de productos dentro de un centro logístico. Estas acciones abarcan desde la recepción y ubicación inicial de la mercancía, pasando por su manipulación y preparación, hasta la expedición final hacia el siguiente eslabón de la cadena de suministro. Cada movimiento, ya sea físico o administrativo, está orientado a asegurar que los materiales estén disponibles exactamente donde y cuando se requieren para la producción o distribución.
        .cajon.color-acento-contenido.p-4
          p.mb-0 En la logística moderna, la gestión eficiente de estos movimientos es un factor determinante para el éxito empresarial.

    Separador

    #t_5_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 5.2	Características

    p.mb-4.mb-lg-5 Los movimientos de almacén se caracterizan por una serie de atributos esenciales que los convierten en elementos clave dentro de la gestión logística.

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-md-4.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema5/3.png")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--secundario-s10")
          div(titulo="Dinamismo")
            p.ps-5.mb-0 El almacén no es un espacio estático, sino un entorno en constante movimiento donde los bienes ingresan, se reorganizan y salen según la demanda.
          div(titulo="Trazabilidad")
            p.ps-5.mb-0 Cada movimiento debe registrarse mediante sistemas de gestión para garantizar el control de inventarios y evitar pérdidas.
          div(titulo="Eficiencia en el flujo")
            p.ps-5.mb-0 Los movimientos deben optimizarse para reducir tiempos y costos, evitando cuellos de botella y maximizando el uso del espacio.
          div(titulo="Seguridad")
            p.ps-5.mb-0 Las operaciones deben realizarse bajo normas de seguridad para proteger tanto a los trabajadores como a los bienes.
          div(titulo="Flexibilidad")
            p.ps-5.mb-0 El almacén debe adaptarse a cambios en la demanda, estacionalidad o nuevos bienes sin afectar su operatividad.
          div(titulo="Integración tecnológica")
            p.ps-5.mb-0 El uso de automatización y tecnologías como códigos de barras o RFID es cada vez más común para controlar y agilizar los movimientos.

    Separador

    #t_5_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 5.3	Tipos

    .fullwidth-bg.fullwidth-bg--1
    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema5/4.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2.mb-5
      .col-lg-10.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Reconocer y diferenciar los tipos de movimientos dentro del almacén resulta fundamental para optimizar la administración del inventario y elevar la eficiencia operativa en toda la cadena logística. Al identificar y categorizar adecuadamente cada tipo de movimiento, se facilita la asignación precisa de recursos, se mejora la planificación del espacio y se minimizan los errores en la manipulación de mercancías. Esto se traduce en una reducción significativa de costos operativos y en la aceleración de los tiempos de entrega.

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Según la dirección de flujo")
        .row.align-items-center.justify-content-around
          .col-lg-8.mb-4.mb-md-0
            ul.checklist
              li <strong>Entradas (recepciones)</strong>: descarga de mercancías, verificación de cantidad y calidad, registro en sistemas de gestión (WMS/ERP).
              li <strong>Almacenamiento (ubicación)</strong>: colocación en estanterías, bloques o zonas específicas, gestión por rotación.
              li <strong>Movimientos internos</strong>: reubicación de productos (reabastecimiento, consolidación), <em>cross-docking</em> (distribución directa sin almacenaje prolongado).
              li <strong>Salidas (expediciones)</strong>:	<em>picking</em> (preparación de pedidos), embalaje y verificación final, carga en transporte para distribución.
          .col-sm-8.col-lg-4.col-xl-3
            figure
              img(src='@/assets/curso/temas/tema5/5.png', alt='Imagen decorativa')
      .py-3.py-md-4(titulo="Según el grado de automatización")
        .row.align-items-center.justify-content-around
          .col-lg-8.mb-4.mb-md-0
            ul.checklist
              li <strong>Manual</strong>: movimientos realizados por operarios, utilizando equipos básicos como carretillas manuales, transpaletas eléctricas o plataformas de carga.
              li <strong>Semi-automatizados</strong>: combinan tecnología asistida con operarios, optimizando procesos sin eliminar por completo la mano de obra.
              li <strong>Automatizados</strong>: robots y sistemas inteligentes realizan movimientos sin intervención humana constante.
          .col-sm-8.col-lg-4.col-xl-3
            figure
              img(src='@/assets/curso/temas/tema5/6.png', alt='Imagen decorativa')


</template>

<script>
export default {
  name: 'Tema5',
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
