//CommonJS, every file is module (by default)
//Modules - Encapsulated Code  (only share minimum)
const names = require('./4-names')
//alt: const {john,peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alt-flavor')
//start with a dot when using custom modules
require('./7-mind-grenade')
//will still run as long as invoked in the original module
//when you import a module, you automatically invoke the code
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
//john and peter are nested within 'names' module