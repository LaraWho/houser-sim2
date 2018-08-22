module.exports = {

//     create: (req, res) => {
//         const dbInstance = req.app.get('db');
//         const { id } = req.params;

//         dbInstance.
//     }

    login: (req, res, next) => {
        let { username, password } = req.body
        app.get('db').loginUser(username, password).then(loginResults => {
            if(loginResults[0]) {
                req.session.userId = loginResults[0].id;
                res.status(200).send("Login Successful");
            } else {
                return res.status(403).send("User not found")
            }
        })
    },

    getUser: (req, res, next) => {
        let { userId } = req.session;
        if(userId) {
            res.status(200).send("Session found! User logged in!");
        } else {
            return res.status(403).send("session not found");
        }
    }
}