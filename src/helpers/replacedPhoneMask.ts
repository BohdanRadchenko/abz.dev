const pattern = /^[\+]?38(0\d{2})(\d{3})(\d{2})(\d{2})$/
const code = "+38";

export const replacerPhoneMask = (value: string): string => {
  return value
    .split(pattern)
    .filter(v => !!v)
    .reduce((acc, el, i) => {
      acc = acc.concat(" ", !i ? `(${el})` : el);
      return acc;
    }, code);
}
