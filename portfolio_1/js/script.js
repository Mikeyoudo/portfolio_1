
//so this is your loader here
$(window).on("load", function() {
                    //after 500 miliseconds icons will fade out first,
                        //then the background will fade out next
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });

})
//to here

//superslides
$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });
//to here

  //var typed from typed.min.js that lets you see your texts get, well typed across the screen
      //.typed is the object type, then afterwards with the {} is the options/setting of the typed
      //well page
      //capitalize on the Typed next time ya peech
  var typed = new Typed(".typed", {
    //strings are the words that can type one "" at a time
    strings: ["Junior Web Developer.", "Student", "Are you enjoying my site?"],
    typeSpeed: 70,
    //loops lets you, well loop
    loop: true,
    //miliseconds
    startDelay: 1000,
    //there's a little box that shows up if you don't put showCursor as false
    showCursor: false
  });

// to here

//start the carousel / slide those technical skills
//by the way, type in the easy pie chart or rendro for those pie chart you can combine with owl carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  //end carousel here


//count up start
                    //REMEMBER FROM THE start of your stat section
  var skillsTopOffset = $(".skillsSection").offset().top;
  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;
  $(window).scroll(function() {
    if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      //here's the original start of your pie chart
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });
      //end of pie chart

    }

//count up start from here
    if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
      $(".counter").each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());

        element.countup(endVal);
      })

      countUpFinished = true;
    }
  });

//activates the fancy box bit
  $("[data-fancybox]").fancybox();

  $(".items").isotope({
    //filter all
    filter: '*',
    //so when you click on the link of your portfolio portion, you'll see your pics go, well animated.
    animationOptions: {
      duration: 1500,
      //smoothness and direction of animation
      easing: 'linear',
      //
      queue: false
    }
  });

  $("#filters a").click(function() {

    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      //look the classess you put the "." is going to be your selectors
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });
    //look your just going to click on your buttons, not go to another website
    return false;
  });

//from here this is how whenever you click on a link in your navbar, you go to the section of the pageYOffset/
//that says like about page, protfolio page etc...
  $("#navigation li a").click(function(e) {
    e.preventDefault();

                      //this gets the current
    var targetElement = $(this).attr("href");
                                          //top position of an element
    var targetPosition = $(targetElement).offset().top;
                  //animate object, scroll top to the variable targetPosition
                                              //- 50 means if you click on say "skill" link, your "50" points just up the actual pageYOffset
                                                          //speed of animate animation
    $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
  });

//this is the nav window that will basiclly
  const nav = $("#navigation");
  //position of the navigation bar, or the top of it
  const navTop = nav.offset().top;

//when you scroll your window up or down...
  $(window).on("scroll", stickyNavigation);
// you'll call this function stickyNavigation()
  function stickyNavigation(){

    var body = $("body");

//so if you scroll to the top of the navbar, aka the const navTop,
  //then it should add fixedNav
    if($(window).scrollTop() >= navTop) {
      //yea you'll see your navbar "jump", so this should stop that
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    }

    else {
      //else just leave the :jumping " as it is"
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
