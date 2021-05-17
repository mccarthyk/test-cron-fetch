import { reactive } from 'vue'
import airtable from './airtable'

export const meetings = reactive({
  error: '',
  loading: false,
  data: [],
})

export async function fetchMeetings() {
  meetings.loading = true
  try {
    const { data } = await airtable.get(`/meetings`, {
      params: {
        // filterByFormula: ``,
        view: 'AppView',
      },
    })

    meetings.data = data.records
  } catch (error) {
    // error
    // 401 unauth
    // 422 (Unprocessable Entity)

    meetings.error = error.message
  } finally {
    meetings.loading = false
  }
}
