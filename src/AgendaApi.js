
// eslint-disable-next-line no-lone-blocks
{/* let reserva = [
        {
            Nombremodelo: 'Andrea',
            Telefono: '3126789023',
            Fecha: '23/12/2024',
            Hora: '3:45 p.m',
            Servicio: 'mantenimiento'
        },
        {
            Nombremodelo: 'Andrea',
            Telefono: '3145673412',
            Fecha: '23/12/2024',
            Hora: '3:00 p.m.',
            Servicio: 'reparacion'
        }
    ]; */}

export function searchAgendas () {

    if (!localStorage['agendas']) {
        localStorage['agendas'] = '[]';
    }

    let agendas = localStorage['agendas'];
    agendas = JSON.parse(agendas);
    return agendas;
}

export function removeAgenda (Nombremodelo) {

    let agendas = searchAgendas();

    let indice = agendas.findIndex(agenda => agenda.Nombremodelo === Nombremodelo);
    agendas.splice(indice, 1);
    localStorage['agendas'] = JSON.stringify(agendas);

}

export function saveAgenda (agenda) {
    let agendas = searchAgendas();
    if (agendas.find(agendar => agendar.Nombremodelo === agenda.Nombremodelo)){
        //editar
        let indice = agendas.findIndex(agendar => agendar.Nombremodelo === agenda.Nombremodelo);
        agendas[indice] = agenda;
    }else{
        //nuevo
        agendas.push(agenda);
    }
    localStorage['agendas'] = JSON.stringify(agendas);
}

export function searchAgendaByNombre (Nombremodelo) {

    let agendas = searchAgendas();
    return agendas.find(agenda => agenda.Nombremodelo === Nombremodelo);

}