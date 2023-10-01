function myNumFunc () {
    const num = document.getElementById('numIn').value;
    document.getElementById("num").innerHTML = formatNum(num);
    // console.log();
}
function myNameFunc () {
    const name = document.getElementById('nameIn').value;
    document.getElementById("name").innerHTML = name;
    // console.log();
}
function myExpMFunc () {
    const month = document.getElementById('expMIn').value;
    document.getElementById("month-text").innerHTML = month;
    // console.log();
}
function myExpYFunc () {
    const yearSelector = document.getElementById('expYIn')
    document.getElementById("year-text").innerHTML = yearSelector.options[yearSelector.selectedIndex].text;
    // console.log();
}

function formatNum (num) {
    const numStr = num.toString();
    let newStr = "";
    for (let i=0; i < numStr.length; i++) {
        if (((newStr.length+1)%5==0 && i!=0 )) {
            newStr+=" "
        }newStr+=numStr[i];
    }const myLen = newStr.length;
    for (let i=0; i < 19-myLen; i++) {
        if(newStr.length==19)   break;
        if ((newStr.length+1)%5==0 && (newStr.length)!=0) {
            newStr+=" "
        }
        newStr+="#";
    }
    return newStr
}
function MyCvvFunc () {
    const cvv = document.getElementById('cvvIn').value;
    document.getElementById("cvv").innerHTML = "CVV "+"*".repeat(((cvv).toString()).length);
}

function addBackClass() {
    card2 = document.getElementById("card2");
    card2.classList.remove("back");
    card1 = document.getElementById("card1");
    card1.classList.add("back");
}function removeBackClass() {
    card2 = document.getElementById("card2");
    card2.classList.add("back");
    card1 = document.getElementById("card1");
    card1.classList.remove("back");
}