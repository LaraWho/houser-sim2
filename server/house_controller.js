module.exports = {

        view_all: (req, res) => {
        const dbInstance = req.app.get('db')
        let {user_id} = req.session.user
        console.log(user_id)

        dbInstance.view_all([user_id])
        .then(houses => {
            console.log(houses)
            res.status(200).send(houses)
            
        }).catch( err => {
            res.sendStatus(500)
            console.log(err)
        })
    

    },

        create: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, info, address, city, c_state, zipcode, image, loan_amount, mortgage, des_rent } = req.body
        const { user_id } = req.sessions.user
        

        dbInstance.add_house([name, info, address, city, c_state, zipcode, image, loan_amount, mortgage, des_rent, user_id])
        .then(houses => {
            console.log(houses)
            res.status(200).send(houses)
        }).catch( err => {
            res.sendStatus(500)
            console.log(err)
        })
    }

    

    
}