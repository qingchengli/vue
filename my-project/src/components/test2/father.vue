<template>
    <div class="father">
        <input type="text" v-model.lazy.number="count" value='2'/>
        <p>{{list}}</p>
       <p>{{typeof count}}</p>
       <son @myown="add" @yourown="due"></son>
    </div>
</template>
<script>
import son from './son'

export default {
        name : 'father',

        components : {
            son,
        },
        
        data () {
            return {
                count : '1',
                list : []
            }
        },
        
        methods : {
            add : function (msg) {
                this.count += msg;
            },
            due : function (msg) {
                this.list.push(msg)
            }
        },

        computed : {
            
        }
    }
</script>