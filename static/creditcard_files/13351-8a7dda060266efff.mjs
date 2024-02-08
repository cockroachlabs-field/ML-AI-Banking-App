"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[13351],{329499:e=>{var l,i,a,s,n,t,r,o={fragment:{argumentDefinitions:l=[{defaultValue:null,kind:"LocalArgument",name:"inviteCode"}],kind:"Fragment",metadata:null,name:"UnauthCloseupInviteUpsellQuery",selections:[{alias:null,args:i=[{kind:"Variable",name:"inviteCode",variableName:"inviteCode"}],concreteType:null,kind:"LinkedField",name:"v3GetInviteCodeQuery",plural:!1,selections:[{kind:"InlineFragment",selections:[a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"InviteCode",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"sender",plural:!1,selections:[s={alias:null,args:null,kind:"ScalarField",name:"firstName",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],storageKey:null}],storageKey:null}],type:"InviteCodeResponse",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"UnauthCloseupInviteUpsellQuery",selections:[{alias:null,args:i,concreteType:null,kind:"LinkedField",name:"v3GetInviteCodeQuery",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"InviteCode",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"sender",plural:!1,selections:[s,n,t,r={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},r],storageKey:null}],type:"InviteCodeResponse",abstractKey:null}],storageKey:null}]},params:{id:"4610a8b7fe41310eb2db231b8c1171930d91f797fbc7fd321ec6682cb48a3711",metadata:{},name:"UnauthCloseupInviteUpsellQuery",operationKind:"query",text:null}};o.hash="6932152931fe069ad54b218e36e66908",e.exports=o,function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let l=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[l]=e}}}(o)},913351:(e,l,i)=>{i.d(l,{Z:()=>A});var a=i(616550),s=i(883119),n=i(407043),t=i(413764),r=i(430322),o=i(898781),d=i(349700),c=i(53987),_=i(780280),p=i(784590),u=i(826067),h=i(50286),m=i(598615),g=i(664166),x=i(510020),f=i(876437),y=i(948376),b=i(350118),j=i(785893);let v=({handleDismiss:e,i18n:l,iconSize:i,upsellAppIsAndroidLiteApp:a,appUpsellType:n})=>(0,j.jsxs)(s.xu,{top:!0,bottom:!0,left:!0,right:!0,display:"flex",alignItems:"center",direction:"column",position:"fixed",paddingX:5,color:"light",zIndex:new s.Ry(5),children:[(0,j.jsx)(s.xu,{left:!0,top:!0,position:"absolute",padding:4,"data-test-id":"referred-app-upsell-dismiss-button",children:(0,j.jsx)(s.hU,{accessibilityLabel:l._('Cancel', 'mweb.auth.referred_app_upsell.close_modal_label', 'close modal icon'),icon:"cancel",size:"sm",onClick:e})}),(0,j.jsxs)(s.xu,{height:"100%",display:"flex",justifyContent:"center",direction:"column",maxWidth:440,margin:"auto",children:[(0,j.jsx)(s.xu,{paddingY:2,justifyContent:"center",display:"flex",children:a?(0,j.jsx)(t.Z,{size:i}):(0,j.jsx)(s.JO,{color:"brandPrimary",icon:"pinterest",accessibilityLabel:l._('Logo', 'mweb.auth.referred_app_upsell.logo', 'logo icon'),size:i})}),(0,j.jsx)(w,{description:l._('Save ideas, interact with friends, and get inspired', 'mweb.auth.referred_app_upsell.description1', 'description for referred app upsell'),handleDismiss:e,heading:l._('Pinterest is better in the app', 'mweb.auth.referred_app_upsell.heading1', 'heading for referred app upsell'),i18n:l,appUpsellType:n})]})]}),P=({backgroundImageUrl:e,handleDismiss:l,heroImage:i,i18n:a,multipleImages:n,appUpsellType:t})=>(0,j.jsxs)(s.xu,{top:!0,bottom:!0,left:!0,right:!0,display:"flex",alignItems:"center",direction:"column",position:"fixed",paddingX:5,color:"light",zIndex:new s.Ry(5),children:[(0,j.jsx)(s.xu,{position:"absolute",top:!0,height:319,width:"100%",zIndex:new s.Ry(2),children:(0,j.jsx)(s.Ee,{alt:a._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),src:e,fit:"cover",naturalWidth:1,naturalHeight:1})}),(0,j.jsxs)(s.xu,{top:!0,bottom:!0,left:!0,right:!0,display:"flex",alignItems:"center",direction:"column",position:"absolute",paddingX:5,color:"light",zIndex:new s.Ry(3),dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(12px)"}},children:[(0,j.jsx)(s.xu,{left:!0,position:"absolute",top:!0,color:"default",padding:4,"data-test-id":"referred-app-upsell-dismiss-button",dangerouslySetInlineStyle:{__style:{background:"transparent"}},children:(0,j.jsx)(s.hU,{accessibilityLabel:a._('Cancel', 'mweb.auth.referred_app_upsell.close_modal_label', 'close modal icon'),icon:"cancel",size:"sm",onClick:l})}),(0,j.jsxs)(s.xu,{height:"100%",justifyContent:"center",display:"flex",direction:"column",maxWidth:440,margin:"auto",children:[(0,j.jsx)(s.kC,{justifyContent:"center",children:i}),(0,j.jsx)(w,{description:n?a._('Save these ideas, get similar recs, and more', 'mweb.auth.referred_app_upsell.description2', 'description for referred app upsell'):a._('Save this idea, get similar recs, and more', 'mweb.auth.referred_app_upsell.description5', 'description for referred app upsell'),handleDismiss:l,heading:a._('It\'s better in the Pinterest app', 'mweb.auth.referred_app_upsell.heading1', 'heading for referred app upsell'),i18n:a,appUpsellType:t})]})]})]}),z=({pinUrl:e,i18n:l})=>(0,j.jsx)(s.xu,{height:235,width:176,rounding:4,overflow:"hidden",marginBottom:6,children:(0,j.jsx)(s.Ee,{alt:l._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),src:e,fit:"cover",naturalWidth:1,naturalHeight:1})}),w=({description:e,handleDismiss:l,heading:i,i18n:a,appUpsellType:n})=>(0,j.jsx)(m.Z,{componentType:14155,app_upsell_type:n,children:({handleOpenApp:n})=>(0,j.jsxs)(s.kC,{alignItems:"center",direction:"column",justifyContent:"center",children:[(0,j.jsx)(s.xu,{paddingY:2,children:(0,j.jsx)(s.X6,{align:"center",size:"400",children:i})}),(0,j.jsx)(s.xu,{width:246,children:(0,j.jsx)(s.xv,{align:"center",size:"300",children:e})}),(0,j.jsxs)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{display:"grid"}},justifyContent:"center",marginTop:5,children:[(0,j.jsx)(s.xu,{marginBottom:2,width:246,children:(0,j.jsx)(s.zx,{fullWidth:!0,size:"lg",color:"red",onClick:()=>{(0,g.y)(),n()},text:a._('Open app', 'mweb.auth.referred_app_upsell.open_app', 'CTA text for referred app upsell')})}),(0,j.jsx)(s.zx,{fullWidth:!0,onClick:()=>{l()},color:"gray",size:"lg",text:a._('Continue in browser', 'mweb.auth.referred_app_upsell.continue', 'Continue text for referred app upsell')})]})]})});function A({onDismiss:e,viewParameter:l,viewType:i}){var A,C,k;let S=(0,o.ZP)(),I=(0,h.Wb)(),{isBot:T,userAgent:{platform:L,raw:R}}=(0,_.B)(),U=(0,y.Rp)({isBot:T,platform:L,userAgent:R}),{logContextEvent:E}=(0,n.v)(),N=I?60:32,O=(0,a.useHistory)(),B=(0,a.useRouteMatch)(),F=(0,a.useLocation)(),{invite_code:Z}=(0,u.mB)(F.search),{appUpsellType:W,uiType:K}=(0,x.n)(),D=()=>{E({component:14155,element:10308,event_type:10220,view_type:i||202,view_parameter:l,aux_data:{app_upsell_type:W}}),(0,g.y)(),e()},H=null!==(A=B.params.id)&&void 0!==A?A:"",{data:Q}=(0,p.Z)(H?{name:"PinResource",options:{field_set_key:"detailed",id:H}}:null),M=(0,b.S6)()(H),{username:G,slug:X}=(0,a.useParams)(),{data:q}=(0,p.Z)(G&&X?{name:"BoardResource",options:{username:(0,u.Jx)(G),slug:(0,u.Jx)(unescape(X||"")),field_set_key:"detailed"}}:null);if("full"===K){let e="",l=null,i=!1;if((0,c.L6)(O.location)){let i=null!=Q?Q:M;e=(null==i?void 0:null===(C=i.images)||void 0===C?void 0:null===(k=C.orig)||void 0===k?void 0:k.url)||"",l=(0,j.jsx)(z,{pinUrl:e,i18n:S})}if((0,c.am)(O.location)&&q&&q.images&&q.images["474x"]){if(q.images["474x"].length>2){e=q.images["474x"][0].url||"";let a=q.images["474x"][1].url||"",n=q.images["474x"][2].url||"";i=!0,l=(0,j.jsx)(s.xu,{marginBottom:7,children:(0,j.jsxs)(s.kC,{children:[(0,j.jsx)(s.xu,{height:117,width:117,overflow:"hidden",dangerouslySetInlineStyle:{__style:{borderTopLeftRadius:"16px",borderBottomLeftRadius:"16px",marginRight:"1px"}},children:(0,j.jsx)(s.Ee,{alt:S._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),src:e,fit:"cover",naturalWidth:1,naturalHeight:1})}),(0,j.jsxs)(s.kC,{direction:"column",children:[(0,j.jsx)(s.xu,{height:59,width:57,overflow:"hidden",dangerouslySetInlineStyle:{__style:{borderTopRightRadius:"16px",marginBottom:"1px"}},children:(0,j.jsx)(s.Ee,{alt:S._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),src:a,fit:"cover",naturalWidth:1,naturalHeight:1})}),(0,j.jsx)(s.xu,{height:57,width:58,overflow:"hidden",dangerouslySetInlineStyle:{__style:{borderBottomRightRadius:"16px"}},children:(0,j.jsx)(s.Ee,{alt:S._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),src:n,fit:"cover",naturalWidth:1,naturalHeight:1})})]})]})})}else q.images["474x"].length>0&&(e=q.images["474x"][0].url||"",l=(0,j.jsx)(z,{pinUrl:e,i18n:S}))}return e?(0,j.jsx)(P,{backgroundImageUrl:e,handleDismiss:D,heroImage:l,i18n:S,multipleImages:i,appUpsellType:W}):(0,j.jsx)(v,{handleDismiss:D,i18n:S,iconSize:N,upsellAppIsAndroidLiteApp:U,appUpsellType:W})}if("inline"===K){let e=(0,j.jsx)(s.xu,{padding:1,rounding:1,color:"light",children:(0,j.jsx)(s.JO,{accessibilityLabel:S._('Pinterest logo', 'AppUpsellFooter.icon', 'Pinterest logo icon for app upsell footer'),color:"brandPrimary",icon:"pinterest",inline:!0,size:28})}),l=S._('It\'s better in the app', 'mweb.auth.referred_app_upsell.heading3', 'heading for referred app upsell'),i=S._('Get similar recs and more', 'mweb.auth.referred_app_upsell.description4', 'description for referred app upsell');return W.endsWith("social-referred")&&Z&&(l=(0,j.jsx)(f.X,{variables:{inviteCode:Z},children:e=>{var l,i,a;return(0,d.nk)(S._('{{ invitee }} shared this idea', 'mweb.auth.referred_app_upsell.heading5', 'heading for referred app upsell that has the invitee info'),{invitee:(null===(l=e.v3GetInviteCodeQuery)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:null===(a=i.sender)||void 0===a?void 0:a.firstName)||""})}}),i=S._('Open app to discover more', 'mweb.auth.referred_app_upsell.description6', 'description for referred app upsell'),Z&&(e=(0,j.jsx)(f.X,{variables:{inviteCode:Z},children:e=>{var l,i,a;return(0,j.jsx)(s.xu,{width:48,height:48,rounding:6,overflow:"hidden",children:(0,j.jsx)(s.Ee,{alt:S._('App upsell profile image', 'mweb.auth.referred_app_upsell.image1', 'image for referred app upsell, using invitee profile image'),src:(null===(l=e.v3GetInviteCodeQuery)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:null===(a=i.sender)||void 0===a?void 0:a.imageMediumUrl)||"",fit:"cover",naturalWidth:1,naturalHeight:1})})}}))),(0,j.jsx)(m.Z,{app_upsell_type:W,children:({handleOpenApp:a})=>(0,j.jsx)(s.xu,{alignItems:"center",direction:"row",display:"flex",height:74,width:"100%",zIndex:new s.Ry(99999),padding:4,dangerouslySetInlineStyle:{__style:{backgroundColor:"#F1F1F1"}},children:(0,j.jsx)(s.iP,{onTap:()=>{(0,g.y)(),a()},children:(0,j.jsxs)(s.kC,{alignItems:"center",justifyContent:"start",direction:"row",width:"100%",children:[e,(0,j.jsxs)(s.xu,{marginStart:4,flex:"grow",children:[(0,j.jsx)(s.xu,{marginBottom:1,children:(0,j.jsx)(s.xv,{children:l})}),(0,j.jsx)(s.xv,{weight:"bold",children:i})]}),(0,j.jsx)(s.xu,{children:(0,j.jsx)(s.hU,{icon:"cancel",accessibilityLabel:"cancel",size:"sm",onClick:({event:e})=>{D(),e.preventDefault(),e.stopPropagation()}})})]})})})})}{let e=S._('Pinterest is better in the app', 'mweb.auth.referred_app_upsell.heading3', 'heading for referred app upsell');return W.endsWith("social-referred")&&Z&&(e=(0,j.jsx)(f.X,{variables:{inviteCode:Z},children:e=>{var l,i,a;return(0,d.nk)(S._('Join {{ invitee }} on Pinterest', 'mweb.auth.referred_app_upsell.heading4', 'heading for referred app upsell that has the invitee info'),{invitee:(null===(l=e.v3GetInviteCodeQuery)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:null===(a=i.sender)||void 0===a?void 0:a.firstName)||""})}})),(0,j.jsx)(r.default,{accessibilityModalLabel:S._('modal', 'mweb.auth.referred_app_upsell.modal_label', 'modal label'),closeOnOutsideClick:!1,isOpen:!0,onDismiss:()=>{},mobileHideCloseIcon:!0,type:"app_upsell_v1",zIndex:new s.Ry(101),children:(0,j.jsxs)(s.xu,{padding:2,"data-test-id":"appUpsell-iframe",children:[(0,j.jsx)(s.xu,{display:"inlineBlock",position:"absolute",children:(0,j.jsx)(s.xu,{"data-test-id":"referred-app-upsell-close",marginStart:1,marginTop:1,children:(0,j.jsx)(s.hU,{accessibilityLabel:S._('close', 'mweb.auth.referred_app_upsell.close', 'close button'),icon:"cancel",onClick:D,size:"sm"})})}),(0,j.jsxs)(s.xu,{paddingX:2,marginTop:8,marginBottom:5,children:[(0,j.jsx)(s.xu,{paddingY:3,justifyContent:"center",display:"flex",children:U?(0,j.jsx)(t.Z,{size:N}):(0,j.jsx)(s.JO,{color:"brandPrimary",icon:"pinterest",accessibilityLabel:S._('Logo', 'mweb.auth.referred_app_upsell.logo', 'logo icon'),size:N})}),(0,j.jsx)(w,{description:S._('Save ideas, interact with friends, and get inspired', 'mweb.auth.referred_app_upsell.description3', 'description for referred app upsell'),handleDismiss:D,heading:e,i18n:S,appUpsellType:W})]})]})})}}},876437:(e,l,i)=>{i.d(l,{X:()=>P,Z:()=>z});var a,s=i(167912),n=i(883119),t=i(947599),r=i(619277),o=i(356997),d=i(898781),c=i(667679),_=i(867820),p=i(63552),u=i(67347),h=i(785893);function m({isStoryPin:e,inviteText:l,inviterFirstName:i,isThinnerStyle:a,username:s}){let t=l.split(i);return(0,h.jsx)(n.xu,{children:(0,h.jsx)(p.Z,{onTouch:()=>{(0,u.nP)("mweb_social_unauth.closeup.social_text_click")},pressState:"none",children:(0,h.jsxs)(n.kC,{direction:"row",gap:{row:1,column:0},children:[(0,h.jsx)(n.xv,{inline:!0,size:"300",children:t[0]}),e?(0,h.jsx)(n.xv,{inline:!0,size:"300",weight:"bold",children:(0,h.jsx)(n.rU,{href:"/"+s,target:"blank",onClick:()=>(0,_.My)("mweb_unauth_inviter_profile_click"),children:i})}):(0,h.jsx)(n.xv,{inline:!0,size:a?"200":"300",weight:a?"normal":"bold",children:(0,h.jsx)(n.rU,{href:"/"+s,target:"blank",onClick:()=>(0,_.My)("mweb_unauth_inviter_profile_click_not_story"),children:i})}),(0,h.jsx)(n.xv,{inline:!0,size:a?"200":"300",children:t[1]})]})})})}function g({inviter:e,socialContextBannerStyle:l,setShouldShowSocialUpsellBanner:i}){let{shouldShowSignupUpsellText:a,isDismissible:s}=l,t=(0,d.ZP)(),{username:r}=e,u=e.imageMediumUrl,g=e.firstName,x=(0,c.Z)();return(0,h.jsx)(n.kC,{justifyContent:s?"center":"start",alignItems:"center",children:(0,h.jsx)(n.xu,{children:(0,h.jsx)(n.iP,{fullHeight:!0,onTap:()=>{(0,_.My)("dweb.unauth.social_banner.click"),x({reason:"UPSELL_LOGIN_OR_SIGNUP",attributionLabel:"tap_desktop_unauth_social_context_banner",desktopOptions:{modalType:"signup",modalOptions:{source:"defaultSource",container:"pinWash"}}})},children:(0,h.jsxs)(n.xu,{alignItems:"center",direction:"row",display:"flex",height:44,width:s?1012:void 0,dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(233, 228, 255, 0.9)"}},marginTop:2,marginBottom:6,marginStart:s?0:2,paddingX:s?4:2,paddingY:4,rounding:"pill",position:s?"static":"absolute",top:!0,zIndex:new n.Ry(1),children:[(0,h.jsx)(n.xu,{marginTop:8,marginBottom:8,marginEnd:1,width:32,children:(0,h.jsx)(p.Z,{onTouch:e=>{e.stopPropagation(),r&&window.open("/"+r),(0,_.My)("dweb.unauth.social_banner.avatar_click")},pressState:"none",children:null!=u&&u.includes("default")?(0,h.jsx)(n.JO,{accessibilityLabel:"pinterest logo",color:"default",icon:"pinterest",size:24}):(0,h.jsx)(o.qE,{size:"fit",src:null!=u?u:void 0,name:g})})}),(0,h.jsxs)(n.kC,{flex:"grow",direction:"row",children:[(0,h.jsx)(m,{isStoryPin:!1,inviteText:a?(t._('{{ name }} shared this idea.', 'pin.closeup.long_banner.desktop.shareNotification', 'Long banner notifying desktop users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",g):(t._('{{ name }} shared this idea ', 'pin.closeup.banner.desktop.shareNotification', 'Banner notifying desktop users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",g),inviterFirstName:g,username:r,isThinnerStyle:a}),a&&(0,h.jsx)(n.xu,{marginStart:1,marginEnd:2,children:(0,h.jsx)(n.xv,{inline:!0,size:"200",weight:"bold",children:t._('Sign up to join them', 'pin.header.social_context_dweb', 'label')})})]}),s&&(0,h.jsx)(n.hU,{icon:"cancel",accessibilityLabel:"cancel",size:"sm",onClick:({event:e})=>{e.stopPropagation(),(0,_.My)("unauth.dweb.social_banner.dismiss"),null==i||i(!1)}})]})})})})}var x=i(773285),f=i(50286),y=i(598615),b=i(938917);function j({inviter:{imageMediumUrl:e,username:l,firstName:i},isStoryPin:a}){let s=(0,d.ZP)(),{checkExperiment:t}=(0,x.F)(),r=(0,f.ml)(),g=()=>(0,u.nP)("mweb_social_unauth.closeup.avatar_click"),j=(0,b.Z)(),v=(0,c.Z)(),P=(s._('{{ name }} shared this idea', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them')).replace("{{ name }}",l),z="undefined"!=typeof window&&window.innerWidth<360,w=l.length>25,A=r&&!a&&t("mweb_social_context_header_upsell").anyEnabled,C=t("mweb_social_context_header_upsell").group;return j&&a?(0,h.jsxs)(n.kC,{gap:{row:2,column:0},alignItems:"center",justifyContent:"center",minHeight:w?100:80,children:[(0,h.jsx)(n.xu,{marginTop:4,marginBottom:4,width:40,children:(0,h.jsx)(p.Z,{onTouch:g,pressState:"none",children:(0,h.jsx)(o.qE,{size:"fit",src:null!=e?e:void 0,name:i})})}),(0,h.jsx)(n.kC.Item,{flex:"grow",children:(0,h.jsxs)(n.xu,{display:"flex",direction:w?"column":"row",alignItems:"center",justifyContent:w?"start":"between",padding:w?3:0,children:[(0,h.jsxs)(n.kC,{direction:"column",alignItems:"start",gap:{row:0,column:1},wrap:!z,children:[(0,h.jsx)(n.kC,{children:(0,h.jsxs)(n.xv,{align:w?"center":"start",children:[(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:(0,h.jsx)(n.rU,{display:"inlineBlock",href:`/${null!=l?l:""}/`,target:"blank",onClick:()=>(0,_.My)("mweb_unauth_inviter_profile_click"),underline:"hover",children:l})}),P.split(l)[1]]})}),!w&&(0,h.jsx)(n.xv,{size:"100",children:s._('Open Pinterest to see more', 'unauth.mweb.shared.banner.edu', 'education for CTA to open app on shared banner')})]}),(0,h.jsx)(n.xu,{display:"flex",justifyContent:"center",alignItems:"center",minWidth:w?0:100,marginTop:w?3:0,children:(0,h.jsx)(y.Z,{componentType:14161,app_upsell_type:"social-context-header",children:({handleOpenApp:e})=>(0,h.jsx)(n.zx,{onClick:()=>e(),size:"md",text:s._('Open app', 'unauth.mweb.shared.banner.cta', 'CTA to open app on shared banner')})})})]})})]}):(0,h.jsx)(p.Z,{onTouch:()=>{A&&v({reason:"UPSELL_LOGIN_OR_SIGNUP",attributionLabel:"tap_mobile_unauth_social_context_header"})},pressState:"none",children:(0,h.jsxs)(n.kC,{alignItems:"center",gap:4,justifyContent:"start",minHeight:80,children:[(0,h.jsx)(n.xu,{marginTop:4,marginStart:A?2:0,marginBottom:4,width:48,children:(0,h.jsx)(p.Z,{onTouch:g,pressState:"none",children:(0,h.jsx)(o.qE,{src:null!=e?e:void 0,name:i})})}),(0,h.jsxs)(n.kC,{alignItems:A?"start":"center",justifyContent:"start",direction:"column",children:[(0,h.jsx)(n.xu,{marginStart:A?-1:0,children:(0,h.jsx)(m,{isStoryPin:a,inviteText:A&&C.includes("join")?(s._('{{ name }} shared this idea', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",i):A&&C.includes("converse")?(s._('{{ name }} sent an idea', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",i):A&&C.includes("explore")?(s._('{{ name }} sent this idea', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",i):(s._('{{ name }} shared this idea with you', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",i),inviterFirstName:i,username:l,isThinnerStyle:A})}),A&&(0,h.jsx)(n.xu,{marginTop:1,children:(0,h.jsx)(n.xv,{inline:!0,size:"300",weight:"bold",children:C.includes("join")?s._('Tap to join them on Pinterest', 'pin.closeup.header.shareNotification.text', 'header notifying users to tap on area'):C.includes("converse")?s._('Tap to share feedback', 'pin.closeup.header.shareNotification.text', 'header notifying users to tap on area'):C.includes("explore")&&s._('Tap to see more like it', 'pin.closeup.header.shareNotification.text', 'header notifying users to tap on area')})})]})]})})}let v=void 0!==a?a:a=i(329499),P=({children:e,variables:l})=>e((0,s.useLazyLoadQuery)(v,l));function z({inviterFirstNameRef:e,isDesktop:l,isStoryPin:i,setShouldShowSocialUpsellBanner:a,socialContextBannerStyle:s}){return(0,h.jsx)(t.Z,{children:(0,h.jsx)(r.ty,{children:t=>t?(0,h.jsx)(P,{variables:{inviteCode:t},children:t=>{var r,o;let d=null===(r=t.v3GetInviteCodeQuery)||void 0===r?void 0:null===(o=r.data)||void 0===o?void 0:o.sender,{firstName:c,imageMediumUrl:_,username:p}=null!=d?d:Object.freeze({});return c&&p?(e&&(e.current=c),l?(0,h.jsx)(g,{inviter:{firstName:c,imageMediumUrl:_,username:p},socialContextBannerStyle:null!=s?s:{isDismissible:!0,shouldShowSignupUpsellText:!0},setShouldShowSocialUpsellBanner:a}):(0,h.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{boxShadow:"0 1px 0 0 rgba(0, 0, 0, 0.08)"}},marginStart:-2,paddingX:2,marginEnd:-2,children:(0,h.jsx)(j,{inviter:{firstName:c,imageMediumUrl:_,username:p},isStoryPin:!!i})})):null}}):null})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/13351-8a7dda060266efff.mjs.map