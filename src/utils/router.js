export function getRouteById(routes, id) {
  let route = null;
  function _getRouteById(_routes, _id) {
    return _routes.find((_route) => {
      const { id, children } = _route;
      if (id === _id) {
        route = _route;
        return true;
      }
      if (children && children.length >= 1) {
        return _getRouteById(children, _id);
      }
    });
  }
  _getRouteById(routes, id);
  return route;
}
