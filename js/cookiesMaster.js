function loginCookies() {
          Cookies.set('user','signed');
          location.reload();
}
function logoutCookies() {
          Cookies.remove('user');
          location.reload();
}

$( document ).ready(function() {
	console.log("Reopen page");
	$(".defaulthide").hide();
	$(".defaultshow").show();
	if (Cookies.get('user') == 'signed'){
		console.log("Show");
		$(".defaulthide").show();
		$(".defaultshow").hide();
	}
        });