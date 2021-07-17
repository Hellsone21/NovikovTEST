
// Получить модель
var modal = document.getElementById("myModal");

// Получите изображение и вставьте его внутрь модального - используйте его текст "alt" в качестве подписи
// var img = document.querySelector(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (const img of document.querySelectorAll(".myImg")) {
   img.onclick = () => { 
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
   };
}

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}