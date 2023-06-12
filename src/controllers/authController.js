const { User } = require('../models');

const registerUser = async (req, res) => {
  try {
    const { id, name, lastname, email, password } = req.body;

    if (!(id && name && lastname && email && password)) {
      res.status(400).send('All input is required');
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send('User Already Exist. Please Login');
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      id,
      name,
      lastname,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '1h',
      }
    );

    user.token = token;
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  registerUser,
};
