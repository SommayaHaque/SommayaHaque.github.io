
document.getElementById("topNav").style.height = "50px";
document.querySelectorAll(".menuitems").forEach(j => {
  j.style.marginTop="100px";
  j.classList.add("hidden");
});

//cool movement X
document.getElementById("closebtn").addEventListener("click", function(){
  for (i = 0; i < document.getElementById("closebtn").children.length; i++){
    document.getElementById("closebtn").children[i].classList.toggle("active");
  }});

function collapse() {
  if (document.getElementById("topNav").style.height == "250px") {
    document.getElementById("topNav").style.height = "50px";
    document.querySelectorAll(".menuitems").forEach(j => {
      j.classList.add("hidden");
      j.style.opacity="0";
      j.style.marginTop="100px";
    });
  } else if (document.getElementById("topNav").style.height == "50px") {
    document.getElementById("topNav").style.height = "250px";
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
/*
  $(document).on("scroll", function() {
    if ($(".yellow").offset().top < $(window).scrollTop() + $(window).height()-700) {
      $(".navigation-menu").css("display", "block");
    } else {
      $(".navigation-menu").css("display", "none");

    }
  });
*/
  $(document).on("scroll", function() {
    if ($(".yellow").offset().top < $(window).scrollTop() + $(window).height()-300) {
      $(".welcome-pink").css("display", "none");
      $(".welcome-nav").css("display", "none");

    } else {
      $(".welcome-pink").css("display", "block");
      $(".welcome-nav").css("display", "block");

    }
  });
