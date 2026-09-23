import type { Context } from 'cordis'
 
declare module 'cordis' {
interface Events {
'app/ready'(message: string): void
}
}
 
export const name = 'greeter'
export const inject = ['counter']
 
export function apply(ctx: Context) {
ctx.on('app/ready', (message: string) => {
const count = ctx.counter.next()
ctx.logger.info(`${message} #${count}`)
})
}