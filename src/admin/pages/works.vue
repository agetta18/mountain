<template lang="pug">
    .page-add-work
        .page-container
            h2.page-title Блок &laquo;Работы&raquo;
            works-form(v-if="editorVisible" :selectedWork="currentWork")
            works-list(:worksList="works")
</template>


<script>
import { mapActions, mapState } from "vuex";
import worksForm from '../components/works-form/works-form.vue';
import worksList from '../components/works-list/works-list.vue';
export default {
    components: {
        worksForm,
        worksList
    },
    data: () => ({}),
    computed: {
        ...mapState("works", {
            works: (state) => state.works,
            currentWork: (state) => state.currentWork,
            editorVisible: (state) => state.editorVisible,
        }),
    },
    created() {
        this.fetchWorks();
    },
    methods: {
        ...mapActions("works", ["fetchWorks"]),
    },
}
</script>



<style lang="postcss">
@import '../default.pcss';
    .table-work{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2vw;
        padding-top: 50px;
        @include tablets{
            display: flex;
            flex-direction: column;
            padding: 25px 80px;
        }
        @include phones{
            padding: 30PX 20PX;
        }

    }

    .desc__form{
        display:flex;
        flex-direction: column;
    }

   
   .input-work{
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
        @include phones{
            margin-right: 23px;
        }
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
        overflow: hidden;
        position: relative;
      
        @include tablets{
            width: 465PX;
            height: 260PX;
            margin-left: 2%;
            margin-bottom: 50PX;
        }

        @include phones{
            width: 100%;
            margin-left: 0;
            height: 156PX;
        }
        

    }

    .title-save{
        font-size: 16px;
        font-family: "OpenSans";
        color: rgba(65, 76, 99, 0.502);
        line-height: 2.118;
        text-align: center;
        padding-left: 30%;
        padding-right: 30%;

        @include phones{
            display: none;
        }
        
 
    }

    .label-work{
        font-size: 16px;
        font-family: "OpenSans";
        color: rgba(65, 76, 99, 0.502);
        line-height: 1;
  
    }

    .form__label--review{
        display: flex;
        flex-direction: column;
    }

    .new-work__btn{
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

    .new-work__btn--container{
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
        grid-template-columns: 340PX 340PX 340PX;
        grid-gap: 32px;
        padding: 0;

        @include tablets{
            grid-template-columns: 333PX 333PX;
        }
        @include phones{
            grid-template-rows: 100px;
            grid-template-columns: 320PX;
        }

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


    .btn-work{
        margin-left: auto;
        @include tablets{
            margin-left: 20%;

        }

        @include phones{
            margin-left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>