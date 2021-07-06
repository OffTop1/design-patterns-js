// Implementation of the Module pattern

export const testModule = (function() {
    let counter = 0;

    return {
        incrementCounter: function() {
            return counter++;
        },
        resetCounter: function() {
            console.log("Counter value prior to reset was " + counter);
            counter = 0;
        }
    }
})();

// Usage
// testModule.incrementCounter();
// testModule.resetCounter();


// Another example covers namespacing, public and private variables

let appNameSpace = (function () {
    let appPrivateVariable: number, appPrivateMethod: (arg: any) => void;

    // A private counter variable
    appPrivateVariable = 0;

    appPrivateMethod = function(argument: any) {
        console.log(argument)
    }

    return {
        // a public variable
        appPublicVariable: 'foo',
        // a public function that uses privates
        appPublicFunction: function(argument: any) {
            // increment private counter
            appPrivateVariable++;

            // Call the private method using function's argument
            appPrivateMethod(argument);

        }
    }
})();

// Let's create antother module for a shopping basket

interface IItem {
    item: string;
    price: number;
}

export const basketModule = (function() {
    // private
    let basket: IItem[] = [];

    function privateBasketMethod() {

    }

    function anotherPrivateBasketMethod() {
        
    }

    // Return an object for a public use
    return {
        // Add items to the basket
        addItem: function(item: IItem) {
            basket.push(item);
        },
        getItemCount: function() {
            return basket.length;
        },
        // Public alias to a private function
        publicBasketMethod: privateBasketMethod,
        // Get the total value of items in the basket
        getTotal: function() {
            let quantity = this.getItemCount();
            let price = 0;

            while(quantity--) {
                price += basket[quantity].price;
            }
            return price;
        }
    }
})();


/* Module pattern variations: */

// Global module (Import mixins)
/* let myModule = (function(jQ, _) {

    function privateMethod1() {
        jQ('.container').html('test');
    }

    function privateMethod2() {
        console.log(_.min([10, 20, 30, 5, 100]));
    }

    return {
        publicMethod: function() {
            privateMethod1();
        }
    }

// Pull in JQuery and Underscore
})(jQuery, _); 

myModule.publicMethod(); */


/* Exports - this allows us to declare 
globals without consuming them and could
support the concept of global imports */

interface IModule {
    publicProperty?: string;
    publicMethod?: () => void;
}

let myModule2 = (function() {

    // Module object
    let module: IModule = {};
    let privateVariable = 'Hello world';

    function privateMethod() {
        // pass
    }

    module.publicProperty = 'Public props';
    module.publicMethod = function() {
        console.log(privateVariable);
    }

    return module;
});

// The revealing module pattern

const revealingModule = (function() {

    let privateVariable = 'Secret key';
    let publicVariable = 'Public key';

    function privateFunction() {
        console.log('Variable: ' + privateVariable);
    }

    function publicSetVariable(value: string) {
        privateVariable = value;
    }

    function publicGetVariable() {
        privateFunction();
    }

    // Reveal public pointers to
    // private functions and properties

    return {
        setVariable: publicSetVariable,
        publicKey: publicVariable,
        getVariable: publicGetVariable
    };

})();

revealingModule.setVariable('The revealing module');

// Another example

const revealingModuleWithSpecificNaming = (function() {

    let privateCounter = 0;

    function privateMethod() {
        privateCounter++;
    }

    function publicMethod() {
        publicIncrement();
    }

    function publicIncrement() {
        privateMethod();
    }

    function publicGetCounter() {
        return privateCounter;
    }

    // Reveal public pointers to
    // private methods and properties

    return {
        start: publicMethod,
        increment: publicIncrement,
        count: publicGetCounter
    }

})();

revealingModuleWithSpecificNaming.start();

/* This pattern allows us the syntax of our
scripts to be more consistent. It also makes
it more clear at the end of the module
which of our functions and variables can be 
accessed publicly which eases readability. */

