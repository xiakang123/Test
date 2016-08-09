/**
 * Created by Administrator on 2016/7/18 0018.
 */


function ParseData(data){

    var obj = JSON.parse(data);
    var name;
    var xArr;
    var DataArr = [];
    var text;
    var Arr = [],Arr1 = [];
    name = obj.name;
    var ss = name.split('');

    if(ss[0] == 'A'){

        for(var i = 0;i < obj.values.length;i++) {
            var obj1 = obj.values[i];
            var obj2 = {};
            //{"name":"A","values":[{"xArr":[9,10,11,12]},{"DataArr":[558,445,2000,800]},{"DataArr1":[558,445,200,600]},{"DataArr2":[558,100,10000,800]}],"severity":{"icbc.severity":"NORMAL"},"timestamp":1460538305000}
            //{"name":"B","values":[{"xArr":[9,10,11,12]},{"DataArr":[558,445,2000,800]},{"DataArr1":[558,445,200,600]},{"DataArr2":[558,100,10000,800]}],"severity":{"icbc.severity":"NORMAL"},"timestamp":1460538305000}
            if ('xArr' in obj1) {
                xArr = obj1.xArr;
            }
            else if ('DataArr' in obj1) {
                obj2['DataArr'] = obj1.DataArr;
                DataArr.push(obj2);
            }
            else if ('DataArr1' in obj1) {
                obj2['DataArr'] = obj1.DataArr1;
                DataArr.push(obj2);
            }
            else if ('DataArr2' in obj1) {
                obj2['DataArr'] = obj1.DataArr2;
                DataArr.push(obj2);
            }

        }
    }else if(ss[0] =='C'){
        xArr = obj.values[0];
        DataArr = obj.values[1];
    }else if(ss[0] =='P'){
        xArr = obj.values[0];
        DataArr = obj.values[1];
    }


    var e = new EventTarget();
    var objd = {};
    objd.type = 'com';
    objd.name = name;
    objd.data = {xArr:xArr,DataArr:DataArr};
    e.dispatcher(objd);

}

