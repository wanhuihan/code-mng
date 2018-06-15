//
import Vue from 'vue';

import Vuex from 'vuex';
//
Vue.use(Vuex);
//
let widgetConfig = {
    //
    tabs: {
        effect: 'fade',
        autoplay: true,
        circular: true,
        easing: '',
        circular: '',
        duration: ''
    }
}
let effects = new Vuex.Store({
    //
    state: {
        //
        BS_Widgets: {
            carousels: {
                name: 'carousel',
                styles:[{
                    code: ``,
                    style: {},
                    className: 'BS_Widgets_carousel_style_1'
                }]
            },
            tabs: {
                name: 'tabs',
                config: widgetConfig.tabs,
                styles:[{
                    code: `<div  class="J_TWidget section"   data-widget-type="Tabs"  data-widget-config=${JSON.stringify(widgetConfig.tabs)}>
                                <ul class="ks-switchable-nav">
                                    <li class="ks-active">标题 A</li>
                                    <li>标题 B</li>
                                    <li>标题 C</li>
                                    <li>标题 D</li>
                                </ul>
                                <div class="ks-switchable-content">
                                    <div><img src="http://via.placeholder.com/350x150/000000" style="width:899px;
                                            height: 300px;" /></div>
                                    <div style="display: none"><img src="http://via.placeholder.com/350x150/f4f5fa" style="width:899px;
                                            height: 300px;" /></div>
                                    <div style="display: none"><img src="http://via.placeholder.com/350x150/f7d76a" style="width:899px;
                                            height: 300px;" /></div>
                                    <div style="display: none"><img src="http://via.placeholder.com/350x150/8d5346" style="width:899px;
                                            height: 300px;" /></div>
                                </div>
                            </div>`,
                    style: {},
                    className: 'BS_Widgets_tabs_style_1'
                }]
            },
            slide: {
                name: 'slide',
                styles:[{
                    code: ``,
                    style: {},
                    className: 'BS_Widgets_slide_style_1'
                }]
            },
            accordion: {
                name: 'accordion',
                styles:[{
                    code: ``,
                    style: {},
                    className: 'BS_Widgets_accordion_style_1'
                }]
            },
            popup: {
                name: 'popup',
                styles:[{
                    code: ``,
                    style: {},
                    className: 'BS_Widgets_popup_style_1'
                }]
            },
            compitable: {
                name: 'compitable',
                styles:[{
                    code: ``,
                    style: {},
                    className: 'BS_Widgets_compitable_style_1'
                }]
            },
            // best seller internal widget for TB
            self: {
                //
                name: 'interal',
                styles: [{
                    code: ``,
                    style: {
                        background: 'red'
                    },
                    className: 'BS_Widgets_self_style_1'
                }, {
                    code: `
                        <div>
                            <ul>
                                <li><img src="http://via.placeholder.com/350x150/000000?text="></li>
                                <li><img src="http://via.placeholder.com/350x150/a52733?text="></li>
                                <li><img src="http://via.placeholder.com/350x150/fbe286?text="></li>
                                <li><img src="http://via.placeholder.com/350x150/c8c6b9?text="></li>
                                <li><img src="http://via.placeholder.com/350x150/f1f2f7?text="></li>
                                <li><img src="http://via.placeholder.com/350x150?text="></li>
                            </ul>
                        </div>
                    `,
                    imgs: [],
                    //
                    labels: ['无缝瀑布流','宽高必须一致'],
                    style: {
                        background: 'red'
                    },
                    className: 'BS_Widgets_self_style_2'
                }],
                //
                style_2: {
                    code: ``
                }
            }
        }
    }
});
//
export default effects;
