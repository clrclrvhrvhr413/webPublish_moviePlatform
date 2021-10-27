$(function(){
	const $slideWrap = $('.slide-wrap'),
		$slide = $slideWrap.find($('.slide')),
		$slideBtn = $slideWrap.find($('.slide-btn')),
		$Rbtn = $slideBtn.find($('.next')),
		$Lbtn = $slideBtn.find($('.prev'));
	const $previewText = $('.middle-top .preview-text');

	const PREV_HIDE_TIME = 10000,
		PREV_ANIMATE_TIME = 500,
		SLIDE_WIDTH = 1123;

	// init
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
	function previewTextInit(){
		$previewText.animate({
			'left':0,
			'opacity':1
		},PREV_ANIMATE_TIME);
	}
	function previewTextHide(){
		$previewText.find('.preview-desc').animate({'opacity':0},PREV_ANIMATE_TIME);
		$previewText.find('h2').animate({
			'font-size':'35px',
			'top':'80px'
		},PREV_ANIMATE_TIME,'swing');

		setTimeout(function(){
			$previewText.find('.preview-desc').css({'display':'none'})
		},PREV_ANIMATE_TIME);
	}

	// Event
	function slideMoveRight(target){
		let $ol = target.parent($slideBtn).siblings($slide).find('ol');
		let pos = parseInt($ol.css('margin-left').slice(0,-2));
		$ol.animate({'margin-left':`${pos-SLIDE_WIDTH}px`},300);

		slideBtnHide(target,pos-SLIDE_WIDTH);
	}
	function slideMoveLeft(target){
		let $ol = target.parent($slideBtn).siblings($slide).find('ol');
		let pos = parseInt($ol.css('margin-left').slice(0,-2));
		$ol.animate({'margin-left':`${pos+SLIDE_WIDTH}px`},300);

		slideBtnHide(target,pos+SLIDE_WIDTH);
	}
	function slideBtnHide(target,newPos){
		let end = -SLIDE_WIDTH*2;
		if (target.parents().hasClass('middle-bottom')) {end = -SLIDE_WIDTH;}

		target.parent($slideBtn).children('button').removeClass('off');
		if (newPos === 0) {
			target.parent($slideBtn).find('.prev').addClass('off');
		}
		else if(newPos === end){
			target.parent($slideBtn).find('.next').addClass('off');
		}
	}
	function toTop(){ $('html').scrollTop(0); }

	$Rbtn.on('click',function() {
		slideMoveRight($(this));
	});
	$Lbtn.on('click',function() {
		slideMoveLeft($(this));
	});

	$('.top').on('click',function(){
		toTop();
	});

	slideNumberInit();
	previewTextInit();
	setTimeout(previewTextHide,PREV_HIDE_TIME);
	// 스크롤에 따라 top 아이콘 fade in/out
	$(window).scroll(function(){
		let st = $('html').scrollTop();
		if (st>=2030) { $('.top').addClass('on')}
		else {$('.top').removeClass('on')}
	})
})