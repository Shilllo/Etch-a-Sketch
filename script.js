function createGrid(size = 16) {
    if (size <= 100) {
        let body = document.querySelector("body")
        let grid = document.createElement("div")
        grid.classList.add("container")
        grid.style.cssText = `width: 400px; height: 400px; display: flex; flex-wrap: wrap; margin: 30px`
        
        for (let i = 0; i < size*size; i++) {
            let div = document.createElement("div")
            div.style.cssText = `background: black; width: ${400/size}px; height:${400/size}px`
            div.addEventListener("mouseover", function() {
                div.style.cssText = `background: purple; width: ${400/size}px; height:${400/size}px`
            })
            div.classList.add("square")
            grid.appendChild(div)
        }
        body.appendChild(grid)
    }
}

function resetGrid() {
    let body = document.querySelector("body")
    let grid = document.createElement("div")
    let divs = document.getElementsByClassName('square')
    for (i = 0; i < divs.length; i++) {
        divs[i].style.background = 'black'
    }
}

function changeGrid() {
    let size = prompt("Choose size", "16")
    let body = document.querySelector("body")
    let grid = document.getElementsByClassName("container")
    createGrid(size)
    body.removeChild(grid[0])
}

let body = document.querySelector("body")
let reset = document.createElement('button')
reset.textContent = 'Reset'
reset.style.cssText = 'margin: 30px'
body.appendChild(reset)

let changeBtn = document.createElement('button')
changeBtn.textContent = 'Change the number of squares'
changeBtn.style.cssText = 'margin: 30px'
body.appendChild(changeBtn)

createGrid()

reset.addEventListener('click', function() { 
    resetGrid()
})

changeBtn.addEventListener('click', function() {
    changeGrid()
})





