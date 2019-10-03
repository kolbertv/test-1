const cluster = require('cluster');
const os = require('os')

if (cluster.isMaster) {
    const cpus = os.cpus().length;
    console.log(cpus);
    console.log(`Master started. Pid: ${process.pid}`)

    for (let i = 0; i< cpus; i++) {
        cluster.fork()

    }
}

if (cluster.isWorker) {
    require('./index.js')
}