<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Flujo de bienes

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El flujo de bienes en el almacén es un proceso logístico fundamental que garantiza la correcta circulación de mercancías desde su ingreso hasta su salida, optimizando tiempos, recursos y espacio. Este flujo incluye etapas como recepción, almacenamiento, preparación de pedidos y despacho, asegurando que los productos estén disponibles en el momento y lugar requeridos. Una gestión eficiente del flujo de bienes reduce costos, minimiza errores y mejora la satisfacción del cliente, por lo que su planificación es clave en la cadena de suministro.

    Separador

    #t_1_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.1	Concepto

    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema1/2.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p El flujo de bienes en almacén se refiere al movimiento físico y administrativo de mercancías dentro de un centro de distribución, abarcando desde su entrada hasta su salida. <strong>Elementos clave en el flujo de bienes</strong>:

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Elementos clave en el flujo de bienes
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/3.svg', alt='')

          .tarjeta-modificada.p-3.ps-lg-5.rounded-4(x="27.5%" y="88.2%" numero="+")
            .tarjeta-modificada__img-wrapper.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/11.png', alt='Imagen de un mecánico')(data-aos="fade-up")
            .tarjeta-content-wrapper
              .tarjeta-modificada__title.h5.mb-3 Movimiento físico de mercancías
              ul.checklist.mb-0
                li Incluye actividades como carga, descarga, transporte interno, ubicación en estanterías y preparación para despacho.
                li.pb-0 Se rige por principios de ergonomía y eficiencia para minimizar tiempos muertos y daños.

          .tarjeta-modificada.p-3.ps-lg-5.rounded-4(x="54.3%" y="88.2%" numero="+")
            .tarjeta-modificada__img-wrapper.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/12.png', alt='Imagen de un mecánico')(data-aos="fade-up")
            .tarjeta-content-wrapper
              .tarjeta-modificada__title.h5.mb-3 Gestión documental y trazabilidad
              ul.checklist.mb-0
                li Todo movimiento debe registrarse en sistemas de inventario.
                li.pb-0 Documentos clave: órdenes de compra, albaranes, facturas, guías de remisión y registros de stock.

          .tarjeta-modificada.p-3.ps-lg-5.rounded-4(x="80%" y="88.2%" numero="+")
            .tarjeta-modificada__img-wrapper.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/13.png', alt='Imagen de un mecánico')(data-aos="fade-up")
            .tarjeta-content-wrapper
              .tarjeta-modificada__title.h5.mb-3 Optimización de espacio y recursos
              ul.checklist.mb-0
                li Uso estratégico de layouts de almacén por ejemplo, método FIFO (first in, first out) o LIFO (last in, first out). 
                li.pb-0 Implementación de sistemas de almacenaje como estanterías dinámicas, racks selectivos o compactos.
        figcaption <strong>Fuente:</strong> SENA, 2025.

    p.mb-5 <strong>El flujo eficiente de los bienes contribuye a:</strong>

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.align-items-center.factores-slider.z-2
      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema1/4.png', alt='Imagen de un mecánico')(data-aos="fade-up")
      .col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-md-6")
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/5.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Reducción de costos
            p.mb-4.mb-5.text-center Minimiza tiempos de almacenamiento, evita obsolescencia y optimiza mano de obra.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/6.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Mejora en la satisfacción del cliente
            p.mb-4.text-center Garantiza entregas oportunas y sin errores.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/7.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Cumplimiento normativo
            p.mb-4.text-center Facilita auditorías y evita sanciones por mal manejo de inventarios.

    Separador

    #t_1_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.2	Normativa
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/8.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El marco normativo que regula el flujo de bienes en almacén es extenso y variado, abarcando desde aspectos de seguridad laboral hasta estándares internacionales de calidad. Su cumplimiento no solo es obligatorio desde el punto de vista legal, sino que además garantiza la eficiencia operativa y reduce riesgos logísticos. A continuación, se presenta un análisis detallado de las principales normativas:

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 1.
      span Normativa del flujo de bienes en almacén

    .tabla-a.color-secundario.z-2.mb-4.mb-lg-5
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead
          tr(style="background-color: #CAE1F9;")
            th Normativas
            th Normas
            th(colspan=2) Descripción
        tbody
          tr(style="background-color: #FFFFFF;")
            td(rowspan=3) <strong>Seguridad y salud laboral</strong>
            td OSHA (Administración de Seguridad y Salud Ocupacional).
            td(colspan=2)              
              ul.checklist
                li Establece estándares para: manipulación manual de cargas, uso de equipos de protección personal, operación segura de montacargas y maquinaria.
                li Requiere programas de capacitación periódica en seguridad logística.
          tr(style="background-color: #F4F5F8;")
            td ISO 28000 (Seguridad en la cadena de suministro).
            td(colspan=2)
              ul.checklist
                li Protocolos para prevención de robos y fraudes.
                li Sistemas de control de acceso a almacenes.
                li Gestión de riesgos en el flujo de mercancías.
          tr(style="background-color: #FFFFFF;")
            td Directiva Europea 89/391/CEE (Prevención de Riesgos Laborales).
            td(colspan=2) 
              ul.checklist
                li Obligatoriedad de evaluaciones de riesgo en almacenes.
                li Protocolos para el manejo de mercancías peligrosas. 
                li Especificaciones sobre iluminación, señalización y vías de evacuación.
          tr(style="background-color: #F4F5F8;")
            td(rowspan=2) <strong>Calidad y gestión</strong>
            td ISO 9001 (Sistemas de Gestión de Calidad).
            td(colspan=2)
              ul.checklist
                li Requisitos para procesos de recepción y despacho.
                li Control de documentos y registros.
                li Gestión de no conformidades en inventarios.
          tr(style="background-color: #FFFFFF;")
            td Buenas Prácticas de Almacenamiento (BPA).
            td(colspan=2) 
              ul.checklist
                li Guías específicas por sector: BPA para productos farmacéuticos (WHO-GDP), BPA para alimentos (FDA 21 CFR Part 110).
                li Requisitos de condiciones ambientales (temperatura, humedad).

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-7.col-lg-4
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/9.png', alt='Imagen de un mecánico')(data-aos="fade-left")
      .col-lg-5
        p Para garantizar el cumplimiento normativo, las empresas deben:
        ul.checklist
          li Realizar auditorías periódicas de conformidad.
          li Capacitar continuamente al personal.
          li Implementar sistemas de gestión documental electrónica.
          li Mantener registros actualizados.
          li Establecer protocolos de actuación ante incumplimientos.      
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/10.png', alt='Imagen de un mecánico')(data-aos="fade-right")


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
