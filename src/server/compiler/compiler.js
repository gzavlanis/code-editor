const { spawn } = require('child_process');
const path = require('path');

module.exports = {
    clang(srcfile, callback) {
        const file= `${__dirname}/${srcfile}`;
        console.log(file);
        const filename = path.parse(file).name;
        const extension = path.parse(file).ext;
        if (extension === '.c') {
            const argsCompile = [];
            argsCompile[0] = file;
            argsCompile[1] = '-o';
            argsCompile[2] = `${__dirname}/${filename}.out`;
            const cmdRun = `${__dirname}/${filename}.out`;
            this.execute(__dirname, 'gcc', argsCompile, cmdRun, [], callback);
        } else console.log(`${file} is not a c file.`);
    },

    java(srcfile, callback) {
        console.log(`__dirname:${__dirname}`);
        const file = `${__dirname}/${srcfile}`;
        console.log(file);
        const filename = path.parse(file).name;
        const extension = path.parse(file).ext;
        console.log(`filename:${filename}`);
        if (extension === '.java') {
            const argsCompile = [];
            argsCompile[0] = file;
            const argsRun = [];
            argsRun[0] = filename;
            console.log(argsRun);
            this.execute(__dirname, 'javac', argsCompile, 'java', argsRun, callback);
        } else console.log(`${file} is not a java file.`);
    },

    // compile source file and execute it.
    execute(currDirectory, cmdCompile, argsCompile, cmdRun, argsRun, callback) {
        const options = { cwd: currDirectory };
        console.log(`currDirectory: ${currDirectory}`);
        console.log(`cmdCompile: ${cmdCompile}`);
        console.log(`argsCompile: ${argsCompile}`);
        console.log(`cmdRun: ${cmdRun}`);
        console.log(`argsRun: ${argsRun}`);
        const compile = spawn(cmdCompile, argsCompile);
        compile.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        compile.stderr.on('data', (data) => {
            console.log(`compile-stderr: ${String(data)}`);
            callback('1', String(data));
        });
        compile.on('close', (data) => {
            if (data === 0) {
                console.log(`cmdRun: ${cmdRun}`);
                const run = spawn(cmdRun, argsRun, options);
                run.stdout.on('data', (output) => {
                    console.log(String(output));
                    callback('0', String(output));
                });
                run.stderr.on('data', (output) => {
                    console.log(`stderr: ${String(output)}`);
                    callback('2', String(output));
                });
                run.on('close', (output) => {
                    console.log(`stdout: ${output}`);
                });
            }
        });
    },
};