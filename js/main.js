$(function(){
	const $slideWrap = $('.slide-wrap'),
		$slide = $slideWrap.find($('.slide')),
		$slideBtn = $slideWrap.find($('.slide-btn')),
		$Rbtn = $slideBtn.find($('.next')),
		$Lbtn = $slideBtn.find($('.prev'));

	function slideNumberInit(){
		for(var i=0;i<$slide.length;i++){
			$poster = $slide.eq(i).find('li.poster');
			for(var j=0;j<$poster.length;j++){
				$poster.eq(j).find('span.rank').text(j+1);
				// random 숫자 발생 : 평점 0.0~10.0, 예매율 0.0~100.0
				let randN1 = (Math.random()*10).toFixed(1);
				let randN2 = (Math.random()*100).toFixed(1);
				$poster.eq(j).find('.ratio span:first-child').text(randN1);
				$poster.eq(j).find('.ratio span:last-child').text(randN2);
			}
		}
	}
	function slideMoveRight(target){
		let $ol = target.parent($slideBtn).siblings($slide).find('ol');
		let pos = parseInt($ol.css('margin-left').slice(0,-2));
		$ol.animate({'margin-left':`${pos-1123}px`},300);

		slideBtnHide(target,pos-1123);
	}
	function slideMoveLeft(target){
		let $ol = target.parent($slideBtn).siblings($slide).find('ol');
		let pos = parseInt($ol.css('margin-left').slice(0,-2));
		$ol.animate({'margin-left':`${pos+1123}px`},300);

		slideBtnHide(target,pos+1123);
	}
	function slideBtnHide(target,newPos){
		var end = -2246;
		if (target.parents().hasClass('middle-bottom')) {end = -1123;}

		target.parent($slideBtn).children('button').removeClass('off');
		if (newPos === 0) {
			target.parent($slideBtn).find('.prev').addClass('off');
		}
		else if(newPos === end){
			target.parent($slideBtn).find('.next').addClass('off');
		}
	}

	$Rbtn.on('click',function() {
		slideMoveRight($(this));
		// e.stopPropagation();
	});
	$Lbtn.on('click',function() {
		slideMoveLeft($(this));
		// e.stopPropagation();
	});

	slideNumberInit()
})