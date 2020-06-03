<template lang="pug">
    .review
        .user-info
            .user-avatar__wrapper
                img(:src="'https://webdev-api.loftschool.com/' + review.photo")
                                                    
            .user
                .user-name {{review.author}}
                .user-position {{review.occ}}
        hr
        .review-text {{review.text}}
        .review-btns
            button(@click.prevent='correctReview').btn-edit
            button(@click.prevent='removeReview').btn-del 
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {}
    },
    props: {
        review: {
            type: Object,
            default: () => {},
            required: true
        }    
    },
    methods: {
        ...mapActions("reviews", ["deleteReview","openReviewInEditor"]),
        async removeReview() {
            try {
                await this.deleteReview(this.review);
            } catch (error) {}
        },
        async correctReview() {
            try {
                await this.openReviewInEditor(this.review);
            } catch (error) {}
        }
    }
    
}
</script>