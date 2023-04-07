var slideImg, imgStorage = [];
    $("#slides img").each(function() {  
        slideImg = new Image();
        slideImg.src = $(this).attr("src");
        imgStorage[imgStorage.length] = slideImg;
     });
   
    var imgCounter = 0;
    var nextImg;

    var timer = setInterval( function () { 
            $("#slide").fadeOut(1000, function() {
                    imgCounter = (imgCounter + 1) % imgStorage.length;
                    nextImg = imgStorage[imgCounter];
                    $("#slides").attr("src", nextImg.src).fadeIn(1000);    
                }    
            );
        },
    5000); 