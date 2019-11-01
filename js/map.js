//Work locations and information to display on resume
var locations = [
	['Workiva',33.463798, -111.924503,'Instructional Designer', 'Working with subject matter experts and other Instructional Designers I build interactive e-learning courses,learning guides, and materials to support instructor led classroom environments.','https://media.licdn.com/media/p/2/000/221/046/00959d5.png'],
	['Contract Web Developer',33.306923, -111.840335,'Frontend Ninja', 'As a contract web developer I worked with business owners to create business websites for Jarhead Professionals, Miller Endodontics, EGS Solutions, and McMillan Commercial Real Estate.','images/html.jpg'],
	['Ebay Enterprise (Formerly FetchBack)',33.422444, -111.940692,'Operations Training Manager and Technical Writer', 'Working with subject matter experts, I created company knowledge base and training program. Additionally, I created internal website to store knowledge base and training courses.','https://media.licdn.com/media/p/1/000/2af/2fa/2a1784a.png'],
	['Chandler Unified School District',33.300690, -111.867613,'Science Educator','At Hamilton High School I taught Physical Science curriculum and created instructional videos, and learning applications, using Flach, Photoshop, Illustrator, HTML, CSS, and JavaScript.','http://ww2.chandler.k12.az.us/cms/lib6/AZ01001175/Centricity/Template/GlobalAssets/images///logos/district.png']
	];
//Create map using locations[] and attach to resume
var map= new google.maps.Map(document.getElementById('mapDiv'), {
	zoom: 10,
	center: new google.maps.LatLng(33.340053, -111.859627),
	mapTypeId: google.maps.MapTypeId.HYBRID
});

var infowindow = new google.maps.InfoWindow();

//iterate through locations[] and add info to infowindow.
var marker, i;
for (i=0; i < locations.length; i++) {
	marker = new google.maps.Marker({
		icon: 'images/mapPin.png',//custom marker
		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		map: map
	});

	google.maps.event.addListener(marker, 'click', (function(marker,i){
		return function() {
			infowindow.setContent('<div><h2>'+locations[i][0]+'</h2></div>'+'<img src="'+locations[i][5]+'">'+'<div><h3>'+locations[i][3]+'</h3></div>'+'<div>'+locations[i][4]+'</div>');
			infowindow.open(map, marker);
		}
	})(marker, i));
}