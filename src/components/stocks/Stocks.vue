<template>
    <div>
        <app-stock v-for="stock in stocks" :key="stock" :stock="stock">
        </app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';
    export default {
        data() {
            return {
                stocks: [
                    {id:1, name: 'Honda', price: 110},
                    {id:2, name: 'Google', price: 200},
                    {id:3, name: 'Facebook', price: 150},
                    {id:4, name: 'Apple', price: 190},
                ]
            }
        },
        components: {
            appStock: Stock
        }
    }
</script>
