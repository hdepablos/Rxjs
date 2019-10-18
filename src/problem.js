import { interval } from 'rxjs'
import { filter, map, take, scan } from 'rxjs/operators'

const btn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const display = document.querySelector('#problem .result')

const people = [
  { name: 'Vladilen', age: 25 },
  { name: 'Elena', age: 17 },
  { name: 'Ivan', age: 18 },
  { name: 'Igor', age: 14 },
  { name: 'Lisa', age: 32 },
  { name: 'Irina', age: 23 },
  { name: 'Oleg', age: 20 }
]

rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled = true
  interval(1000)
    .pipe(
      take(people.length),
      filter(n => people[n].age >= 18),
      map(n => people[n].name),
      scan((acc, n) => acc.concat(n), [])
    )
    .subscribe(res => {
      console.log(res)
      display.textContent = res.join(' ');
    }, null, () => {
      rxjsBtn.disabled = false
    })
})

