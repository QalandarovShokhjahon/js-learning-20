// classList → bu HTML elementining classlarini qo‘shish, olib tashlash va almashtirish uchun ishlatiladigan maxsus obyekt.

// let btns = document.querySelectorAll("button");
// btns.forEach((qiymat) => {
//   console.log(qiymat.classList);
// });

// qiymat.classList.length → HTML elementining nechta classi borligini aniqlaydi.
// let btns = document.querySelectorAll('button');
// let button = btns.forEach((qiymat) => {
//   console.log(qiymat.classList.length);
// })

// element.classList.item(index) → HTML elementining index bo‘yicha classini qaytaradi.
// let btns = document.querySelectorAll("button");
// btns.forEach((btn) => {
//   console.log(btn.classList.item(0));
// });

let divs = document.querySelectorAll("div");
divs.forEach((div) => {
  console.log(div.classList.item(1));
});

// element.classList.item(index) → HTML elementining index bo‘yicha classini qaytaradi.
// let btns = document.querySelectorAll("button")

// btns.forEach((btn) => {
//   btn.addEventListener("click", (evt) => {
//     evt.target.classList.add("border-2", "border-dotted")
//   })
// })

// remove() → elementni butunlay o‘chirib tashlaydi.
// let btns = document.querySelectorAll("button");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (evt) => {
//     evt.target.classList.remove("rounded-full");
//   });
// });

// classList.contains(className) metodi elementda berilgan klass bor yoki yo‘qligini tekshiradi va true yoki false qaytaradi.
// let btns = document.querySelectorAll("button");
// btns.forEach((qiymat) => {
//   qiymat.addEventListener("click", () => {
//     if (qiymat.classList.contains("rounded-full")) {
//       console.log("rounded-full");
//     } else {
//       console.log("rounded-2xl");
//     }
//   });
// });

// classList.toggle() → Elementga klass qo‘shadi yoki olib tashlaydi – agar klass mavjud bo‘lsa, olib tashlaydi, yo‘q bo‘lsa, qo‘shadi.
// let btns = document.querySelectorAll("button")

// btns.forEach((qiymat) => {
//   qiymat.addEventListener("click", () => {
//     qiymat.classList.toggle("rounded-full")
//     qiymat.classList.toggle("rotate-360")
//   })
// })

// button joylarini o'zgartirish
let btns = document.querySelectorAll("button");

btns[0].addEventListener("click", () => {
  btns[0].classList.toggle("translate-x-40");
});
btns[1].addEventListener("click", () => {
  btns[1].classList.toggle("-translate-x-40");
});
btns[2].addEventListener("click", () => {
  btns[2].classList.toggle("translate-x-40");
});
btns[3].addEventListener("click", () => {
  btns[3].classList.toggle("-translate-x-40");
});
btns[4].addEventListener("click", () => {
  btns[4].classList.toggle("-translate-x-40");
});
