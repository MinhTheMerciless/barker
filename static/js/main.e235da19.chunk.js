(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{1679:function(e,t,a){var n={"./ReadMe.md":1680,"./af_ZA":126,"./af_ZA.js":126,"./ar":127,"./ar.js":127,"./az":128,"./az.js":128,"./cz":129,"./cz.js":129,"./de":130,"./de.js":130,"./de_AT":131,"./de_AT.js":131,"./de_CH":132,"./de_CH.js":132,"./el":133,"./el.js":133,"./en":134,"./en.js":134,"./en_AU":135,"./en_AU.js":135,"./en_AU_ocker":136,"./en_AU_ocker.js":136,"./en_BORK":137,"./en_BORK.js":137,"./en_CA":138,"./en_CA.js":138,"./en_GB":139,"./en_GB.js":139,"./en_GH":140,"./en_GH.js":140,"./en_IE":141,"./en_IE.js":141,"./en_IND":142,"./en_IND.js":142,"./en_NG":143,"./en_NG.js":143,"./en_US":144,"./en_US.js":144,"./en_ZA":145,"./en_ZA.js":145,"./es":146,"./es.js":146,"./es_MX":147,"./es_MX.js":147,"./fa":148,"./fa.js":148,"./fi":149,"./fi.js":149,"./fr":150,"./fr.js":150,"./fr_CA":151,"./fr_CA.js":151,"./fr_CH":152,"./fr_CH.js":152,"./ge":153,"./ge.js":153,"./hr":154,"./hr.js":154,"./hy":155,"./hy.js":155,"./id_ID":156,"./id_ID.js":156,"./it":157,"./it.js":157,"./ja":158,"./ja.js":158,"./ko":159,"./ko.js":159,"./nb_NO":160,"./nb_NO.js":160,"./ne":161,"./ne.js":161,"./nl":162,"./nl.js":162,"./nl_BE":163,"./nl_BE.js":163,"./pl":164,"./pl.js":164,"./pt_BR":165,"./pt_BR.js":165,"./pt_PT":166,"./pt_PT.js":166,"./ro":167,"./ro.js":167,"./ru":168,"./ru.js":168,"./sk":169,"./sk.js":169,"./sv":170,"./sv.js":170,"./tr":171,"./tr.js":171,"./uk":172,"./uk.js":172,"./vi":173,"./vi.js":173,"./zh_CN":174,"./zh_CN.js":174,"./zh_TW":175,"./zh_TW.js":175,"./zu_ZA":176,"./zu_ZA.js":176};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=1679},1830:function(e,t,a){},1831:function(e,t,a){},1832:function(e,t,a){},1833:function(e,t,a){},1834:function(e,t,a){},1835:function(e,t,a){},1836:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),s=a.n(r),o=(a(215),a(13)),c=a(14),l=a(17),u=a(16),d={API_URL:"/api/",GET_WHOLE_TWEET_URL:"/api/wholePost/",GET_POST_FROM_ID:"/api/getPostFromID/",GET_VIEWERS_URL:"/api/viewers/",GET_IDs_FROM_VIEWER_URL:"/api/ViewerToId/",GET_ARTICLE_FROM_ID_URL:"/api/article/"};a(216),a(217);var m=function(e){var t=e.active,a=e.text,n=e.Icon,r=e.onClick;return i.a.createElement("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active"),onClick:r},i.a.createElement(n,null),i.a.createElement("h2",{className:"text"},a))},h=a(1878),p=a(1880),f=a(1881),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"shouldComponentUpdate",value:function(e){return e.anchorEl!==this.props.anchorEl}},{key:"render",value:function(){var e=this,t=this.props.viewerObj,a=t.list,n=(t.num,t.setNum);return i.a.createElement(h.a,{id:"viewers-menu",anchorEl:this.props.anchorEl,open:Boolean(this.props.anchorEl),disableEnforceFocus:!0,onClose:function(){return e.props.setAnchorEl(!1)}},a.map((function(t,a){return i.a.createElement(p.a,{key:a,onClick:function(){n(a),e.props.setAnchorEl(!1)}},i.a.createElement("div",{class:"viewerOptionAvatarDiv",style:{padding:"5px"}},i.a.createElement(f.a,{src:"/api/img/Website/"+String(Math.round(1e3*Math.random()))})),i.a.createElement("div",{class:"viewerOptionText"},t))})))}}]),a}(i.a.Component),E=a(195),g=a.n(E),_=a(60),w=a.n(_),j=a(49),b=a.n(j),k=a(50),y=a.n(k),C=a(1875),N=a(192),O=a.n(N),S=a(62);function L(e){for(var t=e.split(""),a=[],n=t.length,i=0;i<n;i++){var r=Math.floor(Math.random()*t.length);a.push(t[r]),t.splice(r,1)}return a.join("")}function x(){var e=Object(S.a)().schema("item",{date:{faker:"date.past"}},1).buildSync().item[0].date;return console.log("Generated fake date: "+String(e)),e}function I(){return Object(S.a)().schema("user",{firstName:{faker:"name.firstName"},lastName:{faker:"name.lastName"},username:{function:function(){return this.object.firstName+this.object.lastName}},displayName:{function:function(){return this.object.firstName+" "+this.object.lastName}}},1).buildSync().user[0]}var T=a(194),A=a.n(T),R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClick=function(e){e.preventDefault(),n.setState({anchorEl:!Boolean(n.state.anchorEl)&&e.currentTarget})},n.state={anchorEl:!1},n}return Object(c.a)(a,[{key:"bark",value:function(){document.getElementsByClassName("bark-sound")[0].play()}},{key:"render",value:function(){return i.a.createElement("div",{className:"sidebar"},i.a.createElement("img",{className:"sidebar__twitterIcon",src:O.a,alt:"Barker Icon"}),i.a.createElement(m,{active:!0,Icon:g.a,text:L("Home")}),i.a.createElement(m,{Icon:w.a,text:"Explore"}),i.a.createElement(m,{Icon:b.a,text:"Profile",onClick:this.props.switchClick}),i.a.createElement(m,{Icon:y.a,text:"More",onClick:function(){return window.open("https://github.com/LeoLinRui/SSTP/wiki","_blank")}}),i.a.createElement(C.a,{variant:"outlined",className:"sidebar__tweet",onClick:this.bark},"Bark"),i.a.createElement("audio",{className:"bark-sound"},i.a.createElement("source",{src:A.a})))}}]),a}(i.a.Component),D=a(20),M=a.n(D),U=a(46),W=a(61),z=a.n(W),G=a(196),P=a.n(G),B=a(197),H=a.n(B),F=(a(1830),a(1876)),Z=a(1877),V=a(198),q=a.n(V),X=a(199),J=a.n(X),K=a(200),$=a.n(K),Q=a(202),Y=a.n(Q),ee=a(201),te=a.n(ee),ae=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isFlipped:!1,isPaused:!1,blurb:"",liked:!1},n.handleClick=n.handleClick.bind(Object(U.a)(n)),n}return Object(c.a)(a,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){var e,t,a,n=this,r=String(this.props.media);if(a=""===this.props.explanation||void 0===this.props.explanation?"This Bark current does not have an explanation":this.props.explanation.replace(/(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))(">(.*)<\/a>)?/gi,(function(){return'<a href="'+arguments[2]+'" target="_blank">'+(arguments[7]||arguments[2])+"</a>"})),t=this.props.text.replace(/(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))(">(.*)<\/a>)?/gi,(function(){return'<a href="'+arguments[2]+'"target="_blank">'+(arguments[7]||arguments[2])+"</a>"})),r.startsWith("news:")){var s=[window.location.origin,"news",r.substring(5)].join("/");e=i.a.createElement("a",{className:"news__a",href:s,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(F.a,{className:"news__card",style:{paddingRight:"20px"}},i.a.createElement(Z.a,{image:this.props.img}),i.a.createElement("div",{className:"cardTextDiv"},this.props.text.split(" ").slice(0,20).join(" ")+"..."))),t=(t=this.props.text).substring(0,t.length-3)}else if(z.a.canPlay(r))e=i.a.createElement(H.a,{onChange:this.visibilityChange},(function(e){var t,a,s=e.isVisible;return window.innerWidth<420?(a="auto",t="70vw"):window.innerWidth<1024?(a="20vw",t="35vw"):(a="40vh",t="90%"),i.a.createElement("div",{className:"player-wrapper"},i.a.createElement(z.a,{height:a,width:t,url:r,loop:!0,muted:!0,playing:s&&!n.state.isPaused,onClick:function(){return n.setState({isPaused:!0})},config:{youtube:{playerVars:{controls:1,disablekb:1,modestbranding:1,rel:0,color:"white"}}}},i.a.createElement("div",null)))})),console.log("play!");else if(""===r||null==r){var o=this.props.img;e=o?i.a.createElement("img",{src:o}):i.a.createElement("div",null)}else e=i.a.createElement("img",{src:r,alt:""});var c=i.a.createElement(P.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical"},i.a.createElement("p",{className:"text",dangerouslySetInnerHTML:{__html:t}}),i.a.createElement("p",{className:"text",dangerouslySetInnerHTML:{__html:a}}));return i.a.createElement("div",{className:"post"},i.a.createElement("div",{className:"post__avatar"},i.a.createElement(f.a,{src:this.props.avatar})),i.a.createElement("div",{className:"post__body"},i.a.createElement("div",{className:"post__header"},i.a.createElement("div",{className:"post__headerText"},i.a.createElement("h3",{onClick:this.handleClick},this.props.displayName," ",i.a.createElement("span",{className:"post__headerSpecial"},this.props.verified&&i.a.createElement(q.a,{className:"post__badge"})," @",this.props.username))),i.a.createElement("div",{className:"post__headerDescription"},c)),e,i.a.createElement("div",{className:"post__footer"},i.a.createElement(J.a,{fontSize:"small"}),i.a.createElement($.a,{fontSize:"small"}),i.a.createElement("a",{style:{display:"block",cursor:"pointer"},onClick:function(){return n.setState({liked:!n.state.liked})}},this.state.liked?i.a.createElement(te.a,{fontSize:"small",style:{color:"rgb(224, 36, 94)"}}):i.a.createElement(Y.a,{fontSize:"small"})))))}}]),a}(i.a.Component),ne=(a(1831),a(51)),ie=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addPost=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=function(e){n.setState({loading:!0});var t=n.state.idList.splice(Math.floor(Math.random()*n.state.idList.length),1),a=d.GET_WHOLE_TWEET_URL+t+"/";M.a.get(a).then((function(e){n.setState({loading:!0});var a=e.data;if(a.username.startsWith("random:")){var i=I();a.username=i.username,a.displayName=i.displayName}a.media.startsWith("api:")&&(M.a.get(a.media.substring(4)).then((function(e){return a.media=e.data})).catch((function(e){return console.log(e+"\u2014retrieving from "+a.media.substring(4))})),a.media="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"),a.text.startsWith("[repeat]")&&(a.text=a.text.substring(8),n.state.idList.push(t)),null!==a.avatar&&""!==a.avatar||(a.avatar="/api/img/ProfilePic/"+String(Math.round(1e3*Math.random()))),n.setState({posts:n.state.posts.concat(a),loading:!1})})).catch((function(e){return"Error retrieving post: "+e})),n.setState({loading:!1})},a=0;a<e&&n.state.idList.length>0;a++)t(a)},n.handleScroll=function(e){e.preventDefault();var t=Math.round(e.target.scrollHeight-e.target.scrollTop);n.state.idList.length>0?t<=Math.ceil(e.target.clientHeight)+500&&(!0===n.state.loading?!1===n.state.queue&&(n.state.queue=!0):n.addPost(2)):console.log("Out of posts!")},n.moreClick=function(){console.log("Clicked moreClick"),window.open("https://github.com/LeoLinRui/SSTP/wiki","_blank")},n.profileClick=function(e){console.log("Clicked profileClick"),n.props.switchClick(e)},n.state={loading:!1,queue:!1,posts:[],idList:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.addPost(3)}},{key:"componentDidUpdate",value:function(e,t){!0===this.state.queue&&(this.addPost(),this.state.queue=!1),e.viewer!==this.props.viewer&&this.updateIdList()}},{key:"updateIdList",value:function(){var e=this;this.setState({posts:[],loading:!0});var t=this.props.viewer,a=d.GET_IDs_FROM_VIEWER_URL+t+"/";console.log("Getting IDs from: "+a),M.a.get(a).then((function(t){var a=t.data.tweetIds;e.setState({idList:a}),e.setState({loading:!1}),e.addPost(6)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=null;return e=window.innerWidth>420?i.a.createElement("h2",null,"Home"):i.a.createElement("h2",null,i.a.createElement("div",{className:"topIconDiv"},i.a.createElement(b.a,{classname:"topIcon",onClick:this.profileClick}),i.a.createElement(y.a,{classname:"topIcon",onClick:this.moreClick}))),i.a.createElement("div",{className:"feed",onScroll:this.handleScroll},i.a.createElement("div",{className:"feed__header"},e),i.a.createElement(ne.a,null,this.state.posts.map((function(e,t){return i.a.createElement(ae,{key:t,username:e.username,displayName:e.displayName,verified:e.verified,text:e.text,explanation:e.explanation,avatar:e.avatar,media:e.media,img:e.img})}))))}}]),a}(i.a.Component),re=(a(1832),a(1833),a(1879)),se=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={text:"",media_url:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=d.GET_WHOLE_TWEET_URL+this.props.id+"/";M.a.get(t).then((function(t){var a=t.data;e.setState({text:a.text.split(" ").splice(0,20).join(" "),media_url:a.media})}))}},{key:"render",value:function(){var e=[window.location.origin,"news",this.state.media_url.substring(5)].join("/");return i.a.createElement("a",{className:"newsCard__a",href:e,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(re.a,{body:!0,outline:!0,color:"primary",style:{padding:"20px",border:"0",borderTop:"1px solid rgb(235, 238, 240)",borderBottom:"1px solid rgb(235, 238, 240)"}},i.a.createElement("div",{className:"newsCardDiv"},this.state.text)))}}]),a}(i.a.Component),oe=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).updateIdList=function(){n.setState({idList:[],loading:!0});var e=n.props.viewer,t=d.GET_IDs_FROM_VIEWER_URL+e+"/";console.log("Getting news IDs from: "+t),M.a.get(t).then((function(e){var t=e.data.newsTweetIds;t=t.slice(0,t.length>6?6:t.length),console.log(t),n.setState({idList:t}),n.setState({loading:!1})})).catch((function(e){console.log(e)}))},n.state={idList:[],needUpdate:!0,loading:!1},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){e.viewer!==this.props.viewer&&this.updateIdList()}},{key:"componentDidMount",value:function(){this.updateIdList()}},{key:"render",value:function(){return i.a.createElement("div",{className:"widgets"},i.a.createElement("div",{className:"topTextContainer"},i.a.createElement("div",{className:"topTextContainer__div"},i.a.createElement("h2",{className:"topText"},"Latest News"),i.a.createElement("div",{className:"NewsCards",style:{paddingTop:"10px"}},i.a.createElement(ne.a,null,this.state.idList.map((function(e,t){return i.a.createElement(se,{id:e,key:t})})))))))}}]),a}(i.a.Component),ce=(a(1834),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={text:"",title:"",image_url:""},n}return Object(c.a)(a,[{key:"getArticle",value:function(){var e=this;console.log("Getting article "+this.props.id),M.a.get(d.GET_ARTICLE_FROM_ID_URL+this.props.id+"/").then((function(t){var a,n=t.data,i=n.text.replace(/(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))(">(.*)<\/a>)?/gi,(function(){return'<a href="'+arguments[2]+'"target="_blank style="cursor: pointer"">'+(arguments[7]||arguments[2])+"</a>"}));if(null===n.title||""===n.title){var r=[];String(n.text).split(" ").slice(0,6).forEach((function(e){r.push(L(e))})),a=r.join(" ").replace(".","")}else a=n.title;e.setState({title:a,text:i}),e.forceUpdate()})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getArticle()}},{key:"render",value:function(){return console.log("Article with id: "+this.props.id),i.a.createElement("html",{class:"wf-montserrat-n4-active wf-sourcesanspro-n2-active wf-active"},i.a.createElement("head",null,i.a.createElement("meta",{charset:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("script",{src:"http://use.edgefonts.net/montserrat:n4:default;source-sans-pro:n2:default.js",type:"text/javascript"})),i.a.createElement("body",{class:"mybody"},i.a.createElement("header",null,i.a.createElement("div",{class:"profileLogo",style:{height:"5vh"}},i.a.createElement("p",{class:"logoPlaceholder"},i.a.createElement("img",{src:"logoImage.png",alt:"logo"})))),i.a.createElement("section",{class:"mainContent"},i.a.createElement("section",{class:"section2"},i.a.createElement("article",{class:"section2Content"},i.a.createElement("h2",{class:"sectionContentTitle"},this.state.title),i.a.createElement("h3",{class:"sectionContentSubTitle"},x().toLocaleString()),i.a.createElement("hr",{class:"myhr"}),i.a.createElement("p",{class:"sectionContent",dangerouslySetInnerHTML:{__html:this.state.text}}))))))}}]),a}(i.a.Component)),le=(a(1835),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setViewer=function(e){window.scrollTo(0,0),n.setState({viewerNum:e},(function(){return n.forceUpdate()}))},n.switchClick=function(e){e.preventDefault(),n.setState({switcherAnchor:!Boolean(n.state.switcherAnchor)&&e.currentTarget},(function(){return console.log(n.state.switcherAnchor)}))},n.state={viewerNum:0,viewersList:[],switcherAnchor:!1,loaded:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;"/"===window.location.pathname&&M.a.get(d.GET_VIEWERS_URL).then((function(t){e.setState({viewersList:t.data},(function(){return e.setState({loaded:!0},(function(){e.forceUpdate(),console.log("Recieved users: "+e.state.viewersList)}))}))})).catch((function(e){return console.log("Error retrieving viewers list: "+e)}))}},{key:"shouldComponentUpdate",value:function(e,t){return t.viewerNum!==this.state.viewerNum&&console.log("Current viewerNum: "+String(this.state.viewerNum)),t.viewersList!==this.state.viewersList&&console.log("Current viewersList: "+String(this.state.viewersList)),!0}},{key:"render",value:function(){var e=this,t=window.location.pathname,a=null;if("/"===t){var n={list:this.state.viewersList,num:this.state.viewerNum,setNum:this.setViewer},r=String(this.state.viewersList[this.state.viewerNum]);a=i.a.createElement("div",{className:"app"},i.a.createElement(R,{switchClick:this.switchClick}),i.a.createElement(ie,{viewer:r,switchClick:this.switchClick}),i.a.createElement(oe,{viewer:r}),i.a.createElement(v,{anchorEl:this.state.switcherAnchor,setAnchorEl:function(t){e.setState({switcherAnchor:t})},viewerObj:n}))}if(t.startsWith("/news/")){var s=t.substr(6);s.endsWith("/")&&(s=s.substr(0,s.length-1)),a=i.a.createElement(ce,{id:s})}return null==a&&(a=i.a.createElement("div",{style:{fontSize:"xx-large"}},"Error 404: Not Found")),i.a.createElement("html",{lang:"en"},a)}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},192:function(e,t,a){e.exports=a.p+"static/media/BarkerLogo.fae0bab6.png"},194:function(e,t,a){e.exports=a.p+"static/media/dog.d3963826.mp3"},210:function(e,t,a){e.exports=a(1836)},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){}},[[210,14,15]]]);
//# sourceMappingURL=main.e235da19.chunk.js.map