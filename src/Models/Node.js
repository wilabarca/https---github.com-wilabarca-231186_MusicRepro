
export class Node {
    #data;
    #next;

    constructor(data){
        this.#data = data;
        this.#next = undefined;
    }

    getData() {
        return this.#data;
    }
}
