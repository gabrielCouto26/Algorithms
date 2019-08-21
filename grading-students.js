function gradingStudents(grades) {

    var a = 0;
    var notas = []
    while (a < grades.length) {
        if ((grades[a] >= 38) && (grades[a] % 5 > 2)) {
            grades[a] = grades[a] + (5 - (grades[a] % 5));
        }
        notas.push(grades[a]);
        a++;
    }
    return notas
}