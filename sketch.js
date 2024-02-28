let sounds = new Tone.Players({
  pianosample : "assets/PianoSample.mp3",
  indianvocalsample : "assets/IndianVocalSample.mp3",
  japanesevocalsample : "assets/JapaneseVocalSample.mp3",
  drumsample : "assets/DrumSample.mp3"
   });
 
 let delAmt = new Tone.FeedbackDelay ("8n", 0.5);
 let distAmt = new Tone.Distortion (0.5); 
 
 let button1, button2, button3, button4;
 let delaySlider, fbSlider, distSlider;
 
 sounds.connect(delAmt);
 delAmt.connect(distAmt);
 distAmt.toDestination();
 
 
 function setup() {
   createCanvas(400, 400);
  
   
   button1 = createButton('Piano Sample');
   button1.position(85, 150);
   button1.mousePressed(() => sounds.player("pianosample").start()); 
   
   button2 = createButton('Indian Vocal Sample');
   button2.position(205, 150);
   button2.mousePressed(() => sounds.player("indianvocalsample").start());

   button3 = createButton('Japanese Vocal Sample');
   button3.position(55, 175);
   button3.mousePressed(() => sounds.player("japanesevocalsample").start()); 

   button4 = createButton('Drum Sample');
   button4.position(225, 175);
   button4.mousePressed(() => sounds.player("drumsample").start()); 

 
   delaySlider = createSlider (0, 1, 0, 0.05);
   delaySlider.position (120, 200);
   delaySlider.mouseMoved (() => delAmt.delayTime.value = delaySlider.value()); 
 
   fbSlider = createSlider (0, 0.9, 0, 0.05);
   fbSlider.position (120, 250);
   fbSlider.mouseMoved (() => delAmt.feedback.value = fbSlider.value ());
 
   distSlider = createSlider (0, 0.9, 0, 0.05);
   distSlider.position (120, 300);
   distSlider.mouseMoved (() => distAmt.distortion = distSlider.value());
 }
 
 
 function draw() {
   background(50, 200, 200);
   text ("Press buttons for sound", width/3, 120);
   text ("Add delay", width/3, 235);
   text ("Add feedback", width/3, 285);
   text ("Add distortion", width/3, 335);
 }

