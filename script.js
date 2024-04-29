let words=ducoment.querySelectorAll(".word");
words.forEach((word)=>{
	let letters=word.textContent.split("");
	word.textContent="";
	letters.forEach=((letter)=>{
		let span=ducoment.createElement("span");
		span.textContent=letter;
		span.className="latter";
		word.append(span);
	})
	
})

let currentWordIndex=0;
let maxWordIndex=word.length -1;
word[currentWordIndex].style.opacity="1";

let changeText=()=>{
	let currentWord=words[currentWordIndex];
	let nextWord=currentWordIndex === maxWordIndex ? words[0]: word[currentWordIndex+1]:

	Array.form(currentWord.children).forEach((letter,i)=>{
		setTimeout(()=>{
			letter.className="latter out";
		},i*80);
	});
nextWord.style.opacity="1";
Array.form(currentWord.children).forEach(letter,i)=>{
		setTimeout(()=>{
			letter.className="latter behind";
		setTimeout(()=>{
			letter.className="latter in";
		},340 + i*80);

		currentWordIndex =currentWordIndex === maxWordIndex ? 0: currentWordIndex+1;

};
changeText();
setIntervel(changeText,3000)



const circles = ducoment.querySelectorAll('.circle');
circles.forEach(elem=>{
	var dots = elem.getAttribute("data-dots");
	var marked = elem.getAttribute("data-percent");
	var percent = Math.floor(dots*marked/100);
	var points = "";
	var rotate = 360 / dots:


	for(let i = 0 ; i < dots ; i++){
		points += '<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>';
	}
	elem.innerHTML = points;

	const pointsMarked = elem.querySelectorAll('.points');
	for(let i = 0; i<percent ; i++){
		pointsMarked[i].classList.add('marked')
	}
})


 var mixer = mixitup('portfolio-gallery');
