<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="18" :offset="3">
                <div class="grid-content bg-purple">
                    <div class="search-input">
                        <el-input placeholder="请输入内容" v-model="searchVal"></el-input>
                          <el-button type="info" plain icon="el-icon-search" @click="btn"></el-button>
                    </div>

                    <el-tabs type="border-card">
                        <el-tab-pane label="单曲">
                            <div class="list" v-for="item in searchDate" :key="item.id">
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                           <p>
                                                <i class="el-icon-video-play"></i>
                                                <router-link :to="{path:'/content',query:{id:item.id}}" class="around">
                                                    {{item.name}} 
                                                </router-link>
                                           </p>
                                        </div>
                                    </el-col>
                                    <el-col :span="4">
                                        <div class="grid-content bg-purple">
                                            <p>
                                                <router-link :to="{path:'/content',query:{id:item.id}}" class="around">
                                                    {{item.name}} 
                                                </router-link>
                                            </p>
                                        </div>
                                    </el-col>
                                    <el-col :span="4">
                                        <div class="grid-content bg-purple">
                                            <p><a href="#">《自定义》</a></p>
                                        </div>
                                    </el-col>
                                    <el-col :span="4">
                                        <div class="grid-content bg-purple">
                                            <p>04:01</p>
                                        </div>
                                    </el-col>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="歌手">歌手</el-tab-pane>
                        <el-tab-pane label="专辑">专辑</el-tab-pane>
                        <el-tab-pane label="视频">视频</el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchVal:'',
            searchDate:''
        }
    },
    computed:{ 
        ArrList(){
            return this.$store.state.musicArray
        }
    },
    methods:{
        btn:function(){
            var searchVal = this.searchVal;
            if(searchVal){
                this.searchDate = this.ArrList.filter(function(product){
                    console.log(product)
                    return Object.keys(product).some(function(key){
                        console.log(key)
                        return String(product[key]).toLowerCase().indexOf(searchVal)>-1
                    })
                })
            }
        }
    }
}
</script>


<style scoped>
 .el-row {
    margin-bottom: 20px;
    
  }
  .el-col {
    border-radius: 4px;
    border: 1px solid #DCDFE6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.search-input{
    width: 50%;
    margin: 30px auto
}
.el-input{
    width: 300px;
}
.el-tabs--border-card{
    border: none;
}
.list .el-col{
    border: none;
    padding: 0px;
    font-size: 0.8rem;
    margin: 0px;
}
.list a{
    color: #000
}
.list .name{
    color: #0c73c2;
    padding-left: 6px;
}
.el-icon-video-play{
    color: #888;
    font-size: 1.1rem
}
.list p{
    vertical-align: middle;
    padding: 8px 0px;
}
</style>
