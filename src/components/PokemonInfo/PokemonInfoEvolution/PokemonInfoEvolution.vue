<template lang="html">

    <div class="pokemon-info-evolution">
        <h3>Evolutions :</h3>
        <div class="pokemon-list-content">
            <div class="pokemon-content" v-for="(evolution, index) in evolutions" :key="index">
                <div class="pokemon-title">
                    <p>{{ capitaliseFirstLetterName(evolution.name) }}</p>
                </div>
                <div class="pokemon-content-image">
                    <img class="pokemon-image" :src="evolution.imageUrl" :alt="'Picture of ' + evolution.name" />
                </div>
                <div class="pokemon-content-level">
                    <p class="pokemon-level" v-if="evolution.level"> (Level : {{ evolution.level }})</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="js">

    export default  {
        name: 'pokemon-info-evolution',
        components: {

        },
        props: {
            evolutions: {
                type: Array,
                default: () => [],
            },
        },
        data () {
            return {

            }
        },
        methods: {
            capitaliseFirstLetterName(name) {
                return name.charAt(0).toUpperCase() + name.slice(1)
            },
        },
        computed: {

        }
    }
</script>

<style lang="scss">
    @import "../PokemonInfoEvolution/PokemonInfoEvolution.scss";
</style>
