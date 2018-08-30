module.exports = {

        view_all: (req, res) => {
        const dbInstance = req.app.get('db')
        let {user_id} = req.session.user
        console.log(user_id)

        dbInstance.view_all([user_id])
        .then(houses => {
            res.status(200).send(houses)
            
        }).catch( err => {
            res.sendStatus(500)
            console.log(err)
        })
    

    }

    //     create: (req, res) => {
    //     const dbInstance = req.app.get('db');
    //     const { id } = req.params;

    //     dbInstance.
    // }

    

    
}