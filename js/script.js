$(document).ready(function() {
	$('.white .calc, .scheme li, .downFull, .subBtn, .fullPrice, .subBtn2').each(function(){
		$(this).append('<i class="ico"></i>');
	});
	$('.contH2 span').each(function(){
		$(this).append('<i class="l"></i><i class="r"></i>');
	});
	
	$('.probUl li').each(function(){
		$(this).append('<i class="ico">'+($(this).index()+1)+'</i>');
	});
	
//	background-position: 0 -40px;
	
	
	
	//for gallery
	$('.gal li a').click(function(){
		if ($(this).attr('href') != $('.gal li:first img').attr('src'))
		{
			$('.gal li:first img').fadeOut(0).attr('src',$(this).attr('href'));
			$('.gal li:first img').load(function(){
				$(this).fadeIn();
			});
		}	
		return false;
	});
	$('.gal li:first').click(function(){
		var iSrc = $(this).find('img').attr('src');
		var ul = $(this).parent('ul')
		var act = ul.find('a[href="'+iSrc+'"]').parent('li');
		if(act.next('li').is('li')){
			$(this).find('img').attr('src', act.next('li').find('a').attr('href'));
		} else{
			$(this).find('img').attr('src', ul.find('li:eq(1) a').attr('href'));
		}
	});
	
	

	
	$('.white .headInf').wrap('<div class="hjBord"></div>');

	$('label[for="rd3"]').trigger('click'); 
	$('label[for="rd1"]').trigger('click');
	$('label[for="rd3"]').trigger('click');
});

