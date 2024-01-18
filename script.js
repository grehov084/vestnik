let headerMobile, clickedElem, authors, readers, content;
headerMobile = document.querySelector(".header-mobile");
authors = document.querySelector(".site-menu--authors");
readers = document.querySelector(".site-menu--readers");
document.addEventListener("click", function(e){
    if(e.target.classList.contains("header-mobile-top")){
        clickedElem = e.target.children[2];
    }
    else if(e.target.tagName == "I"){
        clickedElem = e.target.parentNode.parentNode.parentNode;
    }
    else if(e.target.tagName == "SPAN"){
        clickedElem = e.target.parentNode.parentNode;
    }
    else if(e.target.classList.contains("site-menu-title--authors")){
        clickedElem = e.target;
    }
    if(clickedElem.classList.contains("header-mobile-burger")){
        if(!headerMobile.hasAttribute("style")){
            headerMobile.style.top = 60 + "px";
        }
        else{
            headerMobile.style.top = -270 + "px";
            setTimeout(() => {
                headerMobile.removeAttribute("style");
            }, 500);
        }
        clickedElem = null;
    }
    else if(clickedElem.classList.contains("site-menu-title--authors")){
        
    }
});