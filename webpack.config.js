// module.exports={
//     entry: [
//         './src/main.ts'
//     ],
//     output: {
//         filename:'./dist/app.bundle.js'
//     },
//     resolve:{
//         extensions:['','.webpack.js','.ts','.js','.css']
//     },
//     module:{
//         loaders:[
//             {test: /\.ts$/, exclude:'./node_modules/', loaders:['ts-loader'] },
//             {test: /\.css$/, loader:'style-loader!css-loader'}
//         ]
//     }
// }
module.exports = require('./config/webpack.prod.js');