(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{316:function(e,t){e.exports=["January","February","March","April","May","June","July","August","September","October","November","December"]},332:function(e,t){e.exports=[{long:"Monday",short:"Sun"},{long:"Sunday",short:"Mon"},{long:"Tuesday",short:"Tues"},{long:"Wednesday",short:"Wed"},{long:"Thursday",short:"Thurs"},{long:"Friday",short:"Fri"},{long:"Saturday",short:"Sat"}]},342:function(e,t,a){e.exports=a(745)},745:function(e,t,a){"use strict";a.r(t);a(343),a(393);var n=a(0),c=a.n(n),r=a(25),i=a.n(r),o=a(19),l=a(26),s=a(784),m=Object(n.createContext)({}),u=a(781),d=a(785),g=a(786),b=a(6),f=a(316),j=a.n(f),E=a(321),p=a.n(E),y=a(320),O=a.n(y),h=Object(b.a)((function(e){return{appBar:{backgroundColor:e.palette.common.white},toolbar:{display:"flex",justifyContent:"space-between"},monthYearText:{fontWeight:500}}}))((function(e){var t=e.classes,a=e.month,n=e.year,r=e.setNewMonth,i=e.setNewYear,o=function(e){12===e?(r(0),i(n+1)):-1===e?(r(11),i(n-1)):r(e)};return c.a.createElement(u.a,{position:"fixed",className:t.appBar},c.a.createElement(s.a,{className:t.toolbar},c.a.createElement("div",null,c.a.createElement(d.a,{variant:"h5",className:t.monthYearText,display:"inline",color:"primary"},"".concat(j.a[a]," ").concat(n))),c.a.createElement("div",null,c.a.createElement(g.a,{"aria-label":"left",onClick:function(){return o(a-1)}},c.a.createElement(O.a,null)),c.a.createElement(g.a,{"aria-label":"right",onClick:function(){return o(a+1)}},c.a.createElement(p.a,null)))))})),S=a(90),v=a(788),x=a(33),N=a(790),C=a(791),w=a(793),_=a(799),k=a(331),T=a.n(k),R=a(13),B=a(789),D=a(798),P=Object(b.a)((function(e){return{title:{fontSize:20,marginLeft:e.spacing(3),marginRight:e.spacing(3)},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}}))((function(e){var t=e.classes,a=e.title,n=e.onCancel,r=e.onConfirm;return c.a.createElement(D.a,{open:!0,onClose:n,"aria-labelledby":"delete-reminder","aria-describedby":"delete-reminder"},c.a.createElement("div",{className:t.paper},c.a.createElement(d.a,{className:t.title,gutterBottom:!0,align:"center"},a),c.a.createElement(v.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},c.a.createElement(B.a,{variant:"contained",color:"primary",onClick:r},"Confirm"),c.a.createElement(B.a,{variant:"contained",color:"secondary",onClick:n},"Cancel"))))})),W=a(794),A=a(797),I=a(322),L=a(800),H=a(82),K=a.n(H),M="https://api.weatherapi.com/v1/",Y=function(e){var t=e.classes,a=e.day,r=e.month,i=e.year,o=e.city,s=new Date;s.setHours(0,0,0,0);var m=new Date(i,r,a),u=Object(n.useState)(null),g=Object(l.a)(u,2),b=g[0],f=g[1],j=Object(n.useCallback)((function(){if(""!==o){var e=K()(m).diff(s,"days")+1,t=o.split(",")[0];K()(s).isBefore(m)&&e<=10&&fetch("".concat(M,"forecast.json?key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/calendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_WEATHER_API_KEY,"&q=").concat(t,"&days=").concat(e)).then((function(e){return e.json()})).then((function(e){var t=Object(R.get)(e,"forecast.forecastday",[]).find((function(e){return K()(e.date).isSame(m)}));f({condition:Object(R.get)(t,"day.condition",{}),max_temp:Object(R.get)(t,"day.maxtemp_c",null),min_temp:Object(R.get)(t,"day.mintemp_c",null),current_temp:null})})),K()(s).isAfter(m)&&e<=30&&fetch("".concat(M,"history.json?key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/calendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_WEATHER_API_KEY,"&q=").concat(t,"&dt=").concat(K()(m).format("YYYY-MM-DD"))).then((function(e){return e.json()})).then((function(e){var t=Object(R.get)(e,"forecast.forecastday",[]).find((function(e){return K()(e.date).isSame(m)}));f({condition:Object(R.get)(t,"day.condition",{}),max_temp:Object(R.get)(t,"day.maxtemp_c",null),min_temp:Object(R.get)(t,"day.mintemp_c",null),current_temp:null})})),K()(s).isSame(m)&&fetch("".concat(M,"current.json?key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/calendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_WEATHER_API_KEY,"&q=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=Object(R.get)(e,"current",{});f({condition:Object(R.get)(t,"condition",{}),max_temp:null,min_temp:null,current_temp:t.temp_c})}))}}),[o,s,m]);return Object(n.useEffect)((function(){j()}),[o,j]),b&&c.a.createElement(v.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch"},c.a.createElement(N.a,{key:"header-".concat(a),className:t.weatherCard},c.a.createElement(C.a,null,b&&c.a.createElement(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},c.a.createElement(v.a,{item:!0,xs:3},c.a.createElement(L.a,{alt:Object(R.get)(b,"condition.text",""),src:Object(R.get)(b,"condition.icon","")})),c.a.createElement(v.a,{item:!0,xs:9},c.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},Object(R.get)(b,"condition.text","")),b.current_temp?c.a.createElement(d.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Current temp: ".concat(b.current_temp," \xb0C")):c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Max. temp: ".concat(b.max_temp," \xb0C")),c.a.createElement(d.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Min. temp: ".concat(b.min_temp," \xb0C"))))))))};Y.defaultProps={month:0,year:0,city:""};var z=Object(b.a)((function(e){return{weatherCard:{marginLeft:e.spacing(3),marginRight:e.spacing(3)},title:{fontSize:15,marginLeft:e.spacing(3),marginRight:e.spacing(3)},subtitle:{fontSize:13,marginLeft:e.spacing(3),marginRight:e.spacing(3)}}}))(Y),F=function(e){var t=e.classes,a=e.date,r=e.saveReminder,i=e.reminder,o=e.day,s=e.month,m=e.year,u=Object(n.useState)(Object(R.get)(i,"title","")),g=Object(l.a)(u,2),b=g[0],f=g[1],j=Object(n.useState)(Object(R.get)(i,"time","09:30")),E=Object(l.a)(j,2),p=E[0],y=E[1],O=Object(n.useState)(Object(R.get)(i,"city","")),h=Object(l.a)(O,2),S=h[0],x=h[1],N=Object(n.useState)(!1),C=Object(l.a)(N,2),w=C[0],_=C[1],k=Object(n.useState)([]),T=Object(l.a)(k,2),D=T[0],P=T[1],L=Object(n.useState)(Object(R.get)(i,"city","")),H=Object(l.a)(L,2),K=H[0],M=H[1],Y=Object(n.useState)(Object(R.get)(i,"color",{hex:"#607d8b",source:"hex"})),F=Object(l.a)(Y,2),U=F[0],J=F[1],V=Object(n.useCallback)((function(){if(K.length>=3){var e="https://api.weatherapi.com/v1/search.json?key=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/calendar",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_WEATHER_API_KEY,"&q=").concat(K);fetch(e).then((function(e){return e.json()})).then((function(e){P(e)}))}}),[K]);return Object(n.useEffect)((function(){V()}),[K,V]),c.a.createElement(v.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",spacing:3},c.a.createElement(v.a,{item:!0,className:t.container},c.a.createElement(W.a,{id:"title-input",label:"Title",value:b,helperText:"".concat(b.length,"/30"),fullWidth:!0,onChange:function(e){_(e.target.value.length>30),f(e.target.value)},error:w,className:t.input,margin:"normal"})),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},"".concat(a.toDateString()))),c.a.createElement(v.a,{item:!0,className:t.container},c.a.createElement(W.a,{id:"hour-input",label:"Hour",type:"time",fullWidth:!0,value:p,onChange:function(e){return y(e.target.value)},className:t.input,InputLabelProps:{shrink:!0},inputProps:{step:300}})),c.a.createElement(v.a,{item:!0,className:t.container},c.a.createElement(A.a,{id:"city-auto-input",options:D,fullWidth:!0,getOptionLabel:function(e){return e.name},className:t.input,inputValue:K,margin:"normal",onInputChange:function(e,t){e&&("change"===e.type&&M(void 0!==t?t:""),"click"===e.type&&(x(void 0!==t?t:""),M(void 0!==t?t:"")))},renderInput:function(e){return c.a.createElement(W.a,Object.assign({},e,{label:"City"}))}})),S&&c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},"Weather")),c.a.createElement(z,{day:o,month:s,year:m,city:S})),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},"Color")),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(I.CirclePicker,{onChange:function(e){return J(e)},color:U})),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(B.a,{variant:"contained",color:"primary",onClick:function(){b.length<=0&&_(!0),b.length<=30&&b.length>0&&(r({title:b,time:p,date:a,city:S,color:U,index:Object(R.get)(i,"index",null)}),f(""),y("09:30"),x(""),J({hex:"#607d8b",source:"hex"}))}},"Save")))};F.defaultProps={reminder:{},month:0,year:0};var U=Object(b.a)((function(e){return{title:{fontSize:15,marginLeft:e.spacing(3),marginRight:e.spacing(3)},container:{display:"flex",flexWrap:"wrap",width:"100%"},input:{marginLeft:e.spacing(3),marginRight:e.spacing(3)}}}))(F),J=a(325),V=a.n(J),q=a(326),G=a.n(q),Q=a(327),X=a.n(Q),Z=a(329),$=a.n(Z),ee=a(328),te=a.n(ee),ae=a(330),ne=a.n(ae),ce=a(792),re=Object(b.a)((function(e){return{title:{fontSize:20,marginLeft:e.spacing(2),marginRight:e.spacing(2)},subtitle:{fontSize:15,marginLeft:e.spacing(2),marginRight:e.spacing(2)},content:{fontSize:13,marginLeft:e.spacing(2),marginRight:e.spacing(2)},container:{display:"flex",flexWrap:"wrap",width:"100%"},input:{marginLeft:e.spacing(3),marginRight:e.spacing(3)}}}))((function(e){var t=e.classes,a=e.reminder,r=e.deleteReminder,i=e.editReminder,o=Object(n.useState)(!1),s=Object(l.a)(o,2),m=s[0],u=s[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",spacing:3},c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"flex-end",alignItems:"center"},c.a.createElement(g.a,{color:"primary","aria-label":"upload picture",component:"span",onClick:i},c.a.createElement(V.a,null)),c.a.createElement(g.a,{color:"primary","aria-label":"upload picture",component:"span",onClick:function(){return u(!0)}},c.a.createElement(G.a,null))),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},a.title)),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(d.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Date")),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},c.a.createElement(v.a,{item:!0,xs:3,container:!0,direction:"row",justify:"center"},c.a.createElement(X.a,null)),c.a.createElement(v.a,{item:!0,xs:9},c.a.createElement(d.a,{className:t.content,color:"textSecondary",gutterBottom:!0,align:"justify"},"".concat(a.date.toDateString())))),c.a.createElement(ce.a,null),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(d.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Hour")),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},c.a.createElement(v.a,{item:!0,xs:3,container:!0,direction:"row",justify:"center"},c.a.createElement(te.a,null)),c.a.createElement(v.a,{item:!0,xs:9},c.a.createElement(d.a,{className:t.content,color:"textSecondary",gutterBottom:!0,align:"justify"},"".concat(Object(R.get)(a,"time",""))))),c.a.createElement(ce.a,null),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(d.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"City")),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},c.a.createElement(v.a,{item:!0,xs:3,container:!0,direction:"row",justify:"center"},c.a.createElement($.a,null)),c.a.createElement(v.a,{item:!0,xs:9},c.a.createElement(d.a,{className:t.content,color:"textSecondary",gutterBottom:!0,align:"justify"},"".concat(""===a.city?"Unspecified":a.city)))),c.a.createElement(ce.a,null),""!==a.city&&c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(d.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Weather")),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(z,{day:a.date.getDate(),month:a.date.getMonth(),year:a.date.getFullYear(),city:a.city})),c.a.createElement(ce.a,null)),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(d.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Color")),c.a.createElement(v.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"space-around",alignItems:"center",spacing:1},c.a.createElement(v.a,{item:!0,xs:3,container:!0,direction:"row",justify:"center"},c.a.createElement(ne.a,null)),c.a.createElement(v.a,{item:!0,xs:9},c.a.createElement(N.a,{style:{backgroundColor:a.color.hex}},c.a.createElement(C.a,null)))),c.a.createElement(ce.a,null)),m&&c.a.createElement(P,{title:"Are you sure you want to delete this reminder?",onConfirm:function(){u(!1),r(a)},onCancel:function(){return u(!1)}}))})),ie=a(801),oe=a(796),le=Object(b.a)((function(e){return{popover:{minWidth:"14vw",width:"14vw",borderRadius:0,minHeight:"10vh",marginLeft:e.spacing(3),marginRight:e.spacing(3),marginBottom:e.spacing(2),marginTop:e.spacing(2)},title:{fontSize:14},clickable:{cursor:"pointer"}}}))((function(e){var t=e.classes,a=e.reminders,r=e.showReminderInfo,i=Object(n.useState)(!1),s=Object(l.a)(i,2),m=s[0],u=s[1],g=Object(n.useState)(null),b=Object(l.a)(g,2),f=b[0],j=b[1],E=function(){return a.map((function(e,a){return c.a.createElement(N.a,{key:"".concat(e.title,"-").concat(a),style:{backgroundColor:e.color.hex},className:t.clickable,onClick:function(){return r(Object(o.a)(Object(o.a)({},e),{},{index:a}))}},c.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},e.title))}))};return a.length>3?c.a.createElement(c.a.Fragment,null,a.slice(0,2).map((function(e,a){return c.a.createElement(N.a,{key:"".concat(e.title,"-").concat(a),style:{backgroundColor:e.color.hex},className:t.clickable,onClick:function(){return r(Object(o.a)(Object(o.a)({},e),{},{index:a}))}},c.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},e.title))})),c.a.createElement(N.a,{key:"more-reminders",style:{backgroundColor:"#2196F3"},className:t.clickable,onClick:function(e){return t=e.currentTarget,u(!0),void j(t);var t}},c.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},"+".concat(a.length-2))),c.a.createElement(ie.a,{id:"reminders-expanse",open:m,anchorEl:f,onClose:function(){u(!1),j(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"}},c.a.createElement(oe.a,{className:t.popover},c.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},"Reminders"),E()))):E()})),se=function(e,t){var a=e.time.toLowerCase(),n=t.time.toLowerCase();return a<n?-1:a>n?1:0},me=function(e){var t=e.classes,a=e.disabled,r=e.day,i=e.month,s=e.year,u=Object(n.useContext)(m),b=Object(n.useState)(!1),f=Object(l.a)(b,2),j=f[0],E=f[1],p=Object(n.useState)(!1),y=Object(l.a)(p,2),O=y[0],h=y[1],k=Object(n.useState)(null),B=Object(l.a)(k,2),D=B[0],W=B[1],A=Object(n.useState)(!1),I=Object(l.a)(A,2),L=I[0],H=I[1],K=Object(n.useState)(!1),M=Object(l.a)(K,2),Y=M[0],z=M[1],F=new Date(s,i,r),J=Object(o.a)({},u);delete J.updateReminders;var V=Object(R.get)(u,"".concat(s,".").concat(i,".").concat(r),[]),q=u.updateReminders,G=function(e){W(e),h(!0),E(!1)},Q=function(){W(null),E(!1),h(!1)},X=function(){return L&&V.length>0&&!a};return Object(n.useEffect)((function(){E(!1),h(!1),W(null),H(!1),z(!1)}),[i,s]),c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a,{className:a?t.disabled:t.root,variant:"outlined"},c.a.createElement(C.a,{className:t.content},c.a.createElement(v.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch"},c.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!X(),align:"center",onMouseEnter:function(){return H(!0)},onMouseLeave:function(){return H(!1)}},X()?c.a.createElement(g.a,{"aria-label":"delete",className:t.margin,size:"small",onClick:function(){return z(!0)}},c.a.createElement(T.a,null)):r),!a&&c.a.createElement(le,{reminders:V,showReminderInfo:function(e){W(e),E(!0),h(!1)}}))),!a&&c.a.createElement(w.a,{style:{height:"".concat(80-20*(V.length>=3?3:V.length),"%"),maxHeight:"".concat(80-20*(V.length>=3?3:V.length),"%")},onClick:function(){return G(null)}},c.a.createElement(C.a,null))),Y&&c.a.createElement(P,{onConfirm:function(){z(!1);var e=Object(o.a)({},J);Object(R.assign)(e,Object(x.a)({},s,Object(o.a)(Object(o.a)({},Object(R.get)(J,"".concat(s),{})),{},Object(x.a)({},i,Object(o.a)(Object(o.a)({},Object(R.get)(J,"".concat(s,".").concat(i),{})),{},Object(x.a)({},r,[])))))),q(e)},onCancel:function(){return z(!1)},title:"Are you sure you want to delete ALL the reminders for this day?"}),c.a.createElement(_.a,{open:j||O,anchor:"right",onClose:Q,classes:{paper:t.drawer}},j&&c.a.createElement(re,{reminder:D,editReminder:function(){return G(D)},deleteReminder:function(e){Q(),V.splice(e.index,1);var t=Object(o.a)({},J);Object(R.assign)(t,Object(x.a)({},s,Object(o.a)(Object(o.a)({},Object(R.get)(J,"".concat(s),{})),{},Object(x.a)({},i,Object(o.a)(Object(o.a)({},Object(R.get)(J,"".concat(s,".").concat(i),{})),{},Object(x.a)({},r,V)))))),q(t)}}),O&&c.a.createElement(U,{date:F,reminder:D,saveReminder:function(e){if(D){var t=Object(o.a)({},e);delete t.index;var a=Object(S.a)(V);a[e.index]=t,a.sort(se);var n=Object(o.a)({},J);Object(R.assign)(n,Object(x.a)({},s,Object(o.a)(Object(o.a)({},Object(R.get)(J,"".concat(s),{})),{},Object(x.a)({},i,Object(o.a)(Object(o.a)({},Object(R.get)(J,"".concat(s,".").concat(i),{})),{},Object(x.a)({},r,a)))))),q(n)}else{var c=[].concat(Object(S.a)(V),[e]);c.sort(se);var l=Object(o.a)({},J);Object(R.assign)(l,Object(x.a)({},s,Object(o.a)(Object(o.a)({},Object(R.get)(J,"".concat(s),{})),{},Object(x.a)({},i,Object(o.a)(Object(o.a)({},Object(R.get)(J,"".concat(s,".").concat(i),{})),{},Object(x.a)({},r,c)))))),q(l)}h(!1)},day:r,month:i,year:s})))};me.defaultProps={disabled:!1,month:0,year:0};var ue=Object(b.a)((function(){return{root:{width:"13%",minWidth:"13%",borderRadius:0,height:"16.75vh"},content:{padding:"1px"},title:{fontSize:14},drawer:{width:300},disabled:{width:"13%",minWidth:"13%",borderRadius:0,height:"16.75vh",background:"#EBEBE4"}}}))(me),de=a(332),ge=a.n(de),be=Object(b.a)((function(e){return{root:{minWidth:"13%",width:"13%","max-height":"5vh","border-radius":0,background:e.palette.primary.light},shortTitle:Object(x.a)({display:"inline"},e.breakpoints.up("md"),{display:"none"}),longTitle:Object(x.a)({display:"none"},e.breakpoints.up("md"),{display:"inline"})}}))((function(e){var t=e.classes;return ge.a.map((function(e){return c.a.createElement(N.a,{key:"header-".concat(e.short),className:t.root,variant:"outlined"},c.a.createElement(v.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch"},c.a.createElement(d.a,{variant:"subtitle1",className:t.longTitle,color:"textSecondary",gutterBottom:!0,align:"center"},e.long),c.a.createElement(d.a,{variant:"body2",className:t.shortTitle,color:"textSecondary",gutterBottom:!0,align:"center"},e.short)))}))})),fe=function(e){var t=e.month,a=e.year,n=new Date(a,t+1,0).getDate(),r=new Date(a,t,1).getDay();return c.a.createElement(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:0},c.a.createElement(be,null),function(){var e=new Date(a,t>0?t:12,0).getDate();return Object(S.a)(Array(r)).map((function(t,a){return e-r+1+a}))}().map((function(e){return c.a.createElement(ue,{key:"disabled-".concat(e),disabled:!0,day:e})})),function(){var e=Object(S.a)(Array(n+1).keys());return e.shift(),e}().map((function(e){return c.a.createElement(ue,{key:"enabled-".concat(e),day:e,month:t,year:a})})),function(){var e=7*Math.ceil((n+r)/7)-(n+r),t=Object(S.a)(Array(e+1).keys());return t.shift(),t}().map((function(e){return c.a.createElement(ue,{key:"disabled-".concat(e),disabled:!0,day:e})})))},je=function(){var e=Object(n.useState)((new Date).getMonth()),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)((function(){return(new Date).getFullYear()})),u=Object(l.a)(i,2),d=u[0],g=u[1],b=Object(n.useState)({}),f=Object(l.a)(b,2),j=f[0],E=f[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{month:a,year:d,setNewMonth:r,setNewYear:g}),c.a.createElement(s.a,null),c.a.createElement(m.Provider,{value:Object(o.a)(Object(o.a)({},j),{},{updateReminders:E})},c.a.createElement(fe,{month:a,year:d})))},Ee=c.a.createElement(je,null);i.a.render(Ee,document.getElementById("root"))}},[[342,1,2]]]);
//# sourceMappingURL=main.adc9dd21.chunk.js.map