/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
!function(t,e){var i=0,n=Array.prototype.slice,s=t.cleanData;t.cleanData=function(e){for(var i,n=0;null!=(i=e[n]);n++)try{t(i).triggerHandler("remove")}catch(a){}s(e)},t.widget=function(i,n,s){var a,o,r,c,u={},l=i.split(".")[0];i=i.split(".")[1],a=l+"-"+i,s||(s=n,n=t.Widget),t.expr[":"][a.toLowerCase()]=function(e){return!!t.data(e,a)},t[l]=t[l]||{},o=t[l][i],r=t[l][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,o,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),c=new n,c.options=t.widget.extend({},c.options),t.each(s,function(i,s){return t.isFunction(s)?(u[i]=function(){var t=function(){return n.prototype[i].apply(this,arguments)},e=function(t){return n.prototype[i].apply(this,t)};return function(){var i,n=this._super,a=this._superApply;return this._super=t,this._superApply=e,i=s.apply(this,arguments),this._super=n,this._superApply=a,i}}(),e):(u[i]=s,e)}),r.prototype=t.widget.extend(c,{widgetEventPrefix:o?c.widgetEventPrefix:i},u,{constructor:r,namespace:l,widgetName:i,widgetFullName:a}),o?(t.each(o._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,r,i._proto)}),delete o._childConstructors):n._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var s,a,o=n.call(arguments,1),r=0,c=o.length;c>r;r++)for(s in o[r])a=o[r][s],o[r].hasOwnProperty(s)&&a!==e&&(i[s]=t.isPlainObject(a)?t.isPlainObject(i[s])?t.widget.extend({},i[s],a):t.widget.extend({},a):a);return i},t.widget.bridge=function(i,s){var a=s.prototype.widgetFullName||i;t.fn[i]=function(o){var r="string"==typeof o,c=n.call(arguments,1),u=this;return o=!r&&c.length?t.widget.extend.apply(null,[o].concat(c)):o,this.each(r?function(){var n,s=t.data(this,a);return s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(n=s[o].apply(s,c),n!==s&&n!==e?(u=n&&n.jquery?u.pushStack(n.get()):n,!1):e):t.error("no such method '"+o+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+o+"'")}:function(){var e=t.data(this,a);e?e.option(o||{})._init():t.data(this,a,new s(o,this))}),u}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,n){var s,a,o,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},s=i.split("."),i=s.shift(),s.length){for(a=r[i]=t.widget.extend({},this.options[i]),o=0;s.length-1>o;o++)a[s[o]]=a[s[o]]||{},a=a[s[o]];if(i=s.pop(),n===e)return a[i]===e?null:a[i];a[i]=n}else{if(n===e)return this.options[i]===e?null:this.options[i];r[i]=n}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,n,s){var a,o=this;"boolean"!=typeof i&&(s=n,n=i,i=!1),s?(n=a=t(n),this.bindings=this.bindings.add(n)):(s=n,n=this.element,a=this.widget()),t.each(s,function(s,r){function c(){return i||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?o[r]:r).apply(o,arguments):e}"string"!=typeof r&&(c.guid=r.guid=r.guid||c.guid||t.guid++);var u=s.match(/^(\w+)\s*(.*)$/),l=u[1]+o.eventNamespace,h=u[2];h?a.delegate(h,l,c):n.bind(l,c)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var s,a,o=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(s in a)s in i||(i[s]=a[s]);return this.element.trigger(i,n),!(t.isFunction(o)&&o.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,a){"string"==typeof s&&(s={effect:s});var o,r=s?s===!0||"number"==typeof s?i:s.effect||i:e;s=s||{},"number"==typeof s&&(s={duration:s}),o=!t.isEmptyObject(s),s.complete=a,s.delay&&n.delay(s.delay),o&&t.effects&&t.effects.effect[r]?n[e](s):r!==e&&n[r]?n[r](s.duration,s.easing,a):n.queue(function(i){t(this)[e](),a&&a.call(n[0]),i()})}})}(jQuery);