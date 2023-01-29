const listAllQueries = {
    tags:['Queries'],
    description:"List all Quesries",
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

const getQueryById = {
    tags:['Queries'],
    description:"Get query by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the query",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
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

const createQuery = {
    tags:['Queries'],
    description:"Create a query post",
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{

                        firstName:{
                            type:"string",
                            description:"the image of the blog post"
                        },
                        lastName:{
                            type:"string"
                        },
                        email:{
                            type:"string",
                        },
                        telephone:{
                            type:"string",
                        },
                        message:{
                            type:"string"
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



 const queryRouteDocs = {
    "/api/getAllMessages":{
        get:listAllQueries
    },
    "/api/getSingleMessage/:id":{
        get:getQueryById
    },
    "/api/createMessage":{
        post:createQuery
    },
   
}

export default queryRouteDocs