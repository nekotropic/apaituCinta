
function generateNumber() {
    var valueA = document.getElementById('inputA');
    var lengthA = valueA.value.length;
    
    var valueB = document.getElementById('inputB');
    var lengthB = valueB.value.length;
    
    console.log('Ini length A',lengthA);
    console.log('Ini length B',lengthB);

    let x = Math.floor((Math.random() * 100) + 1);
    let y = Math.floor((Math.random() * 100) + 1);

    // console.log(x)
    document.getElementById("generateP1").innerHTML = x;
    document.getElementById("generateP2").innerHTML = y;
    console.log('ini console x',x);
    console.log('ini console y',y);

}
