<template>
    <div>
        <div>Hello{{ greeting }}</div>

        <label for="whom_to_greet">Who are you?</label>
        <input type="text" name= "whom_to_greet" id="whom_to_greet" v-model="name">
    </div>
</template>

<script>
export default {
    computed: {
        greeting() {
            if(this.name != '') {
                return `, ${this.name}`;
            }
        }
    },

    data() {
        return {
            name: ''
        }
    }
}
</script>

