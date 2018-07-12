/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-11 12:24:48 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-12 13:48:55
 */
const BASE_API = 'https://api.github.com';

const API_LIST = {
    thoughtOfTheDay: '/zen',
    user: '/users/mujib2953'
}


const getThoughtOfTheDay = () => {
    return fetch( BASE_API + API_LIST.thoughtOfTheDay );
};

export { getThoughtOfTheDay };