wfQuery.fn.extend({css:function(t,n){return this._attr(t,n,function(t){return t?window.getComputedStyle(this)[t]:this.style},function(t,n){/width|height|left|right|top|bottom|size|radius/i.test(t)&&/^[\d\.]+$/.test(n)&&(n+="px"),this.style[t]=n})},show:function(){return this.css({display:""})},hide:function(){return this.css({display:"none"})},toggle:function(){return this.each(function(){var t=this;t.style.display="none"===window.getComputedStyle(t).display?"":"none"})}});