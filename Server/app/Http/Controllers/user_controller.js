;
const bcrypt = require('bcrypt');
const config = require('../../../knexfile');
const jwt = require('jsonwebtoken');
const db = require('knex')(config['development']);

//CRUD USERS 
// let read = (req, res) => {
//     let campos = req.query.campos || '*',
//         tabla = req.query.table || 'users.client';
//     db.select(campos).from(table)
//         .then(response => {
//             return res.status(200).json({
//                 ok: true,
//                 data: response,
//                 message: `Found: ${response.length} records in the query`
//             })
//         }).catch(error => {
//         console.log(error);
//         return res.status(500).json({
//             ok: false,
//             data: null,
//             message: `Server Error: ${error}`
//         })
//     })
// };
const getProveedores = (req, res) => {
    db('persons.users').select('*').where('role_id', "=", 3)
        .then(result => {
            return res.status(200).json({
                ok: true,
                action: 'GET',
                data: result
            })
        })
        .catch(err => {
                return res.status(500).json({
                    ok: false,
                    action: 'GET',
                    message: err
                })
            }
        )
};
let registerUser = (req, res) => {
    let {first_name, last_name, DNI, gender_id, direccion, email, password,code_postal} = req.body.params;
    let role_id = req.body.role_id || false;
   

    bcrypt.hash(password, 10, function (err, hash) {
        if (role_id==2) {
            db('persons.users').insert({
                first_name,
                last_name,
                password: hash,
                email,
                direccion,
                DNI,
                gender_id,
                role_id
            }).returning('id')
                .then(result => {
                    return res.status(200).json({
                        ok: true,
                        action: 'Insert',
                        id: result
                    })
                });
        } else if(role_id==3) {
            db('persons.users').insert({
                first_name,
                last_name,
                email,
                gender_id,
                role_id,
            }).returning('id')
                .then(result => {
                    return res.status(200).json({
                        ok: true,
                        action: 'Insert',
                        id: result
                    })
                }).catch(function (err) {
                return res.status(500).json({
                    message: 'Fallo al intentar insertar usuario.',
                    data: err
                })
            });
        }else{
            db('persons.users').insert({
                first_name,
                last_name,
                email,
                code_postal,
                gender_id,
                role_id,
            }).returning('id')
                .then(result => {
                    return res.status(200).json({
                        ok: true,
                        action: 'Insert',
                        id: result
                    })
                }).catch(function (err) {
                return res.status(500).json({
                    message: 'Fallo al intentar insertar usuario.',
                    data: err
                })
            });
        }
    });
};

//AUTH ADMIN
let loginUser = (req, res) => {
    let {password, email} = req.body.params;
    res.header('access-control-allow-origin', '*');
    db('persons.users').where({'email': email}).select('password', 'first_name', 'last_name', 'role_id', 'id', 'email')
        .then(result => {
            if (result.length === 1) {
                bcrypt.compare(password, result[0].password, (err, re) => {
                    if (re) {
                        let token;
                        if (result[0].role_id !== 1) {
                            token = jwt.sign({email, password}, 'my_secret_token');
                        } 
                        return res.status(200).json({
                            message: 'Login Successfull',
                            response: {
                                'id': result[0].id,
                                'first_name': result[0].first_name,
                                'last_name': result[0].last_name,
                                'role_id': result[0].role_id,
                                'email': result[0].email
                            },
                            session_id: token
                        })
                    } else {
                        return res.status(500).json({
                            message: 'Incorrect password'
                        })
                    }
                });
            } else {
                return res.status(500).json({
                    message: 'User not found'
                })
            }
        }).catch(error => {
        console.log(error);
    });

};

let modifyUser = (req, res) => {
    let {first_name, last_name, DNI, gender_id, direccion, email, password,code_postal} = req.body.params
    let role_id= req.body.role_id
    bcrypt.hash(password, 10, function (err, hash) {
        if (role_id==2) {
            db('persons.users').insert({
                first_name,
                last_name,
                password: hash,
                email,
                direccion,
                DNI,
                gender_id,
                role_id
            }).returning('id')
                .then(result => {
                    return res.status(200).json({
                        ok: true,
                        action: 'Modidy',
                        id: result
                    })
                });
        } else if(role_id==3) {
            db('persons.users').insert({
                first_name,
                last_name,
                email,
                gender_id,
                role_id,
            }).returning('id')
                .then(result => {
                    return res.status(200).json({
                        ok: true,
                        action: 'Modify',
                        id: result
                    })
                }).catch(function (err) {
                return res.status(500).json({
                    message: 'Fallo al intentar insertar usuario.',
                    data: err
                })
            });
        }else{
            db('persons.users').insert({
                first_name,
                last_name,
                email,
                code_postal,
                gender_id,
                role_id,
            }).returning('id')
                .then(result => {
                    return res.status(200).json({
                        ok: true,
                        action: 'Modify',
                        id: result
                    })
                }).catch(function (err) {
                return res.status(500).json({
                    message: 'Fallo al intentar insertar usuario.',
                    data: err
                })
            });
        }
    });

};

let deleteUser = (req, res) => {
    let id = req.body.id;
    db('persons.users').where('id', id).del().then(result => {
        return res.status(200).json({
            ok: true,
            action: 'Delete',
            id: result
        })
    });
};


module.exports = {
    //CRUD USERS
    loginUser,
    registerUser,
    getProveedores,
    modifyUser,
    deleteUser
};
