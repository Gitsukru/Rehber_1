/**
 * funksiyonlar:
 * kayit ekleme
 * kayit silme
 * kayit guncelleme
 * sirlama
 * arama
 */


function renderContact(contacts) {
    let head = `<table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th class="siralamaIsim">Firstname</th>
                            <th class="siralamaSoyIsim">Lastname</th>
                            <th>Address</th>
                            <th>Number</th>
                            <th>Zip Code</th>
                            <th>City</th>
                            <th>Phone Number</th>
                            <th>Mobile Number</th>
                            <th>Fax Number</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody id="rehberListe_areatd">`
    let bodyTable = "";
    for (let contact of contacts) {
        bodyTable += `<tr>
        
                        <td>${contact.id}</td>
                        <td>${contact.firstName}</td>
                        <td>${contact.lastName}</td>
                        <td>${contact.address}</td>
                        <td>${contact.number}</td>
                        <td>${contact.zipCode}</td>
                        <td>${contact.city}</td>
                        <td>${contact.phoneNumber}</td>
                        <td>${contact.mobilePhoneNumber}</td>
                        <td>${contact.faxNumber}</td>
                        <td>${contact.email}</td>
                        <td><button class="deleteContact" data-id="${contact.id}">Delete</button></td>
                    </tr>`
    }
    let foot = ` </tbody>
                 </table>`;
    return head + bodyTable + foot;
};

function bilgileriGuncelle(contacts) { //bu fonksiyon cagrildigi zaman  parametre tanimlandi ise
    
    if (!contacts){            //eger tanimlanmadi ise contact undefin geliyor        
        contacts = JSON.parse(localStorage.getItem("contacts")); // undefine ise git local storage dan al bilgileri
    }
    if (contacts) {
        let newDom = renderContact(contacts);
        $("#rehberListe_areatd").html(newDom);
        refreshListeners();
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



function refreshListeners() {
    $(".deleteContact").click(function () {
        contactSilme(+$(event.target).data("id"));
        bilgileriGuncelle();
    })
}










/*
function kayitSilme() {

}


function siralama() {

}

function arama() {

}*/