$(function(){
	var index;
	//鼠标移入图片变大,hr变色
	$('#four_uls>li ').on({
		mouseenter:function(){
			index = $(this).index();
			console.log(index);
			$('#four_uls>li ').eq(index).children('.e').children('.img').children('img').css({
				'transform': 'scale(1.4)',
				'transition':'2s'
			});
			$('#four_uls>li ').eq(index).children('.e').children('.date').css({
				'border-bottom':'2px solid #9f7b4b'
			});
		},
		mouseleave:function(){
			$('#four_uls>li ').eq(index).children('.e').children('.img').children('img').css({
				'transform': 'scale(1)',
				'transition':'3s'
			});
			$('#four_uls>li ').eq(index).children('.e').children('.date').css({
				'border-bottom':'2px solid #d7d7d7'
			});
		},
	})


	//上书房
	$('.bot_box .shop .m').on({
		mouseenter:function(){
			$('.bot_box .shop .m').children('.mid').css({
				'transform': 'rotateY(360deg)',
				'transition':'1s'
			});
		},
		mouseleave:function(){
			$('.bot_box .shop .m').children('.mid').css({
				'transform': 'rotateY(0deg)',
				'transition':'1s'
			});
		},
	})

	//鼠标移入“详情转圈圈1”
	$('.bot_box .center .left .test .two .detail').on({
		mouseenter:function(){
			$('.bot_box .center .left .test .two .detail').children('img').css({
				'transform':'rotate(-180deg)',
				'transition':'1s'
			});
		},
	})
	//鼠标移入“详情转圈圈2”
	$('.bot_box .center .left .spring .two .detail').on({
		mouseenter:function(){
			$('.bot_box .center .left .spring .two .detail').children('img').css({
				'transform':'rotate(-180deg)',
				'transition':'1s'
			});
		},
	})
	//鼠标移入“详情转圈圈3”
	$('.bot_box .center .right .down .two .detail').on({
		mouseenter:function(){
			$('.bot_box .center .right .down .two .detail').children('img').css({
				'transform':'rotate(-180deg)',
				'transition':'1s'
			});
		},
	})
		//鼠标移入“详情转圈圈4”
	$('.bot_box .vol .left .two .detail').on({
		mouseenter:function(){
			$('.bot_box .vol .left .two .detail').children('img').css({
				'transform':'rotate(-180deg)',
				'transition':'1s'
			});
		},
	})

	//轮播图
	var num=0;
	var timer;
	function go(){
		timer=setInterval(function(){
			num++;
			if(num>2){
				num=0;
				$('#changlb_uls').css('margin-left', -1258*num+'px');
				// 回到第一张
				num=1;
				// 直接播放第二张
			}
			console.log(num);
			if(num>1){
				$('#changlb_ols span li').eq(0).addClass('now');
				$('#changlb_ols span li').eq(0).siblings().removeClass('now');
			}
			else{
				$('#changlb_ols span li').eq(num).addClass('now');
				$('#changlb_ols span li').eq(num).siblings().removeClass('now');
			}
			$('#changlb_uls').animate({
				'margin-left':-1258*num+'px'
			},1000)
		},4000)
	}
	go();

	$('#changlb_ols span li').click(function(event) {
		num = $(this).index();
		$(this).addClass('now');
		$(this).siblings().removeClass('now');
		$('#changlb_uls').animate({
			'margin-left':-1258*num+'px'
		},300)
	});



	 $(window).scroll(function() {
		if($(window).scrollTop()>2200){
			if(!$('.bot_box .shop').hasClass('start')){
				$('.bot_box .shop').addClass('start');
			}
		}
	});


})