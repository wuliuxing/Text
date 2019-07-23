<template>
    <div>
        <cmpHeader/>
        <cmpBanner/>
        <cmpIndex/>
        <cmpRanking/>
    </div>
</template>

<script>
import cmpIndex from '@/components/index/cmp-index';
import cmpBanner from '@/components/index/cmp-banner';
import cmpRanking from '@/components/index/cmp-ranking';
import cmpHeader from '@/components/common/cmp-Header'
export default {
    components:{
        cmpIndex,
        cmpBanner,
        cmpRanking,
        cmpHeader
    },

}
</script>

<style>

</style>
