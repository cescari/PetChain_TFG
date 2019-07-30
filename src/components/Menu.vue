<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="/main">PetChain - Home</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" v-show="addPet"><a class="nav-link" href="/addpet">Alta de mascotas</a></li>
                    <li class="nav-item" v-show="updatePet"><a class="nav-link" href="/updatePet">Modificaci&oacute;n de mascotas</a></li>
                    <li class="nav-item" v-show="deletePet"><a class="nav-link" href="/deletepet">Baja de mascotas</a></li>
                    <li class="nav-item" v-show="contacto"><a class="nav-link" href="/contacto">Contacto</a></li>
                    <li class="nav-item" v-show="licencia"><a class="nav-link" href="/licencia">Licencia</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Menu',
    data(){
        return {
            addPet: true,
            updatePet: true,
            deletePet: true,
            contacto: true,
            licencia: true
        }
    }
}
</script>
<style>

</style>
