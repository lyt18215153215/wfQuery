wfQuery.fn=wfQuery.prototype=new Array,wfQuery.fn.constructor=wfQuery;var init=wfQuery.fn.init=function(t,e){e=e||doc;var r=Object.prototype.toString.call(t);if(!t)return this;if(t.constructor===wfQuery)return t;if("[object String]"===r){var n=document.createElement("WF");return/^\s*[\<]/.test(t)?(n.innerHTML=t,new init(n.children)):new init(e.querySelectorAll(t))}if(/\[object\s(HTML|XML)/.test(r)&&t.nodeType||"[object global]"===r)return this.length=1,this[0]=t,this;if("[object HTMLCollection]"===r||"[object NodeList]"===r||"[object Array]"===r){this.length=t.length;for(var i=0;i<t.length;i++)this[i]=t[i];return this}wfQuery.isFunction(t)&&t(wfQuery)};init.prototype=wfQuery.fn;