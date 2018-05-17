<template>
    <div id="canvas-box" ref="my">

    </div>

</template>

<script> 
import p5 from "@/processing/p5.min.js";
export default {
  data() {
    return {
    };
  },
  props:['canvas'],
  watch:{
    canvas: function(val){ 
      var node = this.$refs.my;
      node.removeChild(node.lastChild);
      // new p5(this.canvas.func, node);
      // console.log(node.lastChild)  
    }
  },
  updated(){
    console.log(this.canvas)
  },
  mounted() {
      var node = this.$refs.my;
      // new p5(this.canvas.func, node);  
  }
};
</script>

<style>
div {
  /* border: 1px white dashed; */ 
}
</style>