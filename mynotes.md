5. satır => addeventlistener ile eğer class içerisinde number varsa ve text uzunluğu 8'den düşükse 
bir alttaki if döngüsü çalışıyor : eğer display alanının innertexti boş string ise ve tıklanan değer 0 ise VEYA display field'ın ilk değeri 0 ise (iki sıfır yanyana gelmemesi için) direkt tıkladığımız rakamı girer
değilse yanına ekliyor.

17. satır => eğer class decimal içeriyorsa ve displayfield içerisinde decimal girilmediyse bize display field'da "." karakterini girer.


27. satır => fonksiyonları kullanabilmek için  bir switch case oluşturuyoruz.

AC > 2 display alanını da "" döndür

+- > eğer display alanında - yoksa prepend metodu ile başa - karakterini ekle. else : current display field'ının innertext'i çıkarır. slice metodu ile 1. index yani - karakterini çıkartır.

% > eğer display alanı boş değilse innertexti 100e bölüyor.

backspace > eğer display alanında bir karakter varsa innertext'i çıkarır.


operators:

eğer display alanı boş değil ise 






= operatörü