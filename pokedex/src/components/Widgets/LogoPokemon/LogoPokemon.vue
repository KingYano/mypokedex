<template lang="html">

    <div class="logo-pokemon">
        <img :src="require('@/assets/pikachulogo.png')" alt="Logo Pikachu Pokedex" />
    </div>

</template>

<script lang="js">

    export default  {
        name: 'logo-pokemon',
        components: {

        },
        props: {

        },
        data () {
            return {

            }
        },
        methods: {
        },
        computed: {

        }
    }
</script>

<style lang="scss">
    @import "../LogoPokemon/LogoPokemon.scss";
</style>
