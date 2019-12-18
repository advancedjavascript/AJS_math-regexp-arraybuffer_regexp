export default class Validator {
  static validateUsername(name) {
    const valideName = /^[a-z0-9_-]+$/i;
    const invalidSymbol = /(\b[0-9_])/; // first & last symbol
    const invalidDash1 = /-$/; // if last symbol is -
    const invalidDash2 = /^-/; // if first symbol is -
    const invalidNum = /\d{3,}/; // more than 3 numbers

    return (valideName.test(name)
            && !(invalidSymbol.test(name))
            && !(invalidDash1.test(name))
            && !(invalidDash2.test(name))
            && !(invalidNum.test(name)));
  }
}
