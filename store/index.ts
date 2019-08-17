const set: any = (property: string) => (
  state: { [x: string]: any },
  payload: any
) => (state[property] = payload);
const toggle: any = (property: string) => (state: { [x: string]: any }) =>
  (state[property] = !state[property]);
const state = {
  drawer: null,
  color: "success",
  sidebarOverlayGradient: "",
  sidebarBackgroundColor: "rgba(27, 27, 27, 0.74)"
};
const mutations = {
  setDrawer: set("drawer"),
  setImage: set("image"),
  setColor: set("color"),
  toggleDrawer: toggle("drawer")
};

export default {
  mutations,
  state
};
