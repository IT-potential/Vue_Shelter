<template>
    <div class="body fixed_popup" v-if="show === true">
        <div class="popup" v-for="animal in animals" :key='animal.id'>
            <div class="popup_wrapper">
                <span class="popup_pic"></span>
                <div class="popup_info_wrapper"></div>
                <p class="popup_name">{{ animal.name }}</p>
                <div class="popup_type_species_wrapper">
                    <div class="popup_pet_type">{{ animal.type }}</div>
                    <div class="popup_pet_species">{{ animal.species }}</div>
                </div>
                <p class="popup_text">{{ animal.description }}</p>
                <ul class="popup_list">
                    <li class="popup_list_item"> Age</li>
                    <li class="popup_list_item"> Inoculations</li>
                    <li class="popup_list_item"> Diseases</li>
                    <li class="popup_list_item"> Parasites</li>
                </ul>
            </div>
        </div>
        <div class="popup_cross_circle">
            <span class="popup_cross"></span>
        </div>
        <div class="popup_shadow"></div>
    </div>
</template>

<script>
import useData from '../../data/pets.json'
export default {
    name: 'pop_up',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            animals: useData
        }
    },
}
</script>

<style></style>