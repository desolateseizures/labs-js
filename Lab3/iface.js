'use strict';

const iface = {
    m1: x => [x],
    m2: function (x,y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};

const introspect = (iface) => {
  const result = [];
  for (const key of Object.keys(iface)) {
    if (typeof iface[key] === 'function') {
      result.push([key, iface[key].length]);
    }
  }
  return result;
};

console.log(introspect(iface));