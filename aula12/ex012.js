var horario = 19

console.log(`Agora são ${horario} horas`)

if (horario > 0 && horario <= 5) {
    console.log('Boa Madrugada')
} else if (horario > 5 && horario <= 12){
    console.log('Bom Dia')
} else if (horario > 12 && horario <= 18) {
    console.log('Boa Tarde')
} else if (horario > 18 && horario < 23) {
    console.log('Boa Noite')
}