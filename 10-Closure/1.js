function createCouter() {
    let count = 0;

    return {
        increment: () => count++,
        decrement: () => count--,
        getCount: () => count
    };
}

const counter = createCouter();
console.log(counter.getCount());
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());