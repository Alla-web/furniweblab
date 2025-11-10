import{a as u,i as d,A as U,S as G}from"./assets/vendor-DY_idrNt.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const g=document.getElementById("burger"),C=document.getElementById("nav"),v=document.getElementById("overlay");g.addEventListener("click",()=>{const t=C.classList.toggle("active");v.classList.toggle("active"),g.classList.toggle("active",t)});v.addEventListener("click",()=>{C.classList.remove("active"),v.classList.remove("active"),g.classList.remove("active")});document.querySelectorAll(".nav__link, .nav__btn").forEach(t=>{t.addEventListener("click",()=>{C.classList.remove("active"),v.classList.remove("active"),g.classList.remove("active")})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".btn.btn-link"),r="feedbacks";t.addEventListener("click",o=>{o.preventDefault();const s=document.getElementById(r);s&&s.scrollIntoView({behavior:"smooth",block:"start"})})});u.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";const y="pickedCategoryId";function I(t){d.error({message:`${t.message??String(t)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}function z(t){d.info({message:`${t}`,position:"topCenter",timeout:3e3,backgroundColor:"#009b18",messageColor:"white",close:!1})}const M=document.querySelector(".loading");function B(){M.hidden=!1}function T(){M.hidden=!0}localStorage.removeItem(y);let l=1,h=0,b=0;const L=8;async function A(){try{const{data:t}=await u("/categories");return t}catch(t){I(t)}}A();const J=document.querySelectorAll(".category-card");async function K(t){const r=await A();[...t].forEach((o,s)=>{s!==0&&(o.dataset.id=r[s-1]._id,o.children[0].textContent=r[s-1].name)})}K(J);const p=document.querySelector(".furniture-list"),O=document.querySelector(".category-container");O.addEventListener("click",W);async function W(t){B();const r=t.target.closest(".category-card");if(!O.contains(r)||!r)return;l=1,p.innerHTML="";const o=r.dataset.id;o==null?localStorage.removeItem(y):localStorage.setItem(y,JSON.stringify(o));try{const{data:s}=await u("/furnitures",{params:{page:l,limit:L,category:o}});h=s.totalItems,b=Math.ceil(h/L),l=s.page,p.innerHTML=R(s.furnitures),w.hidden=l>=b,T()}catch(s){I(s)}}function R(t){return t.sort((r,o)=>r.price-o.price).map(r=>`
        <li class="furniture-list-item">
            <img class="card-image" src="${r.images[0]}" alt="${r.name}"/>
            <h3 class="card-title">${r.name}</h3>
            <ul class="card-color-container">
                ${(r.color||[]).map(o=>`
                    <li
                    class="card-color-item"
                    style="background-color: ${o};">1
                    </li>
                    `).join("")}               
            </ul>
            <p class="card-price">${r.price.toLocaleString()} грн</p>
            <button 
                class="details-button button" 
                data-id="${r._id}">Детальніше</button>
        </li>
    `).join("")}const w=document.querySelector(".load-more-button");w.addEventListener("click",Y);async function Y(t){p.insertAdjacentElement("beforeend",M),B(),l++;const r=JSON.parse(localStorage.getItem(y));try{const{data:o}=await u("/furnitures",{params:{page:l,limit:L,category:r}});h=o.totalItems,b=Math.ceil(h/L),l=Number(o.page),l<b?(p.insertAdjacentHTML("beforeend",R(o.furnitures)),w.hidden=!1):(z("В даній категорії закінчилися товари"),w.hidden=!0);const s=p.querySelector(".furniture-list-item");s&&window.scrollBy({left:0,top:s.getBoundingClientRect().height,behavior:"smooth"}),T()}catch(o){I(o)}}new U(".qa",{duration:300,showMultiple:!1,openOnInit:[]});const x=document.querySelectorAll(".faq-quest");x.forEach(t=>{t.addEventListener("click",()=>{const r=t.getAttribute("aria-expanded")==="true";x.forEach(o=>o.setAttribute("aria-expanded","false")),r||t.setAttribute("aria-expanded","true")})});const m=new URL("/furniweblab/assets/sprite-CA5GGzUd.svg",import.meta.url).href,H=document.querySelector(".feedbacks-list");H.innerHTML=`
  <div class="swiper">
    <div class="swiper-wrapper"></div>

    <div class="swiper-controls">
      <div class="swiper-pagination"></div>
  
      <div class="swiper-nav-btn">
        <button class="general-btn custom-prev"><svg class="" width="14" height="14">
        <use href="${m}#icon-arrow-left"></use>
        </svg></button>
        <button class="general-btn custom-next"><svg class="" width="14" height="14">
        <use href="${m}#icon-arrow-right"></use>
        </svg></button>
      </div>
    </div>

  </div>
`;const Q=document.querySelector(".swiper .swiper-wrapper");function X(t){return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.round(t*10)/10}function Z(t){const r=Math.floor(t),o=t%1>=.5?1:0,s=5-r-o;let n="";for(let a=0;a<r;a++)n+=`<svg class="star" viewBox="0 0 32 32"><use xlink:href="${m}#icon-star-full"></use></svg>`;o&&(n+=`<svg class="star" viewBox="0 0 32 32"><use xlink:href="${m}#icon-star-half"></use></svg>`);for(let a=0;a<s;a++)n+=`<svg class="star" viewBox="0 0 32 32"><use xlink:href="${m}#icon-star-empty"></use></svg>`;return n}async function ee(){try{return(await u("https://furniture-store-v2.b.goit.study/api/feedbacks?limit=10&page=1")).data}catch(t){return console.log(t),[]}}ee().then(t=>{t.feedbacks.forEach(r=>{const o=X(r.rate),s=`
      <div class="swiper-slide">
        <div class="feedback-card">
          <div class="stars">${Z(o)}</div>
          <p class="swiper-text">“${r.descr}”</p>
          <p class="swiper-text-name">${r.name}</p>
        </div>
      </div>
    `;Q.insertAdjacentHTML("beforeend",s)}),new G(".swiper",{loop:!1,slidesPerView:1,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},navigation:{prevEl:".custom-prev",nextEl:".custom-next"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}).catch(t=>{console.error("Ошибка при инициализации слайдера отзывов:",t),H.innerHTML=`<p style="color: red;">
      Не удалось загрузить отзывы. Пожалуйста, попробуйте обновить страницу.
    </p>`});u.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";function P(t){d.error({message:t,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}async function te(t){try{return(await u.get(`/furnitures/${t}`)).data}catch(r){throw console.error(`Помилка при отриманні деталей продукту з ID ${t}:`,r),r}}const E=document.querySelector(".product-modal-backdrop"),N=document.querySelector(".product-modal .modal-main-content"),oe=document.querySelector(".modal-close-btn"),_=document.body;function re(t){if(t==null)return"";const r=Math.round(t*2)/2,o=Math.floor(r),s=r-o===.5;let n=`rating value-${o}`;return s&&(n+=" half"),`
        <div class="${n}">
            <div class="star-container"></div>
        </div>
    `}function se(t){return`<div class="color-options-container">
            <p class="color-label">Колір</p>
            <form class="color-options">${t.map((o,s)=>{const n=`color-${o.substring(1)}`;return`
            <label class="color-option">
                <input
                  type="radio"
                  name="product-color"
                  value="${o}" 
                  id="${n}"                    
                  class="custom-radio-style ${s===0?"is-active":""}" 
                  style="
                    -webkit-appearance:none;
                    appearance:none;
                    width: 32px;
                    height: 32px;
                    background-color: ${o}; 
                    cursor:pointer; 
                    display:inline-block;"
                  data-color-hex=${o}; 
                  ${s===0?"checked":""}                      
                  />
                           
            </label>
        `}).join("")}</form>
          </div>`}function ne(t){const r=t.price.toLocaleString()+" грн";return`
        <div class="product-gallery">
            <img
              src="${t.images[0]}" alt="${t.name} (Основне)" 
              class="main-product-image" 
            />
            <div class="gallery-thumbnails">
                 ${t.images.slice(1).map(o=>`<img src="${o}" alt="${t.name} (Мініатюра)" class="gallery-thumbnail">`).join("")}
            </div>
        </div>
        
        <div class="product-info">
            <h2 class="model-name">${t.name}</h2> 
            <p class="category-name">${t.category.name}</p> 
            <p class="product-price">
              <span class="price-value">${r}</span>
              <span class="price-currency"></span>
            </p>
            <div class="stars-container">${re(t.rate)} 
                  ${se(t.color)} 
            </div>            
            <div class="product-details">
                <p class="description-text">${t.description}</p> 
                <p class="dimensions-text">Розміри: ${t.sizes} см</p> 
            </div>
            
            <button 
                class="button order-btn open-order-modal-btn" 
                type="button"
                data-product-id="${t._id}"      
                data-marker="details_page_order"
                >  
                Перейти до замовлення
            </button>
        </div>
    `}function ae(t){if(!e.target.matches('input[name="product-color"]'))return;t.currentTarget.querySelectorAll('input[name="product-color"]').forEach(o=>o.classList.toggle("is-active",el===t.target))}function k(){E.classList.add("is-hidden"),_.classList.remove("modal-open"),document.removeEventListener("keydown",j),N.innerHTML=""}async function ce(t){const r=t.detail.productId;try{const o=await te(r);N.innerHTML=ne(o);const s=document.querySelector(".product-modal .color-options");s&&s.addEventListener("change",ae),document.querySelector(".product-modal .open-order-modal-btn").addEventListener("click",ie),E.classList.remove("is-hidden"),_.classList.add("modal-open"),document.addEventListener("keydown",j)}catch{P("Не вдалося відобразити деталі товару.")}}function ie(t){const r=t.currentTarget.dataset.productId,o=t.currentTarget.dataset.marker,s=document.querySelector(".color-options input:checked"),n=s?s.value:null;if(!r||!n){P("Необхідно обрати колір перед замовленням.");return}k();const a=new CustomEvent("open-order-modal",{bubbles:!0,detail:{productId:r,selectedColor:n,markerValue:o}});document.body.dispatchEvent(a)}function j(t){t.key==="Escape"&&k()}E.addEventListener("click",t=>{t.target===E&&k()});oe.addEventListener("click",k);document.body.addEventListener("open-details-modal",ce);function le(t){const r=t.target.closest(".details-button");if(!r||!r.dataset.id)return;t.preventDefault();const o=r.dataset.id,s=new CustomEvent("open-details-modal",{bubbles:!0,detail:{productId:o}});document.body.dispatchEvent(s)}document.body.addEventListener("click",le);const f=document.getElementById("order-modal"),de=document.getElementById("closeModalBtn"),i=document.getElementById("callback-form");let D=null,F=null;document.body.addEventListener("open-order-modal",t=>{const{productId:r,selectedColor:o}=t.detail;D=r,F=o,f.style.display="flex",document.body.style.overflow="hidden"});function $(){f.style.display="none",document.body.style.overflow="",i.reset(),V()}de.addEventListener("click",$);f.addEventListener("click",t=>{t.target===f&&$()});document.addEventListener("keydown",t=>{t.key==="Escape"&&f.style.display==="flex"&&$()});function q(t,r){t.style.border="1px solid #6b0609";let o=t.parentNode.querySelector(".input-error-text");o||(o=document.createElement("p"),o.classList.add("input-error-text"),t.parentNode.appendChild(o)),o.textContent=r}function V(){document.querySelectorAll(".input-error-text").forEach(t=>t.remove()),i.querySelectorAll("input, textarea").forEach(t=>{t.style.border="1px solid rgba(8, 12, 9, 0.15)"})}i.addEventListener("submit",async t=>{t.preventDefault(),V();const r=i.name.value.trim();let o=i.phone.value.trim();const s=i.comment.value.trim();let n=!1;if(r||(q(i.name,"Error Text"),n=!0),(!o||!/^(\d{9}|\d{12})$/.test(o))&&(q(i.phone,"Error Text"),d.error({title:"Помилка",message:"Номер має містити лише 9 або 12 цифр.",position:"topRight",timeout:4e3}),n=!0),n)return;o.length===9&&o.startsWith("0")&&(o="38"+o);const a={name:r,phone:o,modelId:D,color:F,comment:s||"Чекатиму на зворотний зв'язок для уточнення деталей. Дякую!"};try{const c=await fetch("https://furniture-store-v2.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),S=await c.json();if(console.log("Відповідь від сервера:",S),!c.ok){d.error({title:"Помилка!",message:S.message||"Щось пішло не так. Перевірте дані.",position:"topRight"});return}d.success({title:"Успіх!",message:`Замовлення №${S.orderNum} успішно створено!`,position:"topRight"}),$()}catch(c){console.error("Помилка при запиті:",c),d.error({title:"Помилка!",message:"Не вдалося відправити замовлення. Спробуйте пізніше.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
