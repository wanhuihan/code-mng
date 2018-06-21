
<template lang="html">
    <div class="plugins_box">
        <div class="str_push" v-show="plugins_auto_add_show">
            <h2>地址批量自动添加</h2>
            <RadioGroup v-model="autoAddedUrls">
                <Radio label="图片地址"></Radio>
                <Radio label="链接地址" ></Radio>
            </RadioGroup>
            <textarea cols="40" rows="20" v-model="textareaData"></textarea><br />
            <input type="button" name="" value="确认添加" class="ivu-btn ivu-btn-success" @click="patchAdd">
            <Icon type="ios-close-empty" style="position:absolute; color:#fff; right: 15px; top: 0" size="28" @click="plugins_auto_add_show=false"></Icon>
        </div>

        <input type="button" name="" value="地址批量自动添加" class="plugins_auto_add" @click="pluginShow">
    </div>
</template>

<script>

export default {
    //
    data () {
        return {
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
    methods: {
        //
        pluginShow () {
            this.plugins_auto_add_show = true;
        },
        //
        patchAdd() {
            //
            this.$emit('inputItemTextUpdate',{
                data: this.textareaData.split(','),
                urlType: this.autoAddedUrls == '图片地址' ? 'img' : 'link'
            })
            // console.log(this.textareaData.split(','))
        }
    }
}
</script>

<style lang="scss">
</style>
