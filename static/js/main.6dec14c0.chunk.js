(this["webpackJsonproute-planner"]=this["webpackJsonproute-planner"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"ADD_COORDINATES",(function(){return d})),n.d(a,"REORDER_COORDINATES",(function(){return m})),n.d(a,"DELETE_COORDINATES",(function(){return p}));var r={};n.r(r),n.d(r,"getRouteCoordinates",(function(){return f}));var c=n(0),o=n.n(c),i=n(6),l=n.n(i),u=n(3),s=n(14),d="ADD_COORDINATES",m="REORDER_COORDINATES",p="DELETE_COORDINATES",f=function(e){return e.route.coordinates},E=n(23),b=n(7),O=n(16),g=function(e,t,n){var a=Object(E.a)(n),r=a.splice(e,1),c=Object(O.a)(r,1)[0];return a.splice(t,0,c),a},v=function(e,t){return t.filter((function(t){return t.id!==e}))},y={coordinates:[]},j=Object(s.b)({route:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(b.a)({},e,{coordinates:[].concat(Object(E.a)(e.coordinates),[t.payload])});case m:return Object(b.a)({},e,{coordinates:g(t.payload.source,t.payload.destination,e.coordinates)});case p:return Object(b.a)({},e,{coordinates:v(t.payload,e.coordinates)});default:return e}}}),I=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),R=Object(s.c)(j,I),D=n(22),C=function(e){var t=e.lat,n=e.lng;return{lat:t(),lng:n(),id:Object(D.uniqueId)("point-")}},N=function(e){return e.map((function(e){var t=e.lat,n=e.lng;return{lat:function(){return t},lng:function(){return n}}}))},k=o.a.createContext({}),h=n(41),w=n.n(h),S=function(e){Object(c.useEffect)((function(){var t=!0;return w()({key:"AIzaSyBCbeUFkZ9KzIQy_7ziGyVB0fr2ERKd5bI"}).then((function(n){t&&e(n)})).catch((function(e){t&&console.error(e)})),function(){t=!1}}),[e])},_=function(e){var t=e.center,n=e.zoom,a=e.onClick,r=e.children,i=e.className,l=Object(c.useRef)(),u=Object(c.useRef)(),s=Object(c.useState)(!0),d=Object(O.a)(s,2),m=d[0],p=d[1],f=Object(c.useState)(!1),E=Object(O.a)(f,2),b=E[0],g=E[1],v=Object(c.useCallback)((function(e){return p(!1),u.current={googleAPI:e,mapInstance:new e.Map(l.current,{zoom:n,center:t,mapTypeId:"terrain"})},u.current.mapInstance.addListener("click",(function(e){a(e.latLng)})),g(!0),function(){u.current.googleAPI.event.clearListeners(u.current.mapInstance,"click")}}),[t,n,a]);return S(v),m?o.a.createElement("div",null,"Loading..."):o.a.createElement("div",{className:i,ref:l},b&&o.a.createElement(k.Provider,{value:u.current},r))},x=o.a.memo((function(e){var t=e.position,n=e.iconStyle,a=e.labelOptions,r=Object(c.useContext)(k),i=r.googleAPI,l=r.mapInstance;return Object(c.useEffect)((function(){var e=new i.Marker({position:t,title:a.title,map:l,label:{text:a.label,color:a.color},icon:Object(b.a)({path:i.SymbolPath.CIRCLE},n)});return function(){e.setMap(null)}}),[i,l,t,n,a.title,a.label,a.color]),o.a.createElement(c.Fragment,null)}),(function(e,t){return Object(D.isEqual)(e,t)})),A=function(e){var t=e.polylineOptions,n=e.coordinates,a=Object(c.useContext)(k),r=a.googleAPI,i=a.mapInstance;return Object(c.useEffect)((function(){var e=new r.Polyline(t);e.setMap(i);var a=e.getPath();return n.forEach((function(e){a.push(e)})),function(){e.setMap(null)}}),[r,i,n,t]),o.a.createElement(c.Fragment,null)},T=function(){var e=Object(u.c)(r.getRouteCoordinates);return o.a.createElement(c.Fragment,null,e.map((function(e,t){return o.a.createElement(x,{labelOptions:{color:"white",label:"".concat(t+1),title:"Waypoint ".concat(t+1)},position:e,key:e.id,iconStyle:{strokeWeight:0,scale:16,fillColor:"#000",fillOpacity:1}})})),e.length>1&&o.a.createElement(A,{coordinates:N(e),polylineOptions:{strokeColor:"#1086E7",strokeOpacity:1,strokeWeight:5}}))},P=(n(59),{lat:37.234332396,lng:-115.80666344}),L=function(){var e=Object(u.b)(),t=Object(c.useCallback)((function(t){return e({type:a.ADD_COORDINATES,payload:C(t)})}),[e]);return o.a.createElement("div",{className:"map"},o.a.createElement(_,{className:"map-container",onClick:t,center:P,polyLineOptions:{strokeColor:"#000000",strokeOpacity:1,strokeWeight:3},zoom:9},o.a.createElement(T,null)))},z=n(24),M=function(e){var t=e.items,n=e.onReorder,a=e.listItem;return o.a.createElement(z.a,{onDragEnd:function(e){e.destination&&n(e.source.index,e.destination.index)}},o.a.createElement(z.c,{droppableId:"droppable"},(function(e,n){return o.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:(n.isDraggingOver,{padding:8,width:"100%",boxSizing:"border-box"})}),t.map((function(e,t){return o.a.createElement(z.b,{key:e.id,draggableId:e.id,index:t},(function(n,r){return o.a.createElement("div",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps,{style:(c=r.isDragging,i=n.draggableProps.style,Object(b.a)({userSelect:"none",padding:"".concat(16," 0"),margin:"0 0 ".concat(8,"px 0"),background:c?"rgb(195, 228, 82)":""},i))}),o.a.createElement(a,{index:t,item:e}));var c,i}))})),e.placeholder)})))};M.defaultProps={items:[]};var B=M,W=n(45),F=n.n(W),X=n(46),U=n.n(X),V=(n(94),function(e){var t=e.index,n=e.item,a=e.onDelete;return o.a.createElement("div",{className:"waypoint"},o.a.createElement("div",{className:"waypoint-dragHandle"},o.a.createElement("i",{className:"waypoint-icon"},o.a.createElement("img",{src:F.a,alt:"drag"}))),o.a.createElement("div",{className:"waypoint-name"},"Waypoint ",t+1),o.a.createElement("div",{className:"waypoint-actions"},o.a.createElement("i",{tabIndex:0,role:"button",className:"waypoint-icon",onClick:function(){a(n.id)}},o.a.createElement("img",{src:U.a,alt:"delete"}))))}),q=(n(95),function(){var e=Object(u.c)(r.getRouteCoordinates),t=Object(u.b)(),n=Object(c.useCallback)((function(e,n){t({type:a.REORDER_COORDINATES,payload:{source:e,destination:n}})}),[t]),i=Object(c.useCallback)((function(e){t({type:a.DELETE_COORDINATES,payload:e})}),[t]);return o.a.createElement("div",{className:"route-control"},o.a.createElement(B,{listItem:function(e){return o.a.createElement(V,Object.assign({},e,{onDelete:i}))},onReorder:n,items:e}))}),H=n(47),J=function(e){return new Blob([e],{type:"text/xml;charset=utf-8"})},K=n(48),G=n.n(K),Q=function(e){return o.a.createElement("gpx",e)},Y=function(e){return o.a.createElement("rte",e)},Z=function(e){return o.a.createElement("rtept",e)},$=function(e){var t=e.coordinates;return o.a.createElement(Q,{version:"1.1",creator:"route-planner"},o.a.createElement(Y,{name:"Your route"},t.map((function(e){var t=e.lat,n=e.lng,a=e.id;return o.a.createElement(Z,{lat:t,lng:n,key:a})}))))},ee=function(e){var t=G.a.renderToStaticMarkup(o.a.createElement($,{coordinates:e}));return'<?xml version="1.0"?>\n'.concat(t)},te=(n(97),function(){var e=Object(u.c)(r.getRouteCoordinates),t=0!==e.length;return o.a.createElement("div",null,o.a.createElement("button",{type:"button",disabled:!t,onClick:function(){if(t){var n=ee(e);Object(H.saveAs)(J(n),"route.gpx")}},className:"download-button"},"Download your Route"))}),ne=(n(98),function(e){return o.a.createElement("div",{className:"dashboard"},o.a.createElement("h3",null,"Route Builder"),o.a.createElement("div",{className:"routecontrol-wrapper"},o.a.createElement(q,null)),o.a.createElement("div",{className:"download-wrapper"},o.a.createElement(te,null)))}),ae=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(ne,null),o.a.createElement(L,null))};n(99);l.a.render(o.a.createElement(u.a,{store:R},o.a.createElement(ae,null)),document.getElementById("root"))},45:function(e,t,n){e.exports=n.p+"static/media/dragIcon.62cd9b58.svg"},46:function(e,t,n){e.exports=n.p+"static/media/deleteIcon.7cfdc2fe.svg"},49:function(e,t,n){e.exports=n(100)},59:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[49,1,2]]]);
//# sourceMappingURL=main.6dec14c0.chunk.js.map