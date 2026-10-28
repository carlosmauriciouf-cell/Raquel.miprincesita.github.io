// ELEMENTOS 
const pages = document.querySelectorAll(".page");
const welcome = document.getElementById("welcome");
const gallery = document.getElementById("gallery");
const finalPage = document.getElementById("final");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const listenBtn = document.getElementById("listenBtn");
const music = document.getElementById("music");
const photo = document.getElementById("photo");
const caption = document.getElementById("caption");
// FOTOS
const photos = [
    {
        image:"img/foto1.jpg",
        text:"Cada momento contigo ha significado mucho para mí."
    },
    {
        image:"img/foto2.jpg",
        text:"Tus besos son lo que espero con ansias en mi dia a dia, sentir tu piel tan suave y creeme... A donde vayas yo ire, te siento como mi principio y el final donde a de quedarme, pienso en ti y sueño contigo."
    },
    {
        image:"img/foto3.jpg",
        text:"No habia sentido un abrazo mas acogedor desde que era un niño, ahora quiero ser tu niño, tu chiquito... Me encanta sentir la calidez de tus abrazos, son mi hogar y no quiero apartarme de ese mi verdadero y univo hogar, entre mis brazos yo te protejo mi princesita."
    },
    {
        image:"img/foto4.jpg",
        text:"Gracias por existir, por llegar, por quedarte, estas en cada pensamiento, cada latido, cada respiro, cada celula, no me veo amando a nadie mas que no sea a ti, aqui estoy yo mi amor cerrandole el paso al dolor, no temas que yo te cuidare."
    }
];
let current = 0;
// CAMBIAR PÁGINA
function showPage(page){
    pages.forEach(p=>p.classList.remove("active"));
    page.classList.add("active");
}
// INICIAR
startBtn.onclick = ()=>{
    music.play();
    showPage(gallery);
};
// SIGUIENTE FOTO
nextBtn.onclick = () => {
    current++;
    if(current < photos.length){
        photo.classList.remove("show");
        photo.classList.add("hide");
        caption.classList.remove("showText");
        caption.classList.add("hideText");
        setTimeout(()=>{
            photo.src = photos[current].image;
            caption.textContent = photos[current].text;
            photo.classList.remove("hide");
            photo.classList.add("show");
            caption.classList.remove("hideText");
            caption.classList.add("showText");
        },700);
    }else{
        showPage(finalPage);
    }
};
// BOTÓN FINAL
listenBtn.onclick = ()=>{
    alert("❤️ Ahora es el momento, mirame a los ojos mi amor que hay algo que te tengo que decir <3.");
};
// CORAZONES
function createHeart() {
    const container = document.getElementById("hearts");
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (8 + Math.random() * 5) + "s";
    heart.style.transform = `scale(${0.4 + Math.random() * 0.8}) rotate(45deg)`;
    container.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 13000);
}
setInterval(createHeart, 1000);
// PARTÍCULAS DE LUZ
function createParticle(){
    const container = document.getElementById("particles");
    const particle = document.createElement("div");
    particle.classList.add("particle");
    const size = Math.random() * 4 + 2;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = "100vh";
    particle.style.animationDuration = (8 + Math.random() * 8) + "s";
    container.appendChild(particle);
    setTimeout(()=>{
        particle.remove();
    },16000);
}
setInterval(createParticle,250);