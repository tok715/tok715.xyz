export const randomEnglishChars = ((): Array<string> => {
  const chars: Array<string> = [];
  for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); c++) {
    chars.push(String.fromCharCode(c));
    chars.push(String.fromCharCode(c).toUpperCase());
  }
  for (let c = "0".charCodeAt(0); c <= "9".charCodeAt(0); c++) {
    chars.push(String.fromCharCode(c));
  }
  return chars;
})();
