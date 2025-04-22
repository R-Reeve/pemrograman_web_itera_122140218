# Meminta input dari pengguna
berat_badan = float(input("Masukkan berat badan kamu (kg): "))  # berat dalam kg
tinggi_badan = float(input("Masukkan tinggi badan kamu (m): "))  # tinggi dalam meter

# Fungsi untuk menghitung BMI dan menentukan kategori
def hitungbmi(berat_badan, tinggi_badan):
    bmi = berat_badan / (tinggi_badan ** 2)  # rumus BMI

    # Menentukan kategori berdasarkan nilai BMI
    if bmi < 18.5:
        kategori = "Berat badan kurang"
    elif bmi < 25:
        kategori = "Berat badan normal"
    elif bmi < 30:
        kategori = "Berat badan berlebih"
    else:
        kategori = "Obesitas"

    return bmi, kategori  # kembalikan nilai dan kategori

# Panggil fungsi dan simpan hasilnya
bmi, kategori = hitungbmi(berat_badan, tinggi_badan)

# Tampilkan hasil BMI dan kategorinya
print(f"\nBMI kamu adalah {round(bmi, 2)} ({kategori})")