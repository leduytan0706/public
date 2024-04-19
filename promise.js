//Vi du Promise
/*
var promise= new Promise(
    function(resolve, reject){
        //Logic (Biểu thức, ...)
        //Thành công: resolve();
        //Thất bại: reject();
        resolve();
    }
);

promise
    .then(function(){
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve([1,2,3]);
            }, 3000);
        })
    })
    .then(function(data){
        console.log(data);
        return 3;
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(){

    })
*/
//Sau moi giay in ra 1, 2, 3 khong dung setTimeout, setInterval
/*
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms);
    })
}
sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return sleep(1000);
    })
    .then(function(){
        console.log(3);
    })
*/
//Trong trường hợp gặp failure giữa chừng
/*
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms);
    })
}
sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return new Promise(function(resolve, reject){
            reject("Error");
        })
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .catch(function(error){
        console.log(error);
    })
*/

//1. Promise.resolve: trường hợp output luôn luôn thành công
//2. Promise.reject: trường hợp output luôn luôn thất bạt
//3. Promise.all: dùng để chạy song song các Promise
/*
var promise1= new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1]);
        },2000);
    }   
);
var promise2= new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2,3]);
        },5000);
    }
);
var promise2= Promise.reject('Error!');

Promise.all([promise1, promise2])
    .then(function(result){
        var result1= result[0];
        var result2= result[1];
        console.log(result[0].concat(result[1]));
    })
    .catch(function(error){
        console.log(error);
    })

*/


