import EncryptedStorage from "react-native-encrypted-storage";

const API_BASE_URL = 'https://contacts-gpk8.onrender.com';

const request = async (options) => {

const ACCESS_TOKEN = await EncryptedStorage.getItem('user-token');
    const headers = new Headers({
    Accept: 'application/json',
        'Content-Type': 'application/json',
    })

    if (ACCESS_TOKEN) {
        headers.append('Authorization', ACCESS_TOKEN);
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    const response = await fetch(options.url, options);
    const json = await response.json();
    // console.log(json);
    if (!response.ok) {
        return Promise.reject(json);
    }
    return json;
    
};

export async function getCurrentUser() {
    if(!await EncryptedStorage.getItem('user-token')) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + '/user',
        method: 'GET'
    });
}

export async function login(loginRequest) {
    return request({
        url: API_BASE_URL + '/auth/login',
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + '/auth/signup',
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

