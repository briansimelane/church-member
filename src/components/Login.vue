<script setup>
import { useMemberStore } from '@/stores/member'
import { ref } from 'vue'
import { auth } from '@/firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const store = useMemberStore()
const router = useRouter()

const gotoRegistration = () => {
   store.$patch({ 
    navigationUser: 1 }) 
}

const errorRef = ref(false)
const errorMsg = ref('')
const userEmail = ref('')
const userPassword = ref('')

const signUserIn = () => {
    signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((data) => {
        console.log("Successfully logged in")
        errorRef.value = false
        errorMsg.value = ''
        router.push('/admin')
        
    })
    .catch((error) => {
        
        errorRef.value = true
        errorMsg.value = error.message
    })
}

</script>



    <template>

    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8" >
        <div class="sm:mx-auto sm:w-full sm:max-w-md" >
            <img class="w-auto h-32 mx-auto" src = "@/assets/mcsalogo.png" alt = "MCSA Logo" />
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900" > Sign in to your account </h2>
                    <p class="mt-2 text-center text-sm text-gray-600" >
                        Or
{{ ' ' }}
<button type="button" class="font-medium text-red-600 hover:text-register-500" @click="gotoRegistration"> register if you don't have an account. </button>
    </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md" >
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border-2" >
            <form class="space-y-6" @submit.prevent="signUserIn">
                <div>
                <label for= "email" class= "block text-sm font-medium text-gray-700" > Email address </label>
                    <div class="mt-1" >
                        <input id="email" name = "email" type = "email" autocomplete = "email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" v-model="userEmail" />
                            </div>
                            </div>

                            <div >
                            <label for= "password" class= "block text-sm font-medium text-gray-700" > Password </label>
                                <div class= "mt-1" >
                                <input id= "password" name = "password" type = "password" autocomplete = "current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"  v-model="userPassword" />
                                    </div>
                                    </div>

                                    <div class="flex items-center justify-between" >
                                        

         <!--   <div class="text-sm" >
                <a href="#" class="font-medium text-red-600 hover:text-red-500" > Forgot your password? </a>
            </div> -->
                    </div>

            <div >
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" > Sign in </button>
            </div>

            <div v-if="errorRef"> 
                <p class="text-red-500 text-center font-normal italic">{{ errorMsg }}</p>
            </div>
                </form>

            

            </div>

            <div class="mt-2 md:mt-6">
            <router-link class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" to="/"> Enter member data instead </router-link>
            </div>

        </div>
    </div>
</template>
