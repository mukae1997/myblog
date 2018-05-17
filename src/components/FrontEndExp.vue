<template>
    <div id="fee-container">
        <div id="upanddown" class="lab">
            <div class="lab-title"> sub & sup </div>
            <pre>
        my mood goes <sup>up</sup> and <sub>down</sub>
        and <sup>up</sup> and <sub>down</sub>
        and <sup>up</sup> and <sub>down and <sub>down and <sup>up</sup></sub></sub>
        
and <sub> <sub><sub><sub>down</sub></sub></sub></sub>
                    and <sup><sup><sup><sup>up</sup></sup></sup></sup>
            and  <sub><sub><sub><sub><sub><sub><sub><sub><sub>down...</sub></sub></sub></sub></sub></sub></sub></sub></sub>
                
                </pre>
        </div>
    </div>

</template>

<script> 
export default {
  data() {
    return {
    };
  },
  mounted() {
  }
};
</script>

<style scoped>
div {
  /* border: 1px white dashed;  */
}
#fee-container{ 
  padding: 50px 25px;
}
#upanddown{
    font-size: 8px;
    letter-spacing: 8px;
    text-align: center;
    word-wrap: normal;
}
.lab{
    position: relative;
    padding: 50px 50px; 
    border-right:1px white dashed;
    border-bottom:1px white dashed;
}
.lab-title{
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px 10px 15px 15px;
    border-right:1px white dashed;
    border-bottom:1px white dashed;
    /* border-radius:30px; */
    /* box-shadow: 2px 2px 2px 2px rgb(73, 73, 73);  */
}
</style>