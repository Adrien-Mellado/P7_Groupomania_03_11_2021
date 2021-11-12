<template>
    <div id="home">
       
        <div id="bloc_logo">

            <img src="../assets/icon-above-font.png" alt="icon_logo">

        </div>

        <div id="bloc_login">
            <form method="post">
                <h1>Connexion</h1>

                <label><h5>Email</h5></label>
                <input type="email" placeholder="Entrer votre email" name="email" required>

                <label><h5>Mot de passe</h5></label>
                <input type="password" placeholder="Entrer le mot de passe" name="password" required>

                <input type="submit" id='submit' value='Crée ton compte ' >


                <p> Ta pas encore de compte? <a href="./inscription"> Crée un compte </a> </p>
                
            </form>
        </div>
        
    </div>

</template>


<script>
export default {
    name:'connexion'
}
</script>

<style>


/* style css version mobile */

    #bloc_logo{
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }

    img {
        width: 100%;
        height:180px;
        margin-left: auto;
        margin-right: auto;
        object-fit: cover;
    }

    #bloc_login{
        display: flex;
        width: 100%;
        justify-content: center;
        margin-right: auto;
        margin-left: auto;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 90%;
        box-shadow: 0px 0px 12px black;
        border-radius: 10px;
    }

    h1{
        margin-bottom: 0px;
        margin-left: auto;
        margin-right: auto;
    }

    h5{
        margin-top: 0px;
        margin-bottom: 0px;
    }

    input{
        margin-bottom: 20px;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }

    label{
        margin-left: 20px;
        margin-bottom: 10px;
    }

    a{
        text-decoration: none;
        color: rgb(245, 151, 151);
    }

</style>