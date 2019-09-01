export interface RootState {
  setDrawer?: any;
  toggle: boolean;
  sidebarOverlayGradient: string;
  sidebarBackgroundColor: string;
}

export interface LinkInterface {
  name: string;
  icon: string;
  to: string;
}
