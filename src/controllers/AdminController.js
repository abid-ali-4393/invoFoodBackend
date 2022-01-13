const UserModel = require("../models").User;
const MenuModel = require("../models").Menu;

const uploadMenu = async (req, res) => {
  try {
    let { menuTitle, menuFromDate, menuToDate, userId } = req.body;
    let menuAttachment = req.files;

    let result = await MenuModel.create({
      menu_title: menuTitle,
      menu_attach: "something url",
      from_date: menuFromDate,
      to_date: menuToDate,
      user_id: userId,
    });

    res.status(200).json({
      statusCode: 200,
      status: true,
      message: "success",
      payload: result,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Internal Error",
      error: error.message,
    });
  }
};

const retrieveAllSubscribedUsers = async (req, res) => {
  try {
    let result = await UserModel.findAll({
      attributes: ["name", "email", "role"],
    });
    res.status(200).json({
      statusCode: 200,
      message: "success",
      payload: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      statusCode: 500,
      message: "Internal Error",
      error: error.message,
    });
  }
};

module.exports = {
  uploadMenu,
  retrieveAllSubscribedUsers,
};
