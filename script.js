function loadComponent(placeholderId,url,afterload){
    const placeholderId=document.getElementById(placeholderId);
    if (!placeholderId) return;

    fetch (url)
    .then(function (response){
        if (!response.ok) {
        throw new Error('Gagal memuat:' + url)

        }
        return response.text();
    
    }) 
    .then(function(html) {
        placeholder.innerHTML = html;
        if (typeof afterload === 'function ') {
            afterload();

        }
    }) 
    .catch (function(error) {
        console.error(error);
        placeholderId.innerHTML= '<p style="col<p style="color:red; padding:10px;">Komponen gagal dimuat. Pastikan kamu membuka lewat server (bukan klik langsung file HTML).</p>or: red; padding 10px; "Komponen gagal '
    });


}