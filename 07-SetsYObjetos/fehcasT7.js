const fechaHoy = new Date();
const birthDate = new Date(1989, 3, 1);


if (fechaHoy.getTime() > birthDate.getTime()) {
    console.log(true) ;
} else {
    console.log(false);
}


const birthDay = birthDate.getDate();
const birthMonth = birthDate.getMonth() + 1;
const birthDate1 = birthDate.toLocaleDateString();
