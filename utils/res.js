function setHeader(res, key, value) {
    res.setHeader(key, value);
}
 
function setJSONResponse(res, response) {
    res.end(JSON.stringify(response));
}
 
module.exports = {
    setHeader,
    setJSONResponse
};