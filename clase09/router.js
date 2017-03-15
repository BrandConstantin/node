function route(pathname, handler, data) {
    if (typeof handler[pathname] == 'function') {
        return handler[pathname](data);
    } else {
        return handler["/error404"]();
    }
}

exports.route = route;