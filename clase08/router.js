function route(pathname, handler, date) {
  if(typeof handler[pathname] == 'function'){
    return handler[pathname](date);
  }else{
    return handler["/error404"]();
  }
}

exports.route = route;