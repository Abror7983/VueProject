<script setup>
import { RouterLink, RouterView } from 'vue-router'
import bootstrap from 'bootstrap/dist/js/bootstrap';
import { faPencilSquare } from '@fortawesome/free-solid-svg-icons';
import '../src/assets/base.css' 

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <span class="logo">
        <img src="../public/favicon.ico" alt="">
        Abrorbek//</span>
      <div class="container-fluid">
        <button class="navbar-toggler" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg> </span>
        </button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <span class="logo1">
              <img src="../public/favicon.ico" alt="">
              Abrorbek//</span>
            <button type="button" class="btn-close" data-bs-toggle="offcanvas"
              aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <span data-bs-toggle="offcanvas" aria-controls="offcanvasDarkNavbar">
                  <RouterLink class="nav-link" to="/">
                    <fa class="icon" :icon="['fas', 'house']"></fa> Home
                  </RouterLink>
                </span>
              </li>
              <li class="nav-item">
                <span data-bs-toggle="offcanvas" aria-controls="offcanvasDarkNavbar">
                  <RouterLink class="nav-link" to="/about">
                    <fa class="icon" :icon="['far', 'address-card']"></fa> About
                  </RouterLink>
                </span>
              </li>
              <li class="nav-item">
                <span data-bs-toggle="offcanvas" aria-controls="offcanvasDarkNavbar">
                  <RouterLink class="nav-link" to="/add">
                    <fa class="icon" :icon="['far', 'address-book']"></fa> Add
                  </RouterLink>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="light-btn">
          <button id="light-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
              <path
                d="M21.25 22.042Zm.583 16.458h-4.75l.584-.5q.583-.5 1.271-1.083.687-.584 1.25-1.084l.562-.5h1.167q3.791 0 7.041-2.125 3.25-2.125 5.125-5.375-3.625-.375-6.937-1.812-3.313-1.438-5.896-3.979-2.583-2.584-4-5.875-1.417-3.292-1.792-6.917-3.291 1.917-5.354 5.083-2.062 3.167-2.104 7v.396q0 .229.042.396l-.48.187q-.479.188-1.062.396-.583.209-1.062.396l-.48.188q-.083-.5-.104-.938-.021-.437-.021-.854 0-6.167 3.959-10.875 3.958-4.708 10.041-5.833-.666 4.125.5 8.083 1.167 3.958 4.167 6.958 2.958 2.959 6.917 4.125 3.958 1.167 8.125.542-1.084 6.125-5.813 10.062Q28 38.5 21.833 38.5ZM10 35.333h7.5q1.208 0 2.042-.833.833-.833.833-2 0-1.208-.813-2.042-.812-.833-1.979-.833h-1.916l-.75-1.792q-.625-1.458-1.959-2.333-1.333-.875-2.916-.875-2.25 0-3.834 1.563-1.583 1.562-1.583 3.77 0 2.25 1.563 3.813Q7.75 35.333 10 35.333Zm0 3.167q-3.542 0-6.042-2.5t-2.5-6.042q0-3.541 2.5-6.02 2.5-2.48 6.042-2.48 2.542 0 4.625 1.354 2.083 1.355 3.125 3.646 2.417.125 4.104 1.854 1.688 1.73 1.688 4.146 0 2.5-1.771 4.271T17.5 38.5Z"
                fill="#cda274" />
            </svg>
          </button>
          <button id="dark-btn" class="hidden">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
              <path
                d="M20 25.167q2.167 0 3.667-1.5t1.5-3.667q0-2.167-1.5-3.667T20 14.833q-2.167 0-3.667 1.5T14.833 20q0 2.167 1.5 3.667t3.667 1.5Zm0 3.166q-3.458 0-5.896-2.437-2.437-2.438-2.437-5.896 0-3.458 2.437-5.896 2.438-2.437 5.896-2.437 3.458 0 5.896 2.437 2.437 2.438 2.437 5.896 0 3.458-2.437 5.896-2.438 2.437-5.896 2.437Zm-16.958-6.75q-.667 0-1.125-.458-.459-.458-.459-1.125t.459-1.125q.458-.458 1.125-.458h3.916q.667 0 1.125.458.459.458.459 1.125t-.459 1.125q-.458.458-1.125.458Zm30 0q-.667 0-1.125-.458-.459-.458-.459-1.125t.459-1.125q.458-.458 1.125-.458h3.916q.667 0 1.125.458.459.458.459 1.125t-.459 1.125q-.458.458-1.125.458ZM20 8.542q-.667 0-1.125-.459-.458-.458-.458-1.125V3.042q0-.667.458-1.125.458-.459 1.125-.459t1.125.459q.458.458.458 1.125v3.916q0 .667-.458 1.125-.458.459-1.125.459Zm0 30q-.667 0-1.125-.459-.458-.458-.458-1.125v-3.916q0-.667.458-1.125.458-.459 1.125-.459t1.125.459q.458.458.458 1.125v3.916q0 .667-.458 1.125-.458.459-1.125.459ZM9.667 11.875 7.5 9.75q-.5-.458-.479-1.125.021-.667.479-1.125.458-.5 1.125-.5t1.125.5l2.125 2.167q.458.458.458 1.104 0 .646-.458 1.104-.417.458-1.063.458-.645 0-1.145-.458ZM30.25 32.5l-2.125-2.167q-.458-.458-.458-1.104 0-.646.458-1.104.458-.5 1.083-.479.625.021 1.125.479L32.5 30.25q.5.458.479 1.125-.021.667-.479 1.125-.458.5-1.125.5t-1.125-.5Zm-2.125-20.625q-.5-.458-.479-1.083.021-.625.479-1.125L30.25 7.5q.458-.5 1.125-.479.667.021 1.125.479.5.458.5 1.125t-.5 1.125l-2.167 2.125q-.458.458-1.104.458-.646 0-1.104-.458ZM7.5 32.5q-.5-.458-.5-1.125t.5-1.125l2.167-2.125q.458-.458 1.104-.458.646 0 1.104.458.5.458.479 1.083-.021.625-.479 1.125L9.75 32.5q-.458.5-1.125.479-.667-.021-1.125-.479ZM20 20Z"
                fill="#cda274" />
            </svg>
          </button>
          <div class="time">
          <p>Server vaqti</p>
          <p>12.02.2024 | 07:07</p>
           </div>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
.navbar-toggler {
  border: none;
  padding: 0; 
}

*{
  box-sizing: border-box;
}
html{
  font-family: 'Roboto', sans-serif;
}
.nav-link{
  color: white;
}
.btn-close {
  float: left;
  background-color:whitesmoke;
  opacity: 0.7;
}
.offcanvas-header{
  border-bottom: 1px solid whitesmoke;
}
.offcanvas{
  background-color: rgb(2, 8, 23);
}
.navbar-toggler-icon{
  color: red;
}

.light-btn button{
  background-color: transparent;
  border: none;
  padding-right: 1.5rem;
  float: right;
}
.time p{
   color: rgb(195, 194, 194);
   padding:0rem 0.5rem;
   margin: 0 1rem;
}
.time{
  display:inline;
  float: right; 

}
.time p:first-child{
  font-size: small;
  text-align: end;
}

.logo {
  position: absolute;
  color: aqua;
  margin-left: 3rem;
}

.logo1 {
  position: relative;
  color: aqua;
  padding: 1rem 0rem 0rem 1rem;
}

.nav-item {
  font-size: 1.2rem;
  margin-left: 1rem;
  color: var(--secondary-color);
}
.icon {
  margin-right:1rem;
}
.navbar-nav :nth-child(3){
  padding-bottom: 0.2rem;
}

hr {
  margin: 0rem 1rem;
}
.navbar{
  background-color:rgb(30, 41, 59);
}


</style>
