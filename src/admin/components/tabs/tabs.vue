<template lang="pug">
    .tabs-component
        ul.list
            li.item(v-for='tab in tabs')
                router-link(
                    :data-text='tab.title'
                    :to="tab.href" 
                    exact-active-class="item--active"
                ).tabs__link {{tab.title}}
</template>

<script>

export default {
    data() {
        return {
            tabs: [
                { title: "Обо мне", href: "/" },
                { title: "Работы", href: "/works" },
                { title: "Отзывы", href: "/reviews" },
            ],
        };
    },
};

</script>



<style lang="postcss">

    .tabs {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        background: #fff;
        padding-left: 60px;
    }

    .list {
        display: flex;
        width: 100%;   
    }

    .item {
        display: flex;
        padding: 30px;
        cursor: pointer;

        &--active {
            border-bottom: 3px solid #383bcf;
        }

        &--active .tabs__link {
            font-weight: bold;
        }
    }

    &__link {
        color: #414c63;
        font-family: "Open Sans";
        font-weight: 400;
        font-size: 16px;
        text-decoration: none;
    } 

</style>