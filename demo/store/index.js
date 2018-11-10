import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        order:{

        },
        totalPrice:0

    },
    mutations:{
        updateOrder(state,data){//data={key:value}
            state.order[data.key]=data.value;
        }
    },
    actions:{
        updateOrder(context,data){
            context.commit("updateOrder",data)
        }
    },
    getters:{
        getOrder(state){
            return state.order?state.order:{};
        }
    }
})