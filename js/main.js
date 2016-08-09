/**
 * Created by Administrator on 2016/7/18 0018.
 */

window.onload = function(){

    var stage = new createjs.Stage('name');
    //直线与柱形图
    var a = new Drawclass(700,250,50,160,'A1',['1\n2015','2','3','4','5','6','7','8','9','10','11','12','1\n2016','2','3','4','5','6','7','8','9','10','11','12'],[{DataArr:[180,190,200,210,220,230,240,250,260,270,280,900,600,200,300,400,280,560,180,190,200,210,220,230]}],['当日新增注册数量_39,580','历史高峰日_68,432_2016/4/11']);
    var b = new Drawclass(700,250,50,350,'A2',['北\n京','广\n东','上\n海','天\n津','辽\n宁','江\n苏','湖\n北','四\n川','陕\n西','河\n北','山\n西','湖\n南','吉\n林','黑\n龙\n江','内\n蒙','山\n东','安\n徽','浙\n江','福\n建','湖\n南','广\n西','江\n西','贵\n州','云\n南','西\n藏','海\n南','甘\n肃','宁\n夏','青\n海','重\n庆','新\n疆'],[{DataArr:[980,950,900,890,888,843,823,800,888,690,457,99,888,514,457,415,888,690,457,554,888,558,457,880,888,223,457,99,888],DrawType:'b'}],['本年度注册签约数量_151_万']);
    var d1 = new Drawclass(550,150,620,110,'A3',['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],[{DataArr:[180,190,200,210,220,230,240,250,260,270,280,900,600,200,300,400,280,560]}],['近30日融e联工银信使每日发送消息总量']);
    var d2 = new Drawclass(550,150,620,230,'A4',['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],[{DataArr:[180,190,200,210,220,230,240,250,260,270,280,900,600,200,300,400,280,560]}],['近30天内每日在线客户数']);
    var d3 = new Drawclass(550,150,620,350,'A5',['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],[{DataArr:[180,190,200,210,220,230,240,250,260,270,280,900,600,200,300,400,280,560]}],['近30天内每日活跃客户数量']);

    //扇形图
    var c =  new Round(480,200,[591,150],'每日在线客户数占总客户数的比重');
    var c1 =  new Round(480,320,[738,137],'每日活跃客户数占总客户数的比重');

    //柱状动画图，进度条
    var p1 = new Progress(410,70,320,28,14,[170,597],['融e联工银信使','工银信使','融e联工银信使发送消息数量']);
    var p2 = new Progress(220,205,350,28,14,[1507.2,6000],['目标完成度','年度指标']);


    var e = new EventTarget();
    e.addEvent('com',onTest);

    function onTest(e){


        var ss = e.name.split('');
        console.log(ss);

        switch(ss[0]){
            case 'A':
                if(ss[1] == '1') {
                    a.update('A',e.data.xArr,e.data.DataArr);
                }else if(ss[1] == '2'){
                    b.update('B',e.data.xArr,e.data.DataArr);
                }else if(ss[1] == '3'){
                    d1.update('B',e.data.xArr,e.data.DataArr);
                }else if(ss[1] == '4'){
                    d2.update('B',e.data.xArr,e.data.DataArr);
                }else if(ss[1] == '5'){
                    d3.update('B',e.data.xArr,e.data.DataArr);
                }
                break;
            case 'C':
                if(ss[1] == '1') {
                    c.update(e.data.xArr, e.data.DataArr);
                }else if(ss[1] == '2'){
                    c1.update(e.data.xArr, e.data.DataArr);
                }
                break;
            case 'P':
                if(ss[1] == '1'){
                    p1.update(e.data.xArr,e.data.DataArr);
                }
                if(ss[1] == '2'){
                    p2.update(e.data.xArr,e.data.DataArr);
                }
                break;
        }

    }


    stage.addChild(a,b,c,c1,d1,d2,d3,p1,p2);

    /*var l = new  createjs.Graphics();
    l.setStrokeStyle(1);
    l.beginStroke('#ff0000');
    l.beginFill('#00ff00');*/
     /*l.moveTo(100,100);
    l.arc(100, 100, 100, 0, Math.PI/4);
    l.lineTo(100,100);

    l.moveTo(100*Math.sin(Math.PI/2-Math.PI/8)+100,100*Math.cos(Math.PI/2-Math.PI/8)+100);
    l.lineTo(100*Math.sin(Math.PI/2-Math.PI/8)+100+100,100*Math.cos(Math.PI/2-Math.PI/8)+100);

    //l.arcTo(100,100,200,100,100)*/

   /* l.drawRoundRect(10,10,300,50,25);

    var m = new createjs.Graphics();
    m.setStrokeStyle(1);
    m.beginFill('#0000ff');
    m.drawRoundRect(10,10,300,50,25);

    var shapeing = new createjs.Shape(l);
    var shapeing1 = new createjs.Shape(m);


    var n = new createjs.Shape();
    n.graphics.setStrokeStyle(1);
    n.graphics.beginFill('#ff0000');
    n.graphics.drawRect(10,10,300,50);
    n.regX = 0;
    n.regY = 0;
    n.scaleX = 0;
    shapeing1.mask = n;
    stage.addChild(shapeing,shapeing1);

    createjs.Tween.get(n).to({scaleX:0.2}, 1000).call(handleComplete);

    function handleComplete(e){
        //alert('is ok');
    }*/

    createjs.Ticker.on('tick',stage);

}




///{"timestamp":"1460538300000","name":"KPI_FCF_MC_CREDIT_CARD_TRANS",
// "severity":{"icbc.severity":"NORMAL"},"values":[{"xArr":['9','10','11','12']},{"DataArr":[558,445,10000,800]}]}
