<template>
    <div class="home">
        <navigation></navigation>
        <div class="effect_body">
            <div class="" v-for="(item, index) in this.widgets">
                <h2>Best Seller Taobao effect widgets - {{index}}</h2>
                <div class="effect_box" v-for="styleItems in item.styles">
                    <!-- effect items -->
                    <div class="">
                        <h2>{{styleItems.className}}</h2>
                        <div :class="[styleItems.className, 'BS_Widgets_'+index]" :data-title="'Best Seller Widgets '+index" class="BS_Widgets demo" v-html="styleItems.code">
                            {{styleItems}} {{index}}
                        </div>
                        <Tag color="red" v-for="labels in styleItems.labels">{{labels}}</Tag>
                        <br/>
                        <Button type="primary" @click="generate(index, styleItems)">开始生成代码</Button>
                    </div>
                    <div class="">
                        sdsdfs
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>

</template>

<script>

import '../assets/scss/BS_Widgets.scss';

import navigation from './public/navigation';

    export default {
        data () {
            return {
                //
                widgets: {}
            }
        },
        components: {
            navigation: navigation
        },
        //
        created () {
            // console.log(TB);
            this.widgets = this.$store.state.BS_Widgets;
        },
        //
        methods: {
            generate(index, item) {
                console.log(arguments)
            }
        }
    }
</script>

<style lang="scss" >

.BS_Widgets {
    //
    border:1px solid #eee;
    padding: 15px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

    .home {
        .effect_body {
            padding:20px;

            .effect_box {
                & > div {
                    width: 50%;
                    padding-bottom: 15px;
                    // margin-bottom: 15px;
                    h2 {
                        padding: 10px 0;
                        color: #1c2438;
                        font-size: 14px;
                        background: #f8f8f9;
                    }
                }
                display: flex;
                flex-wrap: wrap;
                .effect_box_item {

                }
            }
        }
    }

</style>
