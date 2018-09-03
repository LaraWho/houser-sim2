module.exports = {

        view_all: (req, res) => {
        const dbInstance = req.app.get('db')
        let {user_id} = req.session.user

        // console.log('user_id:', user_id)

        dbInstance.view_all([user_id])
        .then(houses => {
            // console.log('houses.house_id is', houses.house_id)

            res.status(200).send(houses)
            
        }).catch( err => {
            res.sendStatus(500)
            console.log(err)
        })
    
    },

        create: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, info, address, city, c_state, zipcode, image, loan_amount, mortgage, des_rent } = req.body
        const { user_id } = req.session.user

        dbInstance.add_house([name, info, address, city, c_state, zipcode, image, loan_amount, mortgage, des_rent, user_id])
        .then(houses => {
            res.status(200).send(houses)
        }).catch( err => {
            console.log(err)
            res.sendStatus(500)
        })
    },

        filter: (req, res) => {
        const dbInstance = req.app.get('db');
        const { des_rent } = req.params;

        dbInstance.filter( [des_rent] )
        .then( rent => res.status(200).send(rent) )
        .catch( err => {
            res.sendStatus(500)
            console.log(err)
        })
    },

        delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const { house_id } = req.params;
        const { user_id } = req.session.user;

            // console.log('req.params.house_id is', req.params.house_id)
            // console.log('req.session.user is', user_id)

        dbInstance.delete( [house_id, user_id] )
        .then( (houses) => {
            res.status(200).send(houses) 
        })
        .catch( err => {
            res.status(500).send({errorMessage: "Oops, you can't delete this!"})
            console.log(err)
        } )
    }

    

    
}