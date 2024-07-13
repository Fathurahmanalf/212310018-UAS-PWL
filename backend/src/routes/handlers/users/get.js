const { User } = require("../../../../models")

// GET all users data

module.exports = async (req, res) => {
  try {
    const results = await User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    res.json({
      status: 200,
      data: results,  
    });
  } catch (error) {
    res.status(500).json({
      status: 502,
      message: {
        internal: error.message,
        user: 'Gagal mengambil data',
      },
      errors: error.errors,
    });
  }
};
