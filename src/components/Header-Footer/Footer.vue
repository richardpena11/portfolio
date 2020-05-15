<template>
    <footer>
        <div class="container footer_container">

            <div class="footer_info">
                <span class="name">Richard Pena</span>
                <span class="email">RichardPena1102@Gmail.com</span>
                <span class="address">Altamonte Springs, FL <br> United States</span>
                <span class="phone">(407) 755-9648</span>
            </div>

            <div class="footer_social">
                <a href="https://www.linkedin.com/in/richard-pena-b265721a3" target="_blank" class="social_link">
                    <i class="fab fa-linkedin"></i>
                    <span>Linked In</span>
                </a>

                <a href="https://github.com/richardpena11" target="_blank" class="social_link">
                    <i class="fab fa-github"></i>
                    <span>GitHub</span>
                </a>

                <a href="https://docdro.id/PuxyNVE" target="_blank" class="social_link">
                    <i class="fas fa-file"></i>
                    <span>Resume</span>
                </a>
            </div>

        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

footer{
    background: #2f232a;
}

.footer_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
}

.footer_info{
    width: 40%;
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 20px;
}

.footer_info > span{
    font-weight: 300;
    margin-top: 15px;
}

.footer_info .name{
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 16px;
}

.footer_info .address{
    line-height: 30px;
    font-size: 20px;
}

.footer_social{
    width: 60%;
    height: 120px;
    font-weight: 300;
    display: flex;
    justify-content: space-around;
}

.footer_social .social_link{
    padding: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    text-align: center;
    color: #fff;
}

.footer_social .social_link:hover{
    background: #634975;
}

.footer_social .social_link i{
    font-size: 50px;
}

.footer_social .social_link span{
    margin-top: 15px;
    font-size: 20px;
}

@media screen and (max-width: 750px){

    .footer_container{
        flex-direction: column-reverse;
    }

    .footer_info{
        width: 100%;
        text-align: center;
    }

    .footer_social{
        margin-top: 20px;
        width: 100%;
    }

}

</style>