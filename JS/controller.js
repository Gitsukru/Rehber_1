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
/*
function renderList(bilgiListesi) {
    let tdList = bilgiListesi.map((bilgiObject) => `<td data-name ="${bilgiObject.name}">
    ${bilgiObject.name}</td>`);
    $("#rehberListe_area ").html(tdList.join(""));
}
*/
$(document).ready(function () {

function renderContact(contacts) {
    let bodyTable = "";
    for (let contact of contacts) {
        bodyTable += `
    <tr id="rehberListe_area td">
        <td>${contact.id}</td>
        <td>${contact.firstName}</td>
        <td>${contact.lastName}</td>
        <td>${contact.adresse}</td>
        <td>${contact.number}</td>
        <td>${contact.zipCode}</td>
        <td>${contact.city}</td>
        <td>${contact.phoneNumber}</td>
        <td>${contact.mobilePhoneNumber}</td>
        <td>${contact.faxNumber}</td>
        <td>${contact.email}</td>
        <td><button class="deleteContact" data-id="${contact.id}">Delete</button></td>
    </tr>`
    };
    return bodyTable;
};


    $("#kaydet").on("click", function () {
        let contact = bilgileriTopla();
        if (localStorage.getItem("contacts") !== null) {
            let contacts = JSON.parse(localStorage.getItem("contacts"));
            contacts.push(contact);
            localStorage.setItem("contacts", JSON.stringify(contacts));
        } else {
            localStorage.setItem("contacts", JSON.stringify([contact]));
        }
        bilgileriGuncelle();
    });

    bilgileriGuncelle();
});




















/*
$("#yeniKayit").on("click", function () {
    $('#firstname').attr("autofocus", "autofocus")
})



$("#moreTextArea").on("click", function () { //satir ekle
    $(".formudoldur").addInputArea("<input></input>");

});





$("#sil").on("click", function () {

})
$(".buttonSearch").on("click", function () {

})
$(".siralamaIsim", "siralamaSoyIsim").on("click", function () {

})
$("kontaklariGoster").on("click", function () {

})
*/