<template lang="html">
    <!--  -->
    <div class="">
        <div class="" v-html="code" style="margin: 0 auto"></div>
    </div>
</template>

<script>

import '../../assets/scss/BS_Widgets.scss';

export default {
    //
    data () {
        return {
            code: ''
        }
    },
    created () {
        //
        this.code = this.$route.query.code;
        // console.log(this.$route.query.code)
    }
}

</script>

<style lang="scss">
    .BS_Widgets {
        margin: 0 auto;
    }

</style>
