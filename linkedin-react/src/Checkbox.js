import { useReducer } from 'react';

export function Checkbox() {
    const [checked, toggle] = useReducer(
        checked => !checked,
        false 
    );

    return(
        <>
            <label htmlFor="checkbox">
                {checked ? 'checked' : 'not checked'}
            </label>
            <input 
                id="checkbox"
                type="checkbox" 
                value={checked} 
                onChange={toggle}
            />
        </>
    )
}
//the function takes in the old state and returns a new state
//in this case, checked becomes !checked
//false is the initial value