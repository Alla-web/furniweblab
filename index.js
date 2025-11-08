import{a,i as n}from"./assets/vendor-CLTxG5yw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();a.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function l(){try{const{data:r}=await a("/categories");return r}catch(r){n.error({message:`${r.message??String(r)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}}l();const d=document.querySelectorAll(".category-card");async function g(r){const t=await l();[...r].forEach((c,s)=>{s!==0&&(c.dataset.id=t[s-1]._id,c.children[0].textContent=t[s-1].name)})}g(d);const f=document.querySelector(".futniture-list"),u=document.querySelector(".category-container");u.addEventListener("click",p);async function p(r){r.preventDefault();const t=r.target.closest(".category-card");if(!u.contains(t)||!t)return;const c=t.dataset.id;let s=1;try{const{data:e}=await a("/furnitures",{params:{page:s,limit:10,category:c}});console.log(e),f.innerHTML=y(e.furnitures)}catch(e){n.error({message:`${e.message??String(e)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}}function y(r){return r.map(t=>`
        <li data-id="${t._id}">
            <img class="" src="${t.images[0]}" alt="${t.name}"/>
            <h3 class="">${t.name}</h3>
            <ul class="">
                <li class="" style="color: ${t.color[0]};"></li>
                <li class="" style="color: ${t.color[1]};"></li>
                <li class="" style="color: ${t.color[2]};"></li>
            </ul>
            <p class="">${t.price.toLocaleString()}</p>
            <button class="button">Детальніше</button>
        </li>
    `).join("")}
//# sourceMappingURL=index.js.map
