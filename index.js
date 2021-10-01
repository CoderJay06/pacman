const PACMAN = () => (
    function () {
        const width = 28
        const grid = document.querySelector('.grid')
        const scoreDisplay = document.getElementById('score')
        let squares = []
        let score = 0

        // 0 - pacdots
        // 1 - wall
        // 2 - ghost lair
        // 3 - powerpellets
        // 4 - empty

        const layout = [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
            1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
            1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
            1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
            1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
            1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
            1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
            4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
            1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
            1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
            1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
            1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
            1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
            1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
            1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
            1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
            1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
            1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
            1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
            1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
        ]

        //create board
        function createBoard() {
            //for loop 
            for (let i = 0; i < layout.length; i++) {
                createSquare()
                addItemsToBoard(layout, i)
            }
        }
        
        function createSquare() {
            // create a square 
            const square = document.createElement('div')
            //put square in grid 
            grid.appendChild(square)
            //put square in squares array
            squares.push(square)
        } 
        
        function addItemsToBoard(layout, i) {
            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot')
            } else if (layout[i] === 1) {
                squares[i].classList.add('wall')
            } else if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair')
            } else if (layout[i] === 3) {
                squares[i].classList.add('power-pellet')
            }
        }
        
        createBoard()
        
        // add pacman to board
        let pacmanCurrentIndex = 490
        squares[pacmanCurrentIndex].classList.add('pacman')
    
        function control(e) {
            squares[pacmanCurrentIndex].classList.remove('pacman')
            switch(e.key) {
                case "Down":
                case "ArrowDown":
                moveDown()
                    break;
                case "Up":
                case "ArrowUp":
                    moveUp()
                    break;
                case "Left":
                case "ArrowLeft":
                    moveLeft()
                    break;
                case "Right":
                case "ArrowRight":
                    moveRight()
                    break
                default:
                    break;
        
            }
            squares[pacmanCurrentIndex].classList.add('pacman')
            pacDotEaten()
            powerPelletEaten()
            checkForWin()
            checkForGameOver()
        }
        document.addEventListener('keyup', control)
        
        function moveDown() {
            if (
                !checkIfBoardContains(squares[pacmanCurrentIndex + width], 'ghost-lair') &&
                !checkIfBoardContains(squares[pacmanCurrentIndex + width], 'wall') &&
                pacmanCurrentIndex + width < width * width
            ) 
            pacmanCurrentIndex += width
        }
        
        function moveUp() {
            if (
                !checkIfBoardContains(squares[pacmanCurrentIndex -width], 'ghost-lair') &&
                !checkIfBoardContains(squares[pacmanCurrentIndex - width], 'wall') &&
                pacmanCurrentIndex - width >=0
            ) 
            pacmanCurrentIndex -= width
        }
        
        function moveLeft() {
            if( 
                !checkIfBoardContains(squares[pacmanCurrentIndex -1], 'ghost-lair') &&
                !checkIfBoardContains(squares[pacmanCurrentIndex -1], 'wall') &&
                pacmanCurrentIndex % width !==0
                ) 
                pacmanCurrentIndex -=1
                if (pacmanCurrentIndex === 364) {
                    pacmanCurrentIndex = 391
                }
        }
        
        function moveRight() {
            if(
                !checkIfBoardContains(squares[pacmanCurrentIndex +1], 'ghost-lair') &&
                !checkIfBoardContains(squares[pacmanCurrentIndex +1], 'wall') &&
                pacmanCurrentIndex % width < width -1
                ) 
                pacmanCurrentIndex +=1
                if (pacmanCurrentIndex === 391) {
                    pacmanCurrentIndex = 364
                }
        }


        function pacDotEaten() {
            if (checkIfBoardContains(squares[pacmanCurrentIndex], 'pac-dot')) {
                squares[pacmanCurrentIndex].classList.remove('pac-dot')
                score++
                scoreDisplay.innerHTML = score
            }
        }

        function powerPelletEaten() {
            //if square pacman is in contains a power pellet
            if (checkIfBoardContains(squares[pacmanCurrentIndex], 'power-pellet')) {
                //remove power pellet 
                squares[pacmanCurrentIndex].classList.remove('power-pellet')
                score +=10
                
                //change each of the four ghosts to isScared
                scareGhosts()
                
            //use setTimeout to unscare ghosts after 10 seconds   
            setTimeout(unScareGhosts, 10000)    
            }
        }
        
        
        
        function scareGhosts() {
            ghosts.forEach(ghost => ghost.isScared = true)    
        }
        
        function unScareGhosts() {
            ghosts.forEach(ghost => ghost.isScared = false)
        }

        class Ghost {
            constructor(className, startIndex, speed) {
                this.className = className
                this.startIndex = startIndex
                this.speed = speed
                this.currentIndex = startIndex
                this.isScared = false
                this.timerId = NaN
            }
        }

        const ghosts = [
            new Ghost('blinky', 348, 250),
            new Ghost('pinky', 376, 400),
            new Ghost('inky', 351, 300),
            new Ghost('clyde', 379, 500)
        ]

        function drawGhostsOnGrid() {
            ghosts.forEach(ghost => {
                squares[ghost.currentIndex].classList.add(ghost.className)
                squares[ghost.currentIndex].classList.add('ghost')
            })
        }

        //move the ghosts
        ghosts.forEach(ghost => moveGhost(ghost))

        function moveGhost(ghost) {
            const directions = [-1, +1, -width, +width]
            let direction = directions[Math.floor(Math.random() * directions.length)]
            
            ghost.timerId = setInterval(function() {
                //all our code
                //if the next square does NOT contain a wall and does not contain a ghost
                if (
                    !checkIfBoardContains(squares[ghost.currentIndex + direction], 'wall') &&
                    !checkIfBoardContains(squares[ghost.currentIndex + direction], 'ghost')
                ) {
                    //remove any ghost
                    squares[ghost.currentIndex].classList.remove(ghost.className)
                    squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
                    
                    // //add direction to current Index
                    ghost.currentIndex += direction
                    
                    // //add ghost class
                    squares[ghost.currentIndex].classList.add(ghost.className)  
                    squares[ghost.currentIndex].classList.add('ghost')  
                } else direction = directions[Math.floor(Math.random() * directions.length)]

                //if the ghost is currently scared 
                if (ghost.isScared) {
                    squares[ghost.currentIndex].classList.add('scared-ghost')
                }
                
                //if the ghost is current scared AND pacman is on it
                if (ghost.isScared && checkIfBoardContains(squares[ghost.currentIndex], 'pacman')) {
                    
                    //remove classnames - ghost.className, 'ghost', 'scared-ghost'
                    squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                    
                    // change ghosts currentIndex back to its startIndex
                    ghost.currentIndex = ghost.startIndex
                    
                    //add a score of 100
                    score +=100
                    
                    //re-add classnames of ghost.className and 'ghost' to the ghosts new postion  
                    squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
                }
                checkForGameOver()
            }, ghost.speed )
        }

        //check for game over
        function checkForGameOver() {
            //if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost 
            if (
                checkIfBoardContains(squares[pacmanCurrentIndex], 'ghost') && 
                !checkIfBoardContains(squares[pacmanCurrentIndex], 'scared-ghost')
            ) {
            //for each ghost - we need to stop it moving
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            //remove eventlistener from our control function
            document.removeEventListener('keyup', control)
            //tell user the game is over   
            scoreDisplay.innerHTML = 'You LOSE'
            }
        }

        //check for win
        function checkForWin() {
            if (score === 274) {
                //stop each ghost
                ghosts.forEach(ghost => clearInterval(ghost.timerId))
                //remove the eventListener for the control function
                document.removeEventListener('keyup', control)
                //tell our user we have won
                scoreDisplay.innerHTML = 'You WON!'
            }
        }
        
        // check if board contains passed in sqaure
        function checkIfBoardContains(square, item) {
            return square.classList.contains(`${item}`)
        }
    
    }
)();

const playPacman = PACMAN
playPacman()