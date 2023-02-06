import blogRouteDocs from "./blog.doc.js"
import queryRouteDocs from "./query.swaggerdoc.js"
import userRouteDocs from "./user.doc.js"



const swaggerDocumentations ={
    
        openapi: "3.0.0",
        info:{
            title: "My brand ",
            version:"0.1.0",
            description:"This is the backend of my brand"
        },
       
        servers:[
            {
                url: "http://localhost:3000",
                name:"development server"
            },
        ],


        components: {
            securitySchemes: {
              auth_token: {
                type: 'apiKey',
                name: 'auth_token',
                in: 'header'
              }
            }
          },
          security: [
            {
              auth_token: []
            }
          ],
        
        tags:[
            {
                name:"Blogs",
                description:""
            },
        {
          name:"Users",
          description:""
      },
      {
        name:"Queries",
        description:""
    },
    

        ],
        paths:{
          ...blogRouteDocs,
          ...userRouteDocs,
          ...queryRouteDocs
          
          
          
         

        }
    }

export default swaggerDocumentations