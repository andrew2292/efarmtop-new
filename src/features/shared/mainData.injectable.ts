import {Injectable} from '@angular/core';

@Injectable()

export class mainDataService {
  categories: any = [
  {
    _id: 1,
    name : 'CONSUMABILE MEDICALE',
    headerImageURL : '',
    products : [
      {
        _id: 100,
        name: 'Ace de seringă',
        headerImageURL: 'assets/img/products/aceSeringa.jpg',
        code: '0001',
        images: [
          {
            description : 'Ace de seringă - model produs 1',
            alt : 'Ace de seringa',
            img :   'assets/img/products/aceSeringaDoi.jpg',
            thumb :  'assets/img/products/aceSeringaDoi.jpg',
            bubbleUrl : 'assets/img/products/aceSeringaDoi.jpg'
          },
          {
            description : 'Ace de seringă - model produs 2',
            alt : 'Ace de seringa',
            img :   'assets/img/products/aceSeringaTrei.jpg',
            thumb :  'assets/img/products/aceSeringaTrei.jpg',
            bubbleUrl : 'assets/img/products/aceSeringaTrei.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Ace de unică folosință pentru recoltare',
        characteristics: [
          '<b>Ace de unică folosință pentru recoltare</b>',
          "<b>Dimensiuni</b>: 20G, 1 1/2' (0,90x38mm-galben)",
          '<b>Material</b>: oțel inox;',
          '<b>Mod ambalare</b>: individual în blister'
        ]
      },
      {
        _id: 101,
        name: 'Ace de vacutainer',
        headerImageURL: 'assets/img/products/aceVacutainer.jpg',
        code: '0002',
        images: [
          {
            description : 'Ace de vacutainer - model produs 1',
            alt : 'Ace de vacutainer',
            img :   'assets/img/products/aceVacutainerUnu.jpg',
            thumb :  'assets/img/products/aceVacutainerUnu.jpg',
            bubbleUrl : 'assets/img/products/aceVacutainerUnu.jpg'
          },
          {
            description : 'Ace de vacutainer - model produs 2',
            alt : 'Ace de vacutainer',
            img :   'assets/img/products/aceVacutainerDoi.jpg',
            thumb :  'assets/img/products/aceVacutainerDoi.jpg',
            bubbleUrl : 'assets/img/products/aceVacutainerDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Ace recoltare care se adaptează vacutainerelor',
        characteristics: [
          '<b>Ace recoltare care se adaptează vacutainerelor</b>',
          '<b>Dimensiuni</b>: nr.21Gx11/2-0.8x40mm',
          'Sterile',
          'Prevăzute cu manșon de cauciuc și capac protector',
          'Marcaj CE'
        ]
      },
      {
        _id: 102,
        name: 'Ace spinale',
        headerImageURL: 'assets/img/products/aceSpinale.jpeg',
        code: '0003',
        images: [
          {
            description : 'Ace spinale - model produs 1',
            alt : 'Ace spinale',
            img :   'assets/img/products/aceSpinaleUnu.jpg',
            thumb :  'assets/img/products/aceSpinaleUnu.jpg',
            bubbleUrl : 'assets/img/products/aceSpinaleUnu.jpg'
          },
          {
            description : 'Ace spinale - model produs 2',
            alt : 'Ace spinale',
            img :   'assets/img/products/aceSpinaleDoi.jpg',
            thumb :  'assets/img/products/aceSpinaleDoi.jpg',
            bubbleUrl : 'assets/img/products/aceSpinaleDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Ace spinale cu ambou transparent pentru vizualizarea rapida a LCR sau a sangelui',
        characteristics: [
          '<b>Tip bizou</b>: quincke cut',
          '<b>Culoare</b>: galben, roz, negru, portocaliu, maro',
          '<b>Lungime</b>: 90 mm',
          '<b>Material</b>: otel inoxidabil chirurgical',
          '<b>Alte informatii</b>: Acele au ambou transparent pentru vizualizarea rapidă a LCR sau a sângelui în caz de manevrare greșită',
          'Sterile, ambalate individual, termen de valabilitate 5 ani.'
        ]
      },
      {
        _id: 103,
        name: 'Bandaj elastic',
        headerImageURL: 'assets/img/products/bandajElastic.jpg',
        code: '0004',
        images: [
          {
            description : 'Bandaj elastic - model produs 1',
            alt : 'Bandaje elastice',
            img :   'assets/img/products/bandajElasticUnu.jpg',
            thumb :  'assets/img/products/bandajElasticUnu.jpg',
            bubbleUrl : 'assets/img/products/bandajElasticUnu.jpg'
          },
          {
            description : 'Bandaj elastic - model produs 2',
            alt : 'Bandaje elastice',
            img :   'assets/img/products/bandajElasticDoi.jpg',
            thumb :  'assets/img/products/bandajElasticDoi.jpg',
            bubbleUrl : 'assets/img/products/bandajElasticDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Bandaj elastic autoadeziv pentru suportul muschilor și încheieturii',
        characteristics: [
          'Bandajele elastice autoadezive sunt recomandate pentru suportul muschilor si incheieturii. Bandajele elastice autoadezive sunt confectionate dintr-un material special netesut de matase artificiala ideal pentru compresie si sustinere, copolimer, elastic, permeabile pentru aer, sunt multifunctionale, economice, adera imediat ce straturile sunt infasurate unul peste celalalt, dar se pot desface cu usurinta cu mana, economisind timp si bandaj fata de cele clasice.',
          'Este autoadeziv',
          'Nu se lipește pe piele, păr sau plăgi',
          'Este subțire și usor și cu toate acestea rezistent la întindere și presiune',
          'Se poate rupe și aplica în mod simplu, fără ajutorul foarfecii',
          'Nu alunecă pe piele și nu limitează mișcările dacă e aplicat în zona încheieturilor',
          'Protejează pielea, o lasă să respire, evită macerarea pielii',
          'Economic, sunt suficiente câteva înfășurări pentru a creea un bandaj ferm, uniform, fără cute (foarte elastic și după multe utilizări)',
          'Poate fi sterilizat în autoclave',
          'Nu se deșiră'
        ]
      },
      {
        _id: 104,
        name: 'Apăsătoare linguale',
        headerImageURL: 'assets/img/products/apasatoareLimba.jpg',
        code: '0005',
        images: [
          {
            description : 'Apăsătoare linguale - model produs 1',
            alt : 'apasatoare linguale',
            img :   'assets/img/products/apasatoareLimbaUnu.jpg',
            thumb :  'assets/img/products/apasatoareLimbaUnu.jpg',
            bubbleUrl : 'assets/img/products/apasatoareLimbaUnu.jpg'
          },
          {
            description : 'Apăsătoare linguale - model produs 2',
            alt : 'apasatoare linguale',
            img :   'assets/img/products/apasatoareLimbaDoi.jpg',
            thumb :  'assets/img/products/apasatoareLimbaDoi.jpg',
            bubbleUrl : 'assets/img/products/apasatoareLimbaDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Apăsătoare linguale din lemn',
        characteristics: [
          'Apăsătoare linguale ambalate',
          '<b>Material</b>: lemn / inox;',
          '<b>Dimensiuni</b>: 150mm x 18mm;'
        ]
      },
      {
        _id: 105,
        name: 'Canule nazale',
        headerImageURL: 'assets/img/products/canuleNazale.jpg',
        code: '0006',
        images: [
          {
            description : 'Canule nazale - model produs 1',
            alt : 'Canule nazale',
            img :   'assets/img/products/canuleNazaleUnu.png',
            thumb :  'assets/img/products/canuleNazaleUnu.png',
            bubbleUrl : 'assets/img/products/canuleNazaleUnu.png'
          },
          {
            description : 'Canule nazale - model produs 2',
            alt : 'Canule nazale',
            img :   'assets/img/products/canuleNazaleDoi.jpeg',
            thumb :  'assets/img/products/canuleNazaleDoi.jpeg',
            bubbleUrl : 'assets/img/products/canuleNazaleDoi.jpeg'
          }
        ],
        categoryID: 1,
        previewData : 'Sondă nazală pentru administrarea oxigenului',
        characteristics: [
          'Sondă nazală pentru administrarea oxigenului (Canula Oxigen) pentru adulți și copii;',
          '<b>Material</b>: PVC non-iritant și non-toxic;',
          '<b>Caracteristici</b>: atraumatică, rotundă în secțiune, distal se conectează la instalația de oxigen, cele două vârfuri ce se introduc în narine sunt foarte fine;',
          '<b>Instrucțiuni de folosire</b>: Atașați canula pe fața pacientului, introducându-i cele două vârfuri în narine. Treceți tubul canulei după urechile pacientului și deplasați adaptorul, astfel încât să se ajusteze cât mai confortabil pentru pacient. Strângeți numai pentru a fixa mai bine canula în narine. Atașați celălalt capăt la tubul de oxigen. Reglați fluxul de O2 după indicațiile terapeutului;',
          '<b>Sterilizare</b>: Sonda nazală de oxigen, de unică folosință, este sterilizată cu oxid de etilenă în conformitate cu cerințele sterilizării EN550 și Corporation Standards Q/HGS009-2001;',
          '<b>Ambalaj</b>: Blister moale;'
        ]
      },
      {
        _id: 106,
        name: 'Branule',
        headerImageURL: 'assets/img/products/branule.jpeg',
        code: '0007',
        images: [
          {
            description : 'Branule - model produs 1',
            alt : 'Branule',
            img :   'assets/img/products/branuleUnu.jpg',
            thumb :  'assets/img/products/branuleUnu.jpg',
            bubbleUrl : 'assets/img/products/branuleUnu.jpg'
          },
          {
            description : 'Branule - model produs 2',
            alt : 'Branule',
            img :   'assets/img/products/branuleDoi.jpg',
            thumb :  'assets/img/products/branuleDoi.jpg',
            bubbleUrl : 'assets/img/products/branuleDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Destinate administrarii prin infuzare intravenoasă intermitentă a fluidelor medicamentoase',
        characteristics: [
          'Dispozitive medicale destinate administrării prin infuzare (perfuzare) intravenoasă intermitentă a fluidelor medicamentoase, printr-o venă periferică. Cateterele cu valvă pot fi utilizate fără riscul apariției de tromboflebite deoarece sunt fabricate din PTFE (poli-tetra-fluoro-etilen) și polipropilenă. PTFE-ul este unul dintre cele mai bio-compatibile materiale cunoscute la ora actuală, are cel mai scăzut coeficient de frecare și reduce astfel riscurile de blocare în pereții vasculari;',
          'Ac atraumatic, apirogen, latex free, din oțel inoxidabil, cu fantă la extremitatea distală pentru a vizualiza poziția cateterului;',
          'Căpăcelul special proiectat împiedică contaminarea în timpul în care valva nu este utilizată;',
          'Branulele sunt prevăzute cu valvă de injectare colorată conform codului internațional (diferit în funcție de mărime) și aripioare laterale pentru administrarea de extra medicație fără dureri;',
          'Netoxice, apirogene;',
          'Sunt fabricate în concordanță cu normele ISO 9001 și ISO13488 și dețin marca CE conform Directivei Europene 93/42/EEC;'
        ]
      },
      {
        _id: 107,
        name: 'Perfuzoare',
        headerImageURL: 'assets/img/products/perfuzor.jpeg',
        code: '0008',
        images: [
          {
            description : 'Perfuzoare - model produs 1',
            alt : 'Perfuzoare',
            img :   'assets/img/products/perfuzorUnu.jpg',
            thumb :  'assets/img/products/perfuzorUnu.jpg',
            bubbleUrl : 'assets/img/products/perfuzorUnu.jpg'
          },
          {
            description : 'Perfuzoare - model produs 2',
            alt : 'Perfuzoare',
            img :   'assets/img/products/perfuzorDoi.jpg',
            thumb :  'assets/img/products/perfuzorDoi.jpg',
            bubbleUrl : 'assets/img/products/perfuzorDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Perfuzor / Trusă perfuzie sterilă cu ac plastic',
        characteristics: [
          'Perfuzor / Trusa perfuzie sterila cu ac plastic;',
          'Acul de plastic este prevăzut cu filtru special antibacterian care permite intrarea aerului, dar nu permite contaminarea lichidelor;',
          'Ace din oțel inox 21G x 1 1/2 cm, siliconate, netoxice. Camera de aer cu picurător și filtru, care nu permite trecearea impurităților. Dispozitiv de reglare a debitului soluției perfuzabile;',
          '<b>Material</b>: PVC pentru uz medical de înaltă calitate;'
        ]
      },
      {
        _id: 108,
        name: 'Feși tifon',
        headerImageURL: 'assets/img/products/tifon.jpg',
        code: '0009',
        images: [
          {
            description : 'Feși tifon - model produs 1',
            alt : 'Fesi tifon',
            img :   'assets/img/products/tifonUnu.jpg',
            thumb :  'assets/img/products/tifonUnu.jpg',
            bubbleUrl : 'assets/img/products/tifonUnu.jpg'
          },
          {
            description : 'Feși tifon - model produs 2',
            alt : 'fesi tifon',
            img :   'assets/img/products/tifonDoi.jpg',
            thumb :  'assets/img/products/tifonDoi.jpg',
            bubbleUrl : 'assets/img/products/tifonDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Feși Tifon 10cm x 10cm;',
        characteristics: [
          'Feși Tifon 10cm x 10cm;',
          'Fașa din tifon are utilizare în fixarea diferitelor comprese sau a altor dispozitive medicale, asigurând și o absorbție corespunzătoare a eventualelor fluide care traversează pansamentele;',
          '<b>Ambalaj</b>: 1 rolă ambalată individual;'
        ]
      },
      {
        _id: 109,
        name: 'Comprese sterile',
        headerImageURL: 'assets/img/products/comprese.jpg',
        code: '0010',
        images: [
          {
            description : 'Comprese sterile - model produs 1',
            alt : 'Comprese sterile',
            img :   'assets/img/products/compreseUnu.jpg',
            thumb :  'assets/img/products/compreseUnu.jpg',
            bubbleUrl : 'assets/img/products/compreseUnu.jpg'
          },
          {
            description : 'Comprese sterile - model produs 2',
            alt : 'Comprese sterile',
            img :   'assets/img/products/compreseDoi.jpg',
            thumb :  'assets/img/products/compreseDoi.jpg',
            bubbleUrl : 'assets/img/products/compreseDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Comprese sterile din tifon, neimpregnate',
        characteristics: [
          'Comprese din tifon, neimpregnate, care absorb secrețiile în exces și protejează rănile deschise împotriva contaminării cu microbi și bacterii;',
          '<b>Țesătură</b>: 24 x 20 (24 fire pe orizontală și 20 pe verticală pe unitatea de suprafață);',
          '50 straturi;',
          '<b>Greutate</b>: 23g/m2;',
          '<b>Indice de albire</b>: 86;',
          '<b>Absorbție</b>: timp de scufundare de 3 secunde ( standardul este de < 10 secunde);',
          'Nonacid, nonalcalin, nu conține amidon sau dextrină;',
          'Sterilizare cu etilen oxid;',
          'Ambalaj individual cu fereastră transparentă din polipropilenă.'
        ]
      },
      {
        _id: 110,
        name: 'Seringi',
        headerImageURL: 'assets/img/products/seringiUnu.jpg',
        code: '0011',
        images: [
          {
            description : 'Seringi - model produs 1',
            alt : 'Seringi',
            img :   'assets/img/products/seringi.jpg',
            thumb :  'assets/img/products/seringi.jpg',
            bubbleUrl : 'assets/img/products/seringi.jpg'
          },
          {
            description : 'Seringi - model produs 2',
            alt : 'Seringi',
            img :   'assets/img/products/seringiDoi.jpg',
            thumb :  'assets/img/products/seringiDoi.jpg',
            bubbleUrl : 'assets/img/products/seringiDoi.jpg'
          }
        ],
        categoryID: 1,
        price: '0.17 lei - 1ml (fără TVA)<br/>0.14 lei - 2ml (fără TVA)<br/>0.15 lei - 5ml (fără TVA)<br/>0.23 lei - 10ml (fără TVA)<br/>0.31 lei - 20ml (fără TVA)<br/>0.84 lei - 50ml (fără TVA)<br/>2.4 lei - 100ml (fără TVA)',
        previewData : 'Seringi de unică folosință 1/2/5/10/20/50/100 ml',
        characteristics: [
          'Seringi de unică folosință 1/2/5/10/20/50/100 ml cu ac 21G din 3 componente (piston prevăzut cu garnitură din cauciuc natural pentru uz medical);'
        ]
      },
      {
        _id: 111,
        name: 'Leucoplast',
        headerImageURL: 'assets/img/products/leucoplast.jpg',
        code: '0012',
        images: [
          {
            description : 'Leucoplast - model produs 1',
            alt : 'Leucoplast',
            img :   'assets/img/products/leucoplastUnu.jpg',
            thumb :  'assets/img/products/leucoplastUnu.jpg',
            bubbleUrl : 'assets/img/products/leucoplastUnu.jpg'
          },
          {
            description : 'Leucoplast - model produs 2',
            alt : 'Leucoplast',
            img :   'assets/img/products/leucoplastDoi.jpg',
            thumb :  'assets/img/products/leucoplastDoi.jpg',
            bubbleUrl : 'assets/img/products/leucoplastDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Leucoplast confecționat din plastic perforat, hipoalergenic și impermeabil',
        characteristics: [
          'Confecționat din plastic perforat, hipoalergenic și impermeabil;',
          'Conferă o fixare solidă și nu provoacă durere la dezlipire;',
          'Plasturele adeziv fixează pansamentele medicale pe pielea uscată și curată;',
          'Se desprinde foarte ușor atât pe verticala, cât și pe orizontală;'
        ]
      },
      {
        _id: 112,
        name: 'Pansamente sterile',
        headerImageURL: 'assets/img/products/pansament.jpg',
        code: '0013',
        images: [
          {
            description : 'Pansamente sterile - model produs 1',
            alt : 'Pansamente sterile',
            img :   'assets/img/products/pansamentUnu.png',
            thumb :  'assets/img/products/pansamentUnu.png',
            bubbleUrl : 'assets/img/products/pansamentUnu.png'
          }
        ],
        categoryID: 1,
        previewData : 'Pansamente sterile pentru îngrijirea plăgilor mici, arsuri , leziuni superficiale',
        characteristics: [
          'Se potrivesc foarte bine pentru îngrijirea plăgilor mici, arsuri , leziuni superficiale, plăgi operatorii și ca profilaxie pentru decubit. Pot fi utilizate și pentru fixarea cateterelor venoase centrale sau periferice;',
          'Sistemul cu "cadru" facilitează o poziționare exactă, previne aplicarea pansamentelor sub tensiune și evită apariția eventualelor traume ale pielii;',
          'Deoarece fereastra centrală din hârtie este deja îndepărtată, se evită crearea de reziduri suplimentare;',
          'Adezivul nu este din latex și minizează riscul de apariție al unor iritații ale pielii;',
          'Pentru fixarea în siguranță a cateterului, pentru verificarea, observația permanentă a zonei de inserție;'
        ]
      },
      {
        _id: 113,
        name: 'Lame bisturiu',
        headerImageURL: 'assets/img/products/lame.jpg',
        code: '0014',
        images: [
          {
            description : 'Lame bisturiu - model produs 1',
            alt : 'Lame bisturiu',
            img :   'assets/img/products/lameUnu.jpg',
            thumb :  'assets/img/products/lameUnu.jpg',
            bubbleUrl : 'assets/img/products/lameUnu.jpg'
          },
          {
            description : 'Lame bisturiu - model produs 2',
            alt : 'Lame bisturiu',
            img :   'assets/img/products/lameDoi.jpg',
            thumb :  'assets/img/products/lameDoi.jpg',
            bubbleUrl : 'assets/img/products/lameDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Lame bisturiu din oțel-carbon',
        characteristics: [
          'Lame bisturiu din oțel-carbon;',
          'Lamele de bisturiu sunt sterile, ambalate individual în folie de aluminiu;',
          'Fabricate în concordanță cu standardele UE;'
        ]
      },
      {
        _id: 114,
        name: 'Feși gipsate',
        headerImageURL: 'assets/img/products/fesiGips.jpg',
        code: '0015',
        images: [
          {
            description : 'Feși gipsate - model produs 1',
            alt : 'Fesi gipsate',
            img :   'assets/img/products/fesiGipsUnu.jpg',
            thumb :  'assets/img/products/fesiGipsUnu.jpg',
            bubbleUrl : 'assets/img/products/fesiGipsUnu.jpg'
          },
          {
            description : 'Feși gipsate - model produs 2',
            alt : 'fesi gipsate',
            img :   'assets/img/products/fesiGipsDoi.jpg',
            thumb :  'assets/img/products/fesiGipsDoi.jpg',
            bubbleUrl : 'assets/img/products/fesiGipsDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Feși gipsate din bumbac 100%, de diferite dimensiuni',
        characteristics: [
          'Confecționată din bumbac 100%, de diferite dimensiuni, utilă pentru imobilizarea unei fracturi sau corecția unei deformații. Este rulată în jurul unui ax de plastic, oferind mobilitate. Timp de uscare 8 ore și timp de întărire 3 minute. Este ambalată individual în folie din plastic aluminizată;',
          '<b>Dimensiuni</b>: 15cm x 2.7m;',
          'Bumbac 100% cu greutatea de 26.2g/m2;',
          'Rulată în jurul unui ax de plastic, ceea ce o face mai ușor de manevrat;',
          'Pierderi de pulbere 1.5 - 2%;',
          '<b>Timp de umezire</b>: 8 secunde;',
          '<b>Timp de întărire</b>: 3 minute;',
          '<b>Timp de uscare</b>: 8 ore;',
          '<b>Greutate specifică</b>: 440 g/m<sup>2</sup>;',
          'Ambalată individual în folie de plastic aluminizată;'
        ]
      },
      {
        _id: 115,
        name: 'Măști oxigen',
        headerImageURL: 'assets/img/products/masca.jpg',
        code: '0016',
        images: [
          {
            description : 'Măști oxigen - model produs 1',
            alt : 'masti oxigen',
            img :   'assets/img/products/mascaUnu.jpeg',
            thumb :  'assets/img/products/mascaUnu.jpeg',
            bubbleUrl : 'assets/img/products/mascaUnu.jpeg'
          },
          {
            description : 'Măști oxigen - model produs 2',
            alt : 'masti oxigen',
            img :   'assets/img/products/mascaDoi.jpg',
            thumb :  'assets/img/products/mascaDoi.jpg',
            bubbleUrl : 'assets/img/products/mascaDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Mască pentru terapia cu oxigen',
        characteristics: [
          'Mască pentru terapia cu oxigen;',
          'Este dotată cu un furtun de 2,5 m;',
          'Masca are un adaptor care face posibilă cuplarea;',
          'Dispune de un adaptor pentru a putea prelungi lungimea furtunului;',
          'Acest tip de mască poate fi folosită atât la aerosoli, cât și la terapia cu oxigen;',
          'Se adaptează ușor fără a fi nevoie de o persoană care să facă posibilă montarea;'
        ]
      },
      {
        _id: 116,
        name: 'Linii de extensie',
        headerImageURL: 'assets/img/products/linii.jpg',
        code: '0017',
        images: [
          {
            description : 'Linii de extensie - model produs 1',
            alt : 'Linii de extensie',
            img :   'assets/img/products/liniiUnu.jpg',
            thumb :  'assets/img/products/liniiUnu.jpg',
            bubbleUrl : 'assets/img/products/liniiUnu.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Linii de extensie pentru a conecta sursa perfuziei cu zona de perfuzat',
        characteristics: [
          'Linia de extensie este concepută pentru a conecta sursa perfuziei (exemplu, trusa de perfuzie sau seringa de 50ml din infuzomat) cu zona de perfuzat (de exemplu, branula), pentru a extinde distanța dintre acestea;',
          'Este dotată cu conectori lock feminin și masculin, cu un unghi de conexiune de 6% pentru a evita pierderi de lichid și infecții ulterioare;',
          'Tubulatura din PVC are o lungime de 150cm și este translucidă pentru a monitoriza eventuala trecere accidentală a aerului prin acesta. Este moale, rezistentă la lovituri accidentale, aspect “inghețat”. Diametrul interior este de 3.0 mm, iar cel exterior de 4.1mm;',
          'Este rezistentă la presiunea ridicată a perfuziei de 4.5 bar (60psi);',
          'Produsul este steril, în ambalaj individual prevăzut ventral cu bandă de hârtie permeabilă unidirecțională la etilenoxid, pentru siguranța crescută a sterilizării și manipulare facilă;'
        ]
      },
      {
        _id: 117,
        name: 'Pipe Guedel',
        headerImageURL: 'assets/img/products/pipe.jpg',
        code: '0018',
        images: [
          {
            description : 'Pipe Guedel - model produs 1',
            alt : 'Pipe Guedel',
            img :   'assets/img/products/pipeUnu.jpg',
            thumb :  'assets/img/products/pipeUnu.jpg',
            bubbleUrl : 'assets/img/products/pipeUnu.jpg'
          },
          {
            description : 'Pipe Guedel - model produs 2',
            alt : 'Pipe Guedel',
            img :   'assets/img/products/pipeDoi.jpg',
            thumb :  'assets/img/products/pipeDoi.jpg',
            bubbleUrl : 'assets/img/products/pipeDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Pipe Guedel sterile prin metoda oxid de etilenă',
        characteristics: [
          'Unică folosință, sterile prin metoda oxid de etilenă, utilizare buco-faringienă; Material: PE non-toxic, semi-rigid, codificare mărimi pe culori;',
          '<b>Mod de ambalare</b>: ambalaj individual;',
          '<b>Dimensiuni</b>: 000 - 5 / 000 - 6;'
        ]
      },
      {
        _id: 118,
        name: 'Sonde',
        headerImageURL: 'assets/img/products/sonde.jpg',
        code: '0019',
        images: [
          {
            description : 'Sonde - model produs 1',
            alt : 'sonde',
            img :   'assets/img/products/sondeUnu.jpg',
            thumb :  'assets/img/products/sondeUnu.jpg',
            bubbleUrl : 'assets/img/products/sondeUnu.jpg'
          },
          {
            description : 'Sonde - model produs 2',
            alt : 'sonde',
            img :   'assets/img/products/sondeDoi.jpg',
            thumb :  'assets/img/products/sondeDoi.jpg',
            bubbleUrl : 'assets/img/products/sondeDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Confecționate din PVC medicinal transparent',
        characteristics: [
          'Confecționate din PVC medicinal transparent;',
          'Cap specific în formă de pâlnie, vârful închis și doi ochi polisați;',
          'Ambalate individual în ambalaj steril;'
        ]
      },
      {
        _id: 119,
        name: 'Pungi urinare',
        headerImageURL: 'assets/img/products/pungi.jpg',
        code: '0020',
        images: [
          {
            description : 'Pungi urinare - model produs 1',
            alt : 'Pungi urinare',
            img :   'assets/img/products/pungiUnu.jpg',
            thumb :  'assets/img/products/pungiUnu.jpg',
            bubbleUrl : 'assets/img/products/pungiUnu.jpg'
          },
          {
            description : 'Pungi urinare - model produs 2',
            alt : 'Pungi urinare',
            img :   'assets/img/products/pungiDoi.jpg',
            thumb :  'assets/img/products/pungiDoi.jpg',
            bubbleUrl : 'assets/img/products/pungiDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Recipiente tip pungă pentru sondă vezicală',
        characteristics: [
          'Recipiente tip pungă pentru sondă vezicală, confecționate din material rezistent, transparente, gradate, nonpirogenice, prevăzute cu supapă și filtru, se folosesc pentru a drena sau pentru a măsura lichidul corporal sau urina;',
          'Pungi din PVC medical;',
          'Gradate cu supapă și filtru;',
          'Ambalate individual;',
          '<b>Volum</b>: 100 - 2000 ml;'
        ]
      },
      {
        _id: 120,
        name: 'Tifon medical',
        headerImageURL: 'assets/img/products/tifonMed.jpg',
        code: '0021',
        images: [
          {
            description : 'Tifon medical - model produs 1',
            alt : 'Tifon medical',
            img :   'assets/img/products/tifonMedUnu.jpg',
            thumb :  'assets/img/products/tifonMedUnu.jpg',
            bubbleUrl : 'assets/img/products/tifonMedUnu.jpg'
          },
          {
            description : 'Tifon medical - model produs 2',
            alt : 'Tifon medical',
            img :   'assets/img/products/tifonMedDoi.jpg',
            thumb :  'assets/img/products/tifonMedDoi.jpg',
            bubbleUrl : 'assets/img/products/tifonMedDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Tifon medical produs din bumbac 100%',
        characteristics: [
          'Tifon medical de cea mai bună calitate, produs din bumbac 100%. Nu conține impurități, marginile sunt țesute și este rezistent la întindere. Este foarte absorbant și nu produce reacții la nivelul pielii;',
          'Descleiat, degresat şi albit;',
          'Culoare albă, fără miros, curat şi fără pete, se prezintă sub forma unei ţesături uniforme şi rezistente, care nu se destramă uşor şi are capacitate mare de absorbţie;',
          'Hidrofilie max. 10 s;'
        ]
      },
      {
        _id: 121,
        name: 'Vată medicinală',
        headerImageURL: 'assets/img/products/vata.jpg',
        code: '0022',
        images: [
          {
            description : 'Vată medicinală - model produs 1',
            alt : 'Vata medicinala',
            img :   'assets/img/products/vataUnu.jpg',
            thumb :  'assets/img/products/vataUnu.jpg',
            bubbleUrl : 'assets/img/products/vataUnu.jpg'
          },
          {
            description : 'Vată medicinală - model produs 2',
            alt : 'Vata medicinala',
            img :   'assets/img/products/vataDoi.jpg',
            thumb :  'assets/img/products/vataDoi.jpg',
            bubbleUrl : 'assets/img/products/vataDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Vată hidrofilă tip BC pentru uz medicinal',
        characteristics: [
          'Vată hidrofilă tip BC pentru uz medicinal, fără impurități, fără miros, din bumbac 100%, superabsorbantă (max. 4 secunde), nu se destramă. Ambalată în pungi de plastic de 100gr și 200gr;'
        ]
      },
      {
        _id: 122,
        name: 'Fire de sutură',
        headerImageURL: 'assets/img/products/fireSut.jpg',
        code: '0023',
        images: [
          {
            description : 'Fire de sutură - model produs 1',
            alt : 'Fire de sutura',
            img :   'assets/img/products/fireSutUnu.jpg',
            thumb :  'assets/img/products/fireSutUnu.jpg',
            bubbleUrl : 'assets/img/products/fireSutUnu.jpg'
          },
          {
            description : 'Fire de sutură - model produs 2',
            alt : 'Fire de sutura',
            img :   'assets/img/products/fireSutDoi.jpg',
            thumb :  'assets/img/products/fireSutDoi.jpg',
            bubbleUrl : 'assets/img/products/fireSutDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Fire de sutură cu ac cu lungimea de 18 cm și curbura 1/2',
        characteristics: [
          'Ac cu lungime de 18 cm și curbura 1/2 sau ac cu lungimea de 20 cm și curbura 1/2;',
          '<b>Dimensiuni fire USP</b>: 5/0, 4/0, 3/0, 2/0;',
          'Firul extrudat din polimer de polipropilena - sutură flexibilă care produce noduri foarte rezistente, extrem de bine tolerată de organism, recomandată în chirurgia vasculară și cardiovasculară;',
          'Modul de ambalare asigură ca firul să nu aibă îndoituri în momentul extragerii din ambalajul steril;',
          '<b>Tipuri ace</b>: secțiune rotundă sau triunghiulară;',
          '<b>Curbură ace</b>: 1/2;',
          '<b>Metodă de sterilizare</b>: ETO (Ethylene Oxide);'
        ]
      },
      {
        _id: 123,
        name: 'Truse medicale',
        headerImageURL: 'assets/img/products/trusa.jpg',
        code: '0024',
        images: [
          {
            description : 'Truse medicale - model produs 1',
            alt : 'Truse medicale',
            img :   'assets/img/products/trusaUnu.jpg',
            thumb :  'assets/img/products/trusaUnu.jpg',
            bubbleUrl : 'assets/img/products/trusaUnu.jpg'
          },
          {
            description : 'Truse medicale - model produs 2',
            alt : 'Truse medicale',
            img :   'assets/img/products/trusaDoi.jpg',
            thumb :  'assets/img/products/trusaDoi.jpg',
            bubbleUrl : 'assets/img/products/trusaDoi.jpg'
          }
        ],
        categoryID: 1,
        previewData : 'Trusă FIXĂ de tip "dulap" sau MOBILĂ de tip "geantă"',
        characteristics: [
          'Trusa FIXĂ este de tip "dulap" și necesită montarea în perete. Este recomandată pentru obiectivele simple, cu puține camere sau compartimentări, în așa fel încât transportarea echipamentului pentru intervenție până la locul accidentului să se poată realiza cu ușurință;',
          'Trusa MOBILĂ este de tip "geantă" și este recomandată pentru autoturisme;',
          '<b>Conținutul trusei</b>:<br> Foarfece cu vârfuri boante - 1 buc;<br> Dispozitiv respirație gură-gură - 1 buc;<br>' +
          'Pipă Guedel mărimea 4 - 1 buc;<br>' +
          'Pipă Guedel mărimea 10 - 1 buc;<br>' +
          'Pansaplast (plasture) 6/50 cm - 1 buc;<br>' +
          'Fașă tifon 5cm/4m - 5 buc;<br>' +
          'Fașă tifon 10cm/5m - 3 buc;<br>' +
          'Bandaj triunghiular l=80mm - 2 buc;<br>' +
          'Vată hidrofilă sterilă 50g - 2 buc;<br>' +
          'Mânuși de examinare - 4 per;<br>' +
          'Comprese sterile 10/8cm x 10 buc - 10 pac;<br>' +
          'Alcool sanitar - 200ml;<br>' +
          'Alcool iodat - 200ml;<br>' +
          'Rivanol soluție - 200ml;<br>' +
          'Deschizător de gură - 1 buc;<br>' +
          'Garou elastic 50cm - 1 buc;<br>' +
          'Atele din material plastic - 2 buc;<br>' +
          'Leucoplast 5cm/3cm - 1 rola;<br>' +
          'Leucoplast 2,5cm/2,5m - 1 rola;<br>' +
          'Pansament individual 2/6 cm - 10 buc;<br>' +
          'Pansament cu rivanol 6/10 cm - 5 buc;<br>' +
          'Perogen - 1 flacon;<br>' +
          'Batiste hârtie dezinfectante - 10 buc;<br>' +
          'Ace siguranță - 12 buc;<br>' +
          'Pahare de unică folosință - 5 buc;<br>' +
          'Caiet 50 de file - 1 buc;'
        ]
      }
    ]
  },
  {
    _id: 2,
    name : 'DEZINFECTANȚI-DETERGENȚI',
    headerImageURL : '',
    products : [
      {
        _id: 200,
        name: 'Apă oxigenată',
        headerImageURL: 'assets/img/products/apaOx.jpg',
        code: '1001',
        images: [
          {
            description : 'Apă oxigenată - model produs 1',
            alt : 'Apa oxigenata',
            img :   'assets/img/products/apaOxUnu.jpg',
            thumb :  'assets/img/products/apaOxUnu.jpg',
            bubbleUrl : 'assets/img/products/apaOxUnu.jpg'
          },
          {
            description : 'Apă oxigenată - model produs 2',
            alt : 'Apa oxigenata',
            img :   'assets/img/products/apaOxDoi.jpg',
            thumb :  'assets/img/products/apaOxDoi.jpg',
            bubbleUrl : 'assets/img/products/apaOxDoi.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Apă oxigenată pentru tratamentul local al plăgilor',
        characteristics: [
          'Apa oxigenată este utilizată în tratamentul local al plăgilor sub formă de soluție diluată;',
          'Are propietăți hemostatice (oprește sângerările);',
          'Compus doar din apă și oxigen; este un antiseptic, distrugând germenii prin oxidare;',
          '<b>Ingrediente</b>: soluție hydrogeni peroxydiconcentrată 10g, apă distilată;'
        ]
      },
      {
        _id: 201,
        name: 'Rivanol',
        headerImageURL: 'assets/img/products/rivanol.jpg',
        code: '1002',
        images: [
          {
            description : 'Rivanol - model produs 1',
            alt : 'Rivanol',
            img :   'assets/img/products/rivanolUnu.jpg',
            thumb :  'assets/img/products/rivanolUnu.jpg',
            bubbleUrl : 'assets/img/products/rivanolUnu.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Rivanol',
        characteristics: [
          'Dezinfectant, antiseptic local. Reduce flora tranzitorie de pe piele;',
          'Se aplică extern;'
        ]
      },
      {
        _id: 202,
        name: 'Alcool sanitar',
        headerImageURL: 'assets/img/products/alcool.jpg',
        code: '1003',
        images: [
          {
            description : 'Alcool sanitar - model produs 1',
            alt : 'Alcool sanitar',
            img :   'assets/img/products/alcoolUnu.jpg',
            thumb :  'assets/img/products/alcoolUnu.jpg',
            bubbleUrl : 'assets/img/products/alcoolUnu.jpg'
          },
          {
            description : 'Alcool sanitar - model produs 2',
            alt : 'Alcool sanitar',
            img :   'assets/img/products/alcoolDoi.jpg',
            thumb :  'assets/img/products/alcoolDoi.jpg',
            bubbleUrl : 'assets/img/products/alcoolDoi.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Alcool sanitar cu o concentrație de 70% alcool etilic',
        characteristics: [
          'Alcoolul sanitar cu o concentrație de 70% alcool etilic produs din cereale este folosit pentru dezinfectarea tegumentelor;',
          '<b>Conținut</b>: alcool etilic rafinat <br/>salicilat de etil<br/>albastru de metilen<br/>apă dedurizată',
          'Pentru uz extern;'
        ]
      },
      {
        _id: 203,
        name: 'Alcool iodat',
        headerImageURL: 'assets/img/products/alcooliod.jpg',
        code: '1004',
        images: [
          {
            description : 'Alcool iodat - model produs 1',
            alt : 'Alcool iodat',
            img :   'assets/img/products/alcooliodUnu.jpg',
            thumb :  'assets/img/products/alcooliodUnu.jpg',
            bubbleUrl : 'assets/img/products/alcooliodUnu.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Alcool iodat',
        characteristics: [
          'Bactericid și fungicid, recomandat pentru dezinfecția igienică a mâinilor, dezinfecția locală a tegumentelor, pentru a reduce riscul de infecție;',
          '<b>Administrare</b>: Se aplică prin tamponări, badijonări, pensulaţii sau pulverizări ale câmpului operator. Se preferă tincturi de iod în pregătirea câmpului operator, deoarece are un efect congestiv mai redus;'
        ]
      },
      {
        _id: 204,
        name: 'Dezinfectant instrumentar',
        headerImageURL: 'assets/img/products/dezinfect.jpg',
        code: '1005',
        images: [
          {
            description : 'Dezinfectant instrumentar - model produs 1',
            alt : 'Dezinfectant instrumentar',
            img :   'assets/img/products/dezinfectUnu.jpg',
            thumb :  'assets/img/products/dezinfectUnu.jpg',
            bubbleUrl : 'assets/img/products/dezinfectUnu.jpg'
          },
          {
            description : 'Dezinfectant instrumentar - model produs 2',
            alt : 'Dezinfectant instrumentar',
            img :   'assets/img/products/dezinfectDoi.jpg',
            thumb :  'assets/img/products/dezinfectDoi.jpg',
            bubbleUrl : 'assets/img/products/dezinfectDoi.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Soluție concentrată pentru dezinfectarea și curățarea instrumentelor',
        characteristics: [
          'Soluție concentrată pentru dezinfectarea și curățarea instrumentelor;',
          'Se indică pentru dezinfectarea și curățarea instrumentelor din cabinetul medical și dentar (ex. instrumente de canal, freze, instrumentar chirurgical, mânere, oglinzi, etc);',
          'Curăță complet sângele și rezidurile persistente de pe instrumentar;',
          'Se poate utiliza atât pentru dezinfectarea manuală, cât și în băile cu ultrasunete;',
          'Conține inhibitori de coroziune, care asigură o mare compatibilitate a produsului cu materialul instrumentelor, prelungindu-le viața;',
          'Este foarte economic, se folosește în concentrație de numai 2%;',
          'Spectru larg de eficacitate;'
        ]
      },
      {
        _id: 205,
        name: 'Dezinfectant suprafețe',
        headerImageURL: 'assets/img/products/dezinfectSup.png',
        code: '1006',
        images: [
          {
            description : 'Dezinfectant suprafețe - model produs 1',
            alt : 'Dezinfectant suprafete',
            img :   'assets/img/products/dezinfectSupUnu.jpg',
            thumb :  'assets/img/products/dezinfectSupUnu.jpg',
            bubbleUrl : 'assets/img/products/dezinfectSupUnu.jpg'
          },
          {
            description : 'Dezinfectant suprafețe - model produs 2',
            alt : 'Dezinfectant suprafete',
            img :   'assets/img/products/dezinfectSupDoi.jpg',
            thumb :  'assets/img/products/dezinfectSupDoi.jpg',
            bubbleUrl : 'assets/img/products/dezinfectSupDoi.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Soluție profesională pentru dezinfecția rapidă a suprafețelor și obiectelor',
        characteristics: [
          'Soluție profesională pentru dezinfecția rapidă a suprafețelor și obiectelor;',
          'Eficace împotriva bacteriilor (inclusiv TBC), fungilor, virusuri (HBV, HIV), adenovirus, poliovirus, Papova SV 40;',
          'Se aplică nediluat prin dispersie/pulverizare. Timp de actiune: între 1 - 30 de minute, în funcție de acțiunea microbiologică dorită. Nu se folosește pe sticlă acrilică sau lacuri sensibile la alcooli;'
        ]
      },
      {
        _id: 206,
        name: 'Dezinfectant mâini',
        headerImageURL: 'assets/img/products/dezinfectMan.jpg',
        code: '1007',
        images: [
          {
            description : 'Dezinfectant mâini - model produs 1',
            alt : 'Dezinfectant maini',
            img :   'assets/img/products/dezinfectManUnu.jpg',
            thumb :  'assets/img/products/dezinfectManUnu.jpg',
            bubbleUrl : 'assets/img/products/dezinfectManUnu.jpg'
          },
          {
            description : 'Dezinfectant mâini - model produs 2',
            alt : 'Dezinfectant maini',
            img :   'assets/img/products/dezinfectManDoi.jpg',
            thumb :  'assets/img/products/dezinfectManDoi.jpg',
            bubbleUrl : 'assets/img/products/dezinfectManDoi.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Soluție pe bază de alcool pentru dezinfecția igienică și chirurgicală a mâinilor',
        characteristics: [
          'Soluție pe bază de alcool pentru dezinfecția igienică și chirurgicală a mâinilor;',
          'Produs gata de utilizare, eficacitate foarte bună, compatibilitate ridicată cu pielea;',
          'Ucide 99,99% din viruși și bacterii, în timp ce lasă pielea moale și netedă;',
          'Este bactericid (incl. Tb), fungicid, virucid pentru virusurile lipofile și hidrofile: polio-, rota-, adeno-, vaccinia-, virus herpex simplex, HAV, HBV, HCV, HIV, noro virus;',
          'Uscarea obișnuită a pielii indusă de alcool este evitată datorită aditivilor de protecție a pielii;'
        ]
      },
      {
        _id: 207,
        name: 'Dezinfectanți nivel înalt',
        headerImageURL: 'assets/img/products/dezinfectNiv.jpg',
        code: '1008',
        images: [
          {
            description : 'Dezinfectanți nivel înalt - model produs 1',
            alt : 'Dezinfectant nivel inalt',
            img :   'assets/img/products/dezinfectNivUnu.jpg',
            thumb :  'assets/img/products/dezinfectNivUnu.jpg',
            bubbleUrl : 'assets/img/products/dezinfectNivUnu.jpg'
          },
          {
            description : 'Dezinfectanți nivel înalt - model produs 2',
            alt : 'Dezinfectant nivel inalt',
            img :   'assets/img/products/dezinfectNivDoi.jpg',
            thumb :  'assets/img/products/dezinfectNivDoi.jpg',
            bubbleUrl : 'assets/img/products/dezinfectNivDoi.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Dezinfectanți nivel înalt',
        characteristics: [
          'Se folosește la dezinfecția și spălarea suprafețelor (pardoseli, mese, pereți), blocuri operatorii, instrumentarul medical, săli de sport, vestiare, spații pentru producția și desfacerea produselor alimentare, a instalațiilor care necesită dezinfecția lor prin ștergere sau pulverizare;',
          'Norma de aplicare pe m<sup>2</sup> este de 40 ml soluție de lucru;'
        ]
      },
      {
        _id: 208,
        name: 'Șervețele dezinfectante',
        headerImageURL: 'assets/img/products/servetele.jpg',
        code: '1009',
        images: [
          {
            description : 'Șervețele dezinfectante - model produs 1',
            alt : 'servetele dezinfectante',
            img :   'assets/img/products/serveteleUnu.jpg',
            thumb :  'assets/img/products/serveteleUnu.jpg',
            bubbleUrl : 'assets/img/products/serveteleUnu.jpg'
          },
          {
            description : 'Șervețele dezinfectante - model produs 2',
            alt : 'servetele dezinfectante',
            img :   'assets/img/products/serveteleDoi.jpg',
            thumb :  'assets/img/products/serveteleDoi.jpg',
            bubbleUrl : 'assets/img/products/serveteleDoi.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Soluție ideală pentru dezinfectarea rapidă, cu efect maxim asupra suprafețelor de lucru',
        characteristics: [
          'Impregnate cu soluție dezinfectantă, fără alcool, gata de folosire, recomandate pentru suprafețe delicate și opacizante, sensibile la atacul chimic al soluțiilor cu bază alcoolică;',
          'Soluție ideală pentru dezinfectarea rapidă, cu efect maxim asupra suprafețelor de lucru;',
          'Soluția are proprietăți detergente și dezinfectante, fără aldehide, cu un spectru larg și acțiune biocidă;',
          'Testate în conformitate cu normele europene, inclusiv pe HBV, HCV, HIV;'
        ]
      },
      {
        _id: 209,
        name: 'Tablete clorigene',
        headerImageURL: 'assets/img/products/tableteClor.jpg',
        code: '1010',
        images: [
          {
            description : 'Tablete clorigene - model produs 1',
            alt : 'tablete clorigene',
            img :   'assets/img/products/tableteClorUnu.jpg',
            thumb :  'assets/img/products/tableteClorUnu.jpg',
            bubbleUrl : 'assets/img/products/tableteClorUnu.jpg'
          },
          {
            description : 'Tablete clorigene - model produs 2',
            alt : 'tablete clorigene',
            img :   'assets/img/products/tableteClorDoi.jpg',
            thumb :  'assets/img/products/tableteClorDoi.jpg',
            bubbleUrl : 'assets/img/products/tableteClorDoi.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Tablete clorigene pentru dezinfecția tuturor suprafețelor din instituții sanitare și colectivități',
        characteristics: [
          'Folosite pentru dezinfecția tuturor suprafețelor din instituții sanitare și colectivități, a instrumentarului și ustensilelor din inox, a suprafețelor stropite cu sânge provenit de la persoane infectate HIV și/sau HVB, special conceput pentru curățarea și dezinfectarea suprafetelor de lucru din industria alimentară, precum și a veselei, tacâmurilor, tetinelor și biberoanelor, pipetelor, ustensilelor și recipientelor de laborator;',
          'Produsul prezintă activitate bactericidă, fungicidă, virucidă, inactivează Enterovirus polio 1 și Adenovirus tip 5;',
          'Se folosește numai dizolvat în apă (apa călduță grăbește dizolvarea). Soluția preparată cu tabletele efervescente pe bază de clor trebuie să fie proaspătă;',
          'Se recomandă folosirea mânușilor de cauciuc pentru protecție sau spălarea foarte riguroasă a mâinilor, după venirea în contact cu produsul, fie preparat, fie ca atare;',
          'A nu se aplica pe suprafețe din materiale corozive;',
          'Compatibile cu : plastic, sticlă, oțel inoxidabil, cauciuc;'
        ]
      },
      {
        _id: 210,
        name: 'Betadină',
        headerImageURL: 'assets/img/products/betadina.jpg',
        code: '1011',
        images: [
          {
            description : 'Betadină - model produs 1',
            alt : 'betadina',
            img :   'assets/img/products/betadinaUnu.jpg',
            thumb :  'assets/img/products/betadinaUnu.jpg',
            bubbleUrl : 'assets/img/products/betadinaUnu.jpg'
          },
          {
            description : 'Betadină - model produs 2',
            alt : 'betadina',
            img :   'assets/img/products/betadinaDoi.jpg',
            thumb :  'assets/img/products/betadinaDoi.jpg',
            bubbleUrl : 'assets/img/products/betadinaDoi.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Betadină - Agent antiseptic cu spectru larg',
        characteristics: [
          'Agent antiseptic cu spectru larg, acționând împotriva bacteriilor, virusurilor, fungilor și protozoarelor;',
          'Se folosește pentru dezinfecția tegumentelor înaintea injecțiilor, transfuziilor, perfuziilor, recoltării probelor de sânge, biopsiilor; pentru asepsia rănilor, arsurilor tegumentare, dezinfecția preoperatorie a pielii și mucoaselor;',
          'Se aplică fie ca atare, fie sub formă de diluție 10% sau 1%, în funcție de indicație și zona pe care se aplică;'
        ]
      },
      {
        _id: 211,
        name: 'Iodine',
        headerImageURL: 'assets/img/products/iodine.jpg',
        code: '1012',
        images: [
          {
            description : 'Iodine - model produs 1',
            alt : 'iodine',
            img :   'assets/img/products/iodineUnu.jpg',
            thumb :  'assets/img/products/iodineUnu.jpg',
            bubbleUrl : 'assets/img/products/iodineUnu.jpg'
          },
          {
            description : 'Iodine - model produs 2',
            alt : 'iodine',
            img :   'assets/img/products/iodineDoi.jpg',
            thumb :  'assets/img/products/iodineDoi.jpg',
            bubbleUrl : 'assets/img/products/iodineDoi.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Iodine',
        characteristics: [
          'Aduce un aport important de iod, oligoelement cu importanță majoră în funcționarea optimă a glandei tiroide;',
          'Este un remediu foarte bun pentru obezitate de cauză endocrină, în special secundară hipotiroidismului;',
          'Intensifică metabolismul general și crește rata metabolismului bazal, având ca efect arderea accelerată a caloriilor, ducând la scăderea în greutate;'
        ]
      },
      {
        _id: 212,
        name: 'Gel dezinfectant',
        headerImageURL: 'assets/img/products/gel.png',
        code: '1013',
        images: [
          {
            description : 'Gel dezinfectant - model produs 1',
            alt : 'Gel dezinfectant',
            img :   'assets/img/products/gelUnu.jpg',
            thumb :  'assets/img/products/gelUnu.jpg',
            bubbleUrl : 'assets/img/products/gelUnu.jpg'
          },
          {
            description : 'Gel dezinfectant - model produs 2',
            alt : 'Gel dezinfectant',
            img :   'assets/img/products/gelDoi.jpg',
            thumb :  'assets/img/products/gelDoi.jpg',
            bubbleUrl : 'assets/img/products/gelDoi.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Gel antibacterian dezinfectant cu pompiță',
        characteristics: [
          'Gel antibacterian dezinfectant cu pompiță;',
          '<b>Dimensiune recipient</b>: 300ml sau 1 litru;',
          'Curăță și protejează mâinile, omorând 99.9% din bacterii;',
          'Eficient împotriva EColi;',
          'Nu necesită folosirea apei și a săpunului, ceea ce îl face ideal de utilizat pentru dezinfecția igienică a mâinilor atunci când spălarea acestora nu este posibilă;'
        ]
      },
      {
        _id: 213,
        name: 'Săpun lichid',
        headerImageURL: 'assets/img/products/sapun.jpg',
        code: '1014',
        images: [
          {
            description : 'Săpun lichid - model produs 1',
            alt : 'sapun lichid',
            img :   'assets/img/products/sapunUnu.jpg',
            thumb :  'assets/img/products/sapunUnu.jpg',
            bubbleUrl : 'assets/img/products/sapunUnu.jpg'
          },
          {
            description : 'Săpun lichid - model produs 2',
            alt : 'sapun lichid',
            img :   'assets/img/products/sapunDoi.jpg',
            thumb :  'assets/img/products/sapunDoi.jpg',
            bubbleUrl : 'assets/img/products/sapunDoi.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Săpun lichid',
        characteristics: [
          'Se foloseste la dezinfectarea igienică și chirurgicală a mâinilor prin frecare sau spălare;',
          'Produsul se utilizează cu ajutorul pompiței, dozându-se prin apăsarea ei o dată, 2ml produs nediluat pentru dezinfecția igienică sau 4ml pentru dezinfecția chirurgicală;',
          'Timpul de acțiune este de min. 30 sec. sau 90 sec. pentru dezinfecția chirurgicală;'
        ]
      },
      {
        _id: 214,
        name: 'Șampon antiparazitar',
        headerImageURL: 'assets/img/products/samponParaz.jpg',
        code: '1015',
        images: [
          {
            description : 'Șampon antiparazitar - model produs 1',
            alt : 'sampon antiparazitar',
            img :   'assets/img/products/samponParazUnu.jpg',
            thumb :  'assets/img/products/samponParazUnu.jpg',
            bubbleUrl : 'assets/img/products/samponParazUnu.jpg'
          }
        ],
        categoryID: 2,
        previewData : 'Șampon antiparazitar eficient în combaterea tuturor formelor de pediculoză',
        characteristics: [
          'Este un șampon-cremă, eficient în combaterea tuturor formelor de pediculoză (distruge păduchii și ouăle acestora);',
          'Conține ca substanță activă benzoatul de benzil (a se vedea instrucțiunile de folosire);',
          'Este plăcut parfumat și are suplimentar un efect calmant și cicatrizant;',
          'Este util și în tratamentul scabiei, ca șampon pentru duș;'
        ]
      },
      {
        _id: 215,
        name: 'Bureți chirurgicali',
        headerImageURL: 'assets/img/products/buretiChir.jpg',
        code: '1016',
        categoryID: 2,
        previewData : 'Bureți chirurgicali impregnați cu 20 ml soluție 3% de săpun',
        characteristics: [
          'Burete impregnat cu 20 ml soluție 3% de săpun ce conține para-clor-meta-xilenol (PCMX), substanțe emoliente și aloe vera;',
          'Este ușor de utilizat, confecționat din materiale moi, nu irită pielea și reduce riscul infecțiilor datorită substanțelor active: PCMX și aloe vera;',
          'Utilizat de către personalul medical pentru igenizarea și dezinfectarea tegumentelor, în vederea desfășurării optime a procedurilor medicale;'
        ]
      },
      {
        _id: 216,
        name: 'Preșuri antibacteriene',
        headerImageURL: 'assets/img/products/covor.jpg',
        code: '1017',
        categoryID: 2,
        previewData : 'Preșuri antibacteriene',
        characteristics: [
          '<b>Dimensiuni standard</b>: 45 x 90 cm;',
          '30 straturi adezive cu grosime totală de 2,4 mm;',
          'Conține un amestec antimicrobian și antifungic care distruge agenții patogeni (până la 100 milioane bacterii pe gram);',
          'Covorul nu este doar bacteriostatic (nu impiedică doar dezvoltarea bacteriilor), ci, datorită agentului chimic benzisothiazolin-3 -one, impregnat în covor, distruge microorganismele existente (bacterii Gram pozitive, bacterii Gram negative și fungi patogeni);'
        ]
      }
    ]
  },
  {
    _id: 3,
    name : 'DIAGNOSTICARE',
    headerImageURL : '',
    products : [
      {
        _id: 300,
        name: 'Vacutainere',
        headerImageURL: 'assets/img/products/vacutainer.jpg',
        code: '2001',
        images: [
          {
            description : 'Vacutainere - model produs 1',
            alt : 'vacutainere',
            img :   'assets/img/products/vacutainerUnu.jpg',
            thumb :  'assets/img/products/vacutainerUnu.jpg',
            bubbleUrl : 'assets/img/products/vacutainerUnu.jpg'
          },
          {
            description : 'Vacutainere - model produs 2',
            alt : 'vacutainere',
            img :   'assets/img/products/vacutainerDoi.jpg',
            thumb :  'assets/img/products/vacutainerDoi.jpg',
            bubbleUrl : 'assets/img/products/vacutainerDoi.jpg'
          }
        ],
        categoryID: 3,
        previewData : 'Vacutainere fabricate în concordanță cu normele BS EN ISO 9002',
        characteristics: [
          'Sisteme de recoltare a sângelui, fabricate în concordanță cu normele BS EN ISO 9002 și deținătoare a mărcii CE conform Directivei Europene 93/42/EEC;',
          'Tuburile de recoltare sunt fabricate din sticlă, vidate, ceea ce permite recoltarea cantității exacte de sânge în raport cu aditivul din interiorul tubului. Capacul de protecție este în conformitate cu codul internațional de culoare. Tuburile VSH / ESR sunt utilizate pentru determinarea vitezei de separare a hematiilor (VSH). Analiza se bazează pe metoda Westergren;',
          '<b>Volum</b>: 1,6 ml;',
          '<b>Mod de amestecare</b>: după recoltare, tubul se răstoarnă la 180 grade,de 3-5 ori;'
        ]
      },
      {
        _id: 301,
        name: 'Teste rapide',
        headerImageURL: 'assets/img/products/testRapid.jpg',
        code: '2002',
        images: [
          {
            description : 'Teste rapide - model produs 1',
            alt : 'teste rapide',
            img :   'assets/img/products/testRapidUnu.jpg',
            thumb :  'assets/img/products/testRapidUnu.jpg',
            bubbleUrl : 'assets/img/products/testRapidUnu.jpg'
          },
          {
            description : 'Teste rapide - model produs 2',
            alt : 'teste rapide',
            img :   'assets/img/products/testRapidDoi.jpg',
            thumb :  'assets/img/products/testRapidDoi.jpg',
            bubbleUrl : 'assets/img/products/testRapidDoi.jpg'
          },
          {
            description : 'Teste rapide - model produs 3',
            alt : 'teste rapide',
            img :   'assets/img/products/testRapidTrei.jpg',
            thumb :  'assets/img/products/testRapidTrei.jpg',
            bubbleUrl : 'assets/img/products/testRapidTrei.jpg'
          },
          {
            description : 'Teste rapide - model produs 4',
            alt : 'teste rapide',
            img :   'assets/img/products/testRapidPatru.jpg',
            thumb :  'assets/img/products/testRapidPatru.jpg',
            bubbleUrl : 'assets/img/products/testRapidPatru.jpg'
          }
        ],
        categoryID: 3,
        previewData : 'Teste rapide pentru diverse infecții',
        characteristics: [
          '<b>Test rapid Giardia</b>: produsul este de tip casetă/strip; <b>Produs patologic:</b> Materii fecale',
          '<b>Test rapid Helicobacter</b>: produsul este de tip casetă; <b>Produs patologic:</b> Sânge;',
          '<b>Test rapid HIV</b>: produsul este de tip casetă; <b>Produs patologic:</b> Sânge;',
          '<b>Test rapid HBsAg</b>: produsul este de tip casetă/strip; <b>Produs patologic:</b> Sânge;',
          '<b>Test rapid HCV</b>: produsul este de tip casetă/strip; <b>Produs patologic:</b> Sânge;'
        ]
      },
      {
        _id: 302,
        name: 'Urocultoare',
        headerImageURL: 'assets/img/products/urocultorUnu.jpg',
        code: '2003',
        images: [
          {
            description : 'Urocultoare - model produs 1',
            alt : 'urocultor',
            img :   'assets/img/products/urocultor.jpg',
            thumb :  'assets/img/products/urocultor.jpg',
            bubbleUrl : 'assets/img/products/urocultor.jpg'
          },
          {
            description : 'Urocultoare - model produs 2',
            alt : 'urocultoare',
            img :   'assets/img/products/urocultorDoi.jpg',
            thumb :  'assets/img/products/urocultorDoi.jpg',
            bubbleUrl : 'assets/img/products/urocultorDoi.jpg'
          }
        ],
        categoryID: 3,
        previewData : 'Recoltoare universale pentru: urină, spută, spermă, coprocultură și alte fluide biologice',
        characteristics: [
          'Recoltoare universale pentru: urină, spută, spermă, coprocultură și alte fluide biologice;',
          'Sterile, ambalate individual, gradate;',
          '<b>Capacitate</b>: 100 - 120 ml;'
        ]
      },
      {
        _id: 303,
        name: 'Teste de sarcină',
        headerImageURL: 'assets/img/products/sarcinaUnu.jpg',
        code: '2004',
        images: [
          {
            description : 'Teste de sarcină - model produs 1',
            alt : 'teste de sarcina',
            img :   'assets/img/products/sarcina.jpg',
            thumb :  'assets/img/products/sarcina.jpg',
            bubbleUrl : 'assets/img/products/sarcina.jpg'
          },
          {
            description : 'Teste de sarcină - model produs 2',
            alt : 'teste de sarcina',
            img :   'assets/img/products/sarcinaDoi.jpg',
            thumb :  'assets/img/products/sarcinaDoi.jpg',
            bubbleUrl : 'assets/img/products/sarcinaDoi.jpg'
          }
        ],
        categoryID: 3,
        previewData : 'Teste de sarcină',
        characteristics: [
          'Test rapid care depistează prezența gonadotropinei corionice umane (hCG) în urină, încă din prima zi de întarziere a ciclului menstrual, cu o acuratețe de peste 99%;'
        ]
      },
      {
        _id: 306,
        name: 'Electrozi EKG',
        headerImageURL: 'assets/img/products/electrod.JPG',
        code: '2007',
        images: [
          {
            description : 'Electrozi EKG - model produs 1',
            alt : 'electrozi ekg',
            img :   'assets/img/products/electrodUnu.jpg',
            thumb :  'assets/img/products/electrodUnu.jpg',
            bubbleUrl : 'assets/img/products/electrodUnu.jpg'
          }
        ],
        categoryID: 3,
        previewData : 'Electrozi EKG',
        characteristics: [
          'Bioadezivi, impregnați cu gel decontact pentru EKG; Buni conducători electrici; Neiritanți pentru piele sau utilizatori;',
          'Electrozii au o aplicare ușoară pe diferite zone anatomice. Sunt potriviți atât pentru relaxare, cât și pentru stres sau monitorizarea Holter ECG. Sunt potriviți pentru toate tipurile de piele. Adezivi, neiritanți pentru piele sau utilizatori, imperceptibili proiectați să diminueze reacțiile alergice. Buni conducători electrici. Nesterili. Fără latex;',
          'Ușor de aplicat, cu margine fără adeziv;',
          '<b>Pentru adulți</b>: 36x45mm;'
        ]
      }
    ]
  },
  {
    _id: 4,
    name : 'APARATURĂ MEDICALĂ',
    headerImageURL : '',
    products : [
      {
        _id: 400,
        name: 'Tensiometre',
        headerImageURL: 'assets/img/products/tensio.jpg',
        code: '3001',
        images: [
          {
            description : 'Tensiometre - model produs 1',
            alt : 'tensiometre',
            img :   'assets/img/products/tensioUnu.gif',
            thumb :  'assets/img/products/tensioUnu.gif',
            bubbleUrl : 'assets/img/products/tensioUnu.gif'
          },
          {
            description : 'Tensiometre - model produs 2',
            alt : 'tensiometre',
            img :   'assets/img/products/tensioDoi.jpg',
            thumb :  'assets/img/products/tensioDoi.jpg',
            bubbleUrl : 'assets/img/products/tensioDoi.jpg'
          }
        ],
        categoryID: 4,
        previewData : 'Tensiometre',
        characteristics: [
          '<b>Greutate</b>: 124 g (inclusiv bateriile);',
          '<b>Dimensiuni</b>: 73 x 66 x 38 mm;',
          '<b>Metoda de măsurare</b>: oscilometrică, corespunzător metodei Korotkoff: Faza I sistolic, Faza V diastolic;',
          '<b>Domeniul de măsurare</b>: 20 - 280 mmHg – tensiune arterială;',
          '40 - 200 bătăi pe minut – puls;',
          '<b>Domeniu de afişare a presiunii manşetei</b>: 0 - 299 mmHg;',
          '<b>Rezoluţie</b>: 1 mmHg;',
          '<b>Precizie statică</b>: presiune în intervalul ± 3 mmHg;',
          '<b>Precizia pulsului</b>: ±5 % din valoarea măsurată;',
          '<b>Sursa de tensiune</b>: 2 baterii alcaline de 1,5V - format AAA;',
          '<b>Durata de viaţă baterie</b>: aprox. 320 măsurări (utilizare de baterii noi).',
          '<span class="orange">Avem, de asemenea, și tensiometre clasice cu manometru, ușor de folosit. Limitele sunt între 0 și 300 mmHg. Se livrează în gentuță protectoare</span>'
        ]
      },
      {
        _id: 401,
        name: 'Glucometre',
        headerImageURL: 'assets/img/products/gluco.jpg',
        code: '3002',
        images: [
          {
            description : 'Glucometre - model produs 1',
            alt : 'glucometre',
            img :   'assets/img/products/glucoUnu.jpg',
            thumb :  'assets/img/products/glucoUnu.jpg',
            bubbleUrl : 'assets/img/products/glucoUnu.jpg'
          },
          {
            description : 'Glucometre - model produs 2',
            alt : 'glucometre',
            img :   'assets/img/products/glucoDoi.jpg',
            thumb :  'assets/img/products/glucoDoi.jpg',
            bubbleUrl : 'assets/img/products/glucoDoi.jpg'
          }
        ],
        categoryID: 4,
        previewData : 'Glucometre',
        characteristics: [
          'Timp de măsurare 5 secunde cu o cantitate foarte mică de sânge (1 microlitru);',
          'Rezultate precise afișate pe ecran mare LCD;',
          'Memorează ultima măsuratoare;',
          'Testele nu necesită coduri;',
          'Atenționare baterie descărcată;',
          'Fără interferențe cu maltoza, lactoza, galactoza sau xiloza;'
        ]
      },
      {
        _id: 402,
        name: 'Stetoscoape',
        headerImageURL: 'assets/img/products/steto.jpg',
        code: '3003',
        images: [
          {
            description : 'Stetoscoape - model produs 1',
            alt : 'stetoscop',
            img :   'assets/img/products/stetoUnu.jpg',
            thumb :  'assets/img/products/stetoUnu.jpg',
            bubbleUrl : 'assets/img/products/stetoUnu.jpg'
          },
          {
            description : 'Stetoscoape - model produs 2',
            alt : 'Stetoscoape',
            img :   'assets/img/products/stetoDoi.jpg',
            thumb :  'assets/img/products/stetoDoi.jpg',
            bubbleUrl : 'assets/img/products/stetoDoi.jpg'
          }
        ],
        categoryID: 4,
        previewData : 'Stetoscoape',
        characteristics: [
          'Membrană acordabilă patentată și design-ul unic tip Master;',
          'Asigură performanță de ultimă oră într-un stetoscop superior cu o singură față;',
          'Răspunde standardelor exacte ale profesioniștilor din medicină, care au nevoie de o capacitate acustică foarte mare;',
          'Capul este din oțel inoxidabil lucrat de mână, cu margini termoizolante;',
          'Tubulatură dublă;',
          'Diafragma acordabilă alternează convenabil între sunete de frecvență joasă și înaltă printr-o simplă schimbare de presiune exercitată pe instrument;',
          'Este livrat împreună cu un adaptor pentru proceduri speciale, inel pentru ascultare pediatrică sau în zone corporale dificile, olive de rezerva;'
        ]
      },
      {
        _id: 403,
        name: 'Termometre digitale',
        headerImageURL: 'assets/img/products/termoDig.jpg',
        code: '3004',
        images: [
          {
            description : 'Termometre digitale - model produs 1',
            alt : 'termometre digitale',
            img :   'assets/img/products/termoDigUnu.jpg',
            thumb :  'assets/img/products/termoDigUnu.jpg',
            bubbleUrl : 'assets/img/products/termoDigUnu.jpg'
          },
          {
            description : 'Termometre digitale - model produs 2',
            alt : 'termometre digitale',
            img :   'assets/img/products/termoDigDoi.jpg',
            thumb :  'assets/img/products/termoDigDoi.jpg',
            bubbleUrl : 'assets/img/products/termoDigDoi.jpg'
          }
        ],
        categoryID: 4,
        previewData : 'Termometre digitale cu vârf flexibil, pentru un plus de siguranță',
        characteristics: [
          'Termometru medical digital cu vârf flexibil, pentru un plus de siguranță;',
          'Măsoară rapid, în doar 30 de secunde, este ușor de folosit și complet etanșeizat;',
          'Vârful de măsurare este aurit pentru a proteja persoanele alergice;',
          'Emite semnal sonor la sfârșitul măsuratorii și memorează ultima valoare masurată;',
          'Se livrează împreună cu baterii, cutie din acril pentru depozitare și manual de utilizare în limba română;'
        ]
      },
      {
        _id: 404,
        name: 'Aparate aerosoli',
        headerImageURL: 'assets/img/products/aerosol.jpg',
        code: '3005',
        images: [
          {
            description : 'Aparate aerosoli - model produs 1',
            alt : 'aparate aerosoli',
            img :   'assets/img/products/aerosolUnu.jpg',
            thumb :  'assets/img/products/aerosolUnu.jpg',
            bubbleUrl : 'assets/img/products/aerosolUnu.jpg'
          },
          {
            description : 'Aparate aerosoli - model produs 2',
            alt : 'aparat aerosoli',
            img :   'assets/img/products/aerosolDoi.jpg',
            thumb :  'assets/img/products/aerosolDoi.jpg',
            bubbleUrl : 'assets/img/products/aerosolDoi.jpg'
          }
        ],
        categoryID: 4,
        previewData : 'Aparate aerosoli pentru tratarea afecțiunilor respiratorii',
        characteristics: [
          'Aparatul de aerosoli este ideal pentru tratarea afecțiunilor respiratorii: tulburări pulmonare, traheită, bronșită, sinuzită, alergii și răceli;',
          'Foarte rapid și silențios;',
          'Aerosolii sunt suflați direct în gât / nas de un ventilator electric;',
          'Micro-picături ajung direct în tractul respirator;',
          'Produsul conține: mască adult, mască pediatrie, piesă bucală, tub, flacon;',
          'Indicator luminos pentru butonul on/off;',
          'Produs certificat în conformitate cu Directiva 93/42/CEE pentru "dispozitiv medical";'
        ]
      },
      {
        _id: 405,
        name: 'Cântare',
        headerImageURL: 'assets/img/products/cantarElec.jpg',
        code: '3006',
        images: [
          {
            description : 'Cântare - model produs 1',
            alt : 'cantare',
            img :   'assets/img/products/cantarElecUnu.jpg',
            thumb :  'assets/img/products/cantarElecUnu.jpg',
            bubbleUrl : 'assets/img/products/cantarElecUnu.jpg'
          },
          {
            description : 'Cântare - model produs 2',
            alt : 'cantare',
            img :   'assets/img/products/cantarElecDoi.jpg',
            thumb :  'assets/img/products/cantarElecDoi.jpg',
            bubbleUrl : 'assets/img/products/cantarElecDoi.jpg'
          }
        ],
        categoryID: 4,
        previewData : 'Cântar electronic cu platformă de plastic/sticlă',
        characteristics: [
          'Cântar electronic cu platformă de plastic/sticlă;',
          'Prezintă 4 senzori de înaltă precizie;',
          'Sistem de oprire automată;',
          'Afişaj LCD 76 x 36 mm;',
          '<b>Capacitate</b>: până la 150 kg (330 lbs) - min. 3 kg (6,6 lb);',
          '<b>Dimensiuni</b>: 302 x 315 x 40 mm ;',
          '<b>Baterie</b>: 2 x AA - nu sunt incluse;'
        ]
      },
      {
        _id: 406,
        name: 'Umidificatoare',
        headerImageURL: 'assets/img/products/umid.jpg',
        code: '3007',
        images: [
          {
            description : 'Umidificatoare - model produs 1',
            alt : 'umidificatoare',
            img :   'assets/img/products/umidUnu.jpg',
            thumb :  'assets/img/products/umidUnu.jpg',
            bubbleUrl : 'assets/img/products/umidUnu.jpg'
          },
          {
            description : 'Umidificatoare - model produs 2',
            alt : 'umidificatoare',
            img :   'assets/img/products/umidDoi.jpg',
            thumb :  'assets/img/products/umidDoi.jpg',
            bubbleUrl : 'assets/img/products/umidDoi.jpg'
          }
        ],
        categoryID: 4,
        previewData : 'Umidificator cu aer rece',
        characteristics: [
          'Umidificator cu aer rece;',
          'Buton pentru selectarea intensității de pulverizare;',
          'Buton pentru selectarea intensității de umiditate;',
          'Timer - 10 ore;',
          'Display LCD;',
          'Buton On / Off;',
          'Buton ionizare;',
          'Filtru ceramic pentru purificarea apei;',
          'Intensitate pulverizare - puternic, mediu, scăzut;',
          'Detectarea nivelului de apă - pulverizarea este oprită automat dacă nu există apă;'
        ]
      }
    ]
  },
  {
    _id: 5,
    name : 'PROTECȚIE U.F',
    headerImageURL : '',
    products : [
      {
        _id: 500,
        name: 'Acoperitori pantofi/botoși',
        headerImageURL: 'assets/img/products/acoperitori.jpg',
        code: '4001',
        images: [
          {
            description : 'Acoperitori pantofi/botoși - model produs 1',
            alt : 'Acoperitori pantofi/botosi',
            img :   'assets/img/products/acoperitoriUnu.jpg',
            thumb :  'assets/img/products/acoperitoriUnu.jpg',
            bubbleUrl : 'assets/img/products/acoperitoriUnu.jpg'
          },
          {
            description : 'Acoperitori pantofi/botoși - model produs 2',
            alt : 'Acoperitori pantofi/botosi',
            img :   'assets/img/products/acoperitoriDoi.jpg',
            thumb :  'assets/img/products/acoperitoriDoi.jpg',
            bubbleUrl : 'assets/img/products/acoperitoriDoi.jpg'
          }
        ],
        categoryID: 5,
        previewData : 'Acoperitori pantofi / botoși de unică folosință',
        characteristics: [
          'Botoșii sunt fabricați din polipropilenă (material nețesut);',
          'Elastic în perimetru;',
          'Protejează împotriva contaminării și mențin un înalt nivel de curățenie;',
          '<b>Culoare</b>: albastru / alb;'
        ]
      },
      {
        _id: 501,
        name: 'Halate vizitatori',
        headerImageURL: 'assets/img/products/halate.jpg',
        code: '4002',
        images: [
          {
            description : 'Halate vizitatori - model produs 1',
            alt : 'Halate vizitatori',
            img :   'assets/img/products/halateUnu.jpg',
            thumb :  'assets/img/products/halateUnu.jpg',
            bubbleUrl : 'assets/img/products/halateUnu.jpg'
          },
          {
            description : 'Halate vizitatori - model produs 2',
            alt : 'halate vizitatori',
            img :   'assets/img/products/halateDoi.jpg',
            thumb :  'assets/img/products/halateDoi.jpg',
            bubbleUrl : 'assets/img/products/halateDoi.jpg'
          }
        ],
        categoryID: 5,
        previewData : 'Halat de unică folosință, fabricat din polipropilenă (tip laborator)',
        price: '1.4 lei (fără TVA)',
        characteristics: [
          'Halat de unică folosință, fabricat din polipropilenă (tip laborator);',
          'Închidere cu capse;',
          'Protecție împotriva mizeriei și a prafului;'
        ]
      },
      {
        _id: 502,
        name: 'Bonete',
        headerImageURL: 'assets/img/products/bonete.jpg',
        code: '4003',
        images: [
          {
            description : 'Bonete - model produs 1',
            alt : 'bonete',
            img :   'assets/img/products/boneteUnu.jpg',
            thumb :  'assets/img/products/boneteUnu.jpg',
            bubbleUrl : 'assets/img/products/boneteUnu.jpg'
          },
          {
            description : 'Bonete - model produs 2',
            alt : 'bonete',
            img :   'assets/img/products/boneteDoi.jpg',
            thumb :  'assets/img/products/boneteDoi.jpg',
            bubbleUrl : 'assets/img/products/boneteDoi.jpg'
          }
        ],
        categoryID: 5,
        previewData : 'Bonete medic din tercot',
        characteristics: [
          'Bonete medic din tercot;',
          'Au un elastic la spate pentru reglarea circumferinței / șnururi pentru legare;',
          '<b>Culoare</b>: alb / albastru / verde;'
        ]
      },
      {
        _id: 503,
        name: 'Mănuși examinare latex',
        headerImageURL: 'assets/img/products/manusi.jpg',
        code: '4004',
        images: [
          {
            description : 'Mănuși examinare latex - model produs 1',
            alt : 'manusi examinare latex',
            img :   'assets/img/products/manusiUnu.jpg',
            thumb :  'assets/img/products/manusiUnu.jpg',
            bubbleUrl : 'assets/img/products/manusiUnu.jpg'
          },
          {
            description : 'Mănuși examinare latex - model produs 2',
            alt : 'manusi examinare latex',
            img :   'assets/img/products/manusiDoi.jpg',
            thumb :  'assets/img/products/manusiDoi.jpg',
            bubbleUrl : 'assets/img/products/manusiDoi.jpg'
          }
        ],
        categoryID: 5,
        previewData : 'Mănuși examinare latex nesterile, nepudrate',
        characteristics: [
          'Mănuși examinare latex nesterile, nepudrate;',
          'Confecționate din latex, de foarte bună calitate, mănușile de examinare Peha-Soft sunt destinate pentru consultațiile medicale, pentru examinare, în clinici și cabinete medicale, laboratoare;',
          '<b>Mărimi</b>: XS, S, M, L, XL;'
        ]
      },
      {
        _id: 504,
        name: 'Mănuși examinare nitril',
        headerImageURL: 'assets/img/products/nitril.jpg',
        code: '4005',
        images: [
          {
            description : 'Mănuși examinare nitril - model produs 1',
            alt : 'manusi examinare nitril',
            img :   'assets/img/products/nitrilUnu.jpg',
            thumb :  'assets/img/products/nitrilUnu.jpg',
            bubbleUrl : 'assets/img/products/nitrilUnu.jpg'
          },
          {
            description : 'Mănuși examinare nitril - model produs 2',
            alt : 'manusi examinare nitril',
            img :   'assets/img/products/nitrilDoi.jpg',
            thumb :  'assets/img/products/nitrilDoi.jpg',
            bubbleUrl : 'assets/img/products/nitrilDoi.jpg'
          }
        ],
        categoryID: 5,
        price: '16 lei (fără TVA)',
        previewData : 'Mănuși examinare nitril de unică folosință, nepudrate',
        characteristics: [
          'Mănuși nitril soft strech de unică folosință, nepudrate;',
          'Asigură protecție antichimică;',
          'Previn iritațiile și dermatita;',
          'Protejează de substanțe nedorite sau periculoase;',
          'Asigură protecția mâinilor de substanțe chimice, grăsimi și solvenți;',
          'Nu contin latex, sunt catifelate și ușor elastice;',
          'Reduc riscul de hipersensibilitate și reacții alergice;'
        ]
      },
      {
        _id: 505,
        name: 'Mănuși chirurgicale',
        headerImageURL: 'assets/img/products/chirurg.jpg',
        code: '4006',
        images: [
          {
            description : 'Mănuși chirurgicale - model produs 1',
            alt : 'manusi chirurgicale',
            img :   'assets/img/products/chirurgUnu.jpg',
            thumb :  'assets/img/products/chirurgUnu.jpg',
            bubbleUrl : 'assets/img/products/chirurgUnu.jpg'
          },
          {
            description : 'Mănuși chirurgicale - model produs 2',
            alt : 'manusi chirurgicale',
            img :   'assets/img/products/chirurgDoi.jpg',
            thumb :  'assets/img/products/chirurgDoi.jpg',
            bubbleUrl : 'assets/img/products/chirurgDoi.jpg'
          }
        ],
        categoryID: 5,
        previewData : 'Mănuși chirurgicale sterile nepudrate',
        characteristics: [
          'Mănuși chirurgicale sterile nepudrate;',
          'Destinate pentru intervențiile chirurgicale invazive în condiții sterile;',
          'Garantează comfortul și siguranța dumneavoastră;',
          'Sunt confecționate din latex, nepudrate, suprafața ușor texturată, manșetă rulată, AQL: 1,5;',
          'Sunt în conformitate cu normele: EN 455-1-2-3, ISO 9001, EN 556;'
        ]
      },
      {
        _id: 506,
        name: 'Cearceaf pentru pat',
        headerImageURL: 'assets/img/products/cearceaf.jpg',
        code: '4007',
        images: [
          {
            description : 'Cearceaf pentru pat - model produs 1',
            alt : 'cearceaf pat',
            img :   'assets/img/products/cearceafUnu.jpg',
            thumb :  'assets/img/products/cearceafUnu.jpg',
            bubbleUrl : 'assets/img/products/cearceafUnu.jpg'
          },
          {
            description : 'Cearceaf pentru pat - model produs 2',
            alt : 'cearceaf pat',
            img :   'assets/img/products/cearceafDoi.jpg',
            thumb :  'assets/img/products/cearceafDoi.jpg',
            bubbleUrl : 'assets/img/products/cearceafDoi.jpg'
          }
        ],
        categoryID: 5,
        previewData : 'Role cearceaf hârtie 60cm X 100m',
        characteristics: [
          'Sunt confecționate din celuloză pură, gofrată;',
          '2 straturi de hârtie foarte bine prinse între ele prin sistemul point-to-point;',
          'Au perfor pentru a facilita ruperea lor;',
          '<b>Culoare</b>: albă;',
          '<b>Dimensiuni</b>: lățime 60 cm, lungime 100 m;'
        ]
      },
      {
        _id: 507,
        name: 'Măști chirurgicale',
        headerImageURL: 'assets/img/products/masti.jpg',
        code: '4008',
        images: [
          {
            description : 'Măști chirurgicale - model produs 1',
            alt : 'masti chirurgicale',
            img :   'assets/img/products/mastiUnu.jpg',
            thumb :  'assets/img/products/mastiUnu.jpg',
            bubbleUrl : 'assets/img/products/mastiUnu.jpg'
          },
          {
            description : 'Măști chirurgicale - model produs 2',
            alt : 'masti chirurgicale',
            img :   'assets/img/products/mastiDoi.jpg',
            thumb :  'assets/img/products/mastiDoi.jpg',
            bubbleUrl : 'assets/img/products/mastiDoi.jpg'
          }
        ],
        categoryID: 5,
        previewData : 'Măști chirurgicale cu elastic',
        characteristics: [
          'Măști chirurgicale cu elastic, permit o respirație fără efort și constituie o barieră eficace de filtrare;',
          'Se adaptează perfect la forma feței și garantează o protecție maximă;',
          'Măștile medicale sunt folosite pentru protecția căilor respiratorii;',
          'Este un bun mediu de prevenție în împrăștierea de viruși care se transmit pe calea aerului;',
          'Masca chirurgicală permite o respirație fără efort și constituie o barieră eficace de filtrare;',
          'Prindere cu elastic;',
          '<b>Culori</b>: alb/albastru/verde;'
        ]
      },
      {
        _id: 508,
        name: 'Dispenser botoși',
        headerImageURL: 'assets/img/products/dispenser.jpg',
        code: '4009',
        images: [
          {
            description : 'Dispenser botoși - model produs 1',
            alt : 'dispenser botosi',
            img :   'assets/img/products/dispenserUnu.jpg',
            thumb :  'assets/img/products/dispenserUnu.jpg',
            bubbleUrl : 'assets/img/products/dispenserUnu.jpg'
          },
          {
            description : 'Dispenser botoși - model produs 2',
            alt : 'dispenser botosi',
            img :   'assets/img/products/dispenserDoi.jpg',
            thumb :  'assets/img/products/dispenserDoi.jpg',
            bubbleUrl : 'assets/img/products/dispenserDoi.jpg'
          }
        ],
        categoryID: 5,
        previewData : 'Dispenser botoși din aluminiu',
        characteristics: [
          'Dispenser aluminiu de acoperitori încălțăminte (botoși de unică folosință);',
          '<b>Dimensiuni</b>: 46x25x17.5cm;',
          'Are încorporat un sistem mecanic care nu necesită baterii sau consum electric;'
        ]
      },
      {
        _id: 509,
        name: 'Cutii deșeuri',
        headerImageURL: 'assets/img/products/deseuri.jpg',
        code: '4010',
        images: [
          {
            description : 'Cutii deșeuri - model produs 1',
            alt : 'cutii deseuri',
            img :   'assets/img/products/deseuriUnu.JPG',
            thumb :  'assets/img/products/deseuriUnu.JPG',
            bubbleUrl : 'assets/img/products/deseuriUnu.JPG'
          },
          {
            description : 'Cutii deșeuri - model produs 2',
            alt : 'cutii deseuri',
            img :   'assets/img/products/deseuriDoi.jpg',
            thumb :  'assets/img/products/deseuriDoi.jpg',
            bubbleUrl : 'assets/img/products/deseuriDoi.jpg'
          }
        ],
        categoryID: 5,
        previewData : 'Cutii deșeuri din material plastic rigid (polipropilenă)',
        characteristics: [
          'Recipiente din material plastic rigid (polipropilenă) cu posibilitate de închidere temporară și definitivă;',
          'Formă de trunchi de con, cu o rezistență mecanică ridicată;',
          'Capacul recipientelor prezintă orificii speciale pentru detașarea acelor de seringă, a lamelor de bisturiu, etc., precum și a altor deșeuri înțepătoare-tăietoare de dimensiuni mai mari. Sistemul de închidere definitivă reduce posibilitatea de contaminare a personalului care manipulează deșeurile înțepătoare-tăietoare, cât și refolosirea de către persoane din exteriorul unităților sanitare;',
          'Odată închis definitiv, recipientul este distrus prin incinerare. În urma acestui proces nu rezultă deșeuri toxice;'
        ]
      },
      {
        _id: 510,
        name: 'Scutece pentru adulți',
        headerImageURL: 'assets/img/products/scuteceAd.jpg',
        code: '4011',
        images: [
          {
            description : 'Scutece pentru adulți - model produs 1',
            alt : 'scutece adulti',
            img :   'assets/img/products/scuteceAdUnu.jpg',
            thumb :  'assets/img/products/scuteceAdUnu.jpg',
            bubbleUrl : 'assets/img/products/scuteceAdUnu.jpg'
          },
          {
            description : 'Scutece pentru adulți - model produs 2',
            alt : 'scutece adulti',
            img :   'assets/img/products/scuteceAdDoi.jpeg',
            thumb :  'assets/img/products/scuteceAdDoi.jpeg',
            bubbleUrl : 'assets/img/products/scuteceAdDoi.jpeg'
          }
        ],
        categoryID: 5,
        previewData : 'Scutece pentru adulți',
        characteristics: [
          'Protecție excelentă datorită corpului absorbant tristratificat cu molecule de SAP (polimer superabsorbant), stratului de distribuție a lichidului și benzilor laterale interioare impregnate hidrofob;',
          'Se mulează perfect datorită elasticității ridicate a materialului în talie, împiedicând alunecarea și oferind flexibilitate maximă în mișcare;',
          'Confortabil la purtare datorită suprafeței textile delicate față de piele;',
          'Discret la purtare, slipul nu este voluminos, iar moleculele de Cydex conținute neutralizează mirosurile neplăcute;',
          'Foarte ușor de îmbrăcat și dezbrăcat (prin desfacerea scutecului în partea laterală);'
        ]
      },
      {
        _id: 511,
        name: 'Dischete demachiante',
        headerImageURL: 'assets/img/products/dischete.jpg',
        code: '4012',
        images: [
          {
            description : 'Dischete demachiante - model produs 1',
            alt : 'dischete demachiante',
            img :   'assets/img/products/discheteUnu.jpg',
            thumb :  'assets/img/products/discheteUnu.jpg',
            bubbleUrl : 'assets/img/products/discheteUnu.jpg'
          },
          {
            description : 'Dischete demachiante - model produs 2',
            alt : 'dischete demachiante',
            img :   'assets/img/products/discheteDoi.jpg',
            thumb :  'assets/img/products/discheteDoi.jpg',
            bubbleUrl : 'assets/img/products/discheteDoi.jpg'
          }
        ],
        categoryID: 5,
        previewData : 'Dischete demachiante din bumbac 100%',
        characteristics: [
          'Dischete din bumbac 100%, ideale pentru îndepărtarea machiajului sau pentru curăţarea pielii;',
          'Sunt foarte delicate şi nu lasă fibre pe faţă după folosire, iar marginile moi nu irită pielea;'
        ]
      },
      {
        _id: 512,
        name: 'Bețișoare ORL',
        headerImageURL: 'assets/img/products/betisoare.jpeg',
        code: '4013',
        images: [
          {
            description : 'Bețișoare ORL - model produs 1',
            alt : 'betisoare ORL',
            img :   'assets/img/products/betisoareUnu.jpg',
            thumb :  'assets/img/products/betisoareUnu.jpg',
            bubbleUrl : 'assets/img/products/betisoareUnu.jpg'
          },
          {
            description : 'Bețișoare ORL - model produs 2',
            alt : 'betisoare ORL',
            img :   'assets/img/products/betisoareDoi.jpg',
            thumb :  'assets/img/products/betisoareDoi.jpg',
            bubbleUrl : 'assets/img/products/betisoareDoi.jpg'
          }
        ],
        categoryID: 5,
        previewData : 'Bețișoare ORL din polipropilenă cu capete din bumbac',
        characteristics: [
          'Betișoare din polipropilenă cu capete din bumbac pentru curățarea pielii și a urechilor, aplicarea cremelor sau uleiurilor, machiaj;'
        ]
      },
      {
        _id: 513,
        name: 'Câmpuri sterile',
        headerImageURL: 'assets/img/products/campuri.jpg',
        code: '4014',
        categoryID: 5,
        previewData : 'Câmpuri sterile',
        characteristics: [
          'Câmp chirurgical adeziv steril 2 straturi;',
          'Se poate folosi în blocul operator atât pentru a proteja masa de lucru, cât și pentru ștergerea diferitelor instrumente;',
          '<b>Material bilaminar</b>: PPSB + PE (polietilenă și material nețesut);',
          '<b>Dimensiuni</b>: 75 x 90 cm;'
        ]
      }
    ]
  },
  {
    _id: 6,
    name : 'ORTOPEDICE',
    headerImageURL : '',
    products : [
      {
        _id: 600,
        name: 'Cadru de mers',
        headerImageURL: 'assets/img/products/cadru.jpg',
        code: '5001',
        images: [
          {
            description : 'Cadru de mers - model produs 1',
            alt : 'cadru de mers',
            img :   'assets/img/products/cadruUnu.jpg',
            thumb :  'assets/img/products/cadruUnu.jpg',
            bubbleUrl : 'assets/img/products/cadruUnu.jpg'
          },
          {
            description : 'Cadru de mers - model produs 2',
            alt : 'cadru de mers',
            img :   'assets/img/products/cadruDoi.jpg',
            thumb :  'assets/img/products/cadruDoi.jpg',
            bubbleUrl : 'assets/img/products/cadruDoi.jpg'
          }
        ],
        categoryID: 6,
        previewData : 'Cadru de mers metalic, realizat din aluminiu, finisat argintiu semi-lucios',
        characteristics: [
          'Existența rotilelor față permite ca înaintarea să se facă prin împingere, fără ridicarea cadrului, contactul permanent cu solul mărește siguranța în deplasare a utilizatorului, diminuând riscul de pierdere a echilibrului;',
          'Este pliabil, printr-o simplă apăsare de buton micșorându-se volumul ocupat; se poate depozita sau transporta mai ușor;',
          'Cadrul este metalic, realizat din aluminiu, finisat argintiu semi-lucios, mânerele sunt din PVC dur, suprafața lor permite o prindere bună, puferele de pe fiecare picior sunt din cauciuc sintetic, rotilele față au un diametru de 12 cm, cauciucuri pline, rezistente la uzură;',
          '<b>Înălțime utilizator</b>: 1,5 -1,95 m;',
          '<b>Greutate maximă utilizator</b>: 115 kg;'
        ]
      },
      {
        _id: 601,
        name: 'Fașă gipsată',
        headerImageURL: 'assets/img/products/fesiGips.jpg',
        code: '5002',
        images: [
          {
            description : 'Fașă gipsată - model produs 1',
            alt : 'fasa gipsata',
            img :   'assets/img/products/fesiGipsUnu.jpg',
            thumb :  'assets/img/products/fesiGipsUnu.jpg',
            bubbleUrl : 'assets/img/products/fesiGipsUnu.jpg'
          },
          {
            description : 'Fașă gipsată - model produs 2',
            alt : 'fasa gipsata',
            img :   'assets/img/products/fesiGipsDoi.jpg',
            thumb :  'assets/img/products/fesiGipsDoi.jpg',
            bubbleUrl : 'assets/img/products/fesiGipsDoi.jpg'
          }
        ],
        categoryID: 6,
        previewData : 'Fașă gipsată din bumbac 100%',
        characteristics: [
          'Confecționată din bumbac 100%, de diferite dimensiuni, utilă pentru imobilizarea unei fracturi sau corecția unei deformații;',
          'Este rulată în jurul unui ax de plastic, oferind mobilitate;',
          'Timp de uscare 8 ore și timp de întărire 3 minute;',
          'Este ambalată individual în folie din plastic aluminizată;'
        ]
      },
      {
        _id: 602,
        name: 'Orteze',
        headerImageURL: 'assets/img/products/orteze.jpg',
        code: '5003',
        images: [
          {
            description : 'Orteze - model produs 1',
            alt : 'orteze',
            img :   'assets/img/products/ortezeUnu.jpg',
            thumb :  'assets/img/products/ortezeUnu.jpg',
            bubbleUrl : 'assets/img/products/ortezeUnu.jpg'
          },
          {
            description : 'Orteze - model produs 2',
            alt : 'orteze',
            img :   'assets/img/products/ortezeDoi.jpg',
            thumb :  'assets/img/products/ortezeDoi.jpg',
            bubbleUrl : 'assets/img/products/ortezeDoi.jpg'
          }
        ],
        categoryID: 6,
        previewData : 'Orteze',
        characteristics: [
          'Oferă suport în timpul recuperării de pe urma leziunilor, modificărilor degenerative şi chirurgie, dar furnizează şi noi nivele de mobilitate;',
          'Țesătură elastică specială, permeabilă şi care disipează umezeala;'
        ]
      },
      {
        _id: 603,
        name: 'Vată pentru gips',
        headerImageURL: 'assets/img/products/vataGips.jpg',
        code: '5004',
        images: [
          {
            description : 'Vată pentru gips - model produs 1',
            alt : 'vata pentru gips',
            img :   'assets/img/products/vataGipsUnu.png',
            thumb :  'assets/img/products/vataGipsUnu.png',
            bubbleUrl : 'assets/img/products/vataGipsUnu.png'
          },
          {
            description : 'Vată pentru gips - model produs 2',
            alt : 'vata pentru gips',
            img :   'assets/img/products/vataGipsDoi.png',
            thumb :  'assets/img/products/vataGipsDoi.png',
            bubbleUrl : 'assets/img/products/vataGipsDoi.png'
          }
        ],
        categoryID: 6,
        previewData : 'Vată pentru gips',
        characteristics: [
          'Creează amortizarea perfectă sub gips;',
          '<b>Dimensiuni</b>: 20 cm x 3 metri;',
          'Protejează pielea pacientului împotriva uscării ipsosului și reduce riscul zgârieturilor și iritațiilor de orice fel;',
          'Moale și pufoasă, adaptându-se perfect la pielea pacientului sau la suprafața pansamentului;',
          'Structură fibrilară, pentru o aplicare mai facilă, fiecare tură aderând la următoarea, fără a aluneca;',
          'Este permeabilă pentru aer și secreții;',
          'Biocompatibilitatea este ridicată, aceasta fiind bine suportată de piele;',
          'Se poate steriliza prin orice metodă și poate fi secționată manual prin rupere;'
        ]
      },
      {
        _id: 604,
        name: 'Fotolii rulante',
        headerImageURL: 'assets/img/products/fotolii.jpg',
        code: '5005',
        images: [
          {
            description : 'Fotolii rulante - model produs 1',
            alt : 'fotolii rulante',
            img :   'assets/img/products/fotoliiUnu.jpg',
            thumb :  'assets/img/products/fotoliiUnu.jpg',
            bubbleUrl : 'assets/img/products/fotoliiUnu.jpg'
          },
          {
            description : 'Fotolii rulante - model produs 2',
            alt : 'fotolii rulante',
            img :   'assets/img/products/fotoliiDoi.jpg',
            thumb :  'assets/img/products/fotoliiDoi.jpg',
            bubbleUrl : 'assets/img/products/fotoliiDoi.jpg'
          }
        ],
        categoryID: 6,
        previewData : 'Fotolii rulante din oțel cromat',
        characteristics: [
          'Scaun realizat în întregime din oțel cromat;',
          'Roți spate masive de 600 mm (24”), spițe din plastic;',
          'Roți frontale 200 x 50 mm;',
          'Scaunul și spătarul sunt fabricate din nailon, respirabil;',
          'Spătar fix;',
          '<b>Greutate maximă încărcare</b>: 100 kg;',
          '<b>Greutate</b>: 19 kg;',
          '<b>Dimensiuni scaun pliat</b>: 93 x 24 x 89 cm;'
        ]
      },
      {
        _id: 605,
        name: 'Cârje',
        headerImageURL: 'assets/img/products/carje.jpg',
        code: '5006',
        images: [
          {
            description : 'Cârje - model produs 1',
            alt : 'carje',
            img :   'assets/img/products/carjeUnu.jpg',
            thumb :  'assets/img/products/carjeUnu.jpg',
            bubbleUrl : 'assets/img/products/carjeUnu.jpg'
          },
          {
            description : 'Cârje - model produs 2',
            alt : 'carje',
            img :   'assets/img/products/carjeDoi.jpg',
            thumb :  'assets/img/products/carjeDoi.jpg',
            bubbleUrl : 'assets/img/products/carjeDoi.jpg'
          }
        ],
        categoryID: 6,
        previewData : 'Cârje confecționate din aluminiu',
        characteristics: [
          '<b>Greutate maximă utilizator</b>: 140 kg;',
          '<b>Greutate produs</b>: 0.51 kg;',
          '<b>Înălțime utilizator</b>: 195 cm;',
          '<b>Densitate spumă [kg/mc]</b>: 76 - 98;',
          'Tija este confecționată din aluminiu cu caracteristici speciale ce dau o rezistență deosebită;',
          'Lungimea tijei se ajustează într-o plajă de până la 22 cm în 11 pași;',
          'Tija este realizată din doua tuburi cu diametrele de 22 mm, respectiv 19 mm, care culisează unul în altul pentru a regla tija la lungimea dorită;',
          'Între cele două tuburi este un inel de propilenă ca să amortizeze zgomotul;'
        ]
      },
      {
        _id: 606,
        name: 'Bastoane',
        headerImageURL: 'assets/img/products/baston.jpg',
        code: '5007',
        images: [
          {
            description : 'Bastoane - model produs 1',
            alt : 'baston',
            img :   'assets/img/products/bastonUnu.jpg',
            thumb :  'assets/img/products/bastonUnu.jpg',
            bubbleUrl : 'assets/img/products/bastonUnu.jpg'
          },
          {
            description : 'Bastoane - model produs 2',
            alt : 'bastoane',
            img :   'assets/img/products/bastonDoi.jpg',
            thumb :  'assets/img/products/bastonDoi.jpg',
            bubbleUrl : 'assets/img/products/bastonDoi.jpg'
          }
        ],
        categoryID: 6,
        previewData : 'Bastoane din aluminiu, extrem de ușoare și rezistente',
        characteristics: [
          'Confecționat din aluminiu, extrem de ușor și rezistent;',
          'Reglabil pe înălțime, prevăzut cu suport curelușă pentru încheietura mâinii și are terminație din cauciuc antiderapant;',
          'Mânerul este ergonomic, confecționat din material de calitate, iar terminația de cauciuc se poate schimba după ce se uzează;'
        ]
      },
      {
        _id: 607,
        name: 'Scaune WC mobil',
        headerImageURL: 'assets/img/products/scaunWC.jpg',
        code: '5008',
        images: [
          {
            description : 'Scaune WC mobil - model produs 1',
            alt : 'scaun WC mobil',
            img :   'assets/img/products/scaunWCUnu.jpg',
            thumb :  'assets/img/products/scaunWCUnu.jpg',
            bubbleUrl : 'assets/img/products/scaunWCUnu.jpg'
          },
          {
            description : 'Scaune WC mobil - model produs 2',
            alt : 'scaun wc mobil',
            img :   'assets/img/products/scaunWCDoi.jpg',
            thumb :  'assets/img/products/scaunWCDoi.jpg',
            bubbleUrl : 'assets/img/products/scaunWCDoi.jpg'
          }
        ],
        categoryID: 6,
        previewData : 'Scaune WC mobil',
        characteristics: [
          'Scaunul cu WC se poate utiliza ca <b>WC de camera</b> ca rol principal, <b>înălțător vas WC</b>, se trece peste vasul de toaletă, alegând înălțimea dorită, având și rolul de cadru de <b>siguranță pentru WC</b>, ajută pacientul să se așeze sau să se ridice sprijinit de cadrul <b>comodei WC</b>;',
          'Vasul colector al scaunului cu WC are capac detașabil, se sprijină pe două glisiere, se scoate ușor și curat. Recomandarea noastră este să folosiți un sac menajer introdus în vasul colector, cu partea superioară răsfrântă peste marginea vasului și în interior un strat de hârtie igienică pentru a împiedica stropirea. După utilizare sacul menajer este înlocuit;',
          'Cadrul scaunului WC de cameră este din oțel, acoperit electrochimic, se pliază pentru reducerea volumului ocupat, se reglează în înălțime;',
          'Colacul și capacul comodei WC sunt din PVC, asamblate prin clipsuri de cadrul scaunului, se pot detașa ușor pentru a fi curățate eventual cu soluție de săpun și clătite în jet de apă;',
          '<b>Greutate maximă utilizator</b>: 100 kg;',
          '<b>Greutate proprie</b>: 7,6 kg;'
        ]
      },
      {
        _id: 608,
        name: 'Guler cervical',
        headerImageURL: 'assets/img/products/guler.jpg',
        code: '5009',
        images: [
          {
            description : 'Guler cervical - model produs 1',
            alt : 'guler cervical',
            img :   'assets/img/products/gulerUnu.jpg',
            thumb :  'assets/img/products/gulerUnu.jpg',
            bubbleUrl : 'assets/img/products/gulerUnu.jpg'
          },
          {
            description : 'Guler cervical - model produs 2',
            alt : 'guler cervical',
            img :   'assets/img/products/gulerDoi.jpg',
            thumb :  'assets/img/products/gulerDoi.jpg',
            bubbleUrl : 'assets/img/products/gulerDoi.jpg'
          }
        ],
        categoryID: 6,
        previewData : 'Guler cervical realizat dintr-un material plastic rigid',
        characteristics: [
          'Gulerul este realizat dintr-un material plastic rigid, cu suport pentru bărbie, căptușit cu spumă moale și vinil lavabil;',
          'Se reglează pe înălțime, asigurând o potrivire perfectă;',
          'În plus, este bine ventilat pentru a crește confortul pacientului;',
          'Gulerul trebuie purtat în caz de leziuni ale gâtului, spasme musculare la nivelul gâtului, stenoză de canal vertebral la nivel cervical, îngustarea canalului medular la nivel cervical, sindromuri degenerative, spondiloze, osteoartrită cervicală, radiculopatie cervicală;'
        ]
      },
      {
        _id: 609,
        name: 'Ciorapi compresivi',
        headerImageURL: 'assets/img/products/ciorapi.jpg',
        code: '5010',
        images: [
          {
            description : 'Ciorapi compresivi - model produs 1',
            alt : 'ciorapi compresivi',
            img :   'assets/img/products/ciorapiUnu.jpg',
            thumb :  'assets/img/products/ciorapiUnu.jpg',
            bubbleUrl : 'assets/img/products/ciorapiUnu.jpg'
          },
          {
            description : 'Ciorapi compresivi - model produs 2',
            alt : 'ciorapi compresivi',
            img :   'assets/img/products/ciorapiDoi.jpg',
            thumb :  'assets/img/products/ciorapiDoi.jpg',
            bubbleUrl : 'assets/img/products/ciorapiDoi.jpg'
          }
        ],
        categoryID: 6,
        previewData : 'Ciorapi compresivi',
        characteristics: [
          'Recomandați în cazul pacienților cu varicozități severe în cadrul insuficienței venoase cronice, în tromboflebită superficială și după scleroterapie;',
          'În cazul edemelor moderate și a limfedemului, determină comprimarea venelor dilatate, refăcând astfel funcția valvelor venoase și determină creșterea vitezei de circulație a sângelui venos;',
          'Prin normalizarea întoarcerii venoase către inimă se înlătură staza și edemul;',
          'Se pot utiliza în timpul zborurilor cu avionul pentru prevenirea formării de trombi;'
        ]
      },
      {
        _id: 611,
        name: 'Feși rășină sintetică',
        headerImageURL: 'assets/img/products/fesiSint.jpg',
        code: '5012',
        images: [
          {
            description : 'Feși rășină sintetică - model produs 1',
            alt : 'fasa rasina sintetica',
            img :   'assets/img/products/fesiSintUnu.jpg',
            thumb :  'assets/img/products/fesiSintUnu.jpg',
            bubbleUrl : 'assets/img/products/fesiSintUnu.jpg'
          }
        ],
        categoryID: 6,
        previewData : 'Feși din rășină poliuretanică pe suport de fibră de sticlă',
        characteristics: [
          'Realizata din rășină poliuretanică pe suport de fibră de sticlă, rezistentă, asigurând o imobilizare puternică sau foarte puternică a membrelor în cazul fracturilor.;',
          '<b>Dimensiuni</b>: 10,1cm x 3,6m;',
          'Poate fi utilizată și la confecționarea atelelor, ortezelor, protezelor și a altor dispozitive ortopedice;',
          'Se mulează foarte bine pe membre, iar straturile succesive se îmbină perfect;',
          '<b>Culori</b>: alb, roșu, albastru;'
        ]
      }
    ]
  }
];
  latestProducts:any = [
  {
    _id: 101,
    name: 'Ace de vacutainer',
    headerImageURL: 'assets/img/products/aceVacutainer.jpg',
    code: '0002',
    images: [
      {
        description : 'Ace de vacutainer - model produs 1',
        alt : 'Ace de vacutainer',
        img :   'assets/img/products/aceVacutainerUnu.jpg',
        thumb :  'assets/img/products/aceVacutainerUnu.jpg',
        bubbleUrl : 'assets/img/products/aceVacutainerUnu.jpg'
      },
      {
        description : 'Ace de vacutainer - model produs 2',
        alt : 'Ace de vacutainer',
        img :   'assets/img/products/aceVacutainerDoi.jpg',
        thumb :  'assets/img/products/aceVacutainerDoi.jpg',
        bubbleUrl : 'assets/img/products/aceVacutainerDoi.jpg'
      }
    ],
    categoryID: 1,
    previewData : 'Ace recoltare care se adaptează vacutainerelor',
    characteristics: [
      '<b>Greutate</b>: 124 g (inclusiv bateriile);',
      '<b>Dimensiuni</b>: 73 x 66 x 38 mm;',
      '<b>Metoda de măsurare</b>: oscilometrică, corespunzător metodei Korotkoff: Faza I sistolic, Faza V diastolic;',
      '<b>Domeniul de măsurare</b>: 20 - 280 mmHg – tensiune arterială;',
      '40 - 200 bătăi pe minut – puls;',
      '<b>Domeniu de afişare a presiunii manşetei</b>: 0 - 299 mmHg;',
      '<b>Rezoluţie</b>: 1 mmHg;',
      '<b>Precizie statică</b>: presiune în intervalul ± 3 mmHg;',
      '<b>Precizia pulsului</b>: ±5 % din valoarea măsurată;',
      '<b>Sursa de tensiune</b>: 2 baterii alcaline de 1,5V - format AAA;',
      '<b>Durata de viaţă baterie</b>: aprox. 320 măsurări (utilizare de baterii noi).'
    ]
  },
  {
    _id: 302,
    name: 'Urocultoare',
    headerImageURL: 'assets/img/products/urocultorUnu.jpg',
    code: '2003',
    images: [
      {
        description : 'Urocultoare - model produs 1',
        alt : 'Urocultoare',
        img :   'assets/img/products/urocultor.jpg',
        thumb :  'assets/img/products/urocultor.jpg',
        bubbleUrl : 'assets/img/products/urocultor.jpg'
      },
      {
        description : 'Urocultoare - model produs 2',
        alt : 'Urocultoare',
        img :   'assets/img/products/urocultorDoi.jpg',
        thumb :  'assets/img/products/urocultorDoi.jpg',
        bubbleUrl : 'assets/img/products/urocultorDoi.jpg'
      }
    ],
    categoryID: 3,
    previewData : 'Recoltoare universale pentru: urină, spută, spermă, coprocultură și alte fluide biologice',
    characteristics: [
      '<b>Greutate</b>: 124 g (inclusiv bateriile);',
      '<b>Dimensiuni</b>: 73 x 66 x 38 mm;',
      '<b>Metoda de măsurare</b>: oscilometrică, corespunzător metodei Korotkoff: Faza I sistolic, Faza V diastolic;',
      '<b>Domeniul de măsurare</b>: 20 - 280 mmHg – tensiune arterială;',
      '40 - 200 bătăi pe minut – puls;',
      '<b>Domeniu de afişare a presiunii manşetei</b>: 0 - 299 mmHg;',
      '<b>Rezoluţie</b>: 1 mmHg;',
      '<b>Precizie statică</b>: presiune în intervalul ± 3 mmHg;',
      '<b>Precizia pulsului</b>: ±5 % din valoarea măsurată;',
      '<b>Sursa de tensiune</b>: 2 baterii alcaline de 1,5V - format AAA;',
      '<b>Durata de viaţă baterie</b>: aprox. 320 măsurări (utilizare de baterii noi).'
    ]
  },
  {
    _id: 501,
    name: 'Halate vizitatori',
    headerImageURL: 'assets/img/products/halate.jpg',
    code: '4002',
    images: [
      {
        description : 'Halate vizitatori - model produs 1',
        alt : 'Halate vizitatori',
        img :   'assets/img/products/halateUnu.jpg',
        thumb :  'assets/img/products/halateUnu.jpg',
        bubbleUrl : 'assets/img/products/halateUnu.jpg'
      },
      {
        description : 'Halate vizitatori - model produs 2',
        alt : 'Halate vizitatori',
        img :   'assets/img/products/halateDoi.jpg',
        thumb :  'assets/img/products/halateDoi.jpg',
        bubbleUrl : 'assets/img/products/halateDoi.jpg'
      }
    ],
    categoryID: 5,
    previewData : 'Halat de unică folosință, fabricat din polipropilenă (tip laborator)',
    price: '1.4 lei (fără TVA)',
    characteristics: [
      '<b>Greutate</b>: 124 g (inclusiv bateriile);',
      '<b>Dimensiuni</b>: 73 x 66 x 38 mm;',
      '<b>Metoda de măsurare</b>: oscilometrică, corespunzător metodei Korotkoff: Faza I sistolic, Faza V diastolic;',
      '<b>Domeniul de măsurare</b>: 20 - 280 mmHg – tensiune arterială;',
      '40 - 200 bătăi pe minut – puls;',
      '<b>Domeniu de afişare a presiunii manşetei</b>: 0 - 299 mmHg;',
      '<b>Rezoluţie</b>: 1 mmHg;',
      '<b>Precizie statică</b>: presiune în intervalul ± 3 mmHg;',
      '<b>Precizia pulsului</b>: ±5 % din valoarea măsurată;',
      '<b>Sursa de tensiune</b>: 2 baterii alcaline de 1,5V - format AAA;',
      '<b>Durata de viaţă baterie</b>: aprox. 320 măsurări (utilizare de baterii noi).'
    ]
  }
];
  latestProductsPromos: any = [
    {
      _id: 504,
      name: 'Mănuși examinare nitril',
      headerImageURL: 'assets/img/products/nitril.jpg',
      code: '4005',
      images: [
        {
          description : 'Mănuși examinare nitril - model produs 1',
          alt : 'manusi examinare nitril',
          img :   'assets/img/products/nitrilUnu.jpg',
          thumb :  'assets/img/products/nitrilUnu.jpg',
          bubbleUrl : 'assets/img/products/nitrilUnu.jpg'
        },
        {
          description : 'Mănuși examinare nitril - model produs 2',
          alt : 'manusi examinare nitril',
          img :   'assets/img/products/nitrilDoi.jpg',
          thumb :  'assets/img/products/nitrilDoi.jpg',
          bubbleUrl : 'assets/img/products/nitrilDoi.jpg'
        }
      ],
      categoryID: 5,
      price: '<br/>16 lei (fără TVA)',
      previewData : 'Mănuși examinare nitril de unică folosință, nepudrate',
      characteristics: [
        'Mănuși nitril soft strech de unică folosință, nepudrate;',
        'Asigură protecție antichimică;',
        'Previn iritațiile și dermatita;',
        'Protejează de substanțe nedorite sau periculoase;',
        'Asigură protecția mâinilor de substanțe chimice, grăsimi și solvenți;',
        'Nu contin latex, sunt catifelate și ușor elastice;',
        'Reduc riscul de hipersensibilitate și reacții alergice;'
      ]
    },
    {
      _id: 110,
      name: 'Seringi',
      headerImageURL: 'assets/img/products/seringiUnu.jpg',
      code: '0011',
      images: [
        {
          description : 'Seringi - model produs 1',
          alt : 'Seringi',
          img :   'assets/img/products/seringi.jpg',
          thumb :  'assets/img/products/seringi.jpg',
          bubbleUrl : 'assets/img/products/seringi.jpg'
        },
        {
          description : 'Seringi - model produs 2',
          alt : 'Seringi',
          img :   'assets/img/products/seringiDoi.jpg',
          thumb :  'assets/img/products/seringiDoi.jpg',
          bubbleUrl : 'assets/img/products/seringiDoi.jpg'
        }
      ],
      categoryID: 1,
      price: '<br>0.17 lei - 1ml (fără TVA)<br/>0.14 lei - 2ml (fără TVA)<br/>0.15 lei - 5ml (fără TVA)<br/>0.23 lei - 10ml (fără TVA)<br/>0.31 lei - 20ml (fără TVA)<br/>0.84 lei - 50ml (fără TVA)<br/>2.4 lei - 100ml (fără TVA)',
      previewData : 'Seringi de unică folosință 1/2/5/10/20/50/100 ml',
      characteristics: [
        'Seringi de unică folosință 1/2/5/10/20/50/100 ml cu ac 21G din 3 componente (piston prevăzut cu garnitură din cauciuc natural pentru uz medical);'
      ]
    },
    {
      _id: 501,
      name: 'Halate vizitatori',
      headerImageURL: 'assets/img/products/halate.jpg',
      code: '4002',
      images: [
        {
          description : 'Halate vizitatori - model produs 1',
          alt : 'photo1',
          img :   'assets/img/products/halateUnu.jpg',
          thumb :  'assets/img/products/halateUnu.jpg',
          bubbleUrl : 'assets/img/products/halateUnu.jpg'
        },
        {
          description : 'Halate vizitatori - model produs 2',
          alt : 'photo1',
          img :   'assets/img/products/halateDoi.jpg',
          thumb :  'assets/img/products/halateDoi.jpg',
          bubbleUrl : 'assets/img/products/halateDoi.jpg'
        }
      ],
      categoryID: 5,
      price: '<br/>1.4 lei (fără TVA)',
      previewData : 'Halate vizitatori',
      characteristics: []
    }
  ];
  currentState: any = null;
  footerID : any = 'copyright';
  mainContentWrapper : any = 'publicContent';
}
