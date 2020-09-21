function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
}
let onload = (evt) => {
     document.getElementById('London').style.display = "block";
    let signup = document.getElementById('defaultActive');
    signup.className += ' active';
}






function facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {

            var token = result.credential.accessToken;

            var user = result.user;
            console.log(user)
            localStorage.setItem('dispName', user.displayName);

            localStorage.setItem('dispImage', user.photoURL);
            console.log(localStorage.getItem('dispImage'))
            window.location.replace("js/chatApp.html")
            // window.history.back()
            // window.history.go(-1)

        }).catch(function (error) {
            console.log(error.message);
        });
}





let sendBtn = document.querySelector('#sendBtn');


function sendMsg() {
    let chatBox = document.querySelector('#chatBox');
    let msgObj = {
        sender: localStorage.getItem('dispName'),
        msg: chatBox.value,
        DPimg: localStorage.getItem('dispImage')
    }
    firebase.database().ref('messages').push(msgObj)
    console.log(msgObj.DPimg)
    chatBox.value = ''

}

let showMsg = () => {
    firebase.database().ref('messages').on('child_added', function (data) {
        let chatWindow = document.querySelector('#chatWindow');
        let msgDiv = document.createElement('div');
        let chat = document.createElement('p');
        var userImg = document.createElement('img')
        if (data.val().sender == localStorage.getItem('dispName')) {
            msgDiv.classList.add('content-right');
            chat.classList.add('rightMsg');
            userImg.classList.add('rightImg')
            console.log(localStorage.getItem('dispImage'))
            userImg.setAttribute('src', localStorage.getItem('dispImage'))
            var chatMsg = document.createTextNode(`${data.val().msg}`)
            chatWindow.appendChild(msgDiv);
            msgDiv.appendChild(chat)
            chat.appendChild(chatMsg)
            msgDiv.appendChild(userImg)
        }
        else {
            msgDiv.classList.add('content-left');
            userImg.classList.add('leftImg')
            chat.classList.add('leftMsg');
            userImg.setAttribute('src', data.val().DPimg)
            console.log(data.val().DPimg)
            chatMsg = document.createTextNode(`${data.val().sender}: ${data.val().msg}`);
            chatWindow.appendChild(msgDiv);
            msgDiv.appendChild(userImg)
            msgDiv.appendChild(chat)
            chat.appendChild(chatMsg)

        }
        msgDiv.setAttribute('id', 'msgDiv');

    })
}

showMsg()


let deleteAll = () => {
    firebase.database().ref('messages').remove();
    document.querySelector('#chatWindow').innerHTML = ""
}

const signOut = (e) => {
    firebase.auth().signOut()
        .then(function (provider) {
            // Sign-out successful.

            window.location.replace('../index.html');

        })
        .catch(function (error) {
            // An error happened.
            console.log(error)
        });
}
// function preventBack() { window.history.forward(); }

// setTimeout("preventBack()", 0);
// window.onunload = function () { null };


window.onkeydown = function (e) {
    if (e.keyCode == 13) {
        sendMsg();
    }
    console.log(e.keyCode)
}