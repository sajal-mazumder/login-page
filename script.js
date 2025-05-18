

function showSection(params) {

   const elements = document.querySelectorAll(".main_content > div")

   elements.forEach(data =>{
      data.classList.add('hiden')
   })

   var w = document.getElementById(params + 'Section').classList.remove('hiden') 
}
// showSection()
// console.log(w);


// 60 class


const schoolName = document.getElementById("school_name");
const sideSchoolName = document.getElementById("sideSchool_name");
const sideSlogan = document.getElementById("side_slogan");

window.onload = () =>{
    const schoolSetting = JSON.parse(localStorage.getItem("schoolSetting"))
    // console.log(schoolSetting);

    if (schoolSetting) {
        schoolName.innerHTML = schoolSetting.schoolName
        sideSchoolName.innerHTML = schoolSetting.sideSchoolName
        sideSlogan.innerHTML = schoolSetting.sideSlogan
    }
    else{
        schoolName.innerHTML = "Our School"
        sideSchoolName.innerHTML = "Our School"
        sideSlogan.innerHTML = " Read by the name of God"
    }

    const schoolSettings = document.getElementById("schoolSettings");

    schoolSettings.addEventListener("submit", (e) =>{
        e.preventDefault()
        // console.log(e);

        const inputSchoolName = document.getElementById("inputSchoolName").value;
        const schoolSlogan = document.getElementById("schoolSlogan").value;
        const logourl = document.getElementById("logourl").value;
        
        const setData = {
            schoolName: inputSchoolName,
            sideSchoolName: inputSchoolName,
            sideSlogan: schoolSlogan,
            logourl: logourl
        };

        localStorage.setItem("schoolSetting", JSON.stringify(setData));

        schoolName.innerHTML = inputSchoolName;
        sideSchoolName.innerHTML = inputSchoolName;
        sideSlogan.innerHTML = schoolSlogan;
    })
}


// notice section

const noticesList = document.getElementById('noticesList');
const noticeForm = document.getElementById('noticeForm')

window.addEventListener("DOMContentLoaded", () =>{
    renderNotices()
})

noticeForm.addEventListener("submit", (e)=>{
    e.preventDefault();
 
    const noticeTitle = document.getElementById("noticeTitle").value;
    const noticeContent = document.getElementById("noticeContent").value;

    const newNotice = {
        id: Date.now(),
        title : noticeTitle,
        content : noticeContent
    }
    // console.log(newNotice);

    const existingNotices = JSON.parse(localStorage.getItem("schoolNotices")) || [];
    existingNotices.unshift(newNotice);

    localStorage.setItem("schoolNotices", JSON.stringify(existingNotices))
    
    noticeForm.reset()
    renderNotices()
});

function renderNotices(params) {
    const savedNotice = JSON.parse(localStorage.getItem("schoolNotices")) || [];

    // console.log(savedNotice);
    
    if (savedNotice.length === 0) {
        noticesList.innerHTML = `<p> No Notice found </p>`
    }

    savedNotice.forEach(element => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("notice_item");

        newDiv.innerHTML = `
        <h3>${element.title}</h3>
        <p>${element.content}</p>
        <h5>Date: 10 / 05 / 2025</h5>
        `
        noticesList.appendChild(newDiv)
    });
}

