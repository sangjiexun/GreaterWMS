(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{"0481e":function(e,t){},"722c":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","margin-top":"-20px"}},[n("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[n("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[n("q-btn-group",{attrs:{push:""}},[n("q-btn",{attrs:{label:"New",icon:"add"},on:{click:function(t){e.newForm=!0}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             New one data\n           ")])],1),n("q-btn",{attrs:{label:"refresh",icon:"refresh"},on:{click:function(t){return e.reFresh()}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             Refresh data\n           ")])],1),n("q-btn",{attrs:{label:"Download",icon:"cloud_download"},on:{click:function(t){return e.downloadData()}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n            Download 1 month data\n           ")])],1)],1),n("q-space"),n("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:"Search word"},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[n("q-tr",{attrs:{props:t}},[t.row.id===e.editid?[n("q-td",{key:"bin_size",attrs:{props:t}},[n("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Bin_size",autofocus:"",rules:[function(e){return e&&e.length>0||"Please Enter the Bin_size"}]},model:{value:e.editFormData.bin_size,callback:function(t){e.$set(e.editFormData,"bin_size",t)},expression:"editFormData.bin_size"}})],1)]:t.row.id!==e.editid?[n("q-td",{key:"bin_size",attrs:{props:t}},[e._v("\n             "+e._s(t.row.bin_size)+"\n           ")])]:e._e(),t.row.id===e.editid?[n("q-td",{key:"bin_size_w",attrs:{props:t}},[n("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:"bin_size_W(Unit:mm)",rules:[function(e){return e&&e>0||"Bin_size width must greater than 0"}]},model:{value:e.editFormData.bin_size_w,callback:function(t){e.$set(e.editFormData,"bin_size_w",e._n(t))},expression:"editFormData.bin_size_w"}})],1)]:t.row.id!==e.editid?[n("q-td",{key:"bin_size_w",attrs:{props:t}},[e._v("\n             "+e._s(t.row.bin_size_w)+"\n           ")])]:e._e(),t.row.id===e.editid?[n("q-td",{key:"bin_size_d",attrs:{props:t}},[n("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:"Bin_size_D(Unit:mm)",rules:[function(e){return e&&e>0||"Bin_size depth must greater than 0"}]},model:{value:e.editFormData.bin_size_d,callback:function(t){e.$set(e.editFormData,"bin_size_d",e._n(t))},expression:"editFormData.bin_size_d"}})],1)]:t.row.id!==e.editid?[n("q-td",{key:"bin_size_d",attrs:{props:t}},[e._v("\n             "+e._s(t.row.bin_size_d)+"\n           ")])]:e._e(),t.row.id===e.editid?[n("q-td",{key:"bin_size_h",attrs:{props:t}},[n("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Bin_size_H(Unit:mm)",rules:[function(e){return e&&e>0||"Bin_size height must greater than 0"}]},model:{value:e.editFormData.bin_size_h,callback:function(t){e.$set(e.editFormData,"bin_size_h",t)},expression:"editFormData.bin_size_h"}})],1)]:t.row.id!==e.editid?[n("q-td",{key:"bin_size_h",attrs:{props:t}},[e._v("\n             "+e._s(t.row.bin_size_h)+"\n           ")])]:e._e(),n("q-td",{key:"creater",attrs:{props:t}},[e._v("\n           "+e._s(t.row.creater)+"\n         ")]),n("q-td",{key:"create_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.create_time)+"\n         ")]),n("q-td",{key:"update_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.update_time)+"\n         ")]),e.editMode?e.editMode?[t.row.id===e.editid?[n("q-td",{key:"action",attrs:{props:t}},[n("q-btn",{attrs:{round:"",flat:"",push:"",color:"secondary",icon:"check"},on:{click:function(t){return e.editDataSubmit()}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                Confirm edit data\n              ")])],1),n("q-btn",{attrs:{round:"",flat:"",push:"",color:"red",icon:"close"},on:{click:function(t){return e.editDataCancel()}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                Cancel edit data\n              ")])],1)],1)]:t.row.id!==e.editid?void 0:e._e()]:e._e():[n("q-td",{key:"action",attrs:{props:t}},[n("q-btn",{attrs:{round:"",flat:"",push:"",color:"secondary",icon:"edit"},on:{click:function(n){return e.editData(t.row)}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                Edit one line\n              ")])],1),n("q-btn",{attrs:{round:"",flat:"",push:"",color:"red",icon:"delete"},on:{click:function(n){return e.deleteData(t.row.id)}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                Delete one line\n              ")])],1)],1)]],2)]}}])})],1),[n("div",{staticClass:"q-pa-lg flex flex-center"},[n("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:"Previous",icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          Previous\n        ")])],1),n("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:"Next","icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          Next\n        ")])],1)],1)],n("q-dialog",{model:{value:e.newForm,callback:function(t){e.newForm=t},expression:"newForm"}},[n("q-card",{staticClass:"shadow-24"},[n("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[n("div",[e._v("New one data")]),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",[e._v("Close")])],1)],1),n("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[n("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Bin_size",autofocus:"",rules:[function(e){return e&&e.length>0||"Please Enter the Bin_size"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.bin_size,callback:function(t){e.$set(e.newFormData,"bin_size",t)},expression:"newFormData.bin_size"}}),n("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:"Bin_size_W(Unit:mm)",rules:[function(e){return e&&e>0||"Bin_size width must greater than 0"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.bin_size_w,callback:function(t){e.$set(e.newFormData,"bin_size_w",e._n(t))},expression:"newFormData.bin_size_w"}}),n("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:"Bin_size_D(Unit:mm)",rules:[function(e){return e&&e>0||"Bin_size depth must greater than 0"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.bin_size_d,callback:function(t){e.$set(e.newFormData,"bin_size_d",e._n(t))},expression:"newFormData.bin_size_d"}}),n("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:"Bin_size_H(Unit:mm)",rules:[function(e){return e&&e>0||"Bin_size height must greater than 0"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.bin_size_h,callback:function(t){e.$set(e.newFormData,"bin_size_h",e._n(t))},expression:"newFormData.bin_size_h"}})],1),n("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[n("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.newDataCancel()}}},[e._v("Cancel")]),n("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.newDataSubmit()}}},[e._v("Submit")])],1)],1)],1),n("q-dialog",{model:{value:e.deleteForm,callback:function(t){e.deleteForm=t},expression:"deleteForm"}},[n("q-card",{staticClass:"shadow-24"},[n("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[n("div",[e._v("Delete one data")]),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",[e._v("Close")])],1)],1),n("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[e._v("\n       This is an irreversible process.\n     ")]),n("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[n("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.deleteDataCancel()}}},[e._v("Cancel")]),n("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.deleteDataSubmit()}}},[e._v("Submit")])],1)],1)],1)],2)},a=[],o=(n("5319"),n("3004")),s={name:"Pagebinsize",data(){return{openid:"",login_name:"",authin:"0",pathname:"binsize/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"bin_size",required:!0,label:"Bin_size",align:"left",field:"bin_size"},{name:"bin_size_w",label:"Bin_size_W(Unit:mm)",field:"bin_size_w",align:"center"},{name:"bin_size_d",label:"Bin_size_D(Unit:mm)",field:"bin_size_d",align:"center"},{name:"bin_size_h",label:"Bin_size_H(Unit:mm)",field:"bin_size_h",align:"center"},{name:"creater",label:"Creater",field:"creater",align:"center"},{name:"create_time",label:"Create_time",field:"create_time",align:"center"},{name:"update_time",label:"Update_time",field:"update_time",align:"center"},{name:"action",label:"Action",align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},newForm:!1,newFormData:{bin_size:"",bin_size_w:"",bin_size_d:"",bin_size_h:"",creater:""},editid:0,editFormData:{},editMode:!1,deleteForm:!1,deleteid:0,sender:"",receiver:"",chat:!1,chat_list:"",chat_text:"",chat_next:null}},methods:{getList(){var e=this;e.$q.localStorage.has("auth")&&Object(o["d"])(e.pathname,{}).then((t=>{if(e.table_list=t.results,t.previous){var n=t.previous.split(":")[0];t.previous.replace(n,window.location.href.split(":")[0]),e.pathname_previous=t.previous}else e.pathname_previous=t.previous;if(t.next){var i=t.next.split(":")[0];t.next.replace(i,window.location.href.split(":")[0]),e.pathname_next=t.next}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;e.$q.localStorage.has("auth")&&Object(o["d"])(e.pathname_previous,{}).then((t=>{if(e.table_list=t.results,t.previous){var n=t.previous.split(":")[0];t.previous.replace(n,window.location.href.split(":")[0]),e.pathname_previous=t.previous}else e.pathname_previous=t.previous;if(t.next){var i=t.next.split(":")[0];t.next.replace(i,window.location.href.split(":")[0]),e.pathname_next=t.next}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;e.$q.localStorage.has("auth")&&Object(o["d"])(e.pathname_next,{}).then((t=>{if(e.table_list=t.results,t.previous){var n=t.previous.split(":")[0];t.previous.replace(n,window.location.href.split(":")[0]),e.pathname_previous=t.previous}else e.pathname_previous=t.previous;if(t.next){var i=t.next.split(":")[0];t.next.replace(i,window.location.href.split(":")[0]),e.pathname_next=t.next}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()},newDataSubmit(){var e=this;e.newFormData.creater=e.login_name,Object(o["f"])(e.pathname,e.newFormData).then((t=>{400===t.status_code?e.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===t.status_code?e.$q.notify({message:t.detail,icon:"close",color:"negative"}):(e.getList(),e.newDataCancel(),e.$q.notify({message:"Success Create",icon:"check",color:"green"}))})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},newDataCancel(){var e=this;e.newForm=!1,e.newFormData={bin_size:"",bin_size_w:0,bin_size_d:0,bin_size_h:0,creater:""}},editData(e){var t=this;t.editMode=!0,t.editid=e.id,t.editFormData={bin_size:e.bin_size,bin_size_w:e.bin_size_w,bin_size_d:e.bin_size_d,bin_size_h:e.bin_size_h,creater:t.login_name}},editDataSubmit(){var e=this;Object(o["g"])(e.pathname+e.editid+"/",e.editFormData).then((t=>{400===t.status_code?e.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===t.status_code?e.$q.notify({message:t.detail,icon:"close",color:"negative"}):(e.editDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"}))})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},editDataCancel(){var e=this;e.editMode=!1,e.editid=0,e.editFormData={bin_size:"",bin_size_w:0,bin_size_d:0,bin_size_h:0,creater:""}},deleteData(e){var t=this;t.deleteForm=!0,t.deleteid=e},deleteDataSubmit(){var e=this;Object(o["c"])(e.pathname+e.deleteid+"/").then((t=>{400===t.status_code?e.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===t.status_code?e.$q.notify({message:t.detail,icon:"close",color:"negative"}):(e.deleteDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"}))})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},deleteDataCancel(){var e=this;e.deleteForm=!1,e.deleteid=0}},created(){var e=this;e.$q.localStorage.has("openid")?e.openid=e.$q.localStorage.getItem("openid"):(e.openid="",e.$q.localStorage.set("openid","")),e.$q.localStorage.has("login_name")?e.login_name=e.$q.localStorage.getItem("login_name"):(e.login_name="",e.$q.localStorage.set("login_name","")),e.$q.localStorage.has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"},updated(){},destroyed(){}},r=s,l=n("2877"),c=n("e95e"),d=n("eaac"),u=n("e7a9"),p=n("9c40"),_=n("05c0"),m=n("2c91"),h=n("27f9"),b=n("0016"),f=n("bd08"),g=n("db86"),v=n("24e8"),w=n("f09f"),q=n("d847"),z=n("a370"),y=n("7f67"),x=n("eebe"),k=n.n(x),D=Object(l["a"])(r,i,a,!1,null,null,null);"function"===typeof c["default"]&&Object(c["default"])(D);t["default"]=D.exports;k()(D,"components",{QTable:d["a"],QBtnGroup:u["a"],QBtn:p["a"],QTooltip:_["a"],QSpace:m["a"],QInput:h["a"],QIcon:b["a"],QTr:f["a"],QTd:g["a"],QDialog:v["a"],QCard:w["a"],QBar:q["a"],QCardSection:z["a"]}),k()(D,"directives",{ClosePopup:y["a"]})},e95e:function(e,t,n){"use strict";var i=n("0481e"),a=n.n(i);t["default"]=a.a}}]);