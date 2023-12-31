import { ref, computed } from 'vue'

const selectedDate = ref(new Date())
const habitBank = ref(
  JSON.parse(localStorage.getItem('habits')) || ['Take a walk', 'Meditate', 'Drink water']
)
if (!localStorage.getItem('habits')) {
  localStorage.setItem('habits', JSON.stringify(habitBank.value))
}
const today = new Date().toLocaleDateString('en-CA')

const monthDay = computed(() => {
  const format = { month: 'long', day: 'numeric' }
  return selectedDate.value.toLocaleDateString('en-US', format)
})

export default {
  selectedDate,
  habitBank,
  today,
  monthDay
}
