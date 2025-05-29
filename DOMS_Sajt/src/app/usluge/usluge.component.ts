import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-usluge',
  imports: [CommonModule],
  templateUrl: './usluge.component.html',
  styleUrl: './usluge.component.css',
  animations: [
    trigger('expandCollapse', [
      state('expanded', style({ height: '*', opacity: 1 })),
      state('collapsed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      transition('collapsed <=> expanded', animate('300ms ease'))
    ])
  ]
})
export class UslugeComponent {
  items = [
    {
      question: 'Usluga izrade IDR - Idejnog rešenja',
      answer: 'Idejno rešenje predstavlja osnovnu koncepciju objekta, izrađenu radi pribavljanja lokacijskih uslova. Sadrži ključne podatke potrebne za proveru usklađenosti sa planskim dokumentom i definisanje uslova za dalje projektovanje i infrastrukturno priključenje – poput namene, BRGP-a, gabarita, regulacije, položaja na parceli, pristupa, broja jedinica i načina priključenja na komunalnu mrežu.'
    },
    {
      question: 'Usluga izrade IDP - Idejnog projekta',
      answer: 'Idejni projekat definiše namenu, oblik, kapacitet i tehničke karakteristike objekta, uz prikaz usklađenosti sa lokacijskim uslovima i planskim dokumentima. Izrađuje se radi izrade studije opravdanosti i pribavljanja odobrenja za izvođenje radova, u skladu sa Zakonom o planiranju i izgradnji.'
    },
    {
      question: 'Usluga izrade projekta za građevinsku dozvolu (PGD)',
      answer: 'Idejni projekat definiše namenu, oblik, kapacitet i tehničke karakteristike objekta, uz prikaz usklađenosti sa lokacijskim uslovima i planskim dokumentima. Izrađuje se radi izrade studije opravdanosti i pribavljanja odobrenja za izvođenje radova, u skladu sa Zakonom o planiranju i izgradnji.'
    },
    {
      question: 'Usluga izrade projekta za izvođenje (PZI)',
      answer: 'Projekat za građevinsku dozvolu je skup usklađenih projekata kojima se definišu položaj, kapacitet, konstrukcija, instalacije i oprema objekta, u skladu sa lokacijskim uslovima i važećim propisima. Njime se razrađuje koncepcija iz idejnog rešenja, uz obaveznu usklađenost ključnih parametara kao što su namena, BRGP, regulacija, položaj i priključenje na infrastrukturu.'
    },
    {
      question: 'Usluga izrade projekta izvedenog objekta (PIO)',
      answer: 'Projekat izvedenog objekta se izrađuje za potrebe pribavljanja upotrebne dozvole. Projekat izvedenog objekta predstavlja skup međusobno usaglašenih projekata sa prikazom svih detalja izgrađenog objekta neophodnih za utvrđivanje njegove podobnosti za upotrebu.'
    },
    {
      question: 'Usluga upravljanja i nadzora nad izvođenjem',
      answer: ''
    },
    {
      question: 'Usluga izrade i podnošenja kompletne dokumentacije - od idejnog rešenja do upotrebne dozvole',
      answer: ''
    }
  ]
  items2 = [
    {
      question: 'Konsultacija',
      answer: ['Izlazak na teren - do 2 sata', 'Dva plana sa rasporedom nameštaja',
        '*Moguće i online konsultacije u dogovoru sa klijentom, ukoliko je omogućena osnova prostora']
    },
    {
      question: 'Dekor',
      answer: ['Dizajn bez renoviranja',
        'Izlazak na teren',
        'Moodboard (boje, materijali, teksture)',
        'Odabir tekstila (zavese, dekorativni jastuci, prekrivači)',
        'Odabir dekoracije (vaze, posuđe, tepisi)']
    },
    {
      question: 'Idejni projekat enterijera',
      answer: [
        'Izlazak na teren',
        'Moodboard',
        '3d vizualizacija',
        'Dve opcije sa rasporedom nameštaja',
        'Celokupan projekat enterijera'
      ]
    },
    {
      question: 'Kompletan dizajn enterijera',
      answer: [
        'Izlazak na teren',
        'Moodboard',
        '3d vizualizacija',
        'Dve opcije sa rasporedom nameštaja',
        'Celokupan projekat enterijera (Osnova rušenja, osnova zidanja, osnova podova, osnova plafona, osnova rasvete i prekidača, osnova utičnica, osnova vodovoda i sanitarnih uređaja, izgledi zidova, specifikacija završnih materijala (tapete i pločice), specifikacija sanitarne opreme, specifikacija rasvete, specifikacija tapaciranog nameštaja)',
        'Projekat nameštaja po meri (stolarski crteži)'
      ]
    },
    {
      question: 'Kompletan dizajn enterijera + usluga nadzora',
      answer: [
        'Izlazak na teren',
        'Moodboard',
        '3d vizualizacija',
        'Dve opcije sa rasporedom nameštaja',
        'Celokupan projekat enterijera (Osnova rušenja, osnova zidanja, osnova podova, osnova plafona, osnova rasvete i prekidača, osnova utičnica, osnova vodovoda i sanitarnih uređaja, izgledi zidova, specifikacija završnih materijala (tapete i pločice), specifikacija sanitarne opreme, specifikacija rasvete, specifikacija tapaciranog nameštaja)',
        'Projekat nameštaja po meri (stolarski crteži)',
        'Nadzor, nabavka materijala, predmer i predračun radova',
        'Nabavka neophodne opreme i materijala ',
        'Komunikacija sa izvođačima'
      ]
    },
  ]
  activeIndex: number | null = null;
  toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  activeIndex2: number | null = null;
  toggle2(index2: number): void {
    this.activeIndex2 = this.activeIndex2 === index2 ? null : index2;
  }
}
