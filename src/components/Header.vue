
<template>
    <header>
        <div class="navbar navbar-default">
            <div class="navbar-header">
                <h2><router-link :to="{name: 'imain'}">
                    {{sitename}}
                    </router-link>
                </h2>
            </div>
     <!-- <div class="nav navbar-nav navbar-right cart">
        <div v-if="!mySession">				
          <button type="button" class="btn btn-default btn-lg" v-on:click="signIn">				
            Sign In
          </button>
        </div>
        <div v-else>				
          <button type="button"
            class="btn btn-default btn-lg"
            v-on:click="signOut">				
            <img class="photo"
            :src="mySession.photoURL"/>
            Sign Out
          </button>
        </div>
      </div> -->
            <div class="nav navbar-nav navbar-right cart">
                 <router-link active-class="active" tag="button" class="btn btn-default btn-lg" :to="{name: 'Form'}">
                    <span class="glyphicon glyphicon-shopping-cart">{{ cartItemCount}}</span> Checkout
                </router-link>
            </div>
        </div>
    </header>
    
</template>
<script>
// import firebase from 'firebase';
export default {
    name: 'my-header',
    data(){
        return{
            sitename: 'Pet Depot'
        }
    },
    props:['cartItemCount'],
    // beforeCreate(){
    //     firebase.auth().onAuthStateChanged((user)=>{
    //         this.$store.commit('SET_SESSION', user || false)
    //     });
    // },
    methods:{
        showCheckout(){
            this.$router.push({name:'Form'});
        },
        // signIn(){
        //     let provider = new firebase.auth.GoogleAuthProvider();
        //     firebase.auth().signInWithPopup(provider).then(function(result){
        //         console.log('signed in!');
        //     }).catch(function(error){
        //         console.log('error' + error)
        //     });
        // },
        // signOut(){
        //     firebase.auth().signOut().then(function(){
        //         //успешный выход
        //         console.log("error in sign out!")
        //         //произошла ошибка
        //     });
        // }
    },
    computed:{
        // mySession(){
        //     return this.$store.getters.session;
        // }
    }
}
</script>
<style scoped>
  a {
      text-decoration: none;
      color: black;
    }
.router-link-exact-active {
    color: rgb(0, 135, 177);
}
.photo{
    width: 25px;
    height: 25px;
}
</style>