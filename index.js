

const openModalEl = document.getElementById("open-modal");
const closeModal = document.querySelector("#close-modal");
const overlyEl = document.querySelector(".overly");
//Open Modal
openModalEl.addEventListener("click", function(){

    overlyEl.style.display = "flex";
});

//Close modal
closeModal.addEventListener("click", function(){
    overlyEl.style.display = "none";
    console.log("kire")
})