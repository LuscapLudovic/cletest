(function($){
    $(".action").mouseover(function(){
        $(this).attr("src", "images/download.png");
    }).mouseout(function(){
        $(this).attr("src", "images/favoris.png");
    });
})(jQuery);
(function($) {
    const cache = [];
    $.preLoadImages = function() {
        const args_len = arguments.length;
        for (let i = args_len; i--;) {
            const cacheImage = document.createElement('img');
            cacheImage.src = arguments[i];
            cache.push(cacheImage);
        }
    }
})(jQuery)

jQuery.preLoadImages("images/download.png", "images/download.png");
jQuery.preLoadImages("images/favoris.png", "images/favoris.png");
