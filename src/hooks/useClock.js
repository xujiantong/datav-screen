import { ref , onMounted, onUnmounted} from 'vue'

function dateFilter (v) {
  let m = fillZero(v.getMonth() + 1)
  let d = fillZero(v.getDate())
  return `${v.getFullYear()}-${m}-${d}`
}

function timeFilter (v) {
  let h = fillZero(v.getHours())
  let m = fillZero(v.getMinutes())
  let s = fillZero(v.getSeconds())
  return `${h}:${m}:${s}`
}

function fillZero (v) {
  return v < 10 ? '0' + v : v
}

export function clock () {
  const now = new Date()
  const date = ref(dateFilter(now))
  const time = ref(timeFilter(now))

  let task
  const start = () => {
    task = setInterval(() => {
      const now = new Date()
      date.value = dateFilter(now)
      time.value = timeFilter(now)
    }, 1000)
  }
  onMounted(start);
  onUnmounted(()=>{
    task && clearInterval(task);
  })
  return {
    date,
    time
  }
}
