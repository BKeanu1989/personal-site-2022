# VueJs

## Vue 2
[VueJs 2](https://vuejs.org/)
## Vue 3
Das Update auf Vue 3 kam mit viel Widerspruch, da befürchtet worden ist, dass die "Einfachheit" von Vue 2 abhanden kommt. Die Syntax sollte sich stark ändern. Ein regelrechter Hass prasselte auf das Projekt ein. Die bisherigen Syntax (Option API) wurde aber nicht ersetzt sondern es wurde einfach nur mit der Composition API erweitert. 

Ich bin ein großer Fan von der neuen Composition API. 

Ich muss sagen, dass Vue2 die beste Dokumentation bis dato hatte. Mit der Composition API ist diese zwar immer noch großartig, aber man muss sich ein wenig zurechtfinden. Der VueJs "Gründer" Evan You hat aber eine neue Dokumentation angekündigt - erreichbar unter -  und wird bald die alte Dokumention ersetzen.


### Tools
One of the biggest disadvantages for using Vue3 is that some frameworks are still not ready Vue2. 

#### Vue use (core)

#### Nuxt



### Blog
vmodel props input vue 3 in components


## passing events from parent to children

(via ref?)
https://stackoverflow.com/questions/67371579/vue-3-emit-event-from-parent-to-child-component


https://vueshowcase.com/question/how-to-get-and-observe-ref-to-element-from-a-v-for

```
Unlike SFCs with a regular <script> block, <script setup> components are closed by default -- i.e. variables inside the <script setup> scope are not exposed to the parent unless explicitly exposed via defineExpose(). An empty object in the logged template ref implies you haven't exposed any properties.
```

--> upgrade vue

error:
```
runtime-core.esm-bundler.js?5c40:38 [Vue warn]: Invalid vnode type when creating vnode: undefined. 
```
https://stackoverflow.com/questions/68293064/vue-3-invalid-vnode-type

probable solution in vue.config.js uunder configureWebpack -> resolve 
            alias: {
                vue: path.resolve(`./node_modules/vue`)
            }

```
runtime-core.esm-bundler.js?5c40:38 [Vue warn]: Plugin has already been applied to target app.
```


- [ ] https://github.com/vuejs/vue-cli/issues/2754

use services more for:
- [ ] data sources
    - [ ] api 
    - [ ] database

use car service .get