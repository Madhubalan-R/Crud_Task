const customer = require('../db/models/customer');

// GET all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await customer.findAll();
    res.status(200).json(users);
  } catch (error) { 
    res.status(500).json({ error });
  }

};

// GET user by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await customer.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// POST create user
exports.createUser = async function(req, res) {
  console.log("***")
  const { first_Name, last_Name, email, password } = req.body;
  try {
    const newUser = await customer.create({ first_Name, last_Name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error : error.message});
  }
};


// PUT update user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await customer.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.update({ firstName, lastName, email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await customer.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
