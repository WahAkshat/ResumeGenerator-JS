
function AddNewWE(){

    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");    
    newNode.classList.add("weField");  
    newNode.classList.add("mt-3");   
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("maxlength", 150);
    newNode.setAttribute("placeholder", "Enter Work Experience");

    let weob = document.getElementById("we"); 
    let weAddButtonob = document.getElementById("weAddButton");
    
 weob.insertBefore(newNode, weAddButtonob);
    
}

function AddNewAQ(){

    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");    
    newNode.classList.add("aqField");  
    newNode.classList.add("mt-3");   
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("maxlength", 150);
    newNode.setAttribute("placeholder", "Enter Academic Qualification");

    let aqob = document.getElementById("aq"); 
    let aqAddButtonob = document.getElementById("aqAddButton");
    
 aqob.insertBefore(newNode, aqAddButtonob);

}

function generateR(){
    // console.log("CV generated!");

    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');

    nameT1.innerHTML = nameField;

    document.getElementById('nameT2').innerHTML = document.getElementById('nameField').value;
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

    var link = document.getElementById("fbT");
            link.getAttribute("href");
            link.setAttribute("href",
            document.getElementById('facebookField').value);
            link.textContent = document.getElementById('facebookField').value;
    var link2 = document.getElementById("instaT");
            link2.getAttribute("href");
            link2.setAttribute("href",
            document.getElementById('instaField').value);
            link2.textContent = document.getElementById('instaField').value;
    var link3 = document.getElementById("linkedT");
            link3.getAttribute("href");
            link3.setAttribute("href",
            document.getElementById('linkedinField').value);
            link3.textContent = document.getElementById('linkedinField').value;

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;
    
    // Work experience

    let wes = document.getElementsByClassName('weField');

    let str ='';

    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById('weT').innerHTML = str;

    // aq

    let aqs = document.getElementsByClassName('aqField');

    let str1 ='';

    for(let e of aqs){
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML = str1;

    // Now image
    let file =   document.getElementById('imgField').files[0];

    let reader = new FileReader();

    reader.readAsDataURL(file);

    // set iamge to template

    reader.onloadend = function(){
        document.getElementById('imgT').src=reader.result;
    }   

    document.getElementById('cv-form').style.display = "none";
    document.getElementById('cv-template').style.display = "block";
}

function addScript(url) {
    var script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = url;
    document.head.appendChild(script);
}

function printR(){

    // window.print();

    // alert("Processing... Press OK and wait")

    addScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');

    // html2pdf(document.body);

    var element = document.getElementById('CV');
    var opt = {
    margin:  0,
    filename:     document.getElementById('nameField').value+'_Resume.pdf',
    image:        { type: 'jpeg/png', quality: 0.98 },
    pageBreak: { mode: 'css', before:'#nextpage1'},
    html2canvas:  { scale: 3 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();
    }









