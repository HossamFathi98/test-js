// let nameTitle = document.getElementById("name");
// let green = document.getElementById("green");
// let blue = document.getElementById("blue");
// green.onclick = function () {
//     nameTitle.style.color = "green";
// }
// blue.onclick = function () {
//     nameTitle.style.color = "blue";
// }
// document.getElementById("res").onclick = function () {
//     let age = document.getElementById("age").value ;
//     if (age > 50) {
//         document.getElementById("flag").style.color = "red";
//     }else {
//         document.getElementById("flag").style.color = "green";
//     }
// }

// document.getElementById("show").onclick = function () {
//     // document.getElementById("pass").type = "text";
//     // document.getElementById("show").innerText = "Hide";
//     if (document.getElementById("pass").type == "password"){
//         document.getElementById("pass").type = "text";
//         document.getElementById("show").innerText = "Hide";
//     }else {
//         document.getElementById("pass").type = "password";
//         document.getElementById("show").innerText = "Show";
//     }
// }

// document.getElementById("show").onclick = function (){
//     let x = document.getElementById("name").value;
//     document.getElementById("hi").innerText = "Hi "+x;
// }

    // document.getElementById("res").onclick = function () {
    // let x = +(document.getElementById("x").value) ;
    // let y = +(document.getElementById("y").value) ;
    // let sel = document.getElementById("sel").value ;
    // if (sel== "+") {
    //     document.getElementById("res-h").innerText = `The Sum = ${x + y}`;
    // }else if (sel == "-") {
    //     document.getElementById("res-h").innerText =`The Sub = ${x - y}` ;
    // }else if (sel == "*") {
    //     document.getElementById("res-h").innerText = `The Multi = ${x * y}`;
    // }else {
    //     document.getElementById("res-h").innerText =`The Div = ${x / y}` ;
    // }
    // }

    // function calc(x , y) {
    //     document.getElementById("res").onclick = function () {
    //     x = +(document.getElementById("x").value) ;
    //     y = +(document.getElementById("y").value) ;
    // let sel = document.getElementById("sel").value ;
    // if (sel== "+") {
    //     document.getElementById("res-h").innerText = `The Sum = ${x + y}`;
    // }else if (sel == "-") {
    //     document.getElementById("res-h").innerText =`The Sub = ${x - y}` ;
    // }else if (sel == "*") {
    //     document.getElementById("res-h").innerText = `The Multi = ${x * y}`;
    // }else {
    //     document.getElementById("res-h").innerText =`The Div = ${x / y}` ;
    // }
    // }
    // }
    // let x = +(document.getElementById("x").value) ;
    // let y = +(document.getElementById("y").value) ;
    // calc(x,y);
// document.getElementById("nitems").innerText = "Number of items is : "+ +0;
// let users = [];
// document.getElementById("btn").onclick = function () {
//     let n = document.getElementById("name").value ;
//     users.push(n);
//     document.getElementById("nitems").innerText = "Number of items is : " + users.length;
//     document.getElementById("name").value = '';
    
    // function btn(){
    //     let x = +(document.getElementById("count").value );
    //     if (x <= 1000){
    //         document.getElementById("task").innerText = "tax is : "+(x * 0.1);
    //     }
    //     if (x >= 2000){
    //         document.getElementById("task").innerText = "task is : "+(x * 0.2);
    //     }
    //     if (x >= 10000){
    //         document.getElementById("task").innerText = "task is : "+(x * 0.3);
    //     }

    // }
    // function btn (x,y) {
    //     x = +(document.getElementById("x").value) ;
    //     y = +(document.getElementById("y").value) ;
    //     let opt = document.getElementById("opt").value;
    //     if (opt == "+") {
    //         document.getElementById("res").innerText = x + y
    //     }else if (opt == "-"){
    //         document.getElementById("res").innerText = x - y
    //     }else if (opt == "*"){
    //         document.getElementById("res").innerText = x * y
    //     }else{
    //         document.getElementById("res").innerText = x / y
    //     }
    // }
    // function tax(){
    //     let x = +(document.getElementById("salary").value) ;
    //     if (x < 1000){
    //         document.getElementById("tax").value = (x * 0.1);
    //         document.getElementById("net").value = x - (x * 0.1);
    //     }else if (x >= 1000 && x <10000){
    //         document.getElementById("tax").value = (x * 0.2);
    //         document.getElementById("net").value = x - (x * 0.2);
    //     }else if (x >= 10000){
    //         document.getElementById("tax").value = (x * 0.3);
    //         document.getElementById("net").value = x - (x * 0.3);
    //     }
    // }
// }
// let nums = [20,50,9,65,5,100,567,7];
// let max = nums[0];
//     for(let i =0 ;i<nums.length;i++){
//         if(nums[i] > max){
//             max = nums[i];
//         }
//     }
//     console.log(max)
// function minnum(arr){
//     let min=arr[0];
//     for(let i =0 ;i<arr.length;i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }
//     return min ;
// }
// let nums = [20,50,9,65,5,100,567,7,-1];
// let x = minnum(nums);
// console.log(x)
// let lists = [];
// function list() {
//     var listItem = document.getElementById("item").value ;
//     lists.push(listItem);
//     document.getElementById("item").value = '' ;
//     listView()
// }
// function listView() {
//     let itemItem='';
//     for (let i = 0; i < lists.length; i++) {
//         itemItem +="<li ondblclick='dest("+ i +")'>"+lists[i]+"</li>"
//     }
//     document.getElementById("res").innerHTML = itemItem ;
// }
// function dest(l){
//     lists.splice(l,1);
//     listView()
// }
// let tasks = [];
// function add() {
//     let item = document.getElementById("task").value ;
//     tasks.push(item);
//     document.getElementById("task").value = '';
//     listView();
// }

// function listView(){
//     let item = "";
//     for (let i = 0; i < tasks.length; i++) {
//     item += "<li ondblclick = 'destroy("+ i +")'>"+tasks[i]+"</li> <span style = 'color : green;' onclick ='update("+i+")'>Update</span>";
//     }
//     document.getElementById("list").innerHTML = item ;

// }
// function destroy(i){
//     tasks.splice(i,1);
//     listView();
// }
// let updateItem= 0;
// function update (i) {
//     updateItem = i ;
//     // alert(updateItem)
//     document.getElementById("task").value = tasks[i] ;
//     listView()
//     document.getElementById("add").style = "display:none";
//     document.getElementById("update").style = "display:inline-block";
// }
// function edit() {
//     let item = document.getElementById("task").value ;
//     tasks[updateItem] = item ;
//     listView()
//     document.getElementById("task").value = '';
//     document.getElementById("add").style = "display:inline-block";
//     document.getElementById("update").style = "display:none";
// }


lists = [];
function add() {
    let item = document.getElementById("task").value ;
    lists.push(item);
    document.getElementById("task").value = '';
    viwLists();
}

function viwLists() {
    let items = ''
    let count = lists.length;
    for (let i = 0; i < count; i++) {
        items += "<li ondblclick = 'dltItem("+i+")' title= 'Double click to delete'>"+lists[i]+"</li> <span style = 'color:blue; cursor:pointer;' onclick = 'update("+i+")'>Update</span>";
    }
    document.getElementById("res").innerHTML = items ;
}
function dltItem(i) {
    lists.splice(i,1);
    viwLists();
}
let indexEdit = 0
function update(i) {
    indexEdit = i ;
    document.getElementById("add").style = "display:none";
    document.getElementById("edit").style = "display:inline-block";
    document.getElementById("task").value = lists[i];
}
function edit() {
    document.getElementById("add").style = "display:inline-block";
    document.getElementById("edit").style = "display:none";
    lists[indexEdit] = document.getElementById("task").value ;
    document.getElementById("task").value = '';
    viwLists();
    
}



