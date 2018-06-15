<template lang="html">
    <Menu mode="horizontal" theme="dark" active-name="dynamic" @on-select="goPages">

            <MenuItem name="dynamic">
                <!-- <router-link to="/dynamicEffects"> -->
                    <Icon type="compass"></Icon>
                    动态特效预览
                <!-- </router-link> -->
            </MenuItem>

        <MenuItem name="static">
            <Icon type="document"></Icon>
            静态特效预览
        </MenuItem>
        <MenuItem name="code">
            <Icon type="code"></Icon>
            代码管理
        </MenuItem>
        <MenuItem name="codeGenerate">
            <Icon type="gear-a"></Icon>
            代码生成
        </MenuItem>
    </Menu>
</template>

<script>
import router from '../../routes';

export default {

    data () {
        return {

        }
    },
    //
    methods: {
        goPages (event) {
            if (event == 'dynamic') {
                router.push('/dynamicEffects')
            } else if (event == 'static') {
                router.push('/staticEffects')
            } else if (event == 'codeGenerate') {
                router.push('/generate')
            } else {
                router.push('code')
            }
        }
    }
}
</script>

<style lang="css">
</style>
