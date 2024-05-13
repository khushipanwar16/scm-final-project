// <!-- CREATE AUTO NAVBAR SCROLLING -->
const section=document.querySelectorAll('section')
const navlink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop -150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>=offset && top< offset + height){
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    // <!-- CREATE A  STICKY NAV BAR -->
 var header=document.querySelector('header')
 header.classList.toggle("sticky",window.scrollY>100)
  
    menubar.classList.remove('bx-x')
    navbar.classList.remove('active')
};
// <!-- CREATE A  TOGGLE CHANGER-->
let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
menubar.onclick=()=>{
 menubar.classList.toggle('bx-x')
 navbar.classList.toggle('active')
}

 // <!-- CREATE A  TEXT CHANGER-->
 var type  = new Typed('.textline',{
    strings:['Frontend Developer','Blogger','Youtuber'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
 })

 // email validation
 function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
    window.open('#home','_self')
return true;
}
else
{
alert("You have entered an invalid email address!");
window.open('#contact','_self')
return false;
}
}
 