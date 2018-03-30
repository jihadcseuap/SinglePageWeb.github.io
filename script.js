$(document).ready(function () {
    
    $(document).on('scroll',scroller);
    
    $('a[href^="#"]').on('click', function (e) {
        
        e.preventDefault();
        $(document).off('scroll');
       
        $('a').each(function () {
            $(this).removeClass('active');
        });
        
        $(this).addClass('active');
        
        var movment = this.hash;
        
        $('html,body').stop().animate({'scrollTop': $(this.hash).offset().top}, 450, 'swing', function () {
            window.location.hash = movment;
            $(document).on('scroll', scroller);
        });
        
        console.log($(this.hash).offset().top);
    });
});

function scroller (e) {
    var scrollPosition = $(document).scrollTop();
    console.log(scrollPosition);
    
    $('.navbutton a').each(function () {
        var currentLink = $(this);
        var currentAttribute = $(this).attr('href');
        console.log(currentAttribute);
        
        if ($(currentAttribute).position().top <= scrollPosition && $(currentAttribute).position().top + $(currentAttribute).height() > scrollPosition) {
            currentLink.addClass('active');
            window.location.hash = currentAttribute;
        }
        else
            {
                currentLink.removeClass('active');
            }
    })
}