(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();var h=["loading","start","terminal","main"];function f(e){var n=document.getElementById(e);h.forEach(function(r){var s=document.getElementById(r);s&&s!=n&&s.animate([{opacity:"1"},{opacity:"0"}],{duration:100,iterations:1}).addEventListener("finish",()=>{s&&(s.style.display="none"),n&&(n.style.opacity="0",n.style.display="flex",n.animate([{opacity:"0"},{opacity:"1"}],{duration:100,iterations:1,fill:"forwards"}).addEventListener("finish",()=>{n&&(n.style.opacity="1")}))})})}var N=`
>> zawgg boot --web --nosave
Fetching startup prerequisites...
[WARN] 2 prerequisite(s) not satisfied.
Initializing...
[INFO] Model: zawgg.com
[INFO] OS: Zawgg 14.0.0 xHTML_WEB
[INFO] Host: Github Pages 
[INFO] Kernel: vite@7.1.7-stable
[INFO] Last Updated: 11/3/25
[INFO] Packages: 4 (npm) 
[INFO] Shell: TypeScript 5.9.3
[INFO] Resolution: null
[INFO] DE: Tailwind CSS 4.1.16
[INFO] WM: Custom (TypeScript)
[INFO] WM Theme: Mainframe
[INFO] Theme: Mainframe [CSS]
[INFO] Icons: Nerd Fonts [TTF]
[INFO] Terminal: Custom (HTML5)
[INFO] CPU: Hugh BRWR k5-4400M @ 2.4GHz
[INFO] GPU: Hugh DNCN hd3700 
[INFO] Memory: 2MiB / 15942MiB
System Requirements satisfied
[INIT] Mounting /dev/zawgg... done
[INIT] Loading core modules...
    → index.html ................... OK
    → styles.css ................... OK
    → main.ts ...................... OK
    → vscode.exe ................... OK
    → chromium.exe ................. OK
    → cmd.exe ...................... OK
[INFO] Bootstrapping developer environment...
[INFO] Detected Libraries: tailwindcss^4.1.16 @tailwindcss/vite^4.1.16 typescript^5.9.3 vite^7.1.7
[INFO] Git Remote: github.com/hughdunc/zawgg
[INFO] Syncing assets... 24/24 (100%)
[OK]  All systems initialized.
[INIT] Waiting for server validation...
[OK] Validation Token Recieved: 11e798ab-c9dc-4b6a-be00-427f98dc7109
Validation successful.

`,v=`                                            
 ########   m#####m ##      ##  m###m##   m###m## 
     m#"    " mmm## "#  ##  #" ##"  "##  ##"  "## 
   m#"     m##"""##  ##m##m##  ##    ##  ##    ## 
 m##mmmmm  ##mmm###  "##  ##"  "##mm###  "##mm### 
 """"""""   """" ""   ""  ""    m""" ##   m""" ## 
                                "####""   "####"" 

Welcome to zawgg.com!

`,F="Press enter to continue...";const l=50,c=50;let m=0;const d=e=>new Promise(n=>setTimeout(n,e));function T(e){return/\.\.\.\s*$/.test(e)}async function u(e,n,r=l,s=c){const t=++m,i=n.replace(/\r\n/g,`
`).split(`
`);for(let o=0;o<i.length;o++){if(t!==m)return;const a=i[o];if(T(a)){const O=a.slice(0,a.length-3);e.textContent+=O,e.scrollTop=e.scrollHeight;for(let g=0;g<3;g++){if(t!==m)return;e.textContent+=".",e.scrollTop=e.scrollHeight,await d(s)}e.textContent+=`
`,e.scrollTop=e.scrollHeight,await d(r)}else e.textContent+=a+`
`,e.scrollTop=e.scrollHeight,await d(r)}}async function w(){console.log("initializing");const e=document.getElementById("startup-script");if(!e){console.warn("Missing #startup-script");return}e.textContent="",await u(e,N,l,c),await u(e,v,l,c),await u(e,F,l,c)}const I=document.getElementById("enter-button");I?.addEventListener("click",()=>{f("terminal"),w()});const p=document.getElementById("start"),y=document.getElementById("terminal");document.addEventListener("keydown",e=>{p&&getComputedStyle(p).display!="none"?e.key==="Enter"&&(e.preventDefault(),I?.click()):y&&getComputedStyle(y).display!="none"&&e.key==="Enter"&&(e.preventDefault(),f("main"))});f("start");
