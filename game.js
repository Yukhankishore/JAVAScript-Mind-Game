// alert("welcome");

let cards=document.querySelectorAll('.cord');
// console.log(cards);

let isFlipped=false;
let firstCard;
let secoundCard;
let count=0;

cards.forEach((card) => card.addEventListener("click", flip));


function flip() {
	this.classList.add("flip");
	if (!isFlipped) {
		isFlipped=true;
		firstCard=this;
	}
	else{
		secoundCard=this;
		if(checkIt()){
			pass();
		}
		else{
			fail();
		let caller = async ()=>{
			 await wait();
			}
			caller();
		}
	}

}

function checkIt() {
	// console.log(firstCard,secoundCard);
	// console.log(firstCard.dataset.image,secoundCard.dataset.image);
	if (firstCard.dataset.image===secoundCard.dataset.image) {
		return true;
	}else{
		return false;
	}
}

// let caller = async () => wait()
let wait= async()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		cards.forEach((card) => card.addEventListener("click", flip));	
	},800);
	})
}



function pass() {
	// firstCard.classList.add()
	firstCard.removeEventListener("click",flip);
	secoundCard.removeEventListener("click",flip);
	reset();
}
function fail() {
		setTimeout(()=>{
	
			firstCard.classList.remove("flip");
			secoundCard.classList.remove("flip");
			reset();
	},800);
}
const reset = ()=>{
	count=1;
	isFlipped=false;
	firstCard=null;
	secoundCard=null;
}
// function hang() {
// 	// setIntervel(()=>{
// 			cards.forEach((card)=>{
// 			card.removeEventListener("click",flip);
// 		});
// }
// function unhang() {
// 	// setIntervel(()=>{
// 			cards.forEach((card)=>{
// 			card.addEventListener("click",flip);
// 		});
// 	// },3000);
// }
(function suffle() {
	cards.forEach((card)=>{
		let index=Math.floor(Math.random()*16);
		card.style.order=index;
	})
})();