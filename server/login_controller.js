module.exports = {

    login: (req, res) => {
        const dbInstance = req.app.get('db')
        let { username, password } = req.body

        dbInstance.login_user([username, password])
            .then(loginResults => {
            if(loginResults[0]) {
                req.session.user = loginResults[0]
                res.status(200).send(loginResults);

            } else {
                return res.status(403).send("user not found")
            }
        })
    },

    getUser: (req, res) => {
        let { userId } = req.session;

        if(userId) {
            res.status(200).send(userId);
        } else {
            return res.sendStatus(403);
        }
    },

    register: (req, res) => {
        const dbInstance = req.app.get('db')
        let {username, password} = req.body;
        req.session.username = username
        req.session.password = password

        dbInstance.register_user( [username, password] )
        .then( user => res.status(200).send(user) )
        .catch( err => {
            res.sendStatus(500)
        })

    }
}