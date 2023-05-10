<template >
    <pets id="#pets" class="pets carousel_cards card one" @click="isOpen = true">

        <button class="pets button_contour">Learn more</button>

        <Popup :open="isOpen" @close="isOpen = !isOpen" />
    </pets>
</template>

<script>
import Popup from '@/components/Pop_up.vue'
import { ref } from "vue"
export default {
    components: { Popup },
    data() {
        return {
            isInfoPopupVisible: false
        }
    },
    setup() {
        const isOpen = ref(false)
        return { isOpen }
    }
}
</script>

<style></style>