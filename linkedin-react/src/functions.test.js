import {timesTwo} from './functions';

//test('name of test goes here', ()=>{
//    expect()
//})
//callback function contains what should be tested
//we use the expect assertion to call the function with a certain number
//we use tbe matcher function to tell us if 4 * 2 = 8, which is what we expect

test('Multiplies by two', () => {
    expect(timesTwo(4)).toBe(8);
});