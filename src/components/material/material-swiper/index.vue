<template>
  <div class="body" :style="`height:${imgHeight * contraction}px;`" :class="{ crown: crown }">
    <!-- {{ center }} -->
    <swiper class="swiper-wrap" ref="cardSwiper" :options="swiperOption">
      <swiper-slide
        class="swiper-item"
        :style="`width:${imgWidth}%;height:${imgHeight * contraction}px;padding-right: ${spaceBetween}px;`"
        v-for="(item, index) in list"
        :key="index"
      >
        <img
          class="img"
          :class="{ 'img-radius': imgRadius }"
          :src="item[imgKey]"
          alt
        />
      </swiper-slide>
      <template v-if="pagination">
        <div
          class="swiper-pagination"
          v-for="(item, index) in list"
          :key="index"
          slot="pagination"
        ></div>
      </template>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "material-swiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    // 轮播数据
    list: {
      type: Array,
      required: true,
    },
    // 轮播数据key
    imgKey: {
      type: String,
      required: true,
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      default: false,
    },
    // 播放速度
    speed: {
      type: Number,
      default: 1000,
    },
    // 是否循环
    loop: {
      type: Boolean,
      default: true,
    },
    // 显示轮播点
    pagination: {
      type: Boolean,
      default: false,
    },
    // 图片宽度
    imgWidth: {
      type: Number,
      default: 100,
    },
    // 图片高度
    imgHeight: {
      type: Number,
      default: 150,
    },
    // 图片间距
    spaceBetween: {
      type: Number,
      default: 0,
    },
    // 图片圆角
    imgRadius: {
      type: Boolean,
      default: false,
    },
    // 是否居中,默认true居中,false居左
    center: {
      type: Boolean,
      default: true,
    },
    // 皇冠特效
    crown: {
      type: Boolean,
      default: false,
    },
    // 屏幕收缩比
    contraction: {
      type: Number,
      default: 1,
    },
  },
  watch: {
    list: {
      handler(newList) {
        if (newList && newList.length > 0) {
          // 当数据传入时，再初始化轮播图
          setTimeout(() => {
            this.swiper.init();
          }, 0);
          // this.$nextTick(async () => {
          //   await this.swiper.init();
          // });
        }
      },
      immediate: true,
    },
  },
  computed: {
    // swiper对象
    swiper() {
      return this.$refs.cardSwiper.$swiper;
    },
  },
  data() {
    let vm = this;
    return {
      swiperOption: {
        autoplay: this.autoplay,
        speed: this.speed,
        loop: this.loop,
        centeredSlides: this.center, //默认active slide居左，设置为true后居中
        slidesPerView: "auto", // 设置slider容器能够同时显示的slides数量，默认为1， 'auto'则自动根据slides的宽度来设定数量
        touchRatio: 0.3, // 触摸距离与slide滑动距离的比率
        init: false, // 手动初始化
        // 轮播点设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        },
        on: {
          // 点击回调
          click: function () {
            vm.$emit("clickItem", vm.list[this.realIndex]);
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.body {
  background: transparent;
  width: 100%;
}

.swiper-wrap {
  width: 100%;
  .swiper-item {
    width: 100%;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    .img {
      width: 100%;
      height: 100%;
    }
    .img-radius {
      border-radius: 8px;
    }
  }
}

.crown {
  .swiper-slide:not(.swiper-slide-active) {
    transition: 400ms;
    transform: scale(0.95, 0.9);
  }
}

//重置分页器样式
.swiper-wrap ::v-deep .swiper-pagination-bullet {
  background: #fff !important;
  width: 20px;
  height: 4px;
  border-radius: 7px;
}

.swiper-wrap ::v-deep .swiper-pagination-bullet-active {
  background: #fff !important;
  width: 20px;
  height: 4px;
  border-radius: 7px;
}
</style>