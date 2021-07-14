const pipe = (...fns) => (x) => fns.reduce((x, f) => f(x), x);
const compose = (...fns) => (x) => fns.reduceRight((x, f) => f(x), x);

export {
  pipe,
  compose,
};
