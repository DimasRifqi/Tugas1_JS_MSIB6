const pegawai = "Ridwan";
var jabatan = "Manager";
var status = "Menikah";
var gaji = 0;

if (jabatan == "Manager") {
  gaji = 15000000;
} else if (jabatan == "AsistenManajer") {
  gaji = 10000000;
} else if (jabatan == "Staff") {
  gaji = 5000000;
} else {
  gaji = 0;
}

const tunjanganJabatan = 0.15 * gaji;
const BPJS = 0.10 * gaji;

var tunjanganKeluarga = status == "Menikah" ? 0.20 * gaji : 0;
var totalGaji = gaji + tunjanganJabatan - BPJS + tunjanganKeluarga;

document.getElementById("namaPegawai").textContent = pegawai;
document.getElementById("jabatan").textContent = jabatan;
document.getElementById("status").textContent = status;
document.getElementById("gaji").textContent = gaji;
document.getElementById("tunjanganJabatan").textContent = tunjanganJabatan;
document.getElementById("BPJS").textContent = BPJS;
document.getElementById("tunjanganKeluarga").textContent = tunjanganKeluarga;
document.getElementById("totalGaji").textContent = totalGaji;
