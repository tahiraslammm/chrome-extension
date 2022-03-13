console.log("Chrome Extension is working");

let images = document.getElementsByTagName("img")
let name = document.title + ".jpeg"

function downloadFile(url, name){
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = name
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

if(images.length === 0){
    console.log("No image");
}
else{
    console.log("Downloading");
    downloadFile(images[0].src, name)
}


