# Data mahasiswa disimpan dalam list berisi dictionary
# Tiap dictionary punya nama, NIM, dan nilai UTS, UAS, serta Tugas
mahasiswa = [
    {"nama": "Muhammad Sabda Arif", "nim": "122140218", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 80},
    {"nama": "Anakin Skywalker", "nim": "421197700", "nilai_uts": 75, "nilai_uas": 70, "nilai_tugas": 72},
    {"nama": "Optimus Prime", "nim": "111222333", "nilai_uts": 60, "nilai_uas": 63, "nilai_tugas": 65},
    {"nama": "Megatron", "nim": "666999666", "nilai_uts": 50, "nilai_uas": 55, "nilai_tugas": 52},
    {"nama": "RX-78-2 Gundam", "nim": "780780782", "nilai_uts": 35, "nilai_uas": 40, "nilai_tugas": 38}
]

# Fungsi untuk menentukan grade berdasarkan nilai akhir
def tentukan_grade(nilai):
    if nilai >= 80:
        return "A"
    elif nilai >= 70:
        return "B"
    elif nilai >= 60:
        return "C"
    elif nilai >= 50:
        return "D"
    else:
        return "E"

# Hitung nilai akhir dan grade untuk tiap mahasiswa
# Bobot: UTS 30%, UAS 40%, Tugas 30%
for mhs in mahasiswa:
    nilai_akhir = 0.3 * mhs["nilai_uts"] + 0.4 * mhs["nilai_uas"] + 0.3 * mhs["nilai_tugas"]
    mhs["nilai_akhir"] = round(nilai_akhir, 2)  # Disimpan 2 angka di belakang koma
    mhs["grade"] = tentukan_grade(nilai_akhir)  # Tentukan dan simpan grade

# Tampilkan data dalam bentuk tabel
print("\nDATA MAHASISWA:")
print("-" * 75)
print(f"{'Nama':25} {'NIM':12} {'Akhir':>8} {'Grade':>6}")
print("-" * 75)
for mhs in mahasiswa:
    print(f"{mhs['nama']:25} {mhs['nim']:12} {mhs['nilai_akhir']:>8} {mhs['grade']:>6}")
print("-" * 75)

# Cari nilai akhir tertinggi dan terendah
tertinggi = max(mahasiswa, key=lambda m: m["nilai_akhir"])
terendah = min(mahasiswa, key=lambda m: m["nilai_akhir"])

# Tampilkan mahasiswa dengan nilai tertinggi dan terendah
print(f"\nMahasiswa dengan nilai tertinggi: {tertinggi['nama']} ({tertinggi['nilai_akhir']})")
print(f"Mahasiswa dengan nilai terendah: {terendah['nama']} ({terendah['nilai_akhir']})")