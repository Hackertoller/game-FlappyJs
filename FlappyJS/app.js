let Char = document.getElementById('Char')
let Blocks1 = document.getElementById('Blocks1')
let Blocks2 = document.getElementById('Blocks2')
Blocks1.style.animation = 'moves 1s 1000'
Blocks2.style.animation = 'moves 1s 1000'
let audio1 = document.getElementById('audio1').play()
let CharMargin = 100

document.body.addEventListener('keypress',function(event){
	if (event.key == ' '){
		CharMargin -= 100
	}
})
function Start(){
	setInterval(function(){
		CharMargin += 3
		Char.style.marginTop = CharMargin.toString() + 'px'
	},10)
}

function Colition(){
	let a = parseInt(window.getComputedStyle(Blocks1).getPropertyValue('height'))
	let c = parseInt(window.getComputedStyle(Blocks1).getPropertyValue('margin-left'))
	if ( c<= 105 && 400 - CharMargin < a){
		
		alert('YOU CRASHED')
	}else if (CharMargin < 0 || CharMargin > 400){
		alert('YOU CRASHED')
	}
}
function CaliSet2(){
	let b = parseInt(window.getComputedStyle(Blocks2).getPropertyValue('height'))
	let c2 = parseInt(window.getComputedStyle(Blocks1).getPropertyValue('margin-left'))
	for (let i = 0; i<=b - 50; i++){
		if (c2<=105 && CharMargin - i <= 0 && c2>90){
			alert('YOU CRASHED')
		}
	}
}
setInterval (function(){
	Colition()
	CaliSet2()
	if (parseInt(window.getComputedStyle(Blocks1).getPropertyValue('margin-left')) == 0){
		let ChangeH = Math.random() * 100
		let CHANGEH = Math.floor(ChangeH)
		let SetM = 400 - CHANGEH
		Blocks1.style.height = CHANGEH.toString() + 'px'
		Blocks2.style.height = (CHANGEH + 100).toString() + 'px'
		Blocks1.style.marginTop = SetM.toString() + 'px'
	}
},10)
Start()