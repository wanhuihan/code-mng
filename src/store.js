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
    },
    slide: {
        style_2: {
            'effect':'none',
            'easing':'easeOutStrong',
            'countdown':true
        }
    }
}
//
let demoHtml = {
        tabs: `<li><img src="http://via.placeholder.com/150x180/000000?text="></li>
                <li><img src="http://via.placeholder.com/150x180/a52733?text="></li>
                <li><img src="http://via.placeholder.com/150x180/fbe286?text="></li>
                <li><img src="http://via.placeholder.com/150x180/c8c6b9?text="></li>
                <li><img src="http://via.placeholder.com/150x180/f1f2f7?text="></li>
                <li><img src="http://via.placeholder.com/150x180?text="></li>`
}
let effects = new Vuex.Store({
    //
    state: {
        //
        BS_Widgets: {
            carousels: {
                name: 'carousel',
                styles:[{
                    code: `<div  class="section  J_TWidget">
                        <span id="scroller-prev" class="prev disable">? 上一页</span>
                        <span id="scroller-next" class="next">下一页 ?</span>
                        <div class="scroller">
                            <div class="ks-switchable-content">
                                <img alt="" src="###"/>
                                <img alt="" src="###"/>
                            <img alt="" src="###"/>
                                <img alt="" src="###"/>
                            <img alt="" src="###"/>
                            <img alt="" src="###"/>
                                <img alt="" src="###"/>
                            <img alt="" src="###"/>
                            <img alt="" src="###"/>
                            </div>
                            <ul class="ks-switchable-nav">
                                <li class="ks-active">?</li>
                                <li>?</li>
                                <li>?</li>
                            </ul>
                        </div>
                    </div>`,
                    style: {},
                    className: 'BS_Widgets_carousel_style_1'
                }]
            },
            tabs: {
                name: 'tabs',
                config: widgetConfig.tabs,
                demoHtml: demoHtml.tabs,
                styles:[{
                    code: `<div  class="J_TWidget section"   data-widget-type="Tabs"  data-widget-config=${JSON.stringify(widgetConfig.tabs)}>
                                <ul class="ks-switchable-nav">
                                    <li class="ks-active">标题 A</li>
                                    <li>标题 B</li>
                                    <li>标题 C</li>
                                    <li>标题 D</li>
                                </ul>
                                <div class="ks-switchable-content">
                                    <div><img src="http://via.placeholder.com/350x150/000000" /></div>
                                    <div style="display: none"><img src="http://via.placeholder.com/350x150/f4f5fa"/></div>
                                    <div style="display: none"><img src="http://via.placeholder.com/350x150/f7d76a"  /></div>
                                    <div style="display: none"><img src="http://via.placeholder.com/350x150/8d5346" /></div>
                                </div>
                            </div>`,
                    style: {},
                    className: 'BS_Widgets_tabs_style_1'
                }]
            },
            slide: {
                name: 'slide',
                styles:[{
                    code: `<div class="J_TWidget section">

                        <div class="yslider-stage">

                            <p><a href="#" target="_blank"><img src="###"/></a></p>

                            <p><a href="#" target="_blank"><img src="###"/></a></p>

                            <p><a href="#" target="_blank"><img src="###"/></a></p>

                        </div>

                        <ul class="yslider-stick">

                            <li class="selected"><a href="#" target="_blank">aaa</a></li>

                            <li><a href="#" target="_blank">bbb</a></li>

                            <li><a href="#" target="_blank">ccc</a></li>

                        </ul>

                    </div>`,
                    style: {},
                    className: 'BS_Widgets_slide_style_1'
                },{
                    code: `<div class="J_TWidget section loading slide1"
                    data-widget-type="Slide" data-widget-config=${JSON.stringify(widgetConfig.slide.style_2)}>
                    <ol class="ks-switchable-content">
                        <li>
                            <a href="#" target="_blank">
                                <img alt="" src="http://img05.taobaocdn.com/tps/i5/T1HllqXjXpXXXXXXXX-470-150.jpg"/>
                            </a>
                        </li>
                        <li class="hidden">
                            hello world
                        </li>
                        <li class="hidden">
                            <a target="_blank" href="#">
                                <img alt="" width="470" height="150" border="0" src="http://img.alimama.cn/bcrm/adboard/picture/2009-12-29/091229160359.jpg"/>
                            </a>
                        </li>
                        <li class="hidden">
                            <a href="#" target="_blank">
                                <img alt="" src="http://img01.taobaocdn.com/tps/i1/T1qS0qXhBhXXXXXXXX-470-150.jpg"/>
                            </a>
                        </li>
                    </ol>
                    </div>`,
                    style: {},
                    className: 'BS_Widgets_slide_style_2'
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
                        <ul>
                            ${demoHtml.tabs}
                        </ul>
                    `,
                    imgs: [],
                    //
                    labels: ['无缝瀑布流','宽高必须一致'],
                    style: {
                        background: 'red'
                    },
                    className: 'BS_Widgets_self_style_2',
                    parent: 'BS_Widgets_self'
                },{
                    code: `
                        <div class="BS_Widgets_self_style_3">
                            <div class="BS_Widgets_self_style_3_box">
                                <div class="BS_Widgets_self_style_3_left_side">
                                    <div class="BS_S_S3_ls_item">
                                        <h1>Hello World</h1>
                                        <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
                                        Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.
                                        The core library is focused on the view layer only, and is easy to pick up and integrate with other
                                        libraries or existing projects. </p>
                                    </div>
                                    <div class="BS_S_S3_ls_item">
                                        <h1>Hello China</h1>
                                        <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
                                        Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.
                                        The core library is focused on the view layer only, and is easy to pick up and integrate with other
                                        libraries or existing projects. </p>
                                    </div>
                                    <div class="BS_S_S3_ls_item">
                                        <h1>Hello Beijing</h1>
                                        <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
                                        Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.
                                        The core library is focused on the view layer only, and is easy to pick up and integrate with other
                                        libraries or existing projects. </p>
                                    </div>
                                    <div class="BS_S_S3_ls_item">
                                        <h1>Hello Shanghai</h1>
                                        <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
                                        Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.
                                        The core library is focused on the view layer only, and is easy to pick up and integrate with other
                                        libraries or existing projects. </p>
                                    </div>
                                    <div class="BS_S_S3_ls_item">
                                        <h1>Hello Kitty</h1>
                                        <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
                                        Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.
                                        The core library is focused on the view layer only, and is easy to pick up and integrate with other
                                        libraries or existing projects. </p>
                                    </div>
                                </div>
                                <div class="BS_Widgets_self_style_3_right_side">
                                    <div class="BS_S_S3_rs_item">
                                        <img src="http://placeimg.com/640/480/any" />
                                    </div>
                                    <div class="BS_S_S3_rs_item">
                                        <img src="http://placeimg.com/640/480/people" />
                                    </div>
                                    <div class="BS_S_S3_rs_item">
                                        <img src="http://placeimg.com/640/480/nature" />
                                    </div>
                                    <div class="BS_S_S3_rs_item">
                                        <img src="http://placeimg.com/640/480/tech" />
                                    </div>
                                    <div class="BS_S_S3_rs_item">
                                        <img src="http://placeimg.com/640/480/animals" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    `,
                    style: {
                        background: 'red'
                    },
                    className: 'BS_Widgets_self_style_3'
                }, {
                    code: `
                    <div class="J_TWidget section" data-widget-type="Slide"
                    data-widget-config="{'navCls':'yslider-stick','contentCls':'yslider-stage','activeTriggerCls':'selected',
                    'delay':0.2,'effect':'fade','easing':'easeBoth','duration':0.8,'autoplay':true}">
                        <div class="yslider-stage">
                            <p>
                                <img width="405" height="220" alt="终极秒杀场" src="http://placeimg.com/640/480/animals"/>

                            </p>
                            <p>

                                    <img width="405" height="220" alt="9折话费" src="http://placeimg.com/640/480/any"/>

                            </p>
                            <p>

                                    <img width="405" height="220" alt="彩票大派送" src="http://placeimg.com/640/480/nature"/>

                            </p>
                            <p>

                                    <img width="405" height="220" alt="限量抢购" src="http://placeimg.com/640/480/people"/>

                            </p>
                            <p>

                                    <img width="405" height="220" alt="周末购" src="http://placeimg.com/640/480/tech"/>

                            </p>

                        </div>
                        <ul class="yslider-stick">
                             <li class="selected">
                                 libraries or existing projects.
                             </li>
                             <li>
                                 libsting projects.
                             </li>
                             <li>
                                libraries or existing projects.
                             </li>
                             <li>
                                 libraries or exi
                             </li>
                             <li>
                                 libraries or existing projects. hen used in combination
                             </li>
                         </ul>
                    </div>
                    `,
                    style: {
                        background: 'red'
                    },
                    className: 'BS_Widgets_self_style_4'
                }, {
                    code: `
                    <div class="J_TWidget section"
                    data-widget-type="Slide" data-widget-config="{'effect':'scrolly','easing':'easeOutStrong','countdown':true}">
                    <div class="ks-switchable-content">
                        <p>
                            <a href="#" target="_blank">
                                <img src="http://img03.taobaocdn.com/imgextra/i3/2141/T2PMXaXhtdXXXXXXXX_!!2141.jpg">
                            </a>
                        </p>
                        <p>
                            <a href="#" target="_blank">
                                <img src="http://img03.taobaocdn.com/imgextra/i3/2141/T2hMtaXddeXXXXXXXX_!!2141.jpg">
                            </a>
                        </p>
                        <p>
                            <a target="_blank">
                                <img src="http://img01.taobaocdn.com/imgextra/i1/2141/T2EXVbXl8cXXXXXXXX_!!2141.jpg">
                            </a>
                        </p>
                        <p>
                            <a target="_blank">
                                <img src="http://www.ilovebag.com.cn/slphoto/myfile/2011/03/normal_634359713559510000.jpg">
                            </a>
                        </p>
                        <p>
                            <a target="_blank">
                                <img src="http://www.ilovebag.com.cn/slphoto/myfile/2011/02/normal_634340788173826250.jpg">
                            </a>
                        </p>
                    </div>
                    <ul class="ks-switchable-nav yslider-stick">
                        <li style="" class="ks-active">
                            <a target="_blank">
                                我是帅
                            </a>
                        </li>
                        <li class="">
                            <a target="_blank">
                                不是吗
                            </a>
                        </li>
                        <li class="">
                            <a target="_blank">
                          你觉得呢
                            </a>
                        </li>
                        <li class="">
                            <a target="_blank">
                              要是你觉得我不帅
                            </a>
                        </li>
                        <li class="">
                            <a target="_blank">
                                那么请你跳出来
                            </a>
                        </li>
                    </ul>
                    </div>
                    `,
                    style: {
                        // background: 'red'
                    },
                    className: 'BS_Widgets_self_style_5'
                }],
                //
            }
        }
    }
});
//
export default effects;
