(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jianli-add-or-update"],{1843:function(r,e,i){"use strict";var t=i("a79c"),o=i.n(t);o.a},"7ec4":function(r,e,i){"use strict";i.r(e);var t=i("9a8e"),o=i("e15e");for(var n in o)"default"!==n&&function(r){i.d(e,r,(function(){return o[r]}))}(n);i("1843");var a,l=i("f0c5"),s=Object(l["a"])(o["default"],t["b"],t["c"],!1,null,"4f78acb6",null,!1,t["a"],a);e["default"]=s.exports},"9a8e":function(r,e,i){"use strict";var t,o=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("学生账号")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.xueshengzhanghao,placeholder:"学生账号"},model:{value:r.ruleForm.xueshengzhanghao,callback:function(e){r.$set(r.ruleForm,"xueshengzhanghao",e)},expression:"ruleForm.xueshengzhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("学生姓名")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.xueshengxingming,placeholder:"学生姓名"},model:{value:r.ruleForm.xueshengxingming,callback:function(e){r.$set(r.ruleForm,"xueshengxingming",e)},expression:"ruleForm.xueshengxingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("性别")]),i("v-uni-picker",{attrs:{value:r.xingbieIndex,range:r.xingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.xingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("年龄")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.nianling,placeholder:"年龄"},model:{value:r.ruleForm.nianling,callback:function(e){r.$set(r.ruleForm,"nianling",e)},expression:"ruleForm.nianling"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("学历")]),i("v-uni-picker",{attrs:{value:r.xueliIndex,range:r.xueliOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.xueliChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.xueli?r.ruleForm.xueli:"请选择学历"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("专业")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.zhuanye,placeholder:"专业"},model:{value:r.ruleForm.zhuanye,callback:function(e){r.$set(r.ruleForm,"zhuanye",e)},expression:"ruleForm.zhuanye"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("毕业学校")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.biyexuexiao,placeholder:"毕业学校"},model:{value:r.ruleForm.biyexuexiao,callback:function(e){r.$set(r.ruleForm,"biyexuexiao",e)},expression:"ruleForm.biyexuexiao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("期望岗位")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.qiwanggangwei,placeholder:"期望岗位"},model:{value:r.ruleForm.qiwanggangwei,callback:function(e){r.$set(r.ruleForm,"qiwanggangwei",e)},expression:"ruleForm.qiwanggangwei"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("期望行业")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.qiwangxingye,placeholder:"期望行业"},model:{value:r.ruleForm.qiwangxingye,callback:function(e){r.$set(r.ruleForm,"qiwangxingye",e)},expression:"ruleForm.qiwangxingye"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("期望薪资")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.qiwangxinzi,placeholder:"期望薪资"},model:{value:r.ruleForm.qiwangxinzi,callback:function(e){r.$set(r.ruleForm,"qiwangxinzi",e)},expression:"ruleForm.qiwangxinzi"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("地址")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.dizhi,placeholder:"地址"},model:{value:r.ruleForm.dizhi,callback:function(e){r.$set(r.ruleForm,"dizhi",e)},expression:"ruleForm.dizhi"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("手机")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.shouji,placeholder:"手机"},model:{value:r.ruleForm.shouji,callback:function(e){r.$set(r.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1),i("v-uni-view",{staticClass:"cu-form-group",class:"left"==r.left?"":"active",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.touxiangTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("头像")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[r.ruleForm.touxiang?i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:r.ruleForm.touxiang,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return t}))},a657:function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a"),i("28a5"),i("96cf");var o=t(i("3b8d")),n=t(i("e2b1")),a={data:function(){return{ruleForm:{xueshengzhanghao:"",xueshengxingming:"",xingbie:"",nianling:"",xueli:"",zhuanye:"",biyexuexiao:"",qiwanggangwei:"",qiwangxingye:"",qiwangxinzi:"",dizhi:"",shouji:"",touxiang:"",userid:""},xingbieOptions:[],xingbieIndex:0,xueliOptions:[],xueliIndex:0,user:{},ro:{xueshengzhanghao:!1,xueshengxingming:!1,xingbie:!1,nianling:!1,xueli:!1,zhuanye:!1,biyexuexiao:!1,qiwanggangwei:!1,qiwangxingye:!1,qiwangxinzi:!1,dizhi:!1,shouji:!1,touxiang:!1,userid:!1}}},components:{wPicker:n.default},computed:{},onLoad:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(e){var i,t,o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(i);case 3:if(t=r.sent,this.user=t.data,this.ruleForm.xueshengzhanghao=this.user.xueshengzhanghao,this.ruleForm.xueshengxingming=this.user.xueshengxingming,this.xingbieOptions="男,女".split(","),this.xueliOptions="大专及以下,本科,研究生,研究生以上".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=17;break}return this.ruleForm.id=e.id,r.next=15,this.$api.info("jianli",this.ruleForm.id);case 15:t=r.sent,this.ruleForm=t.data;case 17:if(!e.cross){r.next=80;break}o=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(o);case 20:if((r.t1=r.t0()).done){r.next=80;break}if(n=r.t1.value,"xueshengzhanghao"!=n){r.next=26;break}return this.ruleForm.xueshengzhanghao=o[n],this.ro.xueshengzhanghao=!0,r.abrupt("continue",20);case 26:if("xueshengxingming"!=n){r.next=30;break}return this.ruleForm.xueshengxingming=o[n],this.ro.xueshengxingming=!0,r.abrupt("continue",20);case 30:if("xingbie"!=n){r.next=34;break}return this.ruleForm.xingbie=o[n],this.ro.xingbie=!0,r.abrupt("continue",20);case 34:if("nianling"!=n){r.next=38;break}return this.ruleForm.nianling=o[n],this.ro.nianling=!0,r.abrupt("continue",20);case 38:if("xueli"!=n){r.next=42;break}return this.ruleForm.xueli=o[n],this.ro.xueli=!0,r.abrupt("continue",20);case 42:if("zhuanye"!=n){r.next=46;break}return this.ruleForm.zhuanye=o[n],this.ro.zhuanye=!0,r.abrupt("continue",20);case 46:if("biyexuexiao"!=n){r.next=50;break}return this.ruleForm.biyexuexiao=o[n],this.ro.biyexuexiao=!0,r.abrupt("continue",20);case 50:if("qiwanggangwei"!=n){r.next=54;break}return this.ruleForm.qiwanggangwei=o[n],this.ro.qiwanggangwei=!0,r.abrupt("continue",20);case 54:if("qiwangxingye"!=n){r.next=58;break}return this.ruleForm.qiwangxingye=o[n],this.ro.qiwangxingye=!0,r.abrupt("continue",20);case 58:if("qiwangxinzi"!=n){r.next=62;break}return this.ruleForm.qiwangxinzi=o[n],this.ro.qiwangxinzi=!0,r.abrupt("continue",20);case 62:if("dizhi"!=n){r.next=66;break}return this.ruleForm.dizhi=o[n],this.ro.dizhi=!0,r.abrupt("continue",20);case 66:if("shouji"!=n){r.next=70;break}return this.ruleForm.shouji=o[n],this.ro.shouji=!0,r.abrupt("continue",20);case 70:if("touxiang"!=n){r.next=74;break}return this.ruleForm.touxiang=o[n],this.ro.touxiang=!0,r.abrupt("continue",20);case 74:if("userid"!=n){r.next=78;break}return this.ruleForm.userid=o[n],this.ro.userid=!0,r.abrupt("continue",20);case 78:r.next=20;break;case 80:this.styleChange();case 81:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(r){this.xingbieIndex=r.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},xueliChange:function(r){this.xueliIndex=r.target.value,this.ruleForm.xueli=this.xueliOptions[this.xueliIndex]},touxiangTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.touxiang=r.$base.url+"upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){r.next=3;break}return this.$utils.msg("手机应输入手机格式"),r.abrupt("return");case 3:if(!this.ruleForm.id){r.next=8;break}return r.next=6,this.$api.update("jianli",this.ruleForm);case 6:r.next=10;break;case 8:return r.next=10,this.$api.add("jianli",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,o=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),t=t>9?t:"0"+t,o=o>9?o:"0"+o,"".concat(i,"-").concat(t,"-").concat(o)},toggleTab:function(r){this.$refs[r].show()}}};e.default=a},a79c:function(r,e,i){var t=i("fabe");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var o=i("4f06").default;o("24409eb2",t,!0,{sourceMap:!1,shadowMode:!1})},e15e:function(r,e,i){"use strict";i.r(e);var t=i("a657"),o=i.n(t);for(var n in t)"default"!==n&&function(r){i.d(e,r,(function(){return t[r]}))}(n);e["default"]=o.a},fabe:function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-4f78acb6]{padding:%?20?%}.content[data-v-4f78acb6]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-4f78acb6]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-4f78acb6]{width:%?180?%}.avator[data-v-4f78acb6]{width:%?150?%;height:%?60?%}.right-input[data-v-4f78acb6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-4f78acb6]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-4f78acb6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-4f78acb6]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-4f78acb6]{border:0}.cu-form-group uni-input[data-v-4f78acb6]{padding:0 %?30?%}.uni-input[data-v-4f78acb6]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-4f78acb6]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-4f78acb6]::after{line-height:%?88?%}.select .uni-input[data-v-4f78acb6]{line-height:%?88?%}.input .right-input[data-v-4f78acb6]{line-height:%?110?%}',""]),r.exports=e}}]);