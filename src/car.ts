export default class Car {
    private readonly make: string
    private readonly model: string

    constructor(make: string, model: string) {
        this.make = make
        this.model = model
    }

    startEngine() {
        console.log(`My ${this} has started`)
    }

    toString() {
        return `${this.make} ${this.model}`
    }
}
