<template lang="pug">
    .about-page-container
        .page-container
            .about-page__title
                h2.page-title Блок &laquo;Обо мне&raquo;
                button.about-page__add() Добавить группу  
            .about-page__content               
                form(@submit.prevent="createNewCategory").categories-form
                    input(type="text" placeholder="Название новой группы" v-model="category.title" ).input-name
                    button(type='submit').button-ok
                    button().button-delete
                    ul.skill__list
                        li.skill__item(v-for='cat in categories' :key='cat.id')
                            skills-group(
                                :category='cat'
                            )
                                       
                                                   
                           
</template>

<script>
import { mapActions, mapState } from "vuex";
import skillsGroup from '../components/skills-group';
export default {
    components: {
        skillsGroup
    },
    data(){
        return {
            category: {
                title: ''
            }
        }
    },
    computed: {
        ...mapState("categories", {
            categories: state => state.categories
        })
    },
    created(){
        this.fetchCategories();
    },
    methods: {
        ...mapActions('categories', ['addCategory', 'fetchCategories']),
        async createNewCategory() {
            try {
                await this.addCategory(this.category.title);
                this.category.title='';
                
            } catch (error) {
                alert(error.message);
            }
            

        }
    }
}
</script>

<style lang="postcss">
@import '../default.pcss';
    

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
        margin-bottom: 60PX;

        @include tablets{
            width: 50%;
        }

        @include phones{
            width:100%;
            flex-direction: column;
           
            margin-bottom: 0;
        }
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
        @include phones{
            margin-left: 20px;
        }
      
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
        background-color: transparent;

        &__skill{
            margin-left: 80px;
            width: 156px;
            padding-left: 22px;
            padding-right: 22px;
        }
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
        @include phones{
            grid-template-columns: 1fr;
        }
        
    }
   

    .skill__item, .form__add{
        background-color: #fff;
        padding: 20PX 20PX 30PX;
        box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);


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

    
/* 
    .add-skill-wrapper{
        display:grid;
        grid-template-columns: 3fr 1fr 1fr;
        grid-gap: 2vw;
        margin-top: auto;

    } */

  

    .skill-item{
        display: grid;
        grid-template-columns: 275px 80px 65px;
        grid-gap: 2vw;
        margin-top: 25px;
        font-size: 16px;
        font-family: "OpenSans";
        color: rgb(65, 76, 99);
       
            
    }

    .form-skill__container{
        min-height: 390px;
        display: flex;
        flex-direction: column;
    }

    .button-ok{
        background-image: svg-load('tick.svg', fill='#00d70a');
        background-repeat: no-repeat;
        height: 13px;
        width: 15px;
        border: none;
        outline: none;
        cursor: pointer;  
        
    }
  
 
    .button-delete{
        background-image: svg-load('remove.svg', fill='#bf2929');
        background-repeat: no-repeat;
        height: 11px;
        width: 15px;
        border: none;
        outline: none;
        cursor: pointer;  
       
    }


</style>