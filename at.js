var myarray=[{'name':'Rohan','age':18,'birthdate':'20/12/2003'},
{'name':'Ashish','age':18,'birthdate':'18/09/2003'},
{'name':'Praneeth','age':19,'birthdate':'07/10/2003'},
]
buildtable(myarray)
function buildtable(data){
var table=document.getElementById('tb')
for(var i=0;i<data.length;i++){
    var row=`<tr>
            <td> ${data[i].name}</td>
            <td> ${data[i].age}</td>
            <td> ${data[i].birthdate}</td>
        </tr>`
    table.innerHTML+=row;
}
}
function show_hide(){
if(document.getElementById('table').style.display!="none"){
    document.getElementById('table').style.display="none";
}
else{
    document.getElementById('table').style.display="inline";
}
}