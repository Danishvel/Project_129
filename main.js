i = "0";
Chill_Bro = "";
Chumma_Kizhi = "";
Vaathi_Coming = "";
Kutti_Story = "";
Verithanam = "";
Enjoy_Enjaami = "";
leftWristX = "0";
leftWristY = "0";
rightWristX = "0";
rightWristX = "0";
function preload() {
  Chill_Bro = loadSound('Chill-Bro (2).mp3');
  Chumma_Kizhi = loadSound("Chumma-Kizhi.mp3");
  Vaathi_Coming = loadSound("Vaathi-Coming.mp3");
  Kutti_Story = loadSound("Kutti-Story.mp3");
  Verithanam = loadSound("Verithanam.mp3");
  Enjoy_Enjaami = loadSound("Enjoy-Enjaami.mp3");

}

function setup() {
    canvas = createCanvas(400, 400);
    background(153);
    canvas.position(480, 250);
    
    cam = createCapture(VIDEO);
    cam.hide();

    Posenet = ml5.poseNet(cam, modelloded);
    Posenet.on('pose', gotposes);
}

function draw() {
    image(cam, 0, 0, 400, 400);

    fill("red");
    circle(leftWristX, leftWristY, 30);

    NewleftWristY = floor(Number(leftWristY));
    Volume = NewleftWristY / 500;
    setVolume(Volume);
    document.getElementById("Volume").innerHTML = "Volume : " + Volume;
}

function modelloded(){
    console.log("loded!!!");
}

function gotposes(results){
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}

function Play() {
    Song = document.getElementById("Song_Name").value;
    Song.play();
    Song.setVolume(0.5);
    Song.Rate(1);
}


function Next() {
    Songs_name_array = ["Chill_Bro",
                        "Chumma_Kizhi",
                        "Vaathi_Coming",
                        "Kutti_Story",
                        "Verithanam",
                        "Enjoy_Enjaami"
                ];
    i = i + 1;
    Song = Songs_name_array[i];
    document.getElementById("Song_Name").innerhtml = Song;
}