<template lang="html">

    <div class="widget-logo">
        <img :src="require('@/assets/pikachulogo.png')" alt="Logo Pikachu Pokedex" />
    </div>

</template>

<script lang="js">

    export default  {
        name: 'widget-logo',
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
