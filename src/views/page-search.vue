<template>
        <div>
            <cmpHeader/>  
            <cmpSearch/>
            <!-- <cmpText /> -->
        </div>
</template>

<script>
import cmpHeader from '@/components/common/cmp-Header';
import cmpSearch from '@/components/search/index';
import cmpText from '@/components/search/text';
export default {
components:{
    cmpHeader,
    cmpSearch,
    cmpText
    }
}
</script>

<style>

</style>
