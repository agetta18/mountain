<template lang="pug">
    button(
        type='button'
        @click.prevent='logout'  
    ).logout Выйти
</template>

<script>
import $axios from "../../requests";
import store from "../../store";
export default {
     data() {
    return {
      submitStatus: null,
    };
  },methods: {
    async logout() {
      try {
        const response = await $axios.post("/logout");
        localStorage.removeItem("token");
        store.dispatch("user/logout");
        delete $axios.defaults.headers;
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
    
}
</script>

<style lang='postcss'>
@import '../../default.pcss';

    .logout{
        background-color: transparent;
        font-size: 16px;
        text-decoration: underline;
        line-height: 1.5;
        opacity: .7;
        color: #fff;
        margin-left: auto;
        outline: none;
        border: none;
        cursor: pointer;
    }

  
</style>