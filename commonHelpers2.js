import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as t}from"./assets/vendor-651d7991.js";const i=document.querySelector(".form"),n=document.querySelector('input[name="delay"]'),m=document.querySelector('input[name="state"][value="fulfilled"]');i.addEventListener("submit",s=>{s.preventDefault();const o=n.value;console.log("Submitted"),m.checked?r({shouldResolve:!0,delay:o}).then(e=>console.log(e)).catch(e=>console.error(e)):r({shouldResolve:!1,delay:o}).then(e=>console.log(e)).catch(e=>console.error(e))});const r=({shouldResolve:s,delay:o})=>new Promise((e,l)=>{setTimeout(()=>{s?(e(`✅ Fulfilled promise in ${o} ms`),t.show({title:"",position:"topRight",message:`✅ Fulfilled promise in ${o} ms`,messageColor:"white",backgroundColor:"green",progressBar:!1})):(l(`❌ Rejected promise in ${o} ms`),t.show({title:"",position:"topRight",message:`❌ Rejected promise in ${o} ms`,messageColor:"white",backgroundColor:"orange",progressBar:!1}))},o)});
//# sourceMappingURL=commonHelpers2.js.map
