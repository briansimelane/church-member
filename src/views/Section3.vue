<script setup>
import { CheckIcon } from '@heroicons/vue/solid'
import TopNavigation from '../components/TopNavigation.vue';
import { useTopNav } from '@/stores/topnav'
import { useMemberStore } from '@/stores/member'

const topnav = useTopNav()
const store = useMemberStore()
 

 const submitSection3 = () => {
  topnav.$patch({
    steps: [
      { id: '01', name: 'Personal Information', status: 'complete' },
      { id: '02', name: 'Organisational Membership', status: 'complete' },
      { id: '03', name: 'Employment / Schooling', status: 'complete' },
      { id: '04', name: 'Formal Education', status: 'current' },
      { id: '05', name: 'Skills & Knowledge', status: 'upcoming' },
      { id: '06', name: 'Giving', status: 'upcoming' },
      { id: '07', name: 'Next of Kin', status: 'upcoming' }     
    ]
                })
    store.$patch({ navigationLog: 4})
}

const goBack = () => {
  store.$patch({ navigationLog: 2})

  topnav.$patch({
    steps: [
      { id: '01', name: 'Personal Information', status: 'complete' },
      { id: '02', name: 'Organisational Membership', status: 'current' },
      { id: '03', name: 'Employment / Schooling', status: 'upcoming' },
      { id: '04', name: 'Formal Education', status: 'upcoming' },
      { id: '05', name: 'Skills & Knowledge', status: 'upcoming' },
      { id: '06', name: 'Giving', status: 'upcoming' },
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
          <h3 class="text-lg font-medium leading-6 text-gray-900 text-center md:text-left">Section 3: Employment / Schooling</h3>
            <p class="mt-1 text-red-800 font-semibold text-center md:text-left" > {{ store.member.firstName }} {{ store.member.surname }} </p>
            <p class="mt-1 text-sm text-gray-500 text-center md:text-left" > {{ store.member.circuit }} </p>
            <p class="mt-1 text-sm text-gray-500 text-center md:text-left" > {{ store.member.society }} </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="submitSection3">
              
            <div class="grid grid-cols-6 gap-6">
              

              <div class="col-span-6">
              <fieldset class="space-y-2">
                <label for="home-address" class="block text-sm font-medium text-gray-700">Please select all applicable to you</label>
                <legend class="sr-only">Notifications</legend>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="ft-employed" aria-describedby="ft-employed" name="ft-employed" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"  v-model.lazy="store.member.employmentStatus.ftEmployed" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="ft-employed" class="font-medium text-gray-700">Employed (Full-time)</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="pt-employed" aria-describedby="pt-employed" name="pt-employed" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"  v-model.lazy="store.member.employmentStatus.ptEmployed" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="pt-employed" class="font-medium text-gray-700">Employed (Part-time)</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="pensioner" aria-describedby="pensioner" name="pensioner" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"  v-model.lazy="store.member.employmentStatus.pensioner" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="pensioner" class="font-medium text-gray-700">Pensioner</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="unemployed" aria-describedby="unemployed" name="unemployed" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"  v-model.lazy="store.member.employmentStatus.unemployed" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="unemployed" class="font-medium text-gray-700">Unemployed</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="business-owner" aria-describedby="business-owner" name="business-owner" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"  v-model.lazy="store.member.employmentStatus.businessOwner" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="business-owner" class="font-medium text-gray-700">Business Owner</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="scholar" aria-describedby="scholar" name="scholar" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"  v-model.lazy="store.member.employmentStatus.scholar" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="scholar" class="font-medium text-gray-700">Scholar (up to Grade 12)</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="student-ft" aria-describedby="student-ft" name="student-ft" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"  v-model.lazy="store.member.employmentStatus.ftStudent" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="student-ft" class="font-medium text-gray-700">Student (Full-time)</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="student-pt" aria-describedby="student-pt" name="student-pt" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"  v-model.lazy="store.member.employmentStatus.ptStudent" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="student-pt" class="font-medium text-gray-700">Student (Part-time)</label>
                  </div>
                </div>
                
              </fieldset>
              </div>

              
              <div class="col-span-6 sm:col-span-3">
              <label for="other-employment" class="block text-sm font-medium text-gray-700">Other (Not listed)</label>
              <input type="text" name="other-employment" id="other-employment" autocomplete="other-employment" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300 rounded-md"   v-model.lazy="store.member.employmentStatus.other" />
            </div>

            <div class="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3 col-span-6">
              <div class="flex">
                <button type="button" class="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group" @click="goBack">                  
                  <span class="text-sm text-gray-500 group-hover:text-gray-600 italic"> &lt; Go back </span>
                </button>
              </div>
              <div class="flex-shrink-0">
                <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Next section</button>
              </div>
            </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
</template>



<style>

</style>