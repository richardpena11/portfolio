<template>
  <header>
      <div class="nav">
        <a href="#summary" class="nav_item">About</a>
        <a href="#projects" class="nav_item">Portfolio</a>
        <a href="#skills" class="nav_item">Skills</a>
        <a href="https://docdro.id/PuxyNVE" target="_blank" class="nav_item nav_item_icon">Resume <i class="fas fa-external-link-alt"></i></a>
      </div>

      <div class="header">

        <div class="title_container">
          <div class="border_container">
            <h1 class="title">Richard Pena</h1>
            <h2 class="subhead">Front-End Web Developer</h2>
          </div>
        </div>

      </div>

  </header>
</template>

<script>
export default {

}
</script>

<style>

  header{
    background: url('../../assets/header-banner.png') #634975;
    background-size: cover;
    font-family: 'Roboto', sans-serif;
  }

  .nav {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
  }

  .nav .nav_item{
    display: inline-block;
    margin: 15px 20px;

    cursor: pointer;
    font-size: 20px;
    color: #fff !important;
  }

  .nav .nav_item_icon{
    display: flex;
    align-items: center;
  }

  .nav .nav_item .fa-external-link-alt{
    padding-left: 5px;
    margin-right: 20px;
    font-size: 18px;
  }

  .header{
    height: 425px;
  }

  .title_container{
    text-align: center;
    width: 600px;
    margin: 100px auto;
    padding: 11px;

    border: 2px solid rgba(255, 255, 255, .5);
    color: #fff;
  }  
  
  .border_container{
    border: 2px solid rgba(255, 255, 255, .2);
    padding: 30px;
  }

  .title_container .title{
    color: #fff;
    padding: 20px;
    font-size: 64px;
  }

  .title_container .subhead{
    font-weight: 300;
    padding: 0px 5px;
    font-size: 36px;
  }

  @media screen and (max-width: 700px){
    .header{
      height: 200px;
    }

    .title_container{
      width: 430px;
      margin: 30px auto;
      padding: 0px;
      border: none;
    }  
    
    .border_container{
      border: none;
      padding: 0;
    }

    .title_container .title{
      padding: 0px;
      margin-bottom: 0px !important;
      margin-top: 20px;
      font-size: 56px;
    }

    .title_container .subhead{
      font-size: 28px;
      padding: 0;
    }
  }

  @media screen and (max-width: 700px){

    .nav .nav_item{
      margin: 15px 8px;

      cursor: pointer;
      font-size: 18px;
      color: #fff !important;
    }

    .nav .nav_item .fa-external-link-alt{
      margin-right: 10px;
      font-size: 14px;
    }

    .header{
      height: 175px;
    }

    .title_container{
      width: 300px;
    }  

    .title_container .title{
      font-weight: 400;
      font-size: 48px;
    }

    .title_container .subhead{
      font-size: 24px;
      padding: 0;
    }
  }
  
</style>