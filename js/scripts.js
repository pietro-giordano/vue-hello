const {createApp} = Vue

createApp({
      data() {
            return {
                  message: 'Ciao, questo è il primo codice scritto con Vue.js',
                  image: '../img/Logo-Vuejs.png',
                  alternative: 'Vue.js',
                  textCenter: 'text-center',
                  imageCenter: 'image-center'
            }
      }
}).mount('main')
