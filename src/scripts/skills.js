import Vue from 'vue';
import axios from 'axios';

const request = axios.create({
    baseURL:"https://webdev-api.loftschool.com"
});

const skill = {
    template: '#skill',
    props: ['skill'],
    methods: {
        drawColoredCircle() {
        const circle = this.$refs['circle'];
        const dashArray = parseInt(
           getComputedStyle(circle).getPropertyValue('stroke-dasharray')
        ); 
        const percent = (dashArray / 100) * (100 - this.skill.percent);

        circle.style.strokeDashoffset = percent;
        },
    },
    mounted() {
        this.drawColoredCircle(); 
    }
};

const skillsRow = {
    template: '#skills-row',
    components:{
        skill,
    },
    props: ['category']
};

new Vue ({
    el: '#skills-component',
    template: '#skills-list',
    components: {
        skillsRow,
    },

    data() {
        return {
            skills: []
        }
    },

    async created() {
        const {data} = await request.get('/categories/338');
        this.skills = data;
    }

});

