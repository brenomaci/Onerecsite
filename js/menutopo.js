const nav=document.getElementsByTagName("nav")[0];
const topoNav=nav.offsetTop;

window.onscroll=function(){
    fixarMenuNoTopo();
}

function fixarMenuNoTopo(){
    if(window.pageYOffset >= topoNav){
        nav.classList.add("fixonotopo");
    }else{
        nav.classList.remove("fixonotopo")
    }
}