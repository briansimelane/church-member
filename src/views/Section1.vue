<script setup>
import { CheckIcon } from '@heroicons/vue/solid'
import TopNavigation from '../components/TopNavigation.vue';
import { useTopNav } from '@/stores/topnav'
import { useMemberStore } from '@/stores/member'

const topnav = useTopNav()
const store = useMemberStore()

const submitSection1 = () => {
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
    store.$patch({ navigationLog: 2})
}

const goBack = () => {
  store.$patch({ navigationLog: 0})

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
          <h3 class="text-lg font-medium leading-6 text-gray-900 text-center md:text-left">Section 1: Personal Information</h3>
  <p class="mt-1 text-sm text-gray-500 text-center md:text-left" > Circuit / Section: {{ store.member.circuit }} </p>
  <p class="mt-1 text-sm text-gray-500 text-center md:text-left" > Society: {{ store.member.society }} </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="submitSection1">
              <div class="grid grid-cols-6 gap-6 mb-2">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="class-number" class="block text-sm font-medium text-gray-700">Class number</label>
              <input type="text" name="class-number" id="class-number" autocomplete="class-number" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300 rounded-md" required v-model.lazy="store.member.classNumber" />
                </div>
                
                    <div class="col-span-6 sm:col-span-3">
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
              <select id="title" name="title" autocomplete="title" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" required v-model.lazy="store.member.title">
                    <option></option>
                  <option>Miss</option>
                  <option>Ms</option>
                  <option>Mrs</option>
                  <option>Mr</option>
                  <option>Dr</option>
                  <option>Prof</option>
                  <option>BBW</option>
                  <option>Eva</option>
                  <option>Deac</option>
                  <option>Rev</option>
                  
                </select>
              </div>
              </div>
              

            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300  rounded-md" required v-model.lazy="store.member.firstName"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="middle-name" class="block text-sm font-medium text-gray-700">Middle name</label>
              <input type="text" name="middle-name" id="middle-name" autocomplete="middle-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300 rounded-md" v-model.lazy="store.member.middleName" />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Surname</label>
              <input type="text" name="last-name" id="last-name" autocomplete="last-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300  rounded-md" required v-model.lazy="store.member.surname"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="known-as" class="block text-sm font-medium text-gray-700">Known as</label>
              <input type="text" name="known-as" id="known-as" autocomplete="known-as" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300 rounded-md" required v-model.lazy="store.member.knownAs" />
              </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="birthday" class="block text-sm font-medium text-gray-700">Date of birth</label>
              <input type="date" name="birthday" id="birthday" autocomplete="birthday" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300 rounded-md" required v-model.lazy="store.member.birthDate" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="country" class="block text-sm font-medium text-gray-700">Gender</label>
              <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" required v-model.lazy="store.member.gender">
                <option></option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="cell-number" class="block text-sm font-medium text-gray-700">Cell number</label>
              <input type="text" name="cell-number" id="cell-number" autocomplete="cell-number" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300  rounded-md" v-model.lazy="store.member.cellNumber" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="other-number" class="block text-sm font-medium text-gray-700">Other number</label>
              <input type="text" name="other-number" id="other-number" autocomplete="other-number" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300 rounded-md" v-model.lazy="store.member.otherNumber" />
            </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300 rounded-md" v-model.lazy="store.member.email" />
              </div>

            <div class="col-span-6 sm:col-span-4">
              <label for="home-address" class="block text-sm font-medium text-gray-700">Home address</label>
              <div class="mt-1">
                <textarea rows="4" name="home-address" id="home-address" class="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md" required v-model.lazy="store.member.homeAddress" />
              </div>
              </div>

              <div class="col-span-6">
              <fieldset class="space-y-2">
                <label for="home-address" class="block text-sm font-medium text-gray-700">Please select all your preferred methods of communication</label>
                <legend class="sr-only">Notifications</legend>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="sms" aria-describedby="comments-description" name="sms" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.communicationMethod.cellphone"/>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="sms" class="font-medium text-gray-700">Cellphone (SMS)</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="announcements" aria-describedby="comments-description" name="announcements" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.communicationMethod.announcements"  />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="announcements" class="font-medium text-gray-700">Announcements</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="email" aria-describedby="comments-description" name="email" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.communicationMethod.email" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="email" class="font-medium text-gray-700">Email</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="web" aria-describedby="web" name="web" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" v-model.lazy="store.member.communicationMethod.facebook" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="web" class="font-medium text-gray-700">Facebook / Web</label>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input id="whatsapp" aria-describedby="whatsapp" name="whatsapp" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"  v-model.lazy="store.member.communicationMethod.whatsapp" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="whatsapp" class="font-medium text-gray-700">Whatsapp</label>
                  </div>
                </div>
              </fieldset>
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