$(function(){var a=function(b){var d=b.children(".inline-results");var c=function(e){d.load(e)};c(b.data("url"));d.on("click",".pagination a, .sort-by-action .dropdown-menu a",function(e){e.preventDefault();e.stopPropagation();c($(this).attr("href"))})};$(".search-data-as-subrecord").each(function(){a($(this))})});