import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const set: any = (property: string) => (
  state: { [x: string]: any },
  payload: any
) => (state[property] = payload);
const toggle: any = (property: string) => (state: { [x: string]: any }) =>
  (state[property] = !state[property]);

const index = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      setDrawer: null,
      drawer: false,
      color: "success",
      sidebarOverlayGradient: "",
      sidebarBackgroundColor: "rgba(27, 27, 27, 0.74)"
    },
    mutations: {
      plusCounter(state) {
        state.counter++;
      },
      minusCounter(state) {
        state.counter--;
      },
      setDrawer(state) {
        state.drawer = !state.drawer;
        set("drawer");
      },
      toggleDrawer() {
        toggle("drawer");
      }
    }
  });
};

export default index;
