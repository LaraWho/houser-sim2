module.exports = {

    login: (req, res) => {
        const dbInstance = req.app.get('db')
        let { username, password } = req.body

        dbInstance.login_user([username, password])
            .then(loginResults => {
                console.log(loginResults)
            if(loginResults[0]) {
                req.session.user = loginResults[0]
                res.status(200).send(loginResults);

            } else {
                return res.status(403).send("user not found")
            }
        })
    },

    register: (req, res) => {
        const dbInstance = req.app.get('db')
        let {username, password} = req.body;

        dbInstance.register_user( [username, password] )
        .then( user => {
            req.session.user = user[0]
            res.status(200).send(user)
            console.log(123456789, user)}
        ).catch( err => {
            res.sendStatus(500)
        })

    },

    logout: (req, res) => {
        req.session.destroy(() => {
            console.log('login-controller')
            res.sendStatus(200)
        })
    }
}