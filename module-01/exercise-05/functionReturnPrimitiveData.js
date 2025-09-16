function ReturnPrimitiveData(dataApa){
    let dataBaru=[];
    for(let i=0; i<dataApa.length;i++){
        if(dataApa[i]==='number'||
            dataApa[i]==='string'||
            dataApa[i]==='undefined'||
            dataApa[i]==='null'||
            dataApa[i]==='boolean'
        ){
            dataBaru.push(dataApa[i]);
        }
    }
    console.log(dataBaru);
}
let arr = [1, [], undefined, {}, "string", {}, []];
ReturnPrimitiveData(arr);