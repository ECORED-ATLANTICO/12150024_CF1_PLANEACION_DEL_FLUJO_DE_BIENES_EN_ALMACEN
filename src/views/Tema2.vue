<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Bienes

    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema2/1.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2
      .col-lg-10.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 En lo que respecta a su uso en logística, los bienes poseen como características fundamentales la necesidad de almacenamiento, transporte, control del llenado de inventario, promoviendo la disminución de los tiempos y costos en la operatividad de los procesos involucrados en su flujo de un origen hasta su destino final, garantizando un nivel de calidad y disponibilidad para cada etapa del proceso logístico.

    Separador
    #t_2_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.1	Concepto

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-10.col-md-7.col-xl-5
        figure
          img.mb-4.mb-xl-0(src='@/assets/curso/temas/tema2/2.png', alt='Imagen de un mecánico')(data-aos="fade-up")
      .col-xl-7
        p.mb-5 En el ámbito logístico, los bienes comprenden todos aquellos elementos, ya sean tangibles o intangibles, que poseen un valor económico y participan en procesos de producción, almacenamiento, transporte y distribución a lo largo de la cadena de suministro. Estos bienes pueden incluir desde materias primas y productos en proceso hasta artículos terminados o servicios vinculados a la administración de inventarios. En el ámbito logístico, los bienes comprenden todos aquellos elementos, ya sean tangibles o intangibles, que poseen un valor económico y participan en procesos de producción, almacenamiento, transporte y distribución a lo largo de la cadena de suministro. Estos bienes pueden incluir desde materias primas y productos en proceso hasta artículos terminados o servicios vinculados a la administración de inventarios.
        .row.align-items-stretch
          .col-md-4.mb-4.mb-md-0
            .numbered-card.rounded-bottom-5.rounded-start-0.px-4.py-3.me-3
              .numbered-card--num1
              p.mb-0 Constituyen el núcleo del movimiento de materiales dentro de la cadena de suministro.
              figure
                img.numbered-card--img(src='@/assets/curso/temas/tema2/3.svg')
          .col-md-4.mb-4.mb-md-0
            .numbered-card.rounded-bottom-5.rounded-start-0.px-4.py-3.me-3
              .numbered-card--num2
              p.mb-0 Exigen una gestión adecuada para reducir costos y asegurar su disponibilidad.
              figure
                img.numbered-card--img(src='@/assets/curso/temas/tema2/4.svg')
          .col-md-4.mb-4.mb-md-0
            .numbered-card.rounded-bottom-5.rounded-start-0.px-4.py-3.me-3
              .numbered-card--num3
              p.mb-0 Su manejo influye de manera directa en la eficiencia de las operaciones.
              figure
                img.numbered-card--img(src='@/assets/curso/temas/tema2/5.svg')

    .cajon.color-acento-contenido.p-4.mb-4.mb-lg-5
      p.mb-0 Para administrar estos bienes es fundamental comprender sus características, las cuales influyen directamente en los procesos de almacenamiento, transporte, manipulación y distribución.

    .mb-4.mb-lg-5.text-center
      p.px-3.py-1.rounded-4.d-inline-block.bg-darkblue.text-white.fw-bold.mx-auto.mb-0 A continuación, se muestran cuáles son las características de los bienes:

    .fullwidth-bg.fullwidth-bg--3
    .row.justify-content-center
      .col-xl-8
        PasosA.color-primario.mb-5(tipo="n")
          .row.align-items-center.justify-content-center
            .col-6.col-sm-2
              figure
                img.mb-4.mb-md-0(src='@/assets/curso/temas/tema2/6.png', alt='Imagen decorativa')
            .col-md-10.mb-4.mb-md-0
              h5 Tangibilidad
              p Los bienes pueden ser tangibles (productos físicos) o intangibles (servicios asociados), siendo los tangibles los que requieren manejo físico en la cadena logística.

          .row.align-items-center.justify-content-center
            .col-md-10.text-start
              h5 Valor económico
              p Poseen un valor económico que justifica su producción, almacenamiento, transporte y distribución, lo que influye en la prioridad y control que se les da en la gestión logística.
            .col-6.col-sm-2.mb-4.mb-md-0
              figure
                img.mb-4.mb-md-0(src='@/assets/curso/temas/tema2/7.png', alt='Imagen decorativa')
                
          .row.align-items-center.justify-content-center
            .col-6.col-sm-2
              figure
                img.mb-4.mb-md-0(src='@/assets/curso/temas/tema2/8.png', alt='Imagen decorativa')
            .col-md-10.mb-4.mb-md-0
              h5 Estado físico
              p Se presentan en diferentes estados: sólidos, líquidos o gaseosos, lo que determina las condiciones específicas para su almacenamiento y transporte.

          .row.align-items-center.justify-content-center
            .col-md-10.text-start
              h5 Durabilidad
              p Pueden ser perecederos o no perecederos, lo que afecta la necesidad de almacenamiento especializado y rapidez en la distribución.
            .col-6.col-sm-2.mb-4.mb-md-0
              figure
                img.mb-4.mb-md-0(src='@/assets/curso/temas/tema2/9.png', alt='Imagen decorativa')

          .row.align-items-center.justify-content-center
            .col-6.col-sm-2
              figure
                img.mb-4.mb-md-0(src='@/assets/curso/temas/tema2/10.png', alt='Imagen decorativa')
            .col-md-10.mb-4.mb-md-0
              h5 Fragilidad
              p Algunos bienes requieren manejo cuidadoso debido a su fragilidad (como vidrio o productos electrónicos), implicando embalajes y procesos logísticos especiales.

          .row.align-items-center.justify-content-center
            .col-md-10.text-start
              h5 Volumen y peso
              p Las dimensiones y peso influyen en la selección de medios y equipos para su manipulación, almacenamiento y transporte.
            .col-6.col-sm-2.mb-4.mb-md-0
              figure
                img.mb-4.mb-md-0(src='@/assets/curso/temas/tema2/11.png', alt='Imagen decorativa')

          .row.align-items-center.justify-content-center
            .col-6.col-sm-2
              figure
                img.mb-4.mb-md-0(src='@/assets/curso/temas/tema2/12.png', alt='Imagen decorativa')
            .col-md-10.mb-4.mb-md-0
              h5 Peligrosidad
              p Bienes que presentan riesgos (químicos, inflamables, tóxicos) necesitan cumplir con normativas específicas para garantizar seguridad en su manejo y transporte.

          .row.align-items-center.justify-content-center
            .col-md-10.text-start
              h5 Rotación
              p La frecuencia con la que se mueven o venden los bienes afecta la gestión del inventario y la planificación logística.
            .col-6.col-sm-2.mb-4.mb-md-0
              figure
                img.mb-4.mb-md-0(src='@/assets/curso/temas/tema2/13.png', alt='Imagen decorativa')

          .row.align-items-center.justify-content-center
            .col-6.col-sm-2
              figure
                img.mb-4.mb-md-0(src='@/assets/curso/temas/tema2/14.png', alt='Imagen decorativa')
            .col-md-10.mb-4.mb-md-0
              h5 Presentación y embalaje
              p Pueden ser a granel, unitarizados o en contenedores, lo que impacta en la eficiencia del manejo y transporte.

    Separador
    #t_2_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.2	Tipos

    p.mb-4 Los bienes en logística se pueden clasificar desde diversas perspectivas, según su uso, función, características físicas, o criticidad. La correcta clasificación de los bienes brinda los siguientes beneficios:

    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-4.mb-lg-5
      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema2/15.png', alt='Imagen de un mecánico')(data-aos="fade-up")
      .col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-md-6")
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/16.png' alt='Ilustacion de acompañamiento')  
            p.mb-4.text-center Optimizar el almacenamiento asignando espacios específicos según los requerimientos, como refrigeración o medidas de seguridad.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/17.png' alt='Ilustacion de acompañamiento')  
            p.mb-4.text-center Mejorar el transporte eligiendo los vehículos y rutas más apropiados para cada tipo de carga.
            
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/15.png' alt='Ilustacion de acompañamiento')  
            p.mb-4.mb-5.text-center Disminuir costos previniendo daños y gestionando el inventario de manera eficiente.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/15.png' alt='Ilustacion de acompañamiento')  
            p.mb-4.mb-5.text-center Cumplir con las normativas vigentes, especialmente en el manejo de bienes peligrosos o productos perecederos.

    .cajon.color-acento-contenido.p-4.mb-4.mb-lg-5
      p.mb-0 A continuación, se describen los tipos de bienes más relevantes.

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 2.
      span Tipos de bienes

    .tabla-a.color-secundario.z-2.mb-4.mb-lg-5
      table
        caption <strong>Fuente:</strong> SENA, 2025.
        thead
          tr(style="background-color: #CAE1F9;")
            th Clasificación
            th Tipo
            th Descripción
            th Ejemplo
            th Logística
        tbody
          tr(style="background-color: #FFFFFF;")
            td(rowspan=4) <strong>Por función en la cadena de suministro.</strong>
            td Materias primas.
            td Materiales básicos no procesados que se utilizan para fabricar productos terminados.
            td            
              ul.checklist
                li Petróleo crudo (para producir combustible y plásticos). 
                li Algodón en bruto (para industria textil).
            td Requieren transporte masivo y almacenamiento en silos o depósitos especiales.
          tr(style="background-color: #F4F5F8;")
            td Productos en proceso.
            td Bienes parcialmente terminados que necesitan más transformación.
            td            
              ul.checklist
                li Circuitos impresos semielaborados.
                li Chasis de automóviles sin ensamblar.
            td Necesitan seguimiento en líneas de producción y almacenes intermedios.
          tr(style="background-color: #FFFFFF;")
            td Productos terminados.
            td Artículos listos para su venta al consumidor final.
            td            
              ul.checklist
                li <em>Smartphones</em> empaquetados. 
                li Latas de refresco etiquetadas.
            td Requieren transporte masivo y almacenamiento en silos o depósitos especiales.
          tr(style="background-color: #F4F5F8;")
            td Materiales de embalaje y logística.
            td Elementos auxiliares para proteger y transportar mercancías.
            td            
              ul.checklist
                li Paletas de madera o plástico.
                li Cajas de cartón corrugado.
            td Su disponibilidad afecta directamente la eficiencia de preparación de pedidos.
          tr(style="background-color: #F4F5F8;")
            td(rowspan=3) <strong>Por durabilidad.</strong>
            td(style="background-color: #FFFFFF;") Perecederos.
            td(style="background-color: #FFFFFF;") Productos con vida útil limitada que requieren condiciones especiales.
            td(style="background-color: #FFFFFF;")            
              ul.checklist
                li Frutas y verduras frescas.
                li Vacunas y medicamentos termolábiles.
            td(style="background-color: #FFFFFF;") Necesitan cadena de frío (2-8 °C o congelación) y transporte rápido.
          tr(style="background-color: #F4F5F8;")
            td No perecederos.
            td Productos que no se deterioran rápidamente.
            td            
              ul.checklist
                li Arroz y pastas secas.
                li Productos electrónicos.
            td Permiten almacenamiento prolongado en condiciones estándar.
          tr(style="background-color: #FFFFFF;")
            td Frágiles.
            td Artículos susceptibles a daños por impacto o vibración.
            td            
              ul.checklist
                li Vidrio y cristalería.
                li Esculturas y obras de arte.
            td Requieren embalaje especial (espumas, amortiguadores) y manipulación cuidadosa.
          tr(style="background-color: #FFFFFF;")
            td(rowspan=2) <strong>Por demanda y rotación.</strong>
            td(style="background-color: #F4F5F8;") De alta rotación.
            td(style="background-color: #F4F5F8;") Productos de consumo masivo con venta rápida.
            td(style="background-color: #F4F5F8;")            
              ul.checklist
                li Agua embotellada.
                li Productos de higiene personal.
            td(style="background-color: #F4F5F8;") Necesitan reposición constante y ubicación estratégica en almacenes.
          tr(style="background-color: #FFFFFF;")
            td De baja rotación.
            td Productos con demanda esporádica o estacional.
            td            
              ul.checklist
                li Equipos médicos especializados.
                li Repuestos para maquinaria.
            td Gestión por pedido <em>(Make-to-Order)</em> para evitar exceso de inventario.
          tr(style="background-color: #F4F5F8;")
            td(rowspan=3) <strong>Por durabilidad.</strong>
            td Perecederos.
            td Productos con vida útil limitada que requieren condiciones especiales.
            td            
              ul.checklist
                li Frutas y verduras frescas.
                li Vacunas y medicamentos termolábiles.
            td Necesitan cadena de frío (2-8 °C o congelación) y transporte rápido.
          tr(style="background-color: #FFFFFF;")
            td No perecederos.
            td Productos que no se deterioran rápidamente.
            td            
              ul.checklist
                li Arroz y pastas secas.
                li Productos electrónicos.
            td Permiten almacenamiento prolongado en condiciones estándar.
          tr(style="background-color: #F4F5F8;")
            td Frágiles.
            td Artículos susceptibles a daños por impacto o vibración.
            td            
              ul.checklist
                li Vidrio y cristalería.
                li Esculturas y obras de arte.
            td Requieren embalaje especial (espumas, amortiguadores) y manipulación cuidadosa.
          tr(style="background-color: #FFFFFF;")
            td(rowspan=4) <strong>Por peligrosidad.</strong>
            td Explosivos  (Clase 1).
            td(rowspan=4) Sustancias que representan riesgos para la salud, seguridad o medio ambiente.
            td Fuegos artificiales.
            td(rowspan=4) 
              p Embalaje y etiquetado especial.
              p Transporte con personal certificado.
              p Documentación específica (hojas de seguridad).

          tr(style="background-color: #F4F5F8;")
            td Líquidos inflamables (Clase 3).
            td Productos que no se deterioran rápidamente.
          tr
            td Sustancias tóxicas  (Clase 6).
            td Artículos susceptibles a daños por impacto o vibración.
          tr(style="background-color: #F4F5F8;")
            td Corrosivos  (Clase 8).
            td Artículos susceptibles a daños por impacto o vibración.
          tr(style="background-color: #F4F5F8;")
            td(rowspan=2) <strong>Por tamaño y peso.</strong>
            td(style="background-color: #FFFFFF;") Voluminosos.
            td(style="background-color: #FFFFFF;") Productos que ocupan mucho espacio.
            td(style="background-color: #FFFFFF;")            
              ul.checklist
                li Maquinaria industrial.
                li Vehículos.
            td(style="background-color: #FFFFFF;") Requieren transporte especializado y espacios de almacenaje amplios.
          tr(style="background-color: #F4F5F8;")
            td Alto peso.
            td Productos con densidad elevada.
            td            
              ul.checklist
                li Bloques de acero.
                li Contenedores llenos de líquidos.
            td Necesitan equipos de manipulación especiales (grúas, montacargas reforzados).

    Separador
    #t_2_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.3	Fichas técnicas

    .fullwidth-bg.fullwidth-bg--3
    .row.justify-content-center.align-items-center.factores-slider.z-2
      .col-10.col-sm-7.col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/20.png', alt='Imagen de un mecánico')(data-aos="fade-up")
      .col-lg-8.mb-3.mb-lg-0
        p.mb-3 Las fichas técnicas son documentos que contienen información detallada y específica sobre un bien o producto. En logística, estas fichas son fundamentales para:
        .row.align-items-center.mb-4
          .col-xl-8
            ul.checklist
              li Identificar correctamente los bienes.
              li Conocer sus características físicas y técnicas.
              li Facilitar su almacenamiento, manipulación y transporte
              li Asegurar el cumplimiento de normativas y requisitos específicos.
              li Apoyar la gestión de inventarios y trazabilidad.
          .col-xl-4.d-none.d-xl-block
            figure
              img(src='@/assets/curso/temas/tema2/21.png', alt='Imagen de un mecánico')(data-aos="fade-up")
        .cajon.color-acento-contenido.p-4.mb-4.mb-lg-5
          p.mb-0 Estas fichas técnicas permiten a los equipos logísticos tomar decisiones informadas sobre el manejo adecuado de los bienes y evitar errores que puedan afectar la cadena de suministro.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Elementos clave de una ficha técnica
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema2/22.svg', alt='Se detalla en la función de los anillos: anillos de compresión, anillos de aceite y elemento eléctrico.')
        figcaption <strong>Fuente:</strong> SENA, 2025.

    .bg-fondo-3.mb-5.rounded-4.overflow-hidden
      .p-4.p-lg-2
        .row.align-items-center.justify-content-end
          .col-10.col-sm-8.col-lg-4.mb-3.mb-lg-0
            figure
              img.w-305(src="@/assets/curso/temas/tema2/23.png", data-aos="zoom-in")
          .col-lg-8(data-aos="fade-left")
            .row.align-items-center
              .col-2.col-xl-1.d-none.d-sm-block
                img.w-53.w-xl-100(src="@/assets/curso/temas/tema2/waves.svg")
              .col-sm-10.col-xl-11
                p.mb-0 <strong>Nota</strong>: Las fichas técnicas deben actualizarse periódicamente y estar disponibles en mínimo dos idiomas para operaciones internacionales. Se recomienda la implementación del formato digital con código QR para acceso rápido en almacenes y puertos.

    p.mb-4 A continuación, se presenta una estructura general recomendada para la elaboración de las fichas técnicas.

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4.z-2
          h5 Tabla 3.
          span Estructura general para fichas técnicas de bienes

        .tabla-a.color-secundario.z-2.mb-4.mb-lg-5
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead
              tr(style="background-color: #CAE1F9;")
                th Elementos
                th(colspan=2) Detalles
            tbody
              tr(style="background-color: #F4F5F8;")
                td(colspan=3) <strong>1. Identificación del producto.</strong>
              tr
                td Código/Nombre comercial.
                td(colspan=2)
              tr
                td Fabricante/Proveedor.
              tr(style="background-color: #F4F5F8;")
                td(colspan=3) <strong>2. Características físicas.</strong>
              tr
                td Dimensiones/Peso.
                td(colspan=2)
              tr
                td Unidades por embalaje.
              tr(style="background-color: #F4F5F8;")
                td(colspan=3) <strong>3. Condiciones de manipulación.</strong>
              tr
                td Equipos requeridos.
                td(colspan=2)
              tr
                td Limitaciones operativas.
              tr(style="background-color: #F4F5F8;")
                td(colspan=3) <strong>4. Almacenamiento.</strong>
              tr
                td Configuración óptima.
                td(colspan=2)
              tr
                td Condiciones ambientales.
              tr(style="background-color: #F4F5F8;")
                td(colspan=3) <strong>5. Transporte.</strong>
              tr
                td Medios recomendados.
                td(colspan=2)
              tr
                td Restricciones legales.
              tr(style="background-color: #F4F5F8;")
                td(colspan=3) <strong>6. Seguridad.</strong>
              tr
                td EPP necesario.
                td(colspan=2)
              tr
                td Protocolos de emergencia.
              tr(style="background-color: #F4F5F8;")
                td(colspan=3) <strong>7. Documentación asociada.</strong>
              tr
                td Certificaciones.
                td(colspan=2)
              tr
                td Hojas de seguridad.
                td(colspan=2)

    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema2/24.png", alt="Imagen decorativa")

    .fullwidth-bg.fullwidth-bg--3
    .row.justify-content-center.z-2
      .col-lg-10.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Dado que los bienes en la cadena de suministro pueden clasificarse por función, durabilidad, naturaleza y peligrosidad, las fichas técnicas deben adaptarse para cubrir las especificidades de cada tipo. A continuación, se describen ampliamente los tipos de fichas técnicas más relevantes para estos bienes, integrando las características que deben contener para optimizar la gestión logística:

    .row.justify-content-center.z-2.mt-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--secundario")
          .row(titulo="Por función en la cadena de suministro").justify-content-center.pt-4
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-4.z-2
                h5 Tabla 4.
                span Ficha técnica para tipos de bienes según la función en la cadena de suministro

              .tabla-a.color-secundario.z-2.mb-4.mb-lg-5
                table
                  caption <strong>Fuente:</strong> SENA, 2025.
                  thead
                    tr(style="background-color: #CAE1F9;")
                      th(style="text-align: center") Tipo de bienes
                      th(style="text-align: center")(colspan=2) Contenido esencial
                  tbody
                    tr(style="background-color: #FFFFFF")
                      td(style="text-align: center") Materias primas
                      td(colspan=2)
                        ul.checklist
                          li Descripción del producto (tipo, origen, código de inventario).
                          li Especificaciones físicas (dimensiones, peso, composición).

                    tr(style="background-color: #F4F5F8;")
                      td(style="text-align: center") Productos en proceso
                      td(colspan=2)
                        ul.checklist
                          li Condiciones de almacenamiento y manejo. 
                          li Requisitos de embalaje y transporte. Información sobre lote y fecha de fabricación para control de calidad. Instrucciones para uso o procesamiento posterior.
                    tr(style="background-color: #FFFFFF;")
                      td(style="text-align: center") Productos terminados
                      td(colspan=2)
                        ul.checklist
                          li Información sobre lote y fecha de fabricación para control de calidad. 
                          li Instrucciones para uso o procesamiento posterior.
                    tr(style="background-color: #F4F5F8;")
                      td(style="text-align: center") Materiales de embalaje y logística
                      td(colspan=2)
                        ul.checklist
                          li Se detallan características como resistencia, dimensiones, compatibilidad con productos, y normas de seguridad para su uso en embalaje y protección durante transporte.

          .row(titulo="Por durabilidad").justify-content-center.pt-4
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-4.z-2
                h5 Tabla 5.
                span Ficha técnica para tipos de bienes según la durabilidad

              .tabla-a.color-secundario.z-2.mb-4.mb-lg-5
                table
                  caption <strong>Fuente:</strong> SENA, 2025.
                  thead
                    tr(style="background-color: #CAE1F9;")
                      th(style="text-align: center") Tipo de bienes
                      th(style="text-align: center")(colspan=2) Contenido esencial
                  tbody
                    tr(style="background-color: #FFFFFF")
                      td(style="text-align: center") Materias primas
                      td(colspan=2)
                        ul.checklist
                          li Descripción del producto (tipo, origen, código de inventario).
                          li Especificaciones físicas (dimensiones, peso, composición).

                    tr(style="background-color: #F4F5F8;")
                      td(style="text-align: center") Productos en proceso
                      td(colspan=2)
                        ul.checklist
                          li Condiciones de almacenamiento y manejo. 
                          li Requisitos de embalaje y transporte. Información sobre lote y fecha de fabricación para control de calidad. Instrucciones para uso o procesamiento posterior.
                    tr(style="background-color: #FFFFFF;")
                      td(style="text-align: center") Productos terminados
                      td(colspan=2)
                        ul.checklist
                          li Información sobre lote y fecha de fabricación para control de calidad. 
                          li Instrucciones para uso o procesamiento posterior.
                    tr(style="background-color: #F4F5F8;")
                      td(style="text-align: center") Materiales de embalaje y logística
                      td(colspan=2)
                        ul.checklist
                          li Se detallan características como resistencia, dimensiones, compatibilidad con productos, y normas de seguridad para su uso en embalaje y protección durante transporte.
          .row(titulo="Por naturaleza").justify-content-center.pt-4
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-4.z-2
                h5 Tabla 6.
                span Ficha técnica para tipos de bienes según la función en la cadena de suministro

              .tabla-a.color-secundario.z-2.mb-4.mb-lg-5
                table
                  caption <strong>Fuente:</strong> SENA, 2025.
                  thead
                    tr(style="background-color: #CAE1F9;")
                      th(style="text-align: center") Tipo de bienes
                      th(style="text-align: center")(colspan=2) Contenido esencial
                  tbody
                    tr(style="background-color: #FFFFFF")
                      td(style="text-align: center") Materias primas
                      td(colspan=2)
                        ul.checklist
                          li Descripción del producto (tipo, origen, código de inventario).
                          li Especificaciones físicas (dimensiones, peso, composición).

                    tr(style="background-color: #F4F5F8;")
                      td(style="text-align: center") Productos en proceso
                      td(colspan=2)
                        ul.checklist
                          li Condiciones de almacenamiento y manejo. 
                          li Requisitos de embalaje y transporte. Información sobre lote y fecha de fabricación para control de calidad. Instrucciones para uso o procesamiento posterior.
                    tr(style="background-color: #FFFFFF;")
                      td(style="text-align: center") Productos terminados
                      td(colspan=2)
                        ul.checklist
                          li Información sobre lote y fecha de fabricación para control de calidad. 
                          li Instrucciones para uso o procesamiento posterior.
                    tr(style="background-color: #F4F5F8;")
                      td(style="text-align: center") Materiales de embalaje y logística
                      td(colspan=2)
                        ul.checklist
                          li Se detallan características como resistencia, dimensiones, compatibilidad con productos, y normas de seguridad para su uso en embalaje y protección durante transporte.
          .row(titulo="Por peligrosidad").justify-content-center.pt-4
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-4.z-2
                h5 Tabla 7.
                span Ficha técnica para tipos de bienes según la función en la cadena de suministro

              .tabla-a.color-secundario.z-2.mb-4.mb-lg-5
                table
                  caption <strong>Fuente:</strong> SENA, 2025.
                  thead
                    tr(style="background-color: #CAE1F9;")
                      th(style="text-align: center") Tipo de bienes
                      th(style="text-align: center")(colspan=2) Contenido esencial
                  tbody
                    tr(style="background-color: #FFFFFF")
                      td(style="text-align: center") Materias primas
                      td(colspan=2)
                        ul.checklist
                          li Descripción del producto (tipo, origen, código de inventario).
                          li Especificaciones físicas (dimensiones, peso, composición).

                    tr(style="background-color: #F4F5F8;")
                      td(style="text-align: center") Productos en proceso
                      td(colspan=2)
                        ul.checklist
                          li Condiciones de almacenamiento y manejo. 
                          li Requisitos de embalaje y transporte. Información sobre lote y fecha de fabricación para control de calidad. Instrucciones para uso o procesamiento posterior.
                    tr(style="background-color: #FFFFFF;")
                      td(style="text-align: center") Productos terminados
                      td(colspan=2)
                        ul.checklist
                          li Información sobre lote y fecha de fabricación para control de calidad. 
                          li Instrucciones para uso o procesamiento posterior.
                    tr(style="background-color: #F4F5F8;")
                      td(style="text-align: center") Materiales de embalaje y logística
                      td(colspan=2)
                        ul.checklist
                          li Se detallan características como resistencia, dimensiones, compatibilidad con productos, y normas de seguridad para su uso en embalaje y protección durante transporte.


</template>

<script>
export default {
  name: 'Tema2',
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
