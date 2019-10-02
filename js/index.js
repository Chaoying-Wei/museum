// JavaScript Document
response('page1280', 'page1366', 'page1440', 'page1920');
$(function() {
	$('.home .block4 .scrolllist li').each(function(idx, elm) {
		$(this).addClass('l' + idx);
	});

	$('.block3 path').attr('stroke', '#de504d');

	var sto_nav;
	$(".nav li").hover(
		function() {
			clearTimeout(sto_nav);
			$(".nav li").removeClass("cur");
			$(".nav_child .child").removeClass("now");
			var child = $(".nav_child .child").eq($(this).index()).children();
			if(child.children().size() > 0) {
				$(this).addClass("cur");
				$(".nav_child .child").stop(true, true).eq($(this).index()).addClass("now");
				child.css({
					marginLeft: ($(this).offset().left + ($(this).width() / 2)) - (child.width() / 2)
				});
			}
		},
		function() {
			sto_nav = setTimeout(function() {
				$(".nav li").removeClass("cur");
				$(".nav_child .child").removeClass("now");
			}, 200);
		}
	);
	$(".nav_child .child").hover(
		function() {
			clearTimeout(sto_nav);
			$(this).addClass("now");
		},
		function() {
			$(this).removeClass("now");
			$(".nav li").removeClass("cur");
		}
	);

	$(function() {

		if(isPC()) {
			niceScroll();
		}
	})
	$(window).on('load', function() {
		$('#header .nav_child .child p:last-child').addClass('last');
		$(".gotop").click(function() {
			$("html,body").animate({
				scrollTop: 0
			}, 400 + $(window).scrollTop() * 0.3);
		});
		$(window).scroll(function() {
			if($(window).scrollTop() > $('#header').height() + $('#container .wrap div:first').height()) {
				if(!$(".sidebar").is(':visible')) {
					$(".sidebar").fadeIn(200);
				};
			} else {
				$(".sidebar").fadeOut(200);
			}
		});
		bottomFooter();

		$(window).on('resize', function() {
			bottomFooter();
			response('page1280', 'page1366', 'page1440', 'page1920');
		});

		$('.scaleimg').hover(function() {
			if(!$(this).children('img').is(':animated')) {
				$(this).children('img').animate({
					width: '110%',
					marginTop: '-5%',
					marginLeft: '-5%'
				}, 100);
			}
		}, function() {
			$(this).children('img').animate({
				width: '100%',
				marginTop: '0',
				marginLeft: '0'
			}, 100);
		});

		$('.selectWarp .options').mCustomScrollbar({
			theme: "dark-thin",
			scrollbarPosition: 'inside',
			autoHideScrollbar: true,
			autoExpandScrollbar: true,
			advanced: {
				autoExpandHorizontalScroll: true
			}
		});
		$('.selectWarp').each(function() {
			var obj = $(this);
			var selectBtn = obj.children('.selectBtn');
			var option = obj.children('.options');

			obj.on('click', '.selectBtn', function() {
				$(this).siblings('.options').slideToggle(200, function() {
					option.mCustomScrollbar('update');
				});
				if(!$(this).hasClass('down')) {
					selectBtn.addClass('down');
				} else {
					selectBtn.removeClass('down');
				}
			});

			obj.on('click', 'li', function() {
				var text = $(this).text();
				selectBtn.removeClass('down').children('.value').text(text);
				option.slideUp(100, function() {
					option.mCustomScrollbar('update');
				});
			});

			obj.mouseleave(function() {
				selectBtn.removeClass('down');
				option.slideUp(100, function() {
					option.mCustomScrollbar('update');
				});
			});
		});

		$('.close, .overlay').on('click', function() {
			$(this).parents('.popWindow').fadeOut(100);
		});
	});

	$("#header .scbtn").bind('click', function(e) {
		e.stopPropagation();
		$(".scbtn .search").toggle();
	});
	$("#header .search").bind('click', function(e) {
		e.stopPropagation();
	});

	$("#header .lang").hover(function() {
		$('#header .language').fadeIn(200);
		$('#header .loginbox,#header .search').hide();
	});

	$("#header .login").hover(function() {
		$('#header .loginbox').fadeIn(200);
		$('#header .search,#header .language').hide();
	});

	$("#header .lang").mouseleave(function() {
		$('#header .language').fadeOut(200);
	});

	$("#header .login").mouseleave(function() {
		$('#header .loginbox').fadeOut(200);
	});

	$("#footer .jy").bind("click", function() {
		$("#footer .proposal").animate({
			bottom: 0,
		});
		return false;
	});

	$("#footer .proposal").bind("mouseout", function(e) {
		$(this).animate({
			bottom: '-60px',
		});
	});

});

function response() {
	var ww = $(window).width();
	var bd = $('html');
	if(ww <= 1280 && !bd.hasClass(arguments[0])) {
		bd.attr('class', '').addClass(arguments[0]);
	} else if(ww > 1280 && ww <= 1366 && !bd.hasClass(arguments[1])) {
		bd.attr('class', '').addClass(arguments[1]);
	} else if(ww > 1366 && ww <= 1440 && !bd.hasClass(arguments[2])) {
		bd.attr('class', '').addClass(arguments[2]);
	} else if(ww > 1440 && ww <= 1600 && !bd.hasClass(arguments[2])) {
		bd.attr('class', '').addClass(arguments[2]);
	} else if(ww > 1600 && !bd.hasClass(arguments[3])) {
		bd.attr('class', '').addClass(arguments[3]);
	}
}

function isPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
	var flag = true;
	for(var v = 0; v < Agents.length; v++) {
		if(userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
};

function niceScroll() {
	var htmlNs = $("html").niceScroll({
		zindex: 9999,
		cursorwidth: 10,
		cursorborder: 0,
		cursoropacitymin: 0.3,
		cursoropacitymax: 0.8,
		horizrailenabled: false
	});
	htmlNs.cursor.css({
		width: 5
	});
	var objNs = (htmlNs.ispage) ? htmlNs.rail : htmlNs.win;
	objNs.hover(function() {
		htmlNs.state = true;
		htmlNs.cursor.stop().animate({
			width: 10
		}, 100);
	}, function() {
		if(htmlNs.rail.drag) {
			htmlNs.cursor.css({
				'opacity': '0.8'
			});
			return;
		}
		htmlNs.cursor.stop().animate({
			width: 5
		}, 100);
	});
	$(document).mouseup(function() {
		if(htmlNs.state) {
			htmlNs.state = false;
			htmlNs.cursor.stop().animate({
				width: 5
			}, 100);
		}
	});
};

function openAlert(ele) {
	$(ele).fadeIn(300);
};

function closeAlert() {
	$('.popWindow').fadeOut(300);
};

function getCode(obj, n) {
	var t = obj.value;
	(function() {
		if(n > 0) {
			obj.disabled = true
			obj.value = '鍊掕鏃�' + (n--) + '绉�';
			setTimeout(arguments.callee, 1000);
		} else {
			obj.disabled = false;
			obj.value = t;
		}
	})();
};

function numGrow(obj, str, time, delay) {
	var num = str.replace(/[^0-9]/ig, "");
	var g = 0;
	obj.text(g);
	var step = Math.ceil(num / (time / delay));
	var time = setInterval(function() {
		if(g <= num - step) {
			g += step;
		} else {
			g = num;
		}
		obj.text(formatNum(g.toString()));
		if(g >= num) {
			clearInterval(time);
			return false;
		}
	}, delay);
};

function formatNum(str) {
	var newStr = "";
	var count = 0;

	if(str.indexOf(".") == -1) {
		for(var i = str.length - 1; i >= 0; i--) {
			if(count % 3 == 0 && count != 0) {
				newStr = str.charAt(i) + "," + newStr;
			} else {
				newStr = str.charAt(i) + newStr;
			}
			count++;
		}
	} else {
		for(var i = str.indexOf(".") - 1; i >= 0; i--) {
			if(count % 3 == 0 && count != 0) {
				newStr = str.charAt(i) + "," + newStr;
			} else {
				newStr = str.charAt(i) + newStr; //閫愪釜瀛楃鐩告帴璧锋潵
			}
			count++;
		}

	}
	return newStr;
};

function bottomFooter() {
	var bHeight = $('body').height();
	var wHeight = $(window).height();
	var fHeight = $('#footer').height();
	if(!$('#footer').hasClass('fBottom')) {
		if(bHeight < wHeight) {
			$('#footer').addClass('fBottom');
		}
	} else {
		if(bHeight + fHeight >= wHeight) {
			$('#footer').removeClass('fBottom');
		}
	}
};

function transformFix() {
	if(arguments[arguments.length - 1]) {
		var str = '';
		for(var i = 1; i < arguments.length - 1; i++) {
			if(i > 1) {
				str = str + ' ' + arguments[i];
			} else {
				str = str + arguments[i];
			};
		};
		arguments[0].css({
			'-webkit-transform': str,
			'-moz-transform': str,
			'-ms-transform': str,
			'-o-transform': str,
			'transform': str
		});
	} else {
		var browser = ['-webkit-' + arguments[1], '-moz-' + arguments[1], '-ms-' + arguments[1], '-o-' + arguments[1], arguments[1]];
		var val = arguments[2],
			j = 0;
		for(j in browser) {
			arguments[0].css(browser[j], val);
		};
	};
};

function autoHeight(obj, w, h) {
	var per = w / h;
	obj.css('height', obj.width() / per);
};

function autoScale(ele) {
	var per;
	if($(window).width() < 320) {
		per = 1;
	}
	if($(window).width() >= 320 && $(window).width() <= 640) {
		per = $(window).width() / 320;
	}
	if($(window).width() > 640) { 
		per = 2;
	}
	ele.css({
		'-webkit-transform': 'scale(' + per + ')',
		'-moz-transform': 'scale(' + per + ')',
		'transform': 'scale(' + per + ')'
	});
};

$(".figcaption").each(function(i) {
	var divH = $(this).height();
	var $p = $("p", $(this)).eq(0);
	while($p.outerHeight() > divH) {
		$p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
	};
});

(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}
	if(!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
		var currTime = new Date().getTime();
		var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		var id = window.setTimeout(function() {
			callback(currTime + timeToCall);
		}, timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	}
	if(!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
		clearTimeout(id);
	}
})();