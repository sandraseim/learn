<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1>Harry Potter Guinea Pig School</h1>
      <nav>
        <ul id="navigation">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/apply">Apply</RouterLink></li>
        <li><RouterLink to="/courses">Courses</RouterLink></li>
        <li><RouterLink to="/our-students">Our Students</RouterLink></li>
      </ul>
      </nav>
   
  </header>

  <main>
    <RouterView />
  </main>
  <footer>
        <div class="footer-content">
            <p>&copy; 2024 Harry Potter Guinea Pig School. All rights reserved. <a href="mailto:sandraseimuskina@gmail.com">Contact Us</a></p>
        </div>
    </footer>
</template>
