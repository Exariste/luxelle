// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener("click", function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});

// Simple fade-in on scroll
const elements = document.querySelectorAll('.card, .section h2');

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}
});
},{threshold:0.2});

elements.forEach(el=>{
el.style.opacity = 0;
el.style.transform = "translateY(30px)";
el.style.transition = "0.8s";
observer.observe(el);
});
