/**
 * funksiyonlar:
 * kayit ekleme
 * kayit silme
 * kayit guncelleme
 * sirlama
 * arama
 */





 

function bilgileriTopla (birKisi){
    let formListeStringi = localStorage.getItem ("kisiBilgileriListesi");
    let formListe =JSON.parse (formListeStringi);
    if (formListe == undefined){
        formListe = new Array();
    }
    formListe.puch({
        "firstname":birKisi, "lastname":birKisi, "address":birKisi, "number":birKisi,
        "zipcode":birKisi, "city":birKisi, "phonenumber":birKisi, "mobilephonenumber":birKisi,
        "faxnumber":birKisi, "email":birKisi
    });
    formListeStringi=JSON.stringify(formListe);
    localStorage.setItem("kisiBilgileriListesi", formListeStringi);
    return formListe;
}






/*let firstName = null;
let lastName = null;
let address = null;
let number = 0;
let zipcode = 0;
let city = null;
let phoneNumber = 0;
let mobilephoneNumber = 0;
let faxnumber = 0;
let email = null;

function veriAl() {
    let firstName = $("#firstname").val();
    let lastName = $("#lastname").val();
    let address = $("#address").val();
    let number = $("#number").val();
    let zipcode = $("#zipcode").val()
    let city = $("#city").val()
    let phoneNumber = $("#phoneNumber").val()
    let mobilephoneNumber = $("#mobilephoneNumber").val()
    let faxnumber = $("#faxnumber").val()
    let email = $("#email").val()
    return {
        firstName,
        lastName,
        address,
        number,
        zipcode,
        city,
        phoneNumber,
        mobilephoneNumber,
        faxnumber,
        email
    }
}

function kayitEkleme(veriler) {
    firstName = veriler.firstName
    lastName = veriler.lastName
    address = veriler.address
    number = veriler.number
    zipcode = veriler.zipcode
    city = veriler.city
    phoneNumber = veriler.phoneNumber
    mobilephoneNumber = veriler.mobilephoneNumber
    faxnumber = veriler.faxnumber
    email = veriler.email
}
*/
function kayitSilme() {

}

function kayitGuncelleme() {

}

function siralama() {

}

function arama() {

}