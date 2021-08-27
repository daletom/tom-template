import Vue from 'vue';
import VueImgix from 'vue-imgix';

Vue.use(VueImgix, {
    domain: "tom.imgix.net",
    defaultIxParams: {
        auto: 'format,compress',
    },
})
