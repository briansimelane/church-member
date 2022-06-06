<!-- This example requires Tailwind CSS v2.0 + -->
<script setup>
import { computed, ref } from 'vue';
import { membersData } from '../firebase/config'
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/vue/solid'

const stats = [
  { name: 'Total Subscribers', stat: '71,897', previousStat: '70,946', change: '12%', changeType: 'increase' },
  { name: 'Avg. Open Rate', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
  { name: 'Avg. Click Rate', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]
const members = ref(membersData)    


// Different societies filters
const dubeMembers = computed(() => {
  let membersTofilter = members.value
  return membersTofilter.filter((membersTofilter) => membersTofilter.society === 'Dube')
})

const ikweziMembers = computed(() => {
  let membersTofilter = members.value
  return membersTofilter.filter((membersTofilter) => membersTofilter.society === 'Ikwezi')
})

const jabulaniMembers = computed(() => {
  let membersTofilter = members.value
  return membersTofilter.filter((membersTofilter) => membersTofilter.society === 'Jabulani')
})

const jabavu7amMembers = computed(() => {
  let membersTofilter = members.value
  return membersTofilter.filter((membersTofilter) => membersTofilter.society === 'Jabavu 7am')
})

const jabavu11amMembers = computed(() => {
  let membersTofilter = members.value
  return membersTofilter.filter((membersTofilter) => membersTofilter.society === 'Jabavu 11am')
})

const morokaMembers = computed( () => {
  let membersTofilter = members.value
  return membersTofilter.filter((membersTofilter) => membersTofilter.society === 'Moroka')
})

const zondiMembers = computed(() => {
  let membersTofilter = members.value
  return membersTofilter.filter((membersTofilter) => membersTofilter.society === 'Zondi')
})

// Percentages calculations
const totalCircuitNumber = members.value.length
const dubePercentage = ((dubeMembers.value.length / totalCircuitNumber) * 100).toFixed(2)
const ikweziPercentage = ((ikweziMembers.value.length / totalCircuitNumber) * 100).toFixed(2)
const jabulaniPercentage = ((jabulaniMembers.value.length / totalCircuitNumber) * 100).toFixed(2)
const jabavu7amPercentage = ((jabavu7amMembers.value.length / totalCircuitNumber) * 100).toFixed(2)
const jabavu11amPercentage = ((jabavu11amMembers.value.length / totalCircuitNumber) * 100).toFixed(2)
const morokaPercentage = ((morokaMembers.value.length / totalCircuitNumber) * 100).toFixed(2)
const zondiPercentage = ((zondiMembers.value.length / totalCircuitNumber) * 100).toFixed(2)


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
              <p class="mt-2 text-sm text-gray-300">These are the members recorded as at: date</p>
            </div>

          </div>
          <div class="mt-8 flex flex-col">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                  <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Society</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Members
                          recorded</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">% of Circuit
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white">
                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">Dube</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ dubeMembers.length }}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ dubePercentage }}%</td>
                      </tr>

                      <tr class="bg-white">
                        <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">Ikwezi</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ ikweziMembers.length }}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ ikweziPercentage}}%</td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">Jabulani</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{jabulaniMembers.length }}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ jabulaniPercentage}}%</td>
                      </tr>

                      <tr class="bg-white">
                        <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">Jabavu 7am</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ jabavu7amMembers.length }}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ jabavu7amPercentage }}%</td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">Jabavu 11am</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ jabavu11amMembers.length }}
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ jabavu11amPercentage }}%</td>
                      </tr>

                      <tr class="bg-white">
                        <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">Moroka</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ morokaMembers.length }}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ morokaPercentage }}%</td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">Zondi</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ zondiMembers.length }}
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ zondiPercentage}}%</td>
                      </tr>

                      <tr class="bg-white border-t-2">
                        <td class="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900">JABAVU CIRCUIT</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm font-semiboldtext-gray-500">{{ totalCircuitNumber
                        }}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">100%</td>
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
    
