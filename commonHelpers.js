import{i,S as f}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="42540057-2630f4048f1d19f54e4f29ae2";function p(o){const s=`https://pixabay.com/api/?key=${h}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>{if(!r.ok)throw new Error("Error fetching images");return r.json()}).then(r=>{if(r.hits.length===0)throw new Error("No results found");return r.hits})}function g(o){const s=document.getElementById("gallery");if(s.innerHTML="",o.length===0)i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});else{const r=new f(".gallery a");o.forEach(n=>{const e=document.createElement("div");e.classList.add("card");const t=document.createElement("a");t.href=n.largeImageURL,t.setAttribute("data-lightbox","gallery");const a=document.createElement("img");a.src=n.webformatURL,a.alt=n.tags;const c=document.createElement("div");c.classList.add("details");const l=document.createElement("span");l.textContent=`Likes: ${n.likes}`;const d=document.createElement("span");d.textContent=`Views: ${n.views}`;const u=document.createElement("span");u.textContent=`Comments: ${n.comments}`;const m=document.createElement("span");m.textContent=`Downloads: ${n.downloads}`,c.appendChild(l),c.appendChild(d),c.appendChild(u),c.appendChild(m),t.appendChild(a),e.appendChild(t),e.appendChild(c),s.appendChild(e)}),r.refresh()}}function y(){const o=document.getElementById("loader");o.style.display="block"}function E(){const o=document.getElementById("loader");o.style.display="none"}const w=document.getElementById("search-form");w.addEventListener("submit",L);function L(o){o.preventDefault();const r=document.getElementById("search-input").value.trim();if(!r){i.warning({title:"Warning",message:"Please enter a search query"});return}y(),p(r).then(n=>{g(n)}).catch(n=>{i.error({title:"Error",message:"Error fetching images. Please try again later."})}).finally(()=>{E()})}
//# sourceMappingURL=commonHelpers.js.map