const t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.addEventListener("click",(function(){e(!0,!1),n=setInterval((()=>{const n=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.body.style.backgroundColor=n}),1e3)})),t.stopBtn.addEventListener("click",(function(){e(!1,!0),clearInterval(n)}));let n=null;function e(n,e){t.startBtn.disabled=n,t.stopBtn.disabled=e}
//# sourceMappingURL=01-color-switcher.cc5ae722.js.map