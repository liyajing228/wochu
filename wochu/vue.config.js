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
            // "/client":{
            //     target:"http://wmall.wochu.cn",
            //     changeOrigin:true
            // }
                    }
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
