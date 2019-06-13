var winWidth = $('.diary').width();
var ratio = winWidth / 1000;
var fontSize = {
  small: 13,
  medium: 18
};
var played = [0, 0, 0];
var vara = [];
var bodyFontSize = Math.max(16 * ratio, 10);
var posX = Math.max(80 * ratio, 30);
$(".diary").css("font-size", bodyFontSize + "px");
fontSize.small = Math.max(fontSize.small * ratio, 7);
fontSize.medium = Math.max(fontSize.medium * ratio, 10);
vara[0] = new Vara(
  "#vara-container",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "30 MAR 2019",
      textAlign: "right",
      y: 20,
      x: -30,
      delay: 500,
      duration: 1000,
      fontSize: fontSize.small
    },
    {
      text: "Posua, the potent name itself oozes out a fresh aroma of sweetness from the rabid strokes of the storm. ",
      y: 40,
      x: posX,
      duration: 800
    },
    {
      text: "Time and again, it ushers in the notion of brotherhood in us , urges to imbibe the majesty of our region and unite under the same shed. ",
      id: "sphinx",
      x: posX,
      delay: 1000,
      duration: 900
    },
    {
      text: "POSUA FB",
      id: "end",
      color: "#3f51b5",
      delay: 1000,
      x: posX,
      duration: 900
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[1] = new Vara(
  "#vara-container2",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "30 MAR 2019",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -30,
      duration: 550,
      fontSize: fontSize.small
    },
    {
      text: "Posua, the largest platform in the entire Barak Valley to celebrate the harvest fiesta of Assam i.e. ,Bihu. It's also the same stage where we illustrate the diversity of our motherland and inculcate the virtues of fraternity in the audiences. ",
      y: 40,
      x: posX,
      duration: 800
    },
    {
      text: "",
      y: 40,
      x: posX,
      duration: 750
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[2] = new Vara(
  "#vara-container3",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "30 MAR 2019",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -30,
      duration: 550,
      fontSize: fontSize.small
    },
    {
      text: "",
      y: 40,
      x: posX,
      duration: 800
    },
    {
      text: "",
      y: 20,
      x: posX,
      duration: 750
    },
    {
      text: "",
      y: 20,
      color: "#3f51b5",
      id: "link",
      x: posX,
      duration: 450
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);

vara[2].ready(function() {
  $(".front:not(.last)").click(function() {
    var ix = $(this)
      .parent(".paper")
      .index();
    $(".book").addClass("open");
    $(this)
      .parent(".paper")
      .addClass("open");
    if (!played[ix]) {
      vara[ix].playAll();
      vara[ix].animationEnd(function(i, o) {
        played[ix] = 1;
        if (i == "link") {
          var group = o.container;
          var rect = vara[2].createNode("rect", {
            x: 0,
            y: 0,
            width: o.container.getBoundingClientRect().width,
            height: o.container.getBoundingClientRect().height,
            fill: "transparent"
          });
          group.appendChild(rect);
          $(rect).css("cursor", "pointer");
          $(rect).click(function() {
            console.log(true);
            document.querySelector("#link").click();
          });
        }
      });
    }
  });
  $(".back").click(function() {
    if (
      $(this)
        .parent(".paper")
        .index() == 0
    )
      $(".book").removeClass("open");
    $(this)
      .parent(".paper")
      .removeClass("open");
  });
});