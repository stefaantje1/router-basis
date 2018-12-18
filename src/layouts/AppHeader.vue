<template>
    <nav class="app-header">
        <h1>
            Beau-tique
        </h1>
        <div class="nav-groep">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/producten">Producten</router-link>
            <router-link to="/over">Over ons</router-link>
            <router-link to="/contact">Contacteren</router-link>
        </div>
    </nav>

</template>

<script>
export default {

}
</script>

<style>
    .app-header {
        display: flex;
        justify-content: space-between;
        align-items: center;/* centreerd op de tegenas idg de hoogte*/
        background-color: #40B782;
        height: 6rem;
        padding: 0 3rem;
        color: #ffffff;
        
    }
    .nav-groep a {
        margin: 0 1.5rem;
        text-transform: uppercase;
        font-weight: bold;
        color: #8fd5b5;
        transition: color 0.3s;
    }
    .nav-groep a:hover {
        color: #ffffff;
        
    }

    .nav-groep a.router-link-active {
        color: #ffffff;
    }
</style>
