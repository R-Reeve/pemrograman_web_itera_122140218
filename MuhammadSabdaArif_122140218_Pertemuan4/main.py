# main.py

# Import modul dengan dua cara:
# 1. Import seluruh modul
# 2. Import langsung beberapa fungsi
import math_operation
from math_operation import celsius_ke_kelvin, keliling_persegi_panjang

print("="*40)
print("PERHITUNGAN BANGUN DATAR".center(40))
print("="*40)

# Persegi
sisi = 4
print("Persegi")
print(f"  Sisi               : {sisi}")
print(f"  Luas               : {math_operation.luas_persegi(sisi)}")
print(f"  Keliling           : {math_operation.keliling_persegi(sisi)}")

# Persegi Panjang
panjang, lebar = 5, 3
print("\nPersegi Panjang")
print(f"  Panjang x Lebar    : {panjang} x {lebar}")
print(f"  Luas               : {math_operation.luas_persegi_panjang(panjang, lebar)}")
print(f"  Keliling           : {keliling_persegi_panjang(panjang, lebar)}")

# Lingkaran
jari_jari = 7
print("\nLingkaran")
print(f"  Jari-jari          : {jari_jari}")
print(f"  Luas               : {math_operation.luas_lingkaran(jari_jari)}")
print(f"  Keliling           : {math_operation.keliling_lingkaran(jari_jari)}\n")

print("="*40)
print("KONVERSI SUHU")
print("="*40)

# Konversi suhu
c = 25
print(f"  Suhu               : {c}°C")
print(f"    Reamur           : {math_operation.celsius_ke_reamur(c)}°R")
print(f"    Fahrenheit       : {math_operation.celsius_ke_fahrenheit(c)}°F")
print(f"    Kelvin           : {celsius_ke_kelvin(c)} K\n")

# Nilai konstanta
print("="*40)
print("KONSTANTA")
print("="*40)
print(f"  Nilai PI           : {math_operation.PI}")
print(f"  Nilai Golden Ratio : {math_operation.GOLDEN_RATIO}")
print(f"  Nilai Euler        : {math_operation.E}")