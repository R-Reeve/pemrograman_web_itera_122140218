class Library:
    def __init__(self):
        self.__collection = []

    def add_item(self, item):
        self.__collection.append(item)
        print("\n Item berhasil ditambahkan ke perpustakaan!")

    def show_all_items(self):
        if not self.__collection:
            print("\n Belum ada item dalam perpustakaan.")
        else:
            print("\n Daftar Item Perpustakaan:")
            print("=" * 40)
            for item in self.__collection:
                item.display_info()

    def search_item(self, keyword):
        found = False
        for item in self.__collection:
            if item.title == keyword or item.item_id == keyword:
                print("\n Item ditemukan:")
                print("=" * 40)
                item.display_info()
                found = True
                break
        if not found:
            print("\n Item tidak ditemukan.")