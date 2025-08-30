//Jalankan greet saat halaman dibuka
greet ();

/// Greet the user
function greet () {
    /// Get the username from prompt
    let username= prompt("Please enter your name:");
    
    /// Display the username on the webpage
    if (username){
    document.getElementById('username').innerText = username;
}
}

/// Tanggani form submit
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault(); //biar halaman tidak reload

    // Ambil inputan form
    let nama = document.getElementById("nama").value;
    let tanggallahir = document.getElementById("tanggallahir").value;
    let gender = document.querySelector("input[name='gender']:checked")?.value;
    let pesan = document.getElementById("pesan").value;


 /// Validate
if (nama ==="" || !gender || pesan === "") {
        alert("semua field wajib diisi !");
        return;
    }
    
    //Tampilan Hasil Submit
    document.getElementById("resNama").innerText = nama;
    document.getElementById("resTanggal").innerText = tanggallahir;
    document.getElementById("resGender").innerText = gender;
    document.getElementById("resPesan").innerText = pesan;

    // Berikan Notifikasi
    alert("Terima Kasih, "+nama+ "! Pesanamu sudah terkirim.");
});
