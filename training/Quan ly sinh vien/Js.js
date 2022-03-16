var resultTag = document.getElementById('result')
var List = []

function saveData(){
	var userName = document.getElementById('username_id').value
	var fullName = document.getElementById('fullname_id').value
	var email = document.getElementById('email_id').value
	var birthday = document.getElementById('birthday_id').value

	var std = {
		'username' : userName,
		'fullname' : fullName,
		'email' : email,
		'birthday' : birthday
	}
	List.push(std)
	showData()

	return false
}
function showData()
{
	resultTag.innerHTML = ''
	var index = 0
	
	for(std of List)
	{
		resultTag.innerHTML += 
			`
			<tr>
					<td>${index+1}</td>
					<td>${std.username}</td>
					<td>${std.fullname}</td>
					<td>${std.email}</td>
					<td>${std.birthday}</td>
					<td  style="text-align: center border = NONE">
						<button class="btn-warning" type="edit" onclick="editData(${index})">Edit</button>
					</td>
					<td  style="text-align: center">  
						<button style="background-color: red;" type='Delete' onclick="deleteData(${index})">Delete</button>
					</td>
			</tr>
			`
			index++
	}	
}

function deleteData(index) {
	console.log(index)
	List.splice(index, 1)
	
	showData()
}

function editData(index){
	
}