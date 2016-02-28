/// <reference path="filewriter.d.ts" />
// http://www.w3.org/TR/file-writer-api/
function writeFile(writer) {
    function done(evt) {
        alert("Write completed.");
    }
    function error(evt) {
        alert("Write failed:" + evt);
    }
    var b = new Blob();
    writer.onwrite = done;
    writer.onerror = error;
    writer.write(b);
}
//# sourceMappingURL=filewriter-tests.js.map