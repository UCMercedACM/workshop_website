var exp = document.getElementsByClassName("experience");

export function accordion(index){
    var panel = exp[index].nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
}