import { Service, type Context } from 'cordis'
 
declare module 'cordis' {
interface Context {
counter: Counter
}
}
 
export class Counter extends Service {
private value = 0
constructor(ctx: Context) {
super(ctx, 'counter')
}
next(): number {
return ++this.value
}
}