(function(d){var i={method:"GET",queryParam:"q",searchDelay:300,minChars:1,propertyToSearch:"name",jsonContainer:null,contentType:"json",prePopulate:null,processPrePopulate:false,hintText:"Type in a search term",noResultsText:"No results",searchingText:"Searching...",deleteText:"&times;",animateDropdown:true,theme:null,zindex:999,resultsLimit:null,enableHTML:true,resultsFormatter:function(l){var k=l[this.propertyToSearch];return"<li>"+(this.enableHTML?k:a(k))+"</li>"},tokenFormatter:function(l){var k=l[this.propertyToSearch];return"<li><p>"+(this.enableHTML?k:a(k))+"</p></li>"},tokenLimit:null,tokenDelimiter:",",preventDuplicates:false,tokenValue:"id",allowFreeTagging:false,onResult:null,onCachedResult:null,onAdd:null,onFreeTaggingAdd:null,onDelete:null,onReady:null,idPrefix:"token-input-",disabled:false,formatQueryParam:function(l,k){return l},caching:true};var f={tokenList:"token-input-list",token:"token-input-token",tokenReadOnly:"token-input-token-readonly",tokenDelete:"token-input-delete-token",selectedToken:"token-input-selected-token",highlightedToken:"token-input-highlighted-token",dropdown:"token-input-dropdown",dropdownItem:"token-input-dropdown-item",dropdownItem2:"token-input-dropdown-item2",selectedDropdownItem:"token-input-selected-dropdown-item",inputToken:"token-input-input-token",focused:"token-input-focused",disabled:"token-input-disabled"};var h={BEFORE:0,AFTER:1,END:2};var e={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,NUMPAD_ENTER:108,COMMA:null};var j={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"};var g=/[&<>"'\/]/g;function c(k){return String((k===null||k===undefined)?"":k)}function a(k){return c(k).replace(g,function(l){return j[l]})}var b={init:function(k,l){var m=d.extend({},i,l||{});return this.each(function(){d(this).data("settings",m);d(this).data("tokenInputObject",new d.TokenList(this,k,m))})},clear:function(){this.data("tokenInputObject").clear();return this},add:function(k){this.data("tokenInputObject").add(k);return this},remove:function(k){this.data("tokenInputObject").remove(k);return this},get:function(){return this.data("tokenInputObject").getTokens()},toggleDisabled:function(k){this.data("tokenInputObject").toggleDisabled(k);return this},setOptions:function(k){d(this).data("settings",d.extend({},d(this).data("settings"),k||{}));return this}};d.fn.tokenInput=function(k){if(b[k]){return b[k].apply(this,Array.prototype.slice.call(arguments,1))}else{return b.init.apply(this,arguments)}};d.TokenList=function(o,y,Z){if(d.type(y)==="string"||d.type(y)==="function"){d(o).data("settings").url=y;var s=D();if(d(o).data("settings").crossDomain===undefined&&typeof s==="string"){if(s.indexOf("://")===-1){d(o).data("settings").crossDomain=false}else{d(o).data("settings").crossDomain=(location.href.split(/\/+/g)[1]!==s.split(/\/+/g)[1])}}}else{if(typeof(y)==="object"){d(o).data("settings").local_data=y}}if(d(o).data("settings").classes){d(o).data("settings").classes=d.extend({},f,d(o).data("settings").classes)}else{if(d(o).data("settings").theme){d(o).data("settings").classes={};d.each(f,function(af,ag){d(o).data("settings").classes[af]=ag+"-"+d(o).data("settings").theme})}else{d(o).data("settings").classes=f}}var L=[];var B=0;var x=new d.TokenList.Cache();var X;var T;var F=d('<input type="text"  autocomplete="off">').css({outline:"none"}).attr("id",d(o).data("settings").idPrefix+o.id).focus(function(){if(d(o).data("settings").disabled){return false}else{if(d(o).data("settings").tokenLimit===null||d(o).data("settings").tokenLimit!==B){r()}}v.addClass(d(o).data("settings").classes.focused)}).blur(function(){M();d(this).val("");v.removeClass(d(o).data("settings").classes.focused);if(d(o).data("settings").allowFreeTagging){n()}else{d(this).val("")}v.removeClass(d(o).data("settings").classes.focused)}).bind("keyup keydown blur update",l).keydown(function(ag){var ai;var af;switch(ag.keyCode){case e.LEFT:return true;case e.RIGHT:return true;case e.UP:case e.DOWN:if(!d(this).val()){ai=t.prev();af=t.next();if((ai.length&&ai.get(0)===J)||(af.length&&af.get(0)===J)){if(ag.keyCode===e.LEFT||ag.keyCode===e.UP){Q(d(J),h.BEFORE)}else{Q(d(J),h.AFTER)}}else{if((ag.keyCode===e.LEFT||ag.keyCode===e.UP)&&ai.length){aa(d(ai.get(0)))}else{if((ag.keyCode===e.RIGHT||ag.keyCode===e.DOWN)&&af.length){aa(d(af.get(0)))}}}}else{var ah=null;if(ag.keyCode===e.DOWN||ag.keyCode===e.RIGHT){ah=d(V).next()}else{ah=d(V).prev()}if(ah.length){ad(ah)}}return false;case e.BACKSPACE:ai=t.prev();if(!d(this).val().length){if(J){q(d(J));K.change()}else{if(ai.length){aa(d(ai.get(0)))}}return false}else{if(d(this).val().length===1){M()}else{setTimeout(function(){I()},5)}}break;case e.TAB:return true;case e.ENTER:if(V){S(d(V).data("tokeninput"));K.change()}else{d(o).trigger("tokeninput.enter")}ag.stopPropagation();ag.preventDefault();break;case e.NUMPAD_ENTER:case e.COMMA:if(V){S(d(V).data("tokeninput"));K.change()}else{if(d(o).data("settings").allowFreeTagging){n()}ag.stopPropagation();ag.preventDefault()}return false;case e.ESCAPE:M();return true;default:if(String.fromCharCode(ag.which)){setTimeout(function(){I()},5)}break}});var K=d(o).hide().val("").focus(function(){ae(F)}).blur(function(){F.blur()});var J=null;var N=0;var V=null;var v=d("<ul />").addClass(d(o).data("settings").classes.tokenList).click(function(ag){var af=d(ag.target).closest("li");if(af&&af.get(0)&&d.data(af.get(0),"tokeninput")){ac(af)}else{if(J){Q(d(J),h.END)}ae(F)}}).mouseover(function(ag){var af=d(ag.target).closest("li");if(af&&J!==this){af.addClass(d(o).data("settings").classes.highlightedToken)}}).mouseout(function(ag){var af=d(ag.target).closest("li");if(af&&J!==this){af.removeClass(d(o).data("settings").classes.highlightedToken)}}).insertBefore(K);var t=d("<li />").addClass(d(o).data("settings").classes.inputToken).appendTo(v).append(F);var ab=d("<div>").addClass(d(o).data("settings").classes.dropdown).appendTo("body").hide();var R=d("<tester/>").insertAfter(F).css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:F.css("fontSize"),fontFamily:F.css("fontFamily"),fontWeight:F.css("fontWeight"),letterSpacing:F.css("letterSpacing"),whiteSpace:"nowrap"});K.val("");var E=d(o).data("settings").prePopulate||K.data("pre");if(d(o).data("settings").processPrePopulate&&d.isFunction(d(o).data("settings").onResult)){E=d(o).data("settings").onResult.call(K,E)}if(E&&E.length){d.each(E,function(af,ag){p(ag);O()})}if(d(o).data("settings").disabled){H(true)}if(d.isFunction(d(o).data("settings").onReady)){d(o).data("settings").onReady.call()}this.clear=function(){v.children("li").each(function(){if(d(this).children("input").length===0){q(d(this))}})};this.add=function(af){S(af)};this.remove=function(af){v.children("li").each(function(){if(d(this).children("input").length===0){var ai=d(this).data("tokeninput");var ag=true;for(var ah in af){if(af[ah]!==ai[ah]){ag=false;break}}if(ag){q(d(this))}}})};this.getTokens=function(){return L};this.toggleDisabled=function(af){H(af)};function k(af){return d(o).data("settings").enableHTML?af:a(af)}function H(af){if(typeof af==="boolean"){d(o).data("settings").disabled=af}else{d(o).data("settings").disabled=!d(o).data("settings").disabled}F.attr("disabled",d(o).data("settings").disabled);v.toggleClass(d(o).data("settings").classes.disabled,d(o).data("settings").disabled);if(J){Q(d(J),h.END)}K.attr("disabled",d(o).data("settings").disabled)}function O(){if(d(o).data("settings").tokenLimit!==null&&B>=d(o).data("settings").tokenLimit){F.hide();M();return}}function l(){if(T===(T=F.val())){return}R.html(a(T));F.width(R.width()+30)}function Y(af){return((af>=48&&af<=90)||(af>=96&&af<=111)||(af>=186&&af<=192)||(af>=219&&af<=222))}function n(){var af=d.trim(F.val());var ag=af.split(d(o).data("settings").tokenDelimiter);d.each(ag,function(aj,ai){if(!ai){return}if(d.isFunction(d(o).data("settings").onFreeTaggingAdd)){ai=d(o).data("settings").onFreeTaggingAdd.call(K,ai)}var ah={};ah[d(o).data("settings").tokenValue]=ah[d(o).data("settings").propertyToSearch]=ai;S(ah)})}function p(ag){var ai=d(d(o).data("settings").tokenFormatter(ag));var af=ag.readonly===true?true:false;if(af){ai.addClass(d(o).data("settings").classes.tokenReadOnly)}ai.addClass(d(o).data("settings").classes.token).insertBefore(t);if(!af){d("<span>"+d(o).data("settings").deleteText+"</span>").addClass(d(o).data("settings").classes.tokenDelete).appendTo(ai).click(function(){if(!d(o).data("settings").disabled){q(d(this).parent());K.change();return false}})}var ah=ag;d.data(ai.get(0),"tokeninput",ag);L=L.slice(0,N).concat([ah]).concat(L.slice(N));N++;C(L,K);B+=1;if(d(o).data("settings").tokenLimit!==null&&B>=d(o).data("settings").tokenLimit){F.hide();M()}return ai}function S(af){var ah=d(o).data("settings").onAdd;if(B>0&&d(o).data("settings").preventDuplicates){var ag=null;v.children().each(function(){var aj=d(this);var ai=d.data(aj.get(0),"tokeninput");if(ai&&ai.id===af.id){ag=aj;return false}});if(ag){aa(ag);t.insertAfter(ag);ae(F);return}}if(d(o).data("settings").tokenLimit===null||B<d(o).data("settings").tokenLimit){p(af);O()}F.val("");M();if(d.isFunction(ah)){ah.call(K,af)}}function aa(af){if(!d(o).data("settings").disabled){af.addClass(d(o).data("settings").classes.selectedToken);J=af.get(0);F.val("");M()}}function Q(ag,af){ag.removeClass(d(o).data("settings").classes.selectedToken);J=null;if(af===h.BEFORE){t.insertBefore(ag);N--}else{if(af===h.AFTER){t.insertAfter(ag);N++}else{t.appendTo(v);N=B}}ae(F)}function ac(ag){var af=J;if(J){Q(d(J),h.END)}if(af===ag.get(0)){Q(ag,h.END)}else{aa(ag)}}function q(ag){var ah=d.data(ag.get(0),"tokeninput");var ai=d(o).data("settings").onDelete;var af=ag.prevAll().length;if(af>N){af--}ag.remove();J=null;ae(F);L=L.slice(0,af).concat(L.slice(af+1));if(af<N){N--}C(L,K);B-=1;if(d(o).data("settings").tokenLimit!==null){F.show().val("");ae(F)}if(d.isFunction(ai)){ai.call(K,ah)}}function C(ah,af){var ag=d.map(ah,function(ai){if(typeof d(o).data("settings").tokenValue=="function"){return d(o).data("settings").tokenValue.call(this,ai)}return ai[d(o).data("settings").tokenValue]});af.val(ag.join(d(o).data("settings").tokenDelimiter))}function M(){ab.hide().empty();V=null}function w(){ab.css({position:"absolute",top:d(v).offset().top+d(v).outerHeight(),left:d(v).offset().left,width:d(v).outerWidth(),"z-index":d(o).data("settings").zindex}).show()}function u(){if(d(o).data("settings").searchingText){ab.html("<p>"+k(d(o).data("settings").searchingText)+"</p>");w()}}function r(){if(d(o).data("settings").hintText){ab.html("<p>"+k(d(o).data("settings").hintText)+"</p>");w()}}var P=new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g");function W(af){return af.replace(P,"\\$&")}function A(ag,af){return ag.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+W(af)+")(?![^<>]*>)(?![^&;]+;)","gi"),function(ah,ai){return"<b>"+k(ai)+"</b>"})}function G(ag,ah,af){return ag.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+W(ah)+")(?![^<>]*>)(?![^&;]+;)","g"),A(ah,af))}function U(ah,af){if(af&&af.length){ab.empty();var ag=d("<ul>").appendTo(ab).mouseover(function(ai){ad(d(ai.target).closest("li"))}).mousedown(function(ai){S(d(ai.target).closest("li").data("tokeninput"));K.change();return false}).hide();if(d(o).data("settings").resultsLimit&&af.length>d(o).data("settings").resultsLimit){af=af.slice(0,d(o).data("settings").resultsLimit)}d.each(af,function(ai,aj){var ak=d(o).data("settings").resultsFormatter(aj);ak=G(ak,aj[d(o).data("settings").propertyToSearch],ah);ak=d(ak).appendTo(ag);if(ai%2){ak.addClass(d(o).data("settings").classes.dropdownItem)}else{ak.addClass(d(o).data("settings").classes.dropdownItem2)}if(ai===0){ad(ak)}d.data(ak.get(0),"tokeninput",aj)});w();if(d(o).data("settings").animateDropdown){ag.slideDown("fast")}else{ag.show()}}else{if(d(o).data("settings").noResultsText){ab.html("<p>"+k(d(o).data("settings").noResultsText)+"</p>");w()}}}function ad(af){if(af){if(V){m(d(V))}af.addClass(d(o).data("settings").classes.selectedDropdownItem);V=af.get(0)}}function m(af){af.removeClass(d(o).data("settings").classes.selectedDropdownItem);V=null}function I(){var af=F.val();if(af&&af.length){if(J){Q(d(J),h.AFTER)}if(af.length>=d(o).data("settings").minChars){u();clearTimeout(X);X=setTimeout(function(){z(af)},d(o).data("settings").searchDelay)}else{M()}}}function z(al){var ah=al+D();var af=x.get(ah);if(af){if(d.isFunction(d(o).data("settings").onCachedResult)){af=d(o).data("settings").onCachedResult.call(K,af)}U(al,af)}else{if(d(o).data("settings").url){var aj=D();var ai={};ai.data={};if(aj.indexOf("?")>-1){var am=aj.split("?");ai.url=am[0];var ag=am[1].split("&");d.each(ag,function(an,ap){var ao=ap.split("=");ai.data[ao[0]]=ao[1]})}else{ai.url=aj}ai.data[d(o).data("settings").queryParam]=d(o).data("settings").formatQueryParam(al,ai);ai.type=d(o).data("settings").method;ai.dataType=d(o).data("settings").contentType;if(d(o).data("settings").crossDomain){ai.dataType="jsonp"}ai.success=function(an){if(d(o).data("settings").caching){x.add(ah,d(o).data("settings").jsonContainer?an[d(o).data("settings").jsonContainer]:an)}if(d.isFunction(d(o).data("settings").onResult)){an=d(o).data("settings").onResult.call(K,an)}if(F.val()===al){U(al,d(o).data("settings").jsonContainer?an[d(o).data("settings").jsonContainer]:an)}};d.ajax(ai)}else{if(d(o).data("settings").local_data){var ak=d.grep(d(o).data("settings").local_data,function(an){return an[d(o).data("settings").propertyToSearch].toLowerCase().indexOf(al.toLowerCase())>-1});x.add(ah,ak);if(d.isFunction(d(o).data("settings").onResult)){ak=d(o).data("settings").onResult.call(K,ak)}U(al,ak)}}}}function D(){var af=d(o).data("settings").url;if(typeof d(o).data("settings").url=="function"){af=d(o).data("settings").url.call(d(o).data("settings"))}return af}function ae(af){setTimeout(function(){af.focus()},50)}};d.TokenList.Cache=function(l){var n=d.extend({max_size:500},l);var o={};var m=0;var k=function(){o={};m=0};this.add=function(q,p){if(m>n.max_size){k()}if(!o[q]){m+=1}o[q]=p};this.get=function(p){return o[p]}}}(jQuery));$(function(){$.fn.linker=function(){$(this).each(function(){var h=$(this);var l=h.parents(".linker-wrapper:first");if(h.hasClass("initialised")){return}h.addClass("initialised");$(".prelinker",l).remove();var a={url:decodeURIComponent(h.data("url")),browse_url:decodeURIComponent(h.data("browse-url")),format_template:h.data("format_template"),format_template_id:h.data("format_template_id"),format_property:h.data("format_property"),path:h.data("path"),name:h.data("name"),multiplicity:h.data("multiplicity")||"many",label:h.data("label"),label_plural:h.data("label_plural"),modal_id:h.data("modal_id")||(h.attr("id")+"_modal"),sortable:h.data("sortable")===true,types:h.data("types"),exclude_ids:h.data("exclude")||[]};a.allow_multiple=a.multiplicity==="many";if(a.format_template&&a.format_template.substring(0,2)!="${"){a.format_template="${"+a.format_template+"}"}var i=function(m){var n=$("#"+a.modal_id);var o=function(p){$(".linker-container",n).html(p);$("#createAndLinkButton",n).removeAttr("disabled");$("form",n).ajaxForm({data:{inline:true},beforeSubmit:function(){$("#createAndLinkButton",n).attr("disabled","disabled")},success:function(r,q,s){if($(r).is("form")){o(r)}else{if(a.multiplicity==="one"){e()}h.tokenInput("add",{id:r.uri,name:r.display_string||r.title,json:r});h.triggerHandler("change");n.modal("hide")}},error:function(s,r,q){$("#createAndLinkButton",n).removeAttr("disabled")}});n.scrollTo(".alert");n.trigger("resize");$(document).triggerHandler("loadedrecordform.aspace",[n])};$.ajax({url:m,success:o});$("#createAndLinkButton",n).click(function(){$("form",n).triggerHandler("submit")})};var f=function(){AS.openCustomModal(a.modal_id,"Create "+a.label,AS.renderTemplate("linker_createmodal_template",a),"large",{},this);if($(this).hasClass("linker-create-btn")){i($(this).data("target"))}else{i($(".linker-create-btn:first",l).data("target"))}return false};var j=function(){var o={};var n=function(p){$.each(h.tokenInput("get"),function(){o[this.id]=this.json});$.ajax({url:a.browse_url,data:{page:1,type:a.types,linker:true,exclude:a.exclude_ids,multiplicity:a.multiplicity},type:"GET",dataType:"html",success:function(s){var r=$("#"+a.modal_id);var t=$(".linker-container",r);var q=function(){$(":input[name=linker-item]",t).each(function(){var u=$(this);u.click(function(v){v.stopPropagation();if(!a.allow_multiple){o={};$("tr.selected",u.closest("table")).removeClass("selected")}if(o.hasOwnProperty(u.val())){delete o[u.val()];u.closest("tr").removeClass("selected")}else{o[u.val()]=u.data("object");u.closest("tr").addClass("selected")}});$("td",u.closest("tr")).click(function(v){v.preventDefault();u.trigger("click")})});$.each(o,function(u){$(":input[value='"+u+"']",t).attr("checked","checked").closest("tr").addClass("selected")});r.trigger("resize")};t.html(s);$(t).on("click","a",function(u){u.preventDefault();t.load(u.target.href,q)});$(t).on("submit","form",function(v){v.preventDefault();var u=$(v.target);var w=(u.attr("method")||"get").toUpperCase();if(w=="POST"){jQuery.post(u.attr("action")+".js",u.serializeArray(),function(x){t.html(x);q()})}else{t.load(u.attr("action")+".js?"+u.serialize(),q)}});q()}})};var m=function(){selectedItems=[];$(".token-input-delete-token",l).each(function(){$(this).triggerHandler("click")});$.each(o,function(q,p){h.tokenInput("add",{id:q,name:p.display_string||p.title,json:p})});$("#"+a.modal_id).modal("hide");h.triggerHandler("change")};AS.openCustomModal(a.modal_id,"Browse "+a.label_plural,AS.renderTemplate("linker_browsemodal_template",a),"large",{},this);n();$("#"+a.modal_id).on("click","#addSelectedButton",m);$("#"+a.modal_id).on("click",".linker-list .pagination .navigation a",function(){n($(this).attr("rel"))});return false};var g=function(o){var n=[];var m=[];$.each(h.tokenInput("get"),function(p){m.push(p.id)});$.each(o.search_data.results,function(p,q){if($.inArray(q.uri,m)===-1){n.push({name:q.display_string||q.title,id:q.id,json:q})}});return n};var b=function(){$(".linker-browse-btn",l).on("click",j);$(".linker-create-btn",l).on("click",f);l.one("mouseenter focus",".has-popover",function(){$(document).triggerHandler("init.popovers",[h.parent()])})};var e=function(){var o=$(".token-input-list",h.parent());for(var n=0;n<h.tokenInput("get").length;n++){var m=h.tokenInput("get")[n].id.replace(/\//g,"_");$("#"+m+" :input",o).remove()}h.tokenInput("clear")};var d=function(){if($(".token-input-list",l).data("sortable")){$(".token-input-list",l).sortable("destroy")}$(".token-input-list",l).sortable({items:"li.token-input-token"});$(".token-input-list",l).off("sortupdate").on("sortupdate",function(){h.parents("form:first").triggerHandler("formchanged.aspace")})};var c=function(){if(h.data("multiplicity")==="one"){if($.isEmptyObject(h.data("selected"))){return[]}return[{id:h.data("selected").uri,name:h.data("selected").display_string||h.data("selected").title,json:h.data("selected")}]}else{if(!h.data("selected")||h.data("selected").length===0){return[]}return h.data("selected").map(function(m){return{id:m.uri,name:m.display_string||m.title,json:m}})}};var k=function(){var m=$.extend({},AS.linker_locales,{animateDropdown:false,preventDuplicates:true,allowFreeTagging:false,tokenLimit:(a.multiplicity==="one"?1:null),caching:false,onCachedResult:g,onResult:g,zindex:1100,tokenFormatter:function(o){var n=$(AS.renderTemplate("linker_selectedtoken_template",{item:o,config:a}));$("input[name*=resolved]",n).val(JSON.stringify(o.json));return n},resultsFormatter:function(p){var o=p.name;var n=$("<span class='"+p.json.jsonmodel_type+"'>");n.text(o);n.prepend("<span class='icon-token'></span>");var q=$("<li>");q.append(n);return q[0].outerHTML},prePopulate:c(),onDelete:function(){h.triggerHandler("change")},onAdd:function(n){if(a.sortable&&a.allow_multiple){d()}$(document).triggerHandler("init.popovers",[h.parent()])},formatQueryParam:function(p,o){if(h.tokenInput("get").length>0||a.exclude_ids.length>0){var n=$.merge([],a.exclude_ids);$.each(h.tokenInput("get"),function(q,r){n.push(r.id)});o.data["exclude[]"]=n}if(a.types&&a.types.length>0){o.data.type=a.types}return(p+"*").toLowerCase()}});setTimeout(function(){h.tokenInput(a.url,m);$("> :input[type=text]",$(".token-input-input-token",h.parent())).attr("placeholder",AS.linker_locales.hintText);$("> :input[type=text]",$(".token-input-input-token",h.parent())).addClass("form-control");h.parent().addClass("multiplicity-"+a.multiplicity);if(a.sortable&&a.allow_multiple){d();l.addClass("sortable")}});b()};k()})}});$(document).ready(function(){$(document).bind("loadedrecordsubforms.aspace",function(a,b){$(".linker-wrapper:visible > .linker:not(.initialised)",b).linker();$("#archives_tree_toolbar .linker:not(.initialised)").linker()});$(document).bind("subrecordcreated.aspace",function(c,a,b){$(".linker:not(.initialised)",b).linker()})});$(function(){var a=function(){$("#merge-dropdown .linker:not(.initialised)").linker();$(".merge-form .btn-cancel").on("click",function(){$(".merge-action").trigger("click")});$(".merge-action").on("click",function(b){b.preventDefault();b.stopImmediatePropagation();if($(this).attr("disabled")){return}if($(".merge-form")[0].style.display==="block"){$(".merge-form").css("display","")}else{$(".merge-form").css("display","block")}});$(".merge-form").on("click",function(b){b.stopPropagation()});$(".merge-form .linker-wrapper .dropdown-toggle").on("click",function(b){b.stopPropagation();$(this).parent().toggleClass("open")});$(".merge-form .merge-button").on("click",function(c){var b=$(".merge-form").serializeObject();if(b["merge[ref]"]&&!b["merge[ref][]"]){b["merge[ref][]"]=b["merge[ref]"]}if(!b["merge[ref][]"]){$(".missing-ref-message",".merge-form").show();c.preventDefault();c.stopImmediatePropagation();return false}else{$(".missing-ref-message",".merge-form").hide();$(this).data("form-data",{refs:b["merge[ref][]"]})}})};if($(".merge-form").length>0){a()}else{$(document).bind("loadedrecordform.aspace",a)}});