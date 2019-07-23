import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import axios from "@/axios";

export default new Vuex.Store({
  state: {
    musicArray: [
      {
        id: 1,
        mus: require('./assets/music/m1.mp3'),
        img: require('./assets/music/m1.jpg'),
        name: 'GIAO',
        text: '这首可能不是最好听的，但一定是最嗨的',
        singer: 'giao哥'
      },
      {
        id: 2,
        mus: require('./assets/music/m2.mp3'),
        img: require('./assets/music/m2.jpg'),
        name: '天空之城',
        text: '曾经有一个原声放在我面前，我没有珍惜。',
        singer: '李志'
      },
      {
        id: 3,
        mus: require('./assets/music/m3.mp3'),
        img: require('./assets/music/m3.jpg'),
        name: '历历万乡',
        text: '十七岁鲜衣怒马，不与平凡。三十岁岁颓败蹉跎，苟且偷生。',
        singer: '孟大宝'
      },
      {
        id: 4,
        mus: require('./assets/music/m4.mp3'),
        img: require('./assets/music/m4.jpg'),
        name: '女儿情',
        text: '薄酒可以忘忧，丑妻可以白头，徐行不必驷马，称身不必狐裘',
        singer: '万晓利'
      },
      {
        id: 5,
        mus: require('./assets/music/m5.mp3'),
        img: require('./assets/music/m5.jpg'),
        name: '北方的女王',
        text: '你和我一样 ，都是说谎的人 ，拥抱城市的灰尘',
        singer: '尧十三'
      },
      {
        id: 6,
        mus: require('./assets/music/m6.mp3'),
        img: require('./assets/music/m6.jpg'),
        name: '春歌',
        text: '酒入豪肠 ，三分化作剑气 ，剩下七分 ，秀口一吐 ，就是半个盛唐。',
        singer: '周云蓬'
      },
      {
        id: 7,
        mus: require('./assets/music/m7.mp3'),
        img: require('./assets/music/m7.jpg'),
        name: '我想我想',
        text:
          '我想吻的人不在我身旁 , 我想唱的歌不在我心房 , 我想种棵树但没有土壤',
        singer: '洪启'
      },
      {
        id: 8,
        mus: require('./assets/music/m8.mp3'),
        img: require('./assets/music/m8.jpg'),
        name: '竹枝词',
        text: '谁藏身杨柳青青江水边 烟雨朦胧渐浮现。',
        singer: '双笙'
      }
    ],
    list1: [
      {
        id: 1,
        mus: require('./assets/music/m1.mp3'),
        img: require('./assets/music/m1.jpg'),
        name: '一给我里giao ----giao哥',
        text: '这首可能不是最好听的，但一定是最嗨的'
      },
      {
        id: 2,
        mus: require('./assets/music/m2.mp3'),
        img: require('./assets/music/m2.jpg'),
        name: '天空之城 ----李志',
        text: '曾经有一个原声放在我面前，我没有珍惜。'
      }
    ],
    list2: [
      {
        id: 1,
        mus: require('./assets/music/m3.mp3'),
        img: require('./assets/music/m3.jpg'),
        name: '历历万乡 ----孟大宝',
        text: '十七岁鲜衣怒马，不与平凡。三十岁岁颓败蹉跎，苟且偷生。'
      },
      {
        id: 2,
        mus: require('./assets/music/m4.mp3'),
        img: require('./assets/music/m4.jpg'),
        name: '女儿情 ----万晓利',
        text: '薄酒可以忘忧，丑妻可以白头，徐行不必驷马，称身不必狐裘'
      }
    ],
    list3: [
      {
        id: 1,
        mus: require('./assets/music/m5.mp3'),
        img: require('./assets/music/m5.jpg'),
        name: '北方的女王 ----尧十三',
        text: '你和我一样 ，都是说谎的人 ，拥抱城市的灰尘'
      },
      {
        id: 2,
        mus: require('./assets/music/m6.mp3'),
        img: require('./assets/music/m6.jpg'),
        name: '春歌 ----周云蓬',
        text: '酒入豪肠 ，三分化作剑气 ，剩下七分 ，秀口一吐 ，就是半个盛唐。'
      }
    ]
  }
  // eslint-disable-next-line no-dupe-keys
})
