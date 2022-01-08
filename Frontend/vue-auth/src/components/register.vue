<template>
    
<form @submit.prevent="handleSubmit"> 
    <h3> Sign Up </h3>

    <div class="form-group">
        <label> Email </label>
        <input type="email" class="form-control" v-model="email" placeholder="Email"/>
    </div>

     <div class="form-group">
        <label> Password </label>
        <input type="password" class="form-control" v-model="password" placeholder="Password" autocomplete="off"/>
    </div>

    <button class="btn btn-primary btn-bloack"> Sign Up </button>

</form>

</template>

<script>
import axios from 'axios';

export default {
    name: 'register',

    data() {
        return{
            id_user:"",
            email: '',
            nom:'',
            prenom : '',
            password: '',
             profil_image:'',
             is_admin:'',
             date_user:'',
             date_update_user:'',
        }
    },

    methods: {
        handleSubmit () {

            const data = {
                email: this.email,
                password: this.password,
               
            }

             console.log(data);
             
           axios.post('http://localhost:3000/api/user/register' , data)
           .then(
               res => {
                   console.log(res);
               }
           ).catch(
               err => {
                   console.log(err);
               }
           )
        }

    }
}
</script>