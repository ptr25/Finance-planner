var visibility = 0;
var count = 0, d=0;
var button,greeting,greeting2,input1, salary ,insurance,loan,child, done, statement;
 var income=0 , expense=0, expense2=0 ;
  var children=0;
  var expense3 =0;
  var total =0;
  var saved=0;
  var money= 0;

function preload(){
page = loadImage("book1.jpg");
page2 = loadImage("book2.jpg");
page3 = loadImage("book3.jpg");
  popper=loadImage("popper.gif");
  chimes = loadSound("chimes.mpeg");
  smiley = loadImage("smiley.png");
  statement = loadImage("Untitled presentation.jpg");
surprise = loadImage("An amazing surprise is awaiting you.jpg");
}
function setup() {
  createCanvas(400, 400);
   button = createButton("proceed");
   button.hide()
   greeting = createElement('h2');
   greeting.html("we'd be happy to generate")
  greeting.hide();
   greeting2 = createElement('h2');
     greeting2.html("your monthly financial statement")
  greeting2.hide();
  input1 = createInput("Name");
     salary = createInput("Monthly salary");
     loan = createInput("loan amount paid");
     insurance = createInput("insurance amount paid");
     child = createInput("N0. of children");
     done = createButton("SUBMIT");
  input1.hide();
  salary.hide();
  loan.hide();
  insurance.hide();
  child.hide();
  done.hide();
 
}

function draw() {
  background(220);
  if(count===0){
    image(surprise,0,0,400,400);
  }
   if(count===1){
     visibility = visibility+0.5;
     tint(visibility,355);
     image(page,0,0,400,400);
     image(popper,50,50,500,500);
     textFont("zapfino");
     textSize(20);
     fill(0);
     text("HAPPY FATHER'S DAY!!!",10,280);
     chimes.play();
   }
   if(count===2){
      chimes.stop();
     visibility = visibility+4;
     tint(visibility,355);
  image(page2,0,0,400,400);
     textFont("hiragino sans");
    textSize(15);
    fill(0)
     text("No one in this world can love",30,50);
     text(" a girl more than her father",30,60);
     fill(83,59,144);
     text("My father gave me the greatest gift anyone",50,100);
     text("could give another person, he believed in me",50,110);
     fill(108,144,249);
     text("Some people don't believe in heroes ",30,150);
     text("but they haven't met my dad.",30,160);
     textFont("algeria");
    textSize(25);
    fill(155,240,200);
     text("HAPPY FATHER'S DAY!!!",55,220);
     textSize(10);
     text("HERE IS A SPECIAL GIFT TO ALL AMBITIOUS  FATHERS",15,250);
     text("TAP WITH A SMILE ON YOUR FACE",25,280);
     image(smiley,235,270,20,20);
   }
   if(count===3){
     visibility = visibility+0.5;
     tint(visibility,355);
  image(page3,0,0,400,400);
     textFont("hiragino sans");
    textSize(23);
    fill("red");
    greeting.show();
     greeting.position(20,50);
     textFont("zapfino");
    textSize(10);
    fill(0);
     text("if your willing to do so click on proceed",40,280);
     button.show()
     button.position(160,300);
    greeting2.show();
     greeting2.position(20,80);
   }
   if(count===4){
     button.hide();
     greeting.hide();
     greeting2.hide();
     visibility = visibility+0.5;
     tint(255,visibility);
     image(page,0,0,400,400);
     
     greeting.hide();
  
     input1.show();
     input1.position(10,10);
     
      salary.show();
     salary.position(10,50);
     
      loan.show();
     loan.position(10,90);
     
      insurance.show();
     insurance.position(10,130);
      child.show();
     child.position(10,170);
      done.show();
     done.position(10,210);
   }
  done.mousePressed(function(){
    console.log("hi");
  image(statement,0,0,400,400);
  input1.hide();
  salary.hide();
  loan.hide();
  insurance.hide();
  child.hide();
  done.hide();
  income = salary.value();
  expense = loan.value();
  expense2 = insurance.value();
  children = child.value();
  expense3 = (10/100)*children*income;
  money = (0.1*income);
  e1 = parseInt(expense);
     e2 = parseInt(expense2);
     e3 = parseInt(expense3);
     e4 = parseInt(money);
  total = e1+ e2 +e4+e3 ;
  saved = income-total;

  d =1;
    
  });
  if(d ===1){
     image(statement,0,0,400,400);
   fill("black");
   text("$"+income,10,90);
   text("$"+total,280,90);
    fill("red");
   text("[inclusive of other expenses and taxes]",170,120);
    fill("black");
   text("$"+saved,280,290);
  }
}
function mousePressed(){
  count = count+1;
}
