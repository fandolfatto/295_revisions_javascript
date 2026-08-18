
let playlist = ["F1", "Interstellar", "Comte de Monte Cristo"];
console.log(playlist.length);

playlist.push("Envole moi");
playlist.push("Une vie par procuration");
import dayjs from "dayjs";

console.log(displayArray(playlist));
playlist.pop()
console.log(displayArray(playlist));
playlist.splice(1,1)
console.log(displayArray(playlist));
playlist.splice(7,1);
console.log(displayArray(playlist));

function displayArray(playlist) {
    return playlist.join(", ");
}

for (let i = 0; i < 10; i++) {
    let res = ""
    for (let j = 0; j < i; j++) {
        res += i;
    }
    console.log(res);
}

function add(nb1, nb2) {
    return nb1 + nb2;
}

function sub(nb1, nb2) {
    return nb1 - nb2;
}

const mult = (nb1, nb2) => nb1 * nb2;
const div = (nb1, nb2) => {
    if (nb2 !== 0) {
        return nb1 / nb2;
    }
    else {
        throw new Error("Division by zero not accepted");
    }
}

console.log(add(3,2));
console.log(sub(3,2));
console.log(mult(3,2));
console.log(div(4,2));
try {
    console.log(div(3,0));
} catch (e) {
    console.log(e.message);
}

// const today = dayjs()

let person = {
    firstname : "John",
    lastname : "Doe",
    birthdate : dayjs('1977-01-11'),
    power : "Magicien"
}
console.log(person.firstname + " " + person.lastname);
console.log(person.birthdate.format("DD.MM.YYYY") + " " + person.power);

let classes = [{"id" : "1", "firstname" :"John"}, {"id" : "2", "firstname" :"Bryan"}, {"id" : "3", "firstname" :"Mark"}, {"id" : "4", "firstname" :"Harry"}];
// 1st argument : currentValue, 2nd argument index, 3rd argument : arr
let student_found = classes.find((student, index, classes) =>
    {

        console.log(index);
        console.log(classes);
        return student.firstname === person.firstname
    }
)
console.log(student_found);

// 1st argument : currentValue, 2nd argument index, 3rd argument : arr
let student_index_found = classes.findIndex((student) =>
    {
        return student.firstname === "Mark"
    }
)
console.log(student_index_found);