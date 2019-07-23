<template>
   <div>
     <el-row :gutter="20" v-for="(item,index) in todoss" :key="index" v-if="ID == item.id">
       <el-col :span="3" :offset="4">
          <div class="grid-content bg-purple">
              <div class="u-cover">
                <img :src="item.img" alt="" :class="{'active':isChoose}" >
              </div>
          </div>
       </el-col>
       <el-col :span="8" :offset="2">
          <div class="grid-content bg-purple">
            <div class="cnt">
                  <i class="icon"></i>
                  <em class="title">
                     {{item.name}}
                  </em><br>
                  <em class="singer">
                     歌手 : {{item.singer}}
                  </em>
                </div>
          </div>
       </el-col>
        <el-col :span="8" :offset="2" class="bofang">
          <div class="grid-content bg-purple">
               <el-popover
                placement="top-start"
                trigger="hover">
                  <div style="text-align: center">
                    <el-progress 
                    color="#67C23A"
                    type="circle" 
                    :percentage="music.volume"></el-progress><br>
                    <el-button 
                    @click="changeVolume(-10)"
                    icon="el-icon-minus" 
                    circle></el-button>
                    <el-button 
                    @click="changeVolume(10)"
                    icon="el-icon-plus" 
                    circle></el-button>
                  </div>
                  <el-button 
                  @click="play"
                  id="play"
                  slot="reference"
                  :icon="music.isPlay?'el-icon-refresh':'el-icon-caret-right'" 
                  circle>{{con}}</el-button>
              </el-popover>
                <button class="download">
                 <i class="el-icon-download"></i>
                 <span>下载</span>
                </button>
          </div>
      </el-col>
        <el-col :span="14" :offset="4">
          <div class="grid-content bg-purple">
        <el-slider
        @change="changeTime"
        :format-tooltip="formatTime"
        :max="music.maxTime"
        v-model="music.currentTime" 
        style="width: 100%;" ></el-slider>
       </div>
      </el-col>
      <el-col :span="3" style="padding: 9px 0px 0px 10px;color:#909399;font-size: 13px">
        {{formatTime(music.currentTime)}}/{{formatTime(music.maxTime)}}
      </el-col>

          <audio ref="music" id="ref" > 
            <source :src="item.mus" >
          </audio> 
    </el-row>

          
  </div>
</template>

<script>
  export default{
    data(){
      return {
        music:{
          isPlay:false,
          currentTime:0,
          maxTime:0,
          volume:100,
        },
        isChoose : false,
        ID: '',
        con:"播放",
        flag:false//单位切换开关 
      }
    },
    computed:{
        todoss(){
            return this.$store.state.musicArray
        }
    },
    mounted(){
      this.$nextTick(()=>{
        setInterval(this.listenMusic,500)
      }),
      this.ID = this.$route.query.id
    },
    methods:{
     
      listenMusic(){
        let ref = document.getElementById('ref');
        if(!ref){
          return
        }
        if(ref.readyState){
          this.music.maxTime = ref.duration
        }
        this.music.isPlay=ref.paused
        this.music.currentTime = ref.currentTime
      },
      play(){
        this.isChoose = !this.isChoose;
        let ref = document.getElementById('ref');
        if(ref.paused){
          ref.play()
        }else{
          ref.pause()
        }
        this.music.isPlay=!ref.paused
        this.$nextTick(()=>{
        document.getElementById('play').blur()
        });
         this.flag=!this.flag;
        
         if(this.flag==true){
            this.con="暂停";
         }else if(this.flag==false){
            this.con="播放";
       }
      },
      changeTime(time){
        ref.currentTime = time
      },
      changeVolume(v){
        this.music.volume += v 
        if(this.music.volume>100){
          this.music.volume = 100
        }
        if(this.music.volume<0){
          this.music.volume = 0
        }
        ref.volume = this.music.volume/100
      },
      formatTime(time){
        let it = parseInt(time)
        let m = parseInt(it/60)
        let s = parseInt(it%60)
        return (m<10?"0":"")+parseInt(it/60)+":"+(s<10?"0":"")+parseInt(it%60)
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
    top: 30px;
    position: relative;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
  #play{
    border-radius: 6px;
    color: #fff;
    background: #0c73c2;
    font-family: simsun,\5b8b\4f53;
    font-size: 0.9rem;
    border: none;
    height: 30px;
    width: 70px;
    padding: 0;
  }
    .u-cover{
    width: 100%;
    height: 100%;
  }
  img{
    border: 30px solid;
    width: 100%;
    height: 100%;
    display: inline-block;
    border-radius: 50%;
  }
  .bofang{
    top: 60px;
    position: relative;
  }
  .cnt{
    width: 100%;
    height: 100%;
  }
  .cnt .icon{
    width: 60px;
    height: 28px;
    background-image: url('../../assets/imgs/icon3.png');
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  .cnt .title{
    margin-left: 10px;
    vertical-align: middle;
    font-size: 1.4rem;
  }
  .cnt .singer{
    vertical-align: middle;
    position: relative;
    top: 10px;
  }
  .download{
    border-radius: 6px;
    color: #fff;
    background: #0c73c2;
    font-family: simsun,\5b8b\4f53;
    font-size: 0.9rem;
    border: none;
    height: 30px;
    width: 70px;
    padding: 0;
    margin-left: 10px;
    cursor:pointer;
  }


@-webkit-keyframes rotation{

    from {-webkit-transform: rotate(0deg);}

    to {-webkit-transform: rotate(360deg);}

}

.active{
    -webkit-transform: rotate(360deg);
    animation: rotation 20s linear infinite;
    -moz-animation: rotation 20s linear infinite;

    -webkit-animation: rotation 20s linear infinite;

    -o-animation: rotation 20s linear infinite;

}

.img{border-radius: 250px;}
</style>