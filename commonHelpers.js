import"./assets/modulepreload-polyfill-3cfb730f.js";import{f,i}from"./assets/vendor-77e16229.js";const u=document.querySelector("input#datetime-picker"),o=document.querySelector("[data-start]");let y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]"),s=null;o.addEventListener("click",()=>{b()});let a;o.disabled=!0;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0],Date.now()>=Date.parse(a)?(o.disabled=!0,i.error({position:"topRight",backgroundColor:"red",titleColor:"white",messageColor:"white",title:"Error:",message:"Please choose a date in the future"})):o.disabled=!1,u.value=e[0]}};f(u,g);function b(){o.disabled=!0;let e=0;s=setInterval(()=>{e=Date.parse(a)-Date.now();function d(t){const c=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:l,minutes:m,seconds:h}}const n=d(e);function r(t){return String(t).padStart(2,"0")}y.textContent=r(n.days),p.textContent=r(n.hours),C.textContent=r(n.minutes),S.textContent=r(n.seconds),e<=1e3&&(clearInterval(s),i.show({position:"topCenter",backgroundColor:"lime",title:"Hey",message:"Time is up!"}))},1e3)}
//# sourceMappingURL=commonHelpers.js.map
