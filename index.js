import{a as i,i as n}from"./assets/vendor-CLTxG5yw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();i.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function l(){try{const{data:r}=await i("/categories");return r}catch(r){n.error({message:`${r.message??String(r)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}}l();const d=document.querySelectorAll(".category-card");async function g(r){const t=await l();[...r].forEach((a,s)=>{s!==0&&(a.dataset.id=t[s-1]._id,a.children[0].textContent=t[s-1].name)})}g(d);const f=document.querySelector(".futniture-list"),u=document.querySelector(".category-container");u.addEventListener("click",p);async function p(r){r.preventDefault();const t=r.target.closest(".category-card");if(!u.contains(t)||!t)return;const a=t.dataset.id;let s=1;try{const{data:e}=await i("/furnitures",{params:{page:s,limit:10,category:a}});f.innerHTML=y(e.furnitures)}catch(e){n.error({message:`${e.message??String(e)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}}function y(r){return r.map(t=>`
        <li data-id="${t._id}">
            <img class="" src="${t.images[0]}" alt="${t.name}"/>
            <h3 class="">${t.name}</h3>
            <ul class="">
                <li class="" style="background-color: ${t.color[0]}; color: transparent;">1</li>
                <li class="" style="background-color: ${t.color[1]}; color: transparent;">1</li>
                <li class="" style="cobackground-color: ${t.color[2]}; color: transparent;">1</li>
            </ul>
            <p class="">${t.price.toLocaleString()} грн</p>
            <button class="button load-more-furni-button">Детальніше</button>
        </li>
    `).join("")}
//# sourceMappingURL=index.js.map
