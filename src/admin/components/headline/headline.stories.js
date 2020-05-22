import headline from './headline.vue';


export default {
    title: "headline"
   
}

export const defaultView = () => ({
    components: {headline},
    template: `
    <headline />
    `
});

export const withContent = () => ({
    components: {headline},
    template: `
    <headline>
        <h4> Содержимое </h4>
    </headline>
    `
});

withContent.story = {
    name: 'С содержимым'
}
    
