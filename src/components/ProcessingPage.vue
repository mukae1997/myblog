<template>
    <div id="ps-container" v-bind:style="{backgroundColor: bgc}">
<!--        <div  ref='container'></div>-->
        <aside id="box-container" v-bind:style="{backgroundColor: bgc}">
          <ul>
            <li v-for="(box, index) in boxes" class="canvas-title"
                @click="onTitleClick(box, index)"
                 v-bind:style="{backgroundColor: box.bg}">
                    <{{box.name}}>  
            </li>
          </ul>  
            
        </aside>
        <div id="canvas-container">
          
            <canvas-box v-bind:canvas="canvasObj">  </canvas-box>
        </div>
    </div>

</template>

<script>
import p5 from "@/processing/p5.min.js";
import pjs from "@/processing/processing.min.js";
import Sketches from "@/processing";
import CanvasBox from "@/components/CanvasBox";
export default {
  name: "processing",
  components: {
    "canvas-box": CanvasBox
  },
  data() {
    return {
      boxes: [],
      bgc: "cadetblue",
      sketchptr: 0,
      sketches: []
    };
  },
  computed: {
    canvasObj() {
      console.log(this.sketchptr);
      return this.sketches[this.sketchptr];
    }
  },
  methods: {
    onTitleClick(box, i) {
      this.bgc = box.bg;
      this.sketchptr = i;
      //  console.log(this.sketchptr)
    }
  },
  created() {
    this.sketches = Sketches.sketches;
    for (var i = 0; i < this.sketches.length; i++) {
      this.boxes.push({
        name: this.sketches[i].name,
        func: this.sketches[i].func,
        bg: this.sketches[i].bg
      });
    }
    this.bgc = this.sketches[0].bg;
  },
  mounted() {
    if (true) {
      // var sketch = function(p) {
      //   p.setup = function() {
      //     p.createCanvas(100, 100);
      //     p.background(0);
      //   };
      // };

      var el = document.querySelector("#box-container");
      var nodes = el.children;

      console.log(this.sketches);
      for (var i = 0; i < this.sketches.length; i++) {
        // new p5(this.sketches[i].func, nodes[i]);
      }
    }
  }
};
</script>

<style>
div {
  border: 1px white dashed;
}
#ps-container {
  margin: 0 auto;
  padding-top: 100px;
  padding: 38px 25px;
  color: cadetblue;
  text-align: left;
  height: 100%;
  width: 100%;
}
#ps-container > div {
  height: 100%;
}
#box-container {
  margin-left: -12px;
  float: left;
  /* width:25%; */
}
#canvas-container {
  float: left;
  width: 60%;
  margin-left: 5%;
}
.canvas-box {
  vertical-align: top;
  /* display:  inline-block; */
  font-size: 3px;
  margin-right: 15px;
  margin-bottom: 15px;
  /*    background-color: azure;*/
  width: auto;
  height: auto;
  color: white;
  text-align: center;
}
.canvas-title {
}
</style>