<template>
    <div>
        <input type='text' v-model="greets">
        <p>{{greet}}</p>
        <el-button type="success" @click="triggerUpdateGreet">成功按钮</el-button>
    </div>
</template>

<script>
export default {
    name:'Greet',
    data(){
        return{
            greet:'haha',
        }
    },
    methods:{
        triggerUpdateGreet(){
            this.$store.dispatch("greet","my new greeting!");
        }
    },
    computed:{//被以来项改变会导致computed的属性也立即改变;第一次加载也会被赋值
        greets:function(){//多次引用的情况下如果值没有改变则用缓存里的,computed的属性可以不用在data里定义
            return this.$store.state.greet;
        }
    },
    watch:{
        "$store.state.greet":function(newval){//greet改变会触发里面的方法,注意这里不用this
        this.greet=newval;//第一次加载不会被赋值
        }
    }
}
</script>