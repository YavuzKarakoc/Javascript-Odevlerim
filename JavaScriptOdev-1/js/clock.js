

let userName = prompt("Adınızı girin")
let myName = document.querySelector("#myName")

myName.innerHTML=`${userName.length>0  ? userName: "Misafir"}`

/*
let myClock = document.querySelector("#myClock")
myClock.innerHTML=new Date ();    */

function myTimer() {
    const saat = new Date();
    document.getElementById("timezone").innerHTML = `"Anlık Saat Bilgisi : ${saat.toLocaleTimeString()}"`;
  }   // ...${saat.toLocaleTimeString('en-US')} // bu şekilde yazsa idim "17:00:00" yerine, "05:00:00 PM" yazacaktı.
  

function zaman () {

    let date = new Date();
    let hours = date.getHours();
    let minutes= date.getMinutes();
    let seconds= date.getSeconds();
    let days= date.getDay();
    let year= date.getFullYear();

    switch (days) {
        case 01:
            days = "Pazartesi";
            break;

            case 02:
                days = "Salı";
            break;

            case 03:
                days = "Çarşamba";
            break;

            case 04:
                days = "Perşembe";
            break;
                        
            case 05:
                days = "Cuma";
            break;

            case 06:
                days = "Cumartesi";
            break;
                                
            case 07:
                days = "Pazar";
            break;
    }

            hours = hours < 10 ? "0" + hours : hours; 
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            let time = `${hours} : ${minutes}: ${seconds} : ${days} : ${year}`;

            document.querySelector("#myClock").innerHTML= time;
            setInterval(zaman, 1000);

}
zaman()
// satimiz çalışıyor

