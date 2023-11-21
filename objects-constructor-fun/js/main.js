//Create a constructor with 4 properties and 3 methods


function PizzaConstructor (pizzaBase,pizzaCrust,pizzaToppings, pizzaSauce){

    this.base = pizzaBase
    this.crust = pizzaCrust
    this.toppings = pizzaToppings
    this.sauce = pizzaSauce
    
    this.throw = function (){
        console.log('Yeet')
    }

    this.burn = function (){
        console.log('OUCH')
    }


    this.eta = function (){
        console.log('Calculating')
    }
}

let pizza = new PizzaConstructor('classic', 'thin', ['pepperoni','ham'], 'bbq')