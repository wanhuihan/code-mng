<template lang="html">

    <div class="">
        <tab :item="this.$props.item" @popupClose="close" ></tab>
        <!-- {{this.$props.item.code}} -->
    </div>

</template>

<script>
//
import tab from './tabs.vue';

export default {
    //
    components: {
        tab: tab,
        inputItems: []
    },
    //
    props: ['item','widget'],
    //
    created() {

        //
    },
    mounted () {
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
