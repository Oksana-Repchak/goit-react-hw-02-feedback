(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,c){t.exports={statisticList:"Statistics_statisticList__3gC9A"}},11:function(t,e,c){t.exports={notification:"Notification_notification__28Oqn"}},27:function(t,e,c){},28:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(1),i=c.n(a),s=c(5),o=c.n(s),r=c(6),l=c(7),d=c(8),b=c(13),j=c(12);function u(t){var e=t.title,c=t.children;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:e}),c]})}var h=c(9),O=c.n(h),f=c(4),x=c.n(f);function v(t){var e=t.options,c=t.onLeaveFeedback;t.getNameFeedback;return Object(n.jsx)("ul",{className:x.a.list,children:e.map((function(t){return Object(n.jsx)("li",{children:Object(n.jsx)("button",{onClick:function(){return c(t)},className:x.a.button,name:t,children:t})},O.a.generate())}))})}var k=c(10),g=c.n(k);function p(t){var e=t.good,c=t.neutral,a=t.bad,i=t.total,s=t.positivePercentage;return Object(n.jsxs)("ul",{className:g.a.statisticList,children:[Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Good: ",e]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Neutral: ",c]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Bad: ",a]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Total: ",i]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Positive feedback: ",s,"%"]})})]})}var m=c(11),F=c.n(m);function _(t){var e=t.message;return Object(n.jsx)("p",{className:F.a.notification,children:e})}var N=function(t){Object(b.a)(c,t);var e=Object(j.a)(c);function c(){var t;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.clickActiveItem=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){return Math.round(100*t.state.good/t.countTotalFeedback())},t}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(u,{title:"Please leave feedback",children:Object(n.jsx)(v,{options:["good","neutral","bad"],onLeaveFeedback:this.clickActiveItem,getNameFeedback:this.getNameFeedback})}),Object(n.jsx)(u,{title:"Statistics",children:0===this.countTotalFeedback()?Object(n.jsx)(_,{message:"No feedback given"}):Object(n.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),c}(a.Component);c(27);o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))},4:function(t,e,c){t.exports={list:"Feedback_list__3lbkN",button:"Feedback_button__2DSXV"}}},[[28,1,2]]]);
//# sourceMappingURL=main.a2e3a9a2.chunk.js.map