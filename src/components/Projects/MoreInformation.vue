<template>
  <section class="section more_information" id="details">

    <div 
        class="more_information_container"
        v-for="(project, index) in projects"
        :key="index"
        v-show="status === project.id"
    >
    
      <div class="close" @click="changeStatus()">
        <a href="#projects"><i class="fas fa-times"></i></a>
      </div>

      <div class="section_title">
          <h3>{{ project.name }}</h3>
      </div>

      <div class="more_information_content container">

        <div class="card">
            
          <div class="card-image">
              <b-carousel
                :indicator="true"
                :indicator-background="true"
                :indicator-inside="true"
                :indicator-mode="'hover'"
                :indicator-position="'is-bottom'"
                :indicator-style="'is-lines'"
                :icon-pack="'fas'">
                <b-carousel-item v-for="(img, i) in project.carousel" :key="i">
                    <section>
                      <figure class="image is-1by1">
                          <img :src="require(`../../assets/projects/${img}`)">
                      </figure>
                    </section>
                </b-carousel-item>
              </b-carousel>
          </div>

          <div class="card-footer">
              <a class="card-footer-item" target="_blank" :href="project.preview" >Preview</a>
              <a class="card-footer-item" target="_blank" :href="project.source" >Source</a>
          </div>

        </div>

        <div class="info_details">

          <div class="info skills_container">
            <h4>Skills</h4>
  
            <div class="skills">
              <ul>
                  <li 
                      v-for="(skill, index) in project.skill"
                      :key="index"
                      class="skill"
                  >{{ skill }}</li>
              </ul>
            </div>
          </div>

          <div class="info description_container">
            <h4>Description</h4>

            <div class="description">
                <div 
                v-for="(desc, index) in project.description"
                :key="index"
                class="desc"
                >{{ desc }}</div>
            </div>
          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script>

export default {
    props: ['projects', 'status', 'changeStatus'],

}

</script>

<style scoped>

.more_information{
  border-top: 2px solid rgba(0, 0, 0, .3);
  border-bottom: 2px solid rgba(0, 0, 0, .3);
  margin-top: 50px;
  background: #fff;
  padding-top: 20px;
  padding-bottom: 20px
}

.more_information .close{
  position: relative;
  top: 10px;
  float: right;
  font-size: 18px;
  padding: 0px;
}

.more_information .close i{
  text-align: end;
}

.more_information_container .more_information_content{
  display: flex;
  align-items: center;
}

.card{
  width: 500px;
  margin-bottom: 0;
}

.card .card_image img{
  width: 100%;
}

.info_details{
  width: calc(100% - 300px);
  padding: 0px 40px;
}

.info_details h4{
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.info{
  font-size: 20px;
}

.info_details{
  padding-right: 100px;
  padding-left: 100px;
}

.info_details .skills_container{
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.info_details .description_container .description .desc{
  text-align: justify;
  line-height: 32px;
  padding: 15px 0;
}

@media screen and (max-width: 1230px){
  .info_details{
    padding-right: 50px;
    padding-left: 50px;
  }
}

@media screen and (max-width: 900px){

  .card{
    width: 300px;
  }

  .info_details{
    padding-right: 20px;
  }

  .info_details .skills_container{
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .info_details .skills_container .skills .skill{
    padding: 8px;
  }

  .info_details .description_container{
    margin-top: 20px;
  }

  .info_details .description_container .description .desc{
    padding: 10px 0;
    line-height: 28px;
  }

}

@media screen and (max-width: 700px){

  .info_details{
    width: 100%;
  }

  .info_details .skills_container{
      margin-top: 30px;
      margin-bottom: 10px;
  }

  .info_details .description_container{
    margin-top: 30px;
  }

  .more_information_container .more_information_content{
    flex-direction: column;
  }

  .card{
    margin-bottom: 0;
  }

  .info_details{
    padding-right: 30px;
    padding-left: 30px;
  }
}

</style>