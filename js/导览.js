$(function(){
	// 弹出框
	$('.buy .front .kone').click(function(event) {
		event.preventDefault();
		$('.tanmain').css({
			'display': 'block'
		});
	})
	$('.tan .close').click(function(event) {
		event.preventDefault();
		$('.tanmain').css({
			'display': 'none'
		});
	})

	//点击跳到指定位置
	var a=$('.time').offset().top;
	 $('#up>li').eq(0).click(function(event) {
	 	$("html,body").animate({scrollTop:a}, 1000);
	 });

	 var b=$('.map').offset().top;
	 $('#up>li').eq(2).click(function(event) {
	 	$("html,body").animate({scrollTop:b}, 1000);
	 });

	 var c=$('.line').offset().top;
	 $('#down>li').eq(0).click(function(event) {
	 	$("html,body").animate({scrollTop:c}, 1000);
	 });

	 var d=$('.buy').offset().top;
	 $('#down>li').eq(1).click(function(event) {
	 	$("html,body").animate({scrollTop:d}, 1000);
	 });

	  var e=$('.know').offset().top;
	 $('#down>li').eq(2).click(function(event) {
	 	$("html,body").animate({scrollTop:e}, 1000);
	 });



	 //地图放大缩小

	$('#big').click(function(event) {
		// event.preventDefault();
		$('.map .omap ').css({
			'background-size':'150% 150%',
   			' top': '0px',
    		'left': '0px'
			
		});
	})

		$('#small').click(function(event) {
		// event.preventDefault();
		$('.map .omap ').css({
			'background-size':'100% 100%',
   			' top': '0px',
    		'left': '0px'
			
		});
	})
	//地图拖动
	

	
	//点击选项卡切换内容-钟表馆，珍宝馆票价优惠政策
	$(' .buy .front .kthree').click(function(event) {
		event.preventDefault();
		$('.buy .front .kthree').css({
			'background-position':'-242px 45px'
			
		});
		$('.buy .front .ktwo').css({
			'background-position':'0 -90px'
			
		});
		$('.buy .front .door').css({
			'display':'none'
			
		});
		$('.buy .front .watch').css({
			'display':'block'
			
		});
	})

	//点击选项卡切换内容-大门票优惠政策
	$(' .buy .front .ktwo').click(function(event) {
		event.preventDefault();
		$('.buy .front .ktwo').css({
			'background-position':'0 -43px'
			
		});
		$('.buy .front .kthree').css({
			'background-position':'-242px 0px'
			
		});
		$('.buy .front .watch').css({
			'display':'none'
			
		});
		$('.buy .front .door').css({
			'display':'block'
			
		});
	})

		//点击选项卡切换内容-午门
	$(' .line .right .si .aa').click(function(event) {
		event.preventDefault();
		$('.line .right .si .aa').css({
			'background-position':'170px 0px'
			
		});
		$('.line .right .si .bb').css({
			'background-position':'0px 0px'
			
		});
		$('.line .right .si .cc').css({
			'background-position':'0px 0px'
			
		});
		$('.line .right .si .dd').css({
			'background-position':'0px 0px'
			
		});
		$('.line .right .mid1').css({
			'display':'block'
			
		});
		$('.line .right .mid2').css({
			'display':'none'
			
		});
		$('.line .right .mid3').css({
			'display':'none'
			
		});
		$('.line .right .mid4').css({
			'display':'none'
			
		});
	})

	//点击选项卡切换内容-神武门
	$(' .line .right .si .bb').click(function(event) {
		event.preventDefault();
		$('.line .right .si .bb').css({
			'background-position':'170px 0px'
			
		});
		$('.line .right .si .aa').css({
			'background-position':'0px 0px'
			
		});
		$('.line .right .si .cc').css({
			'background-position':'0px 0px'
			
		});
		$('.line .right .si .dd').css({
			'background-position':'0px 0px'
			
		});
		$('.line .right .mid1').css({
			'display':'none'
			
		});
		$('.line .right .mid2').css({
			'display':'block'
			
		});
		$('.line .right .mid3').css({
			'display':'none'
			
		});
		$('.line .right .mid4').css({
			'display':'none'
			
		});
	})
	//点击选项卡切换内容-东华门
	$(' .line .right .si .cc').click(function(event) {
		event.preventDefault();
		$('.line .right .si .cc').css({
			'background-position':'170px 0px'
			
		});
		$('.line .right .si .aa').css({
			'background-position':'0px 0px'
			
		});
		$('.line .right .si .bb').css({
			'background-position':'0px 0px'
			
		});
		$('.line .right .si .dd').css({
			'background-position':'0px 0px'
			
		});
		$('.line .right .mid1').css({
			'display':'none'
			
		});
		$('.line .right .mid2').css({
			'display':'none'
			
		});
		$('.line .right .mid3').css({
			'display':'block'
			
		});
		$('.line .right .mid4').css({
			'display':'none'
			
		});
	})

	//点击选项卡切换内容-西华门
	$(' .line .right .si .dd').click(function(event) {
		event.preventDefault();
		$('.line .right .si .dd').css({
			'background-position':'170px 0px'
			
		});
		$('.line .right .si .aa').css({
			'background-position':'0px 0px'
			
		});
		$('.line .right .si .bb').css({
			'background-position':'0px 0px'
			
		});
		$('.line .right .si .cc').css({
			'background-position':'0px 0px'
			
		});
		$('.line .right .mid1').css({
			'display':'none'
			
		});
		$('.line .right .mid2').css({
			'display':'none'
			
		});
		$('.line .right .mid3').css({
			'display':'none'
			
		});
		$('.line .right .mid4').css({
			'display':'block'
			
		});
	})

	//展开折叠
	var aa=0;
	$('#xia1').click(function(event) {
		if (aa==0) {
			$(".haa").css({
				'display':'block',
			});
			$('#liaa').css({
				'height': '85px',
				'margin-bottom':'15px'
			});
				$("#xia1").css({
				'transform':'rotate(180deg)'
			});
			aa=1;
		}else{
			$(".haa").css({
				'display':'none',
			});
			$('#liaa').css({
				'height': '16px',
				'margin-bottom':'15px'
			});
				$("#xia1").css({
				'transform':'rotate(0deg)'
			});
			aa=0;
		}
  	})

  	var bb=0;
	$('#xia2').click(function(event) {
		if (bb==0) {
			$(".hbb").css({
				'display':'block',
			});
			$('#libb').css({
				'height': '85px',
				'margin-bottom':'15px'
			});
			$("#xia2").css({
				'transform':'rotate(180deg)'
			});
			bb=1;
		}else{
			$(".hbb").css({
				'display':'none',
			});
			$('#libb').css({
				'height': '16px',
				'margin-bottom':'15px'
			});
			$("#xia2").css({
				'transform':'rotate(0deg)'
			});
			bb=0;
		}
  	})



  	var ff=0;
	$('#xia6').click(function(event) {
		if (ff==0) {
			$("#liff").children('li').css({
				'display':'none',
			});
			$("#xia6").css({
				'transform':'rotate(180deg)'
			});
			ff=1;
		}else{
			$("#liff").children('li').css({
				'display':'block',
			});
			$("#xia6").css({
				'transform':'rotate(0deg)'
			});
			ff=0;
		}

  	})


})