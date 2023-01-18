let hundurluk =Math.abs(Number(prompt("evin hundurluyunu daxil edin" , "metrle")));
let en= Math.abs(Number(prompt("evin enini daxil edin" , "metrle")));
let uzunluq =Math.abs(Number(prompt("evin uzunlugunu daxil edin" , "metrle")));
let pencereSayi =Math.abs(Number(prompt("pencerenin sayini daxil edin")));
let pencereEni =Math.abs(Number(prompt("pencerenin enini daxil edin" , "metrle")));
let pencereUzunlugu =Math.abs(Number(prompt("pencerenin uzunlugunu daxil edin" ,"metrle" )));



 if (isNaN!=hundurluk && isNaN!=en && isNaN!=uzunluq && isNaN!=pencereSayi && isNaN!=pencereEni && isNaN!=pencereUzunlugu){
    let result=(hundurluk*en*uzunluq)-((pencereEni*pencereUzunlugu)*pencereSayi);
        if(result>0){
        // bir kvadrat metre 5 litr boya lazim olsun
        let boyaLitr=Math.ceil(result*5)
        //bir boya qabinin icinde 15 litr boya olsun
        let boyaQabi=Math.ceil(boyaLitr/15)
        console.log("otaq ucun"+boyaLitr+"litr boya lazimdir");
        console.log("otaq ucun"+boyaQabi+"sayda boya almaq lazimdir");
        }
        else{
            alert("zehmet olmasa olculeri duzgun daxil edin")
        }
    }
    else{
        alert("zehmet olmasa reqem daxil edin")
    }

//Math.abs --müştəri mənfi dəyər girsə belə onu həmişə müsbətə çevirsin
//is.Nan --müştərinin daxil etdiyi dəyərin rəqəm olub olmamasını yoxlasın
//Math.ceil -- ola bilər ki müştəri kəsr ədəd daxil etsin (3.75 metr) onu nəticədə özündən 1 tam yuxarıya 
//yuvarlaqlaşdırsın ki boya itkiyə getməsin


