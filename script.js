let headerMobile, clickedElem, authors, readers, content, body, height, toggle;
headerMobile = document.querySelector(".header-mobile");
authors = document.querySelector(".site-menu--authors");
readers = document.querySelector(".site-menu--readers");
body = document.querySelector("body");
function openElem(clickedElem){
    if(clickedElem != null){
        if(clickedElem.classList.contains("header-mobile-burger")){
            if(!headerMobile.hasAttribute("style")){
                headerMobile.style.transform = "translate(0, 330px)";
                body.style.overflow = "hidden";
            }
            else{
                headerMobile.style.cssText = "transform: translate(0, -270px)";
                setTimeout(() => {
                    headerMobile.removeAttribute("style");
                }, 500);
                body.removeAttribute("style");
            }
        }
        else{
            toggle = clickedElem.children[0].children[0].children[0];
            content = clickedElem.parentNode.children[1];
            height = 0;
            for(i=0; i<content.childElementCount; i++){
                height += content.children[i].offsetHeight;
            }
            if(!content.hasAttribute("style")){
                content.style.marginBottom = 20 + "px";
                content.style.height = height + "px";
                toggle.setAttribute("d", "M33 29L25 21L17 29");
            }
            else{
                content.style.marginBottom = 0;
                content.style.height = 0;
                setTimeout(() => {
                    toggle.setAttribute("d", "M33 20L25 30L17 20");
                    content.removeAttribute("style");
                }, 500);
            }
        }
    }
    clickedElem = null;
}
document.addEventListener("click", function(e){
    if(e.target.classList.contains("header-mobile-top")){
        clickedElem = e.target.children[2];
    }
    else if(e.target.classList.contains("burger-btn")){
        clickedElem = e.target.parentNode;
    }
    else if(e.target.tagName == "I"){
        clickedElem = e.target.parentNode.parentNode.parentNode;
    }
    else if(e.target.tagName == "SPAN"){
        clickedElem = e.target.parentNode.parentNode;
    }
    else if(e.target.tagName == "path"){
        clickedElem = e.target.parentNode.parentNode.parentNode;
    }
    else if(e.target.tagName == "svg"){
        clickedElem = e.target.parentNode.parentNode;
    }
    else if(e.target.classList.contains("header-mobile-burger")){
        clickedElem = e.target;
    }
    else if(e.target.classList.contains("site-menu-title--authors") ||
    e.target.classList.contains("site-menu-title--readers")){
        clickedElem = e.target;
    }
    else{
        clickedElem = null;
    }
    openElem(clickedElem);
});