


$("button").click(function() {
    let name = $(".question1").val();
    let faveArtist = $(".question2").val();
    let times = $(".question3").val();
    //Write code below!
    $(".prediction").append(name + "," + " your favorite music artist is " + faveArtist + "!");
     $(".prediction").append (" You've listened to them for " + times + " in a whole day!");

});