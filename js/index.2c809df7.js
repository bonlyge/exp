(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"37f9":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("index-specialist"),a("index-serve-step",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]}),a("index-welcome-professor",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]}),a("index-reviews",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]}),a("partner",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]})],1)},i=[],n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page"},[a("div",{staticClass:"index-specialist safe-width"},[a("ul",{staticClass:"professor-list clear"},t._l(t.specialist,function(s,e){return a("li",{key:e,staticClass:"professor-info clear",class:e==t.index?"active":"",on:{mouseenter:function(s){return t.clearTimer(e)},mouseleave:t.autoplay}},[a("div",{staticClass:"professor-img-wrap img-mask left"},[a("img",{staticClass:"professor-img",attrs:{src:s.head,alt:""}})]),a("div",{staticClass:"professor-intro"},[a("h1",{staticClass:"professor-name"},[t._v(t._s(s.name))]),a("p",{staticClass:"professor-title"},[t._v(t._s(s.post))]),a("p",{staticClass:"professor-desc"},[t._v(t._s(s.dynamic))])])])}),0),a("div",{staticClass:"professor-desc clear"},[a("div",{staticClass:"professor-desc-left left"},[a("h1",[t._v("专家指数：知名度 "),a("b",[t._v(t._s(t.professorInfo.popularity)+"%")]),t._v("，影响力 "),a("b",[t._v(t._s(t.professorInfo.influence)+"%")]),t._v("，好评度 "),a("b",[t._v(t._s(t.professorInfo.praise)+"%")])]),a("h2",[t._v("VIP expert 致力打造全球领先的专家经纪服务与知识赋能平台，每天有近 "),a("b",[t._v(t._s(t.professorInfo.experts)+"家")]),t._v(" 企业/机构/组织入驻，平均每天订购"),a("b",[t._v(t._s(t.professorInfo.orders)+"位")]),t._v("专家")])]),a("div",{staticClass:"professor-desc-right left"},[a("p",{staticClass:"tip"},[t._v("帮助更多的企业、咨询公司、金融公司和非盈利组织的决策者")]),a("p",{staticClass:"tip"},[t._v("欢迎体验，成就更好的自己")]),a("router-link",{staticClass:"btn",attrs:{tag:"button",to:"/register"}},[t._v("入驻VIP expert专家")])],1)])])])},c=[],r=(a("96cf"),a("3b8d")),l=a("4ec3"),o={name:"index-specialist",data:function(){return{index:0,preIndex:-1,timer:null,specialist:[],professorInfo:""}},methods:{clearTimer:function(t){clearInterval(this.timer),this.index=t},getIndex:function(){var t=this.preIndex;while(this.preIndex==t)t=Math.floor(19*Math.random());return t},autoplay:function(){var t=this;this.timer=setInterval(function(){t.index=t.getIndex(),t.preIndex=t.index},5e3),this.$once("hook:beforeDestroy",function(){clearInterval(t.timer)})}},mounted:function(){this.autoplay()},created:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].getIndexProfessorList();case 2:return s=t.sent,"0"===s.code&&(this.specialist=s.data),t.next=6,l["a"].getIndexData();case 6:a=t.sent,"0"===a.code&&(this.professorInfo=a.data);case 8:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}()},d=o,p=(a("ee2e"),a("2877")),v=Object(p["a"])(d,n,c,!1,null,"56eaef14",null),m=v.exports,u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page"},[e("div",{staticClass:"safe-width"},[e("Row",{attrs:{"space-x":35,type:"flex"}},[e("Cell",{directives:[{name:"width",rawName:"v-width",value:400,expression:"400"}]},[e("h1",{staticClass:"title-line"},[t._v("服务流程")]),e("div",{staticClass:"wrap"},[e("div",{staticClass:"step step1 clear"},[e("div",{staticClass:"left"},[e("div",{staticClass:"circle"},[e("h1",{staticClass:"step-num"},[t._v("1")]),e("p",{staticClass:"text"},[t._v("Step")])]),e("div",{staticClass:"down-arrows-wrap"},[e("div",{staticClass:"down-line"}),e("div",{staticClass:"down-arrows"})])]),e("div",{staticClass:"desc left"},[e("h2",{staticClass:"desc-title"},[t._v("寻求专家")]),e("p",{staticClass:"content"},[t._v("浏览我们的专家网络，找到适合您的专家。")])])]),e("div",{staticClass:"step step2 clear"},[e("div",{staticClass:"left"},[e("div",{staticClass:"circle"},[e("h1",{staticClass:"step-num"},[t._v("2")]),e("p",{staticClass:"text"},[t._v("Step")])]),e("div",{staticClass:"down-arrows-wrap"},[e("div",{staticClass:"down-line"}),e("div",{staticClass:"down-arrows"})])]),e("div",{staticClass:"desc left"},[e("h2",{staticClass:"desc-title"},[t._v("平台匹配")]),e("p",{staticClass:"content"},[t._v("VIP expert赋予链接权，利用人工智能、机器学习和人工审查来确保最佳匹配。")])])]),e("div",{staticClass:"step step3 clear"},[e("div",{staticClass:"left"},[e("div",{staticClass:"circle"},[e("h1",{staticClass:"step-num"},[t._v("3")]),e("p",{staticClass:"text"},[t._v("Step")])]),e("div",{staticClass:"down-arrows-wrap"},[e("div",{staticClass:"down-line"}),e("div",{staticClass:"down-arrows"})])]),e("div",{staticClass:"desc left"},[e("h2",{staticClass:"desc-title"},[t._v("开展合作")]),e("p",{staticClass:"content"},[t._v("根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务模式的信任合作。")])])]),e("div",{staticClass:"step step4 clear"},[e("div",{staticClass:"left"},[e("div",{staticClass:"circle"},[e("h1",{staticClass:"step-num"},[t._v("4")]),e("p",{staticClass:"text"},[t._v("Step")])]),e("div",{staticClass:"down-arrows-wrap"},[e("div",{staticClass:"down-line"}),e("div",{staticClass:"down-arrows"})])]),e("div",{staticClass:"desc left"},[e("h2",{staticClass:"desc-title"},[t._v("反馈完成")]),e("p",{staticClass:"content"},[t._v("服务合作结束后，双方可匿名或公开反馈彼此对合作的思考、见解与看法，以及是否有寻求更多机会的可能。")])])])]),e("router-link",{staticClass:"btn",attrs:{tag:"button",to:"register"}},[t._v("入驻VIP expert专家团")])],1),e("Cell",{directives:[{name:"width",rawName:"v-width",value:330,expression:"330"}]},[e("h1",{staticClass:"title-line"},[t._v(" 客户需求")]),e("div",{staticClass:"wrap"},[e("div",{staticClass:"demand-list"},[e("div",{staticClass:"demand-item"},[e("h1",{staticClass:"demand-title"},[t._v("武汉市“双创”峰会交流邀约人工智能专家")]),e("div",{staticClass:"demand-tag-wrap"},[e("span",{staticClass:"tag"},[t._v("科技创新")]),e("span",{staticClass:"demand-company"},[t._v("武汉市科技创业孵化中心")])])]),e("div",{staticClass:"demand-item"},[e("h1",{staticClass:"demand-title"},[t._v("福州农业供给侧改革会流邀约宏观经济专家")]),e("div",{staticClass:"demand-tag-wrap"},[e("span",{staticClass:"tag"},[t._v("政策解读")]),e("span",{staticClass:"demand-company"},[t._v("福州市农业部宣传中心")])])]),e("div",{staticClass:"demand-item"},[e("h1",{staticClass:"demand-title"},[t._v("外汇投资型产品该如何抉择")]),e("div",{staticClass:"demand-tag-wrap"},[e("span",{staticClass:"tag"},[t._v("科技创新")]),e("span",{staticClass:"demand-company"},[t._v("武汉市科技创业孵化中心")])])]),e("div",{staticClass:"demand-item"},[e("h1",{staticClass:"demand-title"},[t._v("机器人如何适应未来的员工队伍")]),e("div",{staticClass:"demand-tag-wrap"},[e("span",{staticClass:"tag"},[t._v("科技创新")]),e("span",{staticClass:"demand-company"},[t._v("武汉市科技创业孵化中心")])])]),e("div",{staticClass:"demand-item"},[e("h1",{staticClass:"demand-title"},[t._v("我想与马光远老师吃一顿午餐")]),e("div",{staticClass:"demand-tag-wrap"},[e("span",{staticClass:"tag"},[t._v("科技创新")]),e("span",{staticClass:"demand-company"},[t._v("武汉市科技创业孵化中心")])])]),e("div",{staticClass:"demand-item"},[e("h1",{staticClass:"demand-title"},[t._v("需要找一位能源治理专家解决企业污染问题")]),e("div",{staticClass:"demand-tag-wrap"},[e("span",{staticClass:"tag"},[t._v("科技创新")]),e("span",{staticClass:"demand-company"},[t._v("武汉市科技创业孵化中心")])])])])]),e("router-link",{staticClass:"btn",attrs:{tag:"button",to:"search"}},[t._v("选择VIP expert服务")])],1),e("Cell",{directives:[{name:"width",rawName:"v-width",value:400,expression:"400"}]},[e("h1",{staticClass:"title-line"},[t._v("最新决策")]),e("div",{staticClass:"wrap"},[e("div",{staticClass:"decision-item"},[e("div",{staticClass:"decision-img"},[e("img",{staticClass:"scaleImg",attrs:{src:a("fcf1"),alt:""}})]),e("p",{staticClass:"decision-title"},[t._v("收购决定的三个小时截止日期 - 该PE基金如何获得所需的访问权限")])]),e("div",{staticClass:"decision-item"},[e("div",{staticClass:"decision-img"},[e("img",{staticClass:"scaleImg",attrs:{src:a("c749"),alt:""}})]),e("p",{staticClass:"decision-title"},[t._v("这家风险投资公司如何获得最受欢迎的隐秘密码之一的创造者")])]),e("div",{staticClass:"decision-item"},[e("div",{staticClass:"decision-img"},[e("img",{staticClass:"scaleImg",attrs:{src:a("9068"),alt:""}})]),e("p",{staticClass:"decision-title"},[t._v("为什么这个十亿美元的企业选择VIp expert 进行物联网调查")])])]),e("router-link",{staticClass:"btn",attrs:{tag:"button",to:"decision"}},[t._v("更多案例")])],1)],1)],1)])},C=[],f={name:"index-serve-step",data:function(){return{}}},_=f,w=(a("b611"),Object(p["a"])(_,u,C,!1,null,"2718e1b1",null)),h=w.exports,x=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page"},[a("div",{staticClass:"welcome-professor"},[a("h1",{staticClass:"page-title"},[t._v("最受欢迎的专家")]),a("div",{staticClass:"swiper-wrap"},[a("swiper",{attrs:{options:t.swiperOption}},[t._l(t.welcomeProfessorList,function(s,e){return a("swiper-slide",{key:e},[a("div",{staticClass:"professor-img-bg"},[a("img",{staticClass:"professor-img",attrs:{src:s.head,alt:""}})]),a("h3",{staticClass:"professor-name"},[t._v(t._s(s.name))]),a("h4",{staticClass:"professor-company"},[t._v(t._s(s.post))]),a("p",{staticClass:"professor-desc"},[t._v("\n\t\t\t\t\t\t"+t._s(s.brief)+"\n\t\t\t\t\t")])])}),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[a("span",{staticClass:"iconfont icon-zuojiantou"})]),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[a("span",{staticClass:"iconfont icon-youjiantou"})])],2)],1),a("router-link",{staticClass:"btn",attrs:{tag:"button",to:"professor-list"}},[t._v("查看更多")])],1)])},g=[],b={name:"index-welcome-professor",data:function(){return{welcomeProfessorList:[],swiperOption:{slidesPerView:5,spaceBetween:0,slidesPerGroup:5,loop:!0,loopFillGroupWithBlank:!1,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},created:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].getWelcomeProfessor();case 2:s=t.sent,"0"===s.code&&(this.welcomeProfessorList=s.data);case 4:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}()},y=b,I=(a("4aca"),Object(p["a"])(y,x,g,!1,null,"a4af82c0",null)),k=I.exports,P=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page"},[a("div",{staticClass:"safe-width reviews xs-hide"},[a("h1",{staticClass:"page-title"},[t._v("客户说")]),a("div",{staticClass:"tab-wrap"},[a("div",{staticClass:"tab-item item1",class:0==t.index?"active":"",on:{mouseenter:function(s){return t.clearTimer(0)},mouseleave:t.autoplay}},[a("p",{staticClass:"company"},[t._v("香港基金副总裁")]),a("span",{staticClass:"point"})]),a("div",{staticClass:"item-content animated fadeInUp"},[t._v("\n\t\t\t\t0根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务模式的信任合作。根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务模式的信任合作。模式的信任合作。\n\t\t\t")]),a("div",{staticClass:"tab-item item2",class:1==t.index?"active":"",on:{mouseenter:function(s){return t.clearTimer(1)},mouseleave:t.autoplay}},[a("p",{staticClass:"company"},[t._v("香港基金副总裁")]),a("span",{staticClass:"point"})]),a("div",{staticClass:"item-content animated fadeInUp"},[t._v("\n\t\t\t\t1根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务模式的信任合作。根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务模式的信任合作。模式的信任合作。\n\t\t\t")]),a("div",{staticClass:"tab-item item3",class:2==t.index?"active":"",on:{mouseenter:function(s){return t.clearTimer(2)},mouseleave:t.autoplay}},[a("p",{staticClass:"company"},[t._v("香港基金副总裁")]),a("span",{staticClass:"point"})]),a("div",{staticClass:"item-content animated fadeInUp"},[t._v("\n\t\t\t\t2根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务模式的信任合作。根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务模式的信任合作。模式的信任合作。\n\t\t\t")]),a("div",{staticClass:"tab-item item4",class:3==t.index?"active":"",on:{mouseenter:function(s){return t.clearTimer(3)},mouseleave:t.autoplay}},[a("p",{staticClass:"company"},[t._v("香港基金副总裁")]),a("span",{staticClass:"point"})]),a("div",{staticClass:"item-content animated fadeInUp"},[t._v("\n\t\t\t\t3根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务模式的信任合作。根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务模式的信任合作。模式的信任合作。\n\t\t\t")]),a("div",{staticClass:"tab-item item5",class:4==t.index?"active":"",on:{mouseenter:function(s){return t.clearTimer(4)},mouseleave:t.autoplay}},[a("p",{staticClass:"company"},[t._v("香港基金副总裁")]),a("span",{staticClass:"point"})]),a("div",{staticClass:"item-content animated fadeInUp"},[t._v("\n\t\t\t\t4根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务模式的信任合作。根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务模式的信任合作。模式的信任合作。\n\t\t\t")])])]),a("div",{staticClass:"md-hide"},[a("h1",{staticClass:"page-title"},[t._v("客户说")]),a("swiper",{attrs:{options:t.swiperOption}},[t._l(5,function(s,e){return a("swiper-slide",{key:e},[a("p",{staticClass:"company-content"},[t._v("1根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务模式的信任合作。根据需求方的真实诉求，双方或与平台方之间展开会议、研究、培训、品牌传播等多元化服务模式的信任合作。模式的信任合作。")]),a("p",{staticClass:"company-name"},[t._v("香港基金副总裁")])])}),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},j=[],O={name:"index-reviews",data:function(){return{index:0,timer:null,swiperOption:{pagination:{el:".swiper-pagination"}}}},methods:{clearTimer:function(t){clearInterval(this.timer),this.index=t},autoplay:function(){var t=this;this.timer=setInterval(function(){t.index++,console.log(t.index),t.index>4&&(t.index=0)},1e4),this.$once("hook:beforeDestroy",function(){clearInterval(t.timer)})}},mounted:function(){this.autoplay()}},E=O,T=(a("856b"),Object(p["a"])(E,P,j,!1,null,"3daa22ce",null)),N=T.exports,S=a("849e"),V=(a("6e55"),{name:"index",components:{indexSpecialist:m,indexServeStep:h,indexWelcomeProfessor:k,indexReviews:N,partner:S["a"]},data:function(){return{}},mounted:function(){}}),$=V,R=(a("df36"),Object(p["a"])($,e,i,!1,null,"99a3253c",null));s["default"]=R.exports},"4aca":function(t,s,a){"use strict";var e=a("7d8f"),i=a.n(e);i.a},6547:function(t,s,a){},"7d8f":function(t,s,a){},8475:function(t,s,a){},"856b":function(t,s,a){"use strict";var e=a("d2f7"),i=a.n(e);i.a},9068:function(t,s,a){t.exports=a.p+"img/decision3.a9e00fb3.jpg"},a5fb:function(t,s,a){},b611:function(t,s,a){"use strict";var e=a("8475"),i=a.n(e);i.a},c749:function(t,s,a){t.exports=a.p+"img/decision2.8126ba86.jpg"},d2f7:function(t,s,a){},df36:function(t,s,a){"use strict";var e=a("a5fb"),i=a.n(e);i.a},ee2e:function(t,s,a){"use strict";var e=a("6547"),i=a.n(e);i.a},fcf1:function(t,s,a){t.exports=a.p+"img/decision1.65b9fecc.jpg"}}]);