from library_item import Book, Magazine
from library import Library

def main():
    library = Library()

    while True:
        print("\n" + "=" * 40)
        print(" SISTEM MANAJEMEN PERPUSTAKAAN")
        print("=" * 40)
        print("1. Tambah Buku")
        print("2. Tambah Majalah")
        print("3. Tampilkan Semua Item")
        print("4. Cari Item (berdasarkan Judul atau ID)")
        print("5. Keluar")
        print("-" * 40)

        pilihan = input("Pilih menu (1-5): ")

        if pilihan == '1':
            print("\n Tambah Buku:")
            item_id = input("  Masukkan ID Buku     : ")
            title = input("  Masukkan Judul Buku  : ")
            author = input("  Masukkan Nama Penulis: ")
            book = Book(item_id, title, author)
            library.add_item(book)

        elif pilihan == '2':
            print("\n Tambah Majalah:")
            item_id = input("  Masukkan ID Majalah  : ")
            title = input("  Masukkan Judul       : ")
            issue = input("  Masukkan Edisi       : ")
            magazine = Magazine(item_id, title, issue)
            library.add_item(magazine)

        elif pilihan == '3':
            library.show_all_items()

        elif pilihan == '4':
            print("\n Cari Item:")
            keyword = input("  Masukkan Judul atau ID: ")
            library.search_item(keyword)

        elif pilihan == '5':
            print("\n Terima kasih telah menggunakan sistem.")
            break

        else:
            print("\n Pilihan tidak valid. Silakan coba lagi.")

if __name__ == "__main__":
    main()