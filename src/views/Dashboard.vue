<!-- This example requires Tailwind CSS v2.0 + -->
<script setup>
import { reactive, computed, ref, onBeforeMount } from 'vue';
import { membersData, membersDube, membersIkwezi, membersJabavu7am, membersJabavu11am, membersJabulani,
  membersMoroka, membersZondi, membersDataReceived } from '../firebase/config'

const members = reactive(membersData)
const membersDubeAll = reactive(membersDube)
const membersIkweziAll = reactive(membersIkwezi)
const membersJabavu7amAll = reactive(membersJabavu7am)
const membersJabavu11amAll = reactive(membersJabavu11am)
const membersJabulaniAll = reactive(membersJabulani)
const membersMorokaAll = reactive(membersMoroka)
const membersZondiAll = reactive(membersZondi)
const receiptTracker = ref(membersDataReceived)
const showAdditionalData = ref(false)

const currentDate = new Date()

// calculations variables
const calcMembersAllMale = ref('no data yet')
const calcMembersAllFemale = ref('no data yet')
const calcMembersAllEmployed = ref('no data yet')


const calcMembersDubeMale = ref('no data yet')
const calcMembersDubeFemale = ref('no data yet')
const calcMembersDubeEmployed = ref('no data yet')

const calcMembersIkweziMale = ref('no data yet')
const calcMembersIkweziFemale = ref('no data yet')
const calcMembersIkweziEmployed = ref('no data yet')

const calcMembersJabavu7amMale = ref('no data yet')
const calcMembersJabavu7amFemale = ref('no data yet')
const calcMembersJabavu7amEmployed = ref('no data yet')

const calcMembersJabavu11amMale = ref('no data yet')
const calcMembersJabavu11amFemale = ref('no data yet')
const calcMembersJabavu11amEmployed = ref('no data yet')

const calcMembersJabulaniMale = ref('no data yet')
const calcMembersJabulaniFemale = ref('no data yet')
const calcMembersJabulaniEmployed = ref('no data yet')

const calcMembersMorokaMale = ref('no data yet')
const calcMembersMorokaFemale = ref('no data yet')
const calcMembersMorokaEmployed = ref('no data yet')

const calcMembersZondiMale = ref('no data yet')
const calcMembersZondiFemale = ref('no data yet')
const calcMembersZondiEmployed = ref('no data yet')

const updateData = () => {
  if (receiptTracker.value) {
    console.log('Data not yet received')
    // All members calculations
    calcMembersAllMale.value = members.value.filter(member => member.gender === 'Male')
    calcMembersAllFemale.value = members.value.filter(member => member.gender === 'Female')
    calcMembersAllEmployed.value = members.value.filter(member => member.employmentStatus_ftEmployed === true)

    // Dube members calculations
    calcMembersDubeMale.value = membersDubeAll.value.filter(member => member.gender === 'Male')
    calcMembersDubeFemale.value = membersDubeAll.value.filter(member => member.gender === 'Female')
    calcMembersDubeEmployed.value = membersDubeAll.value.filter(member => member.employmentStatus_ftEmployed === true)

    // Ikwezi members calculations
    calcMembersIkweziMale.value = membersIkweziAll.value.filter(member => member.gender === 'Male')
    calcMembersIkweziFemale.value = membersIkweziAll.value.filter(member => member.gender === 'Female')
    calcMembersIkweziEmployed.value = membersIkweziAll.value.filter(member => member.employmentStatus_ftEmployed === true)

    // Jabavu 7am members calculations
    calcMembersJabavu7amMale.value = membersJabavu7amAll.value.filter(member => member.gender === 'Male')
    calcMembersJabavu7amFemale.value = membersJabavu7amAll.value.filter(member => member.gender === 'Female')
    calcMembersJabavu7amEmployed.value = membersJabavu7amAll.value.filter(member => member.employmentStatus_ftEmployed === true)

    // Jabavu 11am members calculations
    calcMembersJabavu11amMale.value = membersJabavu11amAll.value.filter(member => member.gender === 'Male')
    calcMembersJabavu11amFemale.value = membersJabavu11amAll.value.filter(member => member.gender === 'Female')
    calcMembersJabavu11amEmployed.value = membersJabavu11amAll.value.filter(member => member.employmentStatus_ftEmployed === true)

    // Jabulani members calculations
    calcMembersJabulaniMale.value = membersJabulaniAll.value.filter(member => member.gender === 'Male')
    calcMembersJabulaniFemale.value = membersJabulaniAll.value.filter(member => member.gender === 'Female')
    calcMembersJabulaniEmployed.value = membersJabulaniAll.value.filter(member => member.employmentStatus_ftEmployed === true)

    // Moroka members calculations
    calcMembersMorokaMale.value = membersMorokaAll.value.filter(member => member.gender === 'Male')
    calcMembersMorokaFemale.value = membersMorokaAll.value.filter(member => member.gender === 'Female')
    calcMembersMorokaEmployed.value = membersMorokaAll.value.filter(member => member.employmentStatus_ftEmployed === true)

    // Zondi members calculations
    calcMembersZondiMale.value = membersZondiAll.value.filter(member => member.gender === 'Male')
    calcMembersZondiFemale.value = membersZondiAll.value.filter(member => member.gender === 'Female')
    calcMembersZondiEmployed.value = membersZondiAll.value.filter(member => member.employmentStatus_ftEmployed === true)

    showAdditionalData.value = true

  } else {
    console.log('Dashboard: Data received')
  }
}

</script>




<template>
  <div class="min-h-full">
    <div class="bg-gray-800 pb-32">

      <header class="py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-white">Dashboard: Jabavu Circuit</h1>
        </div>
      </header>
    </div>

    <main class="-mt-32">
      <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <!-- Replace with your content -->

        <div class="px-4 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
              <h1 class="text-xl font-semibold text-gray-200">Members recorded</h1>
              <p class="mt-2 text-sm text-gray-300">These are the members recorded as at: {{ currentDate }}</p>
            </div>

          </div>
          <div class="mt-8 flex flex-col">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">

                <button v-if="!receiptTracker" class="bg-gray-100 m-5 p-2 shadow-md rounded-md" disabled>Waiting for
                  data ...</button>
                <button v-if="receiptTracker" class="bg-green-300 m-5 p-2 shadow-md rounded-md"
                  @click="updateData">Click for results </button>


                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg"
                  v-if="showAdditionalData">
                  <h1 class="px-3 pt-2 text-xl font-semibold text-gray-800">Members in the system</h1>
                  <p class="mt-1 text-sm text-gray-600 italic text-center">Records as at: {{ currentDate }}</p>

                  <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Society</th>
                        <th scope="col" class="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center">
                          Recorded</th>
                        <th scope="col" class="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center">% of Circuit
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white">

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Dube
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ membersDubeAll.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((membersDubeAll.length / members.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Ikwezi
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ membersIkweziAll.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((membersIkweziAll.length / members.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Jabavu 7am
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ membersJabavu7amAll.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((membersJabavu7amAll.length / members.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Jabavu 11am
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ membersJabavu11amAll.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((membersJabavu11amAll.length / members.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Jabulani
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ membersJabulaniAll.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((membersJabulaniAll.length / members.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Moroka
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ membersMorokaAll.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((membersMorokaAll.length / members.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Zondi
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ membersZondiAll.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((membersZondiAll.length / members.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-white border-2 border-x">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-bold text-black">TOTAL
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm font-bold text-black text-center">
                          {{ members.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                        </td>
                      </tr>

                    </tbody>
                  </table>


                </div>


                <div v-if="showAdditionalData"
                  class="mt-5 overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                  <h1 class="px-3 pt-2 text-xl font-semibold text-gray-800">Members by gender</h1>
                  <p class="mt-1 text-sm text-gray-600 italic text-center">Records as at: {{ currentDate }}</p>
                  <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Society</th>
                        <th scope="col" class="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center">
                          Females</th>
                        <th scope="col" class="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center">Males
                        </th>

                      </tr>
                    </thead>
                    <tbody class="bg-white">

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Dube
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersDubeFemale.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          calcMembersDubeMale.length }}
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Ikwezi
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersIkweziFemale.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          calcMembersIkweziMale.length }}
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Jabavu 7am
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersJabavu7amFemale.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          calcMembersJabavu7amMale.length }}
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Jabavu 11am
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersJabavu11amFemale.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          calcMembersJabavu11amMale.length }}
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Jabulani
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersJabulaniFemale.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          calcMembersJabulaniMale.length }}
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Moroka
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersMorokaFemale.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          calcMembersMorokaMale.length }}
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Zondi
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersZondiFemale.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          calcMembersZondiMale.length }}
                        </td>
                      </tr>

                      <tr class="bg-white border-2 border-x">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-bold text-black">TOTAL
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm font-bold text-black text-center">
                          {{ calcMembersAllFemale.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm font-bold text-black text-center"> {{
                          calcMembersAllMale.length }}
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>

                <div v-if="showAdditionalData"
                  class="mt-5 overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                  <h1 class="px-3 pt-2 text-xl font-semibold text-gray-800">Full-time employed members</h1>
                  <p class="mt-1 text-sm text-gray-600 italic text-center">Records as at: {{ currentDate }}</p>
                  <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Society</th>
                        <th scope="col" class="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center">
                          FT Employed</th>
                        <th scope="col" class="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center">% of members
                        </th>

                      </tr>
                    </thead>
                    <tbody class="bg-white">

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Dube
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersDubeEmployed.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((calcMembersDubeEmployed.length / membersDubeAll.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Ikwezi
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersIkweziEmployed.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((calcMembersIkweziEmployed.length / membersIkweziAll.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Jabavu 7am
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersJabavu7amEmployed.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((calcMembersJabavu7amEmployed.length / membersJabavu7amAll.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Jabavu 11am
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersJabavu11amEmployed.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((calcMembersJabavu11amEmployed.length / membersJabavu11amAll.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Jabulani
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersJabulaniEmployed.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((calcMembersJabulaniEmployed.length / membersJabulaniAll.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Moroka
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersMorokaEmployed.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((calcMembersMorokaEmployed.length / membersMorokaAll.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">Zondi
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center">
                          {{ calcMembersZondiEmployed.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm text-gray-500 text-center"> {{
                          ((calcMembersZondiEmployed.length / membersZondiAll.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                      <tr class="bg-white border-2 border-x">
                        <td class="whitespace-nowrap px-3 py-2 text-sm font-bold text-black">TOTAL
                        </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm font-bold text-black text-center">
                          {{ calcMembersAllEmployed.length }} </td>
                        <td class="whitespace-nowrap px-1 py-2 text-sm font-bold text-black text-center"> {{
                          ((calcMembersAllEmployed.length / members.length)* 100).toFixed(2) }}
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>


          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
</template >
    
