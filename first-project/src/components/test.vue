<template>
    <div>
        <transition name='fade'>
            <p v-if='show'>123</p>
        </transition>
        <button @click="toggle">dianwo</button>
    </div>
</template>
<script>
    export default {
        name: 'test',
        data () {
            return {
                show: true,
            }
        },
        
        mounted: function () {
            setInterval(()=>{
                this.toggle();
            },3000);
        },

        methods: {
            toggle () {
                this.show = !this.show;
            }
        } 
    }
</script>
<style scoped>
    .fade-enter-active,.fade-leave-active {
        transition: all 2s;
    }
    .fade-enter,.fade-leave-to {
        opacity: 0;
    }
</style>