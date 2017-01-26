function route(pathname, handler) {
  if(typeof handler[pathname] == 'function'){
    return handler[pathname]();
  }else{
    return handler["/error404"]();
  }
}

exports.route = route;