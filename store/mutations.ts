const mutations = {
  toggleDrawer: state => {
    state.drawer = !state.drawer;
  },
  setDrawer: (state, payload: any) => {
    state.drawer = payload;
  }
};

export default mutations;
