
exports.user_phone_number = (req, res, next) => {
    console.log(req.params.phonenumber)

};

exports.user_create = (req, res, next) => {
    console.log(req.body.name)
};