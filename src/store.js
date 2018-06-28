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
    },
    //
    self: {
        style_5: {
            'autoplay': false,
            'navCls':'ks-switchable-nav',
            'contentCls':'ks-switchable-content',
            'effect': 'scrolly',
            'easing': 'easeOutStrong',
            'steps':1,
            'circular': true,
            'prevBtnCls': 'prev_btn',
            'nextBtnCls': 'next_btn',
            'disableBtnCls': 'disable'
        },
        style_6: {
            'autoplay': false,
            'navCls':'ks-switchable-nav',
            'contentCls':'ks-switchable-content',
            'effect': 'scrolly',
            'easing': 'easeOutStrong',
            'steps':1,
            'circular': false,
            'prevBtnCls': 'mall-prev',
            'nextBtnCls': 'mall-next',
            'disableBtnCls': 'disable'
        },
        style_7: {
            'autoplay': true,
            'navCls':'ks-switchable-nav',
            'contentCls':'ks-switchable-content',
            'effect': 'scrolly',
            'easing': 'easeBoth',
            'steps':1,
            'circular': true,
            'prevBtnCls': 'prev_btn',
            'nextBtnCls': 'next_btn',
            'disableBtnCls': 'disable',
            // 'duration': 0.1,
            // 'countdown': true,
            // 'countdownFromStyle': 'border:2px solid red',
            // 'delay': 10,
            'interval': 5,
            'activeTriggerCls': 'bs-active'
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

import image1 from './assets/images/1.jpg';
import image2 from './assets/images/2.jpg';
import image3 from './assets/images/3.jpg';
import image4 from './assets/images/4.jpg';
import image5 from './assets/images/5.jpg';
import image6 from './assets/images/6.jpg';
import image7 from './assets/images/7.jpg';
import image8 from './assets/images/8.jpg';
import image9 from './assets/images/9.jpg';
import image10 from './assets/images/10.jpg';
import image11 from './assets/images/11.jpg';
import image12 from './assets/images/12.jpg';
import image13 from './assets/images/13.jpg';
//
let effects = new Vuex.Store({
    //
    getters: {
        getImgList: (state) => {
            return state.imgList;
        }
    },
    //
    state: {
        //
        imgList: [],
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
                                <img alt="" src=${image6}/>
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
                            <li><img src="http://fpoimg.com/150x180?bg_color=C90000&text_color=cccccc&"></li>
                            <li><img src="http://fpoimg.com/150x180?bg_color=4A59FF&text_color=cccccc&"></li>
                            <li><img src="http://fpoimg.com/150x180?bg_color=00eeee&text_color=cccccc&"></li>
                            <li><img src="http://fpoimg.com/150x180?bg_color=666666&text_color=cccccc&"></li>
                            <li><img src="http://fpoimg.com/150x180?bg_color=eeeeee&text_color=cccccc&"></li>
                            <li><img src="http://fpoimg.com/150x180?bg_color=e5b72a&text_color=cccccc&"></li>
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
                    'delay':0.2,'effect':'fade','easing':'easeBoth','duration':0.8,'autoplay':false}">
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
                    <div  id="J_MallSlide" class="J_TWidget"
                    data-widget-type="Carousel"
                    data-widget-config=${JSON.stringify(widgetConfig.self.style_6)}>
                        <div id="J_Carousel" class="clearfix" >
                            <ul class="ks-switchable-content">
                                <li class="big-piclist"></li>
                                <li class="big-piclist"></li>
                            </ul>
                        </div>
                        <ul class="ks-switchable-nav">
                            <li  class="ks-active BS_W_s_s_6_slice_1">
                                <span class="BS_W_s_s_6_slice_bg"><img src="http://placeimg.com/300/300/people"></span>
                                <span class="BS_W_s_s_6_slice_mask"></span>
                                <h2>DARK 1</h2>
                            </li><li  class="BS_W_s_s_6_slice_2">
                                <span class="BS_W_s_s_6_slice_bg"><img src="http://placeimg.com/300/300/animals"></span>
                                <span class="BS_W_s_s_6_slice_mask"></span>
                                <h2>DARK 2</h2>
                            </li>
                        </ul>
                    </div>
                    `,
                    style: {
                        // background: 'red'
                    },
                    className: 'BS_Widgets_self_style_6',
                    labels: ['可以设置自动播放或者鼠标落上交互','基于淘宝Carousel修改']
                },{
                    code: `
                    <div  id="J_MallSlide" class="J_TWidget"
                    data-widget-type="Carousel"
                    data-widget-config=${JSON.stringify(widgetConfig.self.style_5)}>
                        <a title="上一页" href="javascript:void(0);" hidefocus="true" class="prev_btn"><img src="http://img03.taobaocdn.com/imgextra/i3/456989075/TB2ychobFXXXXb6XXXXXXXXXXXX-456989075.png" width="20" style="margin: 0 auto;"></a>
                        <a title="下一页" href="javascript:void(0);" hidefocus="true" class="next_btn"><img src="http://img02.taobaocdn.com/imgextra/i2/456989075/TB2oL4mbFXXXXXtXpXXXXXXXXXX-456989075.png" width="20" style="margin: 0 auto;"></a>
                        <div class="BS_W_s_s_6_banner_desc"></div>
                        <span class="BS_W_s_s_6_logo"></span>
                        <div id="J_Carousel" class="clearfix" >
                            <ul class="ks-switchable-content">
                                <li class="big-piclist">
                                    <img src="http://placeimg.com/700/466/people" />
                                </li>
                                <li class="big-piclist">
                                    <img src="http://placeimg.com/700/466/tech" />
                                </li>
                                <li class="big-piclist">
                                    <img src="http://placeimg.com/700/466/animals" />
                                </li>
                            </ul>
                            <ul class="ks-switchable-nav">
                                <li class="ks-active">
                                    <img src='http://placeimg.com/700/466/people' />
                                    <p>
                                        The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript.
                                    </p>
                                    <span class="BS_W_s_s_6_logo">
                                        <img src="https://img.alicdn.com/imgextra/i3/2165860564/TB2fJA8jljTBKNjSZFwXXcG4XXa_!!2165860564.png">
                                    </span>
                                </li>
                                <li >
                                    <img src='http://placeimg.com/700/466/tech' />
                                    <p>
                                        The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript.
                                    </p>
                                    <span class="BS_W_s_s_6_logo">
                                        <img src="https://img.alicdn.com/imgextra/i1/2165860564/TB2AyisXxtnkeRjSZSgXXXAuXXa_!!2165860564.png">
                                    </span>

                                </li>
                                <li>
                                    <img src='http://placeimg.com/700/466/animals' />
                                    <p>
                                        The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript.
                                    </p>
                                    <span class="BS_W_s_s_6_logo">
                                        <img src="https://img.alicdn.com/imgextra/i4/2165860564/TB2XqYmjmMmBKNjSZTEXXasKpXa_!!2165860564.png">
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    `,
                    style: {
                        // background: 'red'
                    },
                    className: 'BS_Widgets_self_style_5'
                }, {
                    code: `
                    <div id="J_MallSlide" class="J_TWidget" data-widget-type="Carousel"
                    data-widget-config=${JSON.stringify(widgetConfig.self.style_7)}>
                        <div id="J_Carousel" class="clearfix">
                        <ul class="ks-switchable-content">
                            <li class=""></li>
                            <li class=""></li>
                            <li class=""></li>
                            </ul>
                            <ul class="ks-switchable-nav">
                                <li class="bs-active">
                                    <div class="BS_s_s_7_left_side">
                                        <div>
                                        <h2>Hello picture 1</h2>
                                        Column span. Value can be between 0 and 24. When 0, it equals to
                                        </div>
                                    </div>
                                    <div class="BS_s_s_7_right_side">
                                        <div class="BS_s_s_border_1 BS_s_s_7_bg"></div>
                                        <div class="BS_s_s_border_2 BS_s_s_7_bg"></div>
                                        <div class="BS_s_s_border_3 BS_s_s_7_bg"></div>
                                        <img src='http://placeimg.com/700/466/tech' />
                                        <span class="BS_s_s_7_vertical_line"></span>

                                    </div>
                                    <span class="BS_s_s_7_page BS_s_s_7_page_1">
                                        01
                                        <b></b>
                                    </span>
                                </li>
                                <li>
                                    <div class="BS_s_s_7_left_side">
                                        <div>
                                        <h2>Hello picture 2</h2>
                                        Column span. Value can be between 0 and 24. When 0, it equals to
                                        </div>

                                    </div>

                                    <div class="BS_s_s_7_right_side">
                                        <div class="BS_s_s_border_1 BS_s_s_7_bg"></div>
                                        <div class="BS_s_s_border_2 BS_s_s_7_bg"></div>
                                        <div class="BS_s_s_border_3 BS_s_s_7_bg"></div>
                                        <img src='http://placeimg.com/700/466/animals' />
                                        <span class="BS_s_s_7_vertical_line"></span>
                                    </div>
                                    <span  class="BS_s_s_7_page_2 BS_s_s_7_page">
                                        02
                                        <b></b>
                                    </span>
                                </li>
                                <li>
                                    <div class="BS_s_s_7_left_side">
                                        <div>
                                        <h2>Hello picture 3</h2>
                                        Column span. Value can be between 0 and 24. When 0, it equals to
                                        </div>

                                    </div>
                                    <div class="BS_s_s_7_right_side">
                                        <div class="BS_s_s_border_1 BS_s_s_7_bg"></div>
                                        <div class="BS_s_s_border_2 BS_s_s_7_bg"></div>
                                        <div class="BS_s_s_border_3 BS_s_s_7_bg"></div>
                                        <img src='http://placeimg.com/700/466/people' />
                                        <span class="BS_s_s_7_vertical_line"></span>

                                    </div>
                                    <span  class="BS_s_s_7_page_3 BS_s_s_7_page">
                                        03
                                        <b></b>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    `,
                    style: {
                        // background: 'red'
                    },
                    className: 'BS_Widgets_self_style_7'
                }, {
                    code: `
                    <div  id="J_MallSlide" class="J_TWidget"
                    data-widget-type="Carousel"
                    data-widget-config="{'navCls':'ks-switchable-nav','contentCls':'ks-switchable-content','effect': 'scrolly',
                    'easing': 'easeOutStrong', 'steps':1, 'viewSize': [700], 'circular': true,
                    'prevBtnCls': 'mall-prev', 'nextBtnCls': 'mall-next', 'disableBtnCls': 'disable','autoplay':true}">
                        <div id="J_Carousel" class=" BS_Widgets_content clearfix" >
                            <ul class="ks-switchable-content">
                                <li class="big-piclist">
                                    <img src="http://fpoimg.com/700x400?text=Demo1">
                                </li>
                                <li class="big-piclist">
                                    <img src="http://fpoimg.com/700x400?text=Demo2">
                                </li>
                                <li class="big-piclist">
                                    <img src="http://fpoimg.com/700x400?text=Demo3">
                                </li>
                            </ul>
                            <a title="上一页" href="javascript:void(0);" hidefocus="true" class="mall-prev"><</a>
                            <a title="下一页" href="javascript:void(0);" hidefocus="true" class="mall-next">></a>
                        </div>
                        <ul class="ks-switchable-nav">
                            <li class="slice ks-active">
                                <div class="slice_bg">
                                    <img src="http://fpoimg.com/700x400?bg_color=BFC5FF&text=Demo1">
                                    <span></span>
                                </div>
                                <b></b>
                            </li>
                            <li class="slice">
                                <div class="slice_bg">
                                    <img src="http://fpoimg.com/700x400?bg_color=00eeee&text=Demo2">
                                    <span></span>
                                </div>
                                <b></b>
                            </li>
                            <li class="slice">
                                <div class="slice_bg">
                                    <img src="http://fpoimg.com/700x400?bg_color=C90000&text=Demo3">
                                    <span></span>
                                </div>
                                <b></b>
                            </li>
                        </ul>

                    </div>
                    `,
                    style: {
                        // background: 'red'
                    },
                    className: 'BS_Widgets_self_style_8'
                }],
                //
            }
        }
    },
    //
    mutations: {
        getImg(state, src) {
            //
            for (let i =0; i < src.length; i++) {
                state.imgList.push(src[i]);
            }
            // state.imgList.push(src);
            console.log(state.imgList);
        },
        //
        test: function() {

        }
    }

});
//
console.log(this);

export default effects;
