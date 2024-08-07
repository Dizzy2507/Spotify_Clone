console.log("Welcome to Spotify")
async function main(){
    let a = await fetch("http://localhost:3000/Songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let tds = div.getElementsByTagName("td")
    console.log(tds)
}
main()

// let songs =[
//     {songName: "IVE - Off The Record" , filepath: "C:\Users\HP\Documents\Web_D Projects\Songs\IVE - Off The Record.mp3" ,coverPath: "cover/1.jpg"}
// ]

// let audioElement = new Audio('1.mp3');