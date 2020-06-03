<template lang="pug">
   .skill-container
   
        tr(v-if='editmodeOn').skill-tr
            input(type='text').input-name
            .btns-tr
                button(type='button' ).button-ok
                button(type='button' @click='editmodeOn = false' ).button-delete 

        tr(v-else).skill-tr
            h2.title-category {{category.category}}
            .btns-tr
                button(type='button' @click='editmodeOn = true').btn-pencil
                button(type='button' @click='deleteExistingCategory').btn-trash
        
        hr
        table
        skillsGroupItem(
            v-for= 'skill in category.skills' 
            :key='skill.id'
            :skill='skill'
        )
        hr
        .add-skill-wrapper
            form(@submit.prevent='addNewSkill').form-skill
                input(type='text' v-model='skill.title' placeholder='Новый навык').input.input-skill
                input(type='text' v-model='skill.percent' placeholder='0%').input.input-percent
                button(type='submit').add-skill 

</template>

<script>
import { mapActions } from 'vuex';
import skillsGroupItem from "../components/skills-group-item";
export default {

    components: {
        skillsGroupItem
    },
    data (){
        return {
            skill: {
                title:'',
                percent: 0
            },
            editmodeOn: false,
        };
    },
    props: {
        category: Object
    },
    methods: {
        ...mapActions('skills', ['addSkill']),
        async addNewSkill() {
            const skillData = {
                    ...this.skill,
                    category: this.category.id
                };
            try {
                await this.addSkill(skillData);
            } catch (error) {
                console.log(error);   
            }

        },
        ...mapActions('categories', ['deleteCategory']),
        async deleteExistingCategory() {
      this.loading = true;
      try {
        await this.deleteCategory(this.category);
      } catch (error) {
        // handling error
      } finally {
        this.loading = false;
      }
    },
    }
    
}
</script>

<style lang="postcss" scoped>
@import '../default.pcss';
    .title-category{
        font-weight: bold;
    }
    .skill-tr{
       
        display: flex;
        align-items: center;
        justify-content: space-between;
       
    }
    .add-skill-wrapper.blocked {
        opacity: 0.5;
        filter: grayscale(100%);
        pointer-events: none;
        user-select: none;
    }

    .add-skill{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-image: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
        border:none;
        position: relative;
        cursor: pointer;
        outline: none;
        margin-left: 5%;
        @include tablets{
            margin-left: 14%;
        }
        
  

        &:after{
            content:'+';
            color: #fff;
            font-size: 30px;
            font-family: "OpenSans";
            position:absolute;
            top:50%;
            left:50%;
            transform: translate(-50%, -50%);
            line-height: 0.5;

        }

    }

    .input{
        padding: 15px 0;
        border:none;
        border-bottom: 1px solid black;
        width: 273px;
        outline: none;

        &-skill{
            margin-left: 40%;
            width: 156px;
            padding-left: 22px;
            padding-right: 22px;
             @include tablets{
                margin-left: 0px;
            }
        }

        &-percent{
            padding: 15px 12px;
            border: none;
            border-bottom: 1px solid black;
            outline: none;
            width: 64px;
            margin-left: 20px;
        }
    }

    .btn-pencil{
        outline: none;
        border: none;
        width: 18px;
        height: 19px;
        background-image: svg-load('pencil.svg', width='12PX', height ='18PX', fill='#a0a5b1');
        background-repeat: no-repeat;
        cursor: pointer;
        background-color: transparent;

    }

     .btn-trash{
        outline: none;
        border: none;
        width: 18px;
        height: 19px;
        background-image: svg-load('trash.svg', width='12PX', height ='18PX', fill='#a0a5b1');
        background-repeat: no-repeat;
        cursor: pointer;
        background-color: transparent;
        
    }

    .form-skill{
        display: flex;
        align-items: center;
        
    }

    .button-ok{
        background-image: svg-load('tick.svg', fill='#00d70a');
        background-repeat: no-repeat;
        height: 13px;
        width: 15px;
        border: none;
        outline: none;
        cursor: pointer;  
        background-color: transparent;
        
    }
  
    .button-delete{
        background-image: svg-load('remove.svg', fill='#bf2929');
        background-repeat: no-repeat;
        height: 11px;
        width: 15px;
        border: none;
        outline: none;
        cursor: pointer; 
        background-color: transparent; 
       
    }
</style>