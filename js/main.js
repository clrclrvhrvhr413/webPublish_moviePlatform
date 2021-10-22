const slideWrap = document.querySelectorAll('.slide-wrap');
	for(let i in slideWrap){
		const slide = slideWrap[i].getElementsByClassName('slide'),
			slideBtns = slideWrap[i].getElementsByClassName('slide-btn');

		console.log(slideBtns)
			// Rbtn = slideWrap[i].slideBtns.getElementsByClassName('.next'),
			// Lbtn = slideWrap[i].slideBtns.getElementsByClassName('.prev');

	}
	// slide = slideWrap[1].querySelector('.slide'),
	// slideBtns = slideWrap.querySelectorAll('.slide-btn'),
	// Rbtn = slideBtns.querySelectorAll('.next'),
	// Lbtn = slideBtns.querySelectorAll('.prev');

function slide_move_right(e){
	console.log('right btn clicked');
	console.log(e.target)
	// slide.style.marginLeft = '-1126px';
}
console.log(slideWrap)
// Rbtn.addEventListener('click',slide_move_right);

// $(function(){
// 	const $slideWrap = $('.slide-wrap'),
// 		$slide = $slideWrap.children($('.slide')),
// 		$slideBtn = $slideWrap.children($('.slide-btn')),
// 		$Rbtn = $slideBtn.children($('.next')),
// 		$Lbtn = $slideBtn.children($('.prev'));

// 	function slideMoveRight(e){
// 		let $ol = $(this).parent($slideBtn).siblings($slide).find('ol')
// 		let pos = $ol.css('margin-left');
// 		$ol.css('margin-left',`${pos-1126}px`);

// 		e.preventDefault();
// 		e.stopPropagation()
// 		return false;
// 	}

// 	$(document).on('click',$slideBtn,function(e){

// 	// $Rbtn.on('click',function(e) {
// 		console.log('click')
// 		let $ol = $(this).parent($slideBtn).siblings($slide).find('ol');
// 		let pos = $ol.css('margin-left');
// 		$ol.css('margin-left',`${pos-1126}px`);
// 		console.log(e.target)

// 		// e.preventDefault();
// 		// e.stopPropagation();
// 		return false;
// 	});
// 	// });
// 	$slideWrap.on('click',function(e){
// 		console.log('slide ckucj');
// 		// e.stopPropagation();
// 	})
// })