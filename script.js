var anim = gsap.timeline();

anim.from (".topsection", {
   y: -300,
   opacity: 0,
   duration: 1, 
})
anim.from (".left h1", {
    y: 100,
    opacity: 0,
    duration: 1, 
 }, "ac")
 anim.from (".left p", {
    y: 200,
    opacity: 0,
    duration: 1, 
 })

 anim.from (".btn", {
    y: 200,
    opacity: 0,
    duration: 1, 
 })

 anim.from ("video", {
    y: 200,
    opacity: 0,
    duration: 1, 
 }, "ac")