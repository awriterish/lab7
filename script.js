//AJAX and jQuery lab for CSCI340
$(document).ready(function () {
	function getPersonalInfo(){
		$.ajax({
			url:"https://get.geojs.io/v1/ip/geo.js",
			dataType:"jsonp",
			success: function(data){
				console.log(data);
				$("#ip").text(data["ip"]);
				$("#address").html(data["city"] + ", " + data["region"] + "<br>" + data["country"]);
				$("#provide").text(data["organization_name"]);
				$("#os").text(navigator.platform);
				$("#browser").text(navigator.appCodeName);
				$("#vendor").text(navigator.vendor);
			}
		});
	}
	
	$('#personal').click(getPersonalInfo);
    $('#generate').click(function () {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function (data) {
				data = data["results"][0];
                console.log(data);
				$("#portrait-pic").attr("src",data["picture"]["large"]);
				$("#firstName").text(data["name"]["first"]);
				$("#lastName").text(data["name"]["last"]);
				$("#birthday").text(new Date(data["dob"]["date"]).toLocaleDateString());
				$("#gender").text(data["gender"]);
				$("#email").text(data["email"]);
				$("#mobile").text(data["cell"]);
				$("#phone").text(data["phone"]);
				var locs = data["location"];
				$("#locs").html(locs["street"]["number"] + " " + locs["street"]["name"] + ",<br/> " + locs["city"] + ", " + locs["state"] + ",<br/> " + locs["postcode"] + ", " + locs["country"]);
				$("#national").text(data["nat"]);
				$("#uuid").text(data["login"]["uuid"]);
				$("#username").text(data["login"]["username"]);
				$("#age").text(data["registered"]["age"]);
				$("#years").text(data["registered"]["age"]==1?"year":"years");
				$("#profile").attr("src", "https://api.kwelo.com/v1/media/identicon/" + $("#email").html());
				getPersonalInfo();
            }
        });
    });
});
