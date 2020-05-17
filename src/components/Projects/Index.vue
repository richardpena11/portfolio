<template>

<div class="projects_container" id="projects">

    <section class="section project">

        <div class="section_title">
            <h3>Portfolio</h3>
        </div>
        
        <div class="container project_content">

            <b-carousel-list 
                v-model="test" 
                :data="projects" 
                :items-to-show="updateWidth()"
                :items-to-list="1"
                :icon-size="'is-medium'"
                :icon-pack="'fa'"
                :repeat="true"
            >
                <template slot="item" slot-scope="props">
                    
                    <div class="card">
                        
                        <div class="card-image">
                            <figure class="image is-1by1">
                                <img :src="require(`../../assets/projects/${props.list.mainImg}`)">
                            </figure>
                        </div>

                        <div class="card-title">
                            <h4>{{ props.list.name }}</h4>
                        </div>

                        <div class="card-content">
                            <div class="content">
                                <ul>
                                    <li 
                                        v-for="(skill, index) in props.list.skill"
                                        :key="index"
                                    >{{ skill }}</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card-footer">
                            <a class="card-footer-item" @click="openLink(props.list.preview)">Preview</a>
                            <a class="card-footer-item" @click="openLink(props.list.source)">Source</a>
                            <a class="card-footer-item card-footer-details" @click="changeStatus(props.list.id)">Details</a>
                        </div>

                    </div>

                </template>
            </b-carousel-list>

        </div>

    </section>

    <compMoreInformation
        :projects="projects"
        :status="status"
        :changeStatus="changeStatus"
        v-if="status"
    />

</div>


</template>

<script>
import compMoreInformation from './MoreInformation.vue'

export default {
    data() {
        return {
            test: 0,
            projects: [],
            status: '',
            windowWidth: window.innerWidth
        }
    },

    methods: {
        changeStatus(id){
            if(this.status === id){
                this.status = ""
            } else{
                this.status = id
                window.scrollTo(0, 1600);
            }
        },

        openLink(link){
            window.open(link,'_blank')
        },

        updateWidth(){
            if(this.windowWidth >= 1250){
                return 4.1
            } else if(this.windowWidth >= 920){
                return 3.1
            } else if(this.windowWidth >= 630){
                return 2.1
            } else if(this.windowWidth >= 500){
                return 1.5
            } else{
                return 1.1
            }
        }
    },

    components:{
        compMoreInformation
    },
    
    created(){

        this.$http.get('projects.json')
        .then( response => response.json())
        .then( data => {
            this.projects = data
        })

    },

    mounted(){
        window.addEventListener('resize', () => this.windowWidth = window.innerWidth)
    }
}
</script>

<style>

/* new card */

.projects_container{
    width: 100%;
}

.project_content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.carousel-list{
    margin-left: 10px;
}

.carousel-slides .carousel-slide{
    margin: 0;
}

.card{
    width: 95%;
    border-radius: 12px;
    border: 1px solid #000;
}

.card:hover{
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, .5);
}

.card .card-image img{
    border-radius: 12px;
}

.card .card-image{
    border-bottom: 2px solid rgba(0, 0, 0, .1);
}

.card-title h4{
    font-weight: 600;
    padding-top: 10px;
    font-size: 22px;
    text-align: center;
}

.card-content{
    min-height: 88px;
    padding: 10px !important;
}

.card-content .content ul{
    display: flex;
    align-content: center;
    align-items: center;
    margin: 0;
}

.card-content .content ul li{
    display: inline-block;
    padding: 5px 10px !important;
    margin: 0;
}

ul{
    justify-content: space-around;
    list-style: none !important;
    display: flex;
    flex-wrap: wrap;
}

ul li{
    padding: 5px 10px;
}

.card .card-footer{
    display: flex;
    flex-wrap: wrap;
}

@media screen and (max-width: 630px){
    .carousel-list{
        margin-left: 20px;
    }
}

@media screen and (max-width: 348px){
    .card .card-footer .card-footer-details{
        border-top: 1px solid #dbdbdb;
    }
}

</style>