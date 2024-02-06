const day = document.querySelector(".day");
const date = document.querySelector(".date");

const hrs = document.querySelectorAll(".h");
const min = document.querySelectorAll(".m");
const sec = document.querySelectorAll(".s");

const timeLine = document.querySelectorAll(".timeLine span");

let day_arr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getData() {
  const info = new Date();

  var dat = info.getDate();
  dat = dat < 10 ? "0" + dat : dat;
  var mon = info.getMonth() + 1;
  mon = mon < 10 ? "0" + mon : mon;
  var yr = info.getFullYear();

  var full = dat + "-" + mon + "-" + yr;
  date.innerText = full;
  let h = info.getHours();

  let m = info.getMinutes();

  let s = info.getSeconds();

  if (h > 12) {
    h = h - 12;
    timeLine[1].classList.add("active");
  } else {
    if (h == 0) {
      h = 12;
    }
    timeLine[0].classList.add("active");
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  h = h.toString();
  m = m.toString();
  s = s.toString();

  hrs[0].innerText = h[0];
  hrs[1].innerText = h[1];
  min[0].innerText = m[0];
  min[1].innerText = m[1];
  sec[0].innerText = s[0];
  sec[1].innerText = s[1];

  var gday = info.getDay();
  day.innerText = day_arr[gday];
}
getData();
setInterval(getData, 1000);
