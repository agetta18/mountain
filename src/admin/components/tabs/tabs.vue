<template lang="pug">
    .tabs-component
        ul.list
            li.item(v-for ="tab in tabs" :key="tab.id"
                    :class= "{'active' : activeTabId === tab.id}")
                button(
                    type='button'
                    @click = 'handleChange(tab)'
                ).btn {{tab.title}}
</template>

<script>


const tabs = [
    {id: 0, title: 'Обо мне'},
    {id: 1, title: 'Работы'},
    {id: 2, title: 'Отзывы'}
]
export default {
    data() {
        return{
            tabs,
            activeTabId: 0
        }
    },
    methods: {
        handleChange(tab) {
            this.activeTabId = tab.id;
            this.$emit('tabChange', tab);

        }

    }

    
}
</script>

<style lang="postcss">
    .tabs-component{
        display: flex;
       

    }

    .list{
        display: flex;
        list-style-type: none;
    }

    .item{
        position: relative;
        

        &.active{
            color: #383bcf;
            &:before{
                content: '';
                position: absolute;
                display: block;
                left: 0;
                right: 0;
                bottom: 0;
                height: 3px;
                background: #383bcf;
            }
        }
    }

    .btn {
        padding: 30px;
        outline: none;
        background: transparent;
        border: none;
        cursor: pointer;
    }
</style>