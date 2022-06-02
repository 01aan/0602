var colors = "c9f0ff-eafffd-efeff0-d5cad6-6b5e62".split("-").map(a=>"#"+a)
class Ball{//一顆球
	constructor(args){ //為一個初始值  //args.r是接受參數值
		this.r = args.r || random(50)//若再new ball的地方有傳值，則採用傳送的值，若無，則用隨機random
		this.p = args.p //{x:random(width), y:random(height)}//圓的位置
		this.v = {x:random(-1,1), y:random(-1,1)}//圓移動的速度
		this.a = args.a|| {x:o, y:0}
		this.color =random(colors)
	}
	draw() //繪製
	{
	push()
		  translate(this.p.x, this.p.y)
		  fill(this.color)
		  ellipse(0, 0, this.r)
	    fill(225)
		  arc(0, 0, this.r/2,this.r/2,0,PI) // this.r/2,this.r/2是為了讓他的半徑和圓一樣
			fill(0)
		  arc(0, 0, this.r/3, this.r/3,0, PI)
			fill("#4D0000") //眼珠	
			ellipse(-this.r/5,-this.r/5, this.r/8)
			ellipse(this.r/5,-this.r/5 ,this.r/8)
			fill(this.color)
			circle(-this.r/2,-this.r/2,this.r/2);
			circle(this.r/2,-this.r/2,this.r/2);
		  noFill()
			arc(0,this.r/15,this.r*2/3,this.r*2/3,0,PI)
		pop()
		pop()
	}
	update(){ //運作的動作
		this.p.x+=this.v.x
		this.p.y+=this.v.y	
		this.v.x= this.v.x+ this.a.x
		this.v.y= this.v.y+ this.a.y
		if(this.p.y>height){
			this.v.y= -abs(this.v.y)
		}
	}
}

var ball
var balls = []
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i=0; i<10; i++){//產生200個圓
	 ball = new Ball({
		      a:{x:0, y:0.1},
		      r:50,
		      p:{x:width/2,y:height/2}})//產生一個新的Ball class元件
	 balls.push(ball)
	}
}

function draw() {
	background(100)
	for(var i=0; i<balls.length; i++){
		let ball = balls[i]
	  ball.draw()
		ball.update()
	}
	
}