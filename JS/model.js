/**
 * funksiyonlar:
 * kayit ekleme
 * kayit silme
 * kayit guncelleme
 * sirlama
 * arama
 */

let root_id = 0;

function bilgileriTopla() {
    let id = root_id++;
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let address = $("#address").val();
    let number = $("#number").val();
    let zipCode = $("#zipCode").val();
    let city = $("#city").val();
    let phoneNumber = $("#phoneNumber").val();
    let mobilePhoneNumber = $("#mobilePhoneNumber").val();
    let faxNumber = $("#faxNumber").val();
    let email = $("#email").val();
    return {
        id,
        firstName,
        lastName,
        address,
        number,
        zipCode,
        city,
        phoneNumber,
        mobilePhoneNumber,
        faxNumber,
        email
    };
};

function contactSilme(pId) {
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
        contacts = contacts.filter(contact => {
            return contact.id !== pId
        });
        localStorage.setItem("contacts", JSON.stringify(contacts));
    };
};

function refreshListeners() {
    $(".deleteContact").click(function () {
        contactSilme(+$(event.target).data("id"));
        bilgileriGuncelle();
    })
}

function bilgileriGuncelle() {
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
        let newDom = renderContact(contacts);
        $("#rehberListe_area td").html(newDom);
        refreshListeners();
    };

};







/*
function kayitSilme() {

}


function siralama() {

}

function arama() {

}*/