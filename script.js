
// Ball responses //
const options = [
    'I mean....I guess',
    'Oh Fasho',
    'No doubt',
    'Yes, definitely',
    'I dont know about that one big dawg',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to ask a better question',
    'Reply hazy, try again',
    'Ask again later',
    'No such thing as a stupid question, only stupid people. Ask again, stoopid',
    'Yeah that aint happening. Sorry.',
    'Concentrate',
    "Don't count on it, chief",
    'Thats gonna be a no, homie',
    'My sources say no',
    'Busy. Ask me later',
    'Very doubtful'
]
const magicBall = document.getElementById("mb-container")
const response = document.getElementById("response")

magicBall.addEventListener("click",function(){
    
    const index=Math.floor(Math.random()*20)
    const message = options[index]
    magicBall.className='animateNow'
    setTimeout( () => {
        response.textContent=message;
        response.style.fontSize ='1.1rem'
        magicBall.className='mb_outer'
    }, 3000);
    
    // REFRESH THE BALL 10 SECONDS AFTER THE CLICK, SO YOU HAVE 7 SECONDS BEFORE REFRESH//
    setTimeout("window.location.reload()", 10000);
    
});