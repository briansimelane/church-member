<script setup>
import { CheckIcon } from '@heroicons/vue/solid'
import TopNavigation from '../components/TopNavigation.vue';
import { useTopNav } from '@/stores/topnav'
import { useMemberStore } from '@/stores/member'

const topnav = useTopNav()
const store = useMemberStore()
 

 const submitSection5 = () => {
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
    store.$patch({ navigationLog: 6})
}

const goBack = () => {
  store.$patch({ navigationLog: 4})

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
}

</script>

<template>
<div>
<TopNavigation></TopNavigation>
</div>

     <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900 text-center md:text-left">Section 5: Skills and Knowledge </h3>
            <p class="mt-1 text-red-800 font-semibold text-center md:text-left" > {{ store.member.firstName }} {{ store.member.surname }} </p>
            <p class="mt-1 text-sm text-gray-500 text-center md:text-left" > {{ store.member.circuit }} </p>
            <p class="mt-1 text-sm text-gray-500 text-center md:text-left" > {{ store.member.society }} </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="submitSection5">
              
            <div class="grid grid-cols-6 gap-6">
              

              <div class="col-span-6 sm:col-span-3">
                  <label class="text-base font-medium text-gray-900">Field of study / knowledge / skill</label>
              <p class="text-sm leading-5 text-gray-500">Please select all fields applicable to you</p>

              <fieldset class="space-y-2">
                
                <legend class="sr-only">field</legend>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-agriculture" aria-describedby="fos-agriculture" name="fos-agriculture" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.agriculture" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-agriculture" class="font-medium text-gray-700">Agriculture or natural resources</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-arts" aria-describedby="fos-arts" name="fos-arts" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"  v-model.lazy="store.member.fieldOfStudy.arts" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-arts" class="font-medium text-gray-700">Arts (Visual / Performing)</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-civil" aria-describedby="fos-civil" name="fos-civil" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.civil" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-civil" class="font-medium text-gray-700">Civil Engineering or Construction</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-electrical" aria-describedby="fos-electrical" name="fos-electrical" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.electrical" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-electrical" class="font-medium text-gray-700">Electrical Infrastructure</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-finance" aria-describedby="fos-finance" name="fos-finance" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.finance" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-finance" class="font-medium text-gray-700">Finance, Economics and Accounting</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-hospitality" aria-describedby="fos-hospitality" name="fos-hospitality" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.hospitality" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-hospitality" class="font-medium text-gray-700">Hospitality</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-it" aria-describedby="fos-it" name="fos-it" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.informationTechnology" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-it" class="font-medium text-gray-700">Information Technology</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-linguistics" aria-describedby="fos-linguistics" name="fos-linguistics" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.linguistics" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-linguistics" class="font-medium text-gray-700">Linguistics and Literature</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-marketing" aria-describedby="fos-marketing" name="fos-marketing" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.marketing" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-marketing" class="font-medium text-gray-700">Marketing</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-military" aria-describedby="fos-military" name="fos-military" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.military" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-military" class="font-medium text-gray-700">Military Sciences</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-philosophy" aria-describedby="fos-philosophy" name="fos-philosophy" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.philosophy" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-philosophy" class="font-medium text-gray-700">Philosophy, Religion or Theology</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-psychology" aria-describedby="fos-psychology" name="fos-psychology" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.psychology" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-psychology" class="font-medium text-gray-700">Psychology</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-safety" aria-describedby="fos-safety" name="fos-safety" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.safety" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-safety" class="font-medium text-gray-700">Safety in Society</label>
                  </div>
                </div>


              </fieldset>
              </div>

              <div class="col-span-6 sm:col-span-3">
              <fieldset class="space-y-2">
                <label class="hidden md:block text-base font-medium text-gray-900">&nbsp;</label>
              <p class="hidden md:block text-sm leading-5 text-gray-500">&nbsp;</p>
                <legend class="sr-only">Notifications</legend>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-architecture" aria-describedby="fos-architecture" name="fos-architecture" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"  v-model.lazy="store.member.fieldOfStudy.architecture" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-architecture" class="font-medium text-gray-700">Architecture or design</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-business" aria-describedby="fos-business" name="fos-business" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.business" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-business" class="font-medium text-gray-700">Business or Management Sciences</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-education" aria-describedby="fos-education" name="fos-education" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.education" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-education" class="font-medium text-gray-700">Education, Training & Development</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-engineering" aria-describedby="fos-engineering" name="fos-engineering" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.engineering" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-engineering" class="font-medium text-gray-700">Engineering</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-health" aria-describedby="fos-health" name="fos-health" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.healthcare" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-health" class="font-medium text-gray-700">Healthcare and Health Sciences</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-hr" aria-describedby="fos-hr" name="fos-hr" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.humanResources" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-hr" class="font-medium text-gray-700">Human Resources</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-law" aria-describedby="fos-law" name="fos-law" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.law" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-law" class="font-medium text-gray-700">Law</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-sciences" aria-describedby="fos-sciences" name="fos-sciences" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.lifeSciences" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-sciences" class="font-medium text-gray-700">Life Sciences or Physical Sciences</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-mathematics" aria-describedby="fos-mathematics" name="fos-mathematics" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.mathematics" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-mathematics" class="font-medium text-gray-700">Mathematical Sciences</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-admin" aria-describedby="fos-admin" name="fos-admin" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.officeAdmin" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-admin" class="font-medium text-gray-700">Office Administration</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-physicalEd" aria-describedby="fos-physicalEd" name="fos-physicalEd" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.physicalEd" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-physicalEd" class="font-medium text-gray-700">Physical Education or Leisure</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-publicAdmin" aria-describedby="fos-publicAdmin" name="fos-publicAdmin" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.publicAdmin" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-publicAdmin" class="font-medium text-gray-700">Public Administration or Social Sciences</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="fos-tourism" aria-describedby="fos-tourism" name="fos-tourism" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.fieldOfStudy.tourism" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="fos-tourism" class="font-medium text-gray-700">Tourism</label>
                  </div>
                </div>

                
                
              </fieldset>
              </div>
              <div class="col-span-6 sm:col-span-3">
              <label for="other-field" class="block text-sm font-medium text-gray-700">Other (Not listed)</label>
              <input type="text" name="other-field" id="other-field" autocomplete="other-field" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300 rounded-md"  v-model.lazy="store.member.fieldOfStudy.otherField" />
            </div>
            
            <div class="col-span-6 sm:col-span-4">
              <label for="fos-talents" class="block text-sm font-medium text-gray-700">Other skills, competencies or talents you believe you have</label>
              <div class="mt-1">
                <textarea rows="4" name="fos-talents" id="fos-talents" class="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md" v-model.lazy="store.member.fieldOfStudy.otherSkill" />
              </div>
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