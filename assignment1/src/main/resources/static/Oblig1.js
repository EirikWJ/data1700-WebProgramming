let Tickets = [];
const table = document.getElementById(`ticketTable`);
resetTable();
const errorMsgs = document.getElementsByClassName(`ErrorMsg`);
function buyTicket(){
    let Filmen = document.getElementById(`FilmChoice`).value;
    let Antall = parseInt(document.getElementById(`AmountInput`).value);
    let Fnavn = document.getElementById(`NameInput`).value;
    let Enavn = document.getElementById(`SurnameInput`).value;
    let tlfNr = parseInt(document.getElementById(`PhoneInput`).value);
    let Epost = document.getElementById(`EmailInput`).value;

    if(!validate(Filmen, Antall, Fnavn, Enavn, tlfNr, Epost))return;
    Tickets.push({film:Filmen, amount:Antall, name: Fnavn, surname:Enavn, phone:tlfNr, email:Epost})
    printTable();
    cleanSlate();
}
function printTable(){
    resetTable();
    for(let i of Tickets){
        table.innerHTML+=`<tr>
                            <td>${i.film}</td>
                            <td>${i.amount}</td>
                            <td>${i.name}</td>
                            <td>${i.surname}</td>
                            <td>${i.phone}</td>
                            <td>${i.email}</td>
                        </tr>`;
    }
}
function validate(film, num, Fname, Sname, Tlf, Email){
    let isValid = true;
    if(film==""){
        errorMsgs[0].innerText = "Må velge en film";
        isValid = false;
    }
    else errorMsgs[0].innerText = "";
    if(num <= 0 || isNaN(num)){
        errorMsgs[1].innerText = "Må skrive noe inn i antall";
        isValid = false;
    }
    else errorMsgs[1].innerText = "";
    if(Fname==""){
        errorMsgs[2].innerText = "Må skrive noe inn i fornavnet";
        isValid = false;
    }
    else errorMsgs[2].innerText = "";
    if(Sname ==""){
        errorMsgs[3].innerText = "Må skrive noe inn i etternavnet";
        isValid = false;
    }
    else errorMsgs[3].innerText = "";
    if(isNaN(Tlf)||Tlf.toString().length!=8){
        errorMsgs[4].innerText = "Må skrive noe inn i telefonnr";
        isValid = false;
    }
    else errorMsgs[4].innerText = "";
    if(Email==""|| !Email.includes(`@`)|| !Email.includes(`.`)){
        errorMsgs[5].innerText = "Må skrive noe inn i epost";
        isValid = false;
    }
    else errorMsgs[5].innerText = "";
    return isValid;
}
function cleanSlate(val=document.getElementsByClassName(`inputFields`)){
    Array.from(val).forEach(elem=>elem.value="");
}
function resetTable(){
    table.innerHTML=`<tr>
                            <th>Film</th>
                            <th>Antall</th>
                            <th>Fornavn</th>
                            <th>Etternavn</th>
                            <th>TelefonNr</th>
                            <th>Epost</th>
                        </tr>`
}
function deleteTickets(){
    Tickets =[];
    resetTable();
    cleanSlate();
}
