function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    canvas = createCapture(CANVAS);
    video.hide();
  }
  
  function draw(){
   image(canvas,0,0,400,400);
   fill("green");
   stroke("green");
   circle(30,30,20);
   circle(60,60,20);
   circle(10,10,20);
   circle(40,40,20);
   fill("red");
   stroke("red");
   rect(100,100,200,200);
   rect(20,100,200,200);
   rect(100,20,200,200);
   rect(20,100,200,200);
  }
  
  function take_snapshot(){
      save('image1.png')
  }
  
  function apply_filter(){
      tint_color = document.getElementById("color").value;
  }