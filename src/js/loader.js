window.addEventListener('load', function () {
    console.log('All assets are loaded');
    this.document.getElementById("loader").className = "hidden";
    this.document.getElementById("main-content").className = "block";
})