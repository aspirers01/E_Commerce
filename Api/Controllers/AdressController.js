const User = require("../Model/User");

const AdressSaveController = async (req, res) => {
  try {
    const { userId, address } = req.body;
    //find the user by id
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //add the new address to the user address
    user.addresses.push(address);
    await user.save();
    res.status(200).json({
      message: "Address added successfully",
      addresses: user.addresses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { AdressSaveController };
