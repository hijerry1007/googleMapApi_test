(function(t){function e(e){for(var n,i,o=e[0],c=e[1],u=e[2],p=0,m=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0392":function(t,e,a){},"15b0":function(t,e,a){},3097:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,r,s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-4"},[a("Search"),a("Restaurants")],1),a("div",{staticClass:"col-8"},[a("Map",{staticClass:"map"})],1)])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h1",{staticClass:"title"},[t._v("GoogleMapApi:尋找鄰近的餐廳")])])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"search"},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.site,expression:"site"}],ref:"site",staticClass:"form-control",attrs:{type:"text",placeholder:"Google幫你找"},domProps:{value:t.site},on:{input:function(e){e.target.composing||(t.site=e.target.value)}}}),a("button",{staticClass:"btn btn-info ml-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.search(e)}}},[t._v("搜尋")])])])])},u=[],l=(a("d81d"),a("5530")),p=a("2f62"),m={name:"Search",data:function(){return{autocomplete:null,site:"",place:null}},computed:Object(l["a"])(Object(l["a"])({},Object(p["b"])({nameFromStore:["googleApi","map"]})),{},{googleApi:{get:function(){return this.$store.state.google},set:function(t){return t}},map:{get:function(){return this.$store.state.map},set:function(t){return t}}}),watch:{googleApi:function(t){this.googleApi=t,this.autoSite()},map:function(t){this.map=t}},methods:{autoSite:function(){var t=this,e={componentRestrictions:{country:"tw"}};this.autocomplete=new this.googleApi.maps.places.Autocomplete(this.$refs.site,e),this.autocomplete.addListener("place_changed",(function(){if(t.place=t.autocomplete.getPlace(),t.place.geometry){var e={lat:t.place.geometry.location.lat(),lng:t.place.geometry.location.lng()};t.$store.dispatch("handleMapCenter",e)}}))},search:function(){var t=this,e=new this.googleApi.maps.Geocoder;console.log(this.site),e.geocode({address:this.site,componentRestrictions:{country:"tw"}},(function(e,a){if("OK"===a){var n={lat:e[0].geometry.location.lat(),lng:e[0].geometry.location.lng()};t.$store.dispatch("handleMapCenter",n)}else alert("查無地址")}))}}},d=m,f=a("2877"),g=Object(f["a"])(d,c,u,!1,null,null,null),h=g.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("GmapLoader",{attrs:{apiKey:t.apiKey},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.google,r=e.map;return t._l(t.markers,(function(t){return a("GoogleMapMarker",{key:t.id,attrs:{marker:t,google:n,map:r}})}))}}])})},b=[],w=(a("4160"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{ref:"googleMap",staticClass:"google-map"}),Boolean(this.google)&&Boolean(this.map)?[t._t("default",null,{google:t.google,map:t.map})]:t._e()],2)}),y=[],C=(a("96cf"),a("1da1")),O=a("f464"),_=a.n(O),j={clickableIcons:!1,streetViewControl:!1,panControlOptions:!1,gestureHandling:"cooperative",mapTypeControl:!1,zoomControlOptions:{style:"SMALL"},zoom:16,minZoom:2,maxZoom:20,mapTypeId:"terrain"},M={path:"M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",strokeOpacity:.7,strokeWeight:4,strokeColor:"rgb(0, 184, 83)",fillColor:"rgb(255, 255, 255)",fillOpacity:.7,scale:1},k={name:"GmapLoader",props:{apiKey:String},data:function(){return{google:null,map:null,infoWindow:null,query:{mapCenter:null,radius:400,type:"restaurant"},mapConfig:Object(l["a"])({},j)}},computed:Object(l["a"])(Object(l["a"])({},Object(p["b"])({nameFromStore:"mapCenter"})),{},{mapCenter:{get:function(){return this.$store.state.mapCenter},set:function(t){return t}}}),watch:{mapCenter:function(t){this.mapConfig=Object(l["a"])(Object(l["a"])({},this.mapConfig),{},{center:t}),null!==this.map&&(this.map.panTo(this.mapConfig.center),this.getMarker(this.query,this.mapConfig.center))}},created:function(){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var a={lat:e.coords.latitude,lng:e.coords.longitude};t.$store.commit("getMapCenter",a)}),(function(t){console.log("Error",t)})):alert("您的瀏覽器無法自動定位您所在的位置")},mounted:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_()({apiKey:t.apiKey,libraries:["places"],language:"zh-TW"});case 2:a=e.sent,t.google=a,t.$store.dispatch("handleGoogle",t.google),t.initializeMap();case 6:case"end":return e.stop()}}),e)})))()},methods:{initializeMap:function(){var t=this.$refs.googleMap;this.map=new this.google.maps.Map(t,this.mapConfig),this.$store.dispatch("handleMap",this.map);var e=this;this.map.addListener("click",(function(t){var a={lat:t.latLng.lat(),lng:t.latLng.lng()};e.$store.dispatch("handleMapCenter",a)}))},getMarker:function(t,e){var a=Object(l["a"])(Object(l["a"])({},t),{},{mapCenter:e,apiKey:this.apiKey});this.$store.dispatch("fetchRestaurant",a)}}},S=k,x=(a("8862"),Object(f["a"])(S,w,y,!1,null,"4ef4555a",null)),R=x.exports,L={name:"GoogleMapMarker",props:{google:{type:Object,require:!0},map:{type:Object,require:!0},marker:{type:Object,require:!0}},data:function(){return{mapMarker:[]}},mounted:function(){var t=this.google.maps.Marker,e=new t({position:this.marker.geometry.location,map:this.map,icon:M});this.mapMarker.push(e)},beforeDestroy:function(){this.mapMarker[0].setMap(null)},render:function(){return this.marker}},$=L,I=Object(f["a"])($,n,r,!1,null,null,null),A=I.exports,G={name:"Map",components:{GmapLoader:R,GoogleMapMarker:A},data:function(){return{apiKey:"AIzaSyBw9XXv9GWmY4wA7ItCKR74EfQJeHHdMOk",infoWindow:null,markers:[]}},methods:{getMarkers:function(t){var e=this;this.markers=[],t.forEach((function(t){t=Object(l["a"])(Object(l["a"])({},t),{},{id:t.place_id}),e.markers.push(t)}))}},computed:Object(l["a"])(Object(l["a"])({},Object(p["b"])({nameFromStore:"restaurantList"})),{},{restaurantList:{get:function(){return this.$store.state.restaurants},set:function(t){return t}}}),watch:{restaurantList:function(t){void 0!==t[0]&&this.getMarkers(t)}}},E=G,K=Object(f["a"])(E,v,b,!1,null,null,null),D=K.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"restaurantBox"},[a("Spinner",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isRestaurantIn,expression:"!isRestaurantIn"}]},[t._v("附近沒有餐廳")]),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.isRestaurantIn,expression:"isRestaurantIn"}]},t._l(t.restaurants,(function(e,n){return a("li",{key:n,attrs:{restaurant:e}},[a("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("p",{staticClass:"card-text"},[a("small",{staticClass:"text-muted"},[t._v("地址:"+t._s(e.vicinity))])]),a("button",{staticClass:"btn btn-info btn-sm mt-2",attrs:{type:"button"},on:{click:function(a){return t.getDetails(e.place_id)}}},[t._v("More")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isDetailShow&&t.isShowRestaurantId===e.place_id,expression:"isDetailShow && isShowRestaurantId === restaurant.place_id"}]},[a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[t._v("電話: "+t._s(t.details.formatted_phone_number))]),a("li",{staticClass:"list-group-item"},[t._v(" 網址: "),a("a",{staticClass:"card-link",attrs:{href:t.details.website}},[t._v(t._s(t.details.website))])]),a("li",{staticClass:"list-group-item"},[t._v("評價: "+t._s(t.details.rating)+"顆星")])]),a("button",{staticClass:"btn btn-info btn-sm mt-2",attrs:{type:"button"},on:{click:function(e){return t.isShow()}}},[t._v("Close")])])])])])])])})),0)])],1)},N=[],z=(a("b0c0"),a("99af"),a("bc3a")),T=a.n(z),W={getNearbyRestaurant:function(t){return T.a.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=".concat(t.mapCenter.lat,",").concat(t.mapCenter.lng,"&type=").concat(t.type,"&radius=").concat(t.radius,"&key=").concat(t.apiKey))},getRestaurantDetail:function(t){return T.a.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=".concat(t,"&fields=name,rating,formatted_phone_number,reviews,website&key=").concat("AIzaSyBw9XXv9GWmY4wA7ItCKR74EfQJeHHdMOk","\n"))}},q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"bouncing-loader"},[a("div"),a("div"),a("div")])])}],H={name:"Spinner"},F=H,J=(a("76cc"),Object(f["a"])(F,q,B,!1,null,"c8a8e0d0",null)),X=J.exports,Q={name:"Restaurants",components:{Spinner:X},data:function(){return{isDetailShow:!1,isShowRestaurantId:null,isRestaurantIn:!1,details:{name:"",formatted_phone_number:"",website:"",rating:""},restaurants:{}}},computed:Object(l["a"])(Object(l["a"])({},Object(p["b"])({nameFromStore:["restaurantList","isLoading"]})),{},{restaurantList:{get:function(){return this.$store.state.restaurants},set:function(t){var e=t.map((function(t){return Object(l["a"])(Object(l["a"])({},t),{},{name:t.name.substring(0,15)})}));return e}},isLoading:{get:function(){return this.$store.state.isLoading},set:function(t){return t}}}),watch:{restaurantList:function(t){null!==t&&(this.isRestaurantIn=!0),void 0===t[0]&&(this.isRestaurantIn=!1),null===t&&(this.isRestaurantIn=!1),this.restaurants=Object(l["a"])(Object(l["a"])({},this.restaurants),t)}},methods:{isShow:function(t){this.isShowRestaurantId=t,this.isDetailShow=!this.isDetailShow},getDetails:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,W.getRestaurantDetail(t);case 2:n=a.sent,r=n.data,e.details=Object(l["a"])(Object(l["a"])({},e.details),r.result),e.isShow(t);case 6:case"end":return a.stop()}}),a)})))()}}},Y=Q,Z=(a("ca98"),Object(f["a"])(Y,P,N,!1,null,"0c8ad80a",null)),V=Z.exports,U={name:"App",components:{Search:h,Map:D,Restaurants:V}},tt=U,et=(a("8dde"),Object(f["a"])(tt,i,o,!1,null,"080c366c",null)),at=et.exports,nt=a("5f5b");a("f9e3"),a("2dd8");s["default"].use(p["a"]);var rt=new p["a"].Store({state:{restaurants:null,mapCenter:{lat:25.03746,lng:121.564558},google:null,map:null,isLoading:!1},getters:{googleApi:function(t){return t.google},map:function(t){return t.map},restaurantList:function(t){return t.restaurants},mapCenter:function(t){return t.mapCenter},isLoading:function(t){return t.isLoading}},mutations:{getMapCenter:function(t,e){t.mapCenter=Object(l["a"])(Object(l["a"])({},t.mapCenter),e)},addRestaurant:function(t,e){t.restaurants=null,t.restaurants=e},updateGoogle:function(t,e){t.google=e},updateMap:function(t,e){t.map=e},updateIsLoading:function(t){t.isLoading=!t.isLoading}},actions:{fetchRestaurant:function(t,e){return Object(C["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,n("updateIsLoading"),a.next=4,W.getNearbyRestaurant(e);case 4:for(r=a.sent,s=r.data,i=[],o=0;o<10;o++)i.push(s.results[o]);n("addRestaurant",i),n("updateIsLoading");case 10:case"end":return a.stop()}}),a)})))()},handleGoogle:function(t,e){var a=t.commit;a("updateGoogle",e)},handleMap:function(t,e){var a=t.commit;a("updateMap",e)},handleMapCenter:function(t,e){var a=t.commit;a("getMapCenter",e)}},modules:{}});s["default"].use(nt["a"]),s["default"].config.productionTip=!1,new s["default"]({store:rt,render:function(t){return t(at)}}).$mount("#app")},"76cc":function(t,e,a){"use strict";var n=a("3097"),r=a.n(n);r.a},8862:function(t,e,a){"use strict";var n=a("0392"),r=a.n(n);r.a},"8dde":function(t,e,a){"use strict";var n=a("15b0"),r=a.n(n);r.a},c657:function(t,e,a){},ca98:function(t,e,a){"use strict";var n=a("c657"),r=a.n(n);r.a}});
//# sourceMappingURL=app.515cdfdf.js.map