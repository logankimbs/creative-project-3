<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contacts">Contacts</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

* {
    margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

#nav {
  padding: 30px;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: rgb(91, 91, 216);
  text-decoration: underline;
}

/* Mobile Styles */
@media only screen and (max-width: 767px) {
    #nav {
        padding: 26px;
    }
}

/* Tablet Styles */
@media only screen and (min-width: 768px) and (max-width: 1023px) {

}

/* Desktop Styles */
@media only screen and (min-width: 1024px) {
    
}
</style>
