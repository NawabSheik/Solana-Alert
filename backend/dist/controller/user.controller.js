"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registerUser = (req, res) => {
    const response = req.body.json();
    const name = response.name;
    const email = response.email;
    const password = response.password;
    console.log(name, email, password);
};
exports.default = registerUser;
