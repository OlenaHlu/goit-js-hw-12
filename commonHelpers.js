import{a as v,i as a,S as q}from"./assets/vendor-95dc692e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}})();const h=async()=>(await v.get("https://pixabay.com/api/",{params:{key:"43066959-f9f55707df0fe34b818b99119",q:y,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:p,page:i}})).data.hits,u=document.querySelector("ul.gallery");let s,y;const p=15;let i=1;const S=document.querySelector("input"),P=document.querySelector("form"),l=document.querySelector("#addImg"),g=document.querySelector(".preloader"),b=()=>{g.style.display="flex"},L=()=>{g.style.display="none"},m=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};P.addEventListener("submit",async n=>{if(n.preventDefault(),i=1,s={},y=S.value.trim(),!y.length){a.error({color:"yellow",message:" Please enter a search query!.",position:"center"}),u.innerHTML="";return}b();try{if(s=await h(),!s.length){a.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"center"}),l.style.display="none";return}p<=s.length?l.style.display="flex":a.info({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"center"}),w(s),scroll()}catch{a.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"center"})}finally{L(),m()}});l.addEventListener("click",async n=>{n.preventDefault(),i+=1,b();try{if(s=await h(),p>s.length){a.info({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"center"}),l.style.display="none";return}w(s),scroll()}catch{a.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{L(),m()}});window.onload=m;let d={};async function w(n){u.innerHTML="";const o=s.map(r=>`<li class="img-blok">
        <a href="${r.largeImageURL}">     
    <img  src="${r.webformatURL}"
    data-source="${r.largeImageURL}"
    alt="${r.tags}">
   
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${r.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${r.views}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${r.comments}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${r.downloads}</p>
  </li>
    </ul>
  </a></li>`).join("");i>1?d+=o:d=o,u.insertAdjacentHTML("beforeend",d),new q(".gallery a",{captionsData:"alt"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
