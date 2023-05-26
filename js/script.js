'use strict';

//------get element--------
const userInfor = document.querySelector('#personal-info .info');
// ----get element for control submit submitBtn

const submitControl = document.querySelector('#personal-info .submit-email');

const titleName = document.querySelectorAll('.name-icon');
const jobInfo = document.querySelectorAll('.job-info-detail');
const viewBtn = document.querySelectorAll('.view-button');

console.log(viewBtn);
// -----get paragrap error
const errorPar = document.getElementById('error');

// let hover;
// let viewHover;
// userInfor.classList.add('display-none'); vì các phần tử là object nên ko dùng được phải dùng forEach
jobInfo.forEach(infor => {
  infor.classList.add('display-none');
});
errorPar.innerHTML = 'Hãy nhập vào email để xác thực';
// -----mouse pointer effect

titleName.forEach(function (element) {
  // console.log(element);
  const clickEvent = element.parentElement;
  element.addEventListener('click', function () {
    // clickEvent.classList.remove('display-none');
    const clicked = clickEvent.querySelector('.job-info-detail');
    clicked.classList.toggle('display-none');
    console.log(clicked);

    // clicked.removeEventListener('mousemove', mouseHover());
    // const checkClicked = clicked.classList.contains('display-none');

    //--------- need repair-------
    // console.log(checkClicked);
    // if (!checkClicked) {
    //   console.log(viewHover);
    // }
    //-----------------------------------------------------------
    // jobInfo.forEach(infor => {
    //   infor.classList.remove('display-none');
    // });
  });
});
// -----set view less btn
// function closeJobDetails(element) {
//   element = document.querySelector('.view-less-button');
//   console.log(element);
// }
//------end-----
function submitBtn() {
  //-----get input email value

  const emailValue = document
    .getElementById('personal-email')
    .value.toLocaleLowerCase();
  //----- email is true or false
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const check = emailValue.match(regex);
  if (check) {
    //------ disappear submit form
    submitControl.classList.add('display-none');
    // -----disappear userinfo, job infor, viewmore btn
    userInfor.classList.remove('display-none');
    jobInfo.forEach(infor => {
      infor.classList.remove('display-none');
    });
  } else {
    errorPar.classList.add('error-email');
    errorPar.innerHTML = 'Error. Please enter the correct email';
    document.getElementById('personal-email').value = ' ';
  }
}
document.querySelector('.submit').addEventListener('click', submitBtn);
