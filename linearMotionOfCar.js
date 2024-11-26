function delay() {
  for (let index = 0; index < 100000000; index++) {
  }
}

function display(string) {
  console.log(string);
}

let str1 = "           /\\                                                                        "
let str2 = "          /**\\                                                                       "
let str3 = "         /****\\   /\\                                                                "
let str4 = "        /      \\ /**\\                                                               "
let str5 = "       /  /\\    /    \\        /\\    /\\  /\\      /\\            /\\/\\/\\  /\\    "
let str6 = "      /  /  \\  /      \       /  \\/\\/  \\/  \\  /\\/  \\/\\  /\\  /\\/ / /  \\/  \\"
let str7 = "     /  /    \\/ /\\     \\    /    \\ \\  /    \\/ /   /  \\/  \\/  \\  /    \\   \\ "
let str8 = "    /  /      \\/  \\/\\   \\  /      \\    /   /    \\                               ";
let str9 = " __/__/_______/___/__\\___\\__________________________________________________        ";

function getBackground(index) {

  if (index > 100) {
    str1 = getTowardsLeftLinearMotionFrame(str1);
    str2 = getTowardsLeftLinearMotionFrame(str2);
    str3 = getTowardsLeftLinearMotionFrame(str3);
    str4 = getTowardsLeftLinearMotionFrame(str4);
    str5 = getTowardsLeftLinearMotionFrame(str5);
    str6 = getTowardsLeftLinearMotionFrame(str6);
    str7 = getTowardsLeftLinearMotionFrame(str7);
    str8 = getTowardsLeftLinearMotionFrame(str8);
    str9 = getTowardsLeftLinearMotionFrame(str9);
  }

  return str1 + "\n" + str2 + "\n" + str3 + "\n" + str4 + "\n" + str5 + "\n" + str6 + "\n" + str7 + "\n" + str8 + "\n" + str9;
}

function setBeach() {

}

function getTowardsRightLinearMotionFrame(carTrack) {
  let newFrame = "";

  for (let index = 0; index < carTrack.length - 1; index++) {
    newFrame = newFrame + carTrack[index];
  }

  return newFrame = carTrack[carTrack.length - 1] + newFrame;
}


function getTowardsLeftLinearMotionFrame(carTrack) {
  let newFrame = "";
  for (let index = 1; index < carTrack.length; index++) {
    newFrame = newFrame + carTrack[index];
  }
  return newFrame + carTrack[0];
}

function displayFrame(car1, car2, background) {
  display(background);
  display(car1);
  display("-------------------------------------------------------------------------------");
  display(car2);
  display("");
  display("-------------------------------------------------------------------------------");
}

function getCar(carPart1, carPart2, carPart3, carPart4 = "") {
  return carPart1 + "\n" + carPart2 + "\n" + carPart3 + "\n" + carPart4;
}

function carAnimation() {
  let carA1 = "__                                                                          ";
  let carA2 = ".-'--`-._                                                                   ";
  let carA3 = "'-O---O--'                                                                  ";

  let carB1 = "                                                                 ____       ";
  let carB2 = "                                                            ____//_]|_______";
  let carB3 = "                                                          (o _ |  -|   _  o|";
  let carB4 = "                                                           `(_)-------(_)--'";

  for (let index = 0; index < 300; index++) {
    const car1 = getCar(carA1, carA2, carA3);
    const car2 = getCar(carB1, carB2, carB3, carB4);

    displayFrame(car1, car2, getBackground(index));
    delay();

    if (index < 100) {
      carA1 = getTowardsRightLinearMotionFrame(carA1);
      carA2 = getTowardsRightLinearMotionFrame(carA2);
      carA3 = getTowardsRightLinearMotionFrame(carA3);
    }

    carB1 = getTowardsLeftLinearMotionFrame(carB1);
    carB2 = getTowardsLeftLinearMotionFrame(carB2);
    carB3 = getTowardsLeftLinearMotionFrame(carB3);
    carB4 = getTowardsLeftLinearMotionFrame(carB4);

    console.clear();
  }
}

carAnimation();