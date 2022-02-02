/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */


connect();

async function connect() {
    const urlQlikServer = "https://o5dutazfoot4fll.eu.qlikcloud.com/";
    const urlLoggedIn = "/api/v1/audits";//Use GET request to see if you are authenticated
    const urlLogin = "/login";
    const webIntegrationId = 'KmQJ1AwNW5iIwJPy4dmZyVUW7pkB0GmU';

    //Check to see if logged in
    return await fetch(`${urlQlikServer}${urlLoggedIn}`, {
        credentials: 'include',
        headers: {
            'Qlik-Web-Integration-ID':webIntegrationId
        }
    })
    .then(async function(response)
    {
        //check if user is authenticated; if not, redirect to login page
		if(response.status===401){
            const url = new URL(`${urlQlikServer}/login`);
            url.searchParams.append('returnto', 'http://localhost/ThomasMoreTutorial/TM_Tutorial.html');
            url.searchParams.append('qlik-web-integration-id', webIntegrationId);
            window.location.href = url;
        }
    })
    .catch(function(error)
    {
        console.error(error);
    });
}

var config1 = {
    host: "o5dutazfoot4fll.eu.qlikcloud.com", //the address of your Qlik Engine Instance
    prefix: "/", //or the virtual proxy to be used. for example "/anonymous/"
    port: 443, //or the port to be used if different from the default port
    isSecure: true, //should be true if connecting over HTTPS
    webIntegrationId: 'KmQJ1AwNW5iIwJPy4dmZyVUW7pkB0GmU' //only needed in SaaS editions and QSEoK
};

require.config( {
    baseUrl: (config1.isSecure ? "https://" : "http://" ) + config1.host + (config1.port ? ":" + config1.port : "") + config1.prefix + "resources",
    webIntegrationId: config1.webIntegrationId
} );

require( ["js/qlik"], function ( qlik ) {

	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//open apps -- inserted here --
	var app = qlik.openApp("ea06d410-c29e-4387-a5f1-1c7894729873", config1);

	//get objects -- inserted here --
    //Home
    app.getObject('QV02', 'LPPzcZv');

    //Overview
    //app.getObject('QV06', '65fae2b4-ead7-43a2-a9a6-43c988a0ee58');
    app.getObject('QV03', 'MfmmHNe');
    app.getObject('QV04', 'UQPPH');
    app.getObject('QV05', 'bmuauF');

    //Indoor
    app.getObject('QV07', 'mjtFT');
    app.getObject('QV08', 'jHdmB');
    app.getObject('QV09', 'Wemnnj');
    app.getObject('QV010', 'rHAfCRN');
    app.getObject('QV019', 'AYvjHMM');

    app.getObject('QV011', 'aPswBg');
    app.getObject('QV012', 'xxge');
    app.getObject('QV013', 'ecphR');
    app.getObject('QV014', 'ZKAeGQ');
    app.getObject('QV015', 'gXBKrq');

    app.getObject('QV016', 'VLLFGNJ');
    app.getObject('QV017', 'ZPZjCgx');
    app.getObject('QV018', 'AYXsz');



    //OUTDOOR

    app.getObject('QV020', 'c18c3ad6-49f7-43f3-9463-97f1a61f3164');
    app.getObject('QV021', '6015b6a4-a15b-4d34-8eed-1cc4092bf4e0');
    app.getObject('QV022', '0591365a-bb7d-48ff-98e7-462e38eb6d86');
    app.getObject('QV023', '83c5cb88-58ed-41e9-8d34-2f60fe857b7c');

    app.getObject('QV024', 'cKwvYK');
    app.getObject('QV025', 'JRSSY');

    app.getObject('QV026', 'ZKsUjpp');
    app.getObject('QV027', 'vKSxV');

    app.getObject('QV028', 'PxTtHVY');


    //PLANT
    app.getObject('QV030', 'b1de33fa-57b4-434e-b167-8ae70460600c');
    app.getObject('QV031', 'EHLmEJ');

    app.getObject('QV032', 'WpHshPW');
    app.getObject('QV033', 'mVPXucZ');

    app.getObject('QV034', 'MLhjA');
    app.getObject('QV035', 'EDCAmF');

    app.getObject('QV036', 'NSEyjsR');

    app.getObject('QV037', 'mYWbzss');
    app.getObject('QV038', 'KkZVxU');






    var Imgsettings = {format: 'png', height: 300, width: 800 };
	var settings = { documentSize: 'a4', aspectRatio: 2, orientation: "landscape" }

        app.visualization.get('jHdmB').then(function(vis){
		vis.exportImg(Imgsettings).then(function (result) {
		console.log('PDF download link: ', result);
		});
		});

	$("#ClearAll").click(function() {
	app.clearAll();
      });

} );


