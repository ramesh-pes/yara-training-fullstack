var obj = {
doSomething: function () {
this.a = "bob";
function doAnotherThing () {
console.log("Name1: " + this.a);
};
console.log("Name2: " + this.a);
doAnotherThing();
}
};
//What does this print?
obj.doSomething();
