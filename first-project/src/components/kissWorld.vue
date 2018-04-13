<template>
    <div class="kiss">
        <p>Kiss World</p>
        <router-link :to="{path : '/'}">to hello</router-link>
        <button @click='changeIt' id="bt">改变</button>
    </div>
</template>
<script>
    export default {
        name : "kiss",

        data () {
            return {
                color : undefined,
            }
        },

        methods : {
            changeIt () {
                $('#bt').css({'color' : this.$route.params.color});
                console.log(this.$route.params,$('button'));
            },
        }
    }
</script>