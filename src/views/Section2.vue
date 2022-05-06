<script setup>
import { CheckIcon } from '@heroicons/vue/solid'
import TopNavigation from '../components/TopNavigation.vue';
import { useTopNav } from '@/stores/topnav'
import { useMemberStore } from '@/stores/member'

const topnav = useTopNav()
const store = useMemberStore()
 

 const submitSection2 = () => {
  topnav.$patch({
    steps: [
      { id: '01', name: 'Personal Information', status: 'complete' },
      { id: '02', name: 'Organisational Membership', status: 'complete' },
      { id: '03', name: 'Employment / Schooling', status: 'current' },
      { id: '04', name: 'Formal Education', status: 'upcoming' },
      { id: '05', name: 'Skills & Knowledge', status: 'upcoming' },
      { id: '06', name: 'Giving', status: 'upcoming' },
      { id: '07', name: 'Next of Kin', status: 'upcoming' }      
    ]
                })
    store.$patch({ navigationLog: 3})
}

const goBack = () => {
  store.$patch({ navigationLog: 1})

  topnav.$patch({
    steps: [
      { id: '01', name: 'Personal Information', status: 'current' },
      { id: '02', name: 'Organisational Membership', status: 'upcoming' },
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
          <h3 class="text-lg font-medium leading-6 text-gray-900 text-center md:text-left">Section 2: Organisational Membership (including On-Trial)</h3>
              <p class="mt-1 text-red-800 font-semibold text-center md:text-left" > {{ store.member.firstName }} {{ store.member.surname }} </p>
              <p class="mt-1 text-sm text-gray-500 text-center md:text-left" >  {{ store.member.circuit }} </p>
              <p class="mt-1 text-sm text-gray-500 text-center md:text-left" >  {{ store.member.society }} </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="submitSection2">
              
            <div class="grid grid-cols-6 gap-6">
              

              <div class="col-span-6 sm:col-span-3">
              <fieldset class="space-y-2">
                <label for="home-address" class="block text-sm font-medium text-gray-700">Which organisations do you belong to? (Select all)</label>
                <legend class="sr-only">Notifications</legend>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="children-ministry" aria-describedby="children-ministry" name="children-ministry" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.organisations.childrensMinistry" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="children-ministry" class="font-medium text-gray-700">Children's Ministry</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="forum" aria-describedby="forum" name="forum" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.organisations.forum" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="forum" class="font-medium text-gray-700">Forum</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="local-preachers" aria-describedby="local-preachers" name="local-preachers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.organisations.preachers" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="local-preachers" class="font-medium text-gray-700">Local Preachers (LPD / LPA)</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="methsoc" aria-describedby="methsoc" name="methsoc" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.organisations.methsoc" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="methsoc" class="font-medium text-gray-700">METHSOC</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="music-ministry" aria-describedby="music-ministry" name="music-ministry" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.organisations.music" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="music-ministry" class="font-medium text-gray-700">Music Ministry</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="evangelism" aria-describedby="evangelism" name="evangelism" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.organisations.evangelism" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="evangelism" class="font-medium text-gray-700">Order of Evangelism</label>
                  </div>
                </div>
                 <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="wesley-guild" aria-describedby="wesley-guild" name="wesley-guild" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.organisations.wesleyGuild" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="wesley-guild" class="font-medium text-gray-700">Wesley Guild</label>
                  </div>
                </div>
              </fieldset>
              </div>

              <div class="col-span-6 sm:col-span-3">
              <fieldset class="space-y-2">
                <label for="home-address" class="text-sm font-medium text-gray-700 hidden md:block">&nbsp;</label>
                <legend class="sr-only">Organisations</legend>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="womens-fellowship" aria-describedby="womens-fellowship" name="womens-fellowship" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.organisations.womensFellowship" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="womens-fellowship" class="font-medium text-gray-700">Women's Fellowship</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="womens-manyano" aria-describedby="womens-manyano" name="womens-manyano" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.organisations.womensManyano" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="womens-manyano" class="font-medium text-gray-700">Women's Manyano</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="yam" aria-describedby="yam" name="yam" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.organisations.yam" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="yam" class="font-medium text-gray-700">Young Adults Movement</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="ymg" aria-describedby="ymg" name="ymg" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.organisations.ymg" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="ymg" class="font-medium text-gray-700">Young Men's Guild</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="ywm" aria-describedby="ywm" name="ywm" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.organisations.ywm" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="ywm" class="font-medium text-gray-700">Young Women's Manyano</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="none" aria-describedby="none" name="none" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.organisations.notAmember" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="none" class="font-medium text-gray-700">Not a member of an organisation</label>
                  </div>
                </div>
              </fieldset> 
              </div>
              <div class="col-span-6 sm:col-span-3">
              <label for="other-organisation" class="block text-sm font-medium text-gray-700">Other (Not listed)</label>
              <input type="text" name="other-organisation" id="other-organisation" autocomplete="other-organisation" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300 rounded-md"  v-model.lazy="store.member.organisations.other" />
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