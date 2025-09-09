//triangle number
function TriangleOfContNumber(height){
    let count=1;
    for(let i=1;i<=height;i++){
        let widht="";
        for(let j=1;j<=i;j++){
            widht += count + " ";
            count++;
        }
        console.log(widht);
    }
}

TriangleOfContNumber(3);
