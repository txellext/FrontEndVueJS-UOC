<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const theme = ref('dark')

const changeTheme = (e) => {
  //console.log(e)
  document.body.className = e.target.value
}
          //TODO: Conditional only show if your are not in '/'.     
</script>

<template>
  <main class="themed" :class="theme">
    <header>
    
      <div class="wrapper">    
        <nav>     
 
          <RouterLink to="/">Pokemons List</RouterLink>
        </nav>
      </div>
      
      <div class="settings">
        <label for="dark">Dark</label>
        <input type="radio" name="theme" id="dark" value="dark" v-model="theme" checked @change='changeTheme'>
        <label for="light">Light</label>
        <input type="radio" name="theme" id="light" value="light" v-model="theme" @change='changeTheme'>
        <br>
        Theme {{ theme }}
      </div>
    </header>
    
    <RouterView />
  </main>
</template>

<style scoped>
:root{
  --bg-color: #181818;
  --text-color: hsla(160,180%,37%,1);
  --bg-card: hsla(160,180%,37%,1);
  --text-car: #222;
}

.themed.dark {
  --bg-color: #181818;
  --text-color: hsla(160,180%,37%,1);
  --bg-card: hsla(160,180%,37%,1);
  --text-card: #222;
}

.themed.light {
  --text-color: #181818;
  --bg-color: #eee;
  --bg-card: #ddd;
  --bg-text: #333;

}

.themed{
  background-color: var(--bg-color);
  color: var(--text-color);
  display:grid;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  transition: color 0.5s, background-color 0.5s;

}

@media (min-width: 1024px) {
  .themed {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}

.settings {
  display: flex;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: grid;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
