const fs = require('fs').promises
const path = require('path')
const exclude = /index|git|readme/i

fs.readdir(__dirname, 'utf-8').then(async res => {
    const result = res.filter(it => !exclude.test(it))
    const allTitle = await Promise.all(result.map(async (name, index) => {
        const text = await fs.readFile(name, 'utf-8')
        return `${index + 1}. [${text.split('\n')[0].replace(/\s|\/\/|#/g, '')}](${name})`
    }))
    fs.writeFile('README.md', `# 每日一题\n\n>(京城一灯的每日一题)\n\n${allTitle.join('\n')}`, '', 'utf-8').then(res => {
        console.log('成功');
    }).catch(err => {
        console.log('失败', err);
    })
    
}).catch(err => {
    console.log(err);
})