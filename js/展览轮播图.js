$(function(){
	var num=0;
	var timer;
	function go(){
		timer=setInterval(function(){
			num++;
			if(num>5){
				num=0;
				$('#slide_uls').css('margin-left', -1258*num+'px');
				// 回到第一张
				num=1;
				// 直接播放第二张
			}
			console.log(num);
	
			if(num>4){
				$('#slide_ols li').eq(0).addClass('current');
				$('#slide_ols li').eq(0).siblings().removeClass('current');
			}
			else{
				$('#slide_ols li').eq(num).addClass('current');
				$('#slide_ols li').eq(num).siblings().removeClass('current');
			}
			
			$('#slide_uls').animate({
				'margin-left':-1258*num+'px'
			},1000)
		},3000)
	}
	go();

	$('#slide_ols li').click(function(event) {
		num = $(this).index();
		$(this).addClass('current');
		$(this).siblings().removeClass('current');
		// $('.slide #slide_uls').css('margin-left', -1258*num+'px');
		$('#slide_uls').animate({
			'margin-left':-1258*num+'px'
		},300)
	});



	
	// $('.zhao .img img').animate({
	// 	width:"200%",
	// 	height:"200%"
	// },10000);
	
})
			