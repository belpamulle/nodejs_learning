
function placeOrder(orderNumner){
    console.log('Order number'+orderNumner+ ' placed.');

    getOrder(function (){
        console.log(orderNumner+' Order deliovered');
    });


}

function getOrder(callback){
    setTimeout(callback,3000);
}


placeOrder(1);
placeOrder(2);


var myfunObject = {
       funcA : function(){ 
           console.log('or this is crazy');
        }
};

myfunObject.funcA();


var objectbasefunc = {
    firstfunc : function(){
            console.log((this===objectbasefunc) + '');
    }
};

objectbasefunc.firstfunc();


function player(){
    this.name = '';
    this.points = 100;
    this.givePoints = function(targetPlayer){
            targetPlayer.points= targetPlayer.points+1;
            this.points= this.points-1;
            console.log(this.name+' gave 1 point to '+ targetPlayer.name);
    };
};

var gayan = new player();
gayan.name= 'Gayan';
var nayomi = new player();
nayomi.name= 'Nayomi';
gayan.givePoints(nayomi);
console.log(gayan.points);
console.log(nayomi.points);


player.prototype.myuppercutFunction = function (counterplayer){
    counterplayer.points -=3;
    console.log(counterplayer.name +'\'s new points = '+counterplayer.points);
}

nayomi.myuppercutFunction(gayan);


var importModule  = require('./newmodule');
importModule.newprint();

var importModule2  = require('./newmodule2');
importModule2.func1();
console.log(importModule2.variable1);

var exteneralObject = require('./objectFactory');
var james = exteneralObject();
james.name='JAMES';
james.id="12334";
console.log(james.name);