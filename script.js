var data=[];

//get JSON data and create buttons.
var request= new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);
request.send();
request.onload = function(){

     data = JSON.parse(this.response);
    console.log(data);
    var heading= document.createElement('h1');
    heading.innerHTML="PAGINATION";
    heading.style.textAlign = 'center';
    document.body.append(heading);

    display(data.slice(0,10));
    
}


//create buttons and add event to them.
var temp =[];
     
    for(var i=0;i<10;i++){
        
        var button = document.createElement('button');
        button.setAttribute('class','btn btn-lg btn-warning mr-1')
        button.setAttribute('id',i+1);
       var foo = i+1;
        button.setAttribute('onclick','load('+foo+')');
        button.innerHTML = i+1;
        temp.push(button);
        document.body.append(button);
    }

//display funcion to display data in table
function display(data){
    
    if(document.getElementById('maindiv')){
        document.getElementById('maindiv').remove();
        console.log("check");
    }
    
     var div= document.createElement('div');
     div.setAttribute('id','maindiv');
     div.setAttribute('class','divmain');
     
    var table = document.createElement('table');
    table.setAttribute('id','tbody');
    table.setAttribute('class','table table-dark')
    var row = document.createElement('tr');
    var th1 = document.createElement('th');
    th1.innerHTML= 'ID';
    var th2 = document.createElement('th');
    th2.innerHTML = 'Name';
    var th3 = document.createElement('th');
    th3.innerHTML= 'Email';

    row.append(th1,th2,th3);
    table.append(row);

    
        data.forEach(element => {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            td1.innerHTML = element.id;
    
            var td2 = document.createElement('td');
           td2.innerHTML = element.name;
    
           var td3 = document.createElement('td');
           td3.innerHTML = element.email;
    
           tr.append(td1,td2,td3);
           table.append(tr);
        });
    
            div.append(table);
    
        
    document.body.append(div);
}


    
//load function for event
function load(id){
    console.log(id);
    
       display(data.slice((id-1)*10,id*10));
   
   

}



    

