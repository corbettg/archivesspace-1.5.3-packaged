$(function(){$(".nav a").on("focus",function(){if($(this).parents("li.dropdown-submenu").length){$(".dropdown-menu",$(this).parent()).show()}else{$(".dropdown-submenu .dropdown-menu",$(this).parents(".nav")).css("display","")}});$(".dropdown-submenu > a").on("keyup",function(a){if(a.keyCode===39){$(".dropdown-menu a:first",$(this).parent()).focus()}});$(".dropdown-submenu > .dropdown-menu > li > a").on("keyup",function(){if(event.keyCode===37){$("> a",$(this).parents(".dropdown-submenu:first")).focus()}});$(".nav .scoped-search-options a").click(function(){var a=$(this).parents("form:first");$(":input[name='type']",a).val($(this).data("type"));a.submit()});$(".nav .search-switcher").click(function(a){a.stopPropagation();a.preventDefault();$(".nav .search-switcher").toggle();$(".advanced-search-container").slideToggle()});$(".search-switcher-hide").click(function(a){a.stopPropagation();a.preventDefault();$(".nav .search-switcher").toggle();$(".advanced-search-container").slideUp()})});