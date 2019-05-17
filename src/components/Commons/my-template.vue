<template>
  <div id="mytemplate" :style="{width:width,height:height}">
    <div class="my-head">
      <span id='title'>{{title}}</span>
      <slot name="my-head"></slot>
    </div>
    <div class="my-content">
      <slot name="my-content"></slot>
    </div>
    <div class="my-foot">
      <slot name="my-foot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      default: "100%"
    },
    height: {
      default: "100%"
    },
    title: {
      default: "提示"
    }
  },
}
</script>

<style lang="scss" scoped>
#mytemplate {
  position: relative;
  min-height: 200px;
  box-shadow: 0 0 5px 5px rgba(204, 200, 200, 0.616);
  border-radius: 2px;
}
.my-head{
    height:30px;
    width: 100%;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom:5px;
}
.my-content{
    margin-bottom:20px;
    padding: 0 5px;
    box-sizing: border-box;
}
.my-foot{
    width: 100%;
    height: 40px;
}
table{
    width:100%;
}
#title{
 font-size: 18px;
font-weight:600;
}
tr{
    height: 40px;
    text-align:center;
    line-height: 40px;
    th{
         font-size: 18px;
        font-weight:600;
    }
    td{
        font-size: 15px;
    }
    &:nth-child(2n-1){
         background: rgba(231, 239, 241, 0.568);
    }
}

</style>