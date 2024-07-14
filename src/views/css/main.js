var typed = new Typed(".text", {
    strings: ["Frontend Developer", "YouTuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
  //1
  var tablinks=document.getElementsByClassNclassNameName("tab-links");
  var tabcontents=document.getElementsByClassNclassNameName("tab-contents");
  function opentab(tabname) {
      for(tablink of tablinks){
          tablink.classNameList.remove("active-link");
      }
      for(tabcontent of tabcontents){
          tabcontent.classNameList.remove("active-tab");
      }
      event.currentTarget.classNameList.add("active-link");
      document.getElementById(tabname).classNameList.add("active-tab");

  }

  //2

    const servicesList = document.getElementById('servicesList');
    const serviceBoxes = document.querySelectorAll('.service-box');
    let currentPosition = 0;

    function moveServicesList() {
        currentPosition -= 350; // Ajustez la distance selon la largeur des boîtes de service et la marge

        if (currentPosition < -(serviceBoxes.length - 1) * (350 + 20)) {
            currentPosition = 0;
        }

        servicesList.style.transform = `translateX(${currentPosition}px)`;
    }

    setInterval(moveServicesList, 3000);


