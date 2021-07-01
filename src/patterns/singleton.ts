/* *The Singleton* restricts 
instatiation of a class to a single object.
In the event of an instance already existing,
it simply returns a reference to that object. */

/* In Javascript, *Singletons* serve as a
shared resource namespace which isolate
implementation code from the global
namespace so as to provide a single
point of access for functions. */

// Singleton implementation
interface IInstance {
    publicMethod: () => void;
    publicProperty: string;
    getRandomNumber: () => number;
}

const mySingleton = (function() {

    // Instance stores a reference to the Singleton
    let instance: IInstance;

    function init() {
        // Singleton

        // Private methods and variables
        function privateMethod() {
            console.log('Private method');
        }

        let privateVariable = 'Private variable';
        let privateRandomNumber = Math.random();

        return {
            // Public methods and variables
            publicMethod: function() {
                console.log('A public method');
            },
            publicProperty: 'A public property',
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    };

    return {
        // Get the Singleton instance if one exists
        // otherwise create one
        getInstance: function() {
            if(!instance) {
                instance = init();
            }

            return instance;
        }
    };

})();

const myBadSingleton = (function() {

    // Instance stores a reference to the Signleton
    let instance;

    function init() {
        // Singleton

        let privateRandomNumber = Math.random();

        return {
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    }

    return {
        // Always return a new Singleton instance
        getInstance: function() {
            instance = init();
            return instance;
        }
    };
})();

// Usage:

let singletonA = mySingleton.getInstance();
let singletonB = mySingleton.getInstance();
console.log(singletonA.getRandomNumber() === singletonB.getRandomNumber());

let badSingletonA = myBadSingleton.getInstance();
let badSingletonB = myBadSingleton.getInstance();
console.log(badSingletonA.getRandomNumber() === badSingletonB.getRandomNumber());

/* In the GoF book, the applicability of the
Singleton pattern is described as follows:

    * There must be exactly one instance of a
    class, and it must be accessible to clients
    from well-known access point;

    * When the sole instance should be extensible
    by subclassing, and clients should be able
    to use an extended instance without modifying
    their code.        
*/

// Example for the second point
/* mySingleton.getInstance = function() {
    if(this._instance === null) {
        if(isFoo()) {
            this._instance = new FooSingleton();
        } else {
            this._instance = new  BasicSingleton();
        }
    }

    return this._instance;
} */

/* The Singleton pattern is useful when exactly
one object is needed to coordinate others 
across a system. */

interface IOptions { name?: string, pointX?: number, pointY?: number };

export const SingletonTester = (function() {
    
    // options: an object containing configuration
    // options for the singleton
    // e.g let options: { name: string, pointX: number };
    class Singleton {
        name: string;
        pointX: number;
        pointY: number;
        // set options to the options supplied 
        // or an empty object if none are provided
        constructor(options: IOptions) {
            options = options || {};

            // set some properties to our singleton
            this.name = 'SingletonTester';
            this.pointX = options.pointX || 5;
            this.pointY = options.pointY || 11;
        }        
    }

    // our instance holder
    let instance: IOptions;

    // an emulation of static variables and methods
    let _static = {
        name: 'SingletonTester',
        // Method for getting an instance. It
        // returns a singleton instance of a
        // singleton object
        getInstance: function(options: IOptions) {
            if(instance === undefined) {
                instance = new Singleton(options);
            }

            return instance;
        }
    };

    return _static;
})();
