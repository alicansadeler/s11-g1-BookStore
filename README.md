Çalıştığın şirkette, deneyimli bir developer olarak anılacak kadar çalıştın. Şirkete alınan bir stajere de buddy oldun. İkinize bir Kitap alışveriş sitesi projesi verildi.

Beraber neler yapılacağını planladınız. Proje gittikçe büyüyecek ve çok fazla özellik ekelenecek. O, useState ile bir yere kadar getirecek sen de contextAPIye dönüştüreceksin.

Stajerin yaptığı halinde "Add to cart" çalışmasa da beklediğinden çok daha iyi şeyler yaptı. Geriye kalanların listesi aşağıda, kalanları sen yapacaksın, o da seni izleyip öğrenecek.

[ ] src altında contexts klasörü ve içinde ProductContext.jsx dosyası oluştur.

[ ] createContexti reacttan import et ve ProductContexti oluştur. Export etmeyi unutma.

[ ] ProductContext.Providerı return edecek bir fonksiyon oluştur. Adını ProductContextProvider yap. Export etmeyi unutma.

[ ] İçinde products adıyla bir state oluştur. Bu statei ProductContext.Providera value olarak vermeyi unutma.

[ ] App.jsxde uygulamanı bu provider ile sarmala.

[ ] App.jsxde Products componentine gönderdiğin propları sil.

[ ] Products.jsxde useContexti kullanarak ProductContext nesnesini bu hooka ver, prodcuts bilgisini al.

[ ] src/contexts içinde CartContext.jsx dosyası oluştur.

[ ] createContexti reacttan import et, CartContexti oluştur. Export etmeyi unutma.

[ ] CartContext.Providerı return edecek bir fonksiyon oluştur. Adını CartContextProvider yap. Export etmeyi unutma.

[ ] İçinde cart adıyla bir state oluştur.

[ ] addItem metodunu burada oluştur.

[ ] removeItemmetodunu da oluştur.

[ ] CartContext.Providera cart, addItem ve removeItemı value olarak vermeyi unutma.

[ ] App.jsxde uygulamanı bu provider ile de sarmala.

[ ] App.jsxde "Navigation" ve "ShoppingCart" componentine gönderdiğin propları sil.

[ ] Navigation.jsxde useContexti kullanarak CartContext nesnesini bu hooka ver, cart bilgisini al.

[ ] ShoppingCart.jsxde useContexti kullanarak CartContext nesnesini bu hooka ver, cart bilgisini al.

[ ] ShoppingCartItem.jsxde useContexti kullanarak CartContext nesnesini bu hooka ver, removeItem fonksiyonu al ve kullan.

[ ] Products.jsxde useContexti kullanarak CartContext nesnesini bu hooka ver. addItem bilgisini al.

[ ] cart bilgilerini localStorageda s11d1 anahtarı ile sakla. (src altında hook klasöründe içinde custom bir hook oluşturabilirsin.)

Çalışma dosyaları: src/contexts/CartContext.jsx, src/contexts/ProductContext.jsx, src/hooks/useLocalStorage.jsx, src/components/Navigation.jsx, src/components/Products.jsx, src/components/ShoppingCart.jsx, src/components/ShoppingCartItem.jsx, src/App.jsx
