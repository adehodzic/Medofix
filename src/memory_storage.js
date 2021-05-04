let storage = {

    user:[
    {
    ime: "Marina",
    prezime: "Brekalo",
    username: "marina@gmail.com",
    adresa: "Koparska 11, Pula"
    },
    {
    ime: "Petra",
    prezime: "Bešlić",
    username: "petra@gmail.com",
    adresa: "Valturska 12, Pula"
    },
    {
    ime: "Nikolina",
    prezime: "Sučić",
    username: "nikolina@gmail.com",
    adresa: "Flavijevska 2, Pula"
    },
    {
    ime: "Marko",
    prezime: "Lalić",
    username: "marko@gmail.com",
    adresa: "Splitska 18, Pula"
    },
],
   


artikl:[
{
id: 1111,
naziv: "Malvazija",
boja: "bijelo",
temperatura_posluzivanja: "6-8 C",
jela: "carpaccio od brancina sa limunom, rukolom, bijelim paprom i cvijetom soli, rižoto s kozicama i tikvicama, fritaja sa šparugama i pancetom",
opis: " vino kompleksnih aroma; cvijeta akacije, limuna, zrele breskve i manga. Na nepcu je veoma svježe i mekano, elegantnog i trajnog okusa. Na retro okusu, prisutna blaga gorčina zelenog badema",
cijena: 40
},
{
id: 1112,
naziv: "Chardonnay",
boja: "bijelo",
temperatura_posluzivanja: "6-8 C",
jela: "kapesante na žaru, tjesteninu s plodovima mora, file bijele ribe pečen u tavici s pečenim povrćem. ",
opis: "izraženog i finog mirisa žute jabuke, irisa te egzotičnih nota dinje, limete i ličija. Na nepcu je zaobljeno i mekano, gotovo slano, vrlo ekstraktno a tendecijom slatkoće",
cijena: 40
},
{
id: 1113,
naziv: "Rose",
boja: "rose",
temperatura_posluzivanja: "6-8 C",
jela: "sirove škampe, brudet ili domaće tagliatelle s prementurskom rakovicom. ",
opis: "vino je boje trešnje, kristalno bistro, živahnih refleksija. Nježnih aroma trešnjina cvijeta, maline i korice crvenog grejpa. Na nepcu svježe i mineralno",
cijena: 40
},
{
id: 1114,
naziv: "Teran",
boja: "crno",
temperatura_posluzivanja: "16-18 C",
jela: "istarski pršut, tuna steak ili domaće kobasice na žaru",
opis: "vino je bistro, duboke rubin crvene boje, živahnih refleksija i prilično je gusto. Finih i izraženih mirisa crvene ruže, višnje, šljive i borovnice. Svježe, baršunasto mekano, ukusno i trajno na nepcu",
cijena: 40
},
],




orders: [
    {
    broj_narudžbe: 8468467,
    username: "marina@gmail.com",
    datum: 7645446873487,
    cijena_ukupna: 80,
        stavke: [
            {
                kolicina: 2,
                artikl: {
                    id: 1111,
                    naziv: "Malvazija",
                    cijena: 40
            }
            }
        ]
        },

        {
            broj_narudžbe: 8458457,
            username: "nikolina@gmail.com",
            datum: 76454448786747,
            cijena_ukupna: 120,
                stavke: [
                    {
                        kolicina: 3,
                        artikl: {
                            id: 1114,
                            naziv: "Teran",
                            cijena: 40
                    }
                    }
                ]
                },

                {
                broj_narudžbe: 16895457,
                username: "marko@gmail.com",
                datum: 76454448786747,
                cijena_ukupna: 240,
                    stavke: [
                        {
                            kolicina: 4,
                            artikl: {
                                id: 1112,
                                naziv: "Chardonnay",
                                cijena: 40
                        }
                        },
                        {
                            kolicina: 2,
                            artikl: {
                                id: 1113,
                                naziv: "Rose",
                                cijena: 40
                        }
                        }
                        ]
                        },
    ]
   }
   export default storage;