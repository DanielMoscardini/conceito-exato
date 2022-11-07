class User {
    constructor(fullname, login, password, email) {
        this.fullname = fullname;
        this.login = login;
        this.password = password;
        this.email = email;
    }

    toString = () => {
        return JSON.stringify(this);
    }
}

export default User;
