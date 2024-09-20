let FulName = document.getElementById('fulname');
let NameErr = document.getElementById('nameerr');

let EmailBox = document.getElementById('e_mail');
let EmailErr = document.getElementById('emailerr');
let regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

let Pass_ = document.getElementById('password');
let PassErr = document.getElementById('passworderr');
let UpperC = /[a-z]/;
let LowerC = /[A-Z]/;
let NumB = /[0-9]/;
let SpaC = /[~, !, @, #, $, %, ^, &, *, (, ), _, +, =, -, {, }, [, \, |, ', ;, |, ;, ', ', :, ", ", ?, ., ,, >, <]/;
let Show_Pass = document.getElementById('showeye');
let Hide_Pass = document.getElementById('hideeye');

let Cpass_ = document.getElementById('co_password');
let CpassErr = document.getElementById('co_passworderr');
let Show_Passco = document.getElementById('showeye_co');
let Hide_Passco = document.getElementById('hideeye_co');

let gender_box1 = document.getElementById('gender1');
let gender_box2 = document.getElementById('gender2');
let g_err = document.getElementById('gendererr');

function sub() {
    if (FulName.value == '') {
        nameerr.innerHTML = 'Enter Your Name First !';
        FulName.style.border = '1px solid red';
        FulName.focus();
        return false;
    }
    else if (EmailBox.value == '') {
        EmailErr.innerHTML = 'Enter Your Email !';
        EmailBox.style.border = '1px solid red';
        EmailBox.focus();
        return false;
    }
    else if (!regex.test(EmailBox.value)) {
        EmailErr.innerHTML = 'Enter your correct email !';
        EmailBox.style.border = '1px solid red';
        EmailBox.focus();
        return false;
    }
    else if (Pass_.value == '') {
        PassErr.innerHTML = 'Enter Your Password !';
        Pass_.style.border = '1px solid red';
        Pass_.focus();
        return false;
    }
    else if (!UpperC.test(Pass_.value) || !LowerC.test(Pass_.value) || !NumB.test(Pass_.value) || !SpaC.test(Pass_.value) || Pass_.value.length < 8) {
        PassErr.innerHTML = 'Enter asdasd !';
        Pass_.style.border = '1px solid red';
        Pass_.focus();
        return false;
    }
    else if (Cpass_.value == '') {
        CpassErr.innerHTML = 'Enter Your Confirm Password !';
        Cpass_.style.border = '1px solid red';
        Cpass_.focus();
        return false;
    }
    else if (Pass_.value != Cpass_.value) {
        CpassErr.innerHTML = 'Password Cant Match !';
        Cpass_.style.border = '1px solid red';
        Cpass_.focus();
        return false;
    }
    else if (gender_box1.checked == false && gender_box2.checked == false) {
        g_err.innerHTML = 'Enter Your Gender !';
        return false;
    }
}

function showpass() {
    let x = document.getElementById('password');
    if (x.type === 'password') {
        x.type = 'Text';
        Show_Pass.style.display = 'none';
        Show_Pass.style.margin = '10px 10px';
        Hide_Pass.style.display = 'flex';
    }
    else {
        x.type = 'password';
        Hide_Pass.style.display = 'none';
        Show_Pass.style.display = 'flex';
    }
}

function conshowpass() {
    let y = document.getElementById('co_password');
    if (y.type === 'password') {
        y.type = 'Text';
        Show_Passco.style.display = 'none';
        Show_Passco.style.margin = '10px 10px';
        Hide_Passco.style.display = 'flex';
    }
    else {
        y.type = 'password';
        Hide_Passco.style.display = 'none';
        Show_Passco.style.display = 'flex';
    }
}

function errvalid() {
    if (FulName.value != '') {
        nameerr.innerHTML = '';
        FulName.style.border = '1px solid green';
    }
    if (EmailBox.value != '') {
        EmailErr.innerHTML = '';
        EmailBox.style.border = '1px solid green';
    }
    if (Pass_.value != '') {
        PassErr.innerHTML = '';
        Pass_.style.border = '1px solid green';
    }
    if (Cpass_.value != '') {
        CpassErr.innerHTML = '';
        Cpass_.style.border = '1px solid green';
    }
}

FulName.addEventListener('blur',errvalid);
EmailBox.addEventListener('blur',errvalid);
Pass_.addEventListener('blur',errvalid);
Cpass_.addEventListener('blur',errvalid);