function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=a.parcelRequire294c;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},a.parcelRequire294c=o),o.register("27Lyk",(function(t,a){var n,i;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};n=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)o[t[a]]=e[t[a]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"kS7Ru":"index.b0b1b2e0.js","oxyVA":"avatar-angela-gray.2d921aa4.webp","wHRnz":"avatar-anna-kim.fd50c9e2.webp","k2v67":"avatar-jacob-thompson.88aa4c32.webp","dUnrk":"avatar-kimberly-smith.ce23b833.webp","3ST8T":"avatar-mark-webber.71501f52.webp","9gksy":"avatar-nathan-peterson.5b38752b.webp","csb0u":"avatar-rizky-hasanuddin.ed25eaf7.webp","7K0CE":"image-chess.176b1953.webp"}'));var r;r=JSON.parse('[{"name":"Mark Webber","type":"reaction","uniqueText":"My first tournament today!","date":"1m ago"},{"name":"Angela Gray","type":"followed","uniqueText":"","date":"5m ago"},{"name":"Jacob Thompson","type":"joined-group","uniqueText":"Chess Club","date":"1 day ago"},{"name":"Rizky Hasanuddin","type":"private-message","uniqueText":"Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and \\n  I\'m already having lots of fun and improving my game.","date":"5 days ago"},{"name":"Kimberly Smith","type":"comment","uniqueText":"","date":"1 week ago"},{"name":"Nathan Peterson","type":"reaction","uniqueText":"5 end-game strategies to increase your win rate","date":"2 weeks ago"},{"name":"Anna Kim","type":"left-group","uniqueText":"Chess Club","date":"2 weeks ago"},{"name":"Mark Webber","type":"reaction","uniqueText":"My first tournament today!","date":"1m ago"},{"name":"Angela Gray","type":"followed","uniqueText":"","date":"5m ago"},{"name":"Jacob Thompson","type":"joined-group","uniqueText":"Chess Club","date":"1 day ago"},{"name":"Rizky Hasanuddin","type":"private-message","uniqueText":"Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and \\n  I\'m already having lots of fun and improving my game.","date":"5 days ago"},{"name":"Kimberly Smith","type":"comment","uniqueText":"","date":"1 week ago"},{"name":"Nathan Peterson","type":"reaction","uniqueText":"5 end-game strategies to increase your win rate","date":"2 weeks ago"},{"name":"Anna Kim","type":"left-group","uniqueText":"Chess Club","date":"2 weeks ago"},{"name":"Mark Webber","type":"reaction","uniqueText":"My first tournament today!","date":"1m ago"},{"name":"Angela Gray","type":"followed","uniqueText":"","date":"5m ago"},{"name":"Jacob Thompson","type":"joined-group","uniqueText":"Chess Club","date":"1 day ago"},{"name":"Rizky Hasanuddin","type":"private-message","uniqueText":"Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and \\n  I\'m already having lots of fun and improving my game.","date":"5 days ago"},{"name":"Kimberly Smith","type":"comment","uniqueText":"","date":"1 week ago"},{"name":"Nathan Peterson","type":"reaction","uniqueText":"5 end-game strategies to increase your win rate","date":"2 weeks ago"},{"name":"Anna Kim","type":"left-group","uniqueText":"Chess Club","date":"2 weeks ago"}]');const s={notifications:[],unreadNotificationCount:0};class u{static id=1;constructor(e,t,a,n,i=!1){this.name=e,this.fullName=e.toLowerCase().split(" ").join("-"),this.type=t,this.uniqueText=a,this.date=n,this.read=i,this.id=u.id++,console.log(this.id)}getReadStatus(){return this.read}getName(){return this.name}getDate(){return this.date}getType(){return this.type}getUniqueText(){return this.uniqueText}getAllInfo(){return{name:this.name,type:this.type,uniqueText:this.uniqueText,date:this.date,read:this.read,fullName:this.fullName}}}function d(){s.unreadNotificationCount=s.notifications.filter((e=>!e.read)).length}function c({name:e,type:t,uniqueText:a,date:n}){const i=new u(e,t,a,n);s.notifications.push(i)}var l,m;m=new URL(o("27Lyk").resolve("oxyVA"),import.meta.url).toString();var f;f=new URL(o("27Lyk").resolve("wHRnz"),import.meta.url).toString();var p;p=new URL(o("27Lyk").resolve("k2v67"),import.meta.url).toString();var g;g=new URL(o("27Lyk").resolve("dUnrk"),import.meta.url).toString();var y;y=new URL(o("27Lyk").resolve("3ST8T"),import.meta.url).toString();var h;h=new URL(o("27Lyk").resolve("9gksy"),import.meta.url).toString();var v;v=new URL(o("27Lyk").resolve("csb0u"),import.meta.url).toString();var b;b=new URL(o("27Lyk").resolve("7K0CE"),import.meta.url).toString(),l={"avatar-angela-gray":m,"avatar-anna-kim":f,"avatar-jacob-thompson":p,"avatar-kimberly-smith":g,"avatar-mark-webber":y,"avatar-nathan-peterson":h,"avatar-rizky-hasanuddin":v,"image-chess":b};class w{static typesText={reaction:"reacted to your recent post",followed:"followed you","joined-group":"has joined your group","private-message":"sent you a private message",comment:"commented on your picture","left-group":"left the group"};#e=document.querySelector(".notifications-container");#t=document.querySelector("header");#a(){return`<img src="${t(l)["image-chess"]}" alt="" class="notification-img">`}#n(e){return`<p class="private-message">${e.uniqueText}</p>`}#i(e){return e?"":"not-seen"}#o(e){const a=`<div class="notification ${this.#i(e.read)}" data-val="${e.id}">\n      <div class="notification-left-container">\n         <img src="${t(l)[`avatar-${e.fullName}`]}" alt="" class="profile-img" />\n         <div class="notification-text-container">\n            <p class="notification-description">\n               <span class="person-name">${e.name} </span>${w.typesText[e.type]}\n               <span class="notification-entity">${"private-message"!==e.type?e.uniqueText:""}</span>\n            </p>\n            <p class="time-since-occurred">${e.date}</p>\n            ${"private-message"===e.type?this.#n(e):""}\n         </div>\n      </div>\n      ${"comment"===e.type?this.#a():""}\n   </div>`;this.#e.insertAdjacentHTML("beforeend",a)}renderAllNotifications(e){for(const t of e)this.#o(t)}updateNotificationCount(e){document.querySelector(".notification-number").textContent=e}clearUnseenNotifications(){document.querySelectorAll(".notification").forEach((e=>{e.classList.remove("not-seen")}))}addHandlerNotificationClick(e){this.#e.addEventListener("click",(function(t){const a=t.target.closest(".notification");a&&(a.classList.remove("not-seen"),e(a.dataset.val))}))}addHandlerLoadNotifications(e){window.addEventListener("load",e)}addHandlerMarkAllRead(e){this.#t.addEventListener("click",(function(t){t.target.closest(".mark-as-read")&&e()}))}}var k=new w;async function T(){await async function(){try{const e=t(r);for(const t of e)c(t);d()}catch(e){throw e}}(),k.renderAllNotifications(s.notifications),k.updateNotificationCount(s.unreadNotificationCount)}function x(){k.clearUnseenNotifications(),s.notifications.forEach((e=>{e.read=!0})),s.unreadNotificationCount=0,k.updateNotificationCount(s.unreadNotificationCount)}function C(e){s.notifications.find((t=>t.id===Number(e))).read=!0,d(),k.updateNotificationCount(s.unreadNotificationCount)}k.addHandlerLoadNotifications(T),k.addHandlerMarkAllRead(x),k.addHandlerNotificationClick(C);
//# sourceMappingURL=index.b0b1b2e0.js.map