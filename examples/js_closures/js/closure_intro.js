function handleStudents(){
  var i = 0;  // scope: local variable, type: number
  var students = ['Jim', 'Bob', 'Tracy', 'Justin', 'Emily'];  // s: local, t:Array
  return function(){  // from SO: the inner function has access to the
    // environment it was created within
    // even after the code that created the environment has returned.
    var student =  students[i]; // s: local, t: string
    i+=1;
    return student;// What type is this returning? String
  };
}

// What type of variable is nextStudent?
<<<<<<< HEAD
// t: Function
var nextStudent = handleStudents();
=======
// t: ???
var nextStudent = handleStudents(); 
>>>>>>> upstream/master
var nextStudent1 = handleStudents();

// onload
window.onload = function(){
  // Adding an event handler to our addStudent button
  document.getElementById("addStudent").onclick = function(){
    document.getElementById('students').innerHTML += nextStudent() + '<br/>\n';
  };

    // Adding an event handler to our addStudent button
  document.getElementById("addStudent1").onclick = function(){
    document.getElementById('students').innerHTML += nextStudent1() + '<br/>\n';
  };

  document.getElementById("clearStudents").onclick = function(){
    document.getElementById('students').innerHTML = '';
  };

  document.getElementById("resetClosure").onclick = function(){
    nextStudent = handleStudents();
  };




  document.getElementById("addStudent1").onclick = function(){
    document.getElementById('students').innerHTML += nextStudent1() + '<br/>\n';
  };

  document.getElementById("clearStudents1").onclick = function(){
    document.getElementById('students').innerHTML = '';
  };

  document.getElementById("resetClosure1").onclick = function(){
    nextStudent1 = handleStudents();
  };
};
