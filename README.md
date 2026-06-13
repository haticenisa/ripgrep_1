# Ripgrep Replace VS Code Eklentisi

Ripgrep Replace, geliştiricilerin Visual Studio Code içerisinde tüm proje genelinde düzenli ifadeler (Regex) kullanarak arama ve değiştirme işlemleri yapmasını sağlayan hafif ve kullanımı kolay bir eklentidir. Eklenti, desteklenen kaynak kod dosyalarını tarar, eşleşen ifadeleri bulur ve kullanıcı tarafından belirtilen metinle otomatik olarak değiştirir.

---

## Proje Hakkında

Büyük projelerde aynı kod parçalarını güncellemek, hata ayıklama (debug) amaçlı eklenen kodları kaldırmak veya belirli metinleri birçok dosyada değiştirmek zaman alıcı olabilir. Bu işlemleri tek tek yapmak hem verimsizdir hem de hata yapma riskini artırır.

Ripgrep Replace eklentisi, bu süreci otomatik hale getirerek geliştiricilerin tüm proje üzerinde hızlı ve etkili bir şekilde arama ve değiştirme işlemleri gerçekleştirmesine yardımcı olur.

Eklenti, çalışma alanındaki klasörleri özyinelemeli (recursive) olarak tarar, gereksiz klasörleri yok sayar ve yalnızca desteklenen dosya türleri üzerinde işlem yapar.

---

## Özellikler

* Düzenli ifadeler (Regex) ile arama desteği
* Proje genelinde toplu değiştirme işlemi
* Alt klasörleri otomatik tarama
* Değişiklikleri dosyalara otomatik kaydetme
* Hızlı ve hafif yapı
* Gereksiz klasörleri yok sayma:

  * `.git`
  * `node_modules`
* Birden fazla programlama dilini destekleme:

  * TypeScript (.ts)
  * JavaScript (.js)
  * TSX (.tsx)
  * JSX (.jsx)
  * Python (.py)
  * Java (.java)
  * C# (.cs)
  * C++ (.cpp)
  * Go (.go)

---

## Çalışma Mantığı

1. Kullanıcı Visual Studio Code içerisinde bir proje klasörü açar.
2. Komut paletinden **Ripgrep Replace: Search** komutunu çalıştırır.
3. Aranacak metin veya Regex ifadesi girilir.
4. Yerine yazılacak metin girilir.
5. Eklenti çalışma alanındaki tüm uygun dosyaları tarar.
6. Eşleşen ifadeler bulunur.
7. Bulunan ifadeler yeni metin ile değiştirilir.
8. Dosyalar otomatik olarak kaydedilir.
9. İşlem sonunda kaç dosyada ve kaç eşleşmede değişiklik yapıldığı kullanıcıya gösterilir.

---

## Örnek Kullanım

### Aranacak İfade

```regex
console\.log\(.*\)
```

### Yerine Yazılacak Metin

```javascript
// removed
```

### Değişiklik Öncesi

```javascript
console.log("Uygulama başlatıldı");
console.log("Hata ayıklama bilgisi");
```

### Değişiklik Sonrası

```javascript
// removed
// removed
```

---

## Kullanım Alanları

### Hata Ayıklama Kodlarını Temizleme

Proje içerisinde bulunan tüm `console.log()` ifadelerini tek seferde kaldırabilirsiniz.

### Kod Refaktörleme

Belirli değişken veya fonksiyon isimlerini tüm projede toplu olarak değiştirebilirsiniz.

### Yorum Satırlarını Düzenleme

Eski yorum satırlarını yeni bir formatla değiştirebilirsiniz.

### Toplu Metin Güncelleme

Birden fazla dosyada bulunan aynı ifadeleri hızlıca güncelleyebilirsiniz.

---

## Proje Yapısı

```text
src/
 └── extension.ts

package.json
tsconfig.json
README.md
```

---

## Kullanılan Teknolojiler

* TypeScript
* Visual Studio Code Extension API
* Node.js File System (fs)
* Node.js Path Module

---

## Gelecekte Eklenebilecek Özellikler

* Dosya türü seçme desteği
* Değişiklik önizleme ekranı
* Geri alma (Undo) desteği
* Eşleşmeleri vurgulama
* Belirli klasörlerde işlem yapabilme
* Büyük projeler için performans iyileştirmeleri

---

## Kurulum

1. Depoyu klonlayın:

```bash
git clone https://github.com/KULLANICI_ADINIZ/ripgrep-replace.git
```

2. Gerekli paketleri yükleyin:

```bash
npm install
```

3. Projeyi Visual Studio Code ile açın.

4. Eklentiyi geliştirme modunda çalıştırmak için `F5` tuşuna basın.

---

## Lisans

Bu proje MIT Lisansı kapsamında dağıtılmaktadır.

---

## Geliştirici

**Hatice Tan**

Bilişim Sistemleri ve Teknolojileri Bölümü Öğrencisi
