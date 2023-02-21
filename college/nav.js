let toggle= document.getElementsByClassName("toggle")[0]
let navlinks = document.getElementsByClassName("nav_links")[0]
 
toggle.addEventListener('click',()=>{
    navlinks.classList.toggle("active")
})
