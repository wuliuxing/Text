<template>
    <div class="header">
      <el-row :gutter="20" style="    text-align: center;">
        <el-col :span="24">
          <div class="grid-content bg-purple">
             <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <div class="logo">
                        <router-link :to="{ name:'index'}" class="logo-img">
                        </router-link>
                    </div>
                    <el-menu-item index="1">
                        <router-link :to="{ name:'index'}" class="logo-img">首页</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">我的音乐</el-menu-item>
                    <el-menu-item index="3">商城</el-menu-item>
                    <el-menu-item index="4">音乐人</el-menu-item>
                    <el-menu-item index="5">下载客户端</el-menu-item>
                    <el-menu-item index="6">
                        <router-link :to="{name:'login'}"  target="_blank" class="router">登录</router-link>
                    </el-menu-item>
                    </el-menu>
                    <el-input v-model="input" placeholder="请输入内容" @keyup.enter.native="btn"></el-input>
          </div>
        </el-col>

</el-row>
        <div class="header-red"></div>
    </div>
</template>

<script>
 export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      btn:function(){
        // this.$router.push({path:'/search'});
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
    .header{
        width: 100%;
        height: 100%;
        background: rgb(84, 92, 100);
        margin: 0 auto;
    }
    .header-red{
        background: red;
        height: 10px;
    }
    .logo{
        float: left;
        width: 176px;
        height: 60px;
        background-position: 0 0;
        position: relative;
        bottom: 4px;
    }
    .logo .logo-img{
       background-image: url('../../assets/imgs/topbar.png');
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .el-menu.el-menu--horizontal{
        border-bottom:none;
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
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .header ul{
    display: inline-block
  }
  .el-input{
      position: relative;
    font-size: 14px;
    display: inline-block;
    width: 200px;
    vertical-align: top;
    top: 12px;
  }
</style>
