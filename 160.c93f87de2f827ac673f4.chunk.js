(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[160],{89160:(e,t,r)=>{"use strict";r.r(t),r.d(t,{HomeContainer:()=>re,HomeContainerTest:()=>ie,default:()=>ae});r(98620);var n,o=r(10149),a=(r(89626),r(70302)),i=(r(89858),r(51024)),u=r(67294),l=(r(45697),r(37424)),c=r(22222),s=r(35281),f=r(27361),d=r.n(f),p=r(23279),m=r.n(p),h=r(41609),v=r.n(h),y=r(71893),b=r(97132),g=r(39711),C=r(22496);function x(e,t,r,o){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&a)for(var c in a)void 0===t[c]&&(t[c]=a[c]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var w=y.ZP.div.withConfig({displayName:"Clickable__StyledClickable",componentId:"sc-19lp5om-0"})(["color:#1890ff;&:hover{cursor:pointer;}"]);const _=function(e){var t=e.onClick,r=e.textId;return x(w,{"data-testid":"clickable",onClick:t},void 0,r&&x(C.Z,{id:r}))};var S=r(5276),k=r(84060),R=function(e){return e.homeContainer||k.E3},I=function(){return(0,c.P1)(R,(function(e){return e}))};var Z=r(73375),G=r(4120),P=r(11865),E=r.n(P),N=r(68929),j=r.n(N);r(13311),r(43618);function A(e){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var T,H,U=function e(t,r){return Array.isArray(t)?t.map((function(t){return e(t,r)})):"object"===A(t)?Object.keys(t).reduce((function(n,o){var a=r(o),i=t[o];return n[a]=null!==i&&"object"===A(i)?e(i,r):i,n}),{}):t},$={github:null,default:null},q=function(e){var t=(0,G.Ue)({baseURL:e,headers:{"Content-Type":"application/json"}});return t.addResponseTransform((function(e){var t=e.ok,r=e.data;return t&&r&&(e.data=U(r,(function(e){return j()(e)}))),e})),t.addRequestTransform((function(e){var t=e.data;return t&&(e.data=U(t,(function(e){return E()(e)}))),e})),t},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"github";switch(e){case"github":return $[e]=q("https://api.github.com/"),$[e];default:return $.default=q("https://api.github.com/"),$.default}}("github"),B=function(e){return O.get("/search/repositories?q=".concat(e))},D=regeneratorRuntime.mark(V),M=regeneratorRuntime.mark(W),z=k.Wj.REQUEST_GET_GITHUB_REPOS,L=k.xI.successGetGithubRepos,Q=k.xI.failureGetGithubRepos;function V(e){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,Z.call)(B,e.repoName);case 2:if(t=n.sent,r=t.data,!t.ok){n.next=9;break}return n.next=7,(0,Z.put)(L(r));case 7:n.next=11;break;case 9:return n.next=11,(0,Z.put)(Q(r));case 11:case"end":return n.stop()}}),D)}function W(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.takeLatest)(z,V);case 2:case"end":return e.stop()}}),M)}function F(e,t,r,n){H||(H="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=n;else if(a>1){for(var i=new Array(a),u=0;u<a;u++)i[u]=arguments[u+3];t.children=i}if(t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});return{$$typeof:H,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return K(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var X=i.Z.Search,Y=(0,y.ZP)(a.Z).withConfig({displayName:"HomeContainer__CustomCard",componentId:"l0s8pp-0"})(["&&{margin:20px 0;max-width:",";color:",";",";}"],(function(e){return e.maxwidth}),(function(e){return e.color}),(function(e){return e.color&&"color: ".concat(e.color)})),ee=y.ZP.div.withConfig({displayName:"HomeContainer__Container",componentId:"l0s8pp-1"})(["&&{display:flex;flex-direction:column;max-width:","px;width:100%;margin:0 auto;padding:","px;}"],(function(e){return e.maxwidth}),(function(e){return e.padding})),te=y.ZP.div.withConfig({displayName:"HomeContainer__RightContent",componentId:"l0s8pp-2"})(["display:flex;align-self:flex-end;"]);function re(e){var t=e.dispatchGithubRepos,r=e.dispatchClearGithubRepos,n=e.intl,a=e.reposData,i=void 0===a?{}:a,l=e.reposError,c=void 0===l?null:l,s=e.repoName,f=e.maxwidth,p=e.padding,h=J((0,u.useState)(!1),2),y=h[0],b=h[1];(0,u.useEffect)((function(){var e=d()(i,"items",null)||c;y&&e&&b(!1)}),[i]),(0,u.useEffect)((function(){var e;!s||null!==i&&void 0!==i&&null!==(e=i.items)&&void 0!==e&&e.length||(t(s),b(!0))}),[]);var x,w,S,k=(0,g.useHistory)(),R=m()((function(e){v()(e)?r():(t(e),b(!0))}),200);return F(ee,{maxwidth:f,padding:p},void 0,F(te,{},void 0,F(_,{textId:"stories",onClick:function(){k.push("stories"),window.location.reload()}})),F(Y,{title:n.formatMessage({id:"repo_search"}),maxwidth:f},void 0,T||(T=F(C.Z,{marginBottom:10,id:"get_repo_details"})),F(X,{"data-testid":"search-bar",defaultValue:s,type:"text",onChange:function(e){return R(e.target.value)},onSearch:function(e){return R(e)}})),(w=d()(i,"items",[]),S=d()(i,"totalCount",0),(0!==w.length||y)&&F(Y,{},void 0,F(o.Z,{loading:y,active:!0},void 0,s&&F("div",{},void 0,F(C.Z,{id:"search_query",values:{repoName:s}})),0!==S&&F("div",{},void 0,F(C.Z,{id:"matching_repos",values:{totalCount:S}})),w.map((function(e,t){return F(Y,{},t,F(C.Z,{id:"repository_name",values:{name:e.name}}),F(C.Z,{id:"repository_full_name",values:{fullName:e.fullName}}),F(C.Z,{id:"repository_stars",values:{stars:e.stargazersCount}}))}))))),(c?x=c:d()(i,"totalCount",0)||(x="respo_search_default"),!y&&x&&F(Y,{color:c?"red":"grey",title:n.formatMessage({id:"repo_list"})},void 0,F(C.Z,{id:x}))))}re.defaultProps={maxwidth:500,padding:20};var ne=(0,c.zB)({homeContainer:I(),reposData:(0,c.P1)(R,(function(e){return d()(e,"reposData",null)})),reposError:(0,c.P1)(R,(function(e){return d()(e,"reposError",null)})),repoName:(0,c.P1)(R,(function(e){return d()(e,"repoName",null)}))});var oe=(0,l.connect)(ne,(function(e){var t=k.xI.requestGetGithubRepos,r=k.xI.clearGithubRepos;return{dispatchGithubRepos:function(r){return e(t(r))},dispatchClearGithubRepos:function(){return e(r())}}}));const ae=(0,s.compose)(b.injectIntl,oe,u.memo,(0,S.y3)({key:"homeContainer",saga:W}))(re);var ie=(0,s.compose)(b.injectIntl)(re)}}]);