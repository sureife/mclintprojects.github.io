webpackJsonp([1],{EnbJ:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("7+uW"),o=e("hiCB"),n=e.n(o),s={data:function(){return{holidayLoaded:!1,nearestHoliday:null,holidayTitle:"",holidayDate:"",holidayDateText:"",emoji:"",bgColor:"#F48FB1",holidayIndex:0,showModal:!1}},mixins:[{data:function(){return{holidays:[{name:"New Year's Day",day:"1*1"},{name:"Independence Day",day:"6*3"},{name:"May Day",day:"1*5"},{name:"AU Day",day:"25*5"},{name:"Republic Day",day:"1*7"},{name:"Founders Day",day:"21*9"},{name:"Farmers Day",day:"7*12"},{name:"Christmas",day:"25*12"},{name:"Boxing Day",day:"26*12"}]}}}],created:function(){this.calculateNearestHoliday()},methods:{calculateNearestHoliday:function(){var t=this,a=(new Date).getTime(),e=null,i=null,o=n.a,s=0;this.holidays.forEach(function(n,d){var l=t.getHolidayDate(n),h=l.getTime(),r=h-a;a<=h&&r<o&&(e=n,o=r,i=l,s=d)}),this.holidayLoaded=!0,this.nearestHoliday=e,this.holidayDate=i,this.holidayIndex=s,console.log(this.holidayIndex),this.showNearestHoliday()},getHolidayDate:function(t){var a=t.day.split("*");return new Date((new Date).getFullYear(),parseInt(a[1])-1,parseInt(a[0]))},showNearestHoliday:function(){this.holidayTitle=this.nearestHoliday.name.toUpperCase(),this.holidayDateText=this.holidayDate.getDate()+"/"+(this.holidayDate.getMonth()+1)+"/"+this.holidayDate.getFullYear(),this.showIndicators()},showIndicators:function(){var t=new Date;t.setMonth((new Date).getMonth()+1);var a=t.getTime();t.setMonth((new Date).getMonth()+3);var e=t.getTime();t.setMonth((new Date).getMonth()+6);t.getTime();a>=this.holidayDate.getTime()?(this.emoji="😁",this.bgColor="#00796B"):e>=this.holidayDate.getTime()?(this.emoji="😭",this.bgColor="#F57C00"):(this.bgColor="#E53935",this.emoji="🤬")},previousHoliday:function(){this.holidayIndex-1>=0&&(this.nearestHoliday=this.holidays[--this.holidayIndex],this.holidayDate=this.getHolidayDate(this.nearestHoliday),this.showNearestHoliday())},nextHoliday:function(){this.holidayIndex+1<this.holidays.length&&(this.nearestHoliday=this.holidays[++this.holidayIndex],this.holidayDate=this.getHolidayDate(this.nearestHoliday),this.showNearestHoliday())}}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"holiday",style:{"background-color":t.bgColor}},[t.holidayLoaded?t._e():e("img",{attrs:{id:"loading-icon",alt:"loading icon",src:"https://samherbert.net/svg-loaders/svg-loaders/three-dots.svg"}}),t._v(" "),e("div",[t.holidayLoaded?e("p",{attrs:{id:"holiday-title"}},[t._v(t._s(t.holidayTitle))]):t._e(),t._v(" "),t.holidayLoaded?e("p",{attrs:{id:"holiday-date"}},[t._v(t._s(t.holidayDateText))]):t._e(),t._v(" "),t.holidayLoaded?e("p",{attrs:{id:"holiday-emoji"}},[t._v(t._s(t.emoji))]):t._e()]),t._v(" "),e("div",{attrs:{id:"btn-container"}},[e("button",{staticClass:"btn",on:{click:t.previousHoliday}},[t._v("Previous")]),t._v(" "),e("button",{staticClass:"btn",on:{click:t.nextHoliday}},[t._v("Next")])])]),t._v(" "),e("div",{attrs:{id:"btn-info"},on:{click:function(a){t.showModal=!t.showModal}}},[e("img",{attrs:{alt:"info icon",src:"https://image.flaticon.com/icons/svg/3/3716.svg"}})]),t._v(" "),t.showModal?e("div",{attrs:{id:"modal"}},[e("p",[t._v("Good Friday, Easter Sunday, Easter Monday, Eid-Ul-Fitr, and Eid-Ul-Adha are not included in the holidays featured in this application.")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("This is because they usually occur on a different day each year.")])]):t._e()])},staticRenderFns:[]};var l={name:"App",components:{Home:e("VU/8")(s,d,!1,function(t){e("EnbJ")},null,null).exports}},h={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("Home")],1)},staticRenderFns:[]};var r=e("VU/8")(l,h,!1,function(t){e("uwEc")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:r},template:"<App/>"})},uwEc:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.d22dfa3e935108f5b74e.js.map