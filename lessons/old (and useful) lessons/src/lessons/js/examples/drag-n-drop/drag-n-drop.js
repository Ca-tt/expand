let note = document.querySelector('.note');

note.onmousedown = () => {

    document.onmousemove = (event) => {
        moveElement(event.x, event.y)
    } 
    
    document.onmouseup = () => {   
        document.onmousemove = null;
    }
}

function moveElement(x, y) {
    let newX = x - note.offsetWidth / 2 + 'px';
    let newY = y - note.offsetHeight / 2 + 'px';

    note.style.left = newX;
    note.style.top = newY;
}
