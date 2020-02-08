(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,a,t){e.exports=t(37)},24:function(e,a,t){},25:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),i=t.n(l),s=(t(23),t(24),t(3)),c=t(4),o=t(6),m=t(5),h=t(2),u=t(7),g=t(15),d=t.n(g),f=(t(25),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleFileChange=t.handleFileChange.bind(Object(h.a)(t)),t.handleURLChange=t.handleURLChange.bind(Object(h.a)(t)),t.handlePaste=t.handlePaste.bind(Object(h.a)(t)),document.addEventListener("paste",t.handlePaste),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"handlePaste",value:function(e){if(null!==e.clipboardData)for(var a=e.clipboardData.items,t=0;t<a.length;++t){var n=a[t];if(-1!==n.type.indexOf("image")){var r=n.getAsFile();return void this.props.onChange(r)}}}},{key:"handleFileChange",value:function(e){this.props.onChange(e.target.files[0])}},{key:"handleURLChange",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group custom-file"},r.a.createElement("input",{id:"imageFile",type:"file",className:"custom-file-input",onChange:this.handleFileChange}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"imageFile"},"Select an image file")),r.a.createElement("div",{className:"mt-2"},"or ",r.a.createElement("strong",null,"paste")," an image"," ",r.a.createElement("small",null,"(",r.a.createElement("strong",null,"Ctrl+V")," or ",r.a.createElement("strong",null,"\u2318+V"),")"),"."))}}]),a}(r.a.Component)),v=t(9),p=t.n(v),E=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={imgSrc:null},p()(e.imageFile,(function(e){e instanceof Event?t.props.onError("Loading image file failed"):e instanceof HTMLImageElement?alert("image!"):t.setState({imgSrc:e.toDataURL()})}),{canvas:!0}),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return null===this.state.imgSrc?r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):r.a.createElement("img",{src:this.state.imgSrc,style:{maxWidth:"100%"},className:"d-block mx-auto",alt:"preview"})}}]),a}(r.a.Component),b=t(17),y=t(16),j=t.n(y),O=function(e,a,t){e/=255,a/=255,t/=255;var n,r=Math.min(e,a,t),l=Math.max(e,a,t),i=l-r,s=0;return s=0===i?0:l===e?(a-t)/i%6:l===a?(t-e)/i+2:(e-a)/i+4,(s*=60)<0&&(s+=360),n=(l+r)/2,[s,0===i?0:i/(1-Math.abs(2*n-1)),n]},k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={x:[],y:[],z:[],colors:[]},p()(e.imageFile,(function(e){e instanceof Event?t.props.onError("Loading image file failed"):e instanceof HTMLImageElement?alert("image!"):t.analyzeImage(e)}),{maxWidth:100,maxHeight:100,canvas:!0}),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"analyzeImage",value:function(e){var a=e.getContext("2d");if(null!==a){for(var t=a.getImageData(0,0,e.width,e.height).data,n=[],r=[],l=[],i=[],s=0;s<t.length;s+=4){var c=[t[s],t[s+1],t[s+2]],o=c[0],m=c[1],h=c[2],u=O(o,m,h),g=Object(b.a)(u,3),d=g[0],f=g[1],v=g[2]-.5,p=d/180*Math.PI,E=Math.sqrt(Math.pow(.5,2)-Math.pow(v,2))*f,y=Math.sin(p)*E,j=Math.cos(p)*E;n.push(y),r.push(j),l.push(v),i.push("rgb(".concat(o,", ").concat(m,", ").concat(h,")"))}this.setState({x:n,y:r,z:l,colors:i})}else alert("error")}},{key:"render",value:function(){return 0===this.state.x.length?r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):r.a.createElement("div",null,r.a.createElement(j.a,{data:[{x:this.state.x,y:this.state.y,z:this.state.z,type:"scatter3d",mode:"markers",marker:{color:this.state.colors,size:3}}],layout:{scene:{xaxis:{range:[-.5,.5]},yaxis:{range:[-.5,.5]},zaxis:{range:[-.5,.5]},aspectmode:"cube"},autosize:!0,margin:{l:0,r:0,b:0,t:0}},useResizeHandler:!0,style:{width:"100%"}}),"c.f."," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Color_solid"},"color solid"))}}]),a}(r.a.Component),C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark text-white"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mb-0 h5 py-1"},"Image Color 3D"))))},x=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={imageFile:null,imageKey:0,errorMessage:null},t.handleImageChange=t.handleImageChange.bind(Object(h.a)(t)),t.handleError=t.handleError.bind(Object(h.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){d.a.init()}},{key:"handleImageChange",value:function(e){null!==e?this.setState({imageFile:e,imageKey:this.state.imageKey+1,errorMessage:null}):this.setState({imageFile:null,errorMessage:null})}},{key:"handleError",value:function(e){this.setState({errorMessage:e})}},{key:"render",value:function(){var e;return e=this.state.errorMessage?r.a.createElement("div",{className:"alert alert-danger mt-5",role:"alert"},this.state.errorMessage):this.state.imageFile?r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-12 col-lg-6"},r.a.createElement(k,{key:this.state.imageKey,imageFile:this.state.imageFile,onError:this.handleError})),r.a.createElement("div",{className:"col-md-12 col-lg-6"},r.a.createElement(E,{key:this.state.imageKey,imageFile:this.state.imageFile,onError:this.handleError}))):null,r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement("div",{className:"container flex-grow-1 flex-shrink-0 mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(f,{onChange:this.handleImageChange}))),e))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.eb9e28de.chunk.js.map