webpackJsonp([1],{NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"swiperAuto"}},[i("swiper",{attrs:{options:this.swiperOption}},[this._l(this.bannerImages,function(t){return i("swiper-slide",{key:t},[i("a",{attrs:{href:"javascript:;"}},[i("img",{attrs:{src:t}})])])}),this._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var r=e("VU/8")({name:"swiperAuto",props:["bannerImages"],data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,observer:!0,observeParents:!0,autoplay:2e3,autoplayDisableOnInteraction:!1}}}},n,!1,function(t){e("nS0d")},"data-v-ca556f94",null).exports,o=e("mtWM"),a=e.n(o);function u(t){a.a.create({baseURL:"http://47.92.89.118:22003"})(t.baseConfig).then(function(i){t.success(i)}).catch(function(i){t.failure(i)})}var c={name:"service",components:{swiperAuto:r},data:function(){return{bannerImages:[e("Txl5"),e("UT21")],ulWidth:"120%",currentTitleId:0,initPage:1,currentPage:0,questionList:[],questionDetail:[],inputText:"",isBtnGroup:!0,isBtnGroupTwo:!1,btnGroupListTwo:[],isBtnGroupTwoData:[],chatArr:[],Answer:"",inputIng:!1,btnGroupList:["查询","充值","优惠","办理","激活","异常","挂失","注销"],shortcutWidth:"600px"}},methods:{chooseTitle:function(t){this.currentTitleId=t,this.questionDetail=this.questionList[t].questions},shortcut:function(t){var i=this;this.isBtnGroup=!1,this.chatArr.push({person:"A",words:t}),this.inputIng=!0,u({baseConfig:{method:"post",url:"/ocs/user/query-by-keyword",data:{keyword:t,owner_code:3601}},success:function(t){i.inputIng=!1,1==t.data.code&&(i.btnGroupListTwo=t.data.recommend_list,i.isBtnGroupTwoData=i.btnGroupListTwo.slice(0,4),i.chatArr.push({person:"C",words:i.isBtnGroupTwoData}),i.shortcutWidth=140*i.btnGroupListTwo.length+"px",i.isBtnGroupTwo=!0),i.anchor()},failure:function(t){console.log(t)}})},shortcutTwo:function(t){this.isBtnGroupTwo=!1,this.chatArr.push({person:"A",words:t.title}),this.OcsUserChat(t.title,3601)},problem:function(t){this.isBtnGroup=!1,this.chatArr.push({person:"A",words:t.question_title}),this.OcsUserChat(t.question_title,3601),this.anchor()},send:function(){if(!this.inputText.trim())return!1;this.isBtnGroup=!1,this.inputText=this.inputText.replace(/\s/g,""),this.chatArr.push({person:"A",words:this.inputText}),this.inputIng=!0,this.OcsUserChat(this.inputText,3601)},OcsUserChat:function(t,i){var e=this;u({baseConfig:{method:"post",url:"/ocs/user/chat",data:{utterance:t,owner_code:i}},success:function(t){e.inputIng=!1,1==t.data.code?e.chatArr.push({person:"B",words:t.data.answer}):e.chatArr.push({person:"B",words:"不好意思，小E刚才走神了，请您重新提问"}),e.inputText="",e.anchor()},failure:function(t){console.log(t)}})},init:function(){var t=this;u({baseConfig:{method:"post",url:"/ocs/user/questions",data:{owner_code:"3601"}},success:function(i){var e=i.data;1==e.code&&(t.questionList=e.groups,t.questionDetail=e.groups[0].questions.slice(0,4)),t.$nextTick(function(){this.ulWidth=90*this.questionList.length+"px"})},failure:function(t){console.log(t)}})},enterKey:function(t){13==t.keyCode&&this.send()},anchor:function(){setTimeout(function(){location.href="#anchor"},100)}},created:function(){this.init()},mounted:function(){document.addEventListener("keyup",this.enterKey)}},p={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"service"}},[s("div",{staticClass:"box w",attrs:{id:"box"}},[s("swiper-auto",{attrs:{bannerImages:t.bannerImages}})],1),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"question-box w"},[s("div",{staticClass:"question-scroll"},[s("div",{staticClass:"question"},[s("ul",{staticClass:"q-tit",style:{width:t.ulWidth}},t._l(t.questionList,function(i,e){return s("li",{key:i.group_name,class:{titleActive:e==t.currentTitleId},on:{click:function(i){return t.chooseTitle(e)}}},[t._v(t._s(i.group_name))])}),0)])]),t._v(" "),s("div",{staticClass:"q-con"},[s("ul",t._l(t.questionDetail,function(i,e){return s("li",{key:i.question_id,staticClass:"nolastLi",class:{lastLi:e==t.questionDetail.length-1},on:{click:function(e){return t.problem(i)}}},[t._v("\n                    "+t._s(i.question_title)+"\n                ")])}),0)])]),t._v(" "),s("div",{staticClass:"chatLog w",attrs:{id:"chatLog"}},[t._l(t.chatArr,function(i,e){return s("div",{class:{userRight:"A"==i.person,userLeft:"B"==i.person,userC:"C"==i.person}},["C"!=i.person?s("div",[s("div",{staticClass:"span",domProps:{innerHTML:t._s(i.words)}})]):s("div",[t._m(1,!0),t._v(" "),s("div",{staticClass:"userCcontent"},t._l(t.isBtnGroupTwoData,function(i,e){return s("a",{class:{lastLi:e==t.isBtnGroupTwoData.length-1},attrs:{href:"javascript:;"},on:{click:function(e){return t.shortcutTwo(i)}}},[t._v(t._s(i.title))])}),0)]),t._v(" "),e==t.chatArr.length-3?s("div",[s("div",{staticStyle:{height:"1px"},attrs:{id:"anchor"}})]):t._e()])}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.inputIng,expression:"inputIng"}],staticClass:"userLeft"},[s("div",{staticClass:"span"},[t._v("正在输入...")])])],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isBtnGroup,expression:"isBtnGroup"}],staticClass:"btn-box"},[s("div",{staticClass:"btn-group-box"},[s("div",{staticClass:"btn-group w",style:{width:t.shortcutWidth}},t._l(t.btnGroupList,function(i){return s("input",{attrs:{type:"button",value:i},on:{click:function(e){return t.shortcut(i)}}})}),0)])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isBtnGroupTwo,expression:"isBtnGroupTwo"}],staticClass:"btn-box"},[s("div",{staticClass:"btn-group-box"},[s("div",{staticClass:"btn-group w",style:{width:t.shortcutWidth}},t._l(t.btnGroupListTwo,function(i){return s("input",{attrs:{type:"button",value:i.title},on:{click:function(e){return t.shortcutTwo(i)}}})}),0)])]),t._v(" "),s("div",{staticClass:"user-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],attrs:{type:"text",placeholder:"点此提问或找客服"},domProps:{value:t.inputText},on:{input:function(i){i.target.composing||(t.inputText=i.target.value)}}}),t._v(" "),s("div",{staticClass:"sendBtn",on:{click:t.send}},[s("img",{directives:[{name:"show",rawName:"v-show",value:!t.inputText.trim(),expression:"!inputText.trim()"}],attrs:{src:e("uRNr"),alt:""}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.inputText.trim(),expression:"inputText.trim()"}],attrs:{src:e("d6Bn"),alt:""}})])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"hello"},[i("span",[this._v("Hi，你好，我是智能机器人江小E")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"userCtitle"},[i("span",[this._v("点击下面的选项，让我更好地回答您的问题吧~")])])}]};var l={name:"App",components:{Service:e("VU/8")(c,p,!1,function(t){e("m/W5")},null,null).exports}},d={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("service")],1)},staticRenderFns:[]};var h=e("VU/8")(l,d,!1,function(t){e("NXXb")},null,null).exports,w=e("41jX"),v=e.n(w);e("aEDl");s.a.use(v.a),s.a.prototype.$axios=a.a,s.a.prototype.axios=a.a,s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:h},template:"<App/>"})},NXXb:function(t,i){},Txl5:function(t,i,e){t.exports=e.p+"static/img/1.04883fc.png"},UGy7:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=e("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);i.default=n.exports},UT21:function(t,i,e){t.exports=e.p+"static/img/2.7cecd4f.png"},aEDl:function(t,i){},d6Bn:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAnCAYAAAB5XdqFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NzIwNDkwMjlFNEUxMUVBOEM2NkUxMzBCQUQ0MUE3NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NzIwNDkwMzlFNEUxMUVBOEM2NkUxMzBCQUQ0MUE3NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg3MjA0OTAwOUU0RTExRUE4QzY2RTEzMEJBRDQxQTc0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg3MjA0OTAxOUU0RTExRUE4QzY2RTEzMEJBRDQxQTc0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WnzN7wAAAq1JREFUeNrMmE+ITVEcx88b19/RvCeashkWkhWJpsmfIRvZ2LCRpVixVFgoC2bMUIPIyEzRNBYUSWgKYwiDMiWN0ShEWFAmjGbMe76/fG+dbmfuzLv33HPvrz69+8798z7dc87v/N7JHb4/dl0p1Q7ks6gcx4H6ikldV0G5q+AV2AGmqQyGiHbzeAk4D96BvaAqa6IPA23zQRP4ABr4PROiL8CQ4Vwe7OMbPgcWpy06Bh6HXCNjdid4Da6A2rRElTZOwyIHtoBecA9sYptT0Z4y71sPboI+sB14rkSfg+EI9y8FHeAt2AMqkxYdAU9iPKcGnATvwSEwLynRKN1virngIFPbKbAwq6J+zAS7wSDoBMtsikrXj1rusSlgGyfdbbDBhuhv8CzBibsR3OFvbA38dlmiEg8cpMSV4DIYALuO9BRnRBHtVu5iEWiVJRqy+0EhdLVBPRpc37+X2y2W4ic4C1pQo36aSNRP/itSrD9GuYg0Q7g/TLSSCbtgYM447T55i8IlcAM0QviRSTRO5Fi/LiA12rH/PUpB3mAqJqr5RvOkSjvW2wqGNvmcavGNXgNH8UZ7TaJdNlaSmGP0IsfogN8YFC2wIkojhrRZ/zl4Mii6xmUxzPgiciIJwR/jXRQUXetQ8I10r3QzBEcmujgous6B4FOZIJwoxcluQOiis7gOJxW3JCdGLSd10VUsy2yGJOlL3Cd4GedBumi9RcFfoA0cZ7UfO2yLfgMnwBkeWwtP22Soi/Ec2U05pv7vCg4nMcB9Udn9mB7h/j6OPymE/yaZKryI+fMuU0yXq6TrlZE/S9x7amLN6jQ8pqTVIdf8ARc4BgfTqlREdDmYbTgn6+5p7oB8VSmHZ0hLH1kktPJ/TCZCF+3n+OvkXlSmwmNZt5n/T0oqo/FPgAEAcxGXzPPTYh4AAAAASUVORK5CYII="},"m/W5":function(t,i){},nS0d:function(t,i){},syvT:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=e("Bnvi"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,i=function(){if(!t.swiper&&s){delete t.options.notNextTick;var i=!1;for(var e in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(e)&&t.options[e]&&(i=!0,t.defaultSwiperClasses[e]=t.options[e]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};i?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?i():this.$nextTick(i)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},r={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),e("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},o=e("VU/8")(n,r,!1,null,null,null);i.default=o.exports},uRNr:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAnCAYAAAB5XdqFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCQTdDNkJCRjlFMzExMUVBQjIzOEQ4MTA0MTI2ODkwOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCQTdDNkJDMDlFMzExMUVBQjIzOEQ4MTA0MTI2ODkwOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJBN0M2QkJEOUUzMTExRUFCMjM4RDgxMDQxMjY4OTA5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJBN0M2QkJFOUUzMTExRUFCMjM4RDgxMDQxMjY4OTA5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+q0FObAAAAqtJREFUeNrMmF+IDVEcx89l/FmrvVerra3b8iB5IpHEsvIiL154kUfxxKPiRXlaFuVPZLelSOuBIgltYUNYlC1prVbhXuGBsmG1y17fX75Tp+ns7N6ZM2fmV5/u3DP/Ps058zu/OblSqXRdKXUOyO+YchzFYnFSx02h3FXwCmwH01UGQ0R7uL0IdIJ3YA+oy5row0BbI2gDH0Ar/2dC9AUYMuzLg718wh1gYdqif8HjkGNkzO4Ar8EVsCItUaWN07DIgc2gF9wDG9nmVPR+leetAzdBH9gGPFeiz8FwhPMXg4vgLdgNapMWHQFPYlynCZwA78EBMDcp0Sjdb4p6sJ+p7SSYn1VRP2rALjAIusASm6LS9aOWe2wq2MqX7jZYb0P0F3iW4Iu7AdzhPbYE7l2VqMQDBylxObgMBsDOcrk8M4poj3IXC0C7TNGQ3QcKobMN6tHg/P6t2m6xFD/AGXAMNerHiUT95L8sxfpjlJPIYQj3h4nWMmEXDMwZp90nb1G4Am6AgxB+ZBKNEznWr/NIk7bt/49SkLeaiokGPtE8qdO29baCoU1+p1l8otfAITzRXpNot42ZJOYYvcAxOuA3BkULrIjSiCHtrf8U3BkUbXZZDDM+i5xIQvD7eAcFRdc4FHwj3SvdDMGRiQ4OirY4EHwqLwhflLHJLkDoorM4DycVtyQnRi0nddFVLMtshnzhXuI6wcs4F9JF11oU/AnOgqOs9mOHbdGv4Dg4zW1r4WmLDCtjXEdWU46o/6uCw0kMcF9UVj9mRDi/j+NPCuE/SaYKL2L+vMsU0+0q6XpV5M8K157aWLM6DY8paXXIMb/BeY7BwbQqFRFdCmYb9sm8e4orIF9UyuEZ0lKZRUI7v2MyEbpoP8dfF9eiMhUey7pN/D6pqIzGPwEGAIk9lwC7gW2wAAAAAElFTkSuQmCC"}},["NHnr"]);