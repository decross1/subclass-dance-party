$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');


    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });

  $('.addLineUpButton').on('click', function(event) {
    // loop through dancers array
    for (var i = 0; i < window.dancers.length; i++) {
      // call .lineUp() on each element
      var currentDancer = window.dancers[i];
      currentDancer.setPosition($(window).height() / 2, (($(window).width() / window.dancers.length) * i) + 2);
    }
  });

    $('.addPairUpButton').on('click', function(event) {
    // loop through dancers array
    var numDancers = window.dancers.length;
    if (numDancers % 2 === 1) {
      var leftOutDancer = window.dancers[0];
      leftOutDancer.$node.addClass('leftOut');
      numDancers -= 1;
    }
    for (var i = 1; i < numDancers; i+=2) {
      var left = window.dancers[i];
      var right = window.dancers[i + 1];

      right.setPosition(left.top + 15, left.left + 15);
    }
  });

});

