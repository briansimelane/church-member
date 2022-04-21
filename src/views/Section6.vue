<script setup>
import { CheckIcon } from '@heroicons/vue/solid'
import TopNavigation from '../components/TopNavigation.vue';
import { useTopNav } from '@/stores/topnav'
import { useMemberStore } from '@/stores/member'

const topnav = useTopNav()
const store = useMemberStore()
 

 const submitSection7 = () => {
store.addMemberToDatabase()

  topnav.$patch({
    steps: [
      { id: '01', name: 'Personal Information', status: 'complete' },
      { id: '02', name: 'Organisational Membership', status: 'complete' },
      { id: '03', name: 'Employment / Schooling', status: 'complete' },
      { id: '04', name: 'Formal Education', status: 'complete' },
      { id: '05', name: 'Skills & Knowledge', status: 'complete' },
      { id: '06', name: 'Giving', status: 'complete' },
      { id: '07', name: 'Next of Kin', status: 'complete' }    
    ]
                })
    store.$patch({ navigationLog: 8})
}

const goBack = () => {
  store.$patch({ navigationLog: 6})

  topnav.$patch({
    steps: [
      { id: '01', name: 'Personal Information', status: 'complete' },
      { id: '02', name: 'Organisational Membership', status: 'complete' },
      { id: '03', name: 'Employment / Schooling', status: 'complete' },
      { id: '04', name: 'Formal Education', status: 'complete' },
      { id: '05', name: 'Skills & Knowledge', status: 'complete' },
      { id: '06', name: 'Giving', status: 'current' },
      { id: '07', name: 'Next of Kin', status: 'upcoming' }     
    ]
                })
}
 
</script>

<template>
<div>
<TopNavigation></TopNavigation>
</div>

     <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900 text-center md:text-left">Section 7: Next of kin</h3>
  <p class="mt-1 text-red-800 font-semibold text-center md:text-left" > {{ store.member.firstName }} {{ store.member.surname }} </p>
    <p class="mt-1 text-sm text-gray-500 text-center md:text-left" > {{ store.member.circuit }} </p>
      <p class="mt-1 text-sm text-gray-500 text-center md:text-left" > {{ store.member.society }} </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="submitSection7">
              <div class="grid grid-cols-6 gap-6 mb-2">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="nok-name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="nok-name" id="nok-name" autocomplete="nok-name" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300 rounded-md" required  v-model.lazy="store.member.nextOfKin.name"/>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label for="nok-surname" class="block text-sm font-medium text-gray-700">Surname</label>
              <input type="text" name="nok-surname" id="nok-surname" autocomplete="nok-surname" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300 rounded-md" required v-model.lazy="store.member.nextOfKin.surname" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label for="nok-number" class="block text-sm font-medium text-gray-700">Contact number</label>
              <input type="text" name="nok-number" id="nok-number" autocomplete="nok-number" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300 rounded-md" required v-model.lazy="store.member.nextOfKin.number" />
                </div>
                
              </div>
              
              <div class="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3 col-span-6">
              <div class="flex">
                <button type="button" class="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group" @click="goBack">                  
                  <span class="text-sm text-gray-500 group-hover:text-gray-600 italic"> &lt; Go back </span>
                </button>
              </div>
              <div class="flex-shrink-0">
                <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Finish</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
</template>



<style>

</style>