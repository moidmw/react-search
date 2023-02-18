const debouce = (func, delay: number) => {
  let timer: number | null;
  return function (...args: any) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, delay);
  };
};

export default debouce;
