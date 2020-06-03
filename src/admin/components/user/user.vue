<template lang="pug">
    .user-component
        .avatar
            img(:src='userpic')
        .username {{username}}
        .phones
            .username-phones {{username}}
            logout.logout-phones
</template>

<script>
import logout from '../logout/logout';
export default {
    components: {
        logout
    },
    props: ["userpic", "username"]
}
</script>

<style lang='postcss' scoped>
@import '../../default.pcss';
    .phones{
        display:none;
        @include phones{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 20px;
        }
    }
    .logout-phones{
        text-align: left;
        padding: 0;
    }
    .avatar{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;
        
        
        
    }

    .username, .username-phones{
        font-size: 18px;
        color: #fff;
        font-weight: bold;
        margin-left: 20px;
        margin-right: 20px;
        @include phones{
            margin-left: 0;
        }
    }

    .username{
        @include phones{
            display: none;
        }
    }

    .user-component{
        display: flex;
        align-items: center;
    }

</style>