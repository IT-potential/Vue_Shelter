<template>
    <div class="body fixed_popup" v-show="open">
        <div class="popup">
            <div class="popup_wrapper">
                <span class="popup_pic" 
                v-bind:style="{ backgroundImage: `url(${animalInfo.modal})` }"></span>
                <div class="popup_info_wrapper">
                    <pre>
                    <!-- {{
                        JSON.stringify(animalInfo, null, 2)
                    }} -->
                    </pre>
                    <p class="popup_name">{{ animalInfo.name }}</p>
                    <div class="popup_type_species_wrapper">
                        <div class="popup_pet_type">{{ animalInfo.type }}</div>
                        <div class="popup_pet_species">{{ animalInfo.breed }}</div>
                    </div>
                    <p class="popup_text">{{ animalInfo.description }}</p>
                    <ul class="popup_list">

                        <li class="popup_list_item"> Age</li>
                        <li class="popup_list_item"> Inoculations</li>
                        <li class="popup_list_item"> Diseases</li>
                        <li class="popup_list_item"> Parasites</li>
                    </ul>
                </div>

            </div>
            <div class="popup_cross_circle" @click="$emit('close')">
                <span class="popup_cross"></span>
            </div>
        </div>

        <div class="popup_shadow"></div>
    </div>
</template>

<script>
export default {
    props: {
        animalInfo: {
            type: Object,
            required: true,

        },
        open: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        closePopup() {
            this.$emit('close')
        }
    }

}


</script>