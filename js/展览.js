$(function(){
	var index;
	//鼠标移入图片变大1
	$('.d_box .s_box .main .special .up>.t').on({
		mouseenter:function(){
			index = $(this).index();
			console.log(index);
			$('.d_box .s_box .main .special .up>.t').eq(index).children('img').css({
				'transform': 'scale(1.1)',
				'transition':'1s'
			});
		},
		mouseleave:function(){
			$('.d_box .s_box .main .special .up>.t').eq(index).children('img').css({
				'transform': 'scale(1)',
				'transition':'1s'
			});
		},
	})

	$('.d_box .s_box .main .special .down>.t').on({
		mouseenter:function(){
			index = $(this).index();
			console.log(index);
			$('.d_box .s_box .main .special .down>.t').eq(index).children('img').css({
				'transform': 'scale(1.1)',
				'transition':'1s'
			});
		},
		mouseleave:function(){
			$('.d_box .s_box .main .special .down>.t').eq(index).children('img').css({
				'transform': 'scale(1)',
				'transition':'1s'
			});
		},
	})

	var oindex;
	//鼠标移入图片变大2
	$('#uls>.s').on({
		mouseenter:function(){
			oindex = $(this).index();
			console.log(oindex);
			$('#uls>.s').eq(oindex).children('img').css({
				'transform': 'scale(1.2)',
				'transition':'0.5s'
			});
		},
		mouseleave:function(){
			$('#uls>.s').eq(oindex).children('img').css({
				'transform': 'scale(1)',
				'transition':'0.5s'
			});
		},
	})

	//鼠标移入图片变大3
	$('#bb').on({
		mouseenter:function(){
			$('#bb').children('img').css({
				'transform': 'scale(1.2)',
				'transition':'0.5s'
			});
		},
		mouseleave:function(){
			$('#bb').children('img').css({
				'transform': 'scale(1)',
				'transition':'0.5s'
			});
		},
	})
	
	//鼠标移入图片变大4
	$('.foreign .left').on({
		mouseenter:function(){
			$('.foreign .left').children('img').css({
				'transform': 'scale(1.1)',
				'transition':'0.5s'
			});
		},
		mouseleave:function(){
			$('.foreign .left').children('img').css({
				'transform': 'scale(1)',
				'transition':'0.5s'
			});
		},
	})

	//分页1
	$('#ols>li').click(function(event) {
		event.preventDefault();
		$(this).addClass('current');
		$(this).siblings().removeClass('current');
	
		
	})

	//分页2
	$('#olss>li').click(function(event) {
		event.preventDefault();
		$(this).addClass('current');
		$(this).siblings().removeClass('current');
	
		
	})


	var num=1;
	$('.d_box .s_box .main .right').click(function(event) {
		$('.main .special .up').animate({
			'margin-left':-228*num+'px'
		},300)
		$('.main .special .down').animate({
			'margin-left':-228*num+'px'
		},300)
	});

	$('.d_box .s_box .main .left').click(function(event) {
		$('.main .special .up').animate({
			'margin-left':0*num+'px'
		},300)
		$('.main .special .down').animate({
			'margin-left':0*num+'px'
		},300)
	});
	

})