$(document).ready(function(){
    $("nav a").on("click", function(){
      $("nav li current").removeClass("current");
        $(this).parent().addClass("current");

        $("div#description").text($(this).text());

        var category = $(this).text().toLowerCase().replace(" ", "-")

        if (category == "notice") {
            $("div#gallery div#gallery_img:hidden").fadeIn("slow").removeClass("hidden");
        } 
        else {
            $("div#gallery div#gallery_img").each(function() {
                if(!$(this).hasClass(category)) {
                    $(this).hide().addClass("hidden");
                }
                else {
                    $(this).fadeIn("slow").removeClass("hidden");
                }
            });
        }
        return false;
    });
    $("div#gallery div#gallery_img").on("mouseenter",function() {
        var title= $(this).children().data("title");
        var desc = $(this).children().data("desc");

        if(desc=null) {
            desc = "Click to enlarge.";
        }

        if(title=null) {
            title = "";
        }

        $(this).append("<div class = 'overlay'</div>");
        var overlay = $(this).children(".overlay");
        overlay.html("<h3>"+ title + "</h3><p>" + desc + "</p>")
        overlay.fadeIn(800);

    });
    $("div#gallery div#gallery_img").on("mouseleave",function() {
        $(this).append("<div class='overlay'></div>");
        var overlay = $(this).children(".overlay");
        overlay.fadeOut(800);
    });
});