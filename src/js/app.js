export default class Validator {
  static validateUsername(name) {
    const valideName = /^[a-z0-9_-]+$/i;
    const invalidSymbols = /^(\b[0-9_]|[-])+|(\d{3,})+|([0-9_]|[-])+$/g;
    // const invalidSymbol = /(\b[0-9_])/; // first & last symbol
    // const invalidDash1 = /-$/; // if last symbol is -
    // const invalidDash2 = /^-/; // if first symbol is -
    // const invalidNum = /\d{3,}/; // more than 3 numbers

    return (valideName.test(name)
            && !(invalidSymbols.test(name)));
  }
}
