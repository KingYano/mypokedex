<template lang="html">

    <div class="pokemon-info-description">
        <h3>Detail :</h3>
        <div class="pokemon-paragraph">
            <p class="i-description">Description :</p>
            <p class="i-description-content">{{description}}</p>
        </div>
        <div class="pokemon-stat">
            <p class="pokemon-stat--abilities">Abilities: <span class="pokemon-stat-data pokemon-abilitie" v-for="ability in abilities" :key="ability">{{ ability }}</span></p>
            <p class="pokemon-stat--weight">Weight : <span class="pokemon-stat-data">{{weight}} kg</span></p>
            <p class="pokemon-stat--height">Height : <span class="pokemon-stat-data">{{height}} cm</span></p>
        </div>
    </div>

</template>

<script lang="js">

    export default  {
        name: 'pokemon-info-description',
        components: {

        },
        props: {
            description: {
                type: String,
                default: 'No existing description.'
            },
            weight: {
                type: Number,
                default: 0
            },
            height: {
                type: Number,
                default: 0
            },
            abilities: {
                type: Array,
                default: () => []
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
    @import "../PokemonInfoDescription/PokemonInfoDescription.scss";
</style>
