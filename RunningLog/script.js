  function validationForm() { 
    var date = document.getElementById("date").value;
    var distance = document.getElementById("distance").value;
    var time = document.getElementById("time").value;
    var pace = document.getElementById("pace").value; 

    if (!date) {
        alert("Date is required to be filled in");
        return false;
    }
    if (!distance) {
        alert("Distance is required to be filled in");
        return false;
    }
    if (!time) {
        alert("Total Time is required to be filled in");
        return false;
    }
    if (!pace) {
        alert("Average Pace is required to be filled in");
        return false;
    }
    return true;
}

function showData() {
    var runList;
    if (localStorage.getItem('runList') == null) {
        runList = [];
    } else {
        runList = JSON.parse(localStorage.getItem('runList'));
    }

    var html = "";

    runList.forEach((element, index) => {
        html += "<tr>";
        html += "<td>" + element.date + "</td>";
        html += "<td>" + element.distance + "</td>";
        html += "<td>" + element.time + "</td>";
        html += "<td>" + element.pace + "</td>";
        html += "<td>" + element.timegoal + "</td>";
        html += "<td>" + element.pacegoal + "</td>";
        html += `<td> 
        <button class="btn btn-warning m-2" id="#updaterubutton" onclick="updateData(${index})">
            Edit
        </button>
        <button class="btn btn-danger" onclick="deleteData(${index})">
            Delete
        </button>
        
        </td>`;
        html += "</tr>";

    });

    document.querySelector("#crudtable tbody").innerHTML = html;
}

document.onload = showData();
function AddData() {
    if (validationForm() == true) { 
        //var date = document.getElementById("date").value;
        var date = document.getElementById("date").value;

        //value = value.split("/");
        //var d = new date(value[2], parseInt(value[1], 10)-1, value[0]); 

        var distance = document.getElementById("distance").value;
        var time = document.getElementById("time").value;
        var pace = document.getElementById("pace").value;
        var timegoal = document.getElementById("timegoal").value;
        var pacegoal = document.getElementById("pacegoal").value;
        var runList;
        if (localStorage.getItem('runList') == null) {
            runList = [];
        } else {
            runList = JSON.parse(localStorage.getItem('runList'));
        }

        runList.push({
            date: date,
            distance: distance,
            time: time,
            pace: pace,
            pacegoal: pacegoal,
            timegoal: timegoal,
        });

        localStorage.setItem('runList', JSON.stringify(runList))
        showData();

        document.getElementById("date").value = "";
        document.getElementById("distance").value = "";
        document.getElementById("time").value = "";
        document.getElementById("pace").value = "";
        document.getElementById("pacegoal").value = "";
        document.getElementById("timegoal").value = "";
    }

}

function deleteData(index) {
    var runList;
    if (localStorage.getItem('runList') == null) {
        runList = [];
    } else {
        runList = JSON.parse(localStorage.getItem('runList'));
    }
    runList.splice(index, 1);

    localStorage.setItem('runList', JSON.stringify(runList))
    showData();

}

function updateData(index) {
    document.getElementById("submit").style.display = 'none';
    document.getElementById("update").style.display = 'block';

    var runList;
    if (localStorage.getItem('runList') == null) {
        runList = [];
    } else {
        runList = JSON.parse(localStorage.getItem('runList'));
    }
    
    document.getElementById("date").value = runList[index].date;
    document.getElementById("distance").value = runList[index].distance;
    document.getElementById("time").value = runList[index].time;
    document.getElementById("pace").value = runList[index].pace;
    document.getElementById("pacegoal").value = runList[index].pacegoal;
    document.getElementById("timegoal").value = runList[index].timegoal


    document.querySelector("#update").onclick = function () {
        runList[index].date = document.getElementById("date").value;
        runList[index].distance = document.getElementById("distance").value;
        runList[index].time = document.getElementById("time").value;
        runList[index].pace = document.getElementById("pace").value;
        runList[index].pacegoal = document.getElementById("pacegoal").value;
        runList[index].timegoal = document.getElementById("timegoal").value;

        localStorage.setItem('runList', JSON.stringify(runList))
        showData();

        document.getElementById("submit").style.display = 'block';
        document.getElementById("update").style.display = 'none';
        document.getElementById("date").value = "";
        document.getElementById("distance").value = "";
        document.getElementById("time").value = "";
        document.getElementById("pace").value = "";
        document.getElementById("pacegoal").value = "";
        document.getElementById("timegoal").value = "";
    }
}
