(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();class a{constructor(i){this.canvas=i,this.ctx=i.getContext("2d"),this.drawing=!1,this.ctx.lineWidth=.1,this.ctx.lineCap="round",this.canvas.width=28,this.canvas.height=28,this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.canvas.addEventListener("mousedown",s=>{this.drawing=!0}),this.canvas.addEventListener("mousemove",s=>{this.drawing&&(this.ctx.lineTo(s.clientX*this.canvas.width/this.canvas.offsetWidth,s.clientY*this.canvas.height/this.canvas.offsetHeight),this.ctx.stroke())}),this.canvas.addEventListener("mouseup",s=>{this.drawing=!1,this.ctx.stroke(),this.ctx.beginPath()})}clearScreen(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}returnScreen(){var i=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height).data;let s=Array(i.length/4);for(let r=0;r<i.length;r+=4)s[r/4]=1-i[r]/255;return s}}var o=new a(document.querySelector("canvas"));const l=document.querySelector("#panel");l.addEventListener("click",c=>{c.target.id=="credits"?(document.querySelector("#overlay").style.display="inherit",document.querySelector("#credits-popup").style.display="inherit",document.querySelector("#output-popup").style.display="none"):c.target.id=="calc"?(document.querySelector("#overlay").style.display="inherit",document.querySelector("#output-popup").style.display="inherit",document.querySelector("#credits-popup").style.display="none",console.log(o.returnScreen())):c.target.id=="cls"&&o.clearScreen()});document.querySelectorAll(".popup #close").onclick=()=>{document.querySelector("#overlay").style.display="none",document.querySelector(".popup").style.display="none"};
