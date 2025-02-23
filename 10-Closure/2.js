function messageMaker(start) {
    return function makeMessage(end) {
        return `${start} ${end}`;
    };
}

const helloMessage = messageMaker("Hello");
console.log(helloMessage("World!"));
console.log(helloMessage("JavaScript!"));

const byeMessage = messageMaker("Goodbye");
console.log(byeMessage("Everyone!"));