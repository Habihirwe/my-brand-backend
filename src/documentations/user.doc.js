const listAllUsers = {
    tags:['Users'],
    description:"List all users",
    security: [
        {
          auth_token: [],
        },
      ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const createUser = {
tags:['Users'],
description:"Create a User",
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    username:{
                        type:"string",
                        description:"the user name",
                        example:"Kaleb"
                    },
                    email:{
                        type:"string",
                        description:"the user email",
                        example:"kaleb@gmail.com"
                    },
                    password:{
                        type:"string",
                        description:"the user password",
                        example:"12345"
                    },
                }
            }
        }
    }
},
responses:{
    201:{
        description:"OK",
        content:{
            "application/json":{
                type:"object",
                example:{
                    status:"success",
                    data:[]
                }
            }
        }
    }
}
}

const login = {
tags:['Users'],
description:"Login",
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    email:{
                        type:"string",
                        description:"Your email",
                        example:"kaleb@gmail.com"
                    },
                    password:{
                        type:"string",
                        description:"your password",
                        example:"12345"
                    },
                }
            }
        }
    }
},
responses:{
    201:{
        description:"OK",
        content:{
            "application/json":{
                type:"object",
                example:{
                    status:"success",
                    data:[]
                }
            }
        }
    }
}
}

const getUserById = {
tags:['Users'],
description:"Get the user by id",
parameters:[
    {
        name:"id",
        in:"path",
        description:"id of user",
        type:"string",
        example:"63caaf3527b29e1d399896da"
    }
],
security: [
    {
      auth_token: [],
    },
  ],
responses:{
    200:{
        description:"OK",
        content:{
             "application/json":{
                type:'object',
                example:{
                    status:"success",
                    data:[]
                }
             }
        }
    }
}
}



 const userRouteDocs = {
"/api/getAllUsers":{
    get:listAllUsers,
},
"/api/signUp":{
    post:createUser,
},
"/api/login":{
    post:login,
},
"/api/getSingleUser/{id}":{
    get:getUserById,
},


};

export default userRouteDocs