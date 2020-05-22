<template lang="pug">
    .headline-component
        .content
            slot
        .desc Панель администрирования
        button(
            type='button'
            @click=''
           
        ).logout Выйти
</template>

<script>
export default {
    
}
</script>

<style lang='postcss'>
    .desc{
        font-size: 14px;
        line-height: 2.429; 
        opacity: .5;
    }

    .logout{
        background-color: transparent;
        font-size: 16px;
        text-decoration: underline;
        line-height: 1.5;
        opacity: .7;
        color: #fff;
        margin-left: auto;
        outline: none;
        border: none;
        cursor: pointer;
    }

    .headline-component{
        display: flex;
        background-image: linear-gradient(to top, #3e3e59, #454573);
        align-items: center;
        color: #fff;
        padding: 20px;
        padding-left: 5%;
        padding-right: 5%;
      


       

    }
</style>