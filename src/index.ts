/* Constructor Pattern -- START */

import { pilot } from './patterns/constructor-pattern/constructor';

console.log(pilot.__proto__, 'pilot');

/* Constructor Pattern -- END */







/* Module Pattern -- START */

import { testModule, basketModule } from './patterns/module-pattern/_module';

// testModule
testModule.incrementCounter();
testModule.resetCounter();

// basketModule
basketModule.addItem({
    item: "milk",
    price: 120
});

basketModule.addItem({
    item: "juice",
    price: 100
});

// Get items count in the basket
console.log(basketModule.getItemCount());

// Get total price
console.log(basketModule.getTotal());

/* However, this won't work. Even typescript will yell
at you if try to access it console.log(basketModule.basket);
This also won't work as basket is only exists in the
scope of the basketModule console.log(basket); */


/* Module Pattern -- END */






/* The Singleton Pattern -- START */

import { SingletonTester } from './patterns/singleton-pattern/singleton';

let singletonTest = SingletonTester.getInstance({
    pointX: 4
});

console.log(singletonTest.pointX, "pointX");

/* Just a sidenote - Singletones can be more difficult 
to test due to issues ranging from hidden dependencies,
the difficulty in creating multiple instances, difficul-
ty in stubbing dependencies and so on. */

/* The Singleton Pattern -- END */





/* The Observer Pattern -- START */
import { Subject, Observer, IObserver, ISubject } from './patterns/observer-pattern/observer';

interface IInputObserver extends HTMLInputElement, Partial<ISubject> {}

// Extend object with extension
function extend(obj: any, extension: any) {
    for(let key in extension) {
        obj[key] = extension[key];
    }
}

// Reference to our DOM elements
let controlCheckbox: IInputObserver = document.querySelector('.main-checkbox');
let addBtn: HTMLButtonElement = document.querySelector('.add-new-observer');
let container: HTMLDivElement = document.querySelector('.observers-container');

// Concrete Subject
// Extend the controlling checkbox with the Subject class
extend(controlCheckbox, new Subject());

// Clicking the checkbox will trigger notifications to its
// observers
controlCheckbox.onclick = function() {
    controlCheckbox.notify(controlCheckbox.checked);
}

addBtn.onclick = addNewObserver;

// Concrete Observer

function addNewObserver() {
    // Create a new checkbox to be added
    let check: HTMLInputElement & Partial<IObserver> = document.createElement('input');
    check.type = 'checkbox';

    // Extend the checkbox with the Observer class
    extend(check, new Observer());

    // Override with custom behaviour
    check.update = function(value: boolean) {
        this.checked = value;
        console.log('checked?: ', value);
    }

    // Add the new Observer to our list of observers
    // for our main subject
    controlCheckbox.addObserver(check as IObserver);

    // Append the item to the container
    container.appendChild(check);
}
/* The Observer Pattern -- END */