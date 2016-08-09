/**
 * Created by Administrator on 2016/7/25 0025.
 */

(function(){



    function Round(x1,y1,arr1,txt1){

        this.Container_constructor();//调用父级的构造函数   constructor构造器、构造函数   Container容器
        this.x = x1;
        this.y = y1;
        this.arr = arr1;
        this.txt = txt1;
        this.color = ['#696969','#A9A9A9','#BBB','#AAA','#00ff00'];

        this.init();
    }


    var p = createjs.extend(Round,createjs.Container);

    p.init = function(){
        var arrnum = 0;
        var r = 0;
        var startAngle = 0;
        var endAngle = 0;
        var count = 0;
        var drawling;

        //console.log(this.arr);
        for(var j = 0;j<this.arr.length;j++){
            arrnum += this.arr[j];
        }

        for(var i = 0;i<this.arr.length;i++){

            count += this.arr[i];

            if(i==0){
                startAngle = 0;
                endAngle = this.arr[i]/arrnum*(Math.PI*2);
                r = 70;

            }else{
                startAngle = (count-this.arr[i])/arrnum*(Math.PI*2);
                endAngle = count/arrnum*(Math.PI*2);
                r = 70+3*i;
                drawling = 'show';
            }
            this.DrawRound(r,startAngle,endAngle,this.color[i],drawling);
        }

        //createjs.Ticker.on('tick',stage);


    }

    p.DrawRound = function(r,startAngle,endAngle,color,drawling){
        //console.log(endAngle);
        var g = new createjs.Graphics();
        g.setStrokeStyle(0);
        g.beginFill(color);
        g.moveTo(this.x,this.y);
        g.arc(this.x, this.y,r, startAngle, endAngle);
        g.lineTo(this.x,this.y);

        if(drawling == 'show') {
            var l = new createjs.Graphics();
            var radian = (endAngle-startAngle)/2+startAngle;
            var mx = this.x + (r/2 * Math.cos(radian));
            var my = this.y + (r/2 * Math.sin(radian));

            var xx = r + r/5;

            var mx1 = this.x + xx * Math.cos(radian);
            var my1 = this.y + xx * Math.sin(radian);

            var a=-1;
            if(Math.cos(radian)>0){
                a=1;
            }
            l.setStrokeStyle(1);
            l.beginStroke('#ffffff');
            l.moveTo(mx,my);
            l.lineTo(mx1,my1);
            l.lineTo(mx1+ xx*1.5*a,my1 );
            //l.lineTo(mx1,my1);

            var text = new createjs.Text('在线客户数',"bold 15px Arial",'#DDD');
            text.x =  this.x + xx*1.5*a - (text.getMeasuredWidth() >> 1);
            text.y = my1 -25;

            var arr2 = this.arr[1]/(this.arr[0]+this.arr[1]);
            var b = arr2.toFixed(4);
            var c = b.slice(2,4)+"."+b.slice(4,6)+"%";

            var text1 = new createjs.Text(c, "bold 25px Arial", '#DDD');
            text1.x = this.x + xx * 1.5 * a - (text.getMeasuredWidth() >> 1);
            text1.y = my1;

            var text2 = new createjs.Text(this.arr[1], "bold 45px Arial", '#DDD');
            text2.x = this.x + xx * 1.5 * a - (text.getMeasuredWidth() >> 1);
            text2.y = my1 + 30;

            var text3 = new createjs.Text('万人', "bold 20px Arial", '#DDD');
            text3.x = this.x + xx * 1.5 * a + text.getMeasuredWidth() - (text2.getMeasuredWidth() >> 1);
            text3.y = my1 + 50;
            var shapeingl = new createjs.Shape(l);
            this.addChild(text,text1,text2,text3);
        }

        this.textarea();
        var shapeing = new createjs.Shape(g);

        this.addChild(shapeing,shapeingl)

    }

    p.textarea = function(){
        var t = new createjs.Text(this.txt,'17px Arial','#DDD');
        t.x = this.x - (t.getMeasuredWidth() >> 1);
        t.y = this.y-130;

        this.addChild(t);
    }

    p.update = function(arr2,txt2){
        this.arr = arr2;
        this.txt = txt2;
        this.removeAllChildren();
        this.init();
    }


    window.Round = createjs.promote(Round,'Container');

})()

