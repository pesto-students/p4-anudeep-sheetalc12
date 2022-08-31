//Closure :Function bundled with its lexical environment is known as a closure.
//Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to.
//Its not just that function alone it returns but the entire closure

/*
function createStack() {
    return {
        items: [],
        push(item) {
            this.items.push(item);
        },
        pop() {
            return this.items.pop();
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => [10]
stack.items = [10, 100, 1000];// Encapsulationbroken!
*/



function createStack() {
    let items = [];
    return {
        push(item) {
            console.log(`inserted ${item}`)
            items.push(item);
            console.log('now the stack is :' + items)
        },
        pop() {
            return items.pop();
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.items)