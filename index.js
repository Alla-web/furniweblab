import{a as d,i as l,A as J,S as K}from"./assets/vendor-DY_idrNt.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const f=document.getElementById("burger"),C=document.getElementById("nav"),g=document.getElementById("overlay");f.addEventListener("click",()=>{const e=C.classList.toggle("active");g.classList.toggle("active"),f.classList.toggle("active",e)});g.addEventListener("click",()=>{C.classList.remove("active"),g.classList.remove("active"),f.classList.remove("active")});document.querySelectorAll(".nav__link, .nav__btn").forEach(e=>{e.addEventListener("click",()=>{C.classList.remove("active"),g.classList.remove("active"),f.classList.remove("active")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".btn.btn-link"),o="feedbacks";e.addEventListener("click",t=>{t.preventDefault();const r=document.getElementById(o);r&&r.scrollIntoView({behavior:"smooth",block:"start"})})});d.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";const v="pickedCategoryId";function I(e){l.error({message:`${e.message??String(e)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}function W(e){l.info({message:`${e}`,position:"topCenter",timeout:3e3,backgroundColor:"#009b18",messageColor:"white",close:!1})}const M=document.querySelector(".loading");function T(){M.hidden=!1}function A(){M.hidden=!0}localStorage.removeItem(v);let i=1,y=0,h=0;const b=8;async function O(){try{const{data:e}=await d("/categories");return e}catch(e){I(e)}}O();const Y=document.querySelectorAll(".category-card");async function Q(e){const o=await O();[...e].forEach((t,r)=>{r!==0&&(t.dataset.id=o[r-1]._id,t.children[0].textContent=o[r-1].name)})}Q(Y);const u=document.querySelector(".furniture-list"),P=document.querySelector(".category-container");P.addEventListener("click",X);async function X(e){T();const o=e.target.closest(".category-card");if(!P.contains(o)||!o)return;i=1,u.innerHTML="";const t=o.dataset.id;t==null?localStorage.removeItem(v):localStorage.setItem(v,JSON.stringify(t));try{const{data:r}=await d("/furnitures",{params:{page:i,limit:b,category:t}});y=r.totalItems,h=Math.ceil(y/b),i=r.page,u.innerHTML=H(r.furnitures),E.hidden=i>=h,A()}catch(r){I(r)}}function H(e){return e.sort((o,t)=>o.price-t.price).map(o=>`
        <li class="furniture-list-item">
            <img class="card-image" src="${o.images[0]}" alt="${o.name}"/>
            <h3 class="card-title">${o.name}</h3>
            <ul class="card-color-container">
                ${(o.color||[]).map(t=>`
                    <li
                    class="card-color-item"
                    style="background-color: ${t};">1
                    </li>
                    `).join("")}               
            </ul>
            <p class="card-price">${o.price.toLocaleString()} грн</p>
            <button 
                class="details-button button" 
                data-id="${o._id}">Детальніше</button>
        </li>
    `).join("")}const E=document.querySelector(".load-more-button");E.addEventListener("click",Z);async function Z(e){u.insertAdjacentElement("beforeend",M),T(),i++;const o=JSON.parse(localStorage.getItem(v));try{const{data:t}=await d("/furnitures",{params:{page:i,limit:b,category:o}});y=t.totalItems,h=Math.ceil(y/b),i=Number(t.page),i<h?(u.insertAdjacentHTML("beforeend",H(t.furnitures)),E.hidden=!1):(W("В даній категорії закінчилися товари"),E.hidden=!0);const r=u.querySelector(".furniture-list-item");r&&window.scrollBy({left:0,top:r.getBoundingClientRect().height,behavior:"smooth"}),A()}catch(t){I(t)}}new J(".qa",{duration:300,showMultiple:!1,openOnInit:[]});const x=document.querySelectorAll(".faq-quest");x.forEach(e=>{e.addEventListener("click",()=>{const o=e.getAttribute("aria-expanded")==="true";x.forEach(t=>t.setAttribute("aria-expanded","false")),o||e.setAttribute("aria-expanded","true")})});const p=new URL("/furniweblab/assets/sprite-CA5GGzUd.svg",import.meta.url).href,R=document.querySelector(".feedbacks-list");R.innerHTML=`
  <div class="swiper">
    <div class="swiper-wrapper"></div>

    <div class="swiper-controls">
      <div class="swiper-pagination"></div>
  
      <div class="swiper-nav-btn">
        <button class="general-btn custom-prev"><svg class="" width="14" height="14">
        <use href="${p}#icon-arrow-left"></use>
        </svg></button>
        <button class="general-btn custom-next"><svg class="" width="14" height="14">
        <use href="${p}#icon-arrow-right"></use>
        </svg></button>
      </div>
    </div>

  </div>
`;const ee=document.querySelector(".swiper .swiper-wrapper");function te(e){return e>=3.3&&e<=3.7?3.5:e>=3.8&&e<=4.2?4:Math.round(e*10)/10}function oe(e){const o=Math.floor(e),t=e%1>=.5?1:0,r=5-o-t;let n="";for(let s=0;s<o;s++)n+=`<svg class="star" viewBox="0 0 32 32"><use xlink:href="${p}#icon-star-full"></use></svg>`;t&&(n+=`<svg class="star" viewBox="0 0 32 32"><use xlink:href="${p}#icon-star-half"></use></svg>`);for(let s=0;s<r;s++)n+=`<svg class="star" viewBox="0 0 32 32"><use xlink:href="${p}#icon-star-empty"></use></svg>`;return n}async function re(){try{return(await d("https://furniture-store-v2.b.goit.study/api/feedbacks?limit=10&page=1")).data}catch(e){return console.log(e),[]}}re().then(e=>{e.feedbacks.forEach(o=>{const t=te(o.rate),r=`
      <div class="swiper-slide">
        <div class="feedback-card">
          <div class="stars">${oe(t)}</div>
          <p class="swiper-text">“${o.descr}”</p>
          <p class="swiper-text-name">${o.name}</p>
        </div>
      </div>
    `;ee.insertAdjacentHTML("beforeend",r)}),new K(".swiper",{loop:!1,slidesPerView:1,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},navigation:{prevEl:".custom-prev",nextEl:".custom-next"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}).catch(e=>{console.error("Ошибка при инициализации слайдера отзывов:",e),R.innerHTML=`<p style="color: red;">
      Не удалось загрузить отзывы. Пожалуйста, попробуйте обновить страницу.
    </p>`});function ne(){if(document.querySelector("#page-spinner"))return;const e=document.createElement("div");e.id="page-spinner",e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.innerHTML=`
      <div class="spinner" aria-label="Завантаження…">
        <button class="loadingBtn" type="button">
            <span class="loader" id="btnSpinner"></span>
        </button>
      </div>
    `,document.body.appendChild(e),document.body.classList.add("no-scroll")}function q(){const e=document.getElementById("page-spinner");e&&(e.remove(),document.body.classList.remove("no-scroll"))}d.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";function F(e){l.error({message:e,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}async function se(e){try{return(await d.get(`/furnitures/${e}`)).data}catch(o){throw console.error(`Помилка при отриманні деталей продукту з ID ${e}:`,o),o}}const L=document.querySelector(".product-modal-backdrop"),N=document.querySelector(".product-modal .modal-main-content"),ae=document.querySelector(".modal-close-btn"),_=document.body;function ce(e){if(e==null)return"";const o=Math.round(e*2)/2,t=Math.floor(o),r=o-t===.5;let n=`rating value-${t}`;return r&&(n+=" half"),`
        <div class="${n}">
            <div class="star-container"></div>
        </div>
    `}function ie(e){return`<div class="color-options-container">
            <p class="color-label">Колір</p>
            <form class="color-options">${e.map((t,r)=>{const n=`color-${t.substring(1)}`;return`
            <label class="color-option">
                <input
                  type="radio"
                  name="product-color"
                  value="${t}" 
                  id="${n}"                    
                  class="custom-radio-style ${r===0?"is-active":""}" 
                  style="
                    -webkit-appearance:none;
                    appearance:none;
                    width: 32px;
                    height: 32px;
                    background-color: ${t}; 
                    cursor:pointer; 
                    display:inline-block;"
                  data-color-hex=${t}; 
                  ${r===0?"checked":""}                      
                  />
                           
            </label>
        `}).join("")}</form>
          </div>`}function le(e){const o=e.price.toLocaleString()+" грн";return`
        <div class="product-gallery">
            <img
              src="${e.images[0]}" alt="${e.name} (Основне)" 
              class="main-product-image" 
            />
            <div class="gallery-thumbnails">
                 ${e.images.slice(1).map(t=>`<img src="${t}" alt="${e.name} (Мініатюра)" class="gallery-thumbnail">`).join("")}
            </div>
        </div>
        
        <div class="product-info">
            <h2 class="model-name">${e.name}</h2> 
            <p class="category-name">${e.category.name}</p> 
            <p class="product-price">
              <span class="price-value">${o}</span>
              <span class="price-currency"></span>
            </p>
            <div class="stars-container">${ce(e.rate)} 
                  ${ie(e.color)} 
            </div>            
            <div class="product-details">
                <p class="description-text">${e.description}</p> 
                <p class="dimensions-text">Розміри: ${e.sizes} см</p> 
            </div>
            
            <button 
                class="button order-btn open-order-modal-btn" 
                type="button"
                data-product-id="${e._id}"      
                data-marker="details_page_order"
                >  
                Перейти до замовлення
            </button>
        </div>
    `}function de(e){if(!e.target.matches('input[name="product-color"]'))return;e.currentTarget.querySelectorAll('input[name="product-color"]').forEach(t=>t.classList.toggle("is-active",t===e.target))}async function ue(e){const o=e.detail.productId;try{const t=await se(o);N.innerHTML=le(t);const r=document.querySelector(".product-modal .color-options");r&&r.addEventListener("change",de),document.querySelector(".product-modal .open-order-modal-btn").addEventListener("click",pe),L.classList.remove("is-hidden"),_.classList.add("modal-open"),document.addEventListener("keydown",j),document.body.dispatchEvent(new CustomEvent("details-modal-opened",{bubbles:!0}))}catch{F("Не вдалося відобразити деталі товару.")}finally{q()}}function k(){L.classList.add("is-hidden"),_.classList.remove("modal-open"),document.removeEventListener("keydown",j),N.innerHTML="",document.body.dispatchEvent(new CustomEvent("details-modal-closed",{bubbles:!0}))}function pe(e){const o=e.currentTarget.dataset.productId,t=e.currentTarget.dataset.marker,r=document.querySelector(".color-options input:checked"),n=r?r.value:null;if(!o||!n){F("Необхідно обрати колір перед замовленням.");return}k();const s=new CustomEvent("open-order-modal",{bubbles:!0,detail:{productId:o,selectedColor:n,markerValue:t}});document.body.dispatchEvent(s)}function j(e){e.key==="Escape"&&k()}L.addEventListener("click",e=>{e.target===L&&k()});ae.addEventListener("click",k);document.body.addEventListener("open-details-modal",ue);document.body.addEventListener("details-modal-opened",q);document.body.addEventListener("details-modal-closed",q);function me(e){const o=e.target.closest(".details-button");if(!o||!o.dataset.id)return;e.preventDefault(),ne();const t=o.dataset.id,r=new CustomEvent("open-details-modal",{bubbles:!0,detail:{productId:t}});document.body.dispatchEvent(r)}document.body.addEventListener("click",me);const w=document.querySelector(".loading"),m=document.getElementById("order-modal"),fe=document.getElementById("closeModalBtn"),c=document.getElementById("callback-form");let D=null,V=null;function U(){w&&(w.hidden=!1)}function G(){w&&(w.hidden=!0)}document.body.addEventListener("open-order-modal",e=>{const{productId:o,selectedColor:t}=e.detail;D=o,V=t,U(),m.style.display="flex",document.body.style.overflow="hidden",G()});function S(){m.style.display="none",document.body.style.overflow="",c.reset(),z()}fe.addEventListener("click",S);m.addEventListener("click",e=>{e.target===m&&S()});document.addEventListener("keydown",e=>{e.key==="Escape"&&m.style.display==="flex"&&S()});function B(e,o){e.style.border="1px solid #6b0609";let t=e.parentNode.querySelector(".input-error-text");t||(t=document.createElement("p"),t.classList.add("input-error-text"),e.parentNode.appendChild(t)),t.textContent=o}function z(){document.querySelectorAll(".input-error-text").forEach(e=>e.remove()),c.querySelectorAll("input, textarea").forEach(e=>{e.style.border="1px solid rgba(8, 12, 9, 0.15)"})}c.addEventListener("submit",async e=>{e.preventDefault(),z();const o=c.name.value.trim();let t=c.phone.value.trim();const r=c.comment.value.trim();let n=!1;if(o||(B(c.name,"Error Text"),n=!0),(!t||!/^(\d{10}|\d{12})$/.test(t))&&(B(c.phone,"Error Text"),l.error({title:"Помилка",message:"Номер має містити лише 10 або 12 цифр.",position:"topRight",timeout:4e3,color:"#EF4040"}),n=!0),n)return;t.length===10&&t.startsWith("0")&&(t="38"+t);const s={name:o,phone:t,modelId:D,color:V,comment:r||"Чекатиму на зворотний зв'язок для уточнення деталей. Дякую!"};try{U();const a=await fetch("https://furniture-store-v2.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),$=await a.json();if(console.log("Відповідь від сервера:",$),!a.ok){l.error({title:"Помилка!",message:$.message||"Щось пішло не так. Перевірте дані.",position:"topRight",color:"#EF4040"});return}l.success({title:"Успіх!",message:`Замовлення №${$.orderNum} успішно створено!`,position:"topRight",color:"#009b18"}),S()}catch(a){console.error("Помилка при запиті:",a),l.error({title:"Помилка!",message:"Не вдалося відправити замовлення. Спробуйте пізніше.",position:"topRight",color:"#EF4040"})}finally{G()}});
//# sourceMappingURL=index.js.map
