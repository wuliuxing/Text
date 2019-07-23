<template>
    <div class="content">
        <el-row :gutter="20" >
            <el-col :span="18" :offset="3">
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <img src="../../assets/imgs/index.png" alt="" class="img1">
                        <p class="hot">热门推荐</p>
                    </div>
                </el-col>
            </el-col>

            <el-col :span="18" :offset="3">
                    <el-col :span="6"  v-for="(item,index) in todoss" :key="index">
                        <div class="grid-content bg-purple">
                             <img :src="item.img" alt="">
                            <p class="txt"> {{item.text}} </p>
                            <p class="txt"> 
                                <router-link :to="{path:'/content',query:{id:item.id}}" class="around">
                                    {{item.name}}
                                </router-link>
                            </p>
                        </div>
                    </el-col>
            </el-col>

        </el-row>
    </div>
</template>

<script>
export default {
    methods:{
    },
    computed: {
        todoss(){
            return this.$store.state.musicArray
        }
    }
}
</script>

<style scoped>



.grid-content .txt{
    text-align: left;
    display: inline-block;
    max-width: 100%;
    _width: 100%;
    vertical-align: middle;
    color: #888;
    font-size: 0.8rem;
    height: 2.8em;
}





.content{
    width: 100%;
    margin: 0 auto;
    height: 100%;
}
.content p a{
    color: #444;
    font-size: 0.9rem;
    transition: all 0.4s;
}
.content p a:hover{
 color: #C10D0C;
 font-size: 1.2rem;
}
.content .img1{
    width: 30px;
    height: 30px;
    float: left;
    vertical-align: top;
    position: relative;
    bottom: 4px;
}
.content-header {
    height: 100%;
}
.content .hot{
    font-size: 1.2rem;
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
}

.el-row {
    margin-bottom: 20px;
}
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    margin-top: 20px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .grid-content img{
      width: 100%;
      height: 100%;
  }
</style>
