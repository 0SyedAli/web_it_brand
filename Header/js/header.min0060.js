$((function(){var n=function(n,e,i){var o=n.outerHeight(),t=i.offset().top;e.scrollTop()>=t?(i.height(o),n.addClass("affix")):(n.removeClass("affix"),i.height("auto"))};$('[data-toggle="affix"]').each((function(){var e=$(this),i=$("<div></div>");e.before(i),$(window).on("scroll resize",(function(){n(e,$(this),i)})),n(e,$(window),i)}));$(".pcnav");var e,i,o=$(".hloc-btn"),t=$(".pcnav .links"),d=$(".pcnav .hidden-links"),a=($(".hloc-btn, .hloc-moremenu"),0),c=0,h=[];function l(){e=t.width()-10,i=t.children().length,h[i-1]>e?(t.children().last().prependTo(d),i-=1,l()):e>h[i]&&(d.children().first().appendTo(t),i+=1),o.attr("count",a-i),i===a?o.addClass("hidden"):o.removeClass("hidden")}t.children().outerWidth((function(n,e){c+=e,a+=1,h.push(c)})),$(window).resize((function(){l()})),o.on("click",(function(){d.toggleClass("hidden")})),l()})),$(document).mouseup((function(n){var e=$(".pcnav-btn-panel");$(".hloc-moremenu").not("hidden")&&(e.is(n.target)||0!==e.has(n.target).length||$(".hloc-moremenu").addClass("hidden"))}));