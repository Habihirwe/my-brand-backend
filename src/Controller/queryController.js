import Query from "../Model/queryModel";
class queryController {
    //create a contact message
        static async createQuery(req, res) {
            try {
              const message = new Query({
                firstName: req.body.firstName,
                lastName:req.body.lastName,
                email: req.body.email,
                telephone:req.body.telephone,
                message:req.body.message,
              });
              await message.save();
              res.status(201).json(message); 
              console.log("message sent!!!");
            } catch (error) {
              res.status(401).json(error.message);
            }
          }
    
          //get single message
          static async getSingleMessage(req,res) {
            try {
           const message=await Query.findById(req.param.id);
           res.status(200).json(message)
            }catch (error){
                res.status(404).json(error.message);
            }
        }
    
    //get all messages
        static async getAllMessages(req,res) {
            try {
           const messages=await Query.find();
           res.status(200).json(messages)
            }catch (error){
                res.status(404).json(error.message);
            }
        }
        
          }

          export default queryController