<template lang="pug">
    tr(v-if='editmodeOn').skills-row
        td 
            input(type='text' v-model='editedSkill.title').input
        td 
            input(type='text' v-model='editedSkill.percent').input.input-percent
        td
            button(type='button' @click="editCurrentSkill").button-ok 
            button(type='button' @click='editmodeOn = false').button-delete 
    
    tr(v-else).skills-row
        td.skill-title {{skill.title}}
        td.skill-percent {{skill.percent}}
        td.skill-btns
            button(type='button' @click='editmodeOn = true').btn-pencil
            button(type='button' @click="removeCurrentSkill").btn-trash 
             
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: {
        skill: {
            type: Object,
            default: () => {},
            required: true
        }
    },
    data(){
        return {
            editmodeOn: false,
            editedSkill: {...this.skill}
        }
    },
    methods: {
        ...mapActions('skills', ['removeSkill', 'editSkill']),
        async removeCurrentSkill() {
            try {
                await this.removeSkill(this.skill);
            } catch (error) {
                console.log(error);
            }

        },
        async editCurrentSkill() {
            try {
                await this.editSkill(this.editedSkill);
                
            } catch (error) {
                console.log(error);
            } finally {
                this.editmodeOn = false;
            }
        }
    }
}
</script>

<style lang="postcss" scoped>
@import '../default.pcss';

    .skills-row{
        line-height: 2.5;
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

    .input{
        padding: 15px 0;
        border:none;
        border-bottom: 1px solid black;
        width: 273px;
        outline: none;
        @include tablets{
            width: 140px;
        }

        &-skill{
            margin-left: 80px;
            width: 156px;
            padding-left: 22px;
            padding-right: 22px;
           
        }

        &-percent{
        padding: 15px 12px;
        border: none;
        border-bottom: 1px solid black;
        outline: none;
        width: 64px;
        margin-left: 20px;
        @include tablets{
            margin-left: 0;
        }
        }
    }

    .skill{
        &-title{
            width: 68%;
            @include tablets{
                width: 40%;
            }
        }
        &-percent{
            width: 25%;
             @include tablets{
                width: 20%;
            }
        }
        &-btns{
            width: 8%;
           
        }
    }
    


</style>