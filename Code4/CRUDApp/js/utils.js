function* autoNumberGenerator(){
var counter = 1000;
while(true){
counter++;
var reset = yield counter;
if(reset){
counter = 1000;

}

//console.log("Reset is ",reset);

}
}