(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c9395"],{"57da":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[e._l(e.notes,(function(t){return i("v-list-item",{key:t.id,attrs:{"two-line":""}},[i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(t.name))]),i("v-list-item-subtitle",[e._v(e._s(t.description))])],1),i("v-list-item-action",[i("v-btn",{attrs:{icon:""}},[i("v-icon",{attrs:{color:"grey lighten-1"},on:{click:function(i){return e.getNote(t)}}},[e._v("mdi-pencil")])],1),i("v-btn",{attrs:{icon:""}},[i("v-icon",{attrs:{color:"grey lighten-1"},on:{click:function(i){return e.deleteNote(t.id)}}},[e._v("mdi-delete")])],1)],1)],1)})),i("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[e._v("New Note")])]),i("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-card-text",[i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[i("v-text-field",{attrs:{value:"",label:"Title*",rules:e.nameRules,required:""},model:{value:e.newTitle,callback:function(t){e.newTitle=t},expression:"newTitle"}})],1),i("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[i("v-textarea",{attrs:{value:"",label:"Descripcion*",rules:e.descRules,required:""},model:{value:e.newContent,callback:function(t){e.newContent=t},expression:"newContent"}})],1)],1)],1),i("small",[e._v("* indicates required files")])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1"},on:{click:function(t){return e.closeModal()}}},[e._v("Close")]),i("v-btn",{attrs:{color:"blue darken-1",disabled:!e.valid},on:{click:function(t){return e.saveNote()}}},[e._v(" "+e._s(e.isEditing?"Edit":"Save")+" ")])],1)],1)],1)],1)],2)},s=[],o=(i("a4d3"),i("e01a"),i("c740"),i("a434"),i("b0c0"),i("c64e")),a=i.n(o),r=[{id:1,name:"Lorem ipsum 1",description:"Lorem ipsum description 1",status:"done"},{id:2,name:"Lorem ipsum 2",description:"Lorem ipsum description 2",status:"done"},{id:3,name:"Lorem ipsum 3",description:"Lorem ipsum description 3",status:"done"},{id:4,name:"Lorem ipsum 4",description:"Lorem ipsum description 4",status:"done"},{id:5,name:"Lorem ipsum 5",description:"Lorem ipsum description 5",status:"done"},{id:6,name:"Lorem ipsum 6",description:"Lorem ipsum description 6",status:"done"},{id:7,name:"Lorem ipsum 7",description:"Lorem ipsum description 7",status:"done"},{id:8,name:"Lorem ipsum 8",description:"Lorem ipsum description 8",status:"done"},{id:9,name:"Lorem ipsum 9",description:"Lorem ipsum description 9",status:"done"},{id:10,name:"Lorem ipsum 10",description:"Lorem ipsum description 10",status:"done"},{id:11,name:"Lorem ipsum 11",description:"Lorem ipsum description 11",status:"done"},{id:12,name:"Lorem ipsum 12",description:"Lorem ipsum description 12",status:"done"},{id:13,name:"Lorem ipsum 13",description:"Lorem ipsum description 13",status:"done"}],d={name:"Home",components:{},data:function(){return{notes:[],dialog:!1,valid:!1,newTitle:"",newContent:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e.length>=4||"Name must be at last 4 character"}],descRules:[function(e){return!!e||"Name is required"},function(e){return e.length>=10||"Description must be at last 10 character"}],isEditing:!1,idToEdit:-1}},mounted:function(){var e=this;this.notes=r,this.$root.$on("NEW_NOTE",(function(t){t&&e.newNote()}))},methods:{newNote:function(){this.dialog=!0},closeModal:function(){this.dialog=!1,this.reset()},saveNote:function(){var e=this;if(this.isEditing){var t=this.notes.findIndex((function(t){return t.id===e.idToEdit})),i={id:this.idToEdit,name:this.newTitle,description:this.newContent};this.notes[t]=i}else{var n={id:a()(),name:this.newTitle,description:this.newContent};this.notes.push(n)}this.closeModal()},deleteNote:function(e){var t=this.notes.findIndex((function(t){return t.id===e}));this.notes.splice(t,1)},getNote:function(e){this.idToEdit=e.id,this.newTitle=e.name,this.newContent=e.description,this.isEditing=!0,this.dialog=!0},reset:function(){this.isEditing=!1,this.newTitle="",this.newContent="",this.idToEdit=-1}}},c=d,l=i("2877"),u=i("6544"),m=i.n(u),p=i("8336"),v=i("b0af"),f=i("99d9"),h=i("a523"),L=i("169a"),w=i("0e8f"),b=i("4bd4"),g=i("132d"),T=i("a722"),V=i("da13"),x=i("1800"),C=i("5d23"),N=i("2fa4"),_=i("8654"),k=i("a844"),E=Object(l["a"])(c,n,s,!1,null,"f1f7f684",null);t["default"]=E.exports;m()(E,{VBtn:p["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VContainer:h["a"],VDialog:L["a"],VFlex:w["a"],VForm:b["a"],VIcon:g["a"],VLayout:T["a"],VListItem:V["a"],VListItemAction:x["a"],VListItemContent:C["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VSpacer:N["a"],VTextField:_["a"],VTextarea:k["a"]})}}]);
//# sourceMappingURL=chunk-2d0c9395.840c6086.js.map