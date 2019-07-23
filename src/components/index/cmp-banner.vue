<template>
     <div @mouseover = "offPlay()" @mouseleave = "play()">
         <el-row :gutter="20"  v-for="(img,index) in imgArray" :key="index" v-show="index == mark" :class="{'cur':index===mark}" :style="{'background':img.color}" >
            <el-col :span="4" class="btn prev">
                <div class="grid-content bg-purple el-icon-arrow-left" @click="prev()"> 
                  
                </div>
            </el-col>
            <el-col :span="16" >
                <div class="grid-content bg-purple" >
                    <el-image :src="img.img" alt="" style="width:100%;"></el-image>
                </div>
                <div class="bar">
                    <span v-for="(item,index) in imgArray" :key="index" :class="{ 'active':index===mark }" @click="mark = index">
                    </span>
                </div>
            </el-col>
            
            <el-col :span="4" class="btn next">
                <div class="grid-content bg-purple el-icon-arrow-right" @click="next()">
                   
                </div>
            </el-col>

        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mark:0,
            imgArray: [
                {img:require("../../assets/imgs/banner1.jpg"),color:'#CC0000'},
                {img:require("../../assets/imgs/banner2.jpg"),color:'#AA0000'},
                {img:require("../../assets/imgs/banner3.jpg"),color:'#000000'},
                {img:require("../../assets/imgs/banner4.jpg"),color:'#227700'}
            ]
        }
    },
    methods:{
        autoPlay(){
            this.mark++;
            if(this.mark == this.imgArray.length){
                this.mark = 0
            }
        },
        prev(){
            if(this.mark == 0){
                 this.mark=this.imgArray.length-1;
            }
            else{
                this.mark --
            }
        },
        next(){
            if(this.mark == this.imgArray.length-1){
                this.mark = 0
            }else{
                this.mark ++
            }
        },
        play(){
            this.timer = setInterval(this.autoPlay, 1500)
        },
        offPlay(){
            clearInterval(this.timer);
        },
        change(i){
            this.mark = i
        },
    },
    created(){
        this.play()
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
  }
    .btn{
        background: none;
        position: relative;
        top: 180px;
    }
    .btn div{
        padding: 10px 0px;
        vertical-align: middle;
        font-size: 2.8rem;
        color: #fff;
        cursor: pointer;

    }
     .btn div:hover{
         background: #888
     }
    .next{
       text-align: left
    }
    .prev{
       text-align: right;
    }
  .bar {
    position: relative;
    width: 100%;
    bottom: 30px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 20px;
    height: 5px;
    border: 1px solid;
    background: white;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
  }
  .active {
    background: red !important;
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

</style>
