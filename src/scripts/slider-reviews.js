import Vue from 'vue';

const btn = {
    template: '#reviews-btn'
};

const reviewsText = {
    template: '#reviews-text',
    props:['currentWork', 'works']
};

const user = {
    template: '#reviews-user',
    props:['currentWork']
};

const reviews = {
    template: '#reviews',
    components: {reviewsText, user},
    props:['currentWork', 'works']
};


const slider = {
    template: '#reviews-slider',
    components: {reviews},
    props:['currentWork', 'works']
   
};


new Vue ({
    el:"#reviews-component",
    template:"#reviews-container",
    components: { btn, slider },

    data() {
        return {
            works:[],
            currentWork: [],
            currentIndex: 0,
        }
    },
    methods: {
        imagesWay(array){
            return array.map(item => {
                const requirePic = require(`../images/user/${item.photo}`);
                item.photo = requirePic;
                return item;
            });
        },
    },
    created() {
        const data = require('../data/slider-reviews.json');
        this.works = this.imagesWay(data);
        this.currentWork = this.works[this.currentIndex];
    }

  
});