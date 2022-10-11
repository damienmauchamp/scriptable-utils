# scriptable-utils

´´´javascript

// 
const foldername = "Utils"
const codeFilename = "draw"
const gitHubUrl = "https://raw.githubusercontent.com/damienmauchamp/scriptable-utils/main/draw.js"

// Determine if the user is using iCloud.
let files = FileManager.local()
const iCloudInUse = files.isFileStoredIniCloud(module.filename)

// If so, use an iCloud file manager.
files = iCloudInUse ? FileManager.iCloud() : files

// Determine if the code exists and download if needed.
const path = files.joinPath(foldername, codeFilename + ".js")
const pathToCode = files.joinPath(files.documentsDirectory(), path)
if (!files.fileExists(pathToCode)) {
  const req = new Request(gitHubUrl)
  const codeString = await req.loadString()
  files.writeString(pathToCode, codeString)
}

// Import the code.
if (iCloudInUse) { await files.downloadFileFromiCloud(pathToCode) }

const code = importModule(path)

´´´
