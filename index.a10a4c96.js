const e=function(){const e=Array.from(document.querySelectorAll("#bk-list > li > div.bk-book")),t=e.length;return{init:function(){fetch("./db/VelikaIstoriyaYkrajni.txt").then((e=>e.text())).then((s=>{const a=s.split("\n");e.forEach((function(s){const n=e.filter((e=>e!==s)),c=s.parentNode,i=s.querySelector("div.bk-page"),d=c.querySelector("button.bk-bookview");let o=0;for(;i.firstChild;)i.firstChild.remove();const l=a.map(((e,t)=>{const s=document.createElement("div");return s.classList.add("bk-content"),0===t&&s.classList.add("bk-content-current"),s.textContent=e,i.appendChild(s),s}));if(s.dataset.opened="false",s.dataset.flip="false",c.querySelector("button.bk-bookback").addEventListener("click",(function(){d.classList.remove("bk-active"),"true"===s.dataset.flip?(s.dataset.opened="false",s.dataset.flip="false",s.classList.remove("bk-viewback"),s.classList.add("bk-bookdefault")):(s.dataset.opened="false",s.dataset.flip="true",s.classList.remove("bk-viewinside","bk-bookdefault"),s.classList.add("bk-viewback"))})),d.addEventListener("click",(function(){n.forEach((e=>{e.dataset.opened="false",e.classList.remove("bk-viewinside"),e.parentNode.style.zIndex=0,e.parentNode.querySelector("button.bk-bookview").classList.remove("bk-active"),e.classList.contains("bk-viewback")||e.classList.add("bk-bookdefault")})),"true"===s.dataset.opened?(this.classList.remove("bk-active"),s.dataset.opened="false",s.dataset.flip="false",s.classList.remove("bk-viewinside"),s.classList.add("bk-bookdefault")):(this.classList.add("bk-active"),s.dataset.opened="true",s.dataset.flip="false",s.classList.remove("bk-viewback","bk-bookdefault"),s.classList.add("bk-viewinside"),c.style.zIndex=t,o=0,l.forEach((e=>e.classList.remove("bk-content-current"))),l[o].classList.add("bk-content-current"))})),l.length>1){const e=document.createElement("span"),t=document.createElement("span"),s=document.createElement("span");e.classList.add("bk-page-prev"),e.innerHTML="&lt;",t.classList.add("bk-page-next"),t.innerHTML="&gt;",s.classList.add("bk-page-info"),s.innerHTML=`${o+1} з ${l.length}`;const a=document.createElement("nav");a.appendChild(e),a.appendChild(s),a.appendChild(t),i.appendChild(a);const n=()=>{s.innerHTML=`${o+1} з ${l.length}`};e.addEventListener("click",(function(e){e.preventDefault(),o>0&&(--o,l.forEach((e=>e.classList.remove("bk-content-current"))),l[o].classList.add("bk-content-current")),n()})),t.addEventListener("click",(function(e){e.preventDefault(),o<l.length-1&&(++o,l.forEach((e=>e.classList.remove("bk-content-current"))),l[o].classList.add("bk-content-current")),n()}))}}))})).catch((e=>{console.error("Fetch error:",e)}))}}}();document.addEventListener("DOMContentLoaded",(function(){e.init()}));
//# sourceMappingURL=index.a10a4c96.js.map
