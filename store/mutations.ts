const mutations = {
  toggleDrawer: state => {
    state.drawer = !state.drawer;
  },
  setDrawer: (state, payload: any) => {
    state.drawer = payload;
  },
  setImage(state, payload: any) {
    state.image = payload;
  },
  setColor(state, payload: any) {
    state.color = payload;
  }
};

export default mutations;
