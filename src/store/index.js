import Vue from 'vue'
import Vuex from 'vuex'
import { getAdminInfo } from '@/api/getData'

Vue.use(Vuex)

const state = {
    adminInfo: {
        avatar: 'default.jpg'
    },
}

const mutations = {
    saveAdminInfo (state, adminInfo) {
        console.log("store saveAdminInfo")
        state.adminInfo = adminInfo;
    }
}

const actions = {
    async getAdminData ({ commit }) {
        console.log("store getAdminData begin")
        try {
            const res = await getAdminInfo()
            console.log("store getAdminData getAdminInfo ret")
            if (res.status == 1) {
                console.log("store getAdminData getAdminInfo ret commit")
                commit('saveAdminInfo', res.data);
            } else {
                throw new Error(res.type)
            }
        } catch (err) {
            // console.log(err.message)
        }
        console.log("store getAdminData end")
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
})
