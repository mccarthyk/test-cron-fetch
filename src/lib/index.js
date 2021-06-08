import { reactive } from 'vue'
import axios from 'axios'

export const meetings = reactive({
  error: '',
  loading: false,
  data: [],
})

export async function fetchMeetings() {
  meetings.loading = true
  try {
    const { data } = await axios.get(`./meetings.json`)

    meetings.data = data.records
  } catch (error) {
    meetings.error = error.message
  } finally {
    meetings.loading = false
  }
}
