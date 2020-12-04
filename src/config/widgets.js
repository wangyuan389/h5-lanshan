/**
 * 组件初始配置数据
 */
import store from '@/store'
import { btnFontStyle, btnBackgroundStyle, sudokuList, fontStyle, backgroundStyle } from './initData'

let widgets = [
    // 图片
    {
        name: 'ls-img',
        label: '图片',
        x: 0,
        y: 0,
        w: 375,
        h: 666,
        img: require('@/assets/widgets/ls-img.png'),
        params: {
            url: 'https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200910-175637-128e.png',
            radius: 0,
        }
    },
    // 长文本
    {
        name: 'ls-text',
        label: '文本',
        x: 0,
        y: 0,
        w: 375,
        h: 70,
        img: require('@/assets/widgets/ls-text.png'),
        params: {
            text: "此生来生都愿识尽世间好人，读尽世间好书，看尽世间好山水，天上风景再好，从不羡慕。",
            color: "#3c3c3c",
            fontSize: 14,
        }
    },
    // 按钮
    {
        name: 'ls-button',
        label: '按钮',
        x: 0,
        y: 0,
        w: 375,
        h: 50,
        img: require('@/assets/widgets/ls-text.png'),
        params: {
            width: 100,
            height: 50,
            radius: 0,
            text: "测试按钮",
            fontStyle: btnFontStyle,
            backgroundStyle: btnBackgroundStyle,
        }
    },
    // 标签页          
    {
        name: 'ls-tabs',
        label: '标签页',
        x: 0,
        y: 0,
        w: 375,
        h: 70,
        img: require('@/assets/widgets/ls-text.png'),
        params: {

        }
    },
    // 九宫格
    {
        name: 'ls-sudoku',
        label: '九宫格',
        x: 0,
        y: 0,
        w: 375,
        h: 79,
        img: require('@/assets/widgets/ls-img.png'),
        params: {
            width: 100,
            radius: 0,
            gutter: 12,
            padding: 2,
            shadow: false,
            layouts: [4],
            fontStyle: fontStyle,
            backgroundStyle: backgroundStyle,
            list: sudokuList,
        }
    },
    // 轮播
    {
        name: 'ls-swiper',
        label: '轮播',
        x: 0,
        y: 0,
        w: 375,
        h: 180,
        img: require('@/assets/widgets/ls-swiper.png'),
        params: {
            autoplay: true,
            loop: true,
            center: true,
            pagination: true,
            imgRadius: false,
            crown: false,
            imgWidth: 100,
            imgHeight: 180,
            spaceBetween: 0,
            list: [
                {
                    name: "轮播1",
                    url: "https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200408-165620-bd6c.png",
                    webPath: "",
                    wechatPath: "",
                },
                {
                    name: "轮播2",
                    url: "https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200220-111024-dded.png",
                    webPath: "",
                    wechatPath: "",
                },
                {
                    name: "轮播3",
                    url: "https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200602-134906-2aed.png",
                    webPath: "",
                    wechatPath: "",
                },
            ],
            // 接口配置数据
            dataType: 0,
            source: {
                id: '',
                data: []
            }
        }
    },
    // 瀑布流
    {
        name: 'ls-waterfall',
        label: '瀑布流',
        x: 0,
        y: 0,
        w: 375,
        h: 772,
        img: require('@/assets/widgets/ls-swiper.png'),
        params: {
            column: 2,
            gutter: 10,
            info: [],
            // 静态数据
            list: [
                {
                    name: '国潮',
                    url: "http://116.62.142.85:8090/flow-1.jpg",
                },
                {
                    name: '天涯海角',
                    url: "http://116.62.142.85:8090/flow-2.jpg",
                },
                {
                    name: '11.11',
                    url: "http://116.62.142.85:8090/flow-3.jpg",
                },
                {
                    name: '重阳',
                    url: "http://116.62.142.85:8090/flow-4.jpg",
                },
                {
                    name: '端午',
                    url: "http://116.62.142.85:8090/flow-5.jpg",
                },
                {
                    name: '中秋',
                    url: "http://116.62.142.85:8090/flow-6.jpg",
                },
            ],

            // 接口配置数据
            dataType: 0,
            source: {
                id: '',
                data: []
            }
        }
    },
    // 页眉
    {
        name: 'ls-top-bar',
        label: '页眉',
        x: 0,
        y: 0,
        w: 375,
        h: 48,
        img: require('@/assets/widgets/ls-img.png'),
        params: {
            text: '活动页',
            back: true,
            fontStyle: fontStyle,
            backgroundStyle: backgroundStyle,
        }
    },
]

// 注册所有组件
store.commit('setWidgetList', widgets)

export default widgets


