<template lang="pug">
    .new-work  
        ul.new-work__list
            li.new-work__item
                a(@click.prevent="newWork").works__add-wrapper
                    .works__add-btn
                    .works__add-text Добавить работу
            li(v-for="work in worksList" :key="work.id").new-work__item
                work(:work="work")
                
</template>

<script>
import { mapActions } from "vuex";
import work from '../work/work.vue';
export default {
    data() {
        return {
            submitStatus: null,
        };
    },
    components: {
        work
    },
    props: {
        worksList: {
            type: Array,
            default: () => [],
            required: true,
        },
    },
    methods: {
        ...mapActions("works", ["openNewWorkInEditor"]),
        async newWork() {
            try {
                await this.openNewWorkInEditor();
            } catch (error) {}
        },
    },
    
}
</script>

<style lang="postcss">
@import '../../default.pcss';
    .works__add-wrapper {
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 380px;
        @include phones{
            min-height: 110px;
            flex-direction: row;
        }
    }
    .works__add-btn {
        position: relative;
        width: 40%;
        display: flex;
        background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
        linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        background-position: center;
        background-size: 50% 2%, 2% 50%, cover; 
        background-repeat: no-repeat;
        border-radius: 50%;
        border: 2px solid #fff;
        &:before {
            content: "";
            float: left;
            padding-top: 100%;
        }

        @include phones{
            width: 15%;
        }
    }

    .works__add-text {
        margin-top: 30px;
        color: #fff;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
        width: 30%;
        text-align: center;
        @include phones{
           margin-top: 0;
           width: 60%;
            
        }
    }
</style>