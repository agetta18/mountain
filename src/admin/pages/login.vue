<template lang="pug">
    section.section-login
        .login
            .login__content
                form(@submit.prevent='loginUser').login__form
                    .login__form-title Авторизация
                    .login__form-row
                        label.form__label 
                            input(required v-model='user.name').form__input
                            span.input__name Логин
                            span.form__icon.icon-user
                        label.form__label
                            input(type='password' required v-model='user.password').form__input
                            span.input__name Пароль
                            span.form__icon.icon-key
                                                         
                        .form__btn
                            button(type='submit').btn-send Отправить
   
    
</template>

<script>
import $axios from '../requests';
export default {
    name:'login',
   
    data: () => ({
        user: {
            name: '',
            password: ''
        }
    }),
    methods: {
        async loginUser() {
            try {
                const response = await $axios.post('/login', this.user);
                const token = response.data.token

                localStorage.setItem('token', token);
                $axios.defaults.headers["Authorixation"] = `Bearer ${token}`;

                this.$router.replace('/');
               
            } catch (error) {
                console.log(error);
                
            }
        }
    }
    
}
</script>

<style lang='postcss'>
@import '../default.pcss';
    .login{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('~images/content/bg.jpg');
        height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
       
        &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0.6;
            background-color: rgb(45, 60, 78);
        }
        @include phones{
            background-color: #fff;
        }
 

    }
    .login__form{
        padding: 60px 76px;
        @include phones{
            height: 100vh;
           padding: 170PX 0 150PX;
           width: 100vw;
        }
    

    }
    .login__content{
       background-color: #fff;
       z-index: 10;
    }

    .login__form-title{
        font-size: 36px;
        font-family: "OpenSans";
        color: rgb(65, 76, 99);
        line-height: 1.667;
        text-align: center;
        margin-bottom: 40px;
    }

    .form__input{
        font-size: 18px;
        font-family: "Open Sans";
        color: rgb(65, 76, 99);
        font-weight: bold;
        border:none;
        border-bottom: 1px solid black;
        outline: none;
        padding: 20PX 0 20PX 40PX;
        width: 408PX;
        transition: .6s;
        @include phones{
            width: 100%;
        }

        &:focus{
            outline: none;
            border-bottom-color: #5500f2;

            & ~ .icon-key{        
                opacity: 1;
                transition: .6s;
                background-image: svg-load('key.svg', fill='#5500f2', width='30px', height='30px');
            }

            & ~ .icon-user{
                opacity: 1;                   
                transition: .6s;
                background-image: svg-load('user.svg', fill='#5500f2', width='30px', height='30px');
            }
            
        }

        &:valid,
        &:focus{
            & ~ {
                .input__name{
                    transform: scale(1) translate(0, 0);
                }
            }

        }


       
       
    }

    .form__label{
        position: relative;
        display: block;
        margin-bottom: 40PX;
        height: 88px;

         
    }

    .login__form-row{
        display: flex;
        flex-direction: column;
        margin-bottom: 38px;
        align-items: center;
        justify-content: center;
        @include phones{
            padding: 30PX;
        }

    }

    .btn-send{
        background: rgb(130,22,232);
        background: linear-gradient( 90deg, rgb(147,0,232) 0%, rgb(111,0,235) 35%, rgb(74,0,237) 100%);
        padding: 32px 120px;
        border: none;
        border-radius: 50px 5px 50px 5px;
        outline: none;
        text-transform: uppercase;
        font-size: 18px;
        color: rgb(255, 255, 255);
        font-weight: bold;
        cursor: pointer;
        @include phones{
            padding: 32px 85px;
            border-radius: 40px 5px 40px 5px;
        }
       
    }

    .input__name{
        font-size: 16px;
        color: rgba(65, 76, 99, 0.302);
        line-height: 1.875;
        position: absolute;
        left:40PX;
        top: -38%;
        transform-origin: 0 50%;
        transform: scale(1.125) translateY(45px);
        transition: .6s;

    }
    .form__icon{
        width: 40px;
        height: 40px;
        position: absolute;
        top:19%;
    }

    .icon-key{
        display: block;
        background-image: svg-load('key.svg', fill='#c9ccd3', width='30px', height='30px');
        background-repeat: no-repeat;
    }

    .icon-user{
        display: block;
        background-image: svg-load('user.svg', fill='#c9ccd3', width='30px', height='30px');
        background-repeat: no-repeat;

    }


  


</style>