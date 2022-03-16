function login()
{
	var modal = document.getElementById('myModal')
	var msg = document.getElementById('msg')
	var username = document.getElementById('username_id')
	var pwd = document.getElementById('pwd_id').value
	if(username == '' || pwd == '' )
	{
		alert('Dang nhap that bai')
		modal.style.display = 'block'
		return false
	}

function hidePopup()
{
	popupTag = document.getElementById('Modal')
	modal.style.display = "none"
	window.open('Ex2.html')
}