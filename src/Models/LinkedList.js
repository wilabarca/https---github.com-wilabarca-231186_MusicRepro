
import { Node } from "./Node.js";

export class LinkedList {
    #count;
    #head;
    #tail;
    #currentNode;

    constructor() {
        this.#count = 0;
        this.#head = null;
        this.#tail = null;
        this.#currentNode = null;
    }

    push(item) {
        const node = new Node(item);

        if (!this.#head) {
            this.#head = node;
            this.#tail = node;
            this.#currentNode = node;
        } else {
            node.prev = this.#tail;
            this.#tail.next = node;
            this.#tail = node;
        }

        this.#count++;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.#count) {
            let node = this.#head;

            for (let i = 0; i < index && node != null; i++)
                node = node.next;

            return node;
        }

        return undefined;
    }

    getCurrentNode() {
        return this.#currentNode;
    }

    nextNode() {
        this.#currentNode = this.#currentNode ? this.#currentNode.next : this.#head;
        return this.#currentNode;
    }

    prevNode() {
        this.#currentNode = this.#currentNode ? this.#currentNode.prev : this.#tail;
        return this.#currentNode;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.#count;
    }
}
