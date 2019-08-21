import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        greet:'hello'
    },
    mutations:{
        updateGreet(state,content){
            state.greet=content;
        }
    },
    actions:{
        greet(context,content){
            context.commit("updateGreet",content);
        }
    }
});