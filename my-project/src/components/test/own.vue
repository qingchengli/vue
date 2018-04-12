<template>
    <div class="own">
        <h1>{{pp}}</h1>
        <button @click="onit($event,'kissme')">dianwo</button>
    </div>
</template>
<script>
    export default {
        name: 'own',

        data () {
            return {
                pp : 'helloWorld'
            }
        },

        methods: {
            onit : function (event,msg) {
                console.log(event.target.nodeName,msg);
            }
        }
    }
</script>