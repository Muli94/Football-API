
export const FETCH_DATA = 'fetch_data';

export function fetchData(){

    return{
        type: FETCH_DATA,
        payload: request
    }
}