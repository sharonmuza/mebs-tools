(this["webpackJsonpmebs-tools"]=this["webpackJsonpmebs-tools"]||[]).push([[0],{62:function(e){e.exports=JSON.parse('[{"name":"laborsigns","title":"Signs Of Labor","cardBackgroundColor":"#78d0bb","categories":[{"title":"Possible","description":"Could be related to labor starting, but could also just be discomfort in late pregnancy - it could still be several weeks before baby is here"},{"title":"Pre-Labor","description":"It could still be several weeks before baby is here Pre-Labor: your body is definitely making changes towards labor - don\'t be surprised if you meet baby in a week or two"},{"title":"Positive","description":"Surefire signs of labor coming on! Get ready to welcome your baby in the next day or two"}],"cards":[{"text":"Bloody Show"},{"text":"Non-progressing Contractions"},{"text":"Restless Backache"},{"text":"Nesting Urge"},{"text":"Soft Bowel Movements"},{"text":"Progressing Contractions (Longer, Stronger, Closer Together)"},{"text":"Rupture of Membranes (Gush of Fluid)"},{"text":"Leaking Fluid"},{"text":"Cramping"},{"text":"Nausea"}]}]')},63:function(e){e.exports=JSON.parse('[{"name":"birthplan","title":"Birth Plan","cardBackgroundColor":"#78d0bb","cards":[{"frontText":"Additional Labor Support: Doula, friend or family","backText":"Partner as only support person"},{"frontText":"Stay at home as long as possible","backText":"Go to birthplace as soon as labor begins"},{"frontText":"No food during labor","backText":"Eat in labor, if desired"},{"frontText":"Go to bathroom to urinate as needed","backText":"Bladder catheter"},{"frontText":"No pain medication","backText":"Epidural"},{"frontText":"Breasteeding started in first hour","backText":"Feeding started after birthing person rests"},{"frontText":"Labor medically induced","backText":"Labor begins on its own"},{"frontText":"Routine IV or hydration","backText":"Drink fluids when needed"},{"frontText":"Spontaneous pushing with urge to push","backText":"Directed pushing"},{"frontText":"Vaginal Birth","backText":"Cesarean Birth"},{"frontText":"Baby cleaned up before skin to skin","backText":"Skin to skin immediately after birth"},{"frontText":"Push in positions that feel best","backText":"Push in semi-sititng or side-lying only"},{"frontText":"Continuous monitoring with EFM","backText":"Occasional monitoring (with Doppler or EFM)"},{"frontText":"Upright, moving, walking, dancing","backText":"Stay in bed through labor"},{"frontText":"Breaking bag of water or Pitocin to speed labor","backText":"No medical methods to speed labor"},{"frontText":"Bath, Shower, Soothing environment to encourage endorphins","backText":"IV Narcotics"}]}]')},64:function(e){e.exports=JSON.parse('[{"name":"newbornconcerns","title":"Newborn Concerns","cardColorOne":"#ffffff","cardColorTwo":"#F9928F","cardColorThree":"#C5E0B3","cards":[{"text":"Cone-Shaped Head"},{"text":"Soft Spots on Head"},{"text":"Spitting up that baby doesn\'t mind"},{"text":"Not feeding well because very sleepy"},{"text":"Peeling skin"},{"text":"Umbilical cord has pus, foul smell"},{"text":"Black sticky bowel movement"},{"text":"Vaginal discharge"},{"text":"Umbilical cord dries up and falls off"},{"text":"Circumcised penis has some discharge"},{"text":"Listless, weak or changes in behavior"},{"text":"Bluish-green or gray mark"},{"text":"Stool that contains blood or mucus"},{"text":"Serious difficulty breathing"},{"text":"White substance on skin after birth"},{"text":"Tiny white bumps on face"},{"text":"Throws out arms and legs at loud noise"},{"text":"Forceful vomiting"},{"text":"Rash or red spotches on skin"},{"text":"Loose, yellow seedy poop after day 5"},{"text":"Snorts, pants, groans in sleep"},{"text":"Flaking skin on scalp"},{"text":"Patches of deep pink skin"},{"text":"Blue color of lips, tongue, mouth"},{"text":"Purple or blue hands and feet"},{"text":"No bowel movement in 24 hour period"},{"text":"Swelling in genital area"},{"text":"Fewer than 6 wet diapers per day by day 5"},{"text":"Skin or whites of eyes look yellow"},{"text":"You feel something is \\"off\\""},{"text":"Hiccups frequently after feedings"},{"text":"Fever or seems ill"},{"text":"Soft downy hair covering body"},{"text":"Difficulty latching on the breast"},{"text":"Underarm temperature of 99\xb0 or higher"},{"text":"Some periods of irregular breathing"}]}]')},69:function(e,t,n){e.exports=n(83)},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(44),i=n.n(o),l=n(6),c=n(93),s=n(94),u=n(1),f={global:{colors:{MebsDarkBlue:"#78d0bb",MebsLightBlue:"#9befdb",MebsDarkYellow:"#f2dd8c",MebsLightYellow:"#f6e6ab",MebsDarkGray:"#737373",MebsLightGray:"#cbcdca"},font:{family:"Helvetica",size:"14px",height:"20px"},breakpoints:{xsmall:{value:650},small:{value:950},medium:{value:1300},large:{value:1600},xlarge:{value:3e3}}}};var d,m=n(28),g=n(13),p=n(91),b=n(95),h=n(96),x=n(92),k=n(66),y=n(17),v=n(18);!function(e){e[e.List=0]="List",e[e.Categories=1]="Categories"}(d||(d={}));var w=function(){function e(){Object(y.a)(this,e),this.stateMap=new Map}return Object(v.a)(e,[{key:"getState",value:function(e){if(this.stateMap.has(e.name))return this.stateMap.get(e.name);var t={cards:e.cards.map((function(e){return{id:e.text,type:"card",location:d.List}})),categories:e.categories};return this.stateMap.set(e.name,t),t}}],[{key:"Instance",get:function(){return e.instance}}]),e}();function E(){var e=Object(l.a)(["\n  padding-left:15px;\n  padding-right:15px;\n"]);return E=function(){return e},e}function O(){var e=Object(l.a)(["\ndisplay:block;\nposition: relative;\nwidth: 100%;\nheight: 100%;\n"]);return O=function(){return e},e}function C(){var e=Object(l.a)(["\nbackground-color: lightblue;\nborder: 1px solid #000;\npadding:5px;\ncursor: move;\ndisplay: inline-block;\nborder-radius:10px;"]);return C=function(){return e},e}w.instance=new w;var T=Object(u.default)(c.a)(C()),j=function(e){var t=Object(b.a)({item:e.card,collect:function(e){return{isDragging:e.isDragging(),isDropped:e.didDrop(),opacity:e.isDragging()?.4:1}}}),n=Object(g.a)(t,2),a=n[0],o=a.opacity,i=a.isDragging,l=a.isDropped,c=n[1],s=r.a.useContext(p.a),u="inherit";if("small"===s?u="11px":"xsmall"===s&&(u="9px"),i||l||e.location!==e.card.location)return r.a.createElement("div",null);var f={opacity:o,fontSize:u,top:e.card.top,left:e.card.left,position:e.card.left?"absolute":"static"};return e.config.cardBackgroundColor&&(f.backgroundColor=e.config.cardBackgroundColor),r.a.createElement(T,{style:f,ref:c,align:"center",elevation:"small",hoverIndicator:!0},r.a.createElement("h3",null,e.card.id))},S=function(e){var t=e.cards.map((function(t){return r.a.createElement(j,{key:t.id,card:t,config:e.config,location:d.List})}));return r.a.createElement(c.a,{height:"40%",direction:"row",align:"center",gap:"medium",justify:"center",wrap:!0,margin:{bottom:"70px"}},t)},B=u.default.div(O()),M=function(e){var t=r.a.useRef(null),n=Object(a.useState)(e.cards.filter((function(e){return e.location===d.Categories}))),o=Object(g.a)(n,2),i=o[0],l=o[1],s=Object(h.a)({accept:"card",collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}},hover:function(e,t){var n=t.getClientOffset();n&&console.log("x:".concat(n.x,", y:").concat(n.y,")"))},drop:function(e,n){e.location=d.Categories;var a=n.getClientOffset();null!==a&&t.current&&(e.left=a.x-t.current.offsetLeft,e.top=a.y-t.current.offsetTop,function(e){var t=i.filter((function(t){return t.id===e.id}));if(null!=t&&t.length>0){var n=t[0];n.left=e.left,n.top=e.top}else i.push(e);l(i)}(e))}}),u=Object(g.a)(s,2),f=u[0],m=f.canDrop,p=f.isOver,b=u[1],x="transparent";m&&p?x="#ccc":m&&(x="#ddd");var k=i.map((function(t){return r.a.createElement(j,{key:t.id,card:t,location:d.Categories,config:e.config})}));return r.a.createElement(c.a,{style:{backgroundColor:x},fill:!0,ref:t},r.a.createElement(B,{ref:b},r.a.createElement(D,e),k))},D=function(e){var t=e.categories.map((function(e){return r.a.createElement(c.a,{key:e.title,width:"33%"},r.a.createElement("h1",null,e.title),r.a.createElement("span",null,e.description))}));return r.a.createElement(c.a,{height:"auto",direction:"row",align:"stretch",gap:"large"},t)},F=Object(u.default)(c.a)(E()),L=function(e){var t=e.store.getState(e.configuration);return r.a.createElement(x.a,{backend:k.a},r.a.createElement(F,{direction:"column",align:"center",fill:!0},r.a.createElement("h1",null,e.configuration.title),r.a.createElement(S,{cards:t.cards,categories:t.categories,config:e.configuration}),r.a.createElement(M,{cards:t.cards,categories:t.categories,config:e.configuration})))},I=n(14),N=n(29),P=function(){function e(){Object(y.a)(this,e),this.stateMap=new Map}return Object(v.a)(e,[{key:"getState",value:function(e){if(this.stateMap.has(e.name))return this.stateMap.get(e.name);var t={cards:e.cards.map((function(e){return Object(N.a)({},e)}))};return this.stateMap.set(e.name,t),t}}],[{key:"Instance",get:function(){return e.instance}}]),e}();P.instance=new P;var z=n(97),G=n(61),R=n.n(G);function H(){var e=Object(l.a)(["\nwidth:100%;"]);return H=function(){return e},e}function J(){var e=Object(l.a)(["\nbackground-color: ",";\nborder: 1px solid #000;\nborder-radius:40px;\ntext-align: center;\ncolor: white;"]);return J=function(){return e},e}function U(){var e=Object(l.a)(["\nbackground-color: ",";\nborder: 1px solid #000;\nborder-radius:40px;\ntext-align: center;\ncolor: black;"]);return U=function(){return e},e}var V=u.default.div(U(),(function(e){return e.theme.global.colors.MebsDarkBlue})),W=u.default.div(J(),(function(e){return e.theme.global.colors.MebsDarkGray})),Y=u.default.h1(H());function q(e){var t={borderRadius:"3px",padding:"15px",width:"250px",height:"150px",alignItems:"center",display:"flex",lineHeight:"normal"},n=Object(a.useState)(e.isFlipped),o=Object(g.a)(n,2),i=o[0],l=o[1],c=function(t){l(t),e.onFlip&&e.onFlip(t)};return r.a.createElement(R.a,{isFlipped:i,flipDirection:"horizontal",containerStyle:{width:"250px",height:"150px"}},r.a.createElement(V,{onClick:function(){return c(!i)},style:t},r.a.createElement(Y,null,e.frontText)),r.a.createElement(W,{onClick:function(){return c(!i)},style:t},r.a.createElement(Y,null,e.backText)))}var A={xsmall:["auto"],small:["auto","auto"],medium:["auto","auto","auto"],large:["auto","auto","auto","auto"],xlarge:["auto","auto","auto","auto"]},$={small:["xsmall","xsmall","xsmall"],medium:["xsmall","xsmall"],large:["xsmall"],xlarge:["xsmall"]},K=function(e){var t=e.size,n=null;A&&A[t]&&(n=A[t]);var a=null;return $&&$[t]&&(a=$[t]),r.a.createElement(z.a,Object.assign({justifyContent:"center",alignContent:"stretch",align:"center",justify:"center",margin:"0",rows:a||t,columns:n||t},e),e.children)},Q=function(e){var t=r.a.useContext(p.a),n=e.store.getState(e.configuration).cards.map((function(e){return r.a.createElement(q,{key:e.frontText,isFlipped:e.isFlipped,frontText:e.frontText,backText:e.backText,onFlip:function(t){e.isFlipped=t}})}));return r.a.createElement(c.a,null,r.a.createElement(K,{size:t,fill:!0,gap:"large",margin:"medium",rows:"200px"},n))},X=n(62),Z=n(63),_=n(64),ee=function(){function e(){Object(y.a)(this,e),this.stateMap=new Map}return Object(v.a)(e,[{key:"getState",value:function(e){if(this.stateMap.has(e.name))return this.stateMap.get(e.name);var t={cards:e.cards.map((function(e){return Object(N.a)({},e)}))};return this.stateMap.set(e.name,t),t}}],[{key:"Instance",get:function(){return e.instance}}]),e}();function te(){var e=Object(l.a)(["\nbackground-color: ",";\nborder: 0.5px solid #000;\nborder-radius:0;\ntext-align: center;\npadding: 15px;\nwidth: 200px;\nheight: 70px;\nalign-items: center;\ndisplay: flex;\nline-height: normal;\nfont-size: 1.1rem;\njustify-content: center;    \n-webkit-touch-callout: none;\n-webkit-user-select: none;\n-khtml-user-select: none;\n-moz-user-select: none;\n-ms-user-select: none;\nuser-select: none;\ncolor: black;"]);return te=function(){return e},e}ee.instance=new ee;var ne={xsmall:["auto"],small:["auto","auto"],medium:["auto","auto","auto"],large:["auto","auto","auto","auto","auto","auto"],xlarge:["auto","auto","auto","auto","auto","auto"]},ae={small:["xsmall","xsmall","xsmall"],medium:["xsmall","xsmall"],large:["xsmall"],xlarge:["xsmall"]},re=function(e){var t=e.size,n=null;ne&&ne[t]&&(n=ne[t]);var a=null;return ae&&ae[t]&&(a=ae[t]),r.a.createElement(z.a,Object.assign({justifyContent:"center",alignContent:"stretch",align:"center",justify:"center",style:{backgroundColor:"#000",padding:"1px"},rows:a||t,columns:n||t},e),e.children)},oe=function(e){var t=e.store.getState(e.configuration),n=r.a.useContext(p.a),a=t.cards.map((function(t){return r.a.createElement(le,{key:t.text,text:t.text,isConcern:t.state,config:e.configuration,onChange:function(e){t.state=e}})}));return r.a.createElement(c.a,null,r.a.createElement(re,{size:n,fill:!0,gap:"0px",margin:"0px",rows:"auto"},a))},ie=u.default.div(te(),(function(e){return e.backgroundColor||"white"})),le=function(e){var t=Object(a.useState)(e.isConcern),n=Object(g.a)(t,2),o=n[0],i=n[1],l=e.config.cardColorOne;return!0===o?l=e.config.cardColorTwo:!1===o&&(l=e.config.cardColorThree),r.a.createElement(ie,{key:e.text,backgroundColor:l,onClick:function(){var t=!1;i(t=null!==o&&void 0!==o&&!1===o),e.onChange&&e.onChange(t)}},r.a.createElement("span",null,e.text))};function ce(){var e=Object(l.a)(["\n  font-weight: bold;\n  text-decoration: none;\n  font-size: 17px;\n  color: ",";\n  &:active, &:visited {\n    color: ",";\n    border: none;\n  }\n  &:hover {\n    color: ",";\n  }\n"]);return ce=function(){return e},e}function se(){var e=Object(l.a)(["\n    width:500px;\n"]);return se=function(){return e},e}function ue(){var e=Object(l.a)(["\n"]);return ue=function(){return e},e}var fe=Object(u.default)(c.a)(ue()),de=Object(u.default)(c.a)(se()),me=Object(u.default)(m.b)(ce(),(function(e){return e.theme.global.colors["neutral-3"]}),(function(e){return e.theme.global.colors["neutral-3"]}),(function(e){return e.theme.global.colors["neutral-4"]})),ge=function(){var e=Object(I.f)(),t=e.path,n=e.url,a=pe(t,n),o=be(t,n),i=he(t,n);return r.a.createElement(fe,{fill:!0,flex:!0,align:"center"},r.a.createElement(I.c,null,o.routes,a.routes,i.routes,r.a.createElement(I.a,{path:"/"},r.a.createElement("h1",null,"Directory of Tools"),o.section,a.section,i.section)))},pe=function(e,t){var n=X;if(!n||n.length<=0)return{};var a=n.map((function(t){return r.a.createElement(I.a,{key:t.name,path:"".concat(e).concat(t.name)},r.a.createElement(L,{configuration:t,store:w.Instance}))})),o=n.map((function(e){return r.a.createElement("li",{style:{marginBottom:"8px"},key:e.name},r.a.createElement(me,{key:e.name,to:"".concat(t).concat(e.name)},e.title))}));return{routes:a,section:r.a.createElement(de,null,r.a.createElement("h2",null,"Card Sorts"),r.a.createElement("ul",null,o))}},be=function(e,t){var n=Z;if(!n||n.length<=0)return{};var a=n.map((function(t){return r.a.createElement(I.a,{key:t.name,path:"".concat(e).concat(t.name)},r.a.createElement(Q,{configuration:t,store:P.Instance}))})),o=n.map((function(e){return r.a.createElement("li",{style:{marginBottom:"8px"},key:e.name},r.a.createElement(me,{key:e.name,to:"".concat(t).concat(e.name)},e.title))}));return{routes:a,section:r.a.createElement(de,null,r.a.createElement("h2",null,"Flip Boards"),r.a.createElement("ul",null,o))}},he=function(e,t){var n=_;if(!n||n.length<=0)return{};var a=n.map((function(t){return r.a.createElement(I.a,{key:t.name,path:"".concat(e).concat(t.name)},r.a.createElement(oe,{configuration:t,store:ee.Instance}))})),o=n.map((function(e){return r.a.createElement("li",{style:{marginBottom:"8px"},key:e.name},r.a.createElement(me,{key:e.name,to:"".concat(t).concat(e.name)},e.title))}));return{routes:a,section:r.a.createElement(de,null,r.a.createElement("h2",null,"Color Boards"),r.a.createElement("ul",null,o))}};function xe(){var e=Object(l.a)(["\n  margin-bottom: 10px;\n  margin-top: 0;\n  margin-left:0;\n  margin-right:0;\n  padding-top: 10px;\n"]);return xe=function(){return e},e}var ke=Object(u.default)(c.a)(xe()),ye=function(){return r.a.createElement(m.a,{basename:(e=window.location.pathname,e.substr(0,e.lastIndexOf("/")))},r.a.createElement(s.a,{theme:f,full:!0},r.a.createElement(c.a,{fill:!0},r.a.createElement(ke,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},r.a.createElement(c.a,{flex:!0,align:"center",justify:"center"},r.a.createElement(ge,null))))));var e};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.8550d439.chunk.js.map