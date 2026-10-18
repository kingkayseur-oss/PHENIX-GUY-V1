//base by PHENIX LAB (Stinger-V1 Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Kingkayseur
//Instagram: kingkayseur
//Telegram: t.me/PhenixGuy
//GitHub: @kingkayseur
//WhatsApp: +242065311655
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@kingkayseur

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Stinger-V1...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
