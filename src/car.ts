export default class Car {
    constructor(private readonly make: string, private readonly model: string) {}

    startEngine() {
        console.log(`My ${this} has started`)
    }

    toString() {
        return `${this.make} ${this.model}`
    }
}
