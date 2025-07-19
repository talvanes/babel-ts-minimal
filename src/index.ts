import Car from "./car"

const cars = new Set([
    ["Toyota", "Corolla"],
    ["Ford", "Mustang"],
    ["Honda", "Civic"],
    ["Tesla", "Model S"],
    ["Volkswagen", "Jetta"]
])

cars.forEach(([make, model]) => {
    let car = new Car(make, model)
    car.startEngine()
})
