export function toPascal(str) {
    return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }).replace(/\s+/g, '');
}
//# sourceMappingURL=Utils.js.map