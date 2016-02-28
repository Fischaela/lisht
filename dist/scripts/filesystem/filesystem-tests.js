/// <reference path="filesystem.d.ts" />
// http://www.w3.org/TR/file-system-api/
function useAsyncFS(fs) {
    // see getAsText example in [FILE-API-ED].
    fs.root.getFile("already_there.txt", null, function (f) {
        // In the example of the specification, there is a following code:
        // 
        //     getAsText(f.file());
        //
        // It seems wrong because f is ASYNCRONOUS file system.
        f.file(getAsText);
    });
    // But now we can also write to the file; see [FILE-WRITER-ED].
    fs.root.getFile("logFile", { create: true }, function (f) {
        f.createWriter(writeDataToLogFile);
    });
}
window.requestFileSystem(window.TEMPORARY, 1024 * 1024, function (fs) {
    useAsyncFS(fs);
});
// In a worker:
var tempFS = window.requestFileSystemSync(window.TEMPORARY, 1024 * 1024);
var logFile = tempFS.root.getFile("logFile", { create: true });
var writer = logFile.createWriter();
writer.seek(writer.length);
writeDataToLogFile(writer);
// 5.2 The Flags dictionary
var fsSync = window.requestFileSystemSync(window.TEMPORARY, 1024 * 1024);
// Get the data directory, creating it if it doesn't exist.
var dataDir = fsSync.root.getDirectory("data", { create: true });
// Create the lock file, if and only if it doesn't exist.
try {
    var lockFile = dataDir.getFile("lockfile.txt", { create: true, exclusive: true });
}
catch (ex) {
}
//# sourceMappingURL=filesystem-tests.js.map