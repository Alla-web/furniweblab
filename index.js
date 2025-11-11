import{a as d,i as l,A as z,S as K}from"./assets/vendor-DY_idrNt.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const v=document.getElementById("burger"),q=document.getElementById("nav"),y=document.getElementById("overlay");v.addEventListener("click",()=>{const e=q.classList.toggle("active");y.classList.toggle("active"),v.classList.toggle("active",e)});y.addEventListener("click",()=>{q.classList.remove("active"),y.classList.remove("active"),v.classList.remove("active")});document.querySelectorAll(".nav__link, .nav__btn").forEach(e=>{e.addEventListener("click",()=>{q.classList.remove("active"),y.classList.remove("active"),v.classList.remove("active")})});d.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";const p="pickedCategoryId";function h(e){l.error({message:`${e.message??String(e)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}function J(e){l.info({message:`${e}`,position:"topCenter",timeout:3e3,backgroundColor:"#009b18",messageColor:"white",close:!1})}const x=document.querySelector(".loading");function A(){x.hidden=!1}function M(){x.hidden=!0}localStorage.removeItem(p);let i=1,b=0,L=0;const E=8;async function O(){try{const{data:e}=await d("/categories");return e}catch(e){h(e)}}O();const W=document.querySelectorAll(".category-card");async function Y(e){const o=await O();[...e].forEach((t,r)=>{r!==0&&(t.dataset.id=o[r-1]._id,t.children[0].textContent=o[r-1].name)})}Y(W);const m=document.querySelector(".furniture-list"),H=document.querySelector(".category-container");H.addEventListener("click",Q);async function Q(e){e.preventDefault();const o=document.getElementById("furniture");if(o){const s=document.querySelector(".header"),a=((s==null?void 0:s.offsetHeight)||0)+16,u=o.getBoundingClientRect().top+window.pageYOffset-a;window.scrollTo({top:u,behavior:"smooth"})}A();const t=e.target.closest(".category-card"),r=t.dataset.id,n=localStorage.getItem(p);if(r===n){h("Ви вже переглядали цю категорію. Оберіть іншу категорію"),M();return}if(!(!H.contains(t)||!t)){i=1,m.innerHTML="",r==null?localStorage.removeItem(p):localStorage.setItem(p,r);try{const{data:s}=await d("/furnitures",{params:{page:i,limit:E,category:r}});b=s.totalItems,L=Math.ceil(b/E),i=s.page,m.innerHTML=P(s.furnitures),w.hidden=i>=L,M()}catch(s){h(s)}}}function P(e){return e.sort((o,t)=>o.price-t.price).map(o=>`
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
    `).join("")}const w=document.querySelector(".load-more-button");w.addEventListener("click",X);async function X(e){m.insertAdjacentElement("beforeend",x),A(),i++;const o=JSON.parse(localStorage.getItem(p));try{const{data:t}=await d("/furnitures",{params:{page:i,limit:E,category:o}});b=t.totalItems,L=Math.ceil(b/E),i=Number(t.page),i<L?(m.insertAdjacentHTML("beforeend",P(t.furnitures)),w.hidden=!1):(J("В даній категорії закінчилися товари"),w.hidden=!0);const r=m.querySelector(".furniture-list-item");r&&window.scrollBy({left:0,top:r.getBoundingClientRect().height,behavior:"smooth"}),M()}catch(t){h(t)}}new z(".qa",{duration:300,showMultiple:!1,openOnInit:[]});const B=document.querySelectorAll(".faq-quest");B.forEach(e=>{e.addEventListener("click",()=>{const o=e.getAttribute("aria-expanded")==="true";B.forEach(t=>t.setAttribute("aria-expanded","false")),o||e.setAttribute("aria-expanded","true")})});const f=new URL("/furniweblab/assets/sprite-CA5GGzUd.svg",import.meta.url).href,R=document.querySelector(".feedbacks-list");R.innerHTML=`
  <div class="swiper">
    <div class="swiper-wrapper"></div>

    <div class="swiper-controls">
      <div class="swiper-pagination"></div>
  
      <div class="swiper-nav-btn">
        <button class="general-btn custom-prev"><svg class="" width="14" height="14">
        <use href="${f}#icon-arrow-left"></use>
        </svg></button>
        <button class="general-btn custom-next"><svg class="" width="14" height="14">
        <use href="${f}#icon-arrow-right"></use>
        </svg></button>
      </div>
    </div>

  </div>
`;const Z=document.querySelector(".swiper .swiper-wrapper");function ee(e){return e>=3.3&&e<=3.7?3.5:e>=3.8&&e<=4.2?4:Math.round(e*10)/10}function te(e){const o=Math.floor(e),t=e%1>=.5?1:0,r=5-o-t;let n="";for(let s=0;s<o;s++)n+=`<svg class="star" viewBox="0 0 32 32"><use xlink:href="${f}#icon-star-full"></use></svg>`;t&&(n+=`<svg class="star" viewBox="0 0 32 32"><use xlink:href="${f}#icon-star-half"></use></svg>`);for(let s=0;s<r;s++)n+=`<svg class="star" viewBox="0 0 32 32"><use xlink:href="${f}#icon-star-empty"></use></svg>`;return n}async function oe(){try{return(await d("https://furniture-store-v2.b.goit.study/api/feedbacks?limit=10&page=1")).data}catch(e){return console.log(e),[]}}oe().then(e=>{e.feedbacks.forEach(o=>{const t=ee(o.rate),r=`
      <div class="swiper-slide">
        <div class="feedback-card">
          <div class="stars">${te(t)}</div>
          <p class="swiper-text">“${o.descr}”</p>
          <p class="swiper-text-name">${o.name}</p>
        </div>
      </div>
    `;Z.insertAdjacentHTML("beforeend",r)}),new K(".swiper",{loop:!1,slidesPerView:1,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},navigation:{prevEl:".custom-prev",nextEl:".custom-next"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}).catch(e=>{console.error("Ошибка при инициализации слайдера отзывов:",e),R.innerHTML=`<p style="color: red;">
      Не удалось загрузить отзывы. Пожалуйста, попробуйте обновить страницу.
    </p>`});function F(){if(document.querySelector("#page-spinner"))return;const e=document.createElement("div");e.id="page-spinner",e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.innerHTML=`
      <div class="spinner" aria-label="Завантаження…">
        <button class="loadingBtn" type="button">
            <span class="loader" id="btnSpinner"></span>
        </button>
      </div>
    `,document.body.appendChild(e),document.body.classList.add("no-scroll")}function C(){const e=document.getElementById("page-spinner");e&&(e.remove(),document.body.classList.remove("no-scroll"))}d.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";function j(e){l.error({message:e,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}async function re(e){try{return(await d.get(`/furnitures/${e}`)).data}catch(o){throw console.error(`Помилка при отриманні деталей продукту з ID ${e}:`,o),o}}const k=document.querySelector(".product-modal-backdrop"),D=document.querySelector(".product-modal .modal-main-content"),ne=document.querySelector(".modal-close-btn"),_=document.body;function se(e){if(e==null)return"";const o=Math.round(e*2)/2,t=Math.floor(o),r=o-t===.5;let n=`rating value-${t}`;return r&&(n+=" half"),`
        <div class="${n}">
            <div class="star-container"></div>
        </div>
    `}function ae(e){return`<div class="color-options-container">
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
          </div>`}function ce(e){const o=e.price.toLocaleString()+" грн";return`
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
            <div class="stars-container">${se(e.rate)} 
                  ${ae(e.color)} 
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
    `}function ie(e){if(!e.target.matches('input[name="product-color"]'))return;e.currentTarget.querySelectorAll('input[name="product-color"]').forEach(t=>t.classList.toggle("is-active",t===e.target))}async function le(e){const o=e.detail.productId;try{const t=await re(o);D.innerHTML=ce(t);const r=document.querySelector(".product-modal .color-options");r&&r.addEventListener("change",ie),document.querySelector(".product-modal .open-order-modal-btn").addEventListener("click",de),k.classList.remove("is-hidden"),_.classList.add("modal-open"),document.addEventListener("keydown",N),document.body.dispatchEvent(new CustomEvent("details-modal-opened",{bubbles:!0}))}catch{j("Не вдалося відобразити деталі товару.")}finally{C()}}function $(){k.classList.add("is-hidden"),_.classList.remove("modal-open"),document.removeEventListener("keydown",N),D.innerHTML="",document.body.dispatchEvent(new CustomEvent("details-modal-closed",{bubbles:!0}))}function de(e){const o=e.currentTarget.dataset.productId,t=e.currentTarget.dataset.marker,r=document.querySelector(".color-options input:checked"),n=r?r.value:null;if(!o||!n){j("Необхідно обрати колір перед замовленням.");return}$();const s=new CustomEvent("open-order-modal",{bubbles:!0,detail:{productId:o,selectedColor:n,markerValue:t}});document.body.dispatchEvent(s)}function N(e){e.key==="Escape"&&$()}k.addEventListener("click",e=>{e.target===k&&$()});ne.addEventListener("click",$);document.body.addEventListener("open-details-modal",le);document.body.addEventListener("details-modal-opened",C);document.body.addEventListener("details-modal-closed",C);function ue(e){const o=e.target.closest(".details-button");if(!o||!o.dataset.id)return;e.preventDefault(),F();const t=o.dataset.id,r=new CustomEvent("open-details-modal",{bubbles:!0,detail:{productId:t}});document.body.dispatchEvent(r)}document.body.addEventListener("click",ue);const S=document.querySelector("#order-modal .loading"),g=document.getElementById("order-modal"),pe=document.getElementById("closeModalBtn"),c=document.getElementById("callback-form");let V=null,U=null;function me(){S&&(S.style.display="flex")}function fe(){S&&(S.style.display="none")}document.body.addEventListener("open-order-modal",e=>{const{productId:o,selectedColor:t}=e.detail;V=o,U=t,F(),g.style.display="flex",document.body.style.overflow="hidden",setTimeout(()=>{C(),document.body.style.overflow="hidden"},200)});function I(){g.style.display="none",document.body.style.overflow="",c.reset(),G()}pe.addEventListener("click",I);g.addEventListener("click",e=>{e.target===g&&I()});document.addEventListener("keydown",e=>{e.key==="Escape"&&g.style.display==="flex"&&I()});function T(e,o){e.style.border="1px solid #6b0609";let t=e.parentNode.querySelector(".input-error-text");t||(t=document.createElement("p"),t.classList.add("input-error-text"),e.parentNode.appendChild(t)),t.textContent=o}function G(){document.querySelectorAll(".input-error-text").forEach(e=>e.remove()),c.querySelectorAll("input, textarea").forEach(e=>{e.style.border="1px solid rgba(8, 12, 9, 0.15)"})}c.addEventListener("submit",async e=>{e.preventDefault(),G();const o=c.name.value.trim();let t=c.phone.value.trim();const r=c.comment.value.trim();let n=!1;if(o||(T(c.name,"Error Text"),n=!0),(!t||!/^(\d{10}|\d{12})$/.test(t))&&(T(c.phone,"Error Text"),l.error({title:"Помилка",message:"Номер має містити лише 10 або 12 цифр.",position:"topRight",timeout:4e3,color:"#EF4040"}),n=!0),n)return;t.length===10&&t.startsWith("0")&&(t="38"+t);const s={name:o,phone:t,modelId:V,color:U,comment:r||"Чекатиму на зворотний зв'язок для уточнення деталей. Дякую!"};try{me();const a=await fetch("https://furniture-store-v2.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),u=await a.json();if(console.log("Відповідь від сервера:",u),!a.ok){l.error({title:"Помилка!",message:u.message||"Щось пішло не так. Перевірте дані.",position:"topRight",color:"#EF4040"});return}l.success({title:"Успіх!",message:`Замовлення №${u.orderNum} успішно створено!`,position:"topRight",color:"#009b18"}),I()}catch(a){console.error("Помилка при запиті:",a),l.error({title:"Помилка!",message:"Не вдалося відправити замовлення. Спробуйте пізніше.",position:"topRight",color:"#EF4040"})}finally{fe()}});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".js-scroll").forEach(o=>{const t=o.getAttribute("href");t&&t.startsWith("#")&&o.addEventListener("click",r=>{r.preventDefault();const n=t,s=document.querySelector(n);s&&s.scrollIntoView({behavior:"smooth",block:"start"}),o.blur()})})});
//# sourceMappingURL=index.js.map
