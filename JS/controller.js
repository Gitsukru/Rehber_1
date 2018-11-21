/**
 * Name: Contact Manager
 *   Description: An app for aintaining contacts effectively
 *
 *
 *   UI Interactions:
 *   - Forma bilgiler giriyor.
 *   - "Yeni ekle" butonuna basinca form yeni girdiye hazir hale getirilecek
 *   - Kullanici arama butonuna istedigi arama kriterini girecek ve arama sonunda ilgili sonuclar tabloda gösterilecek
 *   - Arama sadece "firstname" ve "lastname" üzerinden yapilacak
 *   - "kaydet" butonu ile girilen bilgiler tabloya eklenir.
 *   - "validation" Form dogrulama kaydetme öncesinde yapilmali.
 *   - "sil" butonu tetiklendiginde contact tablodan kaldirilacak
 *   - Silme islemi öncesi islem icin teyid istenecek.
 *   - Tablo satirina tiklandiginda o satirin ihtiva ettigi bilgi formda gösterilecek.
 *   - Input fieldlerin sag tarafinda bulunan arti iconu yeni bir input alani eklenmesini tetikler (email, phone, address).
 *   - Table header larina basildiginda o headera göre siralama yapilabilmesi lazim.
 */

/**
 * yeni Kayit, //kaydet, Sil, arama, siralama
 * (render fonksiyonu ile tüm kontaklari goster)
 * formdan veriAl fonksiyonu
 */

function renderList (bilgiListesi){
    let tdList = bilgiListesi.map ((bilgiObject)=>`<td data-name ="${bilgiObject.name}">
    ${bilgiObject.name}</td>`);
    $("#rehberListe_area td").html(tdList.join(""));
}




$(document).ready(function () {

    $("#yeniKayit").on("click", function(){
        $('#firstname').attr("autofocus", "autofocus")
    })

    $("#kaydet").on("click", function () {
        //alanlar doluysa bosalt ??
        let rehberBilgileri = $("#firstname", "#lastname", "#address", "#number", "#zipcode", "#city", 
        "#phonenumber", "#mobilephonenumber", "#faxnumber", "#email").val();
        let formListe = bilgileriTopla(rehberBilgileri)

        return renderList (formListe);
        
    })
    
    
   
    $("#sil").on("click", function () {

    })
    $(".buttonSearch").on("click", function () {

    })
    $(".siralamaIsim", "siralamaSoyIsim").on("click", function () {

    })
    $("kontaklariGoster").on("click", function () {

    })
    //$("formdanVeriAl").on("click", () => {

    //})
});