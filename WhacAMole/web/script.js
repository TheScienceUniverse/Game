jQuery(document).ready(function() {
	var s = 0;
	function game_over() {
		jQuery('.mole').animate({top: '100%'}, 500);
		jQuery('.score').html('GAME OVER');
		jQuery('.score').append('<div class="try_again">Try Again</div>');
	}
	function start() {
		s = 0;
		jQuery('.score').html('Score: ' + s);
		jQuery('.mole').animate({top:'0%'}, 5000, function() {
			game_over();
			jQuery('.try_again').click(function() {
				start();
			});
		});
	}
	jQuery('.mole').hover(function(){
		jQuery(this).css('background-image', 'url(img/hurt.png)');
		jQuery(this).stop().animate({top:'100%'}, 500, function(){
			s += 1;
			jQuery('.score').html('Score: ' + s);
			jQuery(this).css('background-image', 'url(img/mole.png)');
			jQuery(this).animate({top: '0%'}, 5000);
		});
	});
	start();
});