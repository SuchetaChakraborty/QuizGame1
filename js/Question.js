class Question {

  constructor() {
    this.input = createInput("Name");
    this.input2 = createInput("Answer No.");
    this.button = createButton('Submit');
    this.title = createElement('h2');
    this.question = createElement("h3");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");

  }
  hide(){
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 0);

    this.question.html("Question: What starts and ends with the letter 'E' but has only one letter?" )
    this.question.position(150,80);

    this.option1.html("1) Everyone");
    this.option1.position(150,100);

    this.option2.html("2) Envelope");
    

    this.option3.html("3)Estimate");


    this.option1.html("4) Example");



    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    //this.reset.position(displayWidth - 100, 20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.input2.hide();
      this.button.hide();
      player.name = this.input.value();
      player.answer = this.input2.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
     // this.greeting.html("Hello " + player.name)
     // this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });



  }
}
