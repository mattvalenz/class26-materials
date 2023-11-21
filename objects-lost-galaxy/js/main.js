//Create a dog object that has four properties and three methods

let Pizza = {}

Pizza.size = 'large'
Pizza.toppings = ['pepperoni', 'onion', 'ham']
Pizza.crust = 'Thin'

Pizza.estimatedDelivery = function (){
    console.log('Calculating...')
}

Pizza.burnMouth = function(){
    console.log('Ouch')
}

Pizza.throw = function(){
    console.log('Yeet')
}

