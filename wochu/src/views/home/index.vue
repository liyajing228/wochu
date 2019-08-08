<template>

        <div id="home">
        <Top></Top>
        <div class="B_con" ref="bigCon">
            <alley-BScroll>
            <div class="S_con">
                <Carouse1></Carouse1>
                <Title></Title>
                <Main></Main>
            </div>
            </alley-BScroll>
        </div>
        <TabBar></TabBar>
    </div>

</template>

<script>
// import Top from './top';
import Carouse1 from './Carouse1';
import Title from './title';
import Main from './main';
export default {
    components:{
        // Top,
        Carouse1,
        Title,
        Main
    },
    mounted(){
        console.log(this.$refs.bigCon);
        new BScroll(this.$refs.bigCon);
    }
}
</script>

<style scoped>
    .B_con{height: 12.34rem;overflow: auto;margin-bottom: 1rem}
</style>
