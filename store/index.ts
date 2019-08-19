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
      image:
        "https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg",
      sidebarOverlayGradient: "",
      sidebarBackgroundColor: "rgba(27, 27, 27, 0.74)"
    },
    mutations: {
      setDrawer(state, val) {
        state.setDrawer = val;
      },
      toggleDrawer() {
        toggle("drawer");
      },
      setImage(state, img) {
        set(img);
      },
      setColor(state, color) {
        set(color);
      }
    }
  });
};

export default index;
