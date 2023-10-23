function useCallback(callback, value) {
  if (typeof value === "string" && typeof callback === "function") {
    return callback(value);
  }
}

const result = useCallback((value) => value.toUpperCase(), "hello, world");
console.log(result);
