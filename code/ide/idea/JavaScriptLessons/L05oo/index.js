/**
 * Created by plter on 14-3-5.
 */


function A(){

    this.sayHehe = function(){
        console.log("Hehe jikexueyuan");
    };

}

A.prototype.sayHello = function(){
    console.log("Hello JS");
}

A.sayHi = function(){
    console.log("Hello jikexueyuan");
}


var a = new A();
a.sayHello();
A.sayHi();


function B(){

}
B.prototype = new A();

var b = new B();
b.sayHello();
b.sayHehe();