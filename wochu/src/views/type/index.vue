<template>
    <div>
        <router-view></router-view>
        <Nav></Nav>
        <Left></Left>
        <Right></Right>
    </div>

</template>

<script>
// import {type_wmall} from "api/type"
import Nav from "./nav"
import Left from "./left"
import Right from "./right"
export default {
    components:{
        Nav,
        Left,
        Right
    },
    // created(){
    //     type_wmall().then((data)=>{
    //         console.log(777)
    //         console.log(data.data);
    //     })
    // }
}
</script>

<style scoped>

</style>
