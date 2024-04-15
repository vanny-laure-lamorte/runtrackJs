function jourTravaille(date) {
    const joursferies = [
        "01-01",
        "05-01",
        "05-08",
        "07-14",
        "08-15",
        "11-01",
        "11-11",
        "12-25"
    ]; 

    const Jour = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const Mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    const jour = date.getDate();     
    const jour_i = Jour[date.getDay()];
    const mois = date.getMonth();
    const annee = date.getFullYear();   

    // Format date
    const dateKey = `${mois < 10 ? '0' : ''}${date.getMonth() + 1}-${jour < 10 ? '0' : ''}${jour}`;

    // Jour férié
    if (joursferies.includes(dateKey)) {
        console.log(`Le ${jour_i} ${jour} ${Mois[date.getMonth()]} ${annee} est un jour férié.`);
        return;
    }

    // Vérifier si Samedi ou Dimanche
    if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`Non, ${jour_i} ${jour} ${Mois[date.getMonth()]} ${annee} est un week-end.`);
        return;
    }

    // Si ce n'est niférié ni un week-end = jour travaillé
    console.log(`Oui, ${jour_i} ${jour} ${Mois[date.getMonth()]} ${annee} est un jour travaillé.`);
}

jourTravaille(new Date(2022, 0, 1)); 
jourTravaille(new Date(2022, 5, 9));
jourTravaille(new Date(2022, 5, 25));
