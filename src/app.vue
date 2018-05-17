<template> 
        <div id="home-container"> 
        <aside>
            <button id="collapse-button" class="hide-side-btn" v-on:click="onCollapse">  </button>
           <!-- <ul id="nav-bar">                
               <li><router-link to="/" >Home</router-link></li> 
               <li><router-link to="/processing" > Demos / p5.js</router-link> </li>
               <li><router-link to="/threejs"> Demos / three.js</router-link> </li>
               <li><router-link to="/about"> About</router-link></li> 
            </ul> -->
            <ul  id="nav-bar">
              <li v-for="rt in $router.options.routes" >
                <router-link v-bind:to="rt.path">{{decoratePath(rt.path)}} </router-link>
              </li>
            </ul>
        </aside>
        
        <div id="router-container" class="hide-side-router">
          <keep-alive exclude="processing">
            <router-view></router-view>
  </keep-alive>
            <footer> MUKAE RECORDS </footer>

        </div>
        </div>  
</template> 
<script>
export default {
  data() {
    return {};
  },
  watch: {},
  methods: {
    decoratePath(str){
      if (str == '/') return "home";
      return str.slice(1);
    },
    onCollapse() {
      $("aside").toggleClass("hide-side-bar");
      $("#router-container").toggleClass("hide-side-router");
      $("#router-container").toggleClass("full-router");
      $("#collapse-button").toggleClass("hide-side-btn");
      $("#collapse-button").toggleClass("full-btn");
    }
  },
  mounted() {
    document
      .querySelector("a[href*='" + location.hash + "']")
      .classList.add("linkActivate"); 
  },
  updated() {
    //   var deactive = document.querySelector("a[class*='linkActivate']");
    //   if (deactive != null) {
    //     deactive.classList.remove("linkActivate");
    //     // console.log("deactive, ", deactive);
    //   }
    var activenode = document.querySelector("a[href*='" + location.hash + "']");
    activenode.classList.add("linkActivate");
    //   console.log("activenode :  ", activenode);
  }
};
</script>

<style> 

body, #home-container, aside{
  
  background-color: #4e8aa0;
}
.full-router{ 
  margin:auto;
  transition:0.2s all;
}
.hide-side-router{
  margin-left: 240px;
  transition:0.2s all;

}
.hide-side-bar {
  margin-left: -200px;
  transition:0.3s all;
}  
.hide-side-btn{
  transition:0.2s all;
  margin-top: 20px;  
  height: 25px;
  width:25px;
  margin-left: 170px;
}
.full-btn{
  transition:0.2s all;
  margin-top: 0;  
  height:100%;
  width:0px;
  margin-left: 200px;
}

#collapse-button {
  float: left;
  border: none;
  color: #4e8aa0; 
  background-color: #b0eaff;
  transition:0.3s all;
  font-weight: bold;
  cursor: pointer;
}
#home-container {
  /*    padding:10px;    */
  color: lightcyan;
  height: 100%;
  margin: 0;
  padding: 0px;
}

#router-container {
  display: block;
  text-align: center;
  padding: 0px;
  margin-top: 0px;
  height:100%;
  transition:0.3s all;
}
.clearfix {
  *zoom: 1;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
section,
footer {
  /*    margin-left:20%;*/
}
aside {
  z-index:10;
  transition:0.5s margin-left;
  position: fixed;
  /*    float:left;*/
  /* border-right: 1px white dashed; */
  width: 200px;
  height: 100%;
  font-size: 4px;
  letter-spacing: 5px;
  line-height: 30px;
}
aside ul {
  list-style: none;
  margin-top: 13%;
  padding-left: 0;
  /* margin-left: -19%; */
}
aside ul li, .canvas-title{
  padding: 12px;
  width: 90%;
  margin: auto;
}
footer {
  margin-top: 100px;
  letter-spacing: 8px;
  font-size: 1px;

  font-style: italic;
  color: lightgray;
  opacity: 0.2;
  text-align: center;
}
li a {
  color: lightcyan;
  text-decoration: none;
  padding: 10px;
}
a:hover {
  color: #4e8aa0;
  background-color: lightcyan;
  opacity: 0.5;
  transition: 0.3s opacity;
  color: #4e8aa0;
}
a:active {
  opacity: 1;
  transition: 0.3s opacity;
}
li:hover {
}
.linkActivate {
  background-color: lightcyan;
  color: #4e8aa0;
}
</style>