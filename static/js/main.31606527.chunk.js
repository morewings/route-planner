(this["webpackJsonproute-planner"]=this["webpackJsonproute-planner"]||[]).push([[0],{44:function(e,t,n){e.exports=n.p+"static/media/dragIcon.62cd9b58.svg"},45:function(e,t,n){e.exports=n.p+"static/media/deleteIcon.7cfdc2fe.svg"},48:function(e,t,n){e.exports=n(99)},58:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=n(1),l=n(2),u=n(38),s=n(17),d=n(9),m=n(11),p=function(e,t,n){var a=Object(s.a)(n),r=a.splice(e,1),c=Object(m.a)(r,1)[0];return a.splice(t,0,c),a},f=function(e,t){return t.filter((function(t){return t.id!==e}))},E={coordinates:[]},b=Object(l.c)({route:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COORDINATES":return Object(d.a)({},e,{coordinates:[].concat(Object(s.a)(e.coordinates),[t.payload])});case"REORDER_COORDINATES":return Object(d.a)({},e,{coordinates:p(t.payload.source,t.payload.destination,e.coordinates)});case"DELETE_COORDINATES":return Object(d.a)({},e,{coordinates:f(t.payload,e.coordinates)});default:return e}}}),O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,g=Object(l.e)(b,O(Object(l.a)(u.a))),v=n(39),y=function(e){var t=e.lat,n=e.lng;return{lat:t(),lng:n(),id:Object(v.uniqueId)("point-")}},j=function(e){return e.map((function(e){var t=e.lat,n=e.lng;return{lat:function(){return t},lng:function(){return n}}}))},I=r.a.createContext({}),k=n(40),N=n.n(k),R=function(e){Object(a.useEffect)((function(){var t=!0;return N()({key:"AIzaSyBCbeUFkZ9KzIQy_7ziGyVB0fr2ERKd5bI"}).then((function(n){t&&e(n)})).catch((function(e){t&&console.error(e)})),function(){t=!1}}),[e])},D=function(e){var t=e.center,n=e.zoom,c=e.onClick,o=e.children,i=e.className,l=Object(a.useRef)(),u=Object(a.useRef)(),s=Object(a.useState)(!0),d=Object(m.a)(s,2),p=d[0],f=d[1],E=Object(a.useState)(!1),b=Object(m.a)(E,2),O=b[0],g=b[1],v=Object(a.useCallback)((function(e){return f(!1),u.current={googleAPI:e,mapInstance:new e.Map(l.current,{zoom:n,center:t})},u.current.mapInstance.addListener("click",(function(e){c(e.latLng)})),g(!0),function(){u.current.googleAPI.event.clearListeners(u.current.mapInstance,"click")}}),[t,n,c]);return R(v),p?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:i,ref:l},O&&r.a.createElement(I.Provider,{value:u.current},o))},w=function(e){var t=e.position,n=Object(a.useContext)(I),c=n.googleAPI,o=n.mapInstance,i=Object(a.useRef)();return Object(a.useEffect)((function(){return i.current=new c.Marker({position:t,title:"#",map:o}),function(){i.current.setMap(null)}}),[c,o,t]),r.a.createElement(a.Fragment,null)},C=function(e){var t=e.polylineOptions,n=e.coordinates,c=Object(a.useContext)(I),o=c.googleAPI,i=c.mapInstance,l=Object(a.useRef)();return Object(a.useEffect)((function(){l.current=new o.Polyline(t),l.current.setMap(i);var e=l.current.getPath();return n.forEach((function(t){e.push(t)})),function(){l.current.setMap(null)}}),[o,i,n,t]),r.a.createElement(a.Fragment,null)},h=function(){var e=Object(i.d)((function(e){return e.route.coordinates}));return r.a.createElement(a.Fragment,null,e.map((function(e){return r.a.createElement(w,{position:e,key:e.id})})),r.a.createElement(C,{coordinates:j(e),polylineOptions:{strokeColor:"#000000",strokeOpacity:1,strokeWeight:3}}))},x=(n(58),{lat:37.234332396,lng:-115.80666344}),A=function(){var e=Object(i.c)(),t=Object(a.useCallback)((function(t){return e({type:"ADD_COORDINATES",payload:y(t)})}),[e]);return r.a.createElement("div",{className:"map"},r.a.createElement(D,{className:"map-container",onClick:t,center:x,polyLineOptions:{strokeColor:"#000000",strokeOpacity:1,strokeWeight:3},zoom:9},r.a.createElement(h,null)))},S=n(18),_=function(e){var t=e.items,n=e.onReorder,a=e.listItem;return r.a.createElement(S.a,{onDragEnd:function(e){e.destination&&n(e.source.index,e.destination.index)}},r.a.createElement(S.c,{droppableId:"droppable"},(function(e,n){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:(n.isDraggingOver,{padding:8,width:"100%",boxSizing:"border-box"})}),t.map((function(e,t){return r.a.createElement(S.b,{key:e.id,draggableId:e.id,index:t},(function(n,c){return r.a.createElement("div",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps,{style:(o=c.isDragging,i=n.draggableProps.style,Object(d.a)({userSelect:"none",padding:"".concat(16," 0"),margin:"0 0 ".concat(8,"px 0"),background:o?"rgb(195, 228, 82)":""},i))}),r.a.createElement(a,{index:t,item:e}));var o,i}))})),e.placeholder)})))};_.defaultProps={items:[]};var P=_,T=n(44),L=n.n(T),z=n(45),M=n.n(z),B=(n(93),function(e){var t=e.index,n=e.item,a=e.onDelete;return r.a.createElement("div",{className:"waypoint"},r.a.createElement("div",{className:"waypoint-dragHandle"},r.a.createElement("i",{className:"waypoint-icon"},r.a.createElement("img",{src:L.a,alt:"drag"}))),r.a.createElement("div",{className:"waypoint-name"},"Waypoint ",t+1),r.a.createElement("div",{className:"waypoint-actions"},r.a.createElement("i",{tabIndex:0,role:"button",className:"waypoint-icon",onClick:function(){a(n.id)}},r.a.createElement("img",{src:M.a,alt:"delete"}))))}),F=(n(94),function(){var e=Object(i.d)((function(e){return e.route.coordinates})),t=Object(i.c)(),n=Object(a.useCallback)((function(e,n){t({type:"REORDER_COORDINATES",payload:{source:e,destination:n}})}),[t]),c=Object(a.useCallback)((function(e){t({type:"DELETE_COORDINATES",payload:e})}),[t]);return r.a.createElement("div",{className:"route-control"},r.a.createElement(P,{listItem:function(e){return r.a.createElement(B,Object.assign({},e,{onDelete:c}))},onReorder:n,items:e}))}),W=n(46),H=function(e){return new Blob([e],{type:"text/xml;charset=utf-8"})},J=n(47),K=n.n(J),U=function(e){return r.a.createElement("gpx",e)},V=function(e){return r.a.createElement("rte",e)},X=function(e){return r.a.createElement("rtept",e)},q=function(e){var t=e.coordinates;return r.a.createElement(U,{version:"1.1",creator:"route-planner"},r.a.createElement(V,{name:"Your route"},t.map((function(e){var t=e.lat,n=e.lng,a=e.id;return r.a.createElement(X,{lat:t,lng:n,key:a})}))))},G=function(e){var t=K.a.renderToStaticMarkup(r.a.createElement(q,{coordinates:e}));return'<?xml version="1.0"?>\n'.concat(t)},Q=(n(96),function(){var e=Object(i.d)((function(e){return e.route.coordinates})),t=0!==e.length;return r.a.createElement("div",null,r.a.createElement("button",{type:"button",disabled:!t,onClick:function(){if(t){var n=G(e);Object(W.saveAs)(H(n),"route.gpx")}},className:"download-button"},"Download your Route"))}),Y=(n(97),function(e){return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h3",null,"Route Builder"),r.a.createElement("div",{className:"routecontrol-wrapper"},r.a.createElement(F,null)),r.a.createElement("div",{className:"download-wrapper"},r.a.createElement(Q,null)))}),Z=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(Y,null),r.a.createElement(A,null))};n(98);o.a.render(r.a.createElement(i.a,{store:g},r.a.createElement(Z,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.31606527.chunk.js.map