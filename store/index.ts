import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "~/types";
import mutations from "~/store/mutations";
import getters from "~/store/getters";
import actions from "~/store/actions";

Vue.use(Vuex);

const state = () => ({
  setDrawer: null,
  toggle: false,
  color: "success",
  image: "https://www.pakutaso.com/shared/img/thumb/edgawa-hanabi-27_TP_V4.jpg",
  sidebarOverlayGradient: "",
  sidebarBackgroundColor: "rgba(27, 27, 27, 0.74)"
});

const store: StoreOptions<RootState> = {
  state,
  mutations,
  getters,
  actions,
  modules: {}
};

export default () => new Vuex.Store<RootState>(store);
