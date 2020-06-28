const colors = document.querySelectorAll(".color"),
  color_name = document.querySelector(".color-name"),
  color_detail = document.querySelectorAll(".color-name p"),
  generator = document.querySelector(".btn");

const randomNum = () => {
  return Math.floor(Math.random() * 256);
};

const checkNum = (num) => {
  if (num === 0) {
    return "0";
  } else if (num === 1) {
    return "1";
  } else if (num === 2) {
    return "2";
  } else if (num === 3) {
    return "3";
  } else if (num === 4) {
    return "4";
  } else if (num === 5) {
    return "5";
  } else if (num === 6) {
    return "6";
  } else if (num === 7) {
    return "7";
  } else if (num === 8) {
    return "8";
  } else if (num === 9) {
    return "9";
  } else if (num === 10) {
    return "A";
  } else if (num === 11) {
    return "B";
  } else if (num === 12) {
    return "C";
  } else if (num === 13) {
    return "D";
  } else if (num === 14) {
    return "E";
  } else {
    return "F";
  }
};

const letterConvert = (number) => {
  let firstNum = checkNum(Math.floor(number / 16));

  let secondNum = checkNum(number % 16);

  return `${firstNum}${secondNum}`;
};

const randomColor = (div) => {
  const colorArr = [];

  for (let i = 0; i < 3; i++) {
    colorArr.push(randomNum());
  }

  div.style.backgroundColor = `RGB(${colorArr})`;
};

colors.forEach((color) => randomColor(color));

generator.addEventListener("click", () => {
  colors.forEach((color) => randomColor(color));
});
