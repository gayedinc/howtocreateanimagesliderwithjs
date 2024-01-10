const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) { // Slaytları yatay bir çizgide düzenlemek için her bir slaytın stil özelliği olan "left" değerini ayarlar. Bu, her slaytı yan yana düzenler.
    slide.style.left = `${index * 100}%`
});

let counter = 0;
nextBtn.addEventListener("click", function () { // "Sonraki" butonuna bir tıklama olayı ekler. Her tıklamada sayacı artırır ve ardından carousel fonksiyonunu çağırır.
    counter++;
    carousel();
});
prevBtn.addEventListener("click", function () { // "Önceki" butonuna bir tıklama olayı ekler. Her tıklamada sayacı azaltır ve ardından carousel fonksiyonunu çağırır.
    counter--;
    carousel();
});

function carousel() { // carousel fonksiyonu, slaytları ve butonları yönetmek için kullanılır.
    // Working with Slides

    // if (counter === slides.length) {
    //     counter = 0;
    // }
    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }

    // Working with Buttons
    if (counter < slides.length - 1) { // Eğer mevcut slayt, slayt sayısından bir eksikse ("Sonraki" buton için), "Sonraki" butonu görünür hale getirilir; aksi takdirde gizlenir.
        nextBtn.style.display = "block";
    }
    else {
        nextBtn.style.display = "none";
    }
    if (counter > 0) { // Eğer mevcut slayt 0'dan büyükse ("Önceki" buton için), "Önceki" butonu görünür hale getirilir; aksi takdirde gizlenir.
        prevBtn.style.display = "block";
    }
    else {
        prevBtn.style.display = "none";
    }

    slides.forEach(function (slide) { // Bu kısım, slaytlar üzerinde bir döngü oluşturur. forEach fonksiyonu, her bir slayt öğesi için verilen fonksiyonu çalıştırır.
        slide.style.transform = `translateX(-${counter * 100}%)`; // Slaytı yatay eksende -counter * 100% oranında kaydırır.
    });
}
prevBtn.style.display = "none"; // Sayfa yüklendiğinde "Önceki" butonu gizlenir, çünkü başlangıçta hiçbir önceki slayt yoktur.