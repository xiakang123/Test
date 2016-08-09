/**
 * Created by Administrator on 2016/7/14.
 */


(function(){//自执行函数


    function Drawclass(w1,h1,x1,y1,Dtype1,xArr1,DataArr1,txt1){

        this.Container_constructor();//调用父级的构造函数   constructor构造器、构造函数   Container容器

        this.w = w1;
        this.h = h1;
        this.x = x1;
        this.y = y1;
        this.Dtype = Dtype1;
        this.xArr = xArr1;
        this.DataArr = DataArr1;
        this.color = ['#DDD','#ff0000','#00ff00','#0000ff'];
        this.txt = txt1;
        this.init();
    }

    var p = createjs.extend(Drawclass,createjs.Container);

    p.init = function(){

        this.drawline(this.x,this.y,this.w+this.x,this.y);
        this.drawline(this.x,this.y,this.x,this.y-this.h);
        var aw = this.w/15*14;
        var ah = this.h/10*9;
        var awspace = aw/this.xArr.length;
        var ahspace = ah/5;

        //x轴画线、文本
        for(var i = 1;i<this.xArr.length+1;i++){
            this.drawline(this.x+awspace*i,this.y-4,this.x+awspace*i,this.y+4);
            this.drawtext(this.x+awspace*i,this.y+10,this.xArr[i-1],'x');
        }

        var Ydata = [];

        for(var m = 0;m<this.DataArr.length;m++){
            Ydata = Ydata.concat(this.DataArr[m]['DataArr']);
        }
        var yDataMax = Math.max.apply(null, Ydata)*1.1;

        var yline = new createjs.Shape();
        for(var j = 1;j<6;j++){
            this.drawline(this.x-4,this.y-ahspace*j,this.x+4,this.y-ahspace*j);
            this.drawtext(this.x,this.y-ahspace*j,yDataMax/5*j|0,'y');

        }
        var textO = new createjs.Text('0','15px Arial','#CCCCCC');
        textO.x = this.x-15;
        textO.y = this.y;

        for(var u=0;u<this.DataArr.length;u++) {
            var coordinate = [];
            //var DrawType = this.DataArr[u]['DrawType'];
            var DataArrp = this.DataArr[u]['DataArr'];
            for (var p = 1; p < DataArrp.length + 1; p++) {
                coordinate.push(this.x + awspace * p, this.y - DataArrp[p - 1] / yDataMax * ah | 0);

                this.drawing(coordinate,this.Dtype,this.color[u]);

            }

            this.addChild(textO,yline);
        }
    }

    p.drawline = function(x1,y1,x2,y2){
        var g = new createjs.Graphics();

        g.setStrokeStyle(1);
        g.beginStroke("#AAA");
        g.moveTo(x1,y1).lineTo(x2,y2);
        g.moveTo(x1,y1).lineTo(x2,y2);

        var shapeline = new createjs.Shape(g);
        this.textarea();
        this.addChild(shapeline);

    }

    p.drawtext = function(a,b,c,state){
        var text = new createjs.Text(c,"14px Arial","#DDD");
        text.x = a;
        text.y = b;
        if(state == 'x'){
            text.x = a - (text.getMeasuredWidth() >> 2);
        }else if(state == 'y'){
            text.x = a-text.getMeasuredWidth()-10;
            text.y = b - (text.getMeasuredHeight() >>1);

        }
        this.addChild(text);
    }

    p.drawing = function(arr,DrawType,color){
        var l = new createjs.Graphics();

        if(DrawType == 'A2'){
            for(var n =0;n<arr.length/2;n++){
                l.beginFill('#ddd');
                l.drawRect(arr[n*2]-12/2,arr[n*2+1],12,this.y-arr[n*2+1]);

            }
        }else if(DrawType == 'A1' || DrawType == 'A3' || DrawType == 'A4'|| DrawType == 'A5'){
            l.setStrokeStyle(1,1,1);
            l.beginStroke(color);
            for(var k = 0;k < arr.length/2;k++){
                if(k==0){
                    l.moveTo(arr[k],arr[k+1]);
                }else{
                    l.lineTo(arr[k*2],arr[k*2+1]);
                }

            }

        }


        var shapeing = new createjs.Shape(l);
        if(DrawType == 'A2') this.addChildAt(shapeing,0);
        else this.addChild(shapeing);

    }

    p.textarea = function(){

        var str;
        var str1;
        var textx;

        for(var v=0;v<this.txt.length;v++) {

            str = this.txt[v].indexOf('_');
            if(v == 0){
                textx = this.x;
            }else{
                textx = this.x + this.w/2;
            }
            if (str >= 0) {
                str1 = this.txt[v].split('_');

                var t = new createjs.Text(str1[0] + '：', '14px Arial', '#DDD');
                var t1 = new createjs.Text(str1[1], 'bold 45px Arial', '#DDD');
                if (str1[2] != '') {
                    var t2 = new createjs.Text(str1[2], '25px Arial', '#DDD');
                    t2.x = textx + t.getMeasuredWidth() + t1.getMeasuredWidth() - 15;
                    t2.y = this.y - this.h - 38;
                }

                t1.x = textx + t.getMeasuredWidth() - 25;
                t1.y = this.y - this.h - 55;

            } else {
                var t = new createjs.Text(this.txt[v], '14px Arial', '#DDD');
            }
            t.x = textx - (t.getMeasuredWidth() >> 2);
            t.y = this.y-this.h-30;

            this.addChild(t,t1,t2);
        }


    }

    p.update = function(Dtype2,xArr2,DataArr2){
        this.Dtype = Dtype2;
        this.xArr = xArr2;
        this.DataArr = DataArr2;
        this.removeAllChildren();
        this.init();

    }

    window.Drawclass = createjs.promote(Drawclass,'Container');

})()


























