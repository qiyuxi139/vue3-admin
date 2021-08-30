const getters = {
  sidebarFold: (state) => state.settings.sidebarFold,
  fixedHead: (state) => state.settings.fixedHead,
  lang: (state) => state.settings.lang,
  routes: (state) => state.permission.routes,
  roles: (state) => state.permission.roles
};

export default getters;
