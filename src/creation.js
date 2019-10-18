// import { of, from } from 'rxjs'
// import { scan } from 'rxjs/operators'

// const strem$ = of(  'hello', 'world')
// strem$.subscribe(val => console.log('Value: ', val));

// const arr$ = from([1,2,3,4,5,6,]).pipe(
//   scan((acc, v) => acc.concat(v), [])
// )
// arr$.subscribe(val => console.log(val));







// import { of, from, map, Observable, fromEvent } from 'rxjs'

// console.log('si entroooooo');

// const strem$ = new Observable(observer => {
//   observer.next('Firt Value')
//   setTimeout(() => observer.next('After 1000 ms'), 1000)
//   setTimeout(() => observer.complete(), 1500)
//   setTimeout(() => observer.error('Ha ocurrido un error'), 2000)
//   setTimeout(() => observer.next('After 1000 ms'), 3000)
// })

// strem$.subscribe(
//   (val) => console.log('val: ', val)
// )

// strem$.subscribe( 
//   (val) => console.log('val: ', val),
//   (err) => console.log(err),
//   () => console.log('completado llamado')  
// )

// strem$.subscribe({
//   next(val) {
//     console.log('val: ', val)
//   },
//   error(err) {
//     console.log(err)
//   },
//   complete() {
//     console.log('completado llamado')
//   }
// })

// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
//     map( e => ({
//       x: e.offsetX,
//       y: e.offsetY,
//       ctx: e.target.getContext('2d')
//     }))
//   )
//   .subscribe( pos => {
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2)
//   })


// const clear$ = fromEvent(document.getElementById('clear'), 'click')

// clear$.subscribe(() => {
//   const canvas = document.querySelector('canvas')
//   canvas.getContext('2d').clearRect(0,0,canvas.width, canvas.height)
// })

import { range, timer, interval } from 'rxjs'

// const sub = interval(500).subscribe(v => console.log(v))
// setTimeout(() => {
//   sub.unsubscribe()
// }, 4000)

// timer(2500).subscribe(v => console.log(v));

range(42, 10).subscribe( v => console.log(v));

