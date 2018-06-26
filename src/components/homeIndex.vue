<template>
    <div class="home">
        <!-- <img src='../assets/images/BS_Widgets_self_style_5_3.jpg' /> -->
        <div class="effect_body">
            <div class="" v-for="(item, index) in this.widgets">
                <!-- <h2>Best Seller Taobao effect widgets - {{index}}</h2> -->
                <div class="effect_box" v-for="styleItems in item.styles">
                    <!-- effect items -->
                    <div class="">
                        <h2>{{styleItems.className}}</h2>
                        <div>
                            <div :class="[styleItems.className, 'BS_Widgets_'+index]" :data-title="'Best Seller Widgets '+index" class="BS_Widgets demo" v-html="styleItems.code">
                                {{styleItems}} {{index}}
                            </div>
                            <Tag color="red" v-for="labels in styleItems.labels">{{labels}}</Tag>
                            <br/>
                            <Button type="primary" @click="generate(index, styleItems)">开始生成代码</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Modal
            v-model="codeGenerate"
            title="添加模块"
            width="1200"
            :closable="false"
            :mask-closable="false"
            >
                <div class="">
                    <codeGenerate :item="currentItem" :widget="currentWidget" @popupClose="close"></codeGenerate>
                </div>
                <div slot="footer"></div>
        </Modal>
        <!-- <router-view></router-view> -->
    </div>

</template>

<script>

import '../assets/scss/BS_Widgets.scss';
//
// import '../assets/images/BS_Widgets_self_style_5_1.jpg';
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
                currentWidget: '',
                //
                plugins_auto_add_show: false,
                //
                autoAddedUrls: '图片地址',
                //
                textareaData: ''
            }
        },
        components: {
            codeGenerate: codeGenerate
        },
        //
        created () {
            // console.log(TB);
            this.widgets = this.$store.state.BS_Widgets;
            //
            // console.log(BS_Store)
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
            },
            //
            close(f) {
                // console.log(f())
                this.codeGenerate = f();
                // console.log(f)
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
        // display: flex;
        // flex-wrap: wrap;
        & > div {
            // width: 50%;
            display: flex;
            flex-wrap: wrap;
            padding: 0 15px;
            .effect_box {
                width: 50%;
                padding: 0 15px;
                & > div {
                    & > div {
                        border: 1px solid #eee;
                        padding: 15px;
                    }
                }
            }
        }
        .effect_box {
            // border: 1px solid #eee;
            & > div {
                // width: 50%;
                padding-bottom: 15px;
                // margin-bottom: 15px;
                h2 {
                    padding: 10px 0;
                    color: #1c2438;
                    font-size: 14px;
                    background: #f8f8f9;
                    width: 100%;
                }
            }
            // display: flex;
            // flex-wrap: wrap;
            .effect_box_item {

            }
        }
    }
}
//
.plugins_box {
    .plugins_auto_add {
        background: #19be6b;
        border:1px solid #19be6b;
        padding: 5px 15px;
        color: #fff;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        position: fixed;
        bottom: 0;
        z-index: 9998;
        right: 15px;
    }
    .str_push {
        position: fixed;
        z-index: 9999;
        right: 0;
        background: #fff;
        height: 500px;
        width: 300px;
        bottom: 0;
        border:1px solid #19be6b;
        text-align: center;
        h2 {
            margin-bottom: 10px;
            text-align: left;
            background-color: #19be6b;
            color: #fff;
            padding: 5px 10px;
        }
        .ivu-radio-inner {
            border-color: #19be6b;
            &:after {
                background-color: #19be6b;
            }
        }
        textarea {
            margin-top: 15px;
        }
        // box-shadow: 1px 1px 0 rgba(0,0,0,0.8);
    }
}

</style>
