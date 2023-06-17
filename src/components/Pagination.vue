<template>
    <div>
        <ul>
            <li v-for="p in totalPages" :key="p">
                <button class="pagination_button" 
                    @click="changePage(p)" 
                    :class="{ active: currentPage === p }"
                >{{ currentPage }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'pagination-pets',
    props: ['total', 'col'],
    data() {
        return {
            currentPage: 1
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.total / 6)
        },
    },
    methods: {
        changePage(p) {
            this.currentPage = p
            this.$emit('page-changed', p)
        }
    }
}
</script>

<style>
.pagination_button {
    color: #1c1d21;
    border: 1px solid #3b5998;
}

.active {
    background-color: #1da1f2;
}
</style>