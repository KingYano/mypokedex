<template lang="html">

    <div class="pokemon-info-games">
        <h3>List of Game Versions</h3>
        <div class="pokemon-list">
            <div class="pokemon-item">
                <p v-for="version in gameVersions" :key="version">Pokemon {{ version }}</p>
            </div>
        </div>
    </div>

</template>

<script lang="js">

    export default  {
        name: 'pokemon-info-games',
        components: {

        },
        props: {
            gameVersions: {
                type: Array,
                required: true,
            },
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
    
</style>
