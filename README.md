# Web de Call Of Data 2018

## Pasos para empezar a desarrollar

1. Instala las dependencias

```npm install```

2. Inicia el gestor de tareas

```npm run dev```

## Pasos para subir a pro

1. Construir proyecto

```npm run build```

## Gestión de datos

Los datos de cada módulo se suelen cargar dinámicamente. Si necesitas cambiar algun datos de algun módulo, 
los pasa son:

1. Los datos se encuentran en `./src/models`
2. Cambia el datos que desees
3. Ejecuta en un terminal en la raíz del proyecto `npm run build`
4. Si falla intenta a installar las dependencias `npm install`
5. Sube los ficheros que se te generen de la carpeta `./dist`

## Gestión de idioma

Debido a que la landing se encuentra en dos idiomas (castellano e inglés), 
tenemos que incluir las cadenas de texto de una manera diferentes a como lo hacíamos antes.

1. Marcar HTML con la key que deseemos

Imaginemos que queremos incluir el texto `Buenos días, bienvenida` en nuestro `index.html`. Anteriormente,
incluíamos un etiqueta `h2` (por ejemplo) e incluíamos el texto¡ Lo hacíamos así:

`<h2>Buenos días, bienvenida</h2>`

Como ahora estamos en una landing multidioma, la forma de marcar el HTML será la siguiente:

`<h2 data-lang="welcome"></h2>`

Dejamos vacía la etiqueta y marcamos con la propiedad  `data-lang`.

2. Incluir la key en los ficheros de idiomas

En la carpeta `assets/lang` encontraremos los idiomas actuales `es-ES` y `en-GB`. Tenemos que incluir la 
key con su valor en cada uno de los ficheros. De esta manera:

```js
// assets/lang/en-GB.json
{
  ...
  "welcome": "Good morning, welcome",
  ...
}
```

```js
// assets/lang/es-ES.json
{
  ...
  "welcome": "Buenos días, bienvenida",
  ...
}
```

Con esto ya habremos terminado

