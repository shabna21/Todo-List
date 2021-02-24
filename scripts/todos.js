    function todos() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);           
            var output = "";
            for (var i = 0; i < response.length; i++) {
                if(response[i].completed == true){
                output += `<ul>
                <li class="todocheck">
                <input type="checkbox" name ="checking" class="checkbox"  checked disabled>
                <div style="text-decoration: line-through;">${response[i].title}</li>
                </ul>`;
                          }
            else{
                output += `<ul>
                <li class="todocheck">
                <input type="checkbox" onchange="checkboxes()" name ="checking" class="checkbox"}/>${response[i].title}</li>
                </ul>`;
            }
            document.getElementById("list").innerHTML = output;         
           }
    }
}
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}





