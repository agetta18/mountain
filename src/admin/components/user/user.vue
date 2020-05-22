<template lang="pug">
    .user-component
        .avatar
            img(:src='userpic')
        .username {{username}}
</template>

<script>
export default {
    props: ["userpic", "username"]
}
</script>

<style lang='postcss' scoped>
    .avatar{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;
        
    }

    .username{
        font-size: 18px;
        color: #fff;
        font-weight: bold;
        margin-left: 20px;
        margin-right: 20px;
    }

    .user-component{
        display: flex;
        align-items: center;
    }

</style>