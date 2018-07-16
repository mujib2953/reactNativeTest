/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-11 12:24:48 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-13 18:16:39
 */
const BASE_API = 'https://api.github.com';

const API_LIST = {
    thoughtOfTheDay: '/zen',
    user: '/users/'
}


const getThoughtOfTheDay = () => {
    return fetch( BASE_API + API_LIST.thoughtOfTheDay );
};

export const getUserDetails = ( p_username ) => { 
    
    return fetch( BASE_API + API_LIST.user + p_username );

}

export { getThoughtOfTheDay };