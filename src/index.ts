/* Constructor Pattern -- START */

import { pilot } from './patterns/constructor';

console.log(pilot.__proto__, 'pilot');

/* Constructor Pattern -- END */


/* Module Pattern -- START */

import { testModule, basketModule } from './patterns/_module';

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

import { SingletonTester } from './patterns/singleton';

let singletonTest = SingletonTester.getInstance({
    pointX: 4
});

console.log(singletonTest.pointX, "pointX");

/* Just a sidenote - Singletones can be more difficult 
to test due to issues ranging from hidden dependencies,
the difficulty in creating multiple instances, difficul-
ty in stubbing dependencies and so on. */

/* The Singleton Pattern -- END */