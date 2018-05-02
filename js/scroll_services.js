function switcher(){
    [].forEach.call(document.body.querySelectorAll("[data-switcher]"),(a)=>{
        let b = a.querySelectorAll("[data-switcher-name]"),
            c = a.querySelectorAll("[data-switcher-show]");
        [].forEach.call(c,(d)=>{
            if (d.dataset.switcherSelected != undefined) {
                d.classList.add("selected");
                [].filter.call(b,(a)=>a.dataset.switcherName==d.dataset.switcherShow?a.classList.add("selected"):"");
            }
            d.addEventListener("click",()=>{
                [].forEach.call(c,(a)=>a!=d?a.classList.remove("selected"):a.classList.add("selected"));
                [].forEach.call(b,(a)=>a.dataset.switcherName!=d.dataset.switcherShow?a.classList.remove("selected"):a.classList.add("selected"));
            },true);
        });
    });
}
window.onload = function() {
    switcher();
}