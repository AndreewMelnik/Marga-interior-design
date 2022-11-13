27 lines (24 sloc) 646 Bytes
<template>
  <div class="app">
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path">
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="navbar" color="white" height="100px" >
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
        <div class="logo">
               <router-link to="/" @click="sidebar = !sidebar">marga</router-link>
        </div>
      </span>
        <v-toolbar-items class="hidden-xs-only align-center">
          <v-btn>
            <router-link to="/">Home</router-link>
          </v-btn>
          <v-btn>
            <router-link to="/projects">Projects</router-link>
          </v-btn>
          <v-btn>
           <router-link to="/services">Services</router-link>
          </v-btn>
          <div class="logo">
           <router-link to="/">marga</router-link>
          </div>
          <v-btn>
            <router-link to="/about">About</router-link>
          </v-btn>
          <v-btn>
           <router-link to="/blog">Blog</router-link>
          </v-btn>
          <v-btn>
           <router-link to="/contact">Contact</router-link>
          </v-btn>
        </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {

  data(){
    return {
      appTitle: 'marga',
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/', name: 'Home' },
        { title: 'Projects', path: '/projects', name: 'Projects' },
        { title: 'Services', path: '/services', name: 'Services' },
        { title: 'About', path: '/about', name: 'About' },
        { title: 'Blog', path: '/blog', name: 'Blog' },
        { title: 'Contact', path: '/contact', name: 'Contact' }
      ]
    }
  },
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: center;
  padding: 10px;
  max-height: 100px;
  height: 100px;
  width: 100%;
}

.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default{
  background-color: white;
  box-shadow: none;
}

a {
  color: black !important;
  text-decoration: none;
}

.v-btn {
  text-transform: none;
  font-family: "AcuminPro-Medium";
}

.logo {
  font-family: "Acumin Pro Regular";
  font-size: 32px;
  width: 300px;
  text-align: center;
}

.logo a.router-link-active{
  color: #43ab92 !important;
  vertical-align: super;
}

@media(max-width: 600px){
  .v-toolbar__content{
    width:100%;
    padding:0px;
  }
}



</style>