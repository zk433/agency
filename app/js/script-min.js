function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var n,l=document.getElementsByClassName("mySlide"),o=document.getElementsByClassName("dot");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),n=0;n<l.length;n++)l[n].style.display="none";for(n=0;n<o.length;n++)o[n].className=o[n].className.replace(" active","");l[slideIndex-1].style.display="block",o[slideIndex-1].className+=" active"}var slideIndex=0;showSlides(slideIndex);var modal=document.getElementById("videoModal"),btn=document.getElementById("videoBtn"),span=document.getElementsByClassName("close")[0];btn.onclick=function(){modal.style.display="block"},span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")};var modalwebdev=document.getElementById("webDev"),btnwebdev=document.getElementById("webdev_learnMore"),span=document.getElementsByClassName("close")[1];btnwebdev.onclick=function(){modalwebdev.style.display="block"},span.onclick=function(){modalwebdev.style.display="none"};var modaldev=document.getElementById("dev"),btndev=document.getElementById("dev_learnMore"),span=document.getElementsByClassName("close")[2];btndev.onclick=function(){modaldev.style.display="block"},span.onclick=function(){modaldev.style.display="none"};var modalseo=document.getElementById("seo"),btnseo=document.getElementById("seo_learnMore"),span=document.getElementsByClassName("close")[3];btnseo.onclick=function(){modalseo.style.display="block"},span.onclick=function(){modalseo.style.display="none"},$(document).ready(function(){$("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var n=this.hash;$("html, body").animate({scrollTop:$(n).offset().top},800,function(){window.location.hash=n})}})});