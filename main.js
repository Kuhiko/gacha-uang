const tombol = document.getElementById("tombol");
const img = document.getElementById("foto");
const hasil = document.querySelector(".hasil");
function gacha(){
  const img = document.getElementById("foto");
  const gambar = ["1k.jpg", "2k.jpg", "5k.jpg", "10k.jpg", "20k.jpg", "50k.jpg", "75k.jpg", "100k.jpg", "coba.jpg"];
  const waktuMulai = new Date().getTime();
  let i = 0
  setInterval(function(){
    if (new Date().getTime() - waktuMulai > 5000) {
      clearInterval
      return;
    }
    img.setAttribute("src", `./img/${gambar[i++]}`)
    if(i == gambar.length){
      i = 0
    }
  }, 100)
  console.log(img)
}



function gachaGambar(){
    const random = Math.floor(Math.random() * 20 +1);
  console.log(random);
  if (random === 1 || random === 15){
    img.setAttribute("src", "./img/1k.jpg");
  } else if(random === 5 || random === 20){
    img.setAttribute("src", "./img/2k.jpg");
 } else if(random === 2 || random === 11){
   img.setAttribute("src", "./img/5k.jpg");
 } else if(random === 17 || random === 10){
   img.setAttribute("src", "./img/10k.jpg");
 } else if(random === 4 || random === 8){
  img.setAttribute("src", "./img/20k.jpg");
 } else if(random === 12 || random === 14){
   img.setAttribute("src", "./img/50k.jpg");
 } else if(random === 9 || random === 16){
   img.setAttribute("src", "./img/75l.jpg");
 } else if(random === 6 || random === 13){
   img.setAttribute("src", "./img/100k.jpg");
  } else{
    img.setAttribute("src", "./img/coba.jpg");
  }
  
 if (random === 1 || random === 15){
   hasil.innerHTML = "Rp 1000"
 } else if(random === 5 || random === 20){
   hasil.innerHTML = "Rp 2000"
 } else if(random === 2 || random === 11){
   hasil.innerHTML = "Rp 5000"
 } else if(random === 17 || random === 10){
   hasil.innerHTML = "Rp 10.000"
 } else if(random === 4 || random === 8){
   hasil.innerHTML = "Rp 20.000"
 } else if(random === 12 || random === 14){
   hasil.innerHTML = "Rp 50.000"
 } else if(random === 9 || random === 16){
   hasil.innerHTML = "Rp 75.000"
 } else if(random === 6 || random === 13){
   hasil.innerHTML = "Rp 100.000"
  } else{
   hasil.innerHTML = "Anda kurang beruntung"
  }
}


tombol.addEventListener("click", function(){
  gacha();
  setTimeout(function(){
    gachaGambar();
  }, 4000)
})
