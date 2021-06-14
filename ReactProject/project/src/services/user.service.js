class UserService {
    constructor() {
        this.url = 'http://localhost:4200/';
    }
    _createPostRequest = (values, url) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then((response) => {
            if (response.status >= 300 || response.status < 200) {
                const error = new Error();
                error.response = response;
                throw error;
            }
            return response.json();
        })
    }


    _createGetRequest = (url) => {
        return fetch(url).then((response) => {
            if (response.status >= 300 || response.status < 200) {
                const error = new Error();
                error.response = response;
                throw error;
            }
            return response.json();
        })
    }
    register = (values) => {
        return this._createPostRequest(values, `${this.url}register`);
    }

    getAllUsers = () => {
        return this._createGetRequest(this.url + "getAll");
    }
}
export default new UserService();