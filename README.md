# Pokedex - Reto técnico de Global66Cancel changes

## Demo

[Proyecto desplegado en Heroku](https://reto-tecnico-global66.herokuapp.com/#/)
> Quisas deba esperar un poco la primera vez que cargue la aplicación, ya que heroku duerme los proyectos inactivos.

## Descripción

Este proyecto es corresponde a la etapa de evaluación de habilidades técnicas de frontend. El cual tiene las siguientes características:

* VueJs v2 y Typescript
* Metodología BEM
* Vue Class Components
* Vuex
* Vue Router
* SASS
* Consumo de API https://pokeapi.co/api/v2/pokemon/

## Lanzar proyecto

Ejecutar los siguientes comandos en orden luego de clonarlo
```
npm i
npm run serve
```

## Librerías usadas

* vue-router: Complemento de VueJs para el manejo de las rutas

```js
npm install vue-router
```

* vuex: Complemento de VueJs para el manejo de estados globales

```js
npm install vuex
```

* vuex-class: Paquete que agrega decoradores de Vuex para emplearlas con Typescript y Class Components

```js
npm install vuex-class
```

* reflect-metadata: Paquete de apoyo a Typescript que permite usar los tipos de Typescript como valores compilados en Javascript, va de la mano con los decoradores de las Class Components

```js
npm install reflect-metadata
```

* axios: Paquete para hacer peticiones http

```js
npm install axios
```

* animate.css: Paquete que brinda animaciones css en forma de clases

```js
npm install animate.css
```

## Estructura

### src

* [api/](.\src\api)
  * [pokemonDB.ts](.\src\api\pokemonDB.ts)
* [assets/](.\src\assets)
  * [fonts/](.\src\assets\fonts)
    * [all.css](.\src\assets\fonts\all.css)
  * [icons/](.\src\assets\icons)
  * [images/](.\src\assets\images)
  * [logo.png](.\src\assets\logo.png)
* [components/](.\src\components)
  * [common/](.\src\components\common)
    * [Button.vue](.\src\components\common\Button.vue)
    * [Fab.vue](.\src\components\common\Fab.vue)
    * [Footer.vue](.\src\components\common\Footer.vue)
    * [index.ts](.\src\components\common\index.ts)
    * [Input.vue](.\src\components\common\Input.vue)
    * [Item.vue](.\src\components\common\Item.vue)
    * [List.vue](.\src\components\common\List.vue)
    * [Loader.vue](.\src\components\common\Loader.vue)
    * [Modal.vue](.\src\components\common\Modal.vue)
    * [PokemonInfo.vue](.\src\components\common\PokemonInfo.vue)
  * [layout/](.\src\components\layout)
    * [Container.vue](.\src\components\layout\Container.vue)
    * [index.ts](.\src\components\layout\index.ts)
    * [Wrapper.vue](.\src\components\layout\Wrapper.vue)
* [router/](.\src\router)
  * [index.ts](.\src\router\index.ts)
* [services/](.\src\services)
  * [fetchPokeApi.ts](.\src\services\fetchPokeApi.ts)
  * [index.ts](.\src\services\index.ts)
* [store/](.\src\store)
  * [index.ts](.\src\store\index.ts)
* [styles/](.\src\styles)
  * [global.sass](.\src\styles\global.sass)
  * [_mixins.sass](.\src\styles\_mixins.sass)
  * [_variables.sass](.\src\styles\_variables.sass)
* [types/](.\src\types)
  * [responses.ts](.\src\types\responses.ts)
  * [types.ts](.\src\types\types.ts)
* [utils/](.\src\utils)
  * [copyClipboard.ts](.\src\utils\copyClipboard.ts)
  * [index.ts](.\src\utils\index.ts)
* [views/](.\src\views)
  * [Home.vue](.\src\views\Home.vue)
  * [index.ts](.\src\views\index.ts)
  * [Welcome.vue](.\src\views\Welcome.vue)
* [App.vue](.\src\App.vue)
* [main.ts](.\src\main.ts)
* [shims-tsx.d.ts](.\src\shims-tsx.d.ts)
* [shims-vue.d.ts](.\src\shims-vue.d.ts)
