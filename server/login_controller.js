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
        }).catch( err => res.sendStatus(500))
    },

    register: (req, res) => {
        const dbInstance = req.app.get('db')
        let {username, password} = req.body;

        dbInstance.register_user( [username, password] )
        .then( user => {
            if (username.length >= 5) {
                req.session.username = username
                req.session.password = password
                res.status(200).send(user)
                console.log('register in controller', username)
            } else {
                console.log('my else statement')
                return res.sendStatus(406)
            }
        }).catch( err => res.sendStatus(500))
    },

    logout: (req, res) => {
        req.session.destroy(() => {
            res.sendStatus(200)
        })
    }
}