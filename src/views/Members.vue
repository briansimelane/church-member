<!--This example requires Tailwind CSS v2.0 + -->
<script setup>
    import { useMemberStore } from '@/stores/member'

    import LoginView from '../components/Login.vue'
    import SignupView from '../components/Signup.vue'


    const store = useMemberStore()

</script>


<template>

    <div v-if="store.navigationUser == 0">
        <LoginView></LoginView>
    </div>

    <div v-if="store.navigationUser == 1">
        <SignupView ></SignupView>
    </div>

</template >

    