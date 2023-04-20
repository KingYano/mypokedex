<template lang="html">

    <div class="pokemon-info-card">
        <div class="pokemon-image">
            <img :src="pokemon.imageUrl" :alt="'Picture of the Pokemon ' + capitaliseFirstLetterNamePokemon()"/>
        </div>
        <div class="pokemon-details">
            <div class="pokemon-description">
                <h2 class="pokemon-name">{{ pokemon.name }}</h2>
                <h2>#{{ pokemon.id }}</h2>
            </div>
            <div class="pokemon-types">
                <p class="pokemon-type" :class="`pokemon-type-${type.toLowerCase()}`" v-for="(type, index) in pokemon.types" :key="index">
                    {{ type }}
                </p>
            </div>
        </div>
        <div class="more-details">
            <!-- <p>Abilities : {{abilities}}</p>
            <p>Height : {{height}}</p>
            <p>Weight : {{weight}}</p> -->
        </div>
    </div>

</template>

<script lang="js">

    export default  {
        name: 'pokemon-info-card',
        components: {

        },
        props: {
            pokemon: {
                type: Object,
            },
        },
        data () {
            return {

            }
        },
        methods: {
            capitaliseFirstLetterNamePokemon() {
                return this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
            },
        },
        computed: {

        }
    }
</script>

<style lang="scss">
    @import "../PokemonInfoCard/PokemonInfoCard.scss";
</style>
