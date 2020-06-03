<template lang="pug">
    .new-reviews
        ul.reviews__list
            li.reviews__item
                a(@click.prevent="newReview").reviews-list__add-wrapper
                    .reviews-list__add-btn
                    .reviews-list__add-text Добавить отзыв
            li(v-for="review in reviewsList" :key="review.id").reviews__item
                review(:review="review")
                    
</template>


<script>
    import { mapActions } from "vuex";
    import review from "../review/review.vue";
    
    export default {
        data() {
            return {
                submitStatus: null
            }
        },
  
        components: {
            review
        },

        props: {
            reviewsList: {
                type: Array,
                default: () => [],
                required: true
            }
        },
         methods: {
            ...mapActions("reviews", ["openNewReviewInEditor"]),
            async newReview() {
                try {
                    await this.openNewReviewInEditor();
                } catch (error) {}
            }
        }
   
    };
</script>

<style lang="postcss" scoped>
@import '../../default.pcss';
    .reviews-list__add-wrapper {
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        @include phones{
            flex-direction: row;
        }
    }

    .reviews-list__add-btn {
        position: relative;
        width: 40%;
        display: flex;
        background:
        linear-gradient(#fff,#fff),
        linear-gradient(#fff,#fff),
        linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        background-position:center;
        background-size: 50% 2%, 2% 50%, cover; 
        background-repeat:no-repeat;
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

    .reviews-list__add-text {
        margin-top: 30px;
        color: #fff;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
        width: 30%;
        text-align: center;
        @include phones{
            width: 60%;
            margin-top: 0;
        }
    }

</style>