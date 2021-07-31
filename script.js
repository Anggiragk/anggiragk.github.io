$('.page').on('click', function() {
	let tujuan=$(this).attr('href');
	let elemenTujuan=$(tujuan);
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top-60
	});
});

$('.home').on('click', function() {
	let tujuan=$(this).attr('href');
	let elemenTujuan=$(tujuan);
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top-64
	});
});
