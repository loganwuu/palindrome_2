var palindrome = function(input) {
    var str = input.toLowerCase();
    var array = str.split("");

    var cloneArray = array.slice();
    var reversedArray = cloneArray.reverse();

    for (var i = 0, len = array.length; i < len; i++) {
        if (array[i] !== reversedArray[i]) {
            return false;
        }
    }
    return true;
};

$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    var input = $("input#input").val();
    var result = palindrome(input);

    $(".input").text(input);
    if (!result) {
      $(".not").text("not");
    } else {
        $(".not").empty();
    }

    $("#result").show();
    event.preventDefault();
  });
});
