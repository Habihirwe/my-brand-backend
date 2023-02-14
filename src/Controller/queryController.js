import Query from "../Model/queryModel.js";
import queryValidationSchema from "../validations/queryvalidation.js";
class queryController {
  //create a contact message
  static async createQuery(req, res) {
    try {
      const { error } = queryValidationSchema.validate(req.body);
      if (error)
        return res
          .status(400)
          .json({ validationError: error.details[0].message });

      const message = new Query({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        message: req.body.message,
      });
      console.log(message);
      await message.save();
      res.status(201).json(message);
      console.log("message sent!!!");
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }

  //get single message
  static async getSingleMessage(req, res) {
    try {
      const message = await Query.findById(req.param.id);
      res.status(200).json(message);
    } catch (error) {
      res.status(404).json(error.message);
    }
  }

  //get all messages
  static async getAllMessages(req, res) {
    try {
      const messages = await Query.find();
      res.status(200).json(messages);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
}

export default queryController;