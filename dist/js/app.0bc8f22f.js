(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,v=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0929":function(t,e,a){"use strict";a("a172")},"56d7":function(t,e,a){"use strict";a.r(e);var s={};a.r(s),a.d(s,"getListOfDetails",(function(){return G})),a.d(s,"getGstin",(function(){return M})),a.d(s,"getPortcode",(function(){return A}));var i={};a.r(i),a.d(i,"setListOfDetails",(function(){return q})),a.d(i,"setPortcode",(function(){return N})),a.d(i,"setGstin",(function(){return F}));var n={};a.r(n),a.d(n,"setListOfDetails",(function(){return J})),a.d(n,"setGstin",(function(){return V})),a.d(n,"setPortcode",(function(){return H}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},c=[],l={name:"App"},u=l,d=(a("034f"),a("2877")),v=Object(d["a"])(u,o,c,!1,null,null,null),m=v.exports,p=(a("4989"),a("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[this.loading?a("div",{attrs:{id:"myDiv1"}},[a("div",{staticClass:"spinner-border loader text-primary",attrs:{role:"status"}})]):t._e(),a("table",{attrs:{id:"pagetable",border:"0",width:"100%",align:"center"}},[t._m(0),t._m(1),a("tr",[a("td",{staticClass:"TDlabel ltborder",attrs:{align:"right"}},[t._v("Port Code")]),a("td",{attrs:{align:"left"}},[a("input",{attrs:{type:"text",id:"portCode",name:"portCode",value:"",maxlength:"6"}}),a("span",{staticClass:"status clickable",staticStyle:{color:"red"},attrs:{id:"checkPort"},on:{click:function(e){return t.checkAvailability()}}},[a("b",[t._v("Click Here to Validate Port Code")])]),a("span",{staticClass:"asterix"},[t._v("*")])])]),a("tr",[a("td",{staticClass:"TDlabel ltborder",attrs:{align:"right"}},[t._v("Return Month")]),a("td",{attrs:{align:"left"}},[t._m(2),a("select",{attrs:{id:"yearSelector"}},t._l(t.years,(function(e){return a("option",{key:e.name},[t._v(t._s(e.name))])})),0),a("span",{staticClass:"asterix"},[t._v("*")])])]),t._m(3),a("tr",{attrs:{align:"center"}},[a("td",{staticClass:"ltborder",attrs:{colspan:"3"}},[a("div",{staticStyle:{display:"none"},attrs:{id:"Pwait"}},[t._v(" Please wait.... ")]),a("div",{staticStyle:{display:"block"},attrs:{id:"SubButton"}},[a("input",{attrs:{id:"SubB",name:"Search",type:"button",value:"Submit"},on:{click:function(e){return t.submitForm()}}}),t._v(" "),a("input",{attrs:{id:"Reset",name:"Reset",type:"reset",value:"Reset",onclick:"javascript:location.reload(true);"}})])])]),t._m(4)])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticClass:"formHead",attrs:{align:"left",colspan:"3"}},[t._v("IGST Validation Details Enquiry")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"TDlabel ltborder",attrs:{align:"right"}},[t._v("GSTIN")]),a("td",{attrs:{align:"left"}},[a("input",{attrs:{type:"text",id:"gstin",name:"gstin",maxLength:"15"}}),a("span",{staticClass:"asterix"},[t._v("*")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{attrs:{id:"selector"}},[a("option",{attrs:{value:"1"}},[t._v("Jan")]),a("option",{attrs:{value:"2"}},[t._v("Feb")]),a("option",{attrs:{value:"3"}},[t._v("Mar")]),a("option",{attrs:{value:"4"}},[t._v("Apr")]),a("option",{attrs:{value:"5"}},[t._v("May")]),a("option",{attrs:{value:"6"}},[t._v("Jun")]),a("option",{attrs:{value:"7"}},[t._v("Jul")]),a("option",{attrs:{value:"8"}},[t._v("Aug")]),a("option",{attrs:{value:"9"}},[t._v("Sep")]),a("option",{attrs:{value:"10"}},[t._v("Oct")]),a("option",{attrs:{value:"11"}},[t._v("Nov")]),a("option",{attrs:{value:"12"}},[t._v("Dec")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("Captcha")]),a("td",[a("p",[a("img",{attrs:{src:"CaptchaImg.jpg",id:"capimg",name:"imgCaptcha",border:"0",alt:"",height:"10%",width:"50%"}}),a("a",{attrs:{href:"javascript:;",title:"change captcha text",onclick:"document.getElementById('capimg').src = 'CaptchaImg.jpg?' + Math.random();  return false"}},[a("img",{attrs:{src:"./reload.png",height:"22px",width:"22px"}})])]),a("input",{attrs:{type:"text",id:"captchaResp",name:"captchaResp",size:"20",maxlength:"10"}}),a("span",{staticClass:"asterix"},[t._v("*")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"ltborder",attrs:{colspan:"2"}},[a("p"),a("p",[a("span",{staticClass:"asterix"},[t._v("* All fileds are mandatory.")])])])])}],h=(a("96cf"),a("1da1")),_=a("bc3a"),b=a.n(_),y={baseUrl:"http://localhost:8080/validationigst/API/"},C=y.baseUrl,D=function(){return console.log("basr url from statics is ",C),b.a.create({baseURL:C,timeout:45e3})},P={submitFormData:function(t){return D().post("getIgstValData",t,{timeout:9e4})},getCaptcha:function(){return D().post("ServiceFromSweety")},checkingPortAvailability:function(t){return D().get("checkingPortAvailability/"+t,{timeout:9e4})}},w={name:"EnquiryPage",data:function(){return{years:[{name:2017},{name:2018},{name:2019},{name:2020},{name:2021},{name:2022},{name:2023},{name:2024},{name:2025},{name:2026},{name:2027}],loading:!1,listOfDetails:[],validPortCode:!1}},mounted:function(){this.$store.commit("documentList/setListOfDetails",[]),this.$store.commit("documentList/setGstin",""),this.$store.commit("documentList/setPortcode","")},methods:{submitForm:function(){this.$store.commit("documentList/setListOfDetails",[]),this.$store.commit("documentList/setGstin",""),this.$store.commit("documentList/setPortcode","");var t=document.getElementById("captchaResp").value,e=document.getElementById("portCode").value,a=document.getElementById("gstin").value,s=document.querySelector("#selector").value,i=document.querySelector("#yearSelector").value,n={gstin:a,captcha:t,portCode:e,returnMonth:s,returnYear:i};if(console.log("input"+JSON.stringify(n)),this.validPortCode)if(t&&e&&a&&s&&i){this.loading=!0;try{var r=P.submitFormData(n);if(console.log("this the res",r),200==r.status){var o=r.data.listOfDetails;this.$store.commit("documentList/setListOfDetails",o),this.$store.commit("documentList/setGstin",r.data.gstn),this.$store.commit("documentList/setPortcode",r.data.portCode),this.loading=!1,this.$router.push({name:"SuccessPage"})}}catch(c){console.log(c)}}else alert("Please fill all mandatory fields.");else alert("Please enter a valid port code and check availability.")},dataValidation:function(){return!!(document.getElementById("icegateId").value&document.getElementById("portCode").value&document.getElementById("gstin").value)},checkAvailability:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!document.getElementById("portCode").value){e.next=17;break}return t.loading=!0,t.validPortCode=!1,e.prev=3,e.next=6,P.checkingPortAvailability(document.getElementById("portCode").value);case 6:a=e.sent,console.log("this the res",a),200==a.status&&("available"===a.data?(document.getElementById("checkPort").style.color="green",document.getElementById("checkPort").value="Available",t.validPortCode=!0):(document.getElementById("checkPort").style.color="red",document.getElementById("checkPort").value="Please enter a valid port code.",t.validPortCode=!1)),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),console.log(e.t0);case 14:t.loading=!1,e.next=18;break;case 17:alert("Please enter a valid port code.");case 18:case"end":return e.stop()}}),e,null,[[3,11]])})))()},refreshCaptcha:function(){return document.getElementById("capimg").src="CaptchaImg.jpg?"+Math.random(),!1},portChanged:function(){document.getElementById("checkPort").style.color="red",document.getElementById("available").value="Please enter a valid port code."}}},E=w,O=(a("90bb"),Object(d["a"])(E,f,g,!1,null,"5aa5a988",null)),S=O.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"myBox"},[this.loading?a("div",{attrs:{id:"myDiv1"}},[this.loading?a("div",{staticClass:"spinner-border loader text-primary",attrs:{role:"status"}}):t._e()]):t._e(),a("div",{staticClass:"topMostHeader"},[t._v("IGST Validation Details Enquiry")]),t._m(0),a("div",{staticClass:"firstTableRows"},[a("div",{staticClass:"row myRow"},[a("div",{staticClass:"tableRowDiv col-sm-3"},[t._v(t._s(this.gstin))]),a("div",{staticClass:"tableRowDiv col-sm-3"},[t._v(t._s(this.portcode))]),a("div",{staticClass:"secondCol col-sm-3"}),a("div",{staticClass:"secondCol col-sm-3"})])]),t._m(1),a("div",{staticClass:"secondTableRows"},t._l(t.listOfDetails,(function(e){return a("div",{key:e.gstin,staticClass:"row myRow"},[a("div",{staticClass:"tableRowDiv col-sm-1"},[t._v(t._s(e.sbNumber))]),a("div",{staticClass:"tableRowDiv col-sm-1"},[t._v(t._s(e.sbDate))]),a("div",{staticClass:"tableRowDiv col-sm-1"},[t._v(t._s(e.returnMonth))]),a("div",{staticClass:"tableRowDiv col-sm-1"},[t._v(t._s(e.invoiceNumber))]),a("div",{staticClass:"tableRowDiv col-sm-1"},[t._v(t._s(e.invoiceDate))]),a("div",{staticClass:"tableRowDiv col-sm-1"},[t._v(t._s(e.responseCode))]),a("div",{staticClass:"tableRowDiv col-sm-1"},[t._v(t._s(e.processedOn))]),a("div",{staticClass:"tableRowDiv col-sm-1"},[t._v(t._s(e.sbType))])])})),0)])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"firstTable"},[a("div",{staticClass:"row myRow"},[a("div",{staticClass:"headerDiv col-sm-3"},[t._v("GSTIN No")]),a("div",{staticClass:"headerDiv col-sm-3"},[t._v("Port Code")]),a("div",{staticClass:"secondCol col-sm-3"}),a("div",{staticClass:"secondCol col-sm-3"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"secondTable"},[a("div",{staticClass:"row myRow"},[a("div",{staticClass:"headerDiv col-sm-1"},[t._v("Shipping Bill Number")]),a("div",{staticClass:"headerDiv col-sm-1"},[t._v("Shipping Bill Date")]),a("div",{staticClass:"headerDiv col-sm-1"},[t._v("Return Month")]),a("div",{staticClass:"headerDiv col-sm-1"},[t._v(" Invoice Number ")]),a("div",{staticClass:"headerDiv col-sm-1"},[t._v(" Invoice Date ")]),a("div",{staticClass:"headerDiv col-sm-1"},[t._v(" Response code ")]),a("div",{staticClass:"headerDiv col-sm-1"},[t._v(" Processed Date ")]),a("div",{staticClass:"headerDiv col-sm-1"},[t._v("Shipping Bill Type")])])])}],I={name:"SuccessPage",props:{msg:String},data:function(){return{listOfDetails:this.$store.getters["documentList/getListOfDetails"],gstin:this.$store.getters["documentList/getGstin"],portcode:this.$store.getters["documentList/getPortcode"],loading:!1}},mounted:function(){this.$store.getters["documentList/getGstin"]||this.$router.push({name:"EnquiryPage"})},methods:{}},R=I,$=(a("0929"),Object(d["a"])(R,x,k,!1,null,"10b75a0c",null)),L=$.exports;r["a"].use(p["a"]);var B=new p["a"]({routes:[{path:"*",name:"EnquiryPage",component:S},{path:"/",name:"EnquiryPage",component:S},{path:"/EnquiryPage",name:"EnquiryPage",component:S},{path:"/SuccessPage",name:"SuccessPage",component:L}]}),j=a("2f62"),T={listOfDetails:[],gstin:"",portcode:""},G=function(t){return t.listOfDetails},M=function(t){return t.gstin},A=function(t){return t.portcode},q=function(t,e){t.listOfDetails=e},N=function(t,e){t.portcode=e},F=function(t,e){t.gstin=e},J=function(t,e){t.commit("setListOfDetails",e)},V=function(t,e){t.commit("setGstin",e)},H=function(t,e){t.commit("setPortcode",e)},U={namespaced:!0,state:T,getters:s,mutations:i,actions:n};r["a"].use(j["a"]),r["a"].config.devtools=!0;var z=function(){var t=new j["a"].Store({modules:{documentList:U}});return t};a("ab8b"),a("8147"),r["a"].config.productionTip=!1,new r["a"]({router:B,store:z,render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,a){},"90bb":function(t,e,a){"use strict";a("e7c2")},a172:function(t,e,a){},e7c2:function(t,e,a){}});
//# sourceMappingURL=app.0bc8f22f.js.map