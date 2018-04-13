<template>
    <div class='cSon'>
        <slot name="header"></slot>
        <p>{{num}}</p>
        <slot>no slot</slot>
        <slot name="footer">no slot</slot>
    </div>
</template>
<script>
    export default {
        name: 'cSon',
        
        props: {
            'num' : [Number,String]
        },

        data () {
            return {
            }
        },
        
    }
</script>