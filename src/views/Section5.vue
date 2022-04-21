<script setup>
import { CheckIcon } from '@heroicons/vue/solid'
import TopNavigation from '../components/TopNavigation.vue';
import { useTopNav } from '@/stores/topnav'
import { useMemberStore } from '@/stores/member'

const topnav = useTopNav()
const store = useMemberStore()


 const submitSection6 = () => {

  topnav.$patch({
    steps: [
      { id: '01', name: 'Personal Information', status: 'complete' },
      { id: '02', name: 'Organisational Membership', status: 'complete' },
      { id: '03', name: 'Employment / Schooling', status: 'complete' },
      { id: '04', name: 'Formal Education', status: 'complete' },
      { id: '05', name: 'Skills & Knowledge', status: 'complete' },
      { id: '06', name: 'Giving', status: 'complete' },
      { id: '07', name: 'Next of Kin', status: 'current' }     
    ]
                })
    store.$patch({ navigationLog: 7})
}

const goBack = () => {
  store.$patch({ navigationLog: 5})

  topnav.$patch({
    steps: [
      { id: '01', name: 'Personal Information', status: 'complete' },
      { id: '02', name: 'Organisational Membership', status: 'complete' },
      { id: '03', name: 'Employment / Schooling', status: 'complete' },
      { id: '04', name: 'Formal Education', status: 'complete' },
      { id: '05', name: 'Skills & Knowledge', status: 'current' },
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
          <h3 class="text-lg font-medium leading-6 text-gray-900 text-center md:text-left">Section 6: Planned Giving</h3>
  <p class="mt-1 text-red-800 font-semibold text-center md:text-left" > {{ store.member.firstName }} {{ store.member.surname }} </p>
    <p class="mt-1 text-sm text-gray-500 text-center md:text-left" > {{ store.member.circuit }} </p>
      <p class="mt-1 text-sm text-gray-500 text-center md:text-left" > {{ store.member.society }} </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="submitSection6">
                  <div class="px-4 sm:px-6 lg:px-8 mb-4">
                    <div class="sm:flex sm:items-center">
                      <div class="sm:flex-auto">
                        <h1 class="text-xl font-semibold text-gray-900">Planned Giving</h1>
                        <p class="mt-2 text-sm text-gray-700">Please list your planned giving as your heart wills. This is your intention not forced on you.</p>
                      </div>
                      
                    </div>
                    <div class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-300">
                        <thead class="bg-gray-50">
                          <tr>
                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Contribution type</th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">How often?</th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount range?</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr class="bg-white">
                            <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                <fieldset class="">
                                <legend class="sr-only">Pledge</legend>
                                <div class="relative flex items-start">
                                  <div class="flex items-center h-5">
                                    <input id="pledge" aria-describedby="pledge-description" name="pledge" type="checkbox" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded" v-model="store.member.plannedGiving.pledge" />
                                  </div>
                                  <div class="ml-3 text-sm">
                                    <label for="pledge" class="font-medium text-gray-700">PLEDGE </label>
                                    <span id="pledge-description" class="text-gray-500 italic"> (tick if relevant to you)</span>
                                  </div>
                                </div>
                              </fieldset>
                            </td>
                            <td class="px-3 py-4 pl-4 pr-3  text-sm text-gray-900">
                                <div>
                                  <select id="pledgeFrequency" name="pledgeFrequency" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" v-model="store.member.plannedGiving.pledgeFrequency">
                                    <option value=""></option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Quarterly">Quarterly</option>
                                    <option value="Yearly">Yearly</option>
                                  </select>
                                </div>
                            </td>
                            <td class="px-3 py-4 text-sm text-gray-900">
                              <div>
                                  <select id="pledgeAmount" name="pledgeAmount" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" v-model="store.member.plannedGiving.pledgeAmountRange">
                                    <option value=""></option>
                                    <option value="R50 - R100">R50 - R100</option>
                                    <option value="R101 - R250">R101 - R250</option>
                                    <option value="R251 - R400">R251 - R400</option>
                                    <option value="R401 - R600">R401 - R600</option>
                                    <option value="R601 - R1,000">R601 - R1,000</option>
                                    <option value="R1,001 +">R1,001 +</option>
                                  </select>
                                </div>
                            </td>                            
                          </tr>

                          <tr class="bg-gray-50">
                            <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                <fieldset class="">
                                <legend class="sr-only">Tithe</legend>
                                <div class="relative flex items-start">
                                  <div class="flex items-center h-5">
                                    <input id="tithe" aria-describedby="tithe-description" name="tithe" type="checkbox" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded" v-model="store.member.plannedGiving.tithe" />
                                  </div>
                                  <div class="ml-3 text-sm">
                                    <label for="tithe" class="font-medium text-gray-700">TITHE </label>
                                    <span id="tithe-description" class="text-gray-500 italic"> (tick if relevant to you)</span>
                                  </div>
                                </div>
                              </fieldset>
                            </td>
                            <td class="px-3 py-4 pl-4 pr-3  text-sm text-gray-900">
                                <div>
                                  <select id="titheFrequency" name="titheFrequency" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" v-model="store.member.plannedGiving.titheFrequency">
                                    <option value=""></option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Quarterly">Quarterly</option>
                                    <option value="Yearly">Yearly</option>
                                  </select>
                                </div>
                            </td>
                            <td class="px-3 py-4 text-sm text-gray-900">
                              <div>
                                  <select id="titheAmount" name="titheAmount" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" v-model="store.member.plannedGiving.titheAmountRange">
                                    <option value=""></option>
                                    <option value="R50 - R100">R50 - R100</option>
                                    <option value="R101 - R250">R101 - R250</option>
                                    <option value="R251 - R400">R251 - R400</option>
                                    <option value="R401 - R600">R401 - R600</option>
                                    <option value="R601 - R1,000">R601 - R1,000</option>
                                    <option value="R1,001 +">R1,001 +</option>
                                  </select>
                                </div>
                            </td>                            
                          </tr>

                          <tr class="bg-white">
                            <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                <fieldset class="">
                                <legend class="sr-only">Donation</legend>
                                <div class="relative flex items-start">
                                  <div class="flex items-center h-5">
                                    <input id="tithe" aria-describedby="tithe-description" name="tithe" type="checkbox" class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded" v-model="store.member.plannedGiving.donation" />
                                  </div>
                                  <div class="ml-3 text-sm">
                                    <label for="tithe" class="font-medium text-gray-700">DONATION </label>
                                    <span id="tithe-description" class="text-gray-500 italic"> (tick if relevant to you)</span>
                                  </div>
                                </div>
                              </fieldset>
                            </td>
                            <td class="px-3 py-4 pl-4 pr-3  text-sm text-gray-900">
                                <div>
                                  <select id="donationFrequency" name="titheFrequency" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" v-model="store.member.plannedGiving.donationFrequency">
                                    <option value=""></option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Quarterly">Quarterly</option>
                                    <option value="Yearly">Yearly</option>
                                  </select>
                                </div>
                            </td>
                            <td class="px-3 py-4 text-sm text-gray-900">
                              <div>
                                  <select id="donationAmount" name="titheAmount" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" v-model="store.member.plannedGiving.donationAmountRange">
                                    <option value=""></option>
                                    <option value="R50 - R100">R50 - R100</option>
                                    <option value="R101 - R250">R101 - R250</option>
                                    <option value="R251 - R400">R251 - R400</option>
                                    <option value="R401 - R600">R401 - R600</option>
                                    <option value="R601 - R1,000">R601 - R1,000</option>
                                    <option value="R1,001 +">R1,001 +</option>
                                  </select>
                                </div>
                            </td>                            
                          </tr>

                        </tbody>
                      </table>
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

          </form>
        </div>
      </div>
    </div>
</template>



<style>

</style>