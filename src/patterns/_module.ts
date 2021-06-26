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

