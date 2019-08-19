import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const set: any = (property: string) => (
  state: { [x: string]: any },
  payload: any
) => (state[property] = payload);
export const toggle: any = (property: string) => (state: {
  [x: string]: any;
}) => (state[property] = !state[property]);

const store = () => {
  return new Vuex.Store({
    state: {
      setDrawer: null,
      drawer: false,
      color: "success",
      image:
        "https://www.pakutaso.com/shared/img/thumb/edgawa-hanabi-27_TP_V4.jpg",
      sidebarOverlayGradient: "",
      sidebarBackgroundColor: "rgba(27, 27, 27, 0.74)"
    },
    mutations: {
      setDrawer() {
        set("drawer");
      },
      toggleDrawer() {
        toggle("drawer");
      },
      setImage(image) {
        set(image);
      },
      setColor(color) {
        set(color);
      }
    }
  });
};

export default store;
