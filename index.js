// eslint-disable-next-line no-unused-vars
const fenomenler = [
  {
    "number": 1,
    "profile": "Instagram",
    "followers": 539446645,
    "posts": 7202,
    "platform": "Instagram"
  },
  {
    "number": 2,
    "profile": "Cristiano Ronaldo",
    "followers": 473864939,
    "posts": 3338,
    "platform": "Instagram"
  },
  {
    "number": 3,
    "profile": "Kylie",
    "followers": 364542529,
    "posts": 6935,
    "platform": "Instagram"
  },
  {
    "number": 4,
    "profile": "Leo Messi",
    "followers": 355790796,
    "posts": 890,
    "platform": "Instagram"
  },
  {
    "number": 5,
    "profile": "Selena Gomez",
    "followers": 341579063,
    "posts": 1828,
    "platform": "Instagram"
  },
  {
    "number": 1,
    "profile": "Barack Obama",
    "followers": 132473746,
    "posts": 16563,
    "platform": "Twitter"
  },
  {
    "number": 2,
    "profile": "Justin Biber",
    "followers": 114165664,
    "posts": 31371,
    "platform": "Twitter"
  },
  {
    "number": 3,
    "profile": "KATY PERRY",
    "followers": 108950737,
    "posts": 11715,
    "platform": "Twitter"
  },
  {
    "number": 4,
    "profile": "Rihanna",
    "followers": 106989611,
    "posts": 10632,
    "platform": "Twitter"
  },
  {
    "number": 5,
    "profile": "Elon Musk",
    "followers": 102819963,
    "posts": 18921,
    "platform": "Twitter"
  },
  {
    "number": 1,
    "profile": "Ninja",
    "followers": 18296006,
    "posts": "NA",
    "platform": "Twitch"
  },
  {
    "number": 2,
    "profile": "auronplay",
    "followers": 13377575,
    "posts": "NA",
    "platform": "Twitch"
  },
  {
    "number": 3,
    "profile": "Rubius",
    "followers": 12524137,
    "posts": "NA",
    "platform": "Twitch"
  },
  {
    "number": 4,
    "profile": "Tfue",
    "followers": 11145556,
    "posts": "NA",
    "platform": "Twitch"
  },
  {
    "number": 5,
    "profile": "shroud",
    "followers": 10244388,
    "posts": "NA",
    "platform": "Twitch"
  },
  {
    "number": 1,
    "profile": "charli damelio",
    "followers": 141200000,
    "posts": 2211,
    "platform": "TikTok"
  },
  {
    "number": 2,
    "profile": "Khabane lame",
    "followers": 139700000,
    "posts": 1055,
    "platform": "TikTok"
  },
  {
    "number": 3,
    "profile": "Bella Poarch",
    "followers": 89900000,
    "posts": 470,
    "platform": "TikTok"
  },
  {
    "number": 4,
    "profile": "Addison Rae",
    "followers": 87700000,
    "posts": 1683,
    "platform": "TikTok"
  },
  {
    "number": 5,
    "profile": "Will Smith",
    "followers": 72200000,
    "posts": 136,
    "platform": "TikTok"
  },
];


/* G??rev 1 (otomatik kontrol testi yap??lmayacak):
A??a????dakileri konsolda g??sterim (console.log) i??lemi ger??ekle??tirerek, yukar??da verilen fenomenler dizisindeki verilere eri??im al????t??rmas?? yap??n:

(i??lev yazman??za gerek yok) */

console.log(fenomenler);

//(1) Dizideki ilk fenomen (0. dizin) profil (profile) ad??

console.log(fenomenler[0]['profile']);

//(2) Dizideki ??????nc?? fenomenin (2. dizin) takip??i (followers) say??s??

console.log(fenomenler[2]['followers']);

//* G??rev 2 (otomatik kontrol testi yap??lmayacak):
//(i??lev yazman??za gerek yok)
//Fenomenler dizisinde bir yaz??m hatas?? var ???? 7. s??radaki fenomen 'Justin Bieber' ??n soyismi 'Biber' olarak yanl???? yaz??lm????. Bu sorunu d??zeltin ve ??al????man??z?? kontrol etmek i??in console.log() yap??n.

console.log(fenomenler[6].profile = 'Justin Bieber');

/*  G??rev 3:
A??a????daki i??lemleri yapmak i??in indekseGoreFenomen i??levini kullan??n:
1. ??lk parametre olarak fenomenler dizisini al??n,
2. ??kinci parametre de ise, dizide istenen feneomene ait indeksi g??steren bir say??y?? al??n.
3. `{indeks}. indekste bulunan fenomen: {profile}` ??eklinde sonu?? d??nd??r??n

NOT: D??ND??????N??Z D??Z??N YUKARIDAK?? B??????MLE E??LE??MES?? GEREK??R, YA DA TEST?? GE??MEYECEKT??R!
??RNEK: fenomenler dizisi ve 3 say??s?? ile indekseGoreFenomen ??a??r??l??rsa, `3. indekste bulunan fenomen: Leo Messi' */

function indekseGoreFenomen(dizi,index) {
  return index +'. indekste bulunan  fenomen: ' + dizi[index].profile ;
}
console.log(indekseGoreFenomen(fenomenler,5));



/*  G??rev 4:
A??a????dakileri yapmak i??in profilListesi'ni kullan??n:
1. fenomen dizisini bir parametreden arg??man olarak al??n
2. Parametre dizisini kopyalayarak yeni bir dizi olu??turun
3. Yeni dizinin ??zerinde dola????n ve dizinin her bir indeksinde yaln??zca fenomenin ad??na e??it olacak ??ekilde g??ncelleyin
???? D??n???? ??RNE????: ["Instagram", "Cristiano Ronaldo", "Kylie"....]
*/

function profilListesi(dizi) {
  let x = [...dizi];
  for (let i = 0; i<x.length; i++){
    x[i] = x[i].profile ;
  }
  return x;
}

console.log(fenomenler);

/* G??rev 5:
A??a????dakileri yapmak i??in fenomenSil'i kullan??n:
1. ilk parametre olarak fenomenler dizisini al??n
2. ikinci parametre olarak istenen dizin(indeks) says??s??n?? arg??man olarak al??n
3. Parametre dizisinin bir kopyas?? olan yeni bir dizi olu??turun
4. Kopyalanan diziden istenen indeksteki fenomeni ????kar??n
5. Ortaya ????kan diziyi d??nd??r??n

??RNEK: fenomenSil i??levi fenomenler dizisi ve 0 indeks say??s?? ile ??a??r??l??rsa, veri k??memizden 'Instagram' kald??r??lm???? olarak d??nd??r??r. */
function fenomenSil(arr,index) {
  let newArr = [...arr];
  newArr.splice(index,1);
  return newArr;
}
console.log(fenomenSil(fenomenler,1));

/* G??rev 6:
A??a????dakileri yapmak i??in fenomenEkle'i kullan??n:
1. ilk parametre olarak fenomenler dizisini al??n
2. ??K??NC??, ??????NC??, D??RD??NC??, BE????NC?? ve ALTINCI parametre olarak s??ras??yla bir s??rano (number), bir profil ismi (profile), takip??i say??s?? (followers), g??nderim say??s??  (posts) ve bir platform ad?? (platform) al??n.
3. fenomenler dizisini bir kopyas??n?? olu??turun.
4. A??a????daki formatta bir nesne olu??turun:
  {
    "number": 6,
    "profile": "Workintech",
    "followers": 10000000,
    "posts": 2022,
    "platform": "Instagram"
  }
5. Yeni olu??turulan nesneyi kopyalanan diziye ekleyin, ard??ndan kopyalanan diziyi d??nd??r??n

??RNEK: fenomenEkle(fenomenler, 6, "Workintech", 10000000, 2022, "Instagram") ??a??r??ld??????nda dizinin sonuna yukar??daki nesne en sona eklenerek yeni fenomenler dizisini d??nd??rmelidir. */

function fenomenEkle(arr,numara,profilIsmi,takipciSayisi,gonderi,platform) {
let newArr = [...arr];

const yeniFenomen = {};
yeniFenomen.number = numara;
yeniFenomen.profile = profilIsmi;
yeniFenomen.followers = takipciSayisi;
yeniFenomen.posts = gonderi;
yeniFenomen.platform = platform ;

newArr.push(yeniFenomen);
return newArr ;

}


/* G??rev 7:
A??a????dakileri yapmak i??in enFenomenler'yi kullan??n:
1. ilk parametre olarak fenomenler dizisini al??n
2. Al??nan diziden y??zmilyon'dan (100000000) fazla takip??isi olan fenomenlerin adlar??n?? i??eren bir dizi d??nd??r??n.

??RNEK: enFenomenler(fenomenler) ??a??r??ld??????nda sonu?? olarak ["Instagram", "Cristiano Ronaldo", ... "Khabane lame"] d??nemelidir
*/

function enFenomenler(arr) {
  let newArr = [];
  for(let i=0;i<arr.length;i++){
    if (arr[i].followers>10000000){
      newArr.push(arr[i].profile)
    }
  }
  return newArr 
}

console.log(enFenomenler(fenomenler)) ;

/* G??rev 8:
A??a????dakileri yapmak i??in fenomenGonderimSayisi'n?? kullan??n:
1. ilk parametre olarak fenomenler dizisini al??n
2. ikinci parametre olarak fenomen profil ad??n?? (profile) al??n
3. Fenomenin g??nderim(posts) say??s??n?? d??nd??r??n

??RNEK: fenomenGonderimSayisi(fenomenler, 'Will Smith') ??a??r??ld??????nda "136" d??nmelidir
*/

function fenomenGonderimSayisi(arr,x){
  for (let i=0;i<arr.length;i++){
    if (arr[i].profile==x){
      return arr[i].posts
    }
  }
}

console.log(fenomenGonderimSayisi(fenomenler,"Will Smith"));


/* G??rev 9:
A??a????dakileri yapmak i??in platformaGoreCokGonderiYapanFenomen'ni kullan??n:
1. ilk parametre olarak fenomenler dizisini al??n
2. ikinci parametre olarak platform ad??n?? al??n
3. Verilen platform da en ??ok g??nderi yapan fenomen ad??n?? d??nd??r??n

Not: G??nderi say??s?? belli olmayan (NA) hesaba katmay??n.

??rnek: platformaGoreCokGonderiYapanFenomen(fenomenler, 'TikTok') ??a??r??ld??????nda "charli damelio" d??nmelidir
*/

function platformaGoreCokGonderiYapanFenomen(fenomenler, x){
  let enfenomen = "";
  let maxPost = 0;
  for (let i=0 ; i<fenomenler.length;i++){

    if (fenomenler[i].platform==x){
      if (fenomenler[i].posts!="N/A" && fenomenler[i].posts>maxPost){
        enfenomen = fenomenler[i].profile;
        maxPost = fenomenler[i].posts;
      }
       else {
      console.log("Bu kategoride post bulunmamakta");
      }
    }
   }
   return enfenomen;
}
    
  /* ***** G??REVLER??N SONU ***** */



/*Bu sat??rdan sonra koda dokunmay??n! */
function sa() {
  console.log('??al??????yor');
  return 'as';
}
sa();
/*Bu sat??rdan sonra koda dokunmay??n! */
module.exports = {
  sa,
  indekseGoreFenomen,
  profilListesi,
  fenomenSil,
  fenomenEkle,
  enFenomenler,
  fenomenGonderimSayisi,
  platformaGoreCokGonderiYapanFenomen
}
