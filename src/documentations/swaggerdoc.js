import blogRouteDocs from "./blog.doc"
import userRouteDocs from "./user.doc"



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
          
          
         

        }
    }

export default swaggerDocumentations