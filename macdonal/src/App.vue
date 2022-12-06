<template>
  <aside>
    <router-link to="/">Daftar Menu</router-link>
    <br />
    <!-- <router-link to="/about">About</router-link> -->
    <router-link to="/makanan">Makanan</router-link>
    <br />
    <router-link to="/minuman">Minuman</router-link>
    <br />
    <router-link to="/snack">Snack</router-link>
    <br />
    <router-link to="/checkout">Checkout</router-link>
  </aside>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

aside {
  padding: 30px;
  text-align: left;
  height: 100%;
  width: 150px;
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 40px;
  background-color: red;
}

aside a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

aside a.router-link-exact-active {
  text-decoration: underline;
}
</style>
