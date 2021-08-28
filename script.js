

    function verify(){
        if(document.getElementById('pass').value!==document.getElementById("cnfpass").value){
            alert("passwords do not match");
        }


    }
function change(){

    var elem= document.getElementById("cont");
elem.style.backgroundColor="red"
document.getElementById("bigCont").style.backgroundColor="#000"
document.getElementsByTagName("label").style.color="#fff"

}
function showpass(){

    if (document.getElementById("pass").type==="password"){
document.getElementById("pass").type="text";
document.getElementById("cnfpass").type="text";
}
else
{
    document.getElementById("pass").type="password";
document.getElementById("cnfpass").type="password";
}
}
