const listAllBlogs = {
    tags:['Blogs'],
    description:"List all Blogs",
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

const getBlogById = {
    tags:['Blogs'],
    description:"Get blog by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
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

const createBlog = {
    tags:['Blogs'],
    description:"Create a Blog post",
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{

                        image:{
                            type:"file",
                            description:"the image of the blog post"
                        },
                        title:{
                            type:"string",
                        },
                        description:{
                            type:"string",
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

const deleteBlogPost = {
    tags:['Blogs'],
    description:"Delete the blog post by id",
    security: [
        {
          auth_token: [],
        },
      ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string"
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

const updateBlogPost = {
    tags:['Blogs'],
    description:"Update a Blog post",
    security: [
        {
          auth_token: [],
        },
      ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string"
        }
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        image:{
                            type:"file",
                            description:"the image of the blog post"
                        },
                        title:{
                            type:"string",
                        },
                        description:{
                            type:"string",
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



 const blogRouteDocs = {
    "/api/getAllBlogs":{
        get:listAllBlogs
    },
    "/api/getSingleBlog/{id}":{
        get:getBlogById
    },
    "/api/createBlog":{
        post:createBlog
    },
    "/api/deleteBlog/{id}":{
        delete:deleteBlogPost
    },
    "/api/updatePost/{id}":{
        put:updateBlogPost
    },
}

export default blogRouteDocs