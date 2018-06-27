const app = "I don't do much.";

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(Ralph) {kittens.push(Ralph);  return kittens} 

<<<<<<< HEAD
function destructivelyPrependKitten(Bob) {kittens.unshift(Bob); kittens}

function destructivelyRemoveLastKitten() {kittens.pop();}

function destructivelyRemoveFirstKitten() {kittens.shift()}
=======
function destructivelyPrependKitten(Bob) {kittens.unshift(Bob); return kittens}

function destructivelyRemoveLastKitten(kittens) {kittens.pop(); return kittens}

function destructivelyRemoveFirstKitten(kittens) {kittens.shift(); return kittens}
>>>>>>> 53cecbbcef5dac8c231b2ab3b33d1ef7efaa4e1f

function appendKitten(Broom) {return [...kittens, Broom]}

function prependKitten(Arnold) {return [Arnold, ...kittens]}

function removeLastKitten() {return kittens.slice(0, kittens.length - 1)}

function removeFirstKitten() {return kittens.slice(1)}

