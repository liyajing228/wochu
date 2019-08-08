const path = require("path")
module.exports = {
    devServer:{
        proxy:{
            "/client":{
                target:"http://api9.wochu.cn",
                changeOrigin:true
            },
            "/api":{
                target:"http://api9.wochu.cn",
                changeOrigin:true
            },
<<<<<<< HEAD
    
                
        }
=======
<<<<<<< HEAD
        }
=======
            // "/client":{
            //     target:"http://wmall.wochu.cn",
            //     changeOrigin:true
            // }
                    }
>>>>>>> 4c4be5a06bbf26028eb9d361787fcc4d0639d037
                
>>>>>>> 2a1fd6c12b751de6db798ee1eb3c61a1d90cb2c7
    },
    
    
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "views":path.join(__dirname,"./src/views"),
                "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"),
                "img":path.join(__dirname,"./src/img"),
                "lib":path.join(__dirname,"./src/lib")
            }
        }
    }
}
