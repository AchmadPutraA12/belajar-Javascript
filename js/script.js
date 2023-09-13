function dataPerson(){
    let froms = document.getElementById('frm');
    let nama = froms.nama.value;
    let pekerjaan = froms.pekerjaan.value;
    let hobby = froms.hobby.value;
    let data = ` Input Data
    <br> Nama : ${nama}
    <br> Pekerjaan : ${pekerjaan}
    <br> Hoby : ${hobby}
    `;
    document.getElementById('hasil').innerHTML = data;
}