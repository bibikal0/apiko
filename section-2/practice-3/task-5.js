const toMegabytes = function() {
  return this.bytes / 1e6;
};

const data = {
  bytes: 10000
};

const megabytes = toMegabytes.call(data);
console.log(megabytes);
