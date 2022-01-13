const InvoiceModel = require("../models").Invoice;
const UserModel = require("../models").User;

const uploadInvoice = async (req, res) => {
  try {
    let { title, fromDate, toDate, amount, userId } = req.body;
    //let invoiceAttachment = req.files[0];
    let invoiceNumber = Math.floor(Math.random() * new Date() * 100);

    let result = await InvoiceModel.create({
      invoice_title: title,
      invoice_attach: "test name of image",
      invoice_number: invoiceNumber,
      invoice_from_date: fromDate,
      invoice_to_date: toDate,
      invoice_amount: amount,
      user_id: userId,
    });

    res.status(200).json({
      statusCode: 200,
      status: true,
      message: "success",
      payload: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Internal Error",
      error: error.message,
    });
  }
};

const userInvoicesList = async (req, res) => {
  try {
    let result = await InvoiceModel.findAll({
      attributes: [
        "invoice_title",
        "invoice_from_date",
        "invoice_to_date",
        "invoice_amount",
      ],
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

const registerUser = async (req, res) => {
  try {
    let { name, email, password, role } = req.body;

    let result = await UserModel.create({
      name: name,
      email: email,
      password: password,
      role: role,
      status: "active",
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

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    let result = await UserModel.findOne({
      where: {
        email: email,
        password: password,
      },
    });

    console.log(result);

    if (result) {
      let response = {};
      response.name = result.name;
      response.email = result.email;
      response.role = result.role;
      res.status(200).json({
        statusCode: 200,
        status: true,
        message: "success",
        payload: response,
      });
    } else {
      res.status(400).json({
        statusCode: 400,
        status: false,
        message: "Bad Request",
        error: "email or password is incorrect",
      });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Internal Error",
      error: error.message,
    });
  }
};
module.exports = {
  uploadInvoice,
  userInvoicesList,
  registerUser,
  loginUser,
};
