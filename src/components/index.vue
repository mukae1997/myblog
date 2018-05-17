
<template>
    <div id="home-section-container">
        <div id="home-section">
            <div class="wrap">
                <div class="front">
                    <div id = "avatar"> △    </div>
                    <h1>Mukae Records</h1>    
                    <div id="intro">
                        <div id="main-intro">
                            Art & Code. 
                        </div>
                    </div>
                </div>
                <div class="back">

                        <div id="sub-intro"> 
                        One must still have chaos within oneself, to give birth to a dancing star. 
                        </div>
                </div>
            </div>

        </div>
            
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      page: "index"
    };
  }
};
</script>

<style >
#home-section-container {
  padding-top: 100px;
  margin: 0px;
    perspective: 800px; 
    perspective-origin: 50% 50%;
}
#home-section {
  margin: auto;
  display: block;
  /* margin-top: 100px;  */
  padding: 90px 70px;
  color: #4e8aa0;
  max-width: 300px;
  min-width: 188px;
    transition:0.5s all;
}
.wrap{
    position: relative; 
    backface-visibility: hidden;  
    transform-style: preserve-3d;
}
#home-section:hover{ 
  background-color: rgb(1, 55, 73);
    transition:0.5s all;
}
#home-section:hover #home-section-container{ 
  background-color: rgb(1, 55, 73);
    transition:0.5s all;
}

#home-section:hover .wrap{
    transform: rotateY(180deg);
    transition:0.5s all;
}
#sub-intro {
  margin-top: 30px;
  font-size: 7px;
  font-style: italic;
}
#intro {
  margin: 5%;
}
#avatar ,#home-section{
  background-color: rgb(219, 246, 255);

}
#avatar {
  padding: 75px;
  text-align: center;
  border-radius: 100px;
  margin: auto;
  margin-bottom: 50px;
  width: 50px;
  height: 50px;
  border: 2px dashed;
}
.front, .back{
    
    backface-visibility: hidden;
}
.back{
    
    transform: rotateY(180deg);
}
</style>