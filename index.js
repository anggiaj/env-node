const is = /^is/;
const satisfy = /^satisfy/;
const delimiter = /-|_|:/;

module.exports = new Proxy(
  {
    [Symbol.toPrimitive]() {
      return this.toString();
    },
    inspect() {
      return this.toString();
    },
    toString() {
      return String(process.env.NODE_ENV);
    },
  },
  {
    get(target, name) {
      if (name in target) {
        return target[name];
      }

      if (typeof name === 'string') {
        if (name.match(is)) {
          return name.replace(is, '').toLowerCase() === target.toString().replace(delimiter, '').toLowerCase();
        }

        if (name.match(satisfy)) {
          const find = new RegExp(name.replace(satisfy, '').toLowerCase(), 'i');
          return target.toString().match(find) !== null;
        }
      }

      return undefined;
    },
  });
