<template>
  <main>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/springboot">Springboot</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="#navbarSupportContent"
          aria-controls="navbarSupportContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggle-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a href="/springboot" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="/add" class="nav-link">Add</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </main>
</template>

<style scoped>
nav {
  background-color: rgb(113, 255, 144) !important;
  color: black;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 1rem 0;
}

nav a {
  color: rgb(43, 43, 43);
}
</style>
