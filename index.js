import{a as u,i as d,A as z,S as K}from"./assets/vendor-DY_idrNt.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const a={menuButton:document.querySelector("[data-mobile-navbar-toggle]"),mobileNavbar:document.querySelector("[data-mobile-navbar]"),overlay:document.querySelector("[data-mobile-navbar-overlay]"),body:document.body};a.menuButton.addEventListener("click",W);a.overlay.addEventListener("click",S);window.addEventListener("keydown",e=>{e.key==="Escape"&&!a.mobileNavbar.classList.contains("is-hidden")&&S()});a.mobileNavbar.querySelectorAll(".navbar-nav-link").forEach(e=>{e.addEventListener("click",S)});function W(){!a.mobileNavbar.classList.contains("is-hidden")?S():Y()}function Y(){a.mobileNavbar.classList.remove("is-hidden"),a.overlay.classList.remove("is-hidden"),a.menuButton.classList.add("is-active"),a.body.classList.add("no-scroll")}function S(){a.mobileNavbar.classList.add("is-hidden"),a.overlay.classList.add("is-hidden"),a.menuButton.classList.remove("is-active"),a.body.classList.remove("no-scroll")}u.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";const m="pickedCategoryId";function v(e){d.error({message:`${e.message??String(e)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}function x(e){d.info({message:`${e}`,position:"topCenter",timeout:3e3,backgroundColor:"#009b18",messageColor:"white",close:!1})}const M=document.querySelector(".loading");function A(){M.hidden=!1}function y(){M.hidden=!0}localStorage.removeItem(m);let l=1,b=0,h=0;const w=8;async function O(){try{const{data:e}=await u("/categories");return e}catch(e){v(e)}}O();const J=document.querySelectorAll(".category-card");async function Q(e){const o=await O();[...e].forEach((t,n)=>{n!==0&&(t.dataset.id=o[n-1]._id,t.children[0].textContent=o[n-1].name)})}Q(J);const f=document.querySelector(".furniture-list"),H=document.querySelector(".category-container");H.addEventListener("click",X);async function X(e){e.preventDefault(),A();const o=e.target.closest(".category-card");if(!H.contains(o)||!o){y(),x("Оберіть, будь-ласка, категорію");return}const t=o.dataset.id??null,n=localStorage.getItem(m);if(t!==null&&t===n){v("Ви щойно переглядали цю категорію. Перегляньте, будь-ласка, інші наші товари"),y();return}const r=document.getElementById("furniture");if(r){const s=document.querySelector(".header"),i=(s==null?void 0:s.offsetHeight)||16,p=r.getBoundingClientRect().top+window.pageYOffset-i;window.scrollTo({top:p,behavior:"smooth"})}l=1,f.innerHTML="",t==null?localStorage.removeItem(m):localStorage.setItem(m,t);try{const{data:s}=await u("/furnitures",{params:{page:l,limit:w,category:t}});b=s.totalItems,h=Math.ceil(b/w),l=s.page,f.innerHTML=N(s.furnitures),L.hidden=l>=h,y()}catch(s){v(s)}}function N(e){return e.sort((o,t)=>o.price-t.price).map(o=>`
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
    `).join("")}const L=document.querySelector(".load-more-button");L.addEventListener("click",Z);async function Z(e){f.insertAdjacentElement("beforeend",M),A(),l++;const o=localStorage.getItem(m);try{const{data:t}=await u("/furnitures",{params:{page:l,limit:w,category:o}});b=t.totalItems,h=Math.ceil(b/w),l=Number(t.page),l<h?(f.insertAdjacentHTML("beforeend",N(t.furnitures)),L.hidden=!1):(x("В даній категорії закінчилися товари"),L.hidden=!0);const n=f.querySelector(".furniture-list-item");n&&window.scrollBy({left:0,top:n.getBoundingClientRect().height,behavior:"smooth"}),y()}catch(t){v(t)}}new z(".qa",{duration:300,showMultiple:!1,openOnInit:[]});const I=document.querySelectorAll(".faq-quest");I.forEach(e=>{e.addEventListener("click",()=>{const o=e.getAttribute("aria-expanded")==="true";I.forEach(t=>t.setAttribute("aria-expanded","false")),o||e.setAttribute("aria-expanded","true")})});const B=new URL("/furniweblab/assets/sprite-CA5GGzUd.svg",import.meta.url).href,P=document.querySelector(".feedbacks-list");P.innerHTML=`
  <div class="swiper">
    <div class="swiper-wrapper"></div>

    <div class="swiper-controls">
      <div class="swiper-pagination"></div>
  
      <div class="swiper-nav-btn">
        <button class="general-btn custom-prev"><svg class="" width="14" height="14">
        <use href="${B}#icon-arrow-left"></use>
        </svg></button>
        <button class="general-btn custom-next"><svg class="" width="14" height="14">
        <use href="${B}#icon-arrow-right"></use>
        </svg></button>
      </div>
    </div>

  </div>
`;const ee=document.querySelector(".swiper .swiper-wrapper");function te(e){if(e==null)return"";const o=Math.round(e*2)/2,t=Math.floor(o),n=o-t===.5;let r=`rating value-${t}`;return n&&(r+=" half"),`
        <div class="${r}">
            <div class="star-container"></div>
        </div>
    `}async function oe(){try{return(await u("https://furniture-store-v2.b.goit.study/api/feedbacks?limit=10&page=1")).data}catch(e){return console.log(e),[]}}oe().then(e=>{e.feedbacks.forEach(o=>{const t=`
      <div class="swiper-slide">
        <div class="feedback-card">
          ${te(o.rate)}
          <p class="swiper-text">“${o.descr}”</p>
          <p class="swiper-text-name">${o.name}</p>
        </div>
      </div>
    `;ee.insertAdjacentHTML("beforeend",t)}),new K(".swiper",{loop:!1,slidesPerView:1,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},navigation:{prevEl:".custom-prev",nextEl:".custom-next"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}).catch(e=>{console.error("Помилка при ініціалізації слайдера відгуків:",e),P.innerHTML=`<p style="color: red;">
      Неможливо завантажити відгуки. Будь ласка, спробуйте оновити сторінку.
    </p>`});function R(){if(document.querySelector("#page-spinner"))return;const e=document.createElement("div");e.id="page-spinner",e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.innerHTML=`
      <div class="spinner" aria-label="Завантаження…">
        <button class="loadingBtn" type="button">
            <span class="loader" id="btnSpinner"></span>
        </button>
      </div>
    `,document.body.appendChild(e),document.body.classList.add("no-scroll")}function k(){const e=document.getElementById("page-spinner");e&&(e.remove(),document.body.classList.remove("no-scroll"))}u.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";function F(e){d.error({message:e,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}async function re(e){try{return(await u.get(`/furnitures/${e}`)).data}catch(o){throw console.error(`Помилка при отриманні деталей продукту з ID ${e}:`,o),o}}const E=document.querySelector(".product-modal-backdrop"),j=document.querySelector(".product-modal .modal-main-content"),ne=document.querySelector(".modal-close-btn"),D=document.body;function se(e){if(e==null)return"";const o=Math.round(e*2)/2,t=Math.floor(o),n=o-t===.5;let r=`rating value-${t}`;return n&&(r+=" half"),`
        <div class="${r}">
            <div class="star-container"></div>
        </div>
    `}function ae(e){return`<div class="color-options-container">
            <p class="color-label">Колір</p>
            <form class="color-options">${e.map((t,n)=>{const r=`color-${t.substring(1)}`;return`
            <label class="color-option">
                <input
                  type="radio"
                  name="product-color"
                  value="${t}" 
                  id="${r}"                    
                  class="custom-radio-style ${n===0?"is-active":""}" 
                  style="
                    -webkit-appearance:none;
                    appearance:none;
                    width: 32px;
                    height: 32px;
                    background-color: ${t}; 
                    cursor:pointer; 
                    display:inline-block;"
                  data-color-hex=${t}; 
                  ${n===0?"checked":""}                      
                  />
                           
            </label>
        `}).join("")}</form>
          </div>`}function ie(e){const o=e.price.toLocaleString()+" грн";return`
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
    `}function ce(e){if(!e.target.matches('input[name="product-color"]'))return;e.currentTarget.querySelectorAll('input[name="product-color"]').forEach(t=>t.classList.toggle("is-active",t===e.target))}async function le(e){const o=e.detail.productId;try{const t=await re(o);j.innerHTML=ie(t);const n=document.querySelector(".product-modal .color-options");n&&n.addEventListener("change",ce),document.querySelector(".product-modal .open-order-modal-btn").addEventListener("click",de),E.classList.remove("is-hidden"),D.classList.add("modal-open"),document.addEventListener("keydown",V),document.body.dispatchEvent(new CustomEvent("details-modal-opened",{bubbles:!0}))}catch{F("Не вдалося відобразити деталі товару.")}finally{k()}}function $(){E.classList.add("is-hidden"),D.classList.remove("modal-open"),document.removeEventListener("keydown",V),j.innerHTML="",document.body.dispatchEvent(new CustomEvent("details-modal-closed",{bubbles:!0}))}function de(e){const o=e.currentTarget.dataset.productId,t=e.currentTarget.dataset.marker,n=document.querySelector(".color-options input:checked"),r=n?n.value:null;if(!o||!r){F("Необхідно обрати колір перед замовленням.");return}$();const s=new CustomEvent("open-order-modal",{bubbles:!0,detail:{productId:o,selectedColor:r,markerValue:t}});document.body.dispatchEvent(s)}function V(e){e.key==="Escape"&&$()}E.addEventListener("click",e=>{e.target===E&&$()});ne.addEventListener("click",$);document.body.addEventListener("open-details-modal",le);document.body.addEventListener("details-modal-opened",k);document.body.addEventListener("details-modal-closed",k);function ue(e){const o=e.target.closest(".details-button");if(!o||!o.dataset.id)return;e.preventDefault(),R();const t=o.dataset.id,n=new CustomEvent("open-details-modal",{bubbles:!0,detail:{productId:t}});document.body.dispatchEvent(n)}document.body.addEventListener("click",ue);const C=document.querySelector("#order-modal .loading"),g=document.getElementById("order-modal"),pe=document.getElementById("closeModalBtn"),c=document.getElementById("callback-form");let _=null,U=null;function me(){C&&(C.style.display="flex")}function fe(){C&&(C.style.display="none")}document.body.addEventListener("open-order-modal",e=>{const{productId:o,selectedColor:t}=e.detail;_=o,U=t,R(),g.style.display="flex",document.body.style.overflow="hidden",setTimeout(()=>{k(),document.body.style.overflow="hidden"},200)});function q(){g.style.display="none",document.body.style.overflow="",c.reset(),G()}pe.addEventListener("click",q);g.addEventListener("click",e=>{e.target===g&&q()});document.addEventListener("keydown",e=>{e.key==="Escape"&&g.style.display==="flex"&&q()});function T(e,o){e.style.border="1px solid #6b0609";let t=e.parentNode.querySelector(".input-error-text");t||(t=document.createElement("p"),t.classList.add("input-error-text"),e.parentNode.appendChild(t)),t.textContent=o}function G(){document.querySelectorAll(".input-error-text").forEach(e=>e.remove()),c.querySelectorAll("input, textarea").forEach(e=>{e.style.border="1px solid rgba(8, 12, 9, 0.15)"})}c.addEventListener("submit",async e=>{e.preventDefault(),G();const o=c.name.value.trim();let t=c.phone.value.trim();const n=c.comment.value.trim();let r=!1;if(o||(T(c.name,"Error Text"),r=!0),(!t||!/^(\d{10}|\d{12})$/.test(t))&&(T(c.phone,"Error Text"),d.error({title:"Помилка",message:"Номер має містити лише 10 або 12 цифр.",position:"topRight",timeout:4e3,color:"#EF4040",messageColor:"white"}),r=!0),r)return;t.length===10&&t.startsWith("0")&&(t="38"+t);const s={name:o,phone:t,modelId:_,color:U,comment:n||"Чекатиму на зворотний зв'язок для уточнення деталей. Дякую!"};try{me();const i=await fetch("https://furniture-store-v2.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),p=await i.json();if(console.log("Відповідь від сервера:",p),!i.ok){d.error({title:"Помилка!",message:p.message||"Щось пішло не так. Перевірте дані.",position:"topRight",color:"#EF4040",messageColor:"white"});return}d.success({title:"Успіх!",message:`Замовлення №${p.orderNum} успішно створено!`,position:"topRight",color:"#009b18",messageColor:"white"}),q()}catch(i){console.error("Помилка при запиті:",i),d.error({title:"Помилка!",message:"Не вдалося відправити замовлення. Спробуйте пізніше.",position:"topRight",color:"#EF4040",messageColor:"white"})}finally{fe()}});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".js-scroll").forEach(o=>{const t=o.getAttribute("href");t&&t.startsWith("#")&&o.addEventListener("click",n=>{n.preventDefault();const r=t,s=document.querySelector(r);s&&s.scrollIntoView({behavior:"smooth",block:"start"}),o.blur()})})});
//# sourceMappingURL=index.js.map
