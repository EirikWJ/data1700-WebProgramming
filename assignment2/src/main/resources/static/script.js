getAllOrders();
let NewId;
IDBreakpoint();
PrintFilmDropdown([`John Wick 4`, `Tina og Bettina`, `Fleksnes`, `Shazam!`]);
function PrintFilmDropdown(films){
    const FilmSet = new Set(films)
    let list=``;
    for(let name of FilmSet){
        list+=`<option value='${name}'>${name}</option>`
    }
    $(`#FilmChoice`).append(list);
}
function buyTicket(){
    let inputValues = getInputValues();
    if(!isValid(inputValues))return console.log(`false input`)
    $.extend(inputValues, {ID: NewId.next().value})
    addOrder(inputValues)
    cleanSlate();
}
function getInputValues(){
    return {
        Film: $(`#FilmChoice`).find(`:selected`).text(),
        Amount: parseInt($(`#Amount`).val()),
        FirstName: $(`#FirstName`).val(),
        LastName: $(`#LastName`).val(),
        PhoneNum: parseInt($(`#tlfNum`).val()),
        Email: $(`#Email`).val()
    }
}
function isValid(input){
    let result = true;
    const response = $.makeArray($(`small`))
    if(input.Film==""){
        result=false
        response[0].innerText = "Må velge en film";
    }else response[0].innerText = "";
    if(input.Amount<=0||isNaN(input.Amount)){
        result = false
        response[1].innerText = "skriv inn et gyldig antall biletter";
    }else response[1].innerText = "";
    if(input.FirstName==""){
        result = false
        response[2].innerText = "Må skrive noe inn som fornavn";
    }else response[2].innerText = "";
    if(input.LastName==""){
        result = false
        response[3].innerText = "Må skrive noe inn som etternavn";
    }else response[3].innerText = "";
    if(input.PhoneNum.toString().length!=8||isNaN(input.PhoneNum)){
        result = false
        response[4].innerText = "Skriv inn et gyldig telefonNr 8-sfr";
    }else response[4].innerText = "";
    if(input.Email==""||!input.Email.includes(`@`)||!input.Email.includes(`.`)){
        result = false
        response[5].innerText = "skriv inn en gyldig epost";
    }else response[5].innerText = "";
    return result
}
function addOrder(order){
    $.post("/setTicket", order, (response)=>{
        console.log(response)
        getAllOrders();
    })
}
function getAllOrders(){
    $.get("/getAllOrders",  (data)=> {
        console.log(`Got orderStack`)
        printOrderStack(data)
    });
}
function printOrderStack(data){
    resetTable();
    let output =``;
    for(let i = 0; i<data.length;i++){
        output+=`<tr>
                            <td>${data[i].id}</td>
                            <td>${data[i].film}</td>
                            <td>${data[i].amount}</td>
                            <td>${data[i].firstName}</td>
                            <td>${data[i].lastName}</td>
                            <td>${data[i].phoneNum}</td>
                            <td>${data[i].email}</td>
                        </tr>`
    }
    $(`#ticketTable`).append(output);
}
function deleteOrders(){
    $.ajax({
        url:"/deleteAll",type: "DELETE", success: (response)=>{
            console.log(response);
            resetTable();
            cleanSlate();
            NewId=IDgenerator();
        }
    })
}
function cleanSlate(){
    Array.from($.makeArray($("input"))).forEach(elem=>elem.value = "");
    $("#FilmChoice").val("")
}
function resetTable(){
    $(`#ticketTable`).html(`
                        <thead class='thead-dark'>
                            <tr>
                                <th>#</th>
                                <th>Film</th>
                                <th>Antall</th>
                                <th>Fornavn</th>
                                <th>Etternavn</th>
                                <th>TelefonNr</th>
                                <th>Epost</th>
                            </tr>
                        </thead>`)}
function IDBreakpoint(){
    $.get("/getIDBreakpoint", (id)=>{
        console.log(`picked up trail`)
        NewId = IDgenerator(id);
    })
}
function* IDgenerator(id=0){
    while(true){
        yield id;
        id++
    }
}