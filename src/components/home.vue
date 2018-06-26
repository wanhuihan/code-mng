<template>
    <div class="home">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
import '../assets/scss/BS_Widgets.scss';

import '../assets/scss/BS_Widgets_demo.scss';

import navigation from './public/navigation';
//
import codeGenerate from './codeGenerate';
    export default {
        data () {
            return {
                //
                widgets: {},
                //
                codeGenerate: false,
                //
                currentItem: {},
                //
                currentWidget: '' + 6
            }
        },
        components: {
            navigation: navigation,
            codeGenerate: codeGenerate
        },
        //
        created () {
            // console.log(TB);
            this.widgets = this.$store.state.BS_Widgets;
        },
        //
        methods: {
            generate(index, item) {
                //
                this.currentItem = item;
                //
                this.currentWidget = index;
                //
                this.codeGenerate = true;

                console.log(arguments)
            }
        }
    }
</script>

<style lang="scss" >

.BS_Widgets {
    //
    // border:1px solid #eee;
    // padding: 15px;
    // margin-bottom: 10px;
    // box-sizing: border-box;
}

    .home {
        .effect_body {
            padding:20px;

            .effect_box {
                & > div {
                    // width: 50%;
                    // padding-bottom: 15px;
                    // margin-bottom: 15px;
                    h2 {
                        padding: 10px 0;
                        color: #1c2438;
                        font-size: 14px;
                        background: #f8f8f9;
                    }
                }
                // display: flex;
                // flex-wrap: wrap;
                .effect_box_item {

                }
            }
        }
    }

</style>
