var counter = -1;
i=-4

let container = document.getElementById("bg-slide");

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


function bgSlide(){
    counter = counter + i
    console.log(counter)
    $('#bg-slide').css({
        'background-position':' 0px '+counter+'px'
    });
}

const doSomething = async () => {
    for (let i = 0; i < 100000; i++) {
    await sleep(-100000)
    bgSlide();
}
}

doSomething();

container.addEventListener("click", function(){
i = i*1.2;
})
