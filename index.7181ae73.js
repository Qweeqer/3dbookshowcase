!function(){var e,t,n=(e=Array.from(document.querySelectorAll("#bk-list > li > div.bk-book")),t=e.length,{init:function(){fetch("./db/VelikaIstoriyaYkrajni.txt").then((function(e){return e.text()})).then((function(n){var a=n.split("\n");e.forEach((function(n){for(var s=e.filter((function(e){return e!==n})),i=n.parentNode,c=n.querySelector("div.bk-page"),o=i.querySelector("button.bk-bookview"),r=0;c.firstChild;)c.firstChild.remove();var d=a.map((function(e,t){var n=document.createElement("div");return n.classList.add("bk-content"),0===t&&n.classList.add("bk-content-current"),n.textContent=e,c.appendChild(n),n}));if(n.dataset.opened="false",n.dataset.flip="false",i.querySelector("button.bk-bookback").addEventListener("click",(function(){o.classList.remove("bk-active"),"true"===n.dataset.flip?(n.dataset.opened="false",n.dataset.flip="false",n.classList.remove("bk-viewback"),n.classList.add("bk-bookdefault")):(n.dataset.opened="false",n.dataset.flip="true",n.classList.remove("bk-viewinside","bk-bookdefault"),n.classList.add("bk-viewback"))})),o.addEventListener("click",(function(){s.forEach((function(e){e.dataset.opened="false",e.classList.remove("bk-viewinside"),e.parentNode.style.zIndex=0,e.parentNode.querySelector("button.bk-bookview").classList.remove("bk-active"),e.classList.contains("bk-viewback")||e.classList.add("bk-bookdefault")})),"true"===n.dataset.opened?(this.classList.remove("bk-active"),n.dataset.opened="false",n.dataset.flip="false",n.classList.remove("bk-viewinside"),n.classList.add("bk-bookdefault")):(this.classList.add("bk-active"),n.dataset.opened="true",n.dataset.flip="false",n.classList.remove("bk-viewback","bk-bookdefault"),n.classList.add("bk-viewinside"),i.style.zIndex=t,r=0,d.forEach((function(e){return e.classList.remove("bk-content-current")})),d[r].classList.add("bk-content-current"))})),d.length>1){var l=document.createElement("span"),u=document.createElement("span"),k=document.createElement("span");l.classList.add("bk-page-prev"),l.innerHTML="&lt;",u.classList.add("bk-page-next"),u.innerHTML="&gt;",k.classList.add("bk-page-info"),k.innerHTML="".concat(r+1," з ").concat(d.length);var f=document.createElement("nav");f.appendChild(l),f.appendChild(k),f.appendChild(u),c.appendChild(f);var b=function(){k.innerHTML="".concat(r+1," з ").concat(d.length)};l.addEventListener("click",(function(e){e.preventDefault(),r>0&&(--r,d.forEach((function(e){return e.classList.remove("bk-content-current")})),d[r].classList.add("bk-content-current")),b()})),u.addEventListener("click",(function(e){e.preventDefault(),r<d.length-1&&(++r,d.forEach((function(e){return e.classList.remove("bk-content-current")})),d[r].classList.add("bk-content-current")),b()}))}}))})).catch((function(e){console.error("Fetch error:",e)}))}});document.addEventListener("DOMContentLoaded",(function(){n.init()}))}();
//# sourceMappingURL=index.7181ae73.js.map