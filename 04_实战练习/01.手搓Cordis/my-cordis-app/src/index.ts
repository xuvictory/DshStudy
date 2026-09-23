import { Context } from 'cordis'
import ConsoleLogger from '@cordisjs/plugin-logger-console'
import { Counter } from './counter.js'
import * as greeter from './greeter.js'
 
async function main() {
const root = new Context()
 
// 优先加载 Logger 插件
await root.plugin(ConsoleLogger, {
showDiff: true,
levels: { default: 2 },
})
 
await root.plugin(Counter)
await root.plugin(greeter)
 
root.emit('app/ready', 'started')
}
 
main().catch(console.error)