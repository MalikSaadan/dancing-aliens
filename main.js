
function getchecking(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5yPUvbiX6/model.json',modal_loaded);
}
function modal_loaded(){
    classifier.classify(got_result);
}
function got_result(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r_colour=Math.floor(Math.random()*255)
        g_colour=Math.floor(Math.random()*255)
        b_colour=Math.floor(Math.random()*255)
        document.getElementById("sound").innerHTML="I can hear: "+results[0].label
        document.getElementById("accuracy").innerHTML="accuracy: "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("sound").style.color="rgb("+r_colour+","+g_colour+","+b_colour+")";
        document.getElementById("accuracy").style.color="rgb("+r_colour+","+g_colour+","+b_colour+")";
        img1=document.getElementById("img1")
        img2=document.getElementById("img2")
        img3=document.getElementById("img3")
        img4=document.getElementById("img4")
        if(results[0].label=="marble rolling"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="alien4.png";
        }
    else if(results[0].label=="Background Noise"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="alien4.png";
    }
    else if(results[0].label=="clap"){
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.gif";
        img4.src="alien4.png";
    }
    else{
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="alien4 r.gif";
    }
    }
}