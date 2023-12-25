import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as m,i as l}from"./assets/vendor-651d7991.js";let i=null;const e={date:document.querySelector("#datetime-picker"),button:document.querySelector("button[data-start]"),days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};function h(t){const a=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:u,minutes:c,seconds:d}}const f={enableTime:!0,time_24hr:!0,defaultDate:Date.now(),minuteIncrement:1,animateInside:!1,onClose(t){t[0]<Date.now()?(l.error({title:"Error",message:"Please choose a date in the future"}),t[0]=new Date):(e.button.disabled=!1,i=t[0])}};class p{constructor(){this.timerID=null,this.isActive=!1,e.button.disabled=!0}startTimer(){this.isActive||(this.isActive=!0,this.timerID=setInterval(()=>{const o=Date.now(),n=i-o,s=h(n);this.updateComponentsTimer(s),n<=0&&this.stopTimer()},1e3))}updateComponentsTimer({days:o,hours:n,minutes:s,seconds:r}){e.days.textContent=o,e.hours.textContent=n,e.minutes.textContent=s,e.seconds.textContent=r}stopTimer(){clearInterval(this.timerID)}}const y=new p;m(e.date,f);e.button.addEventListener("click",()=>y.startTimer());
//# sourceMappingURL=commonHelpers.js.map
