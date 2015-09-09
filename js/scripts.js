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

// $(document).ready(function() {
//     $("form#factorial").submit(function(event) {
//         var number = parseInt($("input#number").val());
//         var result = factorial(number);
//
//         $(".output").text(result);
//
//         $("#result").show();
//         event.preventDefault();
//     });
// });
