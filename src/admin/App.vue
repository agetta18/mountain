<template lang="pug">
    div.root-wrrapper-container 
        div.root-container
            template
                header.header-container
                    headline
                        user(
                            userpic='https://picsum.photos/200'
                            username = "Анастасия Кошкина"
                        )
                section.tabs-container
                    tabs(
                        @tabChanged="handleTabChange"
                    )
                main.content-container
                    .about-page-container
                        .container
                            .about-page__title
                                h2.page-title Блок &laquo;Обо мне&raquo;
                                button.about-page__add() Добавить группу  
                            .about-page__content
                                 .container
                                    ul.skill__list
                                        li.skill__item
                                            .form-skill__container
                                                form.categories-form
                                                    input(type="text" placeholder="Название новой группы" ).input-name
                                                    button().button-ok
                                                    button().button-delete
                                                .skill-container
                                                    h2
                                                    hr
                                                    table
                                                        skill-item
                                                    form.add-skill-wrapper
                                                        input(type="text" placeholder="Новый навык" required ).input-name.input-name__skill
                                                        input(type="text" placeholder="100 %" required).input-percent
                                                        input(type="file").input-file 
                                                   
                                            li.skill__item
                                                form.categories-form
                                                    input(type="text" required).input-name
                                                    button().button-ok
                                                    button().button-delete
                                                .skill-container
                                                    h2
                                                    hr
                                                    table
                                                        ul.skill-list
                                                            li.skill-item
                                                                .skill-item__name  Html
                                                                .skill-item__percent 30 %
                                                                .skill-item__btns
                                                                    button.btn-pencil
                                                                    button.btn-trash
                                        
                                                            li.skill-item
                                                                .skill-item__name  CSS
                                                                .skill-item__percent 50 %
                                                                .skill-item__btns
                                                                    button.btn-pencil
                                                                    button.btn-trash
                                                            li.skill-item
                                                                .skill-item__name  JS
                                                                .skill-item__percent 100 %
                                                                .skill-item__btns
                                                                    button.btn-pencil
                                                                    button.btn-trash
                                                            
                                                    form.add-skill-wrapper
                                                        input(type="text" placeholder="Новый навык" required).input-name.input-name__skill
                                                        input(type="text" placeholder="100 %" required).input-percent
                                                        input(type="file").input-file
                    .page-add-work
                        .add-work__container
                            form.form__add
                                .form__title Добавление работы
                                hr
                                table.table-work
                                    .add__picture
                                        h3.title-save Перетащите или загрузите для загрузки изображение
                                        button.btn-load Загрузить
                                    .desc__form
                                        label.label-work Название
                                        input(required).input-work
                                        label.label-work Ссылка
                                        input(required).input-work
                                        label.label-work Описание
                                        textarea(rows='4').textarea-work
                                        label.label-work Добавление тэга
                                        input(required).input-work
                                        .btn-work
                                            button(type='reset').btn-cancel Отмена
                                            button().btn-save Сохранить
                            .new-work  
                                ul.new-work__list
                                    li.new-work__item
                                        .new-work__btn--container
                                            button().new-work__btn Добавить работу
                                    li.new-work__item
                                        .new-work__block
                                            .new-work__pic
                                                img(src='../images/content/653.jpg')
                                            .new-work__desc
                                                h3.desc__title Новая работа
                                                .desc__text
                                                    p Описание работы
                                                .desk__link http://google.com
                                            .new-work__btns
                                                    button.btn-edit
                                                    button.btn-del 
                    .page-reviews
                        .reviews__container
                            form.add-review
                                .form__title Добавить отзыв
                                hr
                                .form__col
                                    .left__col
                                        .avatar__wrapper
                                            .avatar__man
                                                
                                        button.add__avatar Добавить фото
                                    .right__col
                                        .form__row.form__row-up
                                            label(for='name-user').form__label--review.form__label--up Имя автора
                                                input(name='name-user' required).reviews-input
                                            label.form__label--review.form__label--up Титул автора
                                                input(required).reviews-input
                                        .form__row
                                            label.form__label--review Отзыв
                                                textarea(rows='3').message
                                        .btn-reviews
                                            button(type='reset').btn-cancel Отмена
                                            button().btn-save Сохранить
                            .new-reviews
                                ul.reviews__list
                                    li.reviews__item
                                        .reviews__btn--container
                                            button().reviews__btn Добавить отзыв

                                    li.reviews__item
                                        .review
                                            .user-info
                                                .user-avatar__wrapper
                                                    img(src='../images/user/user2.jpg')
                                                    
                                                .user
                                                    .user-name Владимир Сабанцев
                                                    .user-position Преподаватель
                                            hr
                                            .review-text Этот код выдержит любые испытания. Только, пожалуйста, не загружайте сайт на слишком старых браузерах
                                            .review-btns
                                                button.btn-edit
                                                button.btn-del 
                section.section-login
                    .login
                        .login__content
                            form.login__form
                                .login__form-title Авторизация
                                .login__form-row
                                    label.form__label 
                                        input(required).form__input
                                        span.input__name Логин
                                        span.form__icon.icon-user
                                    label.form__label
                                        input(type='password' required).form__input
                                        span.input__name Пароль
                                        span.form__icon.icon-key
                                             
                                               
                                    .form__btn
                                        button.btn-send Отправить
                            
                                               








                                                        

                                    


            
                       
</template>

<script>

import headline from './components/headline';
import tabs from './components/tabs';
import user from './components/user';
export default {
    components: {
        headline, 
        tabs, 
        user
    },
    // methods: {
    //     handleTabChange()
    // }
    
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

    .tabs-container{
        width: 90%;
        margin: 0 auto;
    }

    .page-title{
        font-size: 21px;
        font-family: "Open Sans";
        color: rgb(65, 76, 99);
        font-weight: bold;
        line-height: 1.619;
 
    }
    .about-page__title{
        display: flex;
        width: 40%;
    }

    .about-page__add{
        margin-left: auto;
        display: flex;
        align-items: center;
        border: none;
        outline: none; 
        font-size: 16px;
        color: rgb(56, 59, 207);
        line-height: 2.118;
        background-color: transparent;
        cursor: pointer;
      
        &:before{
            content: '+';
            display: block;
            color: rgb(255, 255, 255);
            margin-right: 10px;
            top:50%;
            left:50%;
            line-height: 20px;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background-image: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
        }
    
    }

    .input-name{
        padding: 15px 0;
        border:none;
        border-bottom: 1px solid black;
        width: 273px;
        outline: none;

        &__skill{
            margin-left: 80px;
            width: 156px;
            padding-left: 22px;
            padding-right: 22px;
        }
    }

   

    .root-container{
        background-image: url('../images/admin/bg.png');
    }


    .button-ok{
        background-image: svg-load('tick.svg', fill='#00d70a');
        background-repeat: no-repeat;
        height: 13px;
        width: 15px;
        border: none;
        outline: none;
        cursor: pointer;  
        margin-left: 140px; 
    }
  
 
    .button-delete{
        background-image: svg-load('remove.svg', fill='#bf2929');
        background-repeat: no-repeat;
        height: 11px;
        width: 15px;
        border: none;
        outline: none;
        cursor: pointer;  
        margin-left: 20px;
    }

    .input-file{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-image: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
        border:none;
        position: relative;
        cursor: pointer;
        outline: none;
  

        &:after{
            content:'+';
            color: #fff;
            font-size: 30px;
            font-family: "OpenSans";
            position:absolute;
            top:50%;
            left:50%;
            transform: translate(-50%, -50%);

        }

    }

    ul{
        padding:0;
    }

    .skill__list{
        display: grid;
        list-style-type: none;
        grid-template-rows: 2fr;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2vw;
        
    }
   

    .skill__item, .form__add{
        background-color: #fff;
        padding: 20PX 20PX 30PX;
        box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);


    }

    .content-container{
        width: 90%;
        margin: 0 auto;
    }

   .skill-item__btns{
       margin-left: auto;
   }

    .input-percent{
        padding: 16px 12px;
        border: none;
        border-bottom: 1px solid black;
        outline: none;
        width: 64px;
    }

    .btn-pencil{
        outline: none;
        border: none;
        width: 18px;
        height: 19px;
        background-image: svg-load('pencil.svg', width='12PX', height ='18PX', fill='#a0a5b1');
        background-repeat: no-repeat;
        cursor: pointer;

    }
    .btn-trash{
        outline: none;
        border: none;
        width: 18px;
        height: 19px;
        background-image: svg-load('trash.svg', width='12PX', height ='18PX', fill='#a0a5b1');
        background-repeat: no-repeat;
        cursor: pointer;
        margin-left: 10px;
    }

    .add-skill-wrapper{
        display:grid;
        grid-template-columns: 3fr 1fr 1fr;
        grid-gap: 2vw;
        position: absolute;
        bottom: 12%;

    }

  

    .skill-item{
        display: grid;
        grid-template-columns: 275px 80px 65px;
        grid-gap: 2vw;
        margin-top: 25px;
        font-size: 16px;
        font-family: "OpenSans";
        color: rgb(65, 76, 99);
        position: relative;
            
    }

    .form-skill__container{
        min-height: 390px;
    }

    .table-work{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2vw;
        padding-top: 50px;

    }

    .desc__form{
        display:flex;
        flex-direction: column;
    }

   
   .input-work, .reviews-input{
        border: none;
        border-bottom: 1px solid black;
        padding:  18px 0;
        outline: none;
        font-size: 16px;
        font-family: "OpenSans";
        color: black;
        margin-bottom: 30px;
       
    }

   .textarea-work, .message{
        resize: none;
        padding: 23px;
        outline: none;
        margin-bottom: 30px;
        margin-top: 20px;
        font-size: 16px;
        font-family: "OpenSans";
        color: rgb(65, 76, 99);
        line-height: 1.875;
    }

  

    .btn-cancel{
        color:violet;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        font-family: "OpenSans";
        color: rgb(56, 59, 207);
        line-height: 2.118;
        margin-right: 56px;
        cursor: pointer;
    }

   .btn-save{
        font-size: 16px;
        font-family: "Open Sans";
        color: rgb(255, 255, 255);
        font-weight: bold;
        text-transform: uppercase;
        padding: 24px 44px;
        border-radius: 50px;;
        background-image: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
        outline: none;
        cursor: pointer;
    }

    .btn-load{
        font-size: 16px;
        font-family: "Open Sans";
        color: rgb(255, 255, 255);
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 50px;
        padding: 20px 40px;
        background-image: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
        cursor: pointer;
    }

    .add__picture{
        display: flex;
        background-color: #dee4ed;
        border: 1px dashed gray ;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50%;

    }

    .title-save{
        font-size: 16px;
        font-family: "OpenSans";
        color: rgba(65, 76, 99, 0.502);
        line-height: 2.118;
        text-align: center;
        padding-left: 30%;
        padding-right: 30%;
        
 
    }

    .label-work, .form__label--review{
        font-size: 16px;
        font-family: "OpenSans";
        color: rgba(65, 76, 99, 0.502);
        line-height: 1;
  
    }

    .form__label--review{
        display: flex;
        flex-direction: column;
    }

    .new-work__btn, .reviews__btn{
        background-color: transparent;
        position: relative;
        font-size: 18px;
        font-family: "Open Sans";
        color: rgb(255, 255, 255);
        font-weight: bold;
        outline: none;
        border: none;
        cursor: pointer;
        top:60%;
        left:25%;
 
        &:after{
            content: "+";
            padding: 48px 48px;
            border-radius: 50%;
            border: 2px solid #fff;
            position: absolute;
            bottom:100%;
            left:10%;
            font-size: 72px;
            font-family: "Open Sans";
            color: rgb(255, 255, 255);  
            margin-bottom: 28px; 
            line-height:.5;
          
        }

    }

    .new-work__btn--container, .reviews__btn--container{
        background-image: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
        height: 100%;
        position: relative;
        min-height: 380px;

    }

    .new-work{
        margin-top: 30px;
    }

    .new-work__list{
        list-style-type: none;
        display: grid;
        grid-template-columns: 340px 340px 340px;
        grid-gap: 32px;
        padding: 0;

    }

    .desc__title{
        font-size: 18px;
        font-family: "Open Sans";
        color: rgb(65, 76, 99);
        font-weight: bold;
        line-height: 1.667;
  
    }

    .desc__text{
        font-size: 16px;
        font-family: "OpenSans";
        color: rgba(65, 76, 99, 0.702);
        line-height: 1.875;
 
    }

    .desk__link{
        font-size: 16px;
        font-family: "OpenSans";
        color: rgb(56, 59, 207);
        line-height: 1.875;
    }

    .btn-edit{
        margin-left: 60px;
        background-repeat: no-repeat;
        height: 12px;
        width: 12px;
        border: none;
        outline: none;
        cursor: pointer;  
        background-color: transparent;
        position: relative;
        background-image: svg-load('pencil.svg', width='12PX', height ='12PX', fill='#383bcf');
      

        &:before{
            content: 'Править';
            margin-right: 10px;
            position:absolute;
            font-size: 16px;
            font-family: "OpenSans";
            color: rgba(65, 76, 99, 0.502);
            line-height: 1.875;
            top:-80%;
            right: 70%;
        }
      

    }

    .btn-del{
        background-image: svg-load('remove.svg', fill='#c92e2e');
        background-repeat: no-repeat;
        height: 12px;
        width: 12px;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: transparent;
        position: relative;
        margin-left: 190px;

        &:before{
            content: "Удалить";
            margin-right: 10px;
            position:absolute;
            font-size: 16px;
            font-family: "OpenSans";
            color: rgba(65, 76, 99, 0.502);
            line-height: 1.875;
            top:-80%;
            right: 70%;
        }
       

    }

   

    .new-work__block{
        background-color: #fff;
        box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);

    }

    .new-work__desc{
        padding: 30px;
    }

    .new-work__btns{
        padding: 0 30px 40px;
    }

    .form__col{
        display: grid;
        grid-template-columns: 1fr 3fr;
    }

    .avatar__wrapper{
        width: 200PX;
        height: 200PX;
        border-radius: 50%;
        background-color: #dee4ed;
        position: relative;
        
    }

    .avatar__man{
        background-image: svg-load('user.svg', fill='#fff');
        background-repeat: no-repeat;
        width: 120px;
        height: 120px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
       
    }

    .add__avatar{
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        font-family: "OpenSans", sans-serif;
        color: rgb(56, 59, 207);
        margin-top: 25px;
        
    }

    .add-review{
        background-color: #fff;
        box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
        padding: 30px;
    }

    .reviews__list{
        list-style-type: none;
        display: grid;
        display: grid;
        grid-template-columns: 340px 340px 340px;
        grid-gap: 32px;
        padding: 0;

    }

    .review{
        padding: 33px;
        background-color: #fff;
        box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
        position: relative;
        height: 380px;
    }

    .user-avatar__wrapper{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
    }

    .user-info{
        display: flex;
        padding-bottom: 23px;
        align-items: center;
        justify-content: space-between;
    }

    .review-text {
        padding-top:20px;
        font-size: 16px;
        color: rgba(65, 76, 99, 0.702);
        line-height: 1.875;
        


    }

    .user-name{
        font-size: 18px;
        font-family: "Open Sans";
        color: rgb(65, 76, 99);
        font-weight: bold;
       
  

    }

    .user-position{
        font-size: 16px;
        font-family: "OpenSans";
        color: rgba(65, 76, 99, 0.502);
        line-height: 1.875;
  

    }

     .review-btns{
        position:absolute;
        bottom: 5%;
     }

     .form__title{
        font-size: 18px;
        font-family: "Open Sans";
        color: rgb(65, 76, 99);
        font-weight: bold;
        line-height: 1.889;
        padding-bottom: 10px;
 

    }

    .btn-work{
        margin-left: auto;
    }
    
    .btn-reviews{
        margin-left: 46%;
    }
    


    .form__row-up{
        display: flex;
        justify-content: space-between;
    }

    .form__label--up{
        width: 45%;
    }
    .form__col{
        padding-top: 40px;
        padding-right: 200px;
    }

    .left__col{
        padding-right: 30px;
        display: flex;
        flex-direction: column;

    }

    .login{
        /* position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0; */
        background-image: url(../images/content/bg.jpg);
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
 

    }
    .login__form{
        padding: 60px 76px;

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