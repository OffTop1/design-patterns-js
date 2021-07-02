/**
* The Observer => is a design pattern where
* an object(known as a subject) maintains a
* list of objects depending on it(observers),
* automatically notifying them of any changes
* to state. 
*/

/**
 * Subject: maintains a list of observers, 
 * facilitates adding or removing observers;
 * 
 * Observer: provides an update interface for
 * objects that need to be notified of a Subject's
 * changes of state;
 * 
 * ConcreteSubject: broadcasts notifications to 
 * observers on changes of state, stores the
 * state of ConcreteObservers;
 * 
 * ConcreteObserver: stores a reference to the
 * ConcreteSubject, implements an update inter-
 * face for the Observer to ensure state is 
 * consistent with the Subject.
 * */

// First, let's model the list of dependent
// Observers a subject may have:
export interface IObserverList {
    observerList: IObserver[];
    add: (observer: IObserver) => number;
    count: () => number;
    get: (index: number) => IObserver;
    indexOf: (observer: IObserver, startIndex: number) => number;
    removeAt: (index: number) => void;
}

export interface IObserver {
    update: (context: any) => void;
}

export interface ISubject {
    observers: IObserverList,
    addObserver: (observer: IObserver) => void;
    removeObserver: (observer: IObserver) => void; 
    notify: (context: any) => void;
}

class ObserverList implements IObserverList {
    observerList:IObserver[] = [];

    add(observer: IObserver) {
        return this.observerList.push(observer);
    }

    count() {
        return this.observerList.length;
    }

    get(index: number) {
        if(index > -1 && index < this.observerList.length) {
            return this.observerList[index];
        }
    }

    indexOf(observer: IObserver, startIndex: number) {
        let i = startIndex;

        while(i < this.observerList.length) {
            if(this.observerList[i] === observer) {
                return i;
            }
            i++;
        }

        return -1;
    }

    removeAt(index: number) {
        this.observerList.splice(index, 1);
    }
}

// Next, we model the Subject and the ability
// to add, remove or notify observers on the
// observer list.

export class Subject implements ISubject {
    observers: IObserverList = new ObserverList();

    addObserver(observer: IObserver) {
        this.observers.add(observer);
    }

    removeObserver(observer: IObserver) {
        this.observers.removeAt(this.observers.indexOf(observer, 0));
    }

    notify(context: any) {
        let observerCount = this.observers.count();
        for(let i = 0; i < observerCount; i++) {
            this.observers.get(i).update(context);
        }
    }
}

export class Observer implements IObserver {
    update(context: any) {
        // pass
    }
}





