<template>
  <div>
    <!-- Navbar -->
    <nav
      class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand float-left"
          >MEAN Stack CRUD</router-link
        >
        <ul class="nav navbar-nav flex-row float-right gap-3">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Create student</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/view" class="nav-link">View student </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
