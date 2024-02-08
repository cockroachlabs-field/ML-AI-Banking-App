"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[91936],{875666:e=>{var t={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"skipUnauthFragment"}],kind:"Fragment",metadata:null,name:"UnifiedPinRep_pin",selections:[{args:[{kind:"Variable",name:"skipUnauthFragment",variableName:"skipUnauthFragment"}],kind:"FragmentSpread",name:"PinRep_pin"}],type:"Pin",abstractKey:null};t.hash="ef57e3f96ab6a0ba7ea79d9d2bb3c326",e.exports=t},619937:(e,t,i)=>{i.d(t,{$N:()=>p,Cu:()=>T,GY:()=>d,MZ:()=>s,NR:()=>_,Vn:()=>u,bC:()=>h,fm:()=>r,kM:()=>n,q6:()=>a,qp:()=>l,uV:()=>E,ug:()=>c,xL:()=>o});let r={DOWNLOAD_TEMPLATE:"DOWNLOAD_TEMPLATE",UPLOAD_TEMPLATE:"UPLOAD_TEMPLATE",HISTORY:"HISTORY",RESOURCES:"RESOURCES"},a={GENERAL:"GENERAL",CAMPAIGNS:"CAMPAIGNS",AD_GROUPS:"AD_GROUPS",ADS:"ADS",KEYWORDS:"KEYWORDS",PRODUCT_GROUPS:"PRODUCT_GROUPS",ERROR_CODES:"ERROR_CODES"},n={BILLING_HISTORY:"BILLING_HISTORY",BILLING_FORMS:"BILLING_FORMS",ORDER_LINES:"ORDER_LINES",PROMOTIONS:"PROMOTIONS",TAX_DOCUMENTS:"TAX_DOCUMENTS",DOCUMENTS:"DOCUMENTS",PREPAID_CAMPAIGN_SPEND:"PREPAID_CAMPAIGN_SPEND_SUMMARY"},s={GOOGLE_TAG_MANAGER:"Google Tag Manager",SHOPIFY:"Shopify",WOO_COMMERCE:"WooCommerce",WORDPRESS:"WordPress",SQUARESPACE:"Squarespace",WEEBLY:"Weebly",TEALIUM:"Tealium",MAGENTO:"Magento",ECWID:"Ecwid",BIG_COMMERCE:"BigCommerce",PREMMERCE:"Premmerce",SEGMENT:"Segment",BRANCH:"Branch",HIGHTOUCH:"Hightouch",EULERIAN:"Eulerian",ADOBE_CDP:"Adobe Real-Time CDP",ADOBE_COMMERCE:"Adobe Commerce",SALESFORCE_COMMERCE_CLOUD:"Salesforce Commerce Cloud"},o={GTM:"GTM",SHOPIFY:"SHOPIFY",WORDPRESS:"WORDPRESS",WOOCOMMERCE:"WOOCOMMERCE",TEALIUM:"TEALIUM"},l={PINTEREST_TAG:"PINTEREST_TAG",PINTEREST_TAG_MANUAL_SETUP_FLOW:"PINTEREST_TAG_MANUAL_SETUP_FLOW",PINTEREST_TEST_EVENTS:"PINTEREST_TEST_EVENTS",PINTEREST_TAG_EVENTS:"PINTEREST_TAG_EVENTS",PINTEREST_TAG_HEALTH:"PINTEREST_TAG_HEALTH",CONVERSION_HEALTH:"CONVERSION_HEALTH",CONVERSION_UPLOAD:"CONVERSION_UPLOAD",UPLOAD_HISTORY:"UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD:"PCA_UPLOAD",CONVERSIONS_API:"CONVERSIONS_API",CONVERSIONS_API_ACCESS_TOKEN:"CONVERSIONS_API_ACCESS_TOKEN",CONVERSIONS_API_DEDUPLICATION:"CONVERSIONS_API_DEDUPLICATION",CONVERSIONS_API_PARTNER_SETUP_FLOW:"CONVERSIONS_API_PARTNER_SETUP_FLOW",CONVERSIONS_API_MANUAL_SETUP_FLOW:"CONVERSIONS_API_MANUAL_SETUP_FLOW",PINTEREST_EVENTS_OVERVIEW:"PINTEREST_EVENTS_OVERVIEW",PINTEREST_EVENT_HISTORY:"PINTEREST_EVENT_HISTORY",PAYLOAD_HELPER:"PAYLOAD_HELPER",CONVERSIONS:"CONVERSIONS",PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP:"PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP",PINTEREST_SETUP_API:"PINTEREST_SETUP_API"},d={PINTEREST_TAG_DASHBOARD:"PINTEREST_TAG_DASHBOARD",PINTEREST_TAG_LANDING:"PINTEREST_TAG_LANDING",PINTEREST_TAG_INSTRUCTIONS:"PINTEREST_TAG_INSTRUCTIONS",CONVERSION_UPLOAD_LANDING:"CONVERSION_UPLOAD_LANDING",CONVERSION_UPLOAD_VALIDATION:"CONVERSION_UPLOAD_VALIDATION",CONVERSION_UPLOAD_HISTORY:"CONVERSION_UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD_LANDING:"PCA_UPLOAD_LANDING",PCA_UPLOAD_VALIDATION:"PCA_UPLOAD_VALIDATION"},u={UNREAD:"UNREAD",READ:"READ",ACCEPTED:"ACCEPTED",REJECTED:"REJECTED",DISMISSED:"DISMISSED",INVALID:"INVALID",MUTED:"MUTED",SNOOZED:"SNOOZED",PMP_REPORTED:"PMP_REPORTED",EMAILED:"EMAILED",BULK_DOWNLOADED:"BULK_DOWNLOADED",FILTERED:"FILTERED",PUSHED:"PUSHED"},_={DESTINATION:"destination",EXPIRY:"expiry",SOURCE:"attributionsrc",SOURCE_EVENT_ID:"source_event_id",SOURCE_EVENT_TYPE:"source_event_type",PRIORITY:"priority",CLICK_PRIORITY:"2",VIEW_PRIORITY:"1",CAMPAIGN_ID:"campaign_id",ADVERTISER_ID:"advertiser_id"},E="604800",c="86400",p={ATTRIBUTION_SOURCE_ID:"attributionsourceid",ATTRIBUTE_DESTINATION:"attributiondestination",ATTRIBUTE_ON:"attributeon"},h="click",T="view"},337815:(e,t,i)=>{i.d(t,{YS:()=>s,eF:()=>o,m_:()=>n});var r=i(619937),a=i(67347);function n(e,t,i,a,n){let s=new URLSearchParams,o=null!=e?e:"0";return s.append(r.NR.SOURCE_EVENT_ID,o),s.append(r.NR.DESTINATION,function(e){let t;try{t=decodeURIComponent(e)}catch(i){t=e}t.startsWith("http")?t.startsWith("http://")&&(t=t.replace("http://","https://")):t="https://"+t;try{return new URL(t).origin}catch(r){let i=t.match(/^(https?:\/\/[^\/]+)(\/|$)/);if(i&&i.length>1)return i[1];return e}}(t)||""),s.append(r.NR.EXPIRY,i?r.uV:r.ug),s.append(r.NR.PRIORITY,i?r.NR.CLICK_PRIORITY:r.NR.VIEW_PRIORITY),n&&s.append(r.NR.ADVERTISER_ID,n),a&&s.append(r.NR.CAMPAIGN_ID,a),s.append(r.NR.SOURCE_EVENT_TYPE,i?r.bC:r.Cu),"/attribution_source/?"+s.toString()}async function s(e,t,i,r,s,o,l){let{appType:d,osType:u}=o||{};if(["Pin","pinImpressions"].includes(e)&&t&&r){(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"start",appType:d,osType:u}});try{var _;if(!(null!==(_=window.document.featurePolicy)&&void 0!==_&&_.allowsFeature("attribution-reporting"))){(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"skipped",message:"attribution-reporting is not enabled",appType:d,osType:u}});return}let e=n(i,r||"",!1,s,l),t=await window.fetch(e,{keepalive:!0,attributionReporting:{eventSourceEligible:!0,triggerEligible:!1}});if(!t.ok)throw Error("server request failed.");(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"success",appType:d,osType:u}})}catch(e){(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"failed",error:e.name,appType:d,osType:u}})}}else(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"missing_param",appType:d,osType:u}})}function o(e){if(e){let t=e.toLowerCase();if(t.includes("windows"))return"windows xp"===t?1:"windows vista"===t?2:"windows 7"===t?3:"windows 8"===t?4:12;if(t.includes("mac os"))return 5;if(t.includes("android"))return 7;if(t.includes("ios"))return 6;if(t.includes("ubuntu"))return 8;if(t.includes("chromium os"))return 13}return 0}},407043:(e,t,i)=>{i.d(t,{B:()=>l,v:()=>o});var r=i(385740),a=i(425288),n=i(785893);let{Provider:s,useHook:o}=(0,a.Z)("ContextLogger");function l({children:e,value:t}){let{setViewContextData:i}=(0,r.sV)();return t.injectSetViewContextDataFromHook=i,(0,n.jsx)(s,{value:t,children:e})}},357998:(e,t,i)=>{i.d(t,{Q:()=>s});var r=i(422578),a=i(273213),n=i(681669);function s(e,t,{useLegacyAdapter:i}){if(null==t)return{data:null,childDataKey__DEPRECATED:null};let s=(0,a.B)(t);if("deprecated"===s.type){let{data:t}=s;return null==t?{data:null,childDataKey__DEPRECATED:s}:{data:(0,n.V4)(e,i)(t),childDataKey__DEPRECATED:s}}let o=(0,r.useFragment)(e,s.data);return{data:o,childDataKey__DEPRECATED:{type:"graphqlRef",data:o}}}},623568:(e,t,i)=>{i.d(t,{NK:()=>T,P6:()=>n,ZE:()=>p,Zt:()=>h,_J:()=>l,_S:()=>R,cL:()=>E,jL:()=>o,oN:()=>a,rM:()=>c,sV:()=>d,sY:()=>u});var r=i(179888);let a=5e3,n=a/r.gJ,s=["Uploaded by user"],o=(e,t)=>!!t&&!e,l=e=>!!e&&5!==e,d=e=>["email","messages","deep_linking"].includes(e),u=e=>!!e&&"gif"===e,_=e=>"pinstory"===e,E=({embedSrc:e,embedSubtype:t,embedType:i})=>!!e&&!u(i)&&!_(t),c=({link:e,mobileLink:t,trackedLink:i})=>!t&&!i&&!e,p=e=>/pin.it/gim.test(e||""),h=({link:e,mobileLink:t,origImageUrl:i,trackedLink:r})=>t||r||e||i||"",T=(e,t)=>({deeplinkUri:{android:`pin/${e}/repin`,iOS:`repin/${e}`},mwebUri:{pathname:`/pin/${e}/repin/`,state:{trackingParams:t.state?t.state.trackingParams:""}}});function R(e){for(let t of s)if(e===t)return!1;return!0}},391143:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(613316),a=i(643913);function n({bubbleId:e,pinId:t,query:i,referringSource:n,storyCategory:s,storyId:o,title:l}){let d=[0,24,21,26].includes(s),u=(0,a.Z)({q:i,rs:n||void 0,b_id:e,source_id:o,top_pin_id:t}),_=d&&l?(0,r.x)({title:l,id:e,articleType:"discover"}):`/discover/article/${e}/`;return d?_:`/search/pins/${u?"?"+u:""}`}},8742:(e,t,i)=>{i.d(t,{CC:()=>d,ZP:()=>c,hW:()=>u}),i(167912);var r,a=i(240684),n=i(357998),s=i(50286),o=i(19121),l=i(785893);let d=(0,a.ZP)({resolved:{},chunkName:()=>"AuthDesktopPinRep",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!i.m[t]},importAsync:()=>Promise.all([i.e(67631),i.e(60310),i.e(12058),i.e(40566),i.e(2984)]).then(i.bind(i,656226)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){let t=this.resolve(e);return i(t)},resolve:()=>656226}),u=(0,a.ZP)({resolved:{},chunkName:()=>"DefaultPinRep",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!i.m[t]},importAsync:()=>Promise.all([i.e(97270),i.e(10966),i.e(18352),i.e(40566),i.e(39921)]).then(i.bind(i,369083)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){let t=this.resolve(e);return i(t)},resolve:()=>369083}),_=void 0!==r?r:r=i(875666),E=e=>({});function c(e){let t=(0,s.HG)(),i=(0,o.Z)(),r=i&&i.isAuth&&t,{data:a}=(0,n.Q)(_,e.duploQueryRef,{useLegacyAdapter:E});if(r&&!e.duploQueryRef){let{disableReaction:t,disableRounding:i,disableAppUpsell:r,duploDedupeVisualAnnotations:a,duploDisablePinCardPadding:n,duploFeedItemProps:s,duploIsSquarePin:o,duploLazyLoadImage:u,duploOneTapSave:_,duploPinCardDetailsMargin:E,duploPriorityFetchImage:c,duploQueryRef:p,duploShouldAddNiiSearchParamToImageUrls:h,duploShouldAllowProductPriceIndicator:T,duploConversationPin:R,topLevelTrafficSource:S,topLevelTrafficSourceDepth:O,trafficSource:P,...g}=e;return(0,l.jsx)(d,{...g})}let{attributionOption:c,blockClickEvents:p,borderStyle:h,disableHover:T,imageHeightModifier:R,imageOnlyOption:S,onError:O,onLoad:P,pin:g,pinImageCrop:I,pinImageFit:A,resolution:N,rounding:x,saveButtonOptions:m,authDesktopSelectionState:D,authDesktopSurface:C,pinOwner:y,...b}=e;return(0,l.jsx)(u,{...b,duploQueryRef:a})}},350118:(e,t,i)=>{i.d(t,{AF:()=>o,H0:()=>l,S6:()=>d,_S:()=>u});var r=i(702664),a=i(425288),n=i(785893);let{Provider:s,useHook:o,useMaybeHook:l}=(0,a.Z)("Pins");function d(){let e=o();return t=>e[t]}function u({children:e}){let t=(0,r.useSelector)(({pins:e})=>e,r.shallowEqual);return(0,n.jsx)(s,{value:t,children:e})}},654874:(e,t,i)=>{i.d(t,{Z:()=>T});var r=i(667294),a=i(883119),n=i(356997),s=i(898781),o=i(564194),l=i(773285),d=i(391143),u=i(940882),_=i(66699),E=i(19121),c=i(65675),p=i(72809),h=i(785893);function T({bubble:e,contextLogData:t,disableTabIndex:i,handleReport:T,height:R,imgSignature:S,isHovered:O,onClick:P,onMouseEnter:g,onMouseLeave:I,referringSource:A,searchBoxRenderStopwatch:N,showFlag:x,slotIndex:m,storyId:D,viewParameter:C,viewType:y,width:b}){let f=(0,s.ZP)(),v=(0,E.Z)(),{id:L,action:U,aux_fields:M,cover_images:w,dominant_colors:j,identifier_icon_type:V,title:H,story_category:k,curator:G}=e,{checkExperiment:F}=(0,l.F)(),{isAuth:W}=v,Y="",B="";if(W&&5===y){Y=F("blp_explore_bubble_image_size").group;let e=Y.split("_");e.length>1&&Y.startsWith("enabled")&&(B=e[1])}let z=w&&w[0]&&(Y.startsWith("enabled")&&B?w[0][B]:w[0]["280x280"]||w[0]["236x"]),Z=(0,_.Z)(H&&H.format||"",H&&H.args||{}),K=j&&j.length?j[0]:"gray",q=(null==U?void 0:U.url)||(0,d.Z)({storyCategory:k,query:Z,referringSource:A,bubbleId:L,storyId:D,title:H.format,pinId:null==M?void 0:M.image_pin_id});return(0,h.jsx)(o.Z,{impressionAuxFields:{storyCategory:k,storyIdStr:D},impressionType:"Article",loggingId:L,viewType:y,viewParameter:C,slotIndex:m,contextLogData:{story_id:D,...t},children:(0,h.jsx)(c.Z,{backgroundColor:K,coverImage:z,disableTabIndex:i,height:R,id:L,isHovered:O,onClick:P,onMouseEnter:g,onMouseLeave:I,searchBoxRenderStopwatch:N,url:q,width:b,children:({isHovered:e})=>(0,h.jsxs)(r.Fragment,{children:[G&&26!==k&&(0,h.jsx)(a.xu,{position:"absolute",top:!0,left:!0,padding:2,children:(0,h.jsx)(n.qE,{outline:!0,size:"xs",src:G.image_small_url,name:G.full_name})}),V&&V!==u.J&&(0,h.jsx)(a.xu,{alignItems:"center",color:"default",display:"flex",height:24,justifyContent:"center",left:!0,margin:2,opacity:.8,position:"absolute",rounding:"circle",top:!0,width:24,children:(0,h.jsx)(a.JO,{icon:(0,u.Z)(V),accessibilityLabel:f._('Shopping icon', 'bubble.shoppingIcon.label', 'Accessibility label for bubble shopping Icon'),color:"default",size:12})}),(0,h.jsx)(a.xu,{alignItems:26===k?"end":"center","data-test-id":"discover-bubble",display:"flex",height:R,justifyContent:"center",padding:3,position:"absolute",top:!0,width:b||"100%",children:(0,h.jsxs)(a.kC,{alignItems:"stretch",justifyContent:"start",direction:"column",children:[R>200?(0,h.jsx)(a.X6,{size:"500",align:"center",color:"light",children:Z}):(0,h.jsx)(a.xv,{align:"center",color:"light",weight:"bold",children:Z}),G&&26===k&&(0,h.jsxs)(a.xu,{display:"flex",justifyContent:"center",alignItems:"center",marginTop:4,children:[(0,h.jsx)(a.xu,{marginEnd:2,children:(0,h.jsx)(n.qE,{outline:!0,size:"xs",src:G.image_small_url,name:G.full_name})}),(0,h.jsx)(a.xv,{size:"100",color:"light",children:G.full_name})]})]})}),v.isAuth&&v.isEmployee&&x?(0,h.jsx)(a.xu,{position:"absolute",bottom:!0,right:!0,marginBottom:1,children:(0,h.jsx)(p.Z,{handleReport:T,imgSignature:S||"",isVisible:e})}):null]})})})}},65675:(e,t,i)=>{i.d(t,{A:()=>s,Z:()=>o});var r=i(667294),a=i(883119),n=i(785893);let s={bubbleOverlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},hoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)"},lightHoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.1)"}};function o({backgroundColor:e,children:t,coverImage:i,disableTabIndex:o,height:l,id:d,isHovered:u,onClick:_,onMouseDown:E,onMouseEnter:c,onMouseLeave:p,searchBoxRenderStopwatch:h,url:T,width:R}){var S,O;let[P,g]=(0,r.useState)(!1),I=()=>{c?c():g(!0)},A=()=>{p?p():g(!1)},N=u||P,x=N?s.hoverOverlay:s.bubbleOverlay;return(0,n.jsx)(a.Tg,{href:T,onBlur:A,onFocus:I,onMouseDown:E,onMouseEnter:I,onMouseLeave:A,onTap:()=>{null==_||_(d)},rounding:4,tabIndex:o?-1:void 0,children:(0,n.jsx)(a.zd,{rounding:4,width:R||"100%",height:l,children:null!=i&&i.url?(0,n.jsxs)(a.Ee,{alt:"",color:e,fit:"cover",naturalHeight:null!==(S=i.height)&&void 0!==S?S:1,naturalWidth:null!==(O=i.width)&&void 0!==O?O:1,onLoad:()=>{null==h||h.stop()},role:"presentation",src:i.url,children:[(0,n.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:x},height:"100%",width:"100%"}),"function"==typeof t?t({isHovered:N}):t]}):(0,n.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:e}},height:"100%",width:"100%"})})})}},666389:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(667294),a=i(883119);let n={transparent:{backgroundColor:"transparent"},transparentHovered:{backgroundColor:"rgba(216, 216, 216, 0.37)"},pog:{borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},buttonFocus:{outline:"0"}};var s=i(785893);function o(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class l extends r.Component{constructor(...e){super(...e),o(this,"state",{hovered:!1}),o(this,"handleMouseEnter",()=>this.setState({hovered:!0})),o(this,"handleMouseLeave",()=>this.setState({hovered:!1}))}render(){let{backgroundHaloSize:e,onClick:t,color:i="subtle"}=this.props,r=Object.freeze({height:e,width:e}),o={border:0,display:"block",background:"transparent",cursor:"pointer",...n.buttonFocus},l={...n.pog,...n.transparent,...this.state.hovered?n.transparentHovered:{}},d={...r,...l};return(0,s.jsx)("button",{type:"button",style:o,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onClick:e=>t&&t({event:e}),children:(0,s.jsx)("div",{style:d,children:(0,s.jsx)(a.xu,{rounding:"circle",children:(0,s.jsx)(a.JO,{accessibilityLabel:"",icon:"flag",size:e/2,color:i})})})})}}let d=l},72809:(e,t,i)=>{i.d(t,{Z:()=>h});var r=i(667294),a=i(883119),n=i(186656),s=i(121151),o=i(499128),l=i(898781),d=i(343341),u=i(666389),_=i(116674),E=i(785893);function c(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class p extends r.PureComponent{constructor(...e){var t;super(...e),t=this,c(this,"state",{showModal:!1,reportType:null}),c(this,"handleDismiss",()=>this.setState({showModal:!1})),c(this,"handleClick",()=>{let{reportType:e}=this.state;"image"===e?this.reportSuggestionImage():this.reportSuggestionText()}),c(this,"reportSuggestionImage",async function(){let{imgSignature:e,reportImage:i}=t.props;t.setState({showModal:!1});let r=await (0,n.Z)({url:"/v3/search/pin_image_sig/",data:{image_signature:e}}),a=r.resource_response.data.id;i(a)}),c(this,"reportSuggestionText",()=>{let{handleReport:e,toastManagerContext:t}=this.props;e&&(e(),t.showToast(({hideToast:e})=>(0,E.jsx)(o.ZP,{onHide:e,text:this.props.i18n._('Thanks\xA0for\xA0your\xA0report!\xA0This\xA0will\xA0be\xA0reviewed\xA0by\xA0our\xA0Trust\xA0and\xA0Safety\xA0Team', 'ReportingFlag.Toast.text', 'Toast\xA0after\xA0reporting\xA0a\xA0search suggestion')})),this.handleDismiss())}),c(this,"showModal",({event:e})=>{e.stopPropagation(),e.preventDefault(),this.setState({showModal:!0})})}render(){let{showModal:e}=this.state;return(0,E.jsxs)(r.Fragment,{children:[this.props.isVisible&&(0,E.jsx)(u.Z,{onClick:this.showModal,backgroundHaloSize:24}),e&&(0,E.jsx)(s.ZP,{accessibilityModalLabel:this.props.i18n._('Report\xA0search\xA0term', 'ReportingFlag.Modal.accessibilityModalLabel', 'accessible\xA0label\xA0for\xA0report\xA0suggestion modal'),heading:this.props.i18n._('Report\xA0search\xA0term', 'ReportingFlag.Modal.heading', 'Heading\xA0for\xA0report\xA0suggestion modal'),onDismiss:this.handleDismiss,size:"sm",children:(0,E.jsxs)(a.xu,{children:[(0,E.jsx)(a.xu,{padding:5,children:(0,E.jsx)(a.xv,{children:this.props.i18n._('When you flag this, our Trust and Safety team will review it. If it doesn\'t meet our Community Guidelines, it will be blocked.', 'ReportingFlag.Box.Text.report', 'What\xA0will\xA0happen\xA0when\xA0you\xA0report\xA0a\xA0suggestion')})}),(0,E.jsxs)(a.FX,{id:"reporting-flag-options-group",legend:this.props.i18n._('When you flag this, our Trust and Safety team will review it. If it doesn\'t meet our Community Guidelines, it will be blocked.', 'ReportingFlag.Box.Text.report', 'What\xA0will\xA0happen\xA0when\xA0you\xA0report\xA0a\xA0suggestion'),legendDisplay:"hidden",children:[(0,E.jsxs)(a.xu,{role:"list",display:"flex",direction:"column",marginBottom:4,paddingX:5,children:[(0,E.jsxs)(a.xu,{alignItems:"center",paddingY:1,display:"flex",direction:"row",children:[(0,E.jsx)(a.FX.RadioButton,{checked:"text"===this.state.reportType,id:"textType",onChange:()=>this.setState({reportType:"text"}),value:"Report search text"}),(0,E.jsx)(a.xu,{flex:"grow",children:(0,E.jsx)(a.__,{htmlFor:"textType",children:(0,E.jsx)(a.xu,{paddingX:2,children:(0,E.jsx)(a.xv,{children:"Report search text"})})})})]}),(0,E.jsxs)(a.xu,{alignItems:"center",paddingY:1,display:"flex",direction:"row",children:[(0,E.jsx)(a.FX.RadioButton,{checked:"image"===this.state.reportType,id:"imageType",onChange:()=>this.setState({reportType:"image"}),value:"Report search image"}),(0,E.jsx)(a.xu,{flex:"grow",children:(0,E.jsx)(a.__,{htmlFor:"imageType",children:(0,E.jsx)(a.xu,{paddingX:2,children:(0,E.jsx)(a.xv,{children:"Report search image"})})})})]})]}),(0,E.jsx)(a.iz,{}),(0,E.jsxs)(a.xu,{display:"flex",justifyContent:"end",padding:2,children:[(0,E.jsx)(a.xu,{margin:2,children:(0,E.jsx)(a.zx,{fullWidth:!0,onClick:this.handleDismiss,text:this.props.i18n._('Cancel', 'ReportingFlag.Box.Button.text.cancel', 'Text\xA0for\xA0cancel\xA0button\xA0when reporting search suggestion')})}),(0,E.jsx)(a.xu,{margin:2,children:(0,E.jsx)(a.zx,{fullWidth:!0,color:"red",onClick:this.handleClick,text:this.props.i18n._('Report', 'ReportingFlag.Box.Button.text.report', 'Button\xA0label\xA0to\xA0report\xA0search suggestion'),disabled:!this.state.reportType})})]})]})]})})]})}}function h(e){let t=(0,l.ZP)(),{reportImage:i}=(0,_.f)();return(0,E.jsx)(p,{...e,i18n:t,reportImage:i,toastManagerContext:(0,d.F9)()})}},116674:(e,t,i)=>{i.d(t,{X:()=>u,f:()=>d});var r=i(667294),a=i(425288),n=i(623568);function s(e=null,t){switch(t.type){case"REPORT_CONTENT_SHOW":return{id:t.payload.id,isProduct:t.payload.isProduct,isPromoted:t.payload.isPromoted,parentId:t.payload.parentId,videoDuration:t.payload.videoDuration,viewParameter:t.payload.viewParameter,viewType:t.payload.viewType,type:t.payload.type,isThirdPartyAd:t.payload.isThirdPartyAd};case"REPORT_CONTENT_DISMISS":return null;default:return e}}var o=i(785893);let{Provider:l,useHook:d}=(0,a.Z)("ReportData");function u({children:e}){let[t,i]=(0,r.useReducer)(s,null),a=(0,r.useCallback)(()=>i({type:"REPORT_CONTENT_DISMISS"}),[]),d=(0,r.useCallback)((e,t,r)=>i({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,parentId:t,videoDuration:null,viewParameter:null,viewType:null,type:r}}),[]),u=(0,r.useCallback)((e,t,r)=>i({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:t,viewType:r,type:"conversation"}}),[]),_=(0,r.useCallback)((e,t,r)=>i({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:t,viewType:r,type:"pin"}}),[]),E=(0,r.useCallback)(({pinId:e,isDownstreamPromotion:t,hasPromoter:r,firstVideoDuration:a,isProduct:s,viewParameter:o,viewType:l,isThirdPartyAd:d})=>{let u=(0,n.jL)(t,r);i({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:s,isPromoted:u,videoDuration:a,viewParameter:o,viewType:l,type:"pin",isThirdPartyAd:d}})},[]),c=(0,r.useMemo)(()=>({reportData:t,dismiss:a,reportComment:d,reportConversation:u,reportImage:_,reportPin:E}),[t,a,d,u,_,E]);return(0,o.jsx)(l,{value:c,children:e})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/91936-56d11562a38b3f77.mjs.map