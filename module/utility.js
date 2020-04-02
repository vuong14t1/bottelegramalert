function getCmd(text) {
    return text.split(" ")[0];
}

function getParameters(cmd) {
    var params = cmd.split(" ");
    params.splice(0, 1);
    return params;
}
exports.getCmd = getCmd;
exports.getParameters = getParameters;