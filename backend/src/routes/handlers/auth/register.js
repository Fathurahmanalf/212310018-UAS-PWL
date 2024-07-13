const bcrypt = require('bcrypt')
const { User } = require('../../../../models')

module.exports = async (req, res)=>{

    const {body} = req;

    // Validation User Input
    if(!body.nama || !body.email || !body.password)
    return res.status(400).json({
        message: "nama, email, and password must be provided"
    });


    // Biar password nya mengalamai enkripsi
    const password = await bcrypt.hashSync(body.password, 10);

    const user = await User.create({
        nama:body.nama,
        email:body.email,
        password
    });


    return res.json({
        id:user.id,
        nama:user.nama,
        email:user.email
    })
}