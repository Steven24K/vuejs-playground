<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggle">{{ visible ? 'Hide' : 'Show' }} Details</button>


        <ul v-if="visible">
            <li>{{ friend.phone }}</li>
            <li>{{ friend.email }}</li>
        </ul>
    </li>
</template>
  
<script>

export default {
    props: ["id", "name", "phone", "email"],
    data(props) {
        return {
            visible: false,
            friend: {
                id: props.id,
                name: props.name,
                phone: props.phone,
                email: props.email
            }
        }
    },
    methods: {
        toggle() {
            this.visible = !this.visible
        }
    }
}
</script>
  
<style></style>
  