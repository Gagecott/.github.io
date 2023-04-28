$(document).ready(function() {
	$("#a").click(function() {
        var title = $(this).attr("title");
        getJSON(title+".json");
        $.getJSON(url, function(json) {
            json.speakers.forEach(element => {
                console.log(element);        
                $('#title').html(element.title);
                $('#image').attr('src',element.image);
                $('#monthspeak').html(element.month+"<br>"+element.speaker);
                $('#text').html(element.text);
            }); 
        });
   });
    });  // end ready
