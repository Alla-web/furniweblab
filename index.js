import{a as l,i as u,A as V,S as z}from"./assets/vendor-DY_idrNt.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const m=document.getElementById("burger"),S=document.getElementById("nav"),g=document.getElementById("overlay");m.addEventListener("click",()=>{const e=S.classList.toggle("active");g.classList.toggle("active"),m.classList.toggle("active",e)});g.addEventListener("click",()=>{S.classList.remove("active"),g.classList.remove("active"),m.classList.remove("active")});document.querySelectorAll(".nav__link, .nav__btn").forEach(e=>{e.addEventListener("click",()=>{S.classList.remove("active"),g.classList.remove("active"),m.classList.remove("active")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".btn.btn-link"),t="#feedbacks";e.addEventListener("click",o=>{o.preventDefault();const r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth",block:"start"})})});l.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";const f="pickedCategoryId";function C(e){u.error({message:`${e.message??String(e)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}function I(e){u.info({message:`${e}`,position:"topCenter",timeout:3e3,backgroundColor:"#009b18",messageColor:"white",close:!1})}const $=document.querySelector(".loading");function M(){$.hidden=!1}function B(){$.hidden=!0}localStorage.removeItem(f);let i=1,v=0,y=0;const h=8;async function T(){try{const{data:e}=await l("/categories");return e}catch(e){C(e)}}T();const J=document.querySelectorAll(".category-card");async function K(e){const t=await T();[...e].forEach((o,r)=>{r!==0&&(o.dataset.id=t[r-1]._id,o.children[0].textContent=t[r-1].name)})}K(J);const d=document.querySelector(".futniture-list"),A=document.querySelector(".category-container");A.addEventListener("click",G);async function G(e){M();const t=e.target.closest(".category-card");if(!A.contains(t)||!t)return;i=1,d.innerHTML="";const o=t.dataset.id;o==null?localStorage.removeItem(f):localStorage.setItem(f,JSON.stringify(o));try{const{data:r}=await l("/furnitures",{params:{page:i,limit:h,category:o}});v=r.totalItems,y=Math.ceil(v/h),i=r.page,d.innerHTML=O(r.furnitures),b.hidden=i>=y,B()}catch(r){C(r)}}function O(e){return e.sort((t,o)=>t.price-o.price).map(t=>`
        <li class="furniture-list-item">
            <img class="card-image" src="${t.images[0]}" alt="${t.name}"/>
            <h3 class="card-title">${t.name}</h3>
            <ul class="card-color-container">
                ${(t.color||[]).map(o=>`
                    <li
                    class="card-color-item"
                    style="background-color: ${o};">1
                    </li>
                    `).join("")}               
            </ul>
            <p class="card-price">${t.price.toLocaleString()} грн</p>
            <button 
                class="details-button button" 
                data-id="${t._id}">Детальніше</button>
        </li>
    `).join("")}const b=document.querySelector(".load-more-button");b.addEventListener("click",U);async function U(e){if(d.insertAdjacentElement("beforeend",$),M(),!d.children.length){I("Please, pick the furnirure category before");return}i++;const t=JSON.parse(localStorage.getItem(f));try{const{data:o}=await l("/furnitures",{params:{page:i,limit:h,category:t}});v=o.totalItems,y=Math.ceil(v/h),i=Number(o.page),i<y?(d.insertAdjacentHTML("beforeend",O(o.furnitures)),b.hidden=!1):(I("This categoty has not more furniture"),b.hidden=!0);const r=d.querySelector(".furniture-list-item");r&&window.scrollBy({left:0,top:r.getBoundingClientRect().height,behavior:"smooth"}),B()}catch(o){C(o)}}new V(".qa",{duration:300,showMultiple:!1,openOnInit:[]});const x=document.querySelectorAll(".faq-quest");x.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("aria-expanded")==="true";x.forEach(o=>o.setAttribute("aria-expanded","false")),t||e.setAttribute("aria-expanded","true")})});const P=document.querySelector(".feedbacks-list");P.innerHTML=`
  <div class="swiper">
    <div class="swiper-wrapper"></div>

    <div class="swiper-controls">
      <div class="swiper-pagination"></div>
  
      <div class="swiper-nav-btn">
        <button class="general-btn custom-prev"><svg class="" width="14" height="14">
        <use href="./img/sprite.svg#icon-arrow-left"></use>
        </svg></button>
        <button class="general-btn custom-next"><svg class="" width="14" height="14">
        <use href="./img/sprite.svg#icon-arrow-right"></use>
        </svg></button>
      </div>
    </div>

  </div>
`;const W=document.querySelector(".swiper .swiper-wrapper");function Y(e){return e>=3.3&&e<=3.7?3.5:e>=3.8&&e<=4.2?4:Math.round(e*10)/10}function Q(e){const t=Math.floor(e),o=e%1>=.5?1:0,r=5-t-o;let s="";for(let n=0;n<t;n++)s+='<svg class="star" viewBox="0 0 32 32"><use xlink:href="../img/sprite.svg#icon-star-full"></use></svg>';o&&(s+='<svg class="star" viewBox="0 0 32 32"><use xlink:href="../img/sprite.svg#icon-star-half"></use></svg>');for(let n=0;n<r;n++)s+='<svg class="star" viewBox="0 0 32 32"><use xlink:href="../img/sprite.svg#icon-star-empty"></use></svg>';return s}async function X(){try{const e=await l("https://furniture-store-v2.b.goit.study/api/feedbacks?limit=10&page=1");return console.log(e.data),e.data}catch(e){return console.log(e),[]}}X().then(e=>{e.feedbacks.forEach(t=>{const o=Y(t.rate),r=`
      <div class="swiper-slide">
        <div class="feedback-card">
          <div class="stars">${Q(o)}</div>
          <p class="swiper-text">“${t.descr}”</p>
          <p class="swiper-text-name">${t.name}</p>
        </div>
      </div>
    `;W.insertAdjacentHTML("beforeend",r)}),console.log(document.querySelector(".swiper-pagination")),new z(".swiper",{loop:!1,slidesPerView:1,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},navigation:{prevEl:".custom-prev",nextEl:".custom-next"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}).catch(e=>{console.error("Ошибка при инициализации слайдера отзывов:",e),P.innerHTML=`<p style="color: red;">
      Не удалось загрузить отзывы. Пожалуйста, попробуйте обновить страницу.
    </p>`});l.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";function H(e){u.error({message:e,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}async function Z(e){try{return(await l.get(`/furnitures/${e}`)).data}catch(t){throw console.error(`Помилка при отриманні деталей продукту з ID ${e}:`,t),t}}const L=document.querySelector(".product-modal-backdrop"),N=document.querySelector(".product-modal .modal-main-content"),ee=document.querySelector(".modal-close-btn"),R=document.body;function te(e){return`<rating data-rating="${e}" data-max-rating="5" data-icon="&#9733;" data-font-size="20px" class="rating-stars"></rating>`}function oe(e){return`<div class="color-options-container"><p class="color-label">Колір</p><form class="color-options">${e.map((o,r)=>{const s=`color-${o.substring(1)}`;return`
            <label class="color-option">
                <input type="radio" name="product-color" value="${o}" id="${s}" ${r===0?"checked":""} class="visually-hidden">
                <span class="custom-radio-style ${r===0?"is-active":""}" style="background-color: ${o};" data-color-hex="${o}"></span>
            </label>
        `}).join("")}</form></div>`}function re(e){const t=e.price.toLocaleString()+" грн";return`
        <div class="product-gallery">
            <img src="${e.images[0]}" alt="${e.name} (Основне)" class="main-product-image">
            <div class="gallery-thumbnails">
                 ${e.images.slice(1).map(o=>`<img src="${o}" alt="${e.name} (Мініатюра)" class="gallery-thumbnail">`).join("")}
            </div>
        </div>
        
        <div class="product-info">
            <h2 class="model-name">${e.name}</h2> <p class="category-name">${e.category.name}</p> <p class="product-price"><span class="price-value">${t}</span><span class="price-currency"></span></p> ${te(e.rate)} ${oe(e.color)} <div class="product-details">
                <p class="description-text">${e.description}</p> <p class="dimensions-text">Розміри: ${e.sizes} см</p> </div>
            
            <button 
                class="button order-btn open-order-modal-btn" 
                type="button"
                data-product-id="${e._id}"      
                data-marker="details_page_order">  
                Перейти до замовлення
            </button>
        </div>
    `}function se(e){e.currentTarget.querySelectorAll(".custom-radio-style").forEach(o=>o.classList.remove("is-active")),e.target.classList.contains("visually-hidden")&&e.target.nextElementSibling.classList.add("is-active")}function E(){L.classList.add("is-hidden"),R.classList.remove("modal-open"),document.removeEventListener("keydown",_),N.innerHTML=""}async function ne(e){const t=e.detail.productId;try{const o=await Z(t);N.innerHTML=re(o);const r=document.querySelector(".product-modal .color-options");r&&r.addEventListener("change",se),document.querySelector(".product-modal .open-order-modal-btn").addEventListener("click",ae),L.classList.remove("is-hidden"),R.classList.add("modal-open"),document.addEventListener("keydown",_)}catch{H("Не вдалося відобразити деталі товару.")}}function ae(e){const t=e.currentTarget.dataset.productId,o=e.currentTarget.dataset.marker,r=document.querySelector(".color-options input:checked"),s=r?r.value:null;if(!t||!s){H("Необхідно обрати колір перед замовленням.");return}E();const n=new CustomEvent("open-order-modal",{bubbles:!0,detail:{productId:t,selectedColor:s,markerValue:o}});document.body.dispatchEvent(n)}function _(e){e.key==="Escape"&&E()}L.addEventListener("click",e=>{e.target===L&&E()});ee.addEventListener("click",E);document.body.addEventListener("open-details-modal",ne);function ce(e){const t=e.target.closest(".details-button");if(!t||!t.dataset.id)return;e.preventDefault();const o=t.dataset.id,r=new CustomEvent("open-details-modal",{bubbles:!0,detail:{productId:o}});document.body.dispatchEvent(r)}document.body.addEventListener("click",ce);const p=document.getElementById("order-modal"),ie=document.getElementById("closeModalBtn"),c=document.getElementById("callback-form");let j=null,D=null;document.addEventListener("click",e=>{const t=e.target.closest(".open-order-modal-btn");t&&(j=t.dataset.productId,D=t.dataset.marker,p.style.display="flex",document.body.style.overflow="hidden")});function w(){p.style.display="none",document.body.style.overflow="",c.reset(),F()}ie.addEventListener("click",w);p.addEventListener("click",e=>{e.target===p&&w()});document.addEventListener("keydown",e=>{e.key==="Escape"&&p.style.display==="flex"&&w()});function q(e,t){e.style.border="1px solid #6b0609";let o=e.parentNode.querySelector(".input-error-text");o||(o=document.createElement("p"),o.classList.add("input-error-text"),e.parentNode.appendChild(o)),o.textContent=t}function F(){document.querySelectorAll(".input-error-text").forEach(e=>e.remove()),c.querySelectorAll("input, textarea").forEach(e=>{e.style.border="1px solid rgba(8, 12, 9, 0.15)"})}c.addEventListener("submit",async e=>{e.preventDefault(),F();const t=c.name.value.trim();let o=c.phone.value.trim();const r=c.comment.value.trim();let s=!1;if(t||(q(c.name,"Error Text"),s=!0),(!o||!/^\d{9,12}$/.test(o))&&(q(c.phone,"Error Text"),s=!0),s)return;o.startsWith("0")&&(o="38"+o);const n={name:t,phone:o,modelId:j,color:D,comment:r||"Чекатиму на зворотний зв'язок для уточнення деталей. Дякую!"};try{const a=await fetch("https://furniture-store-v2.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),k=await a.json();if(console.log("Відповідь від сервера:",k),!a.ok){u.error({title:"Помилка!",message:k.message||"Щось пішло не так. Перевірте дані.",position:"topRight"});return}u.success({title:"Успіх!",message:`Замовлення №${k.orderNum} успішно створено!`,position:"topRight"}),w()}catch(a){console.error("Помилка при запиті:",a),u.error({title:"Помилка!",message:"Не вдалося відправити замовлення. Спробуйте пізніше.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
