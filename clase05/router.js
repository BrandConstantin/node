function route(pathname, handler) {
  if(typeof handler[pathname] == 'function'){
    handler[pathname]();
  }else{
    handler["/error404"]();
  }
}

exports.route = route;