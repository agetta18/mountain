<template lang="pug">
    .new-work__block
        .new-work__pic
            img(:src="'https://webdev-api.loftschool.com/' + work.photo")
        .new-work__desc
            h3.desc__title {{work.title}}
            .desc__text {{work.description}}
            .desk__link {{work.link}}
        .new-work__btns
            button(@click.prevent='correctWork').btn-edit
            button(@click.prevent='removeWork').btn-del 
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
    return {};
    },
    props: {
        work: {
        type: Object,
        default: () => {},
        required: true,
        },
    },
    methods: {
        ...mapActions("works", ["deleteWork", "openWorkInEditor"]),
        async removeWork() {
            try {
                await this.deleteWork(this.work);
            } catch (error) {}
        },
        async correctWork() {
            try {
                await this.openWorkInEditor(this.work);
            } catch (error) {}
        },
    },
    
}
</script>