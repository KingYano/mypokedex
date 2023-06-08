<template lang="html">

    <div class="pokemon-info-evolution">
        <p>Evolution</p>

        <div>
            <div v-for="(evolution, index) in evolutions" :key="index">
                <div>
                    <img :src="evolution.imageUrl" :alt="'Picture of ' + evolution.name" />
                </div>
                <div>
                    <p>{{ evolution.name }}</p>
                    <p v-if="evolution.level">Level: {{ evolution.level }}</p>
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
        },
        computed: {

        }
    }
</script>

<style lang="scss">
</style>
