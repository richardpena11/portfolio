<template>
    <section class="section container" id="skills">

        <div class="section_title">
            <h3>Skills</h3>
        </div>

        <div class="skills_container">

            <div 
                class="skill"
                v-for="(skill, index) in skills" :key="index"
            >
                <img :src="require(`../../assets/skills/${skill.ico}`)" alt="">
                <span>{{ skill.name }}</span>
            </div>

        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            skills: []
        }
    },

    created(){

        this.$http.get('skills.json')
        .then( response => response.json())
        .then( data => {
            this.skills = data
        })

    }
}
</script>

<style>

.skills_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.skills_container .skill{
    padding: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.skills_container .skill img{
    width: 80px;
    margin-bottom: 10px;
}

.skills_container .skill span{
    font-size: 20px;
}

</style>