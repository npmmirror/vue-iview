webpackJsonp([10],{HnOf:function(e,t){},"Md+d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Form",{attrs:{model:e.formInline,inline:""}},[n("FormItem",{attrs:{prop:"nickname"}},[n("Input",{attrs:{type:"text",placeholder:"请输入用户昵称"},model:{value:e.formInline.nickname,callback:function(t){e.$set(e.formInline,"nickname",t)},expression:"formInline.nickname"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),e._v(" "),n("FormItem",{attrs:{prop:"phone"}},[n("Input",{attrs:{type:"text",placeholder:"请输入用户手机号"},model:{value:e.formInline.phone,callback:function(t){e.$set(e.formInline,"phone",t)},expression:"formInline.phone"}},[n("Icon",{attrs:{slot:"prepend",type:"iphone"},slot:"prepend"})],1)],1),e._v(" "),n("FormItem",[n("Button",{attrs:{type:"primary"}},[e._v("查询")])],1)],1),e._v(" "),n("Table",{attrs:{border:"",columns:e.columns7,data:e.data6}}),e._v(" "),n("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[n("div",{staticStyle:{float:"right"}},[n("Page",{attrs:{total:100,current:1},on:{"on-change":e.changePage}})],1)])],1)},staticRenderFns:[]};var r=n("VU/8")({data:function(){var e=this;return{formInline:{nickname:"",phone:""},columns7:[{type:"selection",width:60,align:"center"},{width:100,title:"ID",key:"id",align:"center"},{title:"昵称",key:"nickname",align:"center"},{title:"绑定手机号",key:"phone",align:"center"},{title:"关注时间",key:"followTime",align:"center"},{title:"注册时间",key:"regisTime",align:"center"},{title:"用户状态",key:"state",align:"center"},{title:"操作",key:"action",width:150,align:"center",render:function(t,n){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.$router.push("/userDetail/"+n.row.id)}}},"详情"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.show(n.row.id)}}},"封停")])}}],data6:[{id:"1",nickname:"administrator",phone:"12345678964",followTime:"2012-12-12",regisTime:"2012-12-12",createTime:"2012-12-12",state:"启用"},{id:"2",nickname:"administrator",phone:"12345678964",followTime:"2012-12-12",regisTime:"2012-12-12",createTime:"2012-12-12",state:"启用"},{id:"3",nickname:"administrator",phone:"12345678964",followTime:"2012-12-12",regisTime:"2012-12-12",createTime:"2012-12-12",state:"启用"},{id:"4",nickname:"administrator",phone:"12345678964",followTime:"2012-12-12",regisTime:"2012-12-12",createTime:"2012-12-12",state:"启用"},{id:"5",nickname:"administrator",phone:"12345678964",followTime:"2012-12-12",regisTime:"2012-12-12",createTime:"2012-12-12",state:"启用"},{id:"6",nickname:"administrator",phone:"12345678964",followTime:"2012-12-12",regisTime:"2012-12-12",createTime:"2012-12-12",state:"启用"}]}},methods:{show:function(e){this.$Message.info(e)},changePage:function(e){}}},i,!1,function(e){n("HnOf")},"data-v-db587148",null);t.default=r.exports}});
//# sourceMappingURL=10.13116c1e6eeb13840cc7.js.map