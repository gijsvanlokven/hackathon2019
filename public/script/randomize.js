let randomizeLeft = document.querySelectorAll('.randomizeAnimation.ltr');
let randomizeRight = document.querySelectorAll('.randomizeAnimation.rtl');

Array.from(randomizeLeft).forEach(element => {
    randomizeLetters(element, "LTR")
});

Array.from(randomizeRight).forEach(element => {
    randomizeLetters(element, "RTL")
});

function randomizeLetters(el, direction, cycles = 10)
{
    let originalHTML = el.innerHTML;

    let newHTML = originalHTML.split("");
    let characters = "ABCDEEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let cycle = 0;
    let randomizeInterval = setInterval(function(){
        
        for(let i = 0; i < originalHTML.length; i++)
        {
            let randChar = characters.charAt(Math.floor(Math.random() * characters.length));
            newHTML[i] = randChar;
        }
        el.innerHTML = newHTML.join("");
        cycle++;

        if(cycle > cycles)
        {
            clearInterval(randomizeInterval);
            if(direction.toUpperCase() == "LTR")
            {
                let i = 0;
                let ltrInterval = setInterval(() =>
                {
                    newHTML[i] = originalHTML.split("")[i];
                    el.innerHTML = newHTML.join("");
                    i++;
                    if(i > originalHTML.length)
                    {
                        clearInterval(ltrInterval);
                    }
                }, 50);
            }
            else if(direction.toUpperCase() == "RTL")
            {
                let i = originalHTML.length;
                let rtlInterval = setInterval(() =>
                {
                    newHTML[i] = originalHTML.split("")[i];
                    el.innerHTML = newHTML.join("");
                    i--;
                    if(i < 0)
                    {
                        clearInterval(rtlInterval);
                    }
                }, 50);
            }
        }
    }, 75);
}