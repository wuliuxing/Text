<template>
  <div id="app">
     <!-- <cmpHeader/>  -->
    <router-view />
  </div>
</template>

<script>

// import cmpHeader from '@/components/common/cmp-Header'
export default {
  components:{
    // cmpHeader
  }
}
</script>


<style lang="less">
body, ul, ol, li, p, h1, h2, h3, h4, h5, h6, form, fieldset, table, td, img, div, dl, dt, dd, input, i, b { margin: 0; padding: 0; border: 0; font-weight:normal; font-style:normal;}
li{ list-style-type: none;}
a{    text-decoration: none;}
em, i {
    font-style: normal;
    text-align: left;
    font-size: inherit;
}
</style>