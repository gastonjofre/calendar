(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{317:function(e,t){e.exports=["January","February","March","April","May","June","July","August","September","October","November","December"]},333:function(e,t){e.exports=[{long:"Sunday",short:"Sun"},{long:"Monday",short:"Mon"},{long:"Tuesday",short:"Tues"},{long:"Wednesday",short:"Wed"},{long:"Thursday",short:"Thurs"},{long:"Friday",short:"Fri"},{long:"Saturday",short:"Sat"}]},347:function(e,t,a){e.exports=a(750)},750:function(e,t,a){"use strict";a.r(t);a(348),a(398);var n=a(0),c=a.n(n),r=a(25),i=a.n(r),o=a(19),l=a(26),s=a(791),m=Object(n.createContext)({}),u=a(789),g=a(753),d=a(792),b=a(5),f=a(317),h=a.n(f),j=a(322),p=a.n(j),y=a(321),E=a.n(y),O=Object(b.a)((function(e){return{appBar:{backgroundColor:e.palette.common.white},toolbar:{display:"flex",justifyContent:"space-between"},monthYearText:{fontWeight:500},changeMonth:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}}}))((function(e){var t=e.classes,a=e.month,n=e.year,r=e.setNewMonth,i=e.setNewYear,o=function(e){12===e?(r(0),i(n+1)):-1===e?(r(11),i(n-1)):r(e)};return c.a.createElement(u.a,{position:"fixed",className:t.appBar},c.a.createElement(s.a,{className:t.toolbar},c.a.createElement("div",null,c.a.createElement(g.a,{variant:"h5",className:t.monthYearText,display:"inline",color:"primary"},"".concat(h.a[a]," ").concat(n))),c.a.createElement("div",null,c.a.createElement(d.a,{"aria-label":"left",className:t.changeMonth,onClick:function(){return o(a-1)}},c.a.createElement(E.a,null)),c.a.createElement(d.a,{"aria-label":"right",onClick:function(){return o(a+1)}},c.a.createElement(p.a,null)))))})),v=a(90),x=a(799),w=a(34),N=a(800),S=a(802),k=a(803),C=a(810),B=a(332),R=a.n(B),D=a(13),I=a(68),L=a.n(I),_=a(794),M=a(796),T=a(797),W=a(798),F=a(793),z=a(53),Y=function(e){var t=e.title,a=e.onCancel,n=e.onConfirm,r=Object(z.a)(),i=Object(F.a)(r.breakpoints.down("sm"));return c.a.createElement(_.a,{fullScreen:i,open:!0,onClose:a,"aria-labelledby":"responsive-confirmation"},c.a.createElement(M.a,{id:"responsive-confirmation-title"},t),c.a.createElement(T.a,null,c.a.createElement(W.a,{autoFocus:!0,onClick:a,color:"secondary"},"Cancel"),c.a.createElement(W.a,{onClick:n,color:"primary",autoFocus:!0},"Confirm")))},A=a(804),P=a(807),H=a(323),J=a(808),q="https://api.weatherapi.com/v1/",U=function(e){var t=e.classes,a=e.day,r=e.month,i=e.year,o=e.city;(new Date).setHours(0,0,0,0);var s=Object(n.useState)(null),m=Object(l.a)(s,2),u=m[0],d=m[1],b=Object(n.useCallback)((function(){if(""!==o){var e=new Date;e.setHours(0,0,0,0);var t=new Date(i,r,a),n=L()(t).diff(e,"days")+1,c=o.split(",")[0];L()(e).isBefore(t)&&n<=10&&fetch("".concat(q,"forecast.json?key=").concat("63580f4cb70f4398aa8175248201409","&q=").concat(c,"&days=").concat(n)).then((function(e){return e.json()})).then((function(e){if(!("error"in e)){var a=Object(D.get)(e,"forecast.forecastday",[]).find((function(e){return L()(e.date).isSame(t)}));a&&d({condition:Object(D.get)(a,"day.condition",{}),max_temp:Object(D.get)(a,"day.maxtemp_c",null),min_temp:Object(D.get)(a,"day.mintemp_c",null),current_temp:null})}})),L()(e).isAfter(t)&&n<=30&&fetch("".concat(q,"history.json?key=").concat("63580f4cb70f4398aa8175248201409","&q=").concat(c,"&dt=").concat(L()(t).format("YYYY-MM-DD"))).then((function(e){return e.json()})).then((function(e){if(!("error"in e)){var a=Object(D.get)(e,"forecast.forecastday",[]).find((function(e){return L()(e.date).isSame(t)}));a&&d({condition:Object(D.get)(a,"day.condition",{}),max_temp:Object(D.get)(a,"day.maxtemp_c",null),min_temp:Object(D.get)(a,"day.mintemp_c",null),current_temp:null})}})),L()(e).isSame(t)&&fetch("".concat(q,"current.json?key=").concat("63580f4cb70f4398aa8175248201409","&q=").concat(c)).then((function(e){return e.json()})).then((function(e){if(!("error"in e)){var t=Object(D.get)(e,"current",{});d({condition:Object(D.get)(t,"condition",{}),max_temp:null,min_temp:null,current_temp:t.temp_c})}}))}}),[o,i,r,a]);return Object(n.useEffect)((function(){b()}),[o,b]),c.a.createElement(x.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch"},c.a.createElement(N.a,{key:"header-".concat(a),className:t.weatherCard},null!==u?c.a.createElement(x.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2},c.a.createElement(x.a,{item:!0,xs:3},c.a.createElement(J.a,{alt:Object(D.get)(u,"condition.text",""),src:Object(D.get)(u,"condition.icon","")})),c.a.createElement(x.a,{item:!0,xs:9},c.a.createElement(g.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},Object(D.get)(u,"condition.text","")),u.current_temp?c.a.createElement(g.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Current temp: ".concat(u.current_temp," \xb0C")):c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Max. temp: ".concat(u.max_temp," \xb0C")),c.a.createElement(g.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Min. temp: ".concat(u.min_temp," \xb0C"))))):c.a.createElement(g.a,{className:t.warning,color:"textSecondary",gutterBottom:!0,align:"center"},"Weather not available for this day")))};U.defaultProps={month:0,year:0,city:""};var V=Object(b.a)((function(e){return{weatherCard:{boxShadow:e.shadows[5],marginLeft:e.spacing(3),marginRight:e.spacing(3)},title:{fontSize:15,marginLeft:e.spacing(3),marginRight:e.spacing(3)},subtitle:{fontSize:13,marginLeft:e.spacing(3),marginRight:e.spacing(3)},warning:{fontSize:15,marginTop:e.spacing(5),marginBottom:e.spacing(5)}}}))(U),G=function(e){var t=e.classes,a=e.date,r=e.saveReminder,i=e.reminder,o=e.day,s=e.month,m=e.year,u=Object(n.useState)(Object(D.get)(i,"title","")),d=Object(l.a)(u,2),b=d[0],f=d[1],h=Object(n.useState)(Object(D.get)(i,"time","09:30")),j=Object(l.a)(h,2),p=j[0],y=j[1],E=Object(n.useState)(Object(D.get)(i,"city","")),O=Object(l.a)(E,2),v=O[0],w=O[1],N=Object(n.useState)(!1),S=Object(l.a)(N,2),k=S[0],C=S[1],B=Object(n.useState)([]),R=Object(l.a)(B,2),I=R[0],L=R[1],_=Object(n.useState)(Object(D.get)(i,"city","")),M=Object(l.a)(_,2),T=M[0],F=M[1],z=Object(n.useState)(Object(D.get)(i,"color",{hex:"#607d8b",source:"hex"})),Y=Object(l.a)(z,2),J=Y[0],q=Y[1],U=Object(n.useCallback)((function(){if(T.length>=3){var e="https://api.weatherapi.com/v1/search.json?key=".concat("63580f4cb70f4398aa8175248201409","&q=").concat(T);fetch(e).then((function(e){return e.json()})).then((function(e){L(e)}))}}),[T]);return Object(n.useEffect)((function(){U()}),[T,U]),c.a.createElement(x.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch"},c.a.createElement(x.a,{item:!0,className:t.container},c.a.createElement(A.a,{id:"title-input",label:"Title",value:b,helperText:"".concat(b.length,"/30"),fullWidth:!0,onChange:function(e){C(e.target.value.length>30),f(e.target.value)},error:k,className:t.input,margin:"normal"})),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(g.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},"".concat(a.toDateString()))),c.a.createElement(x.a,{item:!0,className:t.container},c.a.createElement(A.a,{id:"hour-input",label:"Hour",type:"time",fullWidth:!0,value:p,onChange:function(e){return y(e.target.value)},className:t.input,InputLabelProps:{shrink:!0},inputProps:{step:300}})),c.a.createElement(x.a,{item:!0,className:t.container},c.a.createElement(P.a,{id:"city-auto-input",options:I,fullWidth:!0,getOptionLabel:function(e){return e.name},className:t.input,inputValue:T,margin:"normal",onInputChange:function(e,t){e&&("change"===e.type&&F(void 0!==t?t:""),"click"===e.type&&(w(void 0!==t?t:""),F(void 0!==t?t:"")))},renderInput:function(e){return c.a.createElement(A.a,Object.assign({},e,{label:"City"}))}})),v&&c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(g.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},"Weather")),c.a.createElement(V,{day:o,month:s,year:m,city:v})),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(g.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},"Color")),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(H.CirclePicker,{onChange:function(e){return q(e)},color:J})),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(W.a,{variant:"contained",color:"primary",onClick:function(){b.length<=0&&C(!0),b.length<=30&&b.length>0&&(r({title:b,time:p,date:a,city:v,color:J,index:Object(D.get)(i,"index",null)}),f(""),y("09:30"),w(""),q({hex:"#607d8b",source:"hex"}))}},"Save")))};G.defaultProps={reminder:{},month:0,year:0};var K=Object(b.a)((function(e){return{title:{fontSize:15,marginLeft:e.spacing(2),marginRight:e.spacing(2)},container:{display:"flex",flexWrap:"wrap",width:"100%",marginTop:e.spacing(1),marginBottom:e.spacing(2)},input:{marginLeft:e.spacing(3),marginRight:e.spacing(3)}}}))(G),Q=a(326),X=a.n(Q),Z=a(327),$=a.n(Z),ee=a(328),te=a.n(ee),ae=a(330),ne=a.n(ae),ce=a(329),re=a.n(ce),ie=a(331),oe=a.n(ie),le=a(801),se=Object(b.a)((function(e){return{title:{fontSize:20,marginLeft:e.spacing(2),marginRight:e.spacing(2)},subtitle:{fontSize:15,marginLeft:e.spacing(2),marginRight:e.spacing(2)},content:{fontSize:13,marginLeft:e.spacing(2),marginRight:e.spacing(2)},container:{display:"flex",flexWrap:"wrap",width:"100%",marginTop:e.spacing(1),marginBottom:e.spacing(2)},input:{marginLeft:e.spacing(3),marginRight:e.spacing(3)}}}))((function(e){var t=e.classes,a=e.reminder,r=e.deleteReminder,i=e.editReminder,o=Object(n.useState)(!1),s=Object(l.a)(o,2),m=s[0],u=s[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch"},c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"flex-end",alignItems:"center"},c.a.createElement(d.a,{color:"primary","aria-label":"upload picture",component:"span",onClick:i},c.a.createElement(X.a,null)),c.a.createElement(d.a,{color:"primary","aria-label":"upload picture",component:"span",onClick:function(){return u(!0)}},c.a.createElement($.a,null))),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(g.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},a.title)),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(g.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Date")),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},c.a.createElement(x.a,{item:!0,xs:3,container:!0,direction:"row",justify:"center"},c.a.createElement(te.a,null)),c.a.createElement(x.a,{item:!0,xs:9},c.a.createElement(g.a,{className:t.content,color:"textSecondary",gutterBottom:!0,align:"justify"},"".concat(a.date.toDateString())))),c.a.createElement(le.a,null),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(g.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Hour")),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},c.a.createElement(x.a,{item:!0,xs:3,container:!0,direction:"row",justify:"center"},c.a.createElement(re.a,null)),c.a.createElement(x.a,{item:!0,xs:9},c.a.createElement(g.a,{className:t.content,color:"textSecondary",gutterBottom:!0,align:"justify"},"".concat(Object(D.get)(a,"time",""))))),c.a.createElement(le.a,null),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(g.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"City")),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},c.a.createElement(x.a,{item:!0,xs:3,container:!0,direction:"row",justify:"center"},c.a.createElement(ne.a,null)),c.a.createElement(x.a,{item:!0,xs:9},c.a.createElement(g.a,{className:t.content,color:"textSecondary",gutterBottom:!0,align:"justify"},"".concat(""===a.city?"Unspecified":a.city)))),c.a.createElement(le.a,null),""!==a.city&&c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(g.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Weather")),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(V,{day:a.date.getDate(),month:a.date.getMonth(),year:a.date.getFullYear(),city:a.city})),c.a.createElement(le.a,null)),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(g.a,{className:t.subtitle,color:"textSecondary",gutterBottom:!0,align:"center"},"Color")),c.a.createElement(x.a,{item:!0,className:t.container,container:!0,direction:"row",justify:"space-around",alignItems:"center",spacing:1},c.a.createElement(x.a,{item:!0,xs:3,container:!0,direction:"row",justify:"center"},c.a.createElement(oe.a,null)),c.a.createElement(x.a,{item:!0,xs:9},c.a.createElement(N.a,{style:{backgroundColor:a.color.hex}},c.a.createElement(S.a,null)))),c.a.createElement(le.a,null)),m&&c.a.createElement(Y,{title:"Are you sure you want to delete this reminder?",onConfirm:function(){u(!1),r(a)},onCancel:function(){return u(!1)}}))})),me=a(809),ue=a(806),ge=Object(b.a)((function(e){return{popover:{minWidth:"14vw",width:"14vw",borderRadius:0,minHeight:"10vh",marginLeft:e.spacing(3),marginRight:e.spacing(3),marginBottom:e.spacing(2),marginTop:e.spacing(2)},title:{fontSize:14},clickable:{cursor:"pointer"}}}))((function(e){var t=e.classes,a=e.reminders,r=e.showReminderInfo,i=Object(n.useState)(!1),s=Object(l.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)(null),b=Object(l.a)(d,2),f=b[0],h=b[1],j=function(){return a.map((function(e,a){return c.a.createElement(N.a,{key:"".concat(e.title,"-").concat(a),style:{backgroundColor:e.color.hex},className:t.clickable,onClick:function(){return r(Object(o.a)(Object(o.a)({},e),{},{index:a}))}},c.a.createElement(g.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},e.title))}))};return a.length>3?c.a.createElement(c.a.Fragment,null,a.slice(0,2).map((function(e,a){return c.a.createElement(N.a,{key:"".concat(e.title,"-").concat(a),style:{backgroundColor:e.color.hex},className:t.clickable,onClick:function(){return r(Object(o.a)(Object(o.a)({},e),{},{index:a}))}},c.a.createElement(g.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},e.title))})),c.a.createElement(N.a,{key:"more-reminders",style:{backgroundColor:"#2196F3"},className:t.clickable,onClick:function(e){return t=e.currentTarget,u(!0),void h(t);var t}},c.a.createElement(g.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},"+".concat(a.length-2))),c.a.createElement(me.a,{id:"reminders-expanse",open:m,anchorEl:f,onClose:function(){u(!1),h(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"}},c.a.createElement(ue.a,{className:t.popover},c.a.createElement(g.a,{className:t.title,color:"textSecondary",gutterBottom:!0,align:"center"},"Reminders"),j()))):j()})),de=function(e,t){var a=e.time.toLowerCase(),n=t.time.toLowerCase();return a<n?-1:a>n?1:0},be=function(e){var t=e.classes,a=e.disabled,r=e.day,i=e.month,s=e.year,u=e.height,b=Object(n.useContext)(m),f=Object(n.useState)(!1),h=Object(l.a)(f,2),j=h[0],p=h[1],y=Object(n.useState)(!1),E=Object(l.a)(y,2),O=E[0],B=E[1],I=Object(n.useState)(null),_=Object(l.a)(I,2),M=_[0],T=_[1],W=Object(n.useState)(!1),F=Object(l.a)(W,2),z=F[0],A=F[1],P=Object(n.useState)(!1),H=Object(l.a)(P,2),J=H[0],q=H[1],U=new Date(s,i,r),V=Object(o.a)({},b);delete V.updateReminders;var G=Object(D.get)(b,"".concat(s,".").concat(i,".").concat(r),[]),Q=b.updateReminders,X=function(e){T(e),B(!0),p(!1)},Z=function(){T(null),p(!1),B(!1)},$=function(){return z&&G.length>0&&!a},ee=function(){var e,t=G.length>=3?3:G.length;switch(u){case"21vh":e="".concat(85-17*t,"%");break;case"16vh":e="".concat(75-20*t,"%");break;case"14vh":e="".concat(69-20*t,"%")}return e};return Object(n.useEffect)((function(){p(!1),B(!1),T(null),A(!1),q(!1)}),[i,s]),c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a,{className:a?t.disabled:t.root,style:{height:u},variant:"outlined"},c.a.createElement(S.a,{className:t.content},c.a.createElement(x.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch"},c.a.createElement(g.a,{className:t.title,color:"textSecondary",gutterBottom:!$(),align:"center",onMouseEnter:function(){return A(!0)},onMouseLeave:function(){return A(!1)}},$()?c.a.createElement(d.a,{"aria-label":"delete",size:"small",onClick:function(){return q(!0)}},c.a.createElement(R.a,null)):c.a.createElement("span",{className:function(){var e=new Date;return L()(e).isSame(U,"day")}()?t.actualDay:void 0},r)),!a&&c.a.createElement(ge,{reminders:G,showReminderInfo:function(e){T(e),p(!0),B(!1)},height:u}))),!a&&c.a.createElement(k.a,{style:{height:ee(),maxHeight:ee()},onClick:function(){return X(null)}},c.a.createElement(S.a,null))),J&&c.a.createElement(Y,{onConfirm:function(){q(!1);var e=Object(o.a)({},V);Object(D.assign)(e,Object(w.a)({},s,Object(o.a)(Object(o.a)({},Object(D.get)(V,"".concat(s),{})),{},Object(w.a)({},i,Object(o.a)(Object(o.a)({},Object(D.get)(V,"".concat(s,".").concat(i),{})),{},Object(w.a)({},r,[])))))),Q(e)},onCancel:function(){return q(!1)},title:"Are you sure you want to delete ALL the reminders?"}),c.a.createElement(C.a,{open:j||O,anchor:"right",onClose:Z,classes:{paper:t.drawer}},j&&c.a.createElement(se,{reminder:M,editReminder:function(){return X(M)},deleteReminder:function(e){Z(),G.splice(e.index,1);var t=Object(o.a)({},V);Object(D.assign)(t,Object(w.a)({},s,Object(o.a)(Object(o.a)({},Object(D.get)(V,"".concat(s),{})),{},Object(w.a)({},i,Object(o.a)(Object(o.a)({},Object(D.get)(V,"".concat(s,".").concat(i),{})),{},Object(w.a)({},r,G)))))),Q(t)}}),O&&c.a.createElement(K,{date:U,reminder:M,saveReminder:function(e){if(M){var t=Object(o.a)({},e);delete t.index;var a=Object(v.a)(G);a[e.index]=t,a.sort(de);var n=Object(o.a)({},V);Object(D.assign)(n,Object(w.a)({},s,Object(o.a)(Object(o.a)({},Object(D.get)(V,"".concat(s),{})),{},Object(w.a)({},i,Object(o.a)(Object(o.a)({},Object(D.get)(V,"".concat(s,".").concat(i),{})),{},Object(w.a)({},r,a)))))),Q(n)}else{var c=[].concat(Object(v.a)(G),[e]);c.sort(de);var l=Object(o.a)({},V);Object(D.assign)(l,Object(w.a)({},s,Object(o.a)(Object(o.a)({},Object(D.get)(V,"".concat(s),{})),{},Object(w.a)({},i,Object(o.a)(Object(o.a)({},Object(D.get)(V,"".concat(s,".").concat(i),{})),{},Object(w.a)({},r,c)))))),Q(l)}B(!1)},day:r,month:i,year:s})))};be.defaultProps={disabled:!1,month:0,year:0,height:"16.75vh"};var fe=Object(b.a)((function(e){return{root:{width:"13%",minWidth:"13%",borderRadius:0},content:{padding:"1px"},title:{fontSize:14,height:"22%"},actualDay:{borderRadius:"50%",background:e.palette.primary.light,padding:"3px"},drawer:{width:350},disabled:{width:"13%",minWidth:"13%",borderRadius:0,background:"#EBEBE4"}}}))(be),he=a(333),je=a.n(he),pe=Object(b.a)((function(e){return{root:{minWidth:"13%",width:"13%","max-height":"5vh","border-radius":0,background:e.palette.primary.light},shortTitle:Object(w.a)({display:"inline"},e.breakpoints.up("md"),{display:"none"}),longTitle:Object(w.a)({display:"none"},e.breakpoints.up("md"),{display:"inline"})}}))((function(e){var t=e.classes;return je.a.map((function(e){return c.a.createElement(N.a,{key:"header-".concat(e.short),className:t.root,variant:"outlined"},c.a.createElement(x.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch"},c.a.createElement(g.a,{variant:"subtitle1",className:t.longTitle,color:"textSecondary",gutterBottom:!0,align:"center"},e.long),c.a.createElement(g.a,{variant:"body2",className:t.shortTitle,color:"textSecondary",gutterBottom:!0,align:"center"},e.short)))}))})),ye=function(e){var t=e.month,a=e.year,n=new Date(a,t+1,0).getDate(),r=new Date(a,t,1).getDay(),i=function(){var e=new Date(a,t>0?t:12,0).getDate();return Object(v.a)(Array(r)).map((function(t,a){return e-r+1+a}))},o=function(){var e=Object(v.a)(Array(n+1).keys());return e.shift(),e},l=function(){var e=7*Math.ceil((n+r)/7)-(n+r),t=Object(v.a)(Array(e+1).keys());return t.shift(),t},s=function(){var e=null;switch((o().length+i().length+l().length)/7){case 4:e="21vh";break;case 5:e="16vh";break;case 6:e="14vh"}return e};return c.a.createElement(x.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:0},c.a.createElement(pe,null),i().map((function(e){return c.a.createElement(fe,{key:"disabled-".concat(e),disabled:!0,day:e,height:s()})})),o().map((function(e){return c.a.createElement(fe,{key:"enabled-".concat(e),day:e,month:t,year:a,height:s()})})),l().map((function(e){return c.a.createElement(fe,{key:"disabled-".concat(e),disabled:!0,day:e,height:s()})})))},Ee=function(){var e=Object(n.useState)((new Date).getMonth()),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)((function(){return(new Date).getFullYear()})),u=Object(l.a)(i,2),g=u[0],d=u[1],b=Object(n.useState)({}),f=Object(l.a)(b,2),h=f[0],j=f[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{month:a,year:g,setNewMonth:r,setNewYear:d}),c.a.createElement(s.a,null),c.a.createElement(m.Provider,{value:Object(o.a)(Object(o.a)({},h),{},{updateReminders:j})},c.a.createElement(ye,{month:a,year:g})))},Oe=c.a.createElement(Ee,null);i.a.render(Oe,document.getElementById("root"))}},[[347,1,2]]]);
//# sourceMappingURL=main.72a65f72.chunk.js.map