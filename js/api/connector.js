class ApiUser {
    constructor () {
        this.router = {
            register_user: "https://secret-escarpment-88141.herokuapp.com/api/user/create",
            validate_login: "https://secret-escarpment-88141.herokuapp.com/api/user/login/validate" 
        }
    }

    async registerUser (user) {
        await fetch(this.router["register_user"], {
            mode: "no-cors",
            method: "POST",
            body: user.toString()
        }).then(response => {
            console.log(response.json())
            return response.json();
        }).catch(reason => {
            console.log(reason)
            return reason;
        })
    }

    async validateUserLogin (user) {
        await fetch(this.router["validate_login"], {
            mode: "no-cors",
            method: "POST",
            body: user.toString()
        }).then(response => {
            return response.json();
        }).catch(reason => {
            return reason;
        })
    }
}

export default ApiUser;