// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
let r = 10;
let g = 10;
let b = 10;

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function randomRGB2() {
    return `rgb(${random(0, r)},${random(0, g)},${random(0, 255)})`;
  }

  function randomRGB3() {
    return `rgb(${random(200, 255)},${random(200, 255)},${random(200, 255)})`;
  }

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice

let num = 1;

class Ball {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }

    draw() {
        //ctx is context for drawing (2d)
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }

      update() {
        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
        }
      
        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
        }
      
        if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
        }
      
        if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
        }
      
        this.x += this.velX;
        this.y += this.velY;
      }

      collisionDetect() {
        for (const ball of balls) {
          if (this !== ball) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ball.size) {
                num = random(1, 3);
                r += 10;
                g += 10;
                b += 10;
            //     if (num === 1)
            ball.color = this.color = randomRGB2();
            //   else if (num === 2)
            //   {ball.color = this.color = randomRGB2();}
            //   else
            //   {ball.color = this.color = randomRGB3();}
              this.velX += 0.1;
              this.velY += 0.1;
              this.size += 0.2;
              if (this.size > 55)
              {
                this.size = 1;
              }
              if (this.velX > 40)
              {
                this.size = random(-5, 5);
              }
              if (this.velY > 30)
              {
                this.size = random(-5, 5);
              }
              if (r === 255)
              {
                r = 10;
                g = 10;
                b = 10;
              }
              
            }
          }
        }
      }

  }//end ball class



const balls = [];

while (balls.length < 75) {
  const size = random(1, 5);
  const ball = new Ball
  (
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-5, 5),
    random(-5, 5),
    randomRGB2(),
    size
  );

  balls.push(ball);
}


function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  
    requestAnimationFrame(loop);
  }
  

  loop();
