type student = { name: string };

function getName ( studentRec : student ) : string {
    return studentRec.name;
}

var firstStudent : student = { name: "Frank" };

var firstStudentName : string = getName( firstStudent );