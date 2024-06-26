//Passing callback function as an argument

function receivesAFunction(param){
    return param();
}

receivesAFunction(()=> "I love JavaScript!");

function returnsANamedFunction(){
    return function namedFunc(){
        return 'I guess I am being returned!'
    };
}

function returnsAnAnonymousFunction() {
    return () => 3 +1;
}