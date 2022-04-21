<!--This example requires Tailwind CSS v2.0 + -->
<script setup>
import { membersData } from '../firebase/config'
import { useMemberStore } from '@/stores/member'
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { useRouter } from 'vue-router';

const members = membersData
const store = useMemberStore()
const router = useRouter()
const isLoggedIn = ref(false)

let auth

onMounted(() => {
    auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if(user) {
            isLoggedIn.value = true
        } else {
            isLoggedIn.value = false
        }
    })
})


const handleSignOut = () => {
    signOut(getAuth()).then(() => {
        router.push('/admin-members')
    })
}

    
    </script>


    <template>

    
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-xl font-semibold text-gray-900 mt-5">Administrator Dashboard</h1>
                    <p class="mt-2 text-sm text-gray-700">Below are the members of your society or circuit.</p>
    <p class="mt-2 text-sm text-gray-700">Please contact the developer if you required different access <a class="text-red-700">brian@learningsims.co.za</a></p>
                </div>

                 <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <router-link class="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto" to="/">Add a 
                    member</router-link>
                </div> 

                <div class="mt-2 sm:mt-0 sm:ml-16 sm:flex-none" v-if="isLoggedIn">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto" @click="handleSignOut">Log out</button>
                </div> 

              
            </div>

            <div class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Full name</th>
                            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Class number</th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Cell number</th>
                            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="member in members" :key="member.id">
                        <td class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
    {{ member.memberData.title }} {{ member.memberData.firstName }} {{ member.memberData.surname }}
                            <dl class="font-normal lg:hidden">
                                <dt class="sr-only">Class number</dt>
                                <dd class="mt-1 truncate text-gray-700" > Class: {{ member.memberData.classNumber }} </dd>
                                <dt class="sr-only sm:hidden">Cell number</dt>
                                <dd class="mt-1 truncate text-gray-500 sm:hidden" > {{ member.memberData.cellNumber }}</dd>
                            </dl>
                        </td>
                        <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell" > {{ member.memberData.classNumber }}</td>                       
                        <td class="px-3 py-4 text-sm text-gray-500">{{ member.memberData.cellNumber }}</td>
                        <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <button type="button" class="bg-gray-600 text-white hover:bg-gray-900 pt-1 pb-1 px-2 rounded-md">Edit<span class="sr-only">, {{ member.memberData.firstName }}</span></button>
                            <button type="button" class="bg-green-600 text-white hover:bg-green-900 mt-2 md:mt-0 md:ml-2 pt-1 pb-1 px-2 rounded-md" > View <span class="sr-only" >, {{ member.memberData.firstName }}</span></button >
                            <button type="button" class="bg-red-600 text-white hover:bg-red-900 mt-2 md:mt-0 md:ml-2 pt-1 pb-1 px-2 rounded-md">Delete<span class="sr-only" >, {{ member.memberData.firstName }}</span></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
    </div>
</template >

    