const images = document.getElementById("imageCollection").getElementsByTagName("img");
let active =true;
for (items of images) {
    
    items.onclick = function () {
       
        this.style.cursor = 'hand';
        this.style.border= '3px solid red';
        this.style.opacity ="1";
        active=true;
    }
  
   items.onmouseout = function () {
        this.style.cursor = 'pointer';
        this.style.border="0px"
        this.style.opacity ="0.5";
        active=false;
    }
   
}

function changeImage(event) 
{
  const targetElement = event.target ;
    if(targetElement.tagName == "IMG")
    {
        mainimg.src = targetElement.getAttribute("src");    
    }
}