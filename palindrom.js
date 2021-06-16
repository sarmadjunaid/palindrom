let palindrom = function (word) {
  let len = word.length;
  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
  let flip = end.split("").reverse().join("");
  if (start === flip) {
    console.log(`${word} is a palindrom`);
  } else {
    console.log(`${word} is not a palindrom`);
  }
};

palindrom("radar");
palindrom("redder");
palindrom("window");
