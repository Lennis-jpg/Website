  function validationForm() { 
    var date = document.getElementById("date").value;
    var exercise = document.getElementById("exercise").value;
    var sets = document.getElementById("sets").value;
    var reps = document.getElementById("reps").value; 

    if (!date) {
        alert("Date is required to be filled in");
        return false;
    }
    if (!exercise) {
        alert("Exercise is required to be filled in");
        return false;
    }
    if (!sets) {
        alert("Sets is required to be filled in");
        return false;
    }
    if (!reps) {
        alert("Reps is required to be filled in");
        return false;
    }
    return true;
}

function showData() {
    var exerciseList;
    if (localStorage.getItem('exerciseList') == null) {
        exerciseList = [];
    } else {
        exerciseList = JSON.parse(localStorage.getItem('exerciseList'));
    }

    var html = "";

    exerciseList.forEach((element, index) => {
        html += "<tr>";
        html += "<td>" + element.date + "</td>";
        html += "<td>" + element.exercise + "</td>";
        html += "<td>" + element.sets + "</td>";
        html += "<td>" + element.reps + "</td>";
        html += "<td>" + element.weight + "</td>";
        html += "<td>" + element.setgoal + "</td>";
        html += "<td>" + element.repgoal + "</td>";
        html += "<td>" + element.weightgoal + "</td>";
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

        var exercise = document.getElementById("exercise").value;
        var sets = document.getElementById("sets").value;
        var reps = document.getElementById("reps").value;
        var weight = document.getElementById("weight").value;
        var setgoal = document.getElementById("setgoal").value;
        var repgoal = document.getElementById("repgoal").value;
        var weightgoal = document.getElementById("weightgoal").value;
        var exerciseList;
        if (localStorage.getItem('exerciseList') == null) {
            exerciseList = [];
        } else {
            exerciseList = JSON.parse(localStorage.getItem('exerciseList'));
        }

        exerciseList.push({
            date: date,
            exercise: exercise,
            sets: sets,
            reps: reps,
            weight: weight,
            setgoal: setgoal,
            repgoal: repgoal,
            weightgoal: weightgoal,
        });

        localStorage.setItem('exerciseList', JSON.stringify(exerciseList))
        showData();

        document.getElementById("date").value = "";
        document.getElementById("exercise").value = "";
        document.getElementById("sets").value = "";
        document.getElementById("reps").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("setgoal").value = "";
        document.getElementById("repgoal").value = "";
        document.getElementById("weightgoal").value = "";
    }

}

function deleteData(index) {
    var exerciseList;
    if (localStorage.getItem('exerciseList') == null) {
        exerciseList = [];
    } else {
        exerciseList = JSON.parse(localStorage.getItem('exerciseList'));
    }
    exerciseList.splice(index, 1);

    localStorage.setItem('exerciseList', JSON.stringify(exerciseList))
    showData();

}

function updateData(index) {
    document.getElementById("submit").style.display = 'none';
    document.getElementById("update").style.display = 'block';

    var exerciseList;
    if (localStorage.getItem('exerciseList') == null) {
        exerciseList = [];
    } else {
        exerciseList = JSON.parse(localStorage.getItem('exerciseList'));
    }
    
    document.getElementById("date").value = exerciseList[index].date;
    document.getElementById("exercise").value = exerciseList[index].exercise;
    document.getElementById("sets").value = exerciseList[index].sets;
    document.getElementById("reps").value = exerciseList[index].reps;
    document.getElementById("weight").value = exerciseList[index].weight;
    document.getElementById("setgoal").value = exerciseList[index].setgoal;
    document.getElementById("repgoal").value = exerciseList[index].repgoal;
    document.getElementById("weightgoal").value = exerciseList[index].weightgoal


    document.querySelector("#update").onclick = function () {
        exerciseList[index].date = document.getElementById("date").value;
        exerciseList[index].exercise = document.getElementById("exercise").value;
        exerciseList[index].sets = document.getElementById("sets").value;
        exerciseList[index].reps = document.getElementById("reps").value;
        exerciseList[index].weight = document.getElementById("weight").value;
        exerciseList[index].setgoal = document.getElementById("setgoal").value;
        exerciseList[index].repgoal = document.getElementById("repgoal").value;
        exerciseList[index].weightgoal = document.getElementById("weightgoal").value;

        localStorage.setItem('exerciseList', JSON.stringify(exerciseList))
        showData();

        document.getElementById("submit").style.display = 'block';
        document.getElementById("update").style.display = 'none';
        document.getElementById("date").value = "";
        document.getElementById("exercise").value = "";
        document.getElementById("sets").value = "";
        document.getElementById("reps").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("setgoal").value = "";
        document.getElementById("repgoal").value = "";
        document.getElementById("weightgoal").value = "";
    }
}