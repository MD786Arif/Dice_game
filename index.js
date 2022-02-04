
let x = Math.floor(Math.random()*6)+1;
let z = Math.floor(Math.random()*6)+1;
let p1 = "dice"+x+".png";
let p2 = "dice"+z+".png";
document.querySelector(".img1").setAttribute("src",p1);
document.querySelector(".img2").setAttribute("src",p2);
if(x>z){
    document.querySelector("h1").textContent="🎈Palyer 1 Wins!";
}else if(z>x){
    document.querySelector("h1").textContent="Player 2 Wins!🎈";
}else{
    document.querySelector("h1").textContent="Draw";
}