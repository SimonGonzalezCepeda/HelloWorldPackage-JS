function sayPrivate(){
    return 'Hello world' . arguments[0];
}

exports.say = function (){
    console.log(sayPrivate());
};