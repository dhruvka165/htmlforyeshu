// // console.log("Hi there ");

// // setInterval(() => {
// //     console.log("dhruv kanziya")
    
// // },2000 );

// const student ={
//     name:"dhruv",
//     marks: "95",
//     prop: this,
//     getName: function(){
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1: function(){
//         setTimeout( ()=> {
//             console.log(this);  //student
//         },2000);
//     },

//     getInfo2: function(){
//         setTimeout( function () {
//             console.log(this);  //window
//         },2000);
//     },
// };


// const square = (n) => n*n;
// console.log (square(4));

// let id = setInterval(() => {
//     console.log("Hello world");
// },2000);

// setTimeout(() => {
//     clearInterval(id)
// },10000);


// let num= [1,2,3,4];

// let double = num.map((el) => {
//     return el*el;
// });


// let nums = [1,2,3,4,5,6,7,8,9,10,11,12];
// let ans = nums.filter((el) => {
//     return el % 2 == 0;

// });

// let arr = [10,40,52,6,9,2,30,7,9,2];

// let multiple = arr.every((el) => el%10 == 0);
// console.log(multiple);

// let max = -1;
// for(let i=0;i<arr.length;i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }

// // console.log(max);

// let max = arr.reduce((max,el)=>{
//     if (max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);



function sum(...args){
    //arguments
    for(let i=0;i<args.length;i++){
        console.log("you gave us :",args[i]);
    }
}