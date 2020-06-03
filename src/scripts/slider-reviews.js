import Vue from "vue";
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

import axios from 'axios';

const request = axios.create({
    baseURL:"https://webdev-api.loftschool.com"
});


new Vue({
    el: "#reviewsSlider",
    template: "#reviews-slider",
    components: {
        Hooper,
        Slide,
        HooperNavigation,
    },
    data() {
        return {
        reviews: [],
        hooperSettings: {
            itemsToShow: 1,
            itemsToSlide: 1,
            breakpoints: {
            321: {
                itemsToShow: 2,
                itemsToSlide: 2,
            },
            },
        },
        };
    },
    // methods: {
    //     makeArrWithRequireImages(array) {
    //         return array.map((item) => {
    //             const requirePic = require(`../images/user/${item.photo}`);
    //             item.photo = requirePic;

    //             return item;
    //         });
    //     },
    // },
    // created() {
    //      const data = require("../data/slider-reviews.json");
    //      this.reviews = this.makeArrWithRequireImages(data);
    // },

    methods:{
        makeArrWithUploadedImages(array) {
            return array.map((item) => {
              
              item.photo = "https://webdev-api.loftschool.com/"+item.photo;
              return item;
            });
          },
        
       
    },
    async created() {
        const {data} = await request.get("/reviews/338");
        
        this.reviews = this.makeArrWithUploadedImages(data);
      }
   


});