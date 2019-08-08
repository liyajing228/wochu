<template>
    <div>
        <router-view></router-view>
        <Nav></Nav>
        <Left></Left>
        <Right></Right>
    </div>

</template>

<script>

import Nav from "./nav"
import Left from "./left"
import Right from "./right"
export default {
    components:{
        Nav,
        Left,
        Right
    },
}
</script>

<style scoped>

</style>
