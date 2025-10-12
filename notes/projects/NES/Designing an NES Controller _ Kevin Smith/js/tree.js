var tree = {
  sentence: "F",
  len: 5,
  angle: 0,
  wind: 0,
  depth: 3,
  rules: {
    "F": "FF+[+FF-F-F]-[-FF+F+F]",
  }
};

var minitree = {
  sentence: "X",
  len: 5,
  angle: 0,
  wind: 0,
  depth: 4,
  // rules: {
  //   "F": "FF+[+FF-F-F]-[-FF+F+F]",
  // }
  // rules: {
  //   "F": "F+[+FF-FF-FF]-[-FF+FF+FF]",
  // }
  rules: {
    "X": "F+[[X]-X]-F[-FX]+X",
    "F": "FF"
  }
};

var fractaltree = {
  sentence: "FX",
  len: 10,
  angle: 0,
  wind: 0,
  depth: 6,
  rules: {
    "F": "[-FX]+FX",
  }
};

function setup() {
  var canvas = createCanvas(300, 200);
  canvas.parent("garden");

  tree.angle = radians(25);
  minitree.angle = radians(25);
  fractaltree.angle = radians(10);

  tree.leafColor = color(175,100,220);
  minitree.leafColor = color(255,170,127);
  fractaltree.leafColor = color(255,85,85);

  for (var i = 0; i < tree.depth; i++) {
    generate(tree);
  }
  for (var i = 0; i < minitree.depth; i++) {
    generate(minitree);
  }
  for (var i = 0; i < fractaltree.depth; i++) {
    generate(fractaltree);
  }
  drawLSystem(tree, width/2, height);
  drawLSystem(minitree, width/4, height);
  drawLSystem(fractaltree, width*.8, height);
}

function draw() {
  clear();
  //background(220);
  drawLSystem(tree, width/2, height);
  drawLSystem(minitree, width/4, height);
  drawLSystem(fractaltree, width*.8, height);
}

// var axiom = "F";
// var sentence = axiom;
// var len = 5;
// let angle = 0;
// let wind = 0;
//
// var rules = {
//   "F": "FF+[+FF-F-F]-[-FF+F+F]",
// };

function generate(data) {
  var next = "";
  for (var i = 0; i < data.sentence.length; i++) {
    var current = data.sentence.charAt(i);
    next += data.rules[current] || current;
  }
  
  data.sentence = next;
}

function updateWind(data) {
  data.wind = 0.01 * sin(0.001*millis());
  
}

let strokeWidth = 2;
let depth = 1;

function branchSize(depth) {
  return 4.0 * 1.0 / depth
}

function drawLSystem(data, xoff, yoff) {
  resetMatrix();
  updateWind(data);
  translate(xoff, yoff);
  for (var i = 0; i < data.sentence.length; i++) {
    var current = data.sentence.charAt(i);
    
    if (current == "+") {
      rotate(data.angle+data.wind);
    } else if (current == "-") {
      rotate(-data.angle+data.wind);
    } else if (current == "[") {
      push();
      depth++;
    } else if (current == "]") {
      // stroke(170, 140, 240);
      // strokeWeight(2.0);
      noStroke();
      fill(data.leafColor);
      
      depth--;
      //circle(0, 0, 20);
      triangle(0, 0, 7, 0, 0, 7);
      pop();
    } else {
      stroke(67, 55, 3);
      strokeWeight(branchSize(depth));
      
      line(0, 0, 0, -data.len);
      translate(0, -data.len);
    }
  }
  
  // draw ground
  // draw roots
}
