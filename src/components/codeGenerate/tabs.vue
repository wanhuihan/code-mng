<template lang="html">

    <div class="generate">
        <Form  :label-width="120" label-position="right">
            <Row>
                <Col span="12">
                    <FormItem label="模块宽度">
                        <Input  v-model="widgetWidth" placeholder="请输入模块的宽度" size="large" style="width:140px; display:inline-block; margin-right:15px"></Input>px
                    </FormItem>
                </Col>
            </Row>

            <FormItem label="请选择您的品牌">
                <RadioGroup  size="large">
                    <Radio label="Jack&Jones" ></Radio>
                    <Radio label="Vero Moda"></Radio>
                    <Radio label="Seleceted"></Radio>
                    <Radio label="Only"></Radio>
                    <Radio label="Jlindeberg"></Radio>
                    <Radio label="Nameit"></Radio>
                </RadioGroup>
            </FormItem>

            <FormItem label="请填添加照片&链接">
                <Row >
                    <Col span="12" >
                        <span>添加</span>
                        <Icon @click="inputAdd()"  type="android-add" size="25" style="vertical-align: middle;margin-left:5px;" color="#2d8cf0"></Icon>
                        <Select  style="width:100px; margin-left: 15px;" @on-change="inputAdd('patch')" v-model="addedCount" placeholder="批量添加">
                            <Option v-for="item in 50" :value="item" :key="item">添加{{item}}个</Option>
                        </Select>
                    </Col>
                    <!-- <Col span="12">
                        <span>瀑布流左侧</span><Icon  type="android-add" size="25" style="vertical-align: middle;margin-left:5px;" color="#2d8cf0"></Icon>
                    </Col> -->
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <div class="left_image_url" v-for="(item, index) in inputItems">
                            <!-- <h2>瀑布流 {{index +1}}</h2> --> {{index}}
                            <Input class="img_url"  placeholder="图片地址" size="small" v-model="item.img"></Input>
                            <Input class="img_link" placeholder="链接地址" size="small" v-model="item.link"></Input>
                            <Icon @click="removeInputItem(index)" type="android-close" size="20" style="font-size: 20px; position: absolute; right: -30px; top: 45%;" color="#ed3f14"></Icon>
                        </div>
                        <!-- {{inputItems}} -->
                        <!-- {{this.$props.item.code}} -->
                    </Col>
                    <!-- <Col span="12">
                        <div class="right_image_url">
                            <Input  placeholder="图片地址" size="small"></Input>
                            <Input  placeholder="链接地址" size="small"></Input>
                        </div>
                    </Col> -->
                    <!-- <input id="copyCodes" type="hidden" name="" :value="codes"> -->
                </Row>
            </FormItem>

        </Form>
        <div class="tabs_footer">
            <button class="btn" :data-clipboard-text="codes">
                <img alt="Copy to clipboard">
            </button>
            <Button type="primary" icon="ios-search" size="large" @click="previewShow">效果预览</Button>
            <Button type="success" icon="ios-copy-outline" size="large" @click="htmlCodeCopy" data-clipboard-target="#copyCodes">复制代码</Button>
            <Button type="primary" size="large" icon="ios-box-outline">保存代码</Button>
            <Button type="error" size="large" icon="ios-close-outline" @click="close">关闭</Button>
        </div>

        <plugins @inputItemTextUpdate="inputItemTextUpdate"></plugins>

    </div>

</template>

<script>
//
import plugins from '../plugins';
 //
export default {
    //
    components: {
        plugins: plugins
    },
    //
    props: ['item'],
    data () {
        return {
            inputItems: [],
            addedCount: 0,
            widgetWidth: '',
            codes: ''
        }
    },
    //
    methods: {
        // input code added fun
        inputAdd (patch) {
            // the input code will be added as patch if the arguemnts there;
            if (arguments.length) {
                // console.log(this.addedCount);
                for (let i = 0; i < this.addedCount; i++) {
                    this.inputItems.push({
                        img: '',
                        link: ''
                    })
                }
            // the input code will be added by single if no arguments there;
            } else {
                // console.log(this.addedCount);
                this.inputItems.push({
                    img: '',
                    link: ''
                })
            }
        },
        // remove input code by single;
        removeInputItem(index) {
            this.inputItems.splice(index,1)
        },
        //
        previewShow() {
            // console.log(this.$props.item.code.trim());
            let codes = this.codeGenerate();

            window.open(encodeURI('#/preview?code='+codes));
        },
        //
        codeGenerate() {

            let insertHtml = '';

            for (let i = 0; i < this.inputItems.length; i++) {
                insertHtml += '<li><a href="'+ this.inputItems[i].link+'"><img src="'+ this.inputItems[i].img+'" /></a></li>'
            }
            //
            let compressHtml = this.$props.item.code.replace(/(?=[^>]*(?=<))\s+/g,"");

            compressHtml.replace(compressHtml.slice(compressHtml.indexOf('<ul>')+4, compressHtml.indexOf('</ul>')), insertHtml)

            let newHtml = compressHtml.replace(compressHtml.slice(compressHtml.indexOf('<ul>')+4, compressHtml.indexOf('</ul>')), insertHtml);

                newHtml = '<div style="width:'+this.widgetWidth+'px" class="BS_Widgets '+ this.$props.item.parent + ' ' + this.$props.item.className +'">' + newHtml + '</div>';
                //
                this.codes = newHtml;

                return newHtml;
        },
        //
        close() {
            // console.log(this.inputItems, this.addedCount);
            this.inputItems = [];
            //
            this.addedCount = 0;
            this.$emit('popupClose', ()=>{false})
        },
        //
        inputItemTextUpdate (data) {
            // console.log(data);
            // return;
            if (this.inputItems.length == 0) {
                this.addedCount = data.data.length;
                // this.inputAdd(data.data.length);
                this.inputItemsTextInsert(data.urlType, data.data);
                // console.log('empty')
            } else if (data.data.length === this.inputItems.length) {
                //
                this.inputItemsTextInsert(data.urlType, data.data);
                // console.log('equal')
            } else {
                this.$Message.error('添加的表单条数和添加的链接数量不一致');
            }
            this.addedCount = 0;
        },
        //
        inputItemsTextInsert(urlType, data) {

            if (urlType === 'img') {
                for (let i = 0; i < data.length; i++) {
                    // if (!this.inputItems.length) {
                        this.inputItems[i] = {};
                        this.inputItems[i][urlType] = data[i];
                        this.inputItems[i]['link'] = '';
                }
            } else if (urlType === 'link') {

            }
        },
        //
        htmlCodeCopy () {
            this.codeGenerate();
            // window.clipboardData.setData("Text",this.codes);
            // console.log(this.codes)
        }
    },
    //
    mounted () {
        //
        new ClipboardJS('.btn');
    }
}

</script>

<style lang="scss" scoped>

    .generate {
        .left_image_url, .right_image_url {
            border: 1px solid #dddee1;
            padding:10px;
            padding-bottom: 10px;
            margin-bottom: 10px;
            background: #f8f8f9;
        }
        .left_image_url {
            position: relative;
            width: 45%;
            display: inline-block;
            margin-right: 50px;
            &:first-child {
                margin-top: 10px;
            }
        }
        .tabs_footer {
            & > button {
                margin-right: 10px;
            }
        }
    }

</style>
