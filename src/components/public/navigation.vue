<template lang="html">
    <Menu mode="horizontal" theme="dark" active-name="dynamic" @on-select="goPages">

            <MenuItem name="dynamic">
                <!-- <router-link to="/dynamicEffects"> -->
                    <Icon type="compass"></Icon>
                    特效预览
                <!-- </router-link> -->
            </MenuItem>
        <MenuItem name="code">
            <Icon type="code"></Icon>
            代码管理
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
                router.push('/')
            }  else {
                router.push('code')
            }
        }
    }
}
</script>

<style lang="css">
</style>
