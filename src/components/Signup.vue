<script setup>
import { ref, watch } from 'vue'
import { useMemberStore } from '@/stores/member'
import { usechurchstructureStore } from '@/stores/churchStructure'
import { auth, db } from '@/firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { collection, addDoc, doc, setDoc  } from 'firebase/firestore'


const store = useMemberStore()
const structure = usechurchstructureStore()
const router = useRouter()

const errorRef = ref(false)
const errorMsg = ref('')


const districts = structure.districts
const circuits = ref('')
const societies = ref('')

const userName = ref('')
const userEmail = ref('')
const userPassword = ref('')
const userRole = ref('')
const unlistedCircuit = ref('')
const unlistedSociety = ref('')
const unlisted = ref(false)

const districtAlias = ref('')
const circuitAlias = ref('')
const societyAlias = ref('')

const roles = [{number: 0, name: 'App Developer'}, {number: 1, name: 'App Super User'}, {number: 2, name: 'Connexional Official'}, {number: 3, name: 'Connexional Administrator'}, {number: 4, name: 'District Official'}, {number: 5, name: 'District Administrator'}, {number: 6, name: 'Circuit Official'}, {number: 7, name: 'Circuit Administrator'}, {number: 8, name: 'Society Official'}, {number: 9, name: 'Society Administrator'}, ]


watch([districtAlias, circuitAlias], () => {
    circuits.value = structure.circuitList[districtAlias.value.alias]
    societies.value = structure.societiesList[circuitAlias.value.alias]

})

const loading = ref(false)

const gotoSignIn = () => {
   store.$patch({ 
    navigationUser: 0 }) 
}

const registerUser = () => {
    loading.value = true
    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((data) => {
        console.log("Successfully registered!")

      setDoc (doc(db, 'users', data.user.uid), {
        fullName: userName.value,
        email: userEmail.value,
        role: userRole.value.name,
        district: districtAlias.value.alias,
        circuit: circuitAlias.value.alias,
        society: societyAlias.value.alias
      });

    loading.value = false

   /*      const colRef = collection(db, 'users')

       addDoc(colRef, {
        userID: data.user.uid,
        fullName: userName.value,
        email: userEmail.value,
        role: userRole.value.name,
        district: districtAlias.value.alias,
        circuit: circuitAlias.value.alias,
        society: societyAlias.value.alias

            }).then(() => {
        
      }) */

        errorRef.value = false
        errorMsg.value = ''
        router.push('/admin')
        
    })
    .catch((error) => {
        errorRef.value = true
        errorMsg.value = error.message
    })
}

const viewUser = () => {

}

</script>

    <template>
    <!--
    This example requires updating your template:

```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
-->
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8" >
        <div class="sm:mx-auto sm:w-full sm:max-w-md" >
            <img class="w-auto h-32 mx-auto" src = "@/assets/mcsalogo.png" alt = "MCSA Logo" />
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900" > Register for an account </h2>
                    <p class="mt-2 text-center text-sm text-gray-600" >
                        Or
{{ ' ' }}
<button type="button" class="font-medium text-red-600 hover:text-register-500" @click="gotoSignIn"> sign in if you already have an account. </button>
    </p>
    </div>

<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md" >
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border-2" >
        <form class="space-y-3"  @submit.prevent="registerUser">
            <div>
                <label for= "userName" class= "block text-sm font-medium text-gray-700"> Full name </label>
                <div class="mt-1" >
                    <input id="userNamel" name = "userName" type = "text" autocomplete = "full name" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" v-model="userName" />
                </div>
            </div>

            <div>
                <label for= "email" class= "block text-sm font-medium text-gray-700"> Email address </label>
                <div class="mt-1" >
                    <input id="email" name = "email" type = "email" autocomplete = "email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" v-model="userEmail" />
                </div>
            </div>

            <div>
                <label for= "password" class= "block text-sm font-medium text-gray-700"> Password </label>
                <div class= "mt-1" >
                    <input id= "password" name = "password" type = "password" autocomplete = "current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" v-model="userPassword" />
                </div>
            </div>

            <div>
                <label for="district" class="block text-sm font-medium text-gray-700">District / Synod</label>
                <select id="district" name="district" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" required  v-model="districtAlias">
                    <option value=""></option>
                    <option  v-for="district in districts" :value="district" >{{ district.number }}: {{ district.name }}</option>                   
                </select>
            </div>

            <div v-if="!unlisted">
                <label for="circuit" class="block text-sm font-medium text-gray-700">Circuit</label>
                <select id="circuit" name="circuit" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" required v-model="circuitAlias">
                    <option value=""></option>
                    <option  v-for="circuit in circuits" :value="circuit">{{ circuit.number }}: {{ circuit.name }}</option>
                    <option value="NotListed">Circuit not listed</option>                     
                </select>
            </div>

             <div v-if="unlisted">
                <label for= "unlisted-circuit" class= "block text-sm font-medium text-gray-700"> Give us your circuit's name </label>
                <div class= "mt-1" >
                    <input id= "unlisted-circuit" name = "unlisted-circuit" type = "text" autocomplete = "unlisted-circuit" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm bg-yellow-50" v-model="unlistedCircuit" />
                </div>
            </div>

            <div v-if="!unlisted">
                <label for="society" class="block text-sm font-medium text-gray-700">Society</label>
                <select id="society" name="society" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" required v-model="societyAlias">
                    <option value=""></option>
                    <option  v-for="society in societies" :value="society">{{ society.number }}: {{ society.name }}</option>                    
                </select>
            </div>

            <div v-if="unlisted">
                <label for= "unlisted-society" class= "block text-sm font-medium text-gray-700"> Give us your society's name </label>
                <div class= "mt-1" >
                    <input id= "unlisted-society" name = "unlisted-society" type = "text" autocomplete = "unlisted-society" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm bg-yellow-50" v-model="unlistedSociety" />
                </div>
            </div>

            <div>
                <label for="role" class="block text-sm font-medium text-gray-700">Your role</label>
                <select id="role" name="role" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" required v-model="userRole">
                    <option value=""></option>
                    <option  v-for="role in roles" :value="role">{{ role.number + 1 }}: {{ role.name }}</option>                    
                </select>
            </div>

            <div v-if="!loading.value">
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> Register </button>
            </div>

            <div v-if="loading.value">
                <span class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"> loading... </span>
            </div>

            <div v-if="errorRef"> 
                <p class="text-red-500 text-center font-normal italic">{{ errorMsg }}</p>
            </div>
        </form>

            


    </div>

    <div class="mt-2 md:mt-6">
    <router-link class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gra-500" to="/"> Enter member data instead </router-link>
    </div>

</div>

    </div>
</template>
