(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const s=document.getElementById("myModal"),l=document.getElementsByClassName("close")[0],d=document.getElementById("aceptar");window.onload=function(){s.style.display="block"};l.onclick=function(){s.style.display="none"};d.onclick=function(){s.style.display="none"};window.onclick=function(n){n.target==s&&(s.style.display="none")};document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".hidden");n.forEach(o=>{o.classList.add("no-transition")});const r=new IntersectionObserver((o,i)=>{o.forEach(e=>{e.isIntersecting&&(e.target.classList.add("visible"),i.unobserve(e.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});n.forEach(o=>{r.observe(o)})});
