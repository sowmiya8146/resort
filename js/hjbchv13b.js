$('.companies-carousal .owl-carousel').owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    dotsEach: true,
    mouseDrag: false,
    autoplay: true,  // Corrected option name
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    navText: ["<img src='./images/common/left_arrw.png'>", "<img src='./images/common/right_arrw.png'>"],
});


$('.we_hbmvac .row h2').each(function () {
    var currentValue = $(this).text().replace("+", ""); 
    currentValue = parseFloat(currentValue); 
    var targetValue = currentValue; 
    var labelText = $(this).siblings('p').text(); 

   
    if (labelText.includes("Members")) {
        $(this).text(0).animate({
            Counter: targetValue 
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + "+"); 
            }
        });
    } else {
       
        $(this).text(0).animate({
            Counter: targetValue 
        }, {
            duration: 5000,
            easing: 'linear',
            step: function (now) {
                $(this).text(Math.ceil(now)); 
            }
        });
    }
});








