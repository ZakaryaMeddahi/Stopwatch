

for(let k = 0; k < 16; k++) {
    let j = 11;
    for(let i = 0; i < 10; i++) {
        const line = document.createElement("span");
        
        line.classList = `line${k}${i}`;
        line.style.animationDuration = `${j-=1}s`;
        line.style.top = `${k*50}px`;
        
        document.body.prepend(line);
    }
}
