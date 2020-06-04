<template lang="pug">
    .page-reviews.page
        .page-container
            h2.page-title Блок &laquo;Отзывы&raquo;
            review-form(v-if="editorVisible" :selectedReview="currentReview")
            review-list(:reviewsList="reviews")
         
                   
</template>

<script>
import { mapActions, mapState } from "vuex";
import reviewForm from '../components/review-form/review-form.vue';
import reviewList from '../components/review-list/review-list.vue';
export default {
    components:{
        reviewForm,
        reviewList
    },
    data: () => ({
    }),
    computed : {
        ...mapState("reviews", {
                reviews: state => state.reviews,
                currentReview: state => state.currentReview,
                editorVisible: state => state.editorVisible,
        })
    },
    created() {
        this.fetchReviews();
    },
    methods: {
        ...mapActions("reviews", ["fetchReviews"])
    }
    
}
</script>

<style lang="postcss">
@import '../default.pcss';
    .reviews-input{
        border: none;
        border-bottom: 1px solid black;
        padding:  18px 0;
        outline: none;
        font-size: 16px;
        font-family: "OpenSans";
        color: black;
        margin-bottom: 30px;
       
    }

    .message{
        resize: none;
        padding: 23px;
        outline: none;
        margin-bottom: 30px;
        margin-top: 20px;
        font-size: 16px;
        font-family: "OpenSans";
        color: rgb(65, 76, 99);
        line-height: 1.875;
        margin-top: 20PX !important;
       
        @include tablets{
            margin-top: 20PX !important; 

        }
      
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
        margin-right: 56px !important;
        cursor: pointer;
        @include phones{
            padding-right: 30px;
            margin-right: 0 !important;
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

  


    .form__label--review{
        font-size: 16px;
        font-family: "OpenSans", sans-serif;
        color: rgba(65, 76, 99, 0.502);
        line-height: 1;
        display: flex;
        flex-direction: column;

    
  
    }

  

    .reviews__btn{
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

    .reviews__btn--container{
        background-image: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
        height: 100%;
        position: relative;
        min-height: 380px;

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
        @include phones{
            margin-left: 240px;
        }

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

   

   

    .form__col{
        display: grid;
        grid-template-columns: 1fr 3fr;
        
        padding-top: 40px;
        padding-right: 200px;
        @include tablets{
            padding-right: 0;
        }
        @include phones{
            display: flex;
            flex-direction: column;
            padding: 30PX 20PX 0;
        }
    
       
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

    .review{
        padding: 33px;
        background-color: #fff;
        box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
        position: relative;
        height: 380px;
        @include phones{
            padding: 33PX 0;
            height: 100%;
        }
    }

    .user-avatar__wrapper{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20PX;
    }

    .user-info{
        display: flex;
        padding-bottom: 23px;
        align-items: center;
         @include phones{
            padding: 0 20PX 20PX ;
        }
    }

    .review-text {
        padding-top:20px;
        font-size: 16px;
        color: rgba(65, 76, 99, 0.702);
        line-height: 1.875;
        @include phones{
            padding: 20px 20px 35px 20px;
        }
        


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
        @include phones{
            padding: 0 20PX;
            display: flex;
            align-items:center;
            justify-content: space-between;
        }
     }

     .form__title{
        font-size: 18px;
        font-family: "Open Sans";
        color: rgb(65, 76, 99);
        font-weight: bold;
        line-height: 1.889;
        padding-bottom: 10px;
        @include phones{
            padding: 0 20PX 20PX;
        }
 

    }

    
    .btn-reviews{
        margin-top: 20PX;
        margin-left: 46%;
        @include tablets{
            margin-left: 26%;
        }
        @include phones{
            margin-left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 30PX;
        }
    }
    


    .form__row-up{
        display: flex;
        justify-content: space-between;
    }

    .form__label--up{
        width: 45%;
        @include tablets{
            width: 100%;
        }
        @include phones{
            width: 100%;
        }
    }
   

    .left__col{
        padding-right: 30px;
        display: flex;
        flex-direction: column;
        @include phones{
            padding-right:0;
        }

    }
</style>