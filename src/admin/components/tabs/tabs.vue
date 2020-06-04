<template lang="pug">
    .tabs-component
        ul.list
            li.item(v-for='tab in tabs') 
                router-link(
                    :data-text="tab.title" 
                    :to='tab.href'
                    exact-active-class="active"
                ).tabs__link 
            //- li.item Reviews
            //-     router-link(  
            //-         to="/reviews" 
            //-         exact-active-class="item--active"
            //-     ).tabs__link 
</template>

<script>

export default {
    data() {
        return {
            tabs: [
                { title: "Обо мне", href: "/" },
                { title: "Работы", href: "works" },
                { title: "Отзывы", href: "reviews" },
            ],
        };
    },
};

</script>



<style lang="postcss">
@import '../../default.pcss';


    .list {
        display: flex;
        height: 77px;
        align-items: center;
      

        @include phones {
            height: 87px;
            justify-content: center;
        }
    }
    .item {
        height: 100%;
        margin-right: 30px;
         
        @include phones {
            margin-right: 3px;
        }
        &:last-child {
            margin-right: 0;
        }
    }

    .tabs__link {
        vertical-align: middle;
        white-space: nowrap;
        display: flex;
        height: 100%;
        align-items: center;
        cursor: pointer;
        width: 125px;
        justify-content: center;
        border-bottom: 3px solid transparent;
        text-decoration: none;

        @include phones {
            width: 100px;
        }

        &:before {
            content: attr(data-text);
        }
        &:hover,
        &.active {
            color: #383bcf;
            font-weight: 600;
            border-color: currentColor;
        }
    }

</style>