$(function() {
$("div#match").hide();
  $("form#aboutYou").submit(function(event) {

  var count = 0;

  if ($("select#answer1").val() === "1") {
    var count = count + 1;

}    else if ($("select#answer1").val() === "2") {
      var count = count + 2;

}      else if ($("select#answer1").val() === "3") {
        var count = count + 3;
      }

      if ($("select#answer2").val() === "1") {
        var count = count + 1;

}    else if ($("select#answer2").val() === "2") {
      var count = count + 2;

}      else if ($("select#answer2").val() === "3") {
        var count = count + 3;
      }

      if ($("select#answer3").val() === "1") {
        var count = count + 1;

    }    else if ($("select#answer3").val() === "2") {
        var count = count + 2;

    }      else if ($("select#answer3").val() === "3") {
          var count = count + 3;
        }

  if ($("select#answer4").val() === "1") {
    var count = count + 1;

}    else if ($("select#answer4").val() === "2") {
      var count = count + 2;

}      else if ($("select#answer4").val() === "3") {
        var count = count + 3;
      }

      if ($("select#answer5").val() === "1") {
        var count = count + 1;

    }    else if ($("select#answer5").val() === "2") {
          var count = count + 2;

    }      else if ($("select#answer5").val() === "3") {
            var count = count + 3;
          }

//              $("div#match").show();

              if (count < 6) {
                 window.open("london.html");

                }

               if (count > 5 && count < 11) {
                 window.open("yellowstone.html");
               }

               if (count > 10) {
                 window.open("monaco.html");
               }

    console.log(count);
    event.preventDefault();
});
});
