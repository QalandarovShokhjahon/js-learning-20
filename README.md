# 🧠 JavaScript Day 20 — classList

Bu darsda men JavaScript’da **classList** orqali DOM elementlarining class’larini boshqarishni chuqurroq o‘rgandim.
Amaliy misollar yordamida element holatini (active, hidden, dark mode va h.k.) class orqali nazorat qilishni mustahkamlab oldim.

---

## 📚 O‘rganganlarim / What I learned

### classList nima?

`classList` — bu DOM elementga biriktirilgan class’lar bilan ishlash uchun qulay interfeys.
U CSS va JavaScript’ni birga ishlatib, dinamik UI yaratishda juda muhim.

---

## 🔧 Asosiy methodlar / Main methods

### classList.add()

Elementga yangi class qo‘shadi.

```
const box = document.querySelector('.box');
box.classList.add('active');
```

---

### classList.remove()

Elementdan class’ni olib tashlaydi.

```
box.classList.remove('active');
```

---

### classList.toggle()

Agar class bo‘lsa — olib tashlaydi, bo‘lmasa — qo‘shadi.

```
box.classList.toggle('active');
```

---

### classList.contains()

Elementda berilgan class bor-yo‘qligini tekshiradi.

```
if (box.classList.contains('active')) {
  console.log('Active class mavjud');
}
```

---

## 💻 Amaliy misollar / Practical examples

### 1️⃣ Active button

```
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
});
```

---

### 2️⃣ Dark mode switcher

```
const toggleBtn = document.querySelector('#toggle');

 toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

---

### 3️⃣ Bir nechta element bilan ishlash

```
const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('selected');
  });
});
```

---

## 🧩 Qisqacha xulosa / Summary

* `classList` → class’larni boshqarish
* `add`, `remove`, `toggle`, `contains` → eng muhim methodlar
* UI holatini CSS orqali boshqarish eng to‘g‘ri yo‘l

---

## 🎯 Maqsad / Goal

Ushbu darsning maqsadi — JavaScript’da **classList yordamida interaktiv va boshqariladigan dizaynlar** yaratishni o‘rganish.

Buning yordamida:

* Tugma va element holatlarini nazorat qilish
* Dark mode kabi funksiyalar qilish
* Toza va professional UI qurish
  mumkin bo‘ladi.

---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov
📅 Dars: 20-kun — classList
