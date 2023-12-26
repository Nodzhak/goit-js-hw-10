import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as l,i as h}from"./assets/vendor-651d7991.js";let a=null;const e={date:document.querySelector("#datetime-picker"),button:document.querySelector("button[data-start]"),days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};function p(t){const u=r(Math.floor(t/864e5)),c=r(Math.floor(t%864e5/36e5)),d=r(Math.floor(t%864e5%36e5/6e4)),m=r(Math.floor(t%864e5%36e5%6e4/1e3));return{days:u,hours:c,minutes:d,seconds:m}}function r(t){return t.toString().padStart(2,"0")}const f={enableTime:!0,time_24hr:!0,defaultDate:Date.now(),minuteIncrement:1,animateInside:!1,onClose(t){t[0]<Date.now()?h.error({title:"Error",message:"Please choose a date in the future"}):a=t[0]}};class y{constructor(){this.timerID=null,this.isActive=!1,e.button.disabled=!0,this.toggleButtonAndInput(!1)}startTimer(){this.isActive||(this.isActive=!0,this.toggleButtonAndInput(!0),this.timerID=setInterval(()=>{const n=Date.now(),o=a-n,s=p(o);this.updateComponentsTimer(s),o<=1e3&&(this.stopTimer(),this.toggleButtonAndInput(!1))},1e3))}updateComponentsTimer({days:n,hours:o,minutes:s,seconds:i}){e.days.textContent=n,e.hours.textContent=o,e.minutes.textContent=s,e.seconds.textContent=i}stopTimer(){clearInterval(this.timerID)}toggleButtonAndInput(n){e.button.disabled=n,e.date.disabled=n}}const T=new y;l(e.date,f);e.button.addEventListener("click",()=>T.startTimer());
//# sourceMappingURL=commonHelpers.js.map
