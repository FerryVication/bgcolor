//Fungsi Untuk Reset Background Ke Putih Semula
function reset(){
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".title").style.color = "black"
  document.querySelector(".box").style.backgroundColor = "rgb(6,6,6)";
}

//Merubah Box Menjadi Putih Ketika Background Hitam
function box_putih(){
  document.querySelector(".box").style.backgroundColor = "white";
}


//Untuk Merubah Background Setiap Circle
const circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
  circle.addEventListener("click", ({ target }) => {
    const { backgroundColor } = getComputedStyle(target);
    if (backgroundColor == "rgb(51, 51, 51)"){
      document.querySelector(".title").style.color = "white";
    }
    document.body.style.backgroundColor = backgroundColor;
  });
});