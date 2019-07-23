<template>
    <div class="content">
        <div class="ranking">
            <img src="../../assets/imgs/index.png" alt="" class="img1">
            <p class="hot">榜单</p>
            <div class="list ">
                <ul class="list1">
                    <div class="title">
                        <img src="../../assets/imgs/ranking1.jpg" alt="">
                        <p>云音乐飙升榜</p>
                    </div>
                    <li v-for="(item,index) in list1" :key="index">
                        <span>
                            {{item.id}}
                        </span>
                        <a href="#">
                            {{item.name}}
                        </a>
                    </li>
                </ul>

                <ul class="list2">
                    <div class="title">
                        <img src="../../assets/imgs/ranking2.jpg" alt="">
                        <p>云音乐飙升榜</p>
                    </div>
                    <li v-for="(item,index) in list2" :key="index">
                        <span>
                            {{item.id}}
                        </span>
                        <a href="#">
                            {{item.name}}
                        </a>
                    </li>
                </ul>

                <ul class="list3">
                    <div class="title">
                        <img src="../../assets/imgs/ranking3.jpg" alt="">
                        <p>云音乐飙升榜</p>
                    </div>
                    <li v-for="(item,index) in list3" :key="index">
                        <span>
                            {{item.id}}
                        </span>
                        <a href="#">
                            {{item.name}}
                        </a>
                    </li>
                </ul>
            </div>
    </div>
    </div>
</template>

<script>
export default {
    computed: {
        list1(){
            return this.$store.state.list1
        },
        list2(){
            return this.$store.state.list2
        },
        list3(){
            return this.$store.state.list3
        }
    }
}
</script>

<style>
.contnt{
    width: 100%;
    margin: 0 auto;
    min-width: 960px;
    height: auto;
    margin-top: 30px;
}
.ranking{
    width: 1000px;
    margin: 0 auto;
    height: 100%;
    margin-top: 20px;
}
.content .img1{
    width: 30px;
    height: 30px;
    float: left;
    vertical-align: top;
    position: relative;
    bottom: 4px;
}
.ranking .hot{
    font-size: 1.2rem;
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
}
.ranking .list{
    display: inline-block;
    border: 1px solid #888;
    width: 100%;
    height: 100%;
    margin-top: 20px;
   background: #d3dce6;
}
.ranking ul{
    width: 33%;
    display: inline-block;
     /* text-align: center; */
     height: auto;
     min-width: 200px;
}
.ranking .list2{
    border-left: 1px solid #888;
    border-right: 1px solid #888;
}
.title{
    padding:  20px 0px 20px 0;
    width: 80%;
    margin: 0 auto;
    height: 100%;
    text-align: center;
}
.title p{
    vertical-align: top;
    position: relative;
    top: 28px;
    display: inline-block;
    padding: 10px;
}
.ranking ul li{
    text-align: left;
    height: 32px;
}
.ranking li a{
    color: #444;
    font-size: 0.9rem;
    padding-left: 20px;
}
.ranking li a:hover{
    text-decoration: underline;
}
.ranking li span{
    font-size: 1.2rem;
    font-weight: 500;
    color: #C10D0C
}
</style>
