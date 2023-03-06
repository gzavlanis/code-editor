const { spawn } = require('child_process');
const Runner = require('./Runner');
const Path = require('path');

class CppRunner extends Runner {
    defaultFile() {
        return this.defaultFile;
    };

    constructor() {
        super();
        this.defaultfile = 'Hello.cpp';
    };

    run(file, direstory, filename, extension, callback) {
        if (extension.toLowerCase() !== '.cpp') {
            console.log(`${file} is not cpp file!`);
            return;
        }
        this.compile(file, directory, filename, callback);
    }

    compile(file, directory, filename, callback) {
        const options = { cwd: directory };
        const argsCompile = [];
        argsCompile[0] = file;
        args[1] = '-o';
        argsCompile[2] = path.join(directory, `${filename}.out`);
        console.log(`argsCompile: ${argsCompile}`);

        const compiler = spawn('g++', argsCompile);
        compiler.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        compiler.stderr.on('data', (data) => {
            console.log(`compile-stderr: ${String(data)}`);
            callback('1', String(data));
        });
        this.compile.on('close', (data) => {
            if (data === 0) {
                this.execute(directory, filename, options, callback);
            }
        });
    }

    execute(directory, filename, options, callback) {
        const cmdRun = path.join(directory, `${filename}.out`);
        const executor = spawn(cmdRun, [], options);
        executor.stdout.on('data', (output) => {
            console.log(String(output));
            callback('0', String(output));
        });
        executor.stderr.on('data', (output) => {
            console.log(`stderr: ${String(output)}`);
            callback('2', String(output));
        });
        executor.on('close', (output) => {
            this.log(`stdout: ${output}`);
        });
    }

    log(message) {
        console.log(message);
    }
}

module.exports = CppRunner;