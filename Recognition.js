const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");}

var GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var Mnombre=''
function TaxtoC(){
  var TextoN=document.getElementById("texto").value;
  let TextoA=removeAccents(TextoN.replace(/\n/g,' ')).split(' ');
  let TextoP=removeAccents(TextoN.replace(/\n/g,' ')).toLowerCase().split(' ');

  let TextF=''
  let VK=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(let NP in TextoP){
    let Plb=TextoP[NP];
    var LPlb = Plb.length
    console.log(LPlb)
    if(LPlb>2 || Plb=='no' ||  Plb=='mi'){
      /* --------------------------------------- */
      let PLB=TheCowProblem(Plb);
      TextF=TextF+PLB;TextF=TextF+' ';
      /* --------------------------------------- */
      BuscaNombre(TextoA[NP])
      /* --------------------------------------- */
      let VKf = Intencion(PLB);
      VKf.forEach((element,index) => {VK[index]+=element} )
      /* --------------------------------------- */
    }
  }
  let MxO = Math.max.apply(Math,VK);
  for(let x=0;x<VK.length;x++){VK[x]+=GainK[x]}

  let TextO_0='La intención que percibí fue: <br>'; /* aqui tenia TextF*/
  let TextO_1='<br>';
  let TextO_2=' ';
  let TextO_3='Es lo que estas buscando ó regresamos al menú principal?';

  let Mx = Math.max.apply(Math,VK);
  let MxId = VK.indexOf(Mx);

  if(Mx>.5){
    if(MxId==0){
      TextO_0=TextO_0+'<b> Querer ir al menú principal </b>';
      TextO_1=TextO_1+'Hola '+Mnombre+' soy un ChatBot diseñado por CONACYT <br> para guiarte en alguna de estas tareas:';
      TextO_2='° Temas relacionados con el acceso a los sistemas <br>° Temas relacionados al CVU <br>° Temas relacionados con becas <br>° Temas relacionados con el S.N.I. <br>° Temas relacionados con la firma electrónica'
      TextO_3='¿QUE ESTAS BUSCANDO?';
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==1){
      TextO_0=TextO_0+'<b> Querer abandonarme </b>';
      TextO_2=TextO_2+'Hata luego '+Mnombre+' que tengas un increible día'
      TextO_3='';
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==2){
      TextO_0=TextO_0+'<b>Querer saber sobre ACCESO AL SISTEMA</b>';
      TextO_1=TextO_1+Mnombre+' la información que tengo sobre: Acceso al Sistema es:';
      TextO_2=TextO_2+'° ¿Cómo obtengo usuario y contraseña? <br> ° No recuerdo mi usuario o contraseña de acceso <br> ° Quiero cambiar el correo electrónico registrado como usuario <br>° Quiero cambiar la Nacionalidad con la cual estoy registrado'
      GainK=[.5,.5,.1,.1,.1,.1,.1,0,0,0,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==3){
      TextO_0=TextO_0+'<b>Querer saber sobre CVU</b>';
      TextO_1=TextO_1+Mnombre+' la información que tengo sobre CVU es:';
      TextO_2=TextO_2+'° ¿Cómo puedo ingresar a mi CVU? <br>° No me permite guardar en las diferentes secciones del CVU <br>° No acepta el ISSN que se está capturando <br>° Al utilizar el buscador de Thomson y Scopus colocando el ISSN y nombre del autor no aparece el articulo <br>° No se puede agregar a los Autor (es) en la sección publicación de artículos y Publicación de libros. <br>° No aparece la institución o empresa dentro del catálogo <br>° Como realizar corrección de CURP, los campos están inhabilitados'
      GainK=[.5,.5,.1,.1,.1,.1,.1,0,0,0,0,0,0,0,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==4){
      TextO_0=TextO_0+'<b>Querer saber sobre BECAS</b>';
      TextO_1=TextO_1+Mnombre+' la información que tengo sobre Becas es:';
      TextO_2=TextO_2+'° ¿Cómo obtengo mi Usuario y contraseña? <br> ° ¿Cómo ingreso a llenar mi solicitud de beca? <br> ° No me aparece mi solicitud de beca'
      GainK=[.5,.5,.1,.1,.1,.1,.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.5,.5,.5,0,0,0,0,0,0,0]}
    else if(MxId==5){
      TextO_0=TextO_0+'<b>Querer saber sobre S.N.I.</b>';
      TextO_1=TextO_1+Mnombre+' la información que tengo sobre SNI es:';
      TextO_2=TextO_2+'° ¿No se muestra toda la información en mi solicitud que tengo registrada en el CVU? <br> ° ¿A qué dirección debo enviar mi producción científica? <br> ° ¿Por qué el sistema no me permite enviar mi solicitud si ya incluí toda la información?'
      GainK=[.5,.5,.1,.1,.1,.1,.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.5,.5,.5,0,0,0,0]}
    else if(MxId==6){
      TextO_0=TextO_0+'<b>Querer saber sobre Firma Electrónica</b>';
      TextO_1=TextO_1+Mnombre+' la información que tengo sobre Firma electrónica es:';
      TextO_2=TextO_2+'° Al querer firmar mi convenio del S.N.I, o Beca se muestra el mensaje “Error al firmar el documento” <br> °	Quiero firmar un convenio de proyecto, pero No recuerdo mi firma electrónica de PeopleSoft <br> °	Quiero firmar un convenio de proyecto, pero No me llega el código de cancelación'
      GainK=[.5,.5,.1,.1,.1,.1,.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.5,.5,.5,0]}
    else if(MxId==7){
      TextO_0=TextO_0+'<b>Que no te puedo ayudar</b>';
      TextO_1=TextO_1+'...';
      TextO_2=TextO_2+Mnombre+' lo lamento aún sigo aprendiendo pero te dejo el contacto de un humano: <br> tel:(55)55-55-555  <br> correo: conacyt@conacyt.com.mx'
      TextO_3='ó ¿quieres que regresemos al menú principal?';
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==8){
      TextO_0=TextO_0+'<b>Te estas presentando</b>';
      TextO_1=TextO_1+' ';
      BuscaNombre(TextF)
      TextO_2=TextO_2+'HOLA '+ Mnombre;
      TextO_3='En que pueodo ayudarte';
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==9){
      TextO_0=TextO_0+'<b>Querer saber sobre si soy un Robot</b>';      
      TextO_1=TextO_1+'Si soy un Robot';
      TextO_2=TextO_2+'Soy una interface de lenguaje natural'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==10){
      TextO_0=TextO_0+'<b>Quieres saber como obtener tu usuario y/o contraseña</b>';
      TextO_1=TextO_1+'¿Cómo obtengo usuario y contraseña?';
      TextO_2=TextO_2+'Para obtener su usuario y contraseña de acceso a los sistemas del CONACYT, es necesario contar con la siguiente información y realizar los siguientes pasos: <br>	Su clave única de registro de población (CURP); <br>	Un correo electrónico activo al cual tenga acceso.<br> y deberá realizar los siguientes pasos: <br> Ingresar a la página principal del CONACYT https://www.conacyt.gob.mx <br> Identifique en el menú superior el apartado “servicios en línea” e ingrese presionando clic sobre este.'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==11){
      TextO_0=TextO_0+'<b>Olvidaste tu usuario y/o contraseña</b>';
      TextO_1=TextO_1+'No recuerdo mi usuario o contraseña de acceso';
      TextO_2=TextO_2+'Si no recuerda su contraseña, siga los siguientes pasos:<br>Ingrese a la página principal del CONACYT https://www.conacyt.gob.mx<br>Identifique en el menú superior el apartado “servicios en línea” e ingrese presionando clic sobre este.<br>Identifique la sección “Recuperación de Contraseña” y de clic en el botón “Acceso al Sistema”.<br>Capture el correo electrónico registrado (usuario)<br>Deberá marcar la casilla de validación “No soy un robot”<br>Y presione el botón “Aceptar”'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==12){
      TextO_0=TextO_0+'<b>Quieres cambiar tu correo</b>';
      TextO_1=TextO_1+'Quiero cambiar el correo electrónico registrado como usuario';
      TextO_2=TextO_2+'Para llevar a cabo el cambio de correo electrónico (usuario), es necesario redacte una carta en formato simple (firmada autógrafamente con tinta azul) indicando el motivo del cambio, la carta deberá contener los siguientes datos; <br>    Nombre completo: <br>CURP: <br>Correo electrónico actual:<br>Correo electrónico nuevo: <br>Teléfono de contacto:'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==13){
       TextO_0=TextO_0+'<b>Quieres cambiar tu Nacionalidad</b>';
       TextO_1=TextO_1+'Quiero cambiar la Nacionalidad con la cual estoy registrado';
       TextO_2=TextO_2+'Para cambiar la Nacionalidad, deberá enviar mediante correo electrónico a la cuenta cst@conacyt.mx los documentos en formato .pdf donde se muestre: <br>° CURP, <br>° Nacionalidad,<br>° Nombre completo <br>° País de nacimiento.'
       GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==14){
      TextO_0=TextO_0+'<b>Tienes dudas sobre el ingreso al CVU</b>';
      TextO_1=TextO_1+'¿Cómo puedo ingresar a mi CVU?';
      TextO_2=TextO_2+'Para ingresar a su CVU, deberá seguir los siguientes pasos: <br>1)	Ingresar a la página principal del CONACYT https://www.conacyt.gob.mx <br> 2)	Identifique en el menú superior el apartado “servicios en línea” e ingrese presionando clic sobre este. <br>3)	Identifique la sección “Acceso al sistema CVU” y de clic en el botón “Acceso al sistema CVU” <br>4)	Capturar usuario y contraseña (usuario@), marcar la casilla de validación “No soy un robot” y presione el botón "Aceptar" l'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==15){
      TextO_0=TextO_0+'<b>Tienes problemas para guardar datos</b>';      
      TextO_1=TextO_1+'No me permite guardar en las diferentes secciones del CVU';
      TextO_2=TextO_2+'Para que el sistema le permita guardar en las diferentes secciones, es necesario que capture todas las secciones o campos marcados con asterisco (“*”), toda vez que estos campos son obligatorios.  <br> recomienda validar que en el texto capturado no existan caracteres especiales, para ello se recomienda capturar directamente en el campo y no utilizar la función de copiar y pegar.</br>'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==16){
      TextO_0=TextO_0+'<b>Tienes problemas con lo que capturas</b>';
      TextO_1=TextO_1+'No acepta el ISSN que se está capturando ';
      TextO_2=TextO_2+'Si al momento de capturar el ISSN, no le permite guardar, se debe a que está capturando el numero incorporando guiones (-), para que le permita guardar deberá capturar el número completo sin utilizar guiones.'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==17){
      TextO_0=TextO_0+'<b>Colocando el ISSN y el autor no aparece el articulo</b>';
      TextO_1=TextO_1+'Al utilizar el buscador de Thomson y Scopus colocando el ISSN y nombre del autor no aparece el articulo';
      TextO_2=TextO_2+'Si al momento de capturar el ISSN y el nombre del autor no le aparece el artículo, esto puede deberse a que el nombre capturado en el campo de “autor” no corresponde, por lo cual se recomienda capturar el nombre como lo tiene registrado en su artículo.'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==18){
      TextO_0=TextO_0+'<b>No se puede agregar datos e la sección publicación</b>';
      TextO_1=TextO_1+'No se puede agregar a los Autor(es) en la sección publicación de artículos y Publicación de libros.';
      TextO_2=TextO_2+'Si al momento de llenar las secciones “Publicación de artículo o Publicación de libros” el sistema no le permite llenar los autores, esto se debe a que no se han guardado los datos del articulo o libro, por lo que deberá guardar primero los datos del formulario para que la sección de autores se habilite.'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==19){
      TextO_0=TextO_0+'<b>No aparece datos dentro del catalogo </b>';
      TextO_1=TextO_1+'No aparece la institución o empresa dentro del catálogo';
      TextO_2=TextO_2+'Si la institución o empresa no aparece dentro del catálogo del sistema, por favor llene el formulario “Incorporación de Universidades, Instituciones y Empresas al catálogo del CVU-CONACYT” disponible en: https://docs.google.com/forms/d/e/1FAIpQLSdkGXtQ5AQv62cWQOSD17N6VvyJOAeZEyFyRC3s4SqVHvarkg/viewform <br> Es importante que registre la razón social de la institución (sin acentos) <br> *. Ejemplos: <br> Empresa de Ejemplo, S.A. de C.V. <br> Fundación de Ejemplo, A.C. <br> *Sólo aplica para instituciones Nacionales, en el caso de ser extranjera dar de alta la institución específica. <br> Se le pedirán los datos generales de la institución que desea agregar al catálogo y la página web de la misma para poder validarla.'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==20){
      TextO_0=TextO_0+'<b>Corrección de CURP</b>';
      TextO_1=TextO_1+'Como realizar corrección de CURP, los campos están inhabilitados ';
      TextO_2=TextO_2+'Para realizar el cambio de CURP, deberá enviar correo electrónico a la cuenta cst@conacyt.mx indicando <br> Motivo del cambio <br> Nombre completo <br> Correo electrónico <br> Numero de CVU <br> Enviar identificación escaneada en la que se muestre su CURP (INE, Pasaporte)'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==21){
      TextO_0=TextO_0+'<b>Problemas para obtener Usuario y/o Contraseña</b>';
      TextO_1=TextO_1+'¿Cómo obtengo mi Usuario y contraseña?';
      TextO_2=TextO_2+'Los pasos que deberá seguir los siguientes para obtener Usuario y Contraseña:<br> 1)	Ingresar a la página principal del CONACYT https://www.conacyt.gob.mx <br> 2)	Identifique en el menú superior el apartado “servicios en línea” e ingrese presionando clic sobre este. <br> 3)	Identifique la sección “Registro de Nuevos Usuarios” y de clic en el botón “Acceso al Sistema”.<br> 4)	El proceso le preguntara el “Tipo de cuenta”<br> Seleccione “soy un usuario nuevo”, si nunca ha tenido un usuario.'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==22){
      TextO_0=TextO_0+'<b>Problemas para llenar la solicitud de beca</b>';
      TextO_1=TextO_1+'¿Cómo ingreso a llenar mi solicitud de beca?';
      TextO_2=TextO_2+'El coordinador deberá realizar los siguientes pasos para registrar la solicitud:<br> 1)	Ingresar a la página principal del CONACYT https://www.conacyt.gob.mx<br> 2)	Identifique en el menú superior el apartado “servicios en línea” e ingrese presionando clic sobre este.<br> 3)	Identifique la sección “Becas nacionales/ al extranjero” y de clic en el botón “Acceso al Sistema”.<br> 4)	Capturar usuario y contraseña (usuario@), marcar la casilla de validación “No soy un robot” y presione el botón “Aceptar"'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==23){
      TextO_0=TextO_0+'<b>No encuentras tu solicitud de beca</b>';
      TextO_1=TextO_1+'No me aparece mi solicitud de beca';
      TextO_2=TextO_2+'Para que el aspirante puede visualizar la solicitud de beca, el coordinador deberá postularlo y cambiar el estatus de la solicitud a “borrador”, dando clic en la opción de “enviar a aspirante”. <br> Por lo cual, si usted es aspirante y no puede verla, comuníquese con su coordinador'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==24){
      TextO_0=TextO_0+'<b>No ves toda la información de tu solicitud</b>';
      TextO_1=TextO_1+'No se muestra toda la información en mi solicitud que tengo registrada en el CVU';
      TextO_2=TextO_2+'En la solicitud para ser parte del Sistema Nacional de Investigadores, solo se mostrará la producción científica y tecnológica publicada en el periodo sujeto a evaluación. Si la información corresponde al periodo, y no se muestra, deberá verificar que se encuentre debidamente registrada con toda la información y campos existentes en el CVU. Las comisiones dictaminadoras podrán en los casos que lo consideren adecuado, revisar la obra global contenida en su CVU y de ser necesario, solicitar más información.'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==25){
      TextO_0=TextO_0+'<b>Tienes dudas sobre donde enviar tu producción científica</b>';
      TextO_1=TextO_1+'Dirección a la que debo enviar mi producción científica';
      TextO_2=TextO_2+'No se recibirán paquetes con producción física o en CD. Toda documentación deberá adjuntarse en la solicitud de manera electrónica en formato pdf.'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==26){
      TextO_0=TextO_0+'<b>No puedes enviar tu solicitud</b>';
      TextO_1=TextO_1+'El sistema no me permite enviar mi solicitud si ya incluí toda la información';
      TextO_2=TextO_2+'Para que el sistema le permita enviar su solicitud deberá asegurarse de haber completado la información de las 4 secciones en la plataforma y revisar que en la Sección 4 hayas adjuntado todos los documentos probatorios (al ir subiendo la documentación probatoria el fondo de cada producto cambia de color de amarillo a verde). Habiendo completado este procedimiento, podrá enviar su solicitud.'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==27){
      TextO_0=TextO_0+'<b>Titnes un error al firmar el documento</b>';
      TextO_1=TextO_1+'Al querer firmar mi convenio del S.N.I, o Beca se muestra el mensaje “Error al firmar el documento”';
      TextO_2=TextO_2+'Para validar que su Firma electrónica sea correcta puede ingresar al siguiente link. https://www.siat.sat.gob.mx/PTSC/auth/faces/pages/validar/fiel_s.jsf <br> Si su firma No se encuentra vigente o no recuerda su contraseña deberá realizar el trámite correspondiente ante el SAT para actualizar su vigencia o recuperar su contraseña.'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==28){
      TextO_0=TextO_0+'<b>No encuentras tu firma electrónica en PeopleSoft</b>';
      TextO_1=TextO_1+'Quiero firmar un convenio de proyecto, pero No recuerdo mi firma electrónica de PeopleSoft';
      TextO_2=TextO_2+'Deberá utilizar navegadores Internet Explorer o Mozilla Firefox: <br> 1)	Ingresar a la página principal del CONACYT https://www.conacyt.gob.mx<br> 2) Identifique en el menú superior el apartado “servicios en línea” e ingrese presionando clic sobre este.<br> 3)	En la sección del sistema que corresponda del recuadro Ingreso Sistema PeopleSoft<br> 8)	Capturar usuario y contraseña (usuario@), marcar la casilla de validación “No soy un robot” y presione el botón “Aceptar'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if(MxId==29){
      TextO_0=TextO_0+'<b>No te llega el código de cancelación</b>';
      TextO_1=TextO_1+'Quiero firmar un convenio de proyecto, pero No me llega el código de cancelación';
      TextO_2=TextO_2+'Si el código de cancelación no llega a su correo electrónico, ingrese a su CVU y marque como principal el correo electrónico registrado, toda vez que el sistema utiliza este para el envío del código.'
      GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
  } else{
    TextO_0='<brs>'
    TextO_1=TextO_1+'Perdon pero no comprendo lo que has dicho';
    TextO_2=TextO_2+'ó no tengo lo que estas buscano';
    TextO_3='QUIERES QUE REGRESEMOS AL MENÚ PRINCIPAL?';
    GainK=[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  }

  document.getElementById("Texto_0").innerHTML = TextO_0;
  document.getElementById("Texto_1").innerHTML = TextO_1;
  document.getElementById("Texto_2").innerHTML = TextO_2;
  document.getElementById("Texto_3").innerHTML = TextO_3;
}

/* ----------------------------------------------------------------- */
/* --------------------------- FUNCIONES --------------------------- */
/* ----------------------------------------------------------------- */
function Intencion(Plb){
  let Saludo=['regresar','principal','inicio','retornar','menu','hi','hola','buen','dia','dias','tardes','noches','hi','saludos','volver','inicial'];
  let Desped=['bye','adios','chao','hasta','luego'];
  let Acceso=['acceso','sistemas'];
  let CVUnik=['cvu','curriculum'];
  let Beckas=['becas','becarios'];
  let SNInve=['sni','nacional'];
  let FirmaE=['firma','electronica'];
  let NegacR=['no','no lo creo','nunca','regular','nada'];
  let MNombr=['nombre','soy','llamo','apellido','id'];
  let Robots=['robot','humano','automatizacion','inteligente']; //--- 9 ---
  //---------
  let Acc1=['como','obtengo','usuario','contrasena'];
  let Acc2=['recuerdo','usuario','contrasena','acceso'];
  let Acc3=['cambiar','correo','electronico','usuario'];
  let Acc4=['cambiar','nacionalidad','estoy','registrado'];
  let Cvu1=['como','puedo','ingresar','cvu'];
  let Cvu2=['permite','guardar','secciones','cvu'];
  let Cvu3=['acepta','ISSN','que','capturado'];
  let Cvu4=['Thomson','Scopus','ISSN','aparece','articulo']
  let Cvu5=['agregar','autor','seccion','publicacion','articulos']
  let Cvu6=['aparece','institucion','empresa','dentro','catalog']
  let Cvu7=['realizar','correccion','CURP','campos','inhabilitados']
  let Bks1=['como','obtengo','mi','usuario','contrasena'];
  let Bks2=['como','ingresar','llenar','solicitud','beca']
  let Bks3=['no','aparece','solicitud','beca']
  let Sni1=['muestra','informacion','solicitud','registrada','cvu']
  let Sni2=['direccion','debo','enviar','produccion','cientifica']
  let Sni3=['sistema','permite','enviar','solicitud','informacion']
  let Fir1=['mensaje','error','documento']
  let Fir2=['recuerdo','electronica','peoplesoft']
  let Fir3=['llegado','codigo','cancelacion']

  let GRUP0=[Saludo,Desped,Acceso,CVUnik,Beckas,SNInve,FirmaE,NegacR,MNombr,Robots,Acc1,Acc2,Acc3,Acc4,Cvu1,Cvu2,Cvu3,Cvu4,Cvu5,Cvu6,Cvu7,Bks1,Bks2,Bks3,Sni1,Sni2,Sni3,Fir1,Fir2,Fir3];
  let VK=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var LPlb=Plb.length;
  for(let v=0;v<=30;v++){    
    let VKT=0;
    for(let NPV in GRUP0[v]){
      LnghP=(GRUP0[v][NPV].length);      
      for(let LD=0;LD<=LnghP-LPlb;LD++){
        let VKi=0
        if(LPlb/LnghP>.5){
        for(let NL=0;NL<LPlb;NL++){
          if(Plb[NL]==GRUP0[v][NPV][LD+NL]){VKi++}}
        if(VKi/LPlb>=.667){VKT=VKT+VKi/LPlb}}}
      VK[v]=VKT/GRUP0[v].length;
    }}
  return VK;
}

function TheCowProblem(Plb){
  let L0=[0];
  let L1=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','t','s','u','v','w','x','y','z'];
  let L2=['le','en','el','al','si','no','mi','de','la','su','es','un','ha','ya','lo','se','mx','me','tu']
  let L3=['con','los','del','soy','que','sea','fue','gob','una','las','pdf','por','vez','son','sin','han','aqv','ser','dar','web','ese','etc','mas','asi','mis','ver','jsf','dia','rol','sus','dan','uno','iii','dos','ano','esa','cvu','sni']
  let L4=['algo','como','cual','para','curp','menu','clic','este','tipo','pais','link','caso','spam','siga','cabo','azul','esta','area','issn','toda','ello','debe','esto','alta','otro','diez','pero','sera','cada','siat','ante','haya','lado','solo','miic','bien','debo','todo','anos','obra','sean','hora','alto','sola','usan','base','dado','beca','hola']
  let L5=['saber','puedo','temas','estoy','pasos','clave','unica','tenga','linea','sobre','boton','nunca','tenia','nuevo','robot','desde','https','nueva','carta','tinta','copia','podra','desea','donde','autor','puede','estan','todas','estos','texto','campo','pegar','tiene','datos','favor','llene','razon','misma','poder','notas','algun','medio','ahora','nivel','dando','dicha','menor','tener','antes','movil','abrir','llave','hacer','parte','icono','forma','lista','pueda','mismo','usted','envio','menos','estar','deben','tengo','citas','anexe','elegi','tesis','grado','deseo','legal','casos','haber','hayas','todos','fondo','color','verde','esten','bases','fecha','libro','etapa','hasta','siete','seran','resto','desee','hayan','llega','envia','tecla','error','becas','firma']
  let L6=['ayudar','quiero','contar','activo','debera','pagina','nuevos','cuenta','tenido','cuento','marcar','campos','marque','nombre','enviar','centro','llevar','cambio','simple','motivo','actual','anexar','cedula','acepta','libros','dentro','seguir','copiar','numero','llenar','google','social','aplica','partir','primer','mexico','alumno','tratar','cumple','cuatro','cuando','oficio','opcion','ningun','editar','genere','verla,','tengan','estado','adeudo','buscar','obtuvo','manera','cuales','inclui','evalue','cierre','tamano','maximo','pueden','cubrir','avalar','alguna','limite','querer','sujeto','podran','global','fisica','cambia','traves','perish','origen','dichos','poseer','minimo','senala','grados','volver','codigo','accion','acceso','s.n.i.','firmar','correo','scopus']
  let L7=['cambiar','obtener','ingrese','seccion','sistema','proceso','casilla','aceptar','validar','indicar','enviara','bandeja','entrada','carpeta','palabra','capturo','momento','activar','soporte','tecnico','capture','redacte','formato','firmada','oficial','legible','digital','muestre','permite','guardar','aparece','agregar','empresa','permita','existan','funcion','guiones','deberse','autores','primero','acentos','ejemplo','pediran','adecuar','consejo','ciencia','centros','federal','colocar','muestra','mensaje','estatus','embargo','algunas','iniciar','digitos','intento','posible','privada','ninguna','reporte','tramite','recibio','derecha','deseado','ubicado','columna','captura','postula','termino','realice','cumplan','vigente','generar','periodo','lectivo','informe','despues','becario','enviado','editado','ponerse','mozilla','derecho','alumnos','correos','numeros','incluir','patente','revisar','paginas','archivo','trabajo','scholar','science','tambien','llamado','publish','enviada','cuenten','adeudos','espacio','evaluar','estaran','marcada','medicos','cumplir','tarjeta','deberan','senalar','acuerdo','ultimas','esperar','laboral','firefox','copiado','pegarlo','utiliza','firmado','obtengo','usuario','conacyt','thomson','ingreso']
  let L8=['sistemas','presiona','realizar','ingresar','superior','apartado','anterior','presione','recuerda','obtendra','nacional','mostrara','pantalla','correcto','correcta','buscarlo','deseados','completo','atendera','contener','telefono','contacto','oficinas','mediante','utilizar','buscador','articulo','catalogo','marcados','capturar','guardado','habilite','empresas','registre','ejemplos','etcetera','postular','requiere','corregir','convenio','intentar','confirme','activada','programa','acciones','posgrado','cambiara','borrador','reciente','colocado','conocera','consulta','necesita','regresar','devolver','requiera','adecuada','vigencia','requiero','comienza','concluye','activara','rechazar','contario','explorer','recuadro','becarios','imprimir','indicado','enviados','producto','archivos','adjuntar','coincide','adecuado','paquetes','subiendo','amarillo','habiendo','vertical','legibles','busqueda','trabajos','software','enviarla','estricto','dictamen','aparecen','muestran','patentes','aquellos','senalada','acredite','expedida','obtenido','estimulo','personas','bancaria','tramites','proyecto','internet','inferio','usuarios','registro','recuerdo']
  let L9=['necesario','siguiente','poblacion','principal','servicios','continuar','senalados','contrario','confirmar','registrar','indicando','pasaporte','enviarlas','secciones','colocando','articulos','asterisco','capturado','fundacion','generales','validarla','documento','programas','escaneada','aspirante','encuentra','criterios','academico','bloqueado','consultar','capturada','presionar','completar','requisito','completos','recuperar','encuentre','contactar','pendiente','concluido','posterior','desempeno','operadora','encontrar','direccion','capitulos','localizar','percatado','solicitar','doctorado','concursar','obtencion','ocasiones','situacion','publicada','verificar','contenida','recibiran','adjuntado','productos','presenten','facilitar','sugerimos','ordenadas','prestigio','sometidas','concluida','megabytes','destinado','evaluados','destacada','presentar','instituto','migracion','requerido','favorable','economico','reingreso','izquierdo','mostraran','recepcion','habilitan','solicitud']
  let L10=['siguientes','preguntara','seleccione','selecciono','validacion','capturelos','nacimiento','recomienda','fotografia','documentos','diferentes','capturando','correccion','caracteres','especiales','formulario','disponible','importante','nacionales','extranjera','especifica','mencionado','adjuntando','membretado','informamos','tecnologia','facultades','institutos','pertenecen','requeridas','actualizar','requeridos','formalizar','liberacion','establezca','conformada','encontrado','realizados','anteriores','relevantes','necesarias','incompleta','visualizar','postularlo','aspirantes','capturados','telefonico','pendientes','extranjero','peoplesoft','obtuvieron','ingresando','automatiza','registrada','produccion','finalizado','probatorio','reapertura','desarrollo','participar','residencia','resultados','cientifica','evaluacion','existentes','comisiones','consideren','adjuntarse','asegurarse','completado','plataforma','probatoria','encuentren','presentado','explicando','publicadas','unicamente','concedidas','constancia','destacados','claramente','reglamento','solicitado','publicados','realizando','bloqueados','contrasena','registrado']
  let L11=['informacion','identifique','presionando','seleccionar','identificar','indicandole','presentarla','publicacion','institucion','corresponde','importantes','instruccion','registrando','tecnologico','coordinador','postulacion','contactarme','registrarse','solicitante','solicitudes','solicitados','completadas','comuniquese','encontrarse','terminacion','navegadores','comunicarse','contactanos','telefonicos','digitalizar','adscripcion','tecnologica','debidamente','probatorios','orientacion','establecida','editoriales','desarrollos','presentados','desplegaran','disposicion','adicionales','especificos','comprobante','establecido','consecutiva','designacion','cancelacion','restablecer','corresponda','electronica','electronico']
  let L12=['relacionados','nacionalidad','continuacion','directamente','obligatorios','incorporando','verificacion','tecnologicos','convocatoria','complementar','coordinacion','correcciones','modificacion','recomendamos','electronicos','contactarlos','conocimiento','investigador','equivalentes','considerados','otorgamiento','preferencial','equivalencia','presentacion','nombramiento','notificacion','alfanumerica']
  let L13=['inhabilitados','universidades','instituciones','anteriormente','convocatorias','departamentos','inconveniente','postulaciones','instrucciones','correctamente','procedimiento','formalizacion','liberacion/no','documentacion','investigacion','participacion','actualizacion','beneficiarios']
  let L14=['autografamente','identificacion','modificaciones','investigadores','dictaminadoras','sobresalientes','posteriormente']
  let L15=['caracteristicas','correspondiente','internacionales']
  

  let Ne=[L0.length,L1.length,L2.length,L3.length,L4.length,L5.length,L6.length,L7.length,L8.length,L9.length,L10.length,L11.length,L12.length,L13.length,L14.length,L15.length];
  let LT=[L0,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15];

/*  for(let nn=0;nn<17;nn++){
    console.log(Ne[nn],' ',LT[nn].length)
  }*/
  Plb=Plb.replace(/[.]/g,'');
  let LPlb= Plb.length;

  let LN  = LT[LPlb];
  let LNl = LT[Math.max.apply(Math,[0,LPlb-1])];
  let LNll= LT[Math.max.apply(Math,[0,LPlb-2])];
  let LNp = LT[Math.min.apply(Math,[15,LPlb+1])];
  let LNpp= LT[Math.min.apply(Math,[15,LPlb+2])];

  /*----------------- == -------------*/
  var iNe=Ne[LPlb], N=LPlb;
  let f=0; let S=0; let SA=0; let NPlb=''
  while(f<iNe){
    let SAV=[0,0,0];
    for (let L=0; L<LPlb; L++) {
      if (Plb[L]==LN[f][L]){SAV[0]=SAV[0]+1;}
      if (L<LPlb-1){
        if(Plb[L+1]==LN[f][L]){SAV[1]=SAV[1]+1;}
        if(Plb[L]==LN[f][L+1]){SAV[2]=SAV[2]+1;}}}
    SA=Math.max(SAV[0],SAV[1],SAV[2])/N*1.1
    if(SA>=S){
      S=SA;
      NPlb=LN[f];
    }
    f+=1;
  }
  /*----------------- +1 -------------*/
  if(LPlb<14){
    iNe=Ne[LPlb+1], f=0, N=LPlb+1;
    while(f<iNe){
      let SAV=[0,0,0,0],SA=0;
      for (let L=0; L<LPlb; L++) {
        if (Plb[L]==LNp[f][L]){SAV[0]=SAV[0]+1;}
        if (Plb[L]==LNp[f][L+1]){SAV[1]=SAV[1]+1;}
        if (L<LPlb-1){
          if(Plb[L+1]==LNp[f][L]){SAV[2]=SAV[2]+1;}
          if(Plb[L]==LNp[f][L+2]){SAV[3]=SAV[3]+1;}}
      }
      SA=Math.max(SAV[0],SAV[1],SAV[2],SAV[3])/N;
      if(SA>=S){
        S=SA;
        NPlb=LNp[f];}
      f=f+1;}}
  /*----------------- +2 -------------*/
  if(LPlb<13){
    iNe=Ne[LPlb+2], f=0, N=LPlb+2;
    while(f<iNe){
      let SAV=[0,0,0,0,0],SA=0;
      for (let L=0; L<LPlb; L++) {
        if (Plb[L]==LNpp[f][L]){SAV[0]=SAV[0]+1;}
        if (Plb[L]==LNpp[f][L+1]){SAV[1]=SAV[1]+1;}
        if (Plb[L]==LNpp[f][L+2]){SAV[2]=SAV[2]+1;}
        if (L<LPlb-1){
          if(Plb[L+1]==LNpp[f][L]){SAV[3]=SAV[3]+1;}
          if(Plb[L]==LNpp[f][L+3]){SAV[4]=SAV[4]+1;}}
      }
      SA=Math.max(SAV[0],SAV[1],SAV[2],SAV[3])/N;
      if(SA>=S){
        S=SA;
        NPlb=LNp[f];
      }f=f+1;}}
  /*----------------- -1 -------------*/
  if(LPlb>=3){
    iNe=Ne[LPlb-1]; f=0;
    while(f<iNe){
      let SAV=[0,0],SA=0;
      for (let L=0; L<LPlb-1; L++){
        if (Plb[L]==LNl[f][L]){SAV[0]=SAV[0]+1;}
        if (Plb[L+1]==LNl[f][L]){SAV[1]=SAV[1]+1;}}

      SA=Math.max(SAV[0],SAV[1])/LPlb
      if(SA>=S){
        S=SA;
        NPlb=LNp[f];
      }f=f+1;}}  
    /*----------------- -2 -------------*/
  if(LPlb>3){
    iNe=Ne[LPlb-2]; f=0;
    while(f<iNe){
      let SAV=[0,0,0],SA=0;
      for (let L=0; L<LPlb-2; L++){
        if (Plb[L]==LNll[f][L]){SAV[0]=SAV[0]+1;}
        if (Plb[L+1]==LNll[f][L]){SAV[1]=SAV[1]+1;}
        if (Plb[L+2]==LNll[f][L]){SAV[2]=SAV[2]+1;}}
      SA=Math.max(SAV[0],SAV[1],SAV[2])/LPlb
      if(SA>=S){
        S=SA;
        NPlb=LNp[f];
      }f=f+1;}}
    /*----------------------------------*/
    Plb=NPlb;
  
  return Plb;
}

function BuscaNombre(TextFBN){
  let TNombres=["Hugo","Martin","Lucas","Mateo","Leo","Daniel","Alejandro","Pablo","Manuel","Alvaro","Adrian","David","Mario","Enzo","Diego","Marcos","Izan","Javier","Marco","Alex","Bruno","Oliver","Miguel","Thiago","Antonio","Marc","Carlos","Angel","Juan","Gonzalo","Gael","Sergio","Nicolas","Dylan","Gabriel","Jorge","Jose","Adam","Liam","Eric","Samuel","Dario","Hector","Luca","Iker","Amir","Rodrigo","Saul","Victor","Francisco","Ivan","Jesus","Jaime","Aaron","Ruben","Ian","Guillermo","Erik","Mohamed","Julen","Luis","Pau","Unai","Rafael","Joel","Alberto","Pedro","Raul","Aitor","Santiago","Rayan","Pol","Nil","Noah","Jan","Asier","Fernando","Alonso","Matias","Biel","Andres","Axel","Ismael","Marti","Arnau","Imran","Luka","Ignacio","Aleix","Alan","Elias","Omar","Isaac","Youssef","Jon","Teo","Mauro","Oscar","Cristian","Leonardo","Abel","Adrian","Alejandro","Angel","Carlos","Cesar","Bruno","Daniel","Dario","David","Diego","Emilio","Fabian","Felipe","Gabriel","Hector","Hugo","Jacobo","Jaime","Joaquin","Juan","Leonardo","Leo","Lucas","Marcos","Martin","Mateo","Matias","Miguel","Nicolas","Pablo","Raul","Samuel","Santiago","Sebastian","Tomas","Tristan","Joan","Andres","Ricardo","Manuel","Ezequiel","Francisco","Elias","Blas","Alfonso","Ulises","Gerardo","Alfredo","Alvaro","Amadeo","Amancio","Antonio","Baltasar","Beltran","Benito","Rufino","Boris","Camilo","Ciro","Conrado","Donato","Florentino","Saturnino","Segundo","Anastasio","Cipriano","Teofilo","Casimiro","Bonifacio","Victorino","Eleuterio","Urbano","Severino","Inocencio","Primitivo","Bautista","Agapito","Benedicto","Enrique","Eugenio","Estanislao","Fausto","Faustino","Felipe","Felix","Fermin","Francisco","Gaspar","Genaro","Hilario","Hugo","Ignacio","Ireneo","Ismael","Joaquin","Jose","Juan","Julian","Justo","Leopoldo","Leon","Lisandro","Lorenzo","Lucas","Manuel","Mateo","Pedro","Pio","Romeo","Roque","Rufino","Santiago","Salvador","Simon","Valentin","Valentino","Vicente","Victor","Abundio","Ambrosio","Aniceto","Anselmo","Apolonio","Aquilino","Arsenio","Atanasio","Atilano","Avelino","Bartolo","Basilio","Baudilio","Benigno","Buenaventura","Calixto","Celedonio","Cirilo","Clemente","Conrado","Crisostomo","Crispin","Crispulo","Dionisio","Eliodoro","Eliseo","Emerico","Emeterio","Epifanio","Eufrasio","Eulogio","Feliciano","Florencio","Froilan","Fructuoso","Frutos","Gregorio","Gumersindo","Hermenegildo","Herminio","Higinio","Hipolito","Indalecio","Isidoro","Laureano","Leandro","Leocadio","Leovigildo","Lope","Macario","Meliton","Nemesio","Nicanor","Niceto","Nicomedes","Odon","Orencio","Pantaleon","Patricio","Perfecto","Petronilo","Policarpo","Polonio","Prudencio","Regino","Remigio","Romulo","Ruperto","Sandalio","Serapio","Servando","Silvestre","Sinforoso","Sofronio","Telesforo","Tiburcio","Toribio","Ulpiano","Valeriano","Venancio","Victoriano","Zoilo","Abdon","Abilio","Acacio","Adalberto","Adolfo","Afrodisio","Agabo","Albino","Alcibiades","Amalio","Amasvindo","Amelio","Amonario","Antelmo","Antioco","Antenor","Argimiro","Darek","Enrique","Osiel","Samuel","Adan","Azarias","Gabriel","Kerr","Oliphant","Uzziel","Noe","Abel","Abihail","A,ki,til","Alcibiades","Azai","Azubuike","Baladeva","Booz","Bricio","Emery","Everaldo","Fergal","Hipocrates","Kon","Jaaziel","Jaret","Meginhard","Michio","Obelix","Oier","Olegario","Otoniel","Ozias","Oziel","Qiang","Tyre","Aubrey","Chelem","Chinweike","Iyad","Jigme","Kanda","Meinardo","Osvaldo","Socrates","Thilo","Walter","Armando","Hariman","Fynn","Ricardo","Bernardo","Duncan","Gunther","Leo","Olegario","Odin","Ivar","Archie","Alejandro","Gerardo","Humberto","Alan","Alano","Albano","Aldahir","Allen","Alucio","Ambiorix","Arlen","Artai","Arturo","Artus","Avon","Bardo","Belenos","Belenus","Beloveso","Brayan","Brian","Brenan","Brent","Breogan","Briccio","Carataco","Casey","Cearbhall","Cedrick","Sedrik","Cernunnos","Cuchulain","Dagda","Dailin","Daly","Declan","Dilan","Diviciaco","Donaldo","Donardo","Douglas","Druso","Dugan","Eamon","Eirian","Elbio","Erwin","Esus","Fergie","Finn","Flocelo","Floyd","Gaela","Gallagher","Galvan","Gannicus","Garnik","Glen","Gordon","Gwyddyon","Herve","Idris","Inigo","Kalen","Kellan","Kelvin","Kendall","Kenneth","Kenny","Kerman","Kevin","Kilian","Lennox","Lug","Maddox","Mael","Manannan","Marvin","Melvin","Merlin","Morgan","Neil","Niall","Nelson","Nuada","Ogmios","Oscar","Ossian","Owen","Quillan","Quinn","Rafferty","Ronan","Sayer","Serbal","Sucellos","Taranis","Tristan","Viriato","Vicente","Rodrigo","Marcos","Fernando","Roberto","Carlos","Raul","Marcelo","Fermin","Cesar","Ernesto","Alexander","Mateo","Daniel","Pablo","Alvaro","Adrian","David","Diego","Javier","Mario","Sergio","Marcos","Manuel","Martin","Jorge","Ivan","Carlos","Miguel","Lucas","Santiago","Matias","Angel","Gabriel","Simon","Thiago","Valentin","Julian","Benjamin","Erick","Sasha","Dante","Enzo","Silas","Marco","Andrea","Ariel","Orfeo","Jason","Hector","Aquiles","Adonis","Apolo","Dionisio","Ulises","Hercules","Hipolito","Tristan","Zeus","Adal","Adel","Adriel","Alonso","Amaru","Asher","Azai","Basil","Bastian","Ciro","Corban","Daire","Dante","Dorian","Duncan","Egan","Einar","Elian","Emile","Endor","Ezra","Farid","Fionn","Gadiel","Gael","Goran","Guido","Hasani","Ian","Ilan","Ivar","Joel","Julian","Kadet","Kai","Karim","Kilian","Kuno","Lars","Lavi","Leonel","Lisandro","Luc","Malik","Marius","Milos","Mosi","Nadir","Naim","Normand","Oliver","Oriel","Otto","Pavel","Pax","Piero","Raziel","Rune","Sander","Sinhue","Tadeo","Teo","Tristan","Umi","Uriel","Yael","Yerik","Zaid","Adam","Agustin","Aitor","Alan","Alberto","Alejandro","Alfonso","Alfredo","Antonio","Asier","Axel","Baltasar","Bautista","Benicio","Biel","Bruno","Cesar","Cristian","Domingo","Dylan","Eduardo","Enrique","Erik","Ernesto","Fabio","Felipe","Felix","Fermin","Adal","Adrien","Aketx","Alatz","Aldan","Alec","Alessio","Andeka","Andros","Aomar","Aris","Armengol","Arnulfo","Asel","Auritz","Bayron","Bieito","Brandon","Calvin","Daren","Defin","Demian","Domingo","Dominic","Drako","Edey","Eneas","Enetz","Fabrizio","Felix","Guiem","Guiu","Gus","Hadrian","Hermes","Homero","Igor","Igotz","Ilian","Isacio","Jacques","Jael","Jano","Kerizo","Levi","Lian","Lorenzo","Luca","Maiol","Manoel","Marvin","Mateo","Matias","Maurino","Max","Maximo","Milan","Milo","Mirko","Nils","Otto","Raico","Ramos","Roman","Roque","Seneca","Thor","Xanti","Yone","Adam","Alex","Amaro","Andrea","Archie","Axel","Asher","Basil","Biel","Bran","Bruno","Ciro","Daire","Dante","Dario","Daryl","Dylan","Einar","Elian","Enzo","Erik","Ezra","Fionn","Gael","Goran","Guido","Hugo","Ian","Iker","Ilan","Ivar","Izan","Joel","Jordan","Kamal","Karim","Kenai","Kendall","Kuno","Luc","Lucas","Lavi","Leo","Leon","Liam","Mael","Malik","Marc","Marco","Martin","Milan","Mosi","Nadir","Neo","Neymar","Nil","Oliver","Oriel","Orson","Paris","Rayan","Said","Sasha","Silas","Taranis","Taylor","Teo","Theo","Thiago","Umi","Urko","Van","Viggo","Yael","Yonatan","Zaid","Zyan","Alejandro","Diego","Adrian","Alvaro","Pablo","Daniel","Giuseppe","Napoleon","Jacobo","Astor","Doug","Ren","Stimpy","Carel","Gerard","Enaut","Bittor","Victor","Hugo","Albert","Gabriel","Oscar","Bastian","Harry","Peter","Hansel","Abel","Agni","Blas","Cosme","Damian","Elio","Esau","Fidel","Gaspar","Hector","Hernan","Ivan","Jaime","Keanu","Melchor","Noe","Oto","Pio","Prakash","Brais","Iago","Anxo","Anton","Xoel","Roi","Alexandre","Xabier","Xian","Lois","Breixo","Andre","Xoan","Xavier","Xurxo","Breogan","Denis","Paulo","Nuno","Uxio","Martino","Xavi","Xose","Xabi","Xacobe","Artai","Eloi","Xan","Aldan","Cibran","Marc","Leo","Alex","Jan","Nil","Pol","Adiran","Aitor","Albin","Andoni","Ander","Antxon","Aratz","Ardaitz","Argi","Argider","Aritz","Arnaut","Artur","Asteri","Baladi","Baltz","Bazkoare","Beraun","Bernat","Bikendi","Biktor","Dabi","Dari","Dogartzi","Damen","Dunixi","Edorta","Eki","Ekaitz","Eladi","Elixi","Emiri","Endrike","Eritz","Etor","Euken","Ferran","Frantzes","Frantzisko","Ganiz","Gari","David","Amador","Harsal","Romeo","Valentin","Erasmo","Eros","Amadis","Tadeo","Paris","Amadeo","Amado","Aziz","Darrell","Daryl","Davet","Davis","Dawit","Felipe","Habib","Kelvin","Lennon","Milos","Riku","Valentiniano","Valentino","Adir","Carwyn","Can","Connolley","Krishna","Jeb","Erasmus","Milan","Tristan","Antonio","Calixto","Connor","Timoteo","Ville","Agapi","Amori","Ehud","Gaara","Mishka","Rudo","Heathcliff","Fitzwilliam","Charles","Florentino","Pedro","Armando","Robert","Felix","Ricardo","Gines","Maximo","Cesar","Alfredo","Eugenio","Blas","Gerardo","Nicolas","Aiko","Anwyl","Amias","Davi","Dilber","Gerwyn","Jaimin","Jed","Kiefer","Layden","Lowell","Luben","Navid","Raman","Sevilin","Taavi","Wilmer","Yadid","Oliver","Santiago","Rodrigo","Dorian","Holden","Alonso","Julio","Hector","Leon","Ramon","Robin","Mario","Gustavo","Jacinto","Tristan","Jack","Edward","Liesl","Henry","Wesley"]
  if(TNombres.includes(TextFBN)){
    Mnombre=TextFBN;
    console.log('SI se encuentra en lista')}
  else{console.log('NO se encuentra en lista')}
}
/* Extender a sinonimos y que la comparación por palabra sea de ida y vuelta */



  



