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
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);
    console.log(dancers);
    $('body').append(dancer.$node);
  });

  // handling change scenes

  $('.changeSceneButton').on('click', function(event) {
    // delete all current dancers on the screen
    $('.dancer').remove();
    // catch the name of the function the button was bound to
    var changeSceneFunctionName = $(this).data('scene-changer-function-name');
    // if the changeSceneFunctionName is 'changeCarScene'
    if (changeSceneFunctionName === 'changeCarScene') {
      var changeSceneFunction = window[changeSceneFunctionName];
      // select the maker functions
      var willDancerFunction = window['MakeWillDancer'];
      var kattanDancerFunction = window['MakeKattanDancer'];
      // change the background image to the car scene
      // remove the old scene first
      $('.image-container').remove();

      // create a container for the picture and dancers to append into
      $('body').append('<div class="image-container"/>');

      // create a will dancer
      var willDancer = new willDancerFunction(
        // 300,
        // 810,
        '10%',
        '58%',
        Math.random() * 1000);
      // create a kattan dancer
      var kattanDancer = new kattanDancerFunction(
        // 350,
        // 565,
        '25%',
        '8%',
        Math.random() * 1000);
      // append them to the body
      $('.image-container').append(willDancer.$node);
      $('.image-container').append(kattanDancer.$node);

      // start the music!
      document.getElementById('music-player').play();
    } else {
      $('body').css('background-image', 'none');
    }

  });
});

