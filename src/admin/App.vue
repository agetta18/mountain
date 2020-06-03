<template lang="pug">
    div.root-wrapper-container 
        div.root-container
            template
                header.header-container(v-if="isUserLoggedIn")
                    headline
                        user(
                            userpic='https://picsum.photos/200'
                            username = "Анастасия Кошкина"
                        )
                section.tabs-container
                    tabs(v-if="isUserLoggedIn")
                          
                main.content-container               
                    router-view 
                 
</template>

<script>
import headline from './components/headline';
import tabs from './components/tabs';
import user from './components/user';
import store from "./store";

export default {

    components: {
        headline, 
        tabs, 
        user
      
    },

    computed: {
        isUserLoggedIn: function () {
            return store.getters["user/userIsLoggedIn"];
        },
    },
    
}
</script>

<style lang='postcss'>

@import './default.pcss';


    body {
        font-family: 'Open Sans', Helvetica, sans-serif;
        font-size: 16px;
        line-height: 1.42;
        
    }

    img{
        width: 100%;
    }

    .tabs-container, .page-container{
        width: 90%;
        margin: 0 auto;
        @include phones{
            margin:0 auto;
            width:100%;
        }
    }

    .content-container {
        background-image: url('../images/admin/bg.png');
        padding-top: 60PX;
        padding-bottom: 140px;
        @include tablets{
            padding-top: 50PX;
        }
        @include phones{
             padding-top: 0PX;
        }

    }

    .page-title{
        margin-bottom: 60PX;
        font-size: 21px;
        font-family: "Open Sans", sans-serif;
        color: rgb(65, 76, 99);
        font-weight: bold;
        @include tablets{
            margin-bottom: 50PX;
        }

        @include phones{
            margin-bottom: 0;
            padding: 40PX 0PX 40PX 20PX;
        }

        &__reviews{
            margin-bottom: 0;
        }
     
    
    }

    



   

</style>