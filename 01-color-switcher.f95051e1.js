let t,a=t=>document.querySelector(t);a("[data-start]").addEventListener("click",(function(){a("[data-start]").disabled=!0,a("[data-stop]").disabled=!1,t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),a("[data-stop]").addEventListener("click",(function(){clearInterval(t),a("[data-start]").disabled=!1,a("[data-stop]").disabled=!0}));
//# sourceMappingURL=01-color-switcher.f95051e1.js.map