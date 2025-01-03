<template>
  <div class="loadingio-spinner-spinner-nq4q5u6dq7r" :class="{ invert: invertedstate }">
    <div class="ldio-x2uulkbinbj">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
    

<script>
export default {
    name: 'Spinner',
    props: {
      invertedstate: Boolean
    }

}
</script>

<style type="scss" scoped>
    @keyframes ldio-x2uulkbinbj {
      0% { opacity: 1 }
      100% { opacity: 0 }
    }
    .ldio-x2uulkbinbj div {
      left: 47px;
      top: 24px;
      position: absolute;
      animation: ldio-x2uulkbinbj linear 0.7092198581560283s infinite;
      background: #2e2e38;
      width: 6px;
      height: 12px;
      border-radius: 1.44px / 1.44px;
      transform-origin: 3px 26px;
    }.ldio-x2uulkbinbj div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -0.6447453255963893s;
      background: #2e2e38;
    }.ldio-x2uulkbinbj div:nth-child(2) {
      transform: rotate(32.72727272727273deg);
      animation-delay: -0.5802707930367504s;
      background: #2e2e38;
    }.ldio-x2uulkbinbj div:nth-child(3) {
      transform: rotate(65.45454545454545deg);
      animation-delay: -0.5157962604771115s;
      background: #2e2e38;
    }.ldio-x2uulkbinbj div:nth-child(4) {
      transform: rotate(98.18181818181819deg);
      animation-delay: -0.45132172791747255s;
      background: #2e2e38;
    }.ldio-x2uulkbinbj div:nth-child(5) {
      transform: rotate(130.9090909090909deg);
      animation-delay: -0.38684719535783363s;
      background: #2e2e38;
    }.ldio-x2uulkbinbj div:nth-child(6) {
      transform: rotate(163.63636363636363deg);
      animation-delay: -0.32237266279819465s;
      background: #2e2e38;
    }.ldio-x2uulkbinbj div:nth-child(7) {
      transform: rotate(196.36363636363637deg);
      animation-delay: -0.25789813023855573s;
      background: #2e2e38;
    }.ldio-x2uulkbinbj div:nth-child(8) {
      transform: rotate(229.0909090909091deg);
      animation-delay: -0.19342359767891681s;
      background: #2e2e38;
    }.ldio-x2uulkbinbj div:nth-child(9) {
      transform: rotate(261.8181818181818deg);
      animation-delay: -0.12894906511927787s;
      background: #2e2e38;
    }.ldio-x2uulkbinbj div:nth-child(10) {
      transform: rotate(294.54545454545456deg);
      animation-delay: -0.06447453255963893s;
      background: #2e2e38;
    }.ldio-x2uulkbinbj div:nth-child(11) {
      transform: rotate(327.27272727272725deg);
      animation-delay: 0s;
      background: #2e2e38;
    }
    .loadingio-spinner-spinner-nq4q5u6dq7r {
      width: 20px;
      height: 24px;
      overflow: hidden;
      /* background: #ffffff; */
      &.invert {
        filter: invert(1);        
      }
    }
    .ldio-x2uulkbinbj {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateX(-5px) translateY(-1px) scale(0.28);
      backface-visibility: hidden;
      transform-origin: 0 0;
      text-align: center;
    }
    .ldio-x2uulkbinbj div { box-sizing: content-box; }
</style>