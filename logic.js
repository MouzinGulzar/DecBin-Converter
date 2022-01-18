let varNum;
let dec = document.querySelector("#decVal");
let decToBinBtn = document.querySelector("#btnDecToBin");
let desRes = document.querySelector("#decRes");
let bin = document.querySelector("#binVal");
let binToDecBtn = document.querySelector("#btnBinToDec");
let binRes = document.querySelector("#binRes");
let alertBox = document.querySelector("#alertBox");
let alert = document.querySelector("#alertMsg");

const decToBin = (dec) => {
  let bin = [];
  var i = 0;

  while (dec > 0) {
    bin[i] = dec % 2;
    dec = Math.floor(dec / 2);
    i++;
  }

  return bin.join("");
};

const binToDec = (bin) => {
  let dec = 0;
  let base = 1;
  let rem;

  for (let i = 0; i < bin.split("").length; i++) {
    if (bin[0] == "-" || bin[i] > 1 || bin.length == 0) {
      alertBox.classList.remove("hidden");
      alert.innerHTML = "Please Enter a binary number!";
      setTimeout(() => {
        alertBox.classList.add("hidden");
      }, 2000);
      dec = "";
      return dec;
    }
  }

  while (bin) {
    rem = bin % 10;
    dec = dec + rem * base;
    bin = Math.floor(bin / 10);
    base = base * 2;
  }

  return dec;
};

const handleCopy = (element) => {
  navigator.clipboard.writeText(element.value);
};

const handleReset = (one, two) => {
  let empty = "";
  one.value = empty;
  two.value = empty;
};

decToBinBtn.addEventListener("click", () => {
  decRes.value = decToBin(dec.value);
});

binToDecBtn.addEventListener("click", () => {
  binRes.value = binToDec(bin.value);
});
