import { mapGetters, mapMutations } from "vuex";
import { isNull } from '@/utils/tools.js'
import wx from 'weixin-js-sdk';
import { remoteGetById } from "@/api/remote";
import { getResultData } from "@/utils/source";

export default {
    props: {
        item: {
            type: Object,
            require: true
        },
        view: {
            type: Boolean,
            default: false
        },
        contraction: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            // params: _.cloneDeep({})
        }
    },
    computed: {
        ...mapGetters(["widgetList", "viewProject"]),
        itemParams() {
            return this.item.params
        },
        baseParams() {
            let item = this.widgetList.find(item => item.name == this.item.name)
            return this._.cloneDeep(item.params)
        },
        params() {
            return this.item.params
        }
    },

    methods: {
        ...mapMutations(["selectedPage"]),
        // 跳转
        jump(data) {
            console.log('jump');
            console.log(data);

            // 跳转外链
            if (data.type == 1) {
                let a = document.createElement("a");
                a.setAttribute("href", data.pathData);
                a.click();
                document.getElementsByTagName("body")[0].appendChild(a);
            }

            // 跳转内部页面
            if (data.type == 2) {
                // 预览模式
                if (this.view) {
                    let index;
                    this.viewProject.pages.map((page, i) => {
                        if (page.id == data.pathData)
                            index = i
                    })
                    this.$router.push({ name: 'custom' + index })
                    // 开发模式
                } else {
                    this.selectedPage(data.pathData)
                }
            }

            // 跳转内部小程序
            if (data.type == 3) {

            }
        },
        // 获取远程数据
        async getSourceData() {
            let res = await remoteGetById({ id });
            this.params.source.data = await getResultData(res.data);
        }
    }
}