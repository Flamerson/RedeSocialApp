import {setup} from 'axios-cache-adapter';

const api = setup({
    baseURL: "http://localhost/nomedasuaapi",
    cache: {
        maxAge: 15 * 60 * 1000
    }
})

export default api;
