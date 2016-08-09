/**
 * Created by Administrator on 2016/8/3 0003.
 */
(function(){

    function Progress(x1,y1,w1,r1,rr1,arr1,text1){

        this.Container_constructor(); //调用父级的构造函数   constructor构造器、构造函数   Container容器
        this.x = x1;
        this.y = y1;
        this.w = w1;
        this.r = r1;
        this.rr = rr1;
        this.arr = arr1;
        this.text = text1;
        this.init();
    }

    var p = createjs.extend(Progress,createjs.Container);

    p.init = function(){
        var g = new createjs.Shape();
        g.graphics.setStrokeStyle(1);
        g.graphics.beginFill('#696969');
        g.graphics.beginStroke('#DDD');
        g.graphics.drawRoundRect(0,0,this.w,this.r,this.rr);
        g.x = this.x;
        g.y = this.y;

        var m = new createjs.Shape();
        m.graphics.setStrokeStyle(1);
        m.graphics.beginFill('#009FCC');
        m.graphics.beginStroke('#DDD');
        m.graphics.drawRoundRect(0,0,this.w,this.r,this.rr);
        m.x = this.x;
        m.y = this.y;

        var n =new createjs.Shape();
        n.graphics.beginFill('#AAA');
        n.graphics.beginStroke('#DDD');
        n.graphics.drawRect(0,0,this.w,this.r);
        n.x = this.x;
        n.y = this.y;
        n.regX = 0;
        n.regY = 0;
        n.scaleX = 0;
        m.mask = n;

        var s = new createjs.Shape();
        s.graphics.setStrokeStyle(1);
        s.graphics.beginFill('#FFBB00');
        s.graphics.moveTo(20,20).lineTo(40,20).lineTo(30,10);
        s.x = this.x-30;
        s.y = this.y+this.r-5;

        var d = s.x;
        var perarr = this.arr[0]/this.arr[1];
        var perx = perarr * this.w;
        //if(this.arr[] > 0){

        this.addChild(g,m,s);
        //}else{
            //this.addChild(g,m);
        //}
        this.textarea();
        createjs.Tween.get(n).to({scaleX:perarr}, 1000).call(handleComplete);
        //createjs.Tween.get(n).to({x:200}, 1000).call(handleComplete);
        createjs.Tween.get(s).to({x:d+ perx}, 1000).call(handleComplete);

        /*this.ww= 10;
        console.log(this);
        setTimeout(function(){console.log(this.ww)}.bind(this),1000);*/
        //call
        //apply
        //setInterval()
    }

    function handleComplete(){

    }

    p.textarea = function(){
        var text;
        var text1;
        var text2;
        var text3;
        var text4;
        var text5;
        var text6;
        var text7;
        var title;

        var a = this.arr[0]/this.arr[1];
        var b = a.toFixed(4);
        var c = b.slice(2,4)+"."+b.slice(4,6)+"%";

        /*title = new createjs.Text('融e联工银信使发送消息数量：','17px Arial','#DDD');
        title.x = this.x;
        title.y = this.y-100;*/


        text = new createjs.Text(this.text[0]+'：', "bold 15px Arial", '#DDD');
        text.x = this.x + this.w/6;
        text.y = this.y + this.r*2;

        text1 = new createjs.Text(c, "bold 34px Arial", '#DDD');
        text1.x = this.x + text.getMeasuredWidth() + text1.getMeasuredWidth() - 60;
        text1.y = this.y + this.r * 2 - 15;

        text2 = new createjs.Text(this.text[1]+'：',"bold 15px Arial", '#DDD');
        text2.x = this.x + this.w/2;
        text2.y = this.y - this.r;

        text3 = new createjs.Text(parseFloat(this.arr[1]).toLocaleString(),"bold 45px Arial", '#DDD');
        text3.x = text2.x + text2.getMeasuredWidth();
        text3.y = this.y - this.r - 25;

        text4 = new createjs.Text('万',"bold 15px Arial", '#DDD');
        text4.x = text3.x + text3.getMeasuredWidth()+5;
        text4.y = this.y - this.r;

        if(this.text[2] != undefined){
            text5 = new createjs.Text(this.text[2] + '：', "bold 17px Arial", '#DDD');
            text5.x = this.x;
            text5.y = this.y - 100;

            text6 = new createjs.Text(this.arr[0], "bold 45px Arial", '#DDD');
            text6.x = this.x + text5.getMeasuredWidth();
            text6.y = this.y -125;

            text7 = new createjs.Text('万', "bold 25px Arial", '#DDD');
            text7.x = text6.x + text6.getMeasuredWidth()+5;
            text7.y = this.y -110;
        }

        this.addChild(text,text1,text2,text3,text4,text5,text6,text7);



    }

    p.update = function(arr2,text2){
        //this.Dtype = Dtype2;
        this.arr = arr2;
        this.text = text2;
        this.removeAllChildren();
        this.init();

    }

    window.Progress = createjs.promote(Progress,'Container');


})()