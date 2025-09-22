export default {
  global: {
    Name: 'Fundamentos del flujo de bienes',
    Description:
      'Este componente aborda los fundamentos de la gestión logística de los bienes, explorando el concepto de bienes, sus tipos y sistemas de clasificación. Analiza el almacén como centro clave, sus características, tipos y funciones. Además, detalla el proceso operativo de almacén, incluyendo las operaciones logísticas, y los movimientos de almacén, con sus tipos, características y técnicas de clasificación, para garantizar un flujo eficiente de mercancías.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Flujo de bienes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Normativa',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Bienes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Fichas técnicas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Almacén',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Funciones',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Operación de almacén',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Etapas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Herramientas tecnológicas',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Movimientos de almacén',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tipos',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tipos de almacén',
      referencia:
        'Cadena de Suministro Interna. (2023). Tipos de almacenes. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=imhhp3VUYuA',
    },
    {
      tema: 'Almacén',
      referencia:
        'Brain Logistic. (2022). Almacenes: Concepto de almacén. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BIA7pl-zM0Q',
    },
    {
      tema: 'Operación de almacén',
      referencia:
        'Brain Logistic. (2020). Procesos básicos de un almacén. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XlU1UFvbpj4',
    },
    {
      tema: 'Movimientos de almacén',
      referencia:
        'Datisa. (2021). Tipos de movimientos de almacén. Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OLtioc-7r8w',
    },
  ],
  glosario: [
    {
      termino: 'AGV',
      significado:
        'vehículo de guiado automático, robot autónomo para transporte interno en almacenes.',
    },
    {
      termino: 'Almacén automatizado (AS/RS)',
      significado:
        'instalación que utiliza sistemas robóticos y <em>software</em> para gestionar inventarios con mínima intervención humana.',
    },
    {
      termino: 'Blockchain',
      significado:
        'tecnología de registro inmutable para trazabilidad logística y autenticidad de productos.',
    },
    {
      termino: 'Cadena de frío',
      significado:
        'proceso logístico que mantiene productos perecederos (ej. alimentos, medicamentos) en condiciones de temperatura controlada desde producción hasta distribución.',
    },
    {
      termino: '<em>Cross-docking</em>',
      significado:
        'estrategia logística donde las mercancías pasan directamente de recepción a despacho, sin almacenamiento prolongado.',
    },
    {
      termino: '<em>Dark store</em>',
      significado:
        'almacén dedicado exclusivamente a cumplir pedidos de comercio electrónico, sin atención al público. Operan para entregas ultrarrápidas (15-30 min).',
    },
    {
      termino: 'Gestión de devoluciones',
      significado:
        'proceso de recibir, inspeccionar y reincorporar productos devueltos (logística inversa).',
    },
    {
      termino: 'IoT',
      significado:
        'internet de las cosas, red de dispositivos interconectados para monitoreo en tiempo real.',
    },
    {
      termino: '<em>Kitting</em>',
      significado:
        'proceso de agrupar componentes específicos para ensamblaje o pedidos personalizados.',
    },
    {
      termino: '<em>Packing</em>',
      significado:
        'etapa de embalaje y etiquetado de productos antes del despacho.',
    },
    {
      termino: '<em>Picking</em>',
      significado:
        'proceso de selección y preparación de pedidos según órdenes de compra.',
    },
    {
      termino: 'Normativa ADR',
      significado:
        'regulaciones europeas para el transporte terrestre de mercancías peligrosas, aplicables en Colombia para garantizar seguridad y cumplimiento legal.',
    },
    {
      termino: 'RFID',
      significado:
        'es un sistema de almacenamiento y recuperación de datos remotos que usa dispositivos denominados etiquetas, tarjetas o transpondedores',
    },
    {
      termino: 'Unitarización',
      significado:
        'consolidación de carga en unidades (pallets, contenedores) para optimizar el transporte.',
    },
    {
      termino: 'WMS',
      significado:
        'sistema de gestión de almacenes, <em>software</em> para controlar inventarios y operaciones.',
    },
    {
      termino: 'Unitarización',
      significado:
        'proceso de agrupar mercancías sueltas en unidades más grandes (como palés o contenedores) para facilitar su manejo, transporte y almacenamiento.',
    },
    {
      termino: 'Zonificación',
      significado:
        'división del almacén en áreas según tipo de producto, rotación o peligrosidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aula Centro de Formación. (2022). <em>Gestión de Almacén y Logística.</em>',
      link:
        'https://dl.dropboxusercontent.com/scl/fi/ucro9rrtkrv682y7s1qt6/Curso-Gesti-n-de-Almanc-n-y-Log-stica-Aula-Centro-Formaci-n.pdf?rlkey=azxypu2r27s5m21odlj9ymwys&dl=0',
    },
    {
      referencia:
        'AR Racking. (2024). <em>Tipos de almacenes: Características y diferencias.</em>',
      link:
        'https://www.ar-racking.com/co/blog/tipos-de-almacenes-caracteristicas-y-diferencias/',
    },
    {
      referencia:
        'Rajapack. (2024). <em>Tipos de almacenes: clasificación y características.</em>',
      link:
        'https://www.rajapack.es/blog-es/tipos-de-almacenes-clasificacion-y-caracteristicas',
    },
    {
      referencia:
        'Universidad Tecnológica de Chile. (2017). <em>Logística y Distribución.</em>',
      link:
        'https://dl.dropboxusercontent.com/scl/fi/fj36tqqwn137olufh5mt9/15.-Log-stica-y-Distribucci-n-autor-Inacap.pdf?rlkey=in7otqa16lkpda014bvsmn5pd&dl=0',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yezid Arturo Choperena Guerrero',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador <i>web</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
