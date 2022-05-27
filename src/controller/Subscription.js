const User = require("../models/User");
const Queue = require('../services/Queue');

const subscriptionController = {};

subscriptionController.subscribe = async (request, response)=>{
    const { address, email, name } = request.body;

/*     if(await User.findOne({ email })){
        return response.status(400).json({ message: 'User Already Exists!'})
    }
 */
    const user = await User.create({
        address, email, name
    });

    await user.save();

    await Queue.add('RegistrationMail', { user });

    response.json({
        message: 'Subscription made!',
        user
    });

}

subscriptionController.findAll = async (request, response)=>{
    const users = await User.find();
    response.json(users)
}

module.exports = subscriptionController;