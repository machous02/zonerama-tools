function createAlbumDownloadButton(albumId) {
    const a = document.createElement("a");
    a.id = "header-album-download";
    a.href = "javascript:void(0)";
    a.className = "share-a";
    a.setAttribute("data-toggle", "modal");
    a.setAttribute("data-target", "#dialog-download");
    a.setAttribute("data-ajax-url", `/View/Dialog/DownloadAlbum?albumId=${albumId}`);

    const icon = document.createElement("i");
    icon.className = "za-icon icon-download";
    icon.setAttribute("data-toggle", "tooltip");
    icon.setAttribute("title", "");
    icon.setAttribute("data-original-title", "Download");

    a.appendChild(icon);
    return a;
}

function addDownloadButtonToAlbum(albumElement) {
    const caption = albumElement.getElementsByClassName("caption")[0];
    if (!caption || caption.querySelector("#header-album-download")) return;

    const albumId = albumElement.getAttribute("data-album-id");
    if (!albumId) return;
    const downloadButton = createAlbumDownloadButton(albumId);
    caption.appendChild(downloadButton);
}

function addDownloadButtonsToAllAlbums() {
    const albums = document.querySelectorAll(".list-alb:not([data-banner])");
    for (let i = 0; i < albums.length; i++) {
        addDownloadButtonToAlbum(albums[i]);
    }
}

function main() {
    console.log("Zonerama tools: script started.");

    const match = window.location.pathname.match(/^\/[^\/]+\/\d+$/);

    if (!match) {
        console.log("Zonerama tools: not a gallery page, exiting.");
        return;
    }

    console.log("Zonerama tools: gallery page detected, continuing.");

    setInterval(addDownloadButtonsToAllAlbums, 1000);
}

main();
