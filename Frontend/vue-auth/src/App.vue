<template>
  <div id="app">
    
    <Nav/>

    <div class="auth-wrapper">
      <div class="auth-inner">
          <router-view />
      </div>

    </div>

  </div>

</template>

<script>

import Nav from './components/Nav.vue'

export default {
  name: 'App',
    components : {
      Nav,
    }

    
  }
</script>

<style>
 

  *{
    box-sizing: border-box;
  }

  body{
    background: #1C8EF9 !important;
    min-height: 960px;
    display: flex;
    font-weight: 400;
  }

h1,h2,h3,h4,h5,h6,label,span{
  font-weight: 500;
}

body, html,#app , #root , .auth-wrapper {
  width: 100%;
  height: 100%;
}

#app {
  text-align: center;
}

.navbar-light{
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34,35,58,0.2);
}

.auth-wrapper{
  display: flex;
  justify-content: center;
  flex-direction:column;
  text-align: left;
}


.auth-inner {
  width: 450px ; 
  margin: auto;
  background:  #ffffff;
  box-shadow: 0px 14px 80px rgba(34,35,58,0.2);
  padding: 40px 55px 45px 55px ;
  border-radius: 15px;
  transition: all .3s;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 40px;
}

.custom-control-label {
  font-weight: 400;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 0px ;
  color: #7f7d7d;
  margin: 0;
}
.forgot-password a {
  color: #167bff;
}

.form-control 
{
  margin-bottom: 10px;
}

</style>
