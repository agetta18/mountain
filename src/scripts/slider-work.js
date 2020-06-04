import Vue from 'vue';
import axios from 'axios';

const request = axios.create({
    baseURL:"https://webdev-api.loftschool.com"
});


const previews = {
    template: '#slider-previews',
    props: ['works', 'currentWork']
};

const btns = {
    template: '#slider-btns',  
};

const display = {
    template: '#slider-display',
    components: { previews, btns },
    props: ['currentWork', 'works', 'currentIndex'],
    computed: {
        reversedWorks() {
            const works = [...this.works];
            return works.reverse();
        }
    }
};

const tags = {
    template: '#slider-tags',
    props: ['tags']
    
};

const info= {
    template: '#slider-info',
    components: { tags },
    props: ['currentWork'],
    computed: {
        tagsArray(){
            return this.currentWork.techs.split(',');
        }
    }
};


new Vue({
    el: '#slider-component',
    template: "#slider-container",
    components: { display, info },
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork(){
            return this.works[this.currentIndex];
        }

    },
    watch: {
        currentIndex(value){
           this.makeInfiniteLoopForIndex(value);
        },

    },
    methods: {
        makeInfiniteLoopForIndex(value){
            const worksAmountFromZero = this.works.length - 1;

            if (value > worksAmountFromZero) this.currentIndex = 0;
            if (value < 0) this.currentIndex = worksAmountFromZero;
        },
        handleSlide(direction) {
            switch(direction) {
                case "prev" :
                    this.currentIndex++;
                    break;
                case "next" :
                    this.currentIndex--;
                    break;
            }
        },
        // makeArrWithRequireImages(array){
        //     return array.map(item =>{
        //         const requirePic = require(`../images/content/${item.photo}`);
        //         item.photo = requirePic;
                
        //         return item;
        //     });
        // },
        makeArrWithRequireImages(array){
            return array.map(item =>{
                item.photo = "https://webdev-api.loftschool.com/"+item.photo;
                
                return item;
            });
        },
    },

    // created() {
    //     const data = require('../data/slider-work.json');
    //     this.works = this.makeArrWithRequireImages(data);
        
    // },

     async created() {
         const {data} = await request.get('/works/338');
         console.log(data);
         this.works = this.makeArrWithRequireImages(data);
        
    }
});