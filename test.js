import { execSync } from 'child_process';
import { Request } from 'express';

function executeCommand(cmd) {
    execSync(cmd);
}

function handleRequest(req) {
    const cmd = req.query.cmd;
    executeCommand(cmd);
}

// Assuming you have a valid Express request object
const sampleRequest = {
    query: {
        cmd: 'ls -l' // Replace with a safe command
    }
};

// Call the function to handle the request
handleRequest(sampleRequest);
