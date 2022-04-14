<script setup>
import TopNavigation from '../components/TopNavigation.vue';
import { useTopNav } from '@/stores/topnav'
import { useMemberStore } from '@/stores/member'

const topnav = useTopNav()
const store = useMemberStore()
 

 const submitSection4 = () => {
  topnav.$patch({
    steps: [
      { id: '01', name: 'Personal Information', status: 'complete' },
      { id: '02', name: 'Organisational Membership', status: 'complete' },
      { id: '03', name: 'Employment / Schooling', status: 'complete' },
      { id: '04', name: 'Formal Education', status: 'complete' },
      { id: '05', name: 'Skills & Knowledge', status: 'current' },
      { id: '06', name: 'Next of Kin', status: 'upcoming' }      
    ]
                })
    store.$patch({ navigationLog: 5})
}
const goBack = () => {
  store.$patch({ navigationLog: 3})
}
 
</script>

<template>
<div>
<TopNavigation></TopNavigation>
</div>

     <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900 text-center md:text-left">Section 4: Formal Education</h3>
            <p class="mt-1 text-red-800 font-semibold text-center md:text-left" > {{ store.member.firstName }} {{ store.member.surname }} </p>
            <p class="mt-1 text-sm text-gray-500 text-center md:text-left" > {{ store.member.circuit }} </p>
            <p class="mt-1 text-sm text-gray-500 text-center md:text-left" > {{ store.member.society }} </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="submitSection4">
              
            <div class="grid grid-cols-6 gap-6">
              

              <div class="col-span-6">
              <label class="text-base font-medium text-gray-900">Formal Education</label>
              <p class="text-sm leading-5 text-gray-500">Please select highest level completed</p>
              <fieldset class="mt-4">
                <legend class="sr-only">Notification method</legend>
                <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">

                  <div class="col-span-6 sm:col-span-3 space-y-1">
                      <div class="flex items-center">
                    <input id="no-formal" name="education" type="radio"  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" v-model.lazy="store.member.formalEducation.highestLevel" value="No formal education"/>
                    <label for="no-formal" class="ml-3 block text-sm font-medium text-gray-700">
                      No formal education
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="grade11" name="education" type="radio"  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" v-model.lazy="store.member.formalEducation.highestLevel" value="Grade 0-11 (up to Form 4)" />
                    <label for="grade11" class="ml-3 block text-sm font-medium text-gray-700">
                      Grade 0-11 (up to Form 4)
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input id="grade12" name="education" type="radio"  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" v-model.lazy="store.member.formalEducation.highestLevel" value="Grade 12/ Std 10/ Form 5" />
                    <label for="grade12" class="ml-3 block text-sm font-medium text-gray-700">
                      Grade 12/ Std 10/ Form 5
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input id="certificate" name="education" type="radio"  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" v-model.lazy="store.member.formalEducation.highestLevel" value="Certificate (post-matric)" />
                    <label for="certificate" class="ml-3 block text-sm font-medium text-gray-700">
                      Certificate (post-matric)
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input id="diploma" name="education" type="radio"  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"  v-model.lazy="store.member.formalEducation.highestLevel" value="Diploma" />
                    <label for="diploma" class="ml-3 block text-sm font-medium text-gray-700">
                      Diploma
                    </label>
                  </div>

                  </div>

                  <div class="col-span-6 sm:col-span-3 space-y-1">
                    <div class="flex items-center">
                    <input id="advDiploma" name="education" type="radio"  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" v-model.lazy="store.member.formalEducation.highestLevel" value="Higher / Advanced Diploma" />
                    <label for="advDiploma" class="ml-3 block text-sm font-medium text-gray-700">
                      Higher / Advanced Diploma
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input id="degree" name="education" type="radio"  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" v-model.lazy="store.member.formalEducation.highestLevel" value="Bachelors Degree" />
                    <label for="degree" class="ml-3 block text-sm font-medium text-gray-700">
                      Bachelors Degree
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input id="honours" name="education" type="radio"  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" v-model.lazy="store.member.formalEducation.highestLevel" value="Honours / PG Diploma" />
                    <label for="honours" class="ml-3 block text-sm font-medium text-gray-700">
                      Honours / PG Diploma
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input id="masters" name="education" type="radio"  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" v-model.lazy="store.member.formalEducation.highestLevel" value="Masters Degree" />
                    <label for="masters" class="ml-3 block text-sm font-medium text-gray-700">
                      Masters Degree
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input id="phd" name="education" type="radio"  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" v-model.lazy="store.member.formalEducation.highestLevel" value="Phd / Doctorate" />
                    <label for="phd" class="ml-3 block text-sm font-medium text-gray-700">
                      Phd / Doctorate
                    </label>
                  </div>

                  </div>



                </div>
              </fieldset>
            </div>

              
              <div class="col-span-6 sm:col-span-3">
              <label for="other-education" class="block text-sm font-medium text-gray-700">Other (Not listed)</label>
              <input type="text" name="other-education" id="other-education" autocomplete="other-education" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border p-2 border-gray-300 rounded-md" v-model.lazy="store.member.formalEducation.other"/>
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