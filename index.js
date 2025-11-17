import{a as m,i as g,A as Z,S as ee}from"./assets/vendor-DY_idrNt.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const d={menuButton:document.querySelector("[data-mobile-navbar-toggle]"),mobileNavbar:document.querySelector("[data-mobile-navbar]"),overlay:document.querySelector("[data-mobile-navbar-overlay]"),body:document.body};d.menuButton.addEventListener("click",te);d.overlay.addEventListener("click",q);window.addEventListener("keydown",e=>{e.key==="Escape"&&!d.mobileNavbar.classList.contains("is-hidden")&&q()});d.mobileNavbar.querySelectorAll(".navbar-nav-link").forEach(e=>{e.addEventListener("click",q)});function te(){!d.mobileNavbar.classList.contains("is-hidden")?q():oe()}function oe(){d.mobileNavbar.classList.remove("is-hidden"),d.overlay.classList.remove("is-hidden"),d.menuButton.classList.add("is-active"),d.body.classList.add("no-scroll")}function q(){d.mobileNavbar.classList.add("is-hidden"),d.overlay.classList.add("is-hidden"),d.menuButton.classList.remove("is-active"),d.body.classList.remove("no-scroll")}m.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";const b="pickedCategoryId",ne="previous_page";function v(e){g.error({message:`${e.message??String(e)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}function O(e){g.info({message:`${e}`,position:"topCenter",timeout:3e3,backgroundColor:"#009b18",messageColor:"white",close:!1})}const N=document.querySelector(".loading");function M(){N.hidden=!1}function h(){N.hidden=!0}localStorage.removeItem(b);localStorage.removeItem(ne);let a=1,L=0,u=0;const y=8;let k=1;const F=window.innerWidth,re=document.querySelectorAll(".category-card"),p=document.querySelector(".furniture-list"),j=document.querySelector(".category-container"),l=document.querySelector(".pagination-container"),w=document.querySelector(".load-more-button"),se=l.querySelector(".back"),ae=l.querySelector(".next"),ie=l.querySelector(".pagination-back"),ce=l.querySelector(".pagination-next");function E(){ie.disabled=a<=1,ce.disabled=a>=k}async function D(){try{const{data:e}=await m("/categories");return e}catch(e){v(e)}}D();async function le(e){const o=await D();[...e].forEach((t,s)=>{s!==0&&(t.dataset.id=o[s-1]._id,t.children[0].textContent=o[s-1].name)})}le(re);async function de(){M();try{const{data:e}=await m("/furnitures",{params:{page:a,limit:y}});L=e.totalItems,u=Math.ceil(L/y),k=u,p.innerHTML=B(e.furnitures),F<768?(l.hidden=!0,w.hidden=a>=u):(l.hidden=!1,C(u)),E()}catch(e){v(e)}finally{h()}}de();E();j.addEventListener("click",ue);async function ue(e){e.preventDefault(),M();const o=e.target.closest(".category-card");if(!j.contains(o)||!o){h(),O("Оберіть, будь-ласка, категорію");return}const t=o.dataset.id??null,s=localStorage.getItem(b);if(t!==null&&t===s){v("Ви щойно переглядали цю категорію. Перегляньте, будь-ласка, інші наші товари"),h();return}const n=document.getElementById("furniture");if(n){const r=document.querySelector(".header"),i=(r==null?void 0:r.offsetHeight)||16,c=n.getBoundingClientRect().top+window.pageYOffset-i;window.scrollTo({top:c,behavior:"smooth"})}a=1,p.innerHTML="",t==null?localStorage.removeItem(b):localStorage.setItem(b,t);try{const{data:r}=await m("/furnitures",{params:{page:a,limit:y,category:t}});L=r.totalItems,u=Math.ceil(L/y),k=u,p.innerHTML=B(r.furnitures),F<768?(l.hidden=!0,w.hidden=a>=u):(l.hidden=!1,C(u),E())}catch(r){v(r)}finally{h()}}function B(e){return e.sort((o,t)=>o.price-t.price).map(o=>`
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
    `).join("")}function C(e,o=1){l.hidden=!0,l.innerHTML="",l.append(se,ae),pe(e,o).forEach(s=>{const n=document.createElement("li");if(n.classList.add("page"),s==="..."){const r=document.createElement("span");r.textContent="...",r.classList.add("pagination-ellipsis"),n.append(r)}else{const r=document.createElement("button");r.classList.add("pagination-item"),r.type="button",r.textContent=s,r.dataset.page=s,s===o&&r.classList.add("isActive"),n.classList.add("page"),n.append(r)}l.lastElementChild.insertAdjacentElement("beforebegin",n)}),l.hidden=e<=1}function pe(e,o,t=1){const s=[],n=o-t,r=o+t;let i=!1;for(let c=1;c<=e;c++){const Q=c===1||c===e,X=c>=n&&c<=r;Q||X?(s.push(c),i=!1):i||(s.push("..."),i=!0)}return s}w.addEventListener("click",me);async function me(e){p.insertAdjacentElement("beforeend",N),M(),a++;const o=localStorage.getItem(b);try{const{data:t}=await m("/furnitures",{params:{page:a,limit:y,category:o}});L=t.totalItems,u=Math.ceil(L/y),k=u,a=Number(t.page),a<u?(p.insertAdjacentHTML("beforeend",B(t.furnitures)),w.hidden=!1):(O("В даній категорії закінчилися товари"),w.hidden=!0);const s=p.querySelector(".furniture-list-item");s&&window.scrollBy({left:0,top:s.getBoundingClientRect().height,behavior:"smooth"}),h()}catch(t){v(t)}}document.querySelector(".pagination-container").addEventListener("click",async e=>{const o=e.target.closest("[data-page]"),t=e.target.closest("[data-nav]");if(!o&&!t)return;const s=o||t;if(s.disabled)return;if(M(),o&&(a=Number(o.dataset.page),C(u,a),E(),o.blur()),t&&(t.dataset.nav==="minus"&&a>1&&a--,t.dataset.nav==="plus"&&a<k&&a++),C(u,a),E(),s.blur(),!a||Number.isNaN(a)){O("Виберіть будь-ласка сторінку для заванатаження товарів");return}const n=localStorage.getItem(b);try{const{data:r}=await m("/furnitures",{params:{page:a,limit:y,category:n}});p.innerHTML=B(r.furnitures);const i=e.target;if(!i||i.disabled)return;p&&p.scrollIntoView({block:"start",behavior:"smooth"})}catch(r){v(r)}finally{h()}});new Z(".qa",{duration:300,showMultiple:!1,openOnInit:[]});const P=document.querySelectorAll(".faq-quest");P.forEach(e=>{e.addEventListener("click",()=>{const o=e.getAttribute("aria-expanded")==="true";P.forEach(t=>t.setAttribute("aria-expanded","false")),o||e.setAttribute("aria-expanded","true")})});const H=new URL("/furniweblab/assets/sprite-CA5GGzUd.svg",import.meta.url).href,V=document.querySelector(".feedbacks-list");V.innerHTML=`
  <div class="swiper">
    <div class="swiper-wrapper"></div>

    <div class="swiper-controls">
      <div class="swiper-pagination"></div>
  
      <div class="swiper-nav-btn">
        <button class="general-btn custom-prev"><svg class="" width="14" height="14">
        <use href="${H}#icon-arrow-left"></use>
        </svg></button>
        <button class="general-btn custom-next"><svg class="" width="14" height="14">
        <use href="${H}#icon-arrow-right"></use>
        </svg></button>
      </div>
    </div>

  </div>
`;const fe=document.querySelector(".swiper .swiper-wrapper");function ge(e){if(e==null)return"";const o=Math.round(e*2)/2,t=Math.floor(o),s=o-t===.5;let n=`rating value-${t}`;return s&&(n+=" half"),`
        <div class="${n}">
            <div class="star-container"></div>
        </div>
    `}async function ye(){try{return(await m("https://furniture-store-v2.b.goit.study/api/feedbacks?limit=10&page=1")).data}catch(e){return console.log(e),[]}}ye().then(e=>{e.feedbacks.forEach(o=>{const t=`
      <div class="swiper-slide">
        <div class="feedback-card">
          ${ge(o.rate)}
          <p class="swiper-text">“${o.descr}”</p>
          <p class="swiper-text-name">${o.name}</p>
        </div>
      </div>
    `;fe.insertAdjacentHTML("beforeend",t)}),new ee(".swiper",{loop:!1,slidesPerView:1,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},navigation:{prevEl:".custom-prev",nextEl:".custom-next"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}).catch(e=>{console.error("Помилка при ініціалізації слайдера відгуків:",e),V.innerHTML=`<p style="color: red;">
      Неможливо завантажити відгуки. Будь ласка, спробуйте оновити сторінку.
    </p>`});function _(){if(document.querySelector("#page-spinner"))return;const e=document.createElement("div");e.id="page-spinner",e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.innerHTML=`
      <div class="spinner" aria-label="Завантаження…">
        <button class="loadingBtn" type="button">
            <span class="loader" id="btnSpinner"></span>
        </button>
      </div>
    `,document.body.appendChild(e),document.body.classList.add("no-scroll")}function x(){const e=document.getElementById("page-spinner");e&&(e.remove(),document.body.classList.remove("no-scroll"))}m.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";function U(e){g.error({message:e,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}async function be(e){try{return(await m.get(`/furnitures/${e}`)).data}catch(o){throw console.error(`Помилка при отриманні деталей продукту з ID ${e}:`,o),o}}const $=document.querySelector(".product-modal-backdrop"),G=document.querySelector(".product-modal .modal-main-content"),he=document.querySelector(".modal-close-btn"),K=document.body;function ve(e){if(e==null)return"";const o=Math.round(e*2)/2,t=Math.floor(o),s=o-t===.5;let n=`rating value-${t}`;return s&&(n+=" half"),`
        <div class="${n}">
            <div class="star-container"></div>
        </div>
    `}function Le(e){return`<div class="color-options-container">
            <p class="color-label">Колір</p>
            <form class="color-options">${e.map((t,s)=>{const n=`color-${t.substring(1)}`;return`
            <label class="color-option">
                <input
                  type="radio"
                  name="product-color"
                  value="${t}" 
                  id="${n}"                    
                  class="custom-radio-style ${s===0?"is-active":""}" 
                  style="
                    -webkit-appearance:none;
                    appearance:none;
                    width: 32px;
                    height: 32px;
                    background-color: ${t}; 
                    cursor:pointer; 
                    display:inline-block;"
                  data-color-hex=${t}; 
                  ${s===0?"checked":""}                      
                  />
                           
            </label>
        `}).join("")}</form>
          </div>`}function we(e){const o=e.price.toLocaleString()+" грн";return`
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
            <div class="stars-container">${ve(e.rate)} 
                  ${Le(e.color)} 
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
    `}function Ee(e){if(!e.target.matches('input[name="product-color"]'))return;e.currentTarget.querySelectorAll('input[name="product-color"]').forEach(t=>t.classList.toggle("is-active",t===e.target))}async function Se(e){const o=e.detail.productId;try{const t=await be(o);G.innerHTML=we(t);const s=document.querySelector(".product-modal .color-options");s&&s.addEventListener("change",Ee),document.querySelector(".product-modal .open-order-modal-btn").addEventListener("click",ke),$.classList.remove("is-hidden"),K.classList.add("modal-open"),document.addEventListener("keydown",W),document.body.dispatchEvent(new CustomEvent("details-modal-opened",{bubbles:!0}))}catch{U("Не вдалося відобразити деталі товару.")}finally{x()}}function T(){$.classList.add("is-hidden"),K.classList.remove("modal-open"),document.removeEventListener("keydown",W),G.innerHTML="",document.body.dispatchEvent(new CustomEvent("details-modal-closed",{bubbles:!0}))}function ke(e){const o=e.currentTarget.dataset.productId,t=e.currentTarget.dataset.marker,s=document.querySelector(".color-options input:checked"),n=s?s.value:null;if(!o||!n){U("Необхідно обрати колір перед замовленням.");return}T();const r=new CustomEvent("open-order-modal",{bubbles:!0,detail:{productId:o,selectedColor:n,markerValue:t}});document.body.dispatchEvent(r)}function W(e){e.key==="Escape"&&T()}$.addEventListener("click",e=>{e.target===$&&T()});he.addEventListener("click",T);document.body.addEventListener("open-details-modal",Se);document.body.addEventListener("details-modal-opened",x);document.body.addEventListener("details-modal-closed",x);function Ce(e){const o=e.target.closest(".details-button");if(!o||!o.dataset.id)return;e.preventDefault(),_();const t=o.dataset.id,s=new CustomEvent("open-details-modal",{bubbles:!0,detail:{productId:t}});document.body.dispatchEvent(s)}document.body.addEventListener("click",Ce);const I=document.querySelector("#order-modal .loading"),S=document.getElementById("order-modal"),$e=document.getElementById("closeModalBtn"),f=document.getElementById("callback-form");let z=null,Y=null;function Ie(){I&&(I.style.display="flex")}function qe(){I&&(I.style.display="none")}document.body.addEventListener("open-order-modal",e=>{const{productId:o,selectedColor:t}=e.detail;z=o,Y=t,_(),S.style.display="flex",document.body.style.overflow="hidden",setTimeout(()=>{x(),document.body.style.overflow="hidden"},200)});function A(){S.style.display="none",document.body.style.overflow="",f.reset(),J()}$e.addEventListener("click",A);S.addEventListener("click",e=>{e.target===S&&A()});document.addEventListener("keydown",e=>{e.key==="Escape"&&S.style.display==="flex"&&A()});function R(e,o){e.style.border="1px solid #6b0609";let t=e.parentNode.querySelector(".input-error-text");t||(t=document.createElement("p"),t.classList.add("input-error-text"),e.parentNode.appendChild(t)),t.textContent=o}function J(){document.querySelectorAll(".input-error-text").forEach(e=>e.remove()),f.querySelectorAll("input, textarea").forEach(e=>{e.style.border="1px solid rgba(8, 12, 9, 0.15)"})}f.addEventListener("submit",async e=>{e.preventDefault(),J();const o=f.name.value.trim();let t=f.phone.value.trim();const s=f.comment.value.trim();let n=!1;if(o||(R(f.name,"Error Text"),n=!0),(!t||!/^(\d{10}|\d{12})$/.test(t))&&(R(f.phone,"Error Text"),g.error({title:"Помилка",message:"Номер має містити лише 10 або 12 цифр.",position:"topRight",timeout:4e3,color:"#EF4040",messageColor:"white"}),n=!0),n)return;t.length===10&&t.startsWith("0")&&(t="38"+t);const r={name:o,phone:t,modelId:z,color:Y,comment:s||"Чекатиму на зворотний зв'язок для уточнення деталей. Дякую!"};try{Ie();const i=await fetch("https://furniture-store-v2.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),c=await i.json();if(console.log("Відповідь від сервера:",c),!i.ok){g.error({title:"Помилка!",message:c.message||"Щось пішло не так. Перевірте дані.",position:"topRight",color:"#EF4040",messageColor:"white"});return}g.success({title:"Успіх!",message:`Замовлення №${c.orderNum} успішно створено!`,position:"topRight",color:"#009b18",messageColor:"white"}),A()}catch(i){console.error("Помилка при запиті:",i),g.error({title:"Помилка!",message:"Не вдалося відправити замовлення. Спробуйте пізніше.",position:"topRight",color:"#EF4040",messageColor:"white"})}finally{qe()}});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".js-scroll").forEach(o=>{const t=o.getAttribute("href");t&&t.startsWith("#")&&o.addEventListener("click",s=>{s.preventDefault();const n=t,r=document.querySelector(n);r&&r.scrollIntoView({behavior:"smooth",block:"start"}),o.blur()})})});
//# sourceMappingURL=index.js.map
