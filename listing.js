const fs = require('fs');
const path = require('path');
const dir = './'

const entries = []
for(let f of fs.readdirSync(dir)){
  if(!f.startsWith('.') && fs.statSync(f).isDirectory() ){
      const files = fs.readdirSync(path.join(dir,f))
      if(files.length)
        entries.push([f,path.join(f,files[0])])
  }
}

const str = `{\n ${entries.map(e =>`  "${e[0]}": "${e[1]}"`).join(`,\n`)} \n}\n`

fs.writeFileSync("./listing.json", str)
