interface IMyObject {
    publish?: Function,
    subscribe?: Function,
    unsubscribe?: Function
}

export let pubsub: IMyObject = {};

(function(myObject: IMyObject) {

    // Storage for topics that can be broadcast
    // or listened to
    let topics: {
        [props: string]: any
    } = {};

    // A topic identifier
    let subUid = -1;

    /* Publish or broadcast events of interest
    with a specific topic name and arguments
    such as the data to pass along */
    myObject.publish = function(topic: string, args: any[]) {

        if(!topics[topic]) {
            return false;
        }

        let subscribers = topics[topic],
        len = subscribers ? subscribers.length : 0;

        while(len--) {
            subscribers[len].func(topic, args);
        }

        return this;
    };

    /* Subscribe to events of interest with
    a specific topic name and a callback 
    function, to be executed when the topic/event
    is observed */
    myObject.subscribe = function(topic: string, func: Function) {

        if(!topics[topic]) {
            topics[topic] = [];
        }

        let token = (++subUid).toString();
        topics[topic].push({
            token,
            func
        });
        return token;
    };

    /* Unsubscribe from a specific topic,
    based on a tokenized reference to 
    the subscription */
    myObject.unsubscribe = function(token: string) {
        for(let m in topics) {
            if(topics[m]) {
                for(let i = 0, j = topics[m].length; i < j; i++) {
                    if(topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    }
}(pubsub));

