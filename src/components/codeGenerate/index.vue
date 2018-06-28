<template lang="html">

    <div class="">
        <!-- 瀑布流 -->
        <waterfallShow :item="this.$props.item" @popupClose="close" v-if="this.$props.item.className == 'BS_Widgets_self_style_2'"></waterfallShow>

        <!-- {{this.$props.item.code}} -->
    </div>

</template>

<script>
//
//
import waterfallShow from './waterfallShow.vue';

export default {
    //
    components: {
        waterfallShow: waterfallShow,
        inputItems: []
    },
    //
    props: ['item','widget'],
    //
    created() {
        console.log(this.$props.item,'+');
        //
    },
    mounted () {
        console.log(this.$props.item)
        // this.$refs.widgets.inputItems = this.inputItems;
        // console.log(this.$refs.widgets.inputItems);
    },
    //
    methods: {
        //
        close (f) {
            this.$emit('popupClose', ()=>{ f()})
        },
        //
        tabsInputItemsUpdate () {
            // console.log(this.$refs.widgets.inputItems)
        },
        //
        htmlCodeCopy() {
            //

        }
    }
}
</script>

<style lang="scss">

</style>
