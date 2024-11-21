
//zaman dilimini kullanarak bicimlendirilmis bir tarih ve saat bilgisini donduren fonksiyon
function convertTimeStamp(timeStamp,timezone){
    //zaman dilimini saat cinsinden donusturur (saniyeden saate)
   const convertTimezone = timezone / 3600;
   //yeni bir tarih nesnesini olustur
   const date = new Date (timeStamp * 1000);
 //tarih ve saat bilgisi icin secenekleri belirle
   const options = {
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric",
    hour:"numeric",
    minute:"numeric",
    timezone:`Etc/GMT${convertTimezone >=0 ? "-" : "+"}${Math.abs(
        convertTimezone)}`, // zaman dilimini belirleme
        hour12:true, // 12 saat formatinda gosterilsinmi

   };
   //tarih ve saati kullaniciya dost bir formatta dondurur
return date.toLocaleString("en-US", options);
};
//ulke kodunu ulke adina ceviren fonksiyon
function convertCountryCode(country) {
    let regionNames = new Intl.DisplayNames(["en"], {type: "region"});
    // ulke kodunu alinan bu "intl.displaynames" ornegi kullanarak ulke adina gonderir.
    console.log(regionNames.of(country));
    return regionNames.of(country);
}
/* *intl.displaynames: javascriptte uluslararasi dil ve bolge adlarina
 *cevirmek icin kullanilan bir API dir

 * intl : internationalization
 *DisplayNames
*/ 
export {convertTimeStamp, convertCountryCode};

