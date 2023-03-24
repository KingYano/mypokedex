<template lang="html">

    <div class="pokemon-card">
        <div class="pokemon-image">
            <img :src="imageUrl" :alt="name" />
        </div>
        <div class="pokemon-details">
            <h2>{{ name }}</h2>
            <p>{{ id }}</p>
            <div>
                <p v-for="(type, index) in types" :key="index">
                    {{ type }}
                </p>
            </div>
        </div>
    </div>

</template>

<script lang="js">

    export default  {
        name: 'pokemon-card',
        components: {

        },
        props: {
            name: {
                type: String,
                default: '',
            },
            id: {
                type: Number,
                default: 0,
            },
            types: {
                type: Array,
                default: () => [],
            },
            imageUrl: {
                type: String,
                default: '',
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

<style>
    .pokemon-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        margin: 20px;
        padding: 20px;
    }

    .pokemon-image img {
        width: 100%;
        height: 200px;
        object-fit: contain;
        margin-bottom: 10px;
    }

    .pokemon-details {
        text-align: center;
    }
</style>
