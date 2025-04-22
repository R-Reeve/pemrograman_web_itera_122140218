# main.py

# Import modul dengan dua cara:
# 1. Import seluruh modul
# 2. Import langsung beberapa fungsi
import math_operations
from math_operations import celsius_ke_kelvin, keliling_persegi_panjang

# Persegi
sisi = 4
print("Luas Persegi:", math_operations.luas_persegi(sisi))  # hitung luas persegi
print("Keliling Persegi:", math_operations.keliling_persegi(sisi))  # hitung keliling persegi

# Persegi Panjang
panjang, lebar = 5, 3
print("Luas Persegi Panjang:", math_operations.luas_persegi_panjang(panjang, lebar))  # luas
print("Keliling Persegi Panjang:", keliling_persegi_panjang(panjang, lebar))  # keliling (pakai cara import langsung)

# Lingkaran
jari_jari = 7
print("Luas Lingkaran:", math_operations.luas_lingkaran(jari_jari))  # luas lingkaran
print("Keliling Lingkaran:", math_operations.keliling_lingkaran(jari_jari))  # keliling lingkaran

# Konversi suhu
c = 25
print("25°C ke Fahrenheit:", math_operations.celsius_ke_fahrenheit(c))  # konversi ke fahrenheit
print("25°C ke Kelvin:", celsius_ke_kelvin(c))  # konversi ke kelvin (pakai cara import langsung)

# Nilai konstanta
print("Nilai PI:", math_operations.PI)  # tampilkan nilai PI dari modul