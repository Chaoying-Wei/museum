
(function($) {
	$.fn.mChange = function(options) {
		var w1,np,ns,v;
		var opts = $.extend({},$.fn.mChange.defaults,options); 
		//鍒濆鍖�
		var c=$(this);
		var f=c.parent();
		var n=$(opts.nav);
		var i=0;
		var sw=1;
		var cnow;
		c.css({scale:1,opacity:0});
		
		if(opts.navs){
			w1 = n.outerWidth()+(parseInt(n.css("margin-left"))?parseInt(n.css("margin-left")):0)+(parseInt(n.css("margin-right"))?parseInt(n.css("margin-right")):0);
			np= $(opts.nav).parent();
			n.wrapAll("<div class='scroll' style='height:100%;'></div>");
			ns=np.find(".scroll");
			ns.width(n.size()*w1);
			np.stop().animate({scrollLeft:0},100);
		}
			
		function run(){
			if(sw){
				i++;
				i=change(i);
			}
		}
		
		function change(idx){
			if(c.size()>1 || idx=="begin"){
				sw=0;
				if(idx=="begin"){
					idx=0;
					speed=opts.speed;
					cnow=c.eq(0);
				}
				else{
					speed=opts.speed;
					cnow.stop().transition({opacity:0,scale:1.5},speed,'cubic-bezier(0.5,0,0.2,1)',function(){
						$(this).css({scale:1,zIndex:-1});
					});
				}
				
				n.removeClass("now");
				if(idx==c.size()){idx=0;}
				if(idx<0){idx=c.size()-1;}
				
				cnow=c.eq(idx);
				cnow.stop().transition({opacity:1,scale:1,zIndex:0},speed*0.8,'cubic-bezier(0,1,1,1)',function(){
					if(typeof(opts.animates)=="function"){
						//opts.animates(idx);//鎵ц鑷畾涔夊姩鐢�
					}
					$(this).transition({scale:1.05},5000,'linear');
					sw=1;
				});
				opts.animates(idx);//鎵ц鑷畾涔夊姩鐢�
				
				c.removeClass('s');
				cnow.addClass('s');
				
				n.eq(idx).addClass("now");			
				if(opts.navs){autonav(idx);}
				
				return idx;
			}
		}
		change("begin");
		
		if(opts.auto==1){
			setTimeout(function(){
				v=setInterval(run,opts.time);
			},1500);
			
		}
		
		if(opts.mousestop==1){
			c.hover(
				function(){sw=0;},
				function(){sw=1;}
			);
		}
		
		//瀵艰埅婧㈠嚭閮ㄥ垎婊戝姩鏄剧ず
		function autonav(idx){
			np.animate({scrollLeft:idx*w1});
		}
			
		n.each(function(index, element) {
            $(this).bind(opts.nave,function(){
				if(sw==1 && c.eq(index).size()>0){
					change(index);
					i=index;
					if(opts.auto){
						clearInterval(v);
						v=setInterval(run,opts.time);
					}
				}
			});
        });
		
		$(opts.prev).click(function(){
			if(sw==1){
				if(opts.cycle==1 || (opts.cycle==0 && i>0)){
					i--;
					i=change(i);
					if(opts.auto==1){
						clearInterval(v);
						v=setInterval(run,opts.time);
					}
				}
			}
		});
		$(opts.next).click(function(){
			if(sw==1){
				if(opts.cycle==1 || (opts.cycle==0 && i<c.size()-1)){
					i++;
					i=change(i);
					if(opts.auto){
						clearInterval(v);
						v=setInterval(run,opts.time);
					}
				}
			}
		});
		
		if(opts.mousewheel){
			f.mousewheel(function(event,delta,deltaX,deltaY){
				if(delta<0){
					if(sw==1){
						if(opts.cycle==1 || (opts.cycle==0 && i<c.size()-1)){
							i++;
							i=change(i);
							if(opts.auto){
								clearInterval(v);
								v=setInterval(run,opts.time);
							}
						}
					}
				}
				else{
					if(sw==1){
						if(opts.cycle==1 || (opts.cycle==0 && i>0)){
							i--;
							i=change(i);
							if(opts.auto){
								clearInterval(v);
								v=setInterval(run,opts.time);
							}
						}
					}
				}
				event.stopPropagation();
				event.preventDefault();
			});
		}
			
	};
	$.fn.mChange.defaults = {
		auto  : 1,
		arrow : 1,
		speed : 800,
		time  : 5000,
		nav   : null,
		nave  : "click",
        navs  : 0,
		prev  : null,
		next  : null,
		cycle : 1,
		mousestop : 0,
	    mousewheel : 0,
		animates  : null
	}
})(jQuery);