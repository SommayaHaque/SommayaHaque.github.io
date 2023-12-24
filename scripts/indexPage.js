$(".navigation-menu").css("display", "none");
/*
$(window).resize(function() {
    if ($(document).width() < 800) {
        $(".welcome-nav").addClass("hidden");
    }
  }); 


  $(window).resize(function() {
    if ($(document).width() >= 800) {
        $(".welcome-nav").removeClass("hidden");
    }
});
*/
document.getElementById("topNav").style.height = "50px";
document.querySelectorAll(".menuitems").forEach(j => {
  j.style.marginTop="100px";
  j.classList.add("hidden");
});

document.getElementById("closebtn").addEventListener("click", function(){
  for (i = 0; i < document.getElementById("closebtn").children.length; i++){
    document.getElementById("closebtn").children[i].classList.toggle("active");
  }});

function collapse() {
  if (document.getElementById("topNav").style.height == "200px") {
    document.getElementById("topNav").style.height = "50px";
    document.querySelectorAll(".menuitems").forEach(j => {
      j.classList.add("hidden");
      j.style.opacity="0";
      j.style.marginTop="100px";
    });
  } else if (document.getElementById("topNav").style.height == "50px") {
    document.getElementById("topNav").style.height = "200px";
    document.querySelectorAll(".menuitems").forEach(j => {
      j.classList.remove("hidden");
      j.style.opacity="1.0";
      j.style.marginTop="0px";
    });
  }}

  $(document).on("scroll", function() {
    $(".tag").each(function() {
      if ($(this).position().top < $(window).scrollTop() + $(window).height()) {
        $(this).addClass("visible");
      } else {
        $(this).removeClass("visible");
      }
    });
  });

  //THIS is what is making the nav bar show up, fix somehow
  //nav should only expand if screen is larger than certain width
        $(document).on("scroll", function() {
          if ($(window).width() > 800) {
            if ($(".yellow").offset().top < $(window).scrollTop() + $(window).height()-700) {
            $(".navigation-menu").css("display", "block");
            } else {
            $(".navigation-menu").css("display", "none");

            }
          }
        });

  $(document).on("scroll", function() {
    if ($(".yellow").offset().top < $(window).scrollTop() + $(window).height()-560) {
      $(".welcome").css("display", "none");
      $(".welcome-nav").css("display", "none");
      $(".arrow").css("display", "none");

    } else {
      $(".welcome").css("display", "block");
      $(".welcome-nav").css("display", "block");
      $(".arrow").css("display", "block");


    }
  });

