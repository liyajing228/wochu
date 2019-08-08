import feedmessage from "./index.vue"
import Vue from "vue"

export const  MessageBox=(function(){
    let defaultProps={
        message:"提示",
        //从index.vue里（外部）传来的方法
        handleOk:function(){},
        handleCancel:function(){}
    }
//继承，得到一个小型的Vue
    let messageVue=Vue.extend(feedmessage)

    return (options)=>{
        for(var key in options){
            if(options[key]){
                defaultProps[key]=options[key];
            }
        }
        let messageVm = new  messageVue({
            el:document.createElement("div"),
            data:{
                message:defaultProps.message
            },
            methods:{
                handleTrue(){
                    defaultProps.handleOk&&defaultProps.handleOk()
                    document.body.removeChild(messageVm.$mount().$el);
                },
                handleFalse(){
                    defaultProps.handleCancel&&defaultProps.handleCancel()
                    document.body.removeChild(messageVm.$mount().$el);
                  
                }
            }
        })
        //挂载
        document.body.appendChild(messageVm.$mount().$el);
    }
})()