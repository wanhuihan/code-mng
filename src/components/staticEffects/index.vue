<template lang="html">
    <div class="static-effects">

        <div class="style-box">

            <div class="static_style_1">
                <img src="../../assets/images/only-pc上_66.jpg" alt="">
            </div>
            <!--  -->
            <div class="static_style_2">
                <img src="../../assets/images/only-pc上_69.jpg" alt="">
            </div>
            <!--  -->
            <div class="static_style_3">
                <img src="../../assets/images/only-pc上_63.jpg" alt="">
            </div>

        </div>
        <!--  -->
        <h2>Button Styles</h2>

        <ul>
            <li>
                <div class="BS_Widget_btn_style_1">

                    <span>
                        <b class="BS_W_btn_s_1_left"></b>
                        SHOP NOW
                        <b class="BS_W_btn_s_1_right"></b>
                    </span>

                </div>
            </li>
        </ul>
    </div>

</template>


<script>

import '../../assets/scss/BS_Widgets_button.scss';
// import '../../assets/scss/BS_Widgets_demo.scss';
export default {
}
</script>

<style lang="scss" scoped>
    .static-effects {
        margin-top: 20px;
        padding:0 20px;
    }
    //
    .static_style_1 {
        img {
            -webkit-transform: translate(10px, 10px);
            -moz-transform: translate(10px, 10px);
            transform: translate(10px, 10px);
        }
    }
    //
    .static_style_2 {
        img {
            transform: rotate(10deg);
        }
    }
    //
    .static_style_3 {
        img {
            transform: skew(15deg);
        }
    }
</style>
