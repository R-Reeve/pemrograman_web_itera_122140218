# Mengimpor modul ABC untuk abstract class
from abc import ABC, abstractmethod

# Kelas abstrak dasar untuk item perpustakaan
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id
        self._title = title

    @abstractmethod
    def display_info(self):
        pass

    @property
    def title(self):
        return self._title

    @property
    def item_id(self):
        return self._item_id


# Subclass Book yang mewarisi LibraryItem
class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author

    def display_info(self):
        print(f"   [BUKU]     ID    : {self._item_id}")
        print(f"              Title : {self._title}")
        print(f"              Author: {self.__author}")
        print("-" * 40)


# Subclass Magazine yang juga mewarisi LibraryItem
class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue):
        super().__init__(item_id, title)
        self.__issue = issue

    def display_info(self):
        print(f"   [MAJALAH]  ID    : {self._item_id}")
        print(f"              Title : {self._title}")
        print(f"              Issue : {self.__issue}")
        print("-" * 40)
