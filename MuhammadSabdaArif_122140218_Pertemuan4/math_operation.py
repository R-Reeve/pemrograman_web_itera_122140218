# math_operation.py

# Konstanta
PI = 3.14159          # Nilai π
GOLDEN_RATIO = 1.618  # Rasio emas (phi)
E = 2.71828           # Bilangan Euler (e)

# Persegi
def luas_persegi(sisi):
    return sisi * sisi  # hitung luas

def keliling_persegi(sisi):
    return 4 * sisi  # hitung keliling

# Persegi Panjang
def luas_persegi_panjang(panjang, lebar):
    return panjang * lebar  # hitung luas

def keliling_persegi_panjang(panjang, lebar):
    return 2 * (panjang + lebar)  # hitung keliling

# Lingkaran
def luas_lingkaran(jari_jari):
    return PI * jari_jari * jari_jari  # hitung luas

def keliling_lingkaran(jari_jari):
    return 2 * PI * jari_jari  # hitung keliling

# Konversi suhu
def celsius_ke_reamur(c):
    return (c * 4 / 5)  # dari °C ke °R

def celsius_ke_fahrenheit(c):
    return (c * 9 / 5) + 32  # dari °C ke °F

def celsius_ke_kelvin(c):
    return c + 273.15  # dari °C ke K
