<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Almacén

    .fullwidth-bg.fullwidth-bg--1
    p.mb-4.mb-lg-5.z-2 Adentrémonos en el mundo del almacenaje con la siguiente reflexión, realizada por la empresa Rajapack:

    .bg-fondo-2.mb-5.rounded-4.overflow-hidden.z-2
      .p-4.p-lg-2
        .row.align-items-center.justify-content-end
          .col-4.col-lg-2.col-xl-1.my-5.my-lg-0
            figure
              img.w-305(src="@/assets/curso/temas/tema3/1.png", data-aos="zoom-in")
          .col-lg-7(data-aos="fade-left")
            .row.align-items-center
              .col-sm-10.col-xl-11
                i.fas.fa-quote-left
                p ¿Qué sería del mundo de la logística sin el almacén? Este lugar es esencial, ya que en él se organizan y agrupan los productos antes de su distribución o su uso. Sin embargo, no todos los almacenes son iguales y cada uno está diseñado para satisfacer una necesidad específica.
                i.fas.fa-quote-right

    Separador

    #t_3_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.1	Concepto
    
    .row.justify-content-center.align-items-center.z-2
      .col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema3/2.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-0 En el ámbito logístico, un almacén es un espacio destinado a guardar de manera temporal o permanente mercancías, materias primas, productos en proceso o terminados, con la finalidad de asegurar que estén disponibles cuando y donde la cadena de suministro lo necesite. El almacén es, por tanto, un eslabón clave que conecta la producción con la distribución, asegurando el flujo constante de mercancías y la optimización de los recursos logísticos

    Separador

    #t_3_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.2	Características

    p.mb-4.mb-lg-5 Los almacenes logísticos modernos presentan una serie de características que los hacen esenciales para la eficiencia de la cadena de suministro:

    .fullwidth-bg.fullwidth-bg--4
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-auto
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Línea de tiempo de las redes sociales
        img.d-sm-none(data-aos="fade-up")(src='@/assets/curso/temas/tema3/3-mob.svg', alt='Se detalla en la función de los anillos: anillos de compresión, anillos de aceite y elemento eléctrico.')
        img.d-none.d-sm-block(data-aos="fade-up")(src='@/assets/curso/temas/tema3/3.svg', alt='Se detalla en la función de los anillos: anillos de compresión, anillos de aceite y elemento eléctrico.')
        figcaption <strong>Fuente:</strong> SENA, 2025.

    Separador

    #t_3_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.3	Tipos
    
    .row.justify-content-center.align-items-center.z-2
      .col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema3/2.png", data-aos="zoom-in")
      .col-lg-7
        p Conocer los diferentes tipos de almacenes dentro de la logística es fundamental para diseñar estrategias que optimicen el manejo, almacenamiento y distribución de mercancías. Esta comprensión permite asignar cada tipo de almacén a su función específica dentro de la cadena de suministro, facilitando una gestión más eficiente del inventario y reduciendo costos operativos.
        p.mb-0 <strong>Los almacenes se clasifican de acuerdo con varios criterios</strong>:

    .fullwidth-bg.fullwidth-bg--2
    h3.graph-title.my-5(data-aos="fade-right") Según su estructura

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-sm-10.col-lg-6.col-xl-5.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/5.png", alt="Imagen decorativa")
          .crd_hover_txt--body.text-center
            h5.mb-3 Almacenes interiores o cubiertos
            p.mb-0 Se trata de instalaciones totalmente selladas que resguardan los bienes almacenados frente a las variaciones climáticas externas, como cambios en la humedad o en la temperatura ambiente.
      .col-sm-10.col-lg-6.col-xl-5.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/6.png", alt="Imagen decorativa")
          .crd_hover_txt--body.text-center
            h5.mb-3 Almacenes exteriores o descubiertos
            p.mb-0 Son áreas descubiertas dentro de un recinto delimitado, destinadas a almacenar bienes que no requieren protección especial contra factores ambientales.

    h3.graph-title.my-5(data-aos="fade-right") Según su función en la cadena de suministro
    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-4.mb-lg-5
      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema3/7.png', alt='Imagen de un mecánico')(data-aos="fade-up")
      .col-xl-8.conservas-slyder.p-4.rounded-2
        .tarjeta.tarjeta--blanca
          SlyderA(tipo="b").p-2.p-lg-4
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-lg-0.p-3.p-sm-5
                h5.mb-4 1. Análisis inicial
                p Investigación del mercado y diagnóstico de la situación actual en redes.
              .col-8.col-sm-6.col-lg-4
                figure
                  img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/8.png', alt='imagen decorativa')

            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-lg-0.p-3.p-sm-5
                h5.mb-4 2. Definición de objetivos
                p Establecimiento de metas SMART (específicas, medibles, alcanzables, relevantes y con tiempo definido).
              .col-8.col-sm-6.col-lg-4
                figure
                  img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/9.png', alt='imagen decorativa')

            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-lg-0.p-3.p-sm-5
                h5.mb-4 3. Segmentación de audiencia.
                p Identificación del público objetivo y estudio de sus intereses.
              .col-8.col-sm-6.col-lg-4
                figure
                  img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/10.png', alt='imagen decorativa')

            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-lg-0.p-3.p-sm-5
                h5.mb-4 4. Selección de plataformas
                p Elección de redes sociales en función de la estrategia y tipo de contenido.
              .col-8.col-sm-6.col-lg-4
                figure
                  img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/11.png', alt='imagen decorativa')   
            
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-lg-0.p-3.p-sm-5
                h5.mb-4 5. Desarrollo de contenido
                p Creación del calendario de publicaciones y formatos adecuados.
              .col-8.col-sm-6.col-lg-4
                figure
                  img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/12.png', alt='imagen decorativa')
            
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-lg-0.p-3.p-sm-5
                h5.mb-4 6. Implementación de estrategias
                p Aplicación de acciones específicas para generar interacción y <em>engagement</em>.
              .col-8.col-sm-6.col-lg-4
                figure
                  img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/13.png', alt='imagen decorativa')
            
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-lg-0.p-3.p-sm-5
                h5.mb-4 7. Medición y ajustes
                p Evaluación de métricas y adaptación de la estrategia según los resultados obtenidos.
              .col-8.col-sm-6.col-lg-4
                figure
                  img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/14.png', alt='imagen decorativa')


    h3.graph-title.my-5(data-aos="fade-right") Según los tipos de bienes 
    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-4.mb-lg-5
      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema3/15.png', alt='Imagen de un mecánico')(data-aos="fade-up")
      .col-xl-8
        TabsA.color-acento-botones
          .tarjeta.bg-gray.p-4(titulo="Almacén de bienes perecederos")
            figure
              img.mb-4(data-aos="fade-up")(src='@/assets/curso/temas/tema3/16.png', alt='imagen decorativa')
            p Centros de distribución de supermercados. Farmacéuticas (vacunas y medicamentos sensibles). 
          .tarjeta.bg-gray.p-4(titulo="Almacén de bienes peligrosos")
            figure
              img.mb-4(data-aos="fade-up")(src='@/assets/curso/temas/tema3/17.png', alt='imagen decorativa')
            p Plantas químicas o farmacéuticas. Puertos para manejo de combustibles. 
          .tarjeta.bg-gray.p-4(titulo="Almacén bienes en general")
            figure
              img.mb-4(data-aos="fade-up")(src='@/assets/curso/temas/tema3/18.png', alt='imagen decorativa')
            p Centros de distribución de minoristas. Almacenes de suministros industriales. 
          .tarjeta.bg-gray.p-4(titulo="Almacén de comercio electrónico")
            figure
              img.mb-4(data-aos="fade-up")(src='@/assets/curso/temas/tema3/19.png', alt='imagen decorativa')
            p Centros de cumplimiento de Amazon, Temu, etc. Almacenes dark store para entregas ultra rápidas (15-30 minutos).  

  
    .fullwidth-bg.fullwidth-bg--1
    h3.graph-title.my-5(data-aos="fade-right").z-2 Según el grado de automatización
    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema3/20.png")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--secundario-s10")
          div(titulo="Almacén convencional")
            p.ps-5.mb-0 Cuentan con estanterías tradicionales y simples. Para facilitar las operaciones, se emplean montacargas y las estanterías están organizadas estratégicamente para permitir maniobras ágiles y seguras.
          div(titulo="Almacén automatizado")
            p.ps-5.mb-0 Utiliza sistemas robóticos y equipos programados para realizar tareas de almacenamiento, recuperación y transporte de mercancías con mínima intervención humana.
          div(titulo="Almacén inteligente")
            p.ps-5.mb-0 Va más allá de la automatización: integra <em>IoT, Big Data</em>, IA y computación en la nube para tomar decisiones en tiempo real y optimizar procesos de manera adaptativa.
  
    Separador
    #t_3_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.4	Funciones
  
    .bloque-texto-g.color-terciario-t20.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las funciones de un almacén en logística son múltiples y fundamentales para garantizar la eficiencia operativa y la satisfacción del cliente. Las principales funciones incluyen:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4.z-2
          h5 Tabla 8.
          span Tipos de funciones de los almacenes

        .tabla-a.color-secundario.z-2
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead
              tr(style="background-color: #CAE1F9;")
                th Tipo de función 
                th Actividad 
                th(colspan=2) Descripción 
            tbody
              tr(style="background-color: #FFFFFF;")
                td(rowspan=5) <strong>Funciones operativas </strong>
                td Recepción de bienes. 
                td(colspan=2) Verificación de cantidades y calidad.<br>Registro en el sistema (WMS/ERP).               
              tr(style="background-color: #F4F5F8;")
                td Almacenamiento 
                td(colspan=2) Ubicación en <em>racks</em>, estanterías o zonas específicas.<br> Control de condiciones (temperatura, humedad).
              tr(style="background-color: #FFFFFF;")
                td Gestión de inventarios
                td(colspan=2) Control de <em>stock</em>. Conteos cíclicos para evitar mermas.
              tr(style="background-color: #F4F5F8;")
                td Preparación de pedidos (<em>Picking & Packing</em>).
                td(colspan=2) Selección de productos según órdenes de compra.<br> Embalaje y etiquetado para envío.
              tr(style="background-color: #FFFFFF;")
                td Despacho y distribución.
                td(colspan=2) Control de <em>stock</em>.<br> Conteos cíclicos para evitar mermas.
              tr(style="background-color: #F4F5F8;")
                td(rowspan=3) <strong>Funciones de valor añadido</strong>
                td <em>Kitting</em>
                td(colspan=2) Agrupar componentes para ensamblaje posterior.              
              tr(style="background-color: #FFFFFF;")
                td Etiquetado y personalización.
                td(colspan=2) Preparación de productos para clientes específicos.
              tr(style="background-color: #F4F5F8;")
                td Servicios postventa
                td(colspan=2) Gestión de devoluciones.
              tr(style="background-color: #FFFFFF;")
                td(rowspan=4) <strong>Funciones estratégicas</strong>
                td Reducción de costos.
                td(colspan=2) Optimización de espacio y recursos.             
              tr(style="background-color: #F4F5F8;")
                td Control de calidad
                td(colspan=2) Inspección de los productos para garantizar que cumplen con los estándares requeridos.
              tr(style="background-color: #FFFFFF;")
                td Mejora del servicio al cliente.
                td(colspan=2) Entrega rápida y sin errores.
              tr(style="background-color: #F4F5F8;")
                td Soporte a la producción.
                td(colspan=2) Suministro eficiente de materiales.





  </template>

<script>
export default {
  name: 'Tema3',
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
