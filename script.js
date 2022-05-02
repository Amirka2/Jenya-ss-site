let contacts = document.getElementById("call-button");
contacts.addEventListener("click", () => {
  document.getElementById('contacts').classList.toggle("visible")
})
let auth = document.getElementById("profile");
auth.addEventListener("click", () => {
  document.getElementById('authorization').classList.toggle("visible")
})
document.getElementById('sign-up-btn').addEventListener("click", ()=> {
    document.getElementById('authorization').style.height = "254px";
    document.getElementById('sign-in').classList.toggle("hidden");
    document.getElementById('sign-up').classList.toggle("visible");
})
document.getElementById('back-btn').addEventListener("click", ()=> {
    document.getElementById('sign-in').classList.remove("hidden");
    document.getElementById('sign-up').classList.remove("visible");
})
// window.onclick = function(event) { закрытие окна при клике вне окна
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


// document.getElementById("bath").addEventListener("click", () => {
//   document.getElementById("bath_submenu").classList.toggle("visible")
// })
// document.getElementById("shower").addEventListener("click", () => {
//   document.getElementById("shower_submenu").classList.toggle("visible")
// })
// document.getElementById("bathroom_furn").addEventListener("click", () => {
//   document.getElementById("bathroom_furn_submenu").classList.toggle("visible")
// })
// document.getElementById("taps").addEventListener("click", () => {
//   document.getElementById("taps_submenu").classList.toggle("visible")
// })
// document.getElementById("sanitary_ware").addEventListener("click", () => {
//   document.getElementById("sanitary_ware_submenu").classList.toggle("visible")
// })
// document.getElementById("bathroom_accessories").addEventListener("click", () => {
//   document.getElementById("bathroom_accessories_submenu").classList.toggle("visible")
// })
// document.getElementById("towel").addEventListener("click", () => {
//   document.getElementById("towel_submenu").classList.toggle("visible")
// })
// document.getElementById("instal_system").addEventListener("click", () => {
//   document.getElementById("instal_system_submenu").classList.toggle("visible")
// })
// document.getElementById("component").addEventListener("click", () => {
//   document.getElementById("components_submenu").classList.toggle("visible")
// })
// document.getElementById("furniture_decor").addEventListener("click", () => {
//   document.getElementById("furniture_decor_submenu").classList.toggle("visible")
// })

// попытка оптимизировать код
// let liId;
// window.onload = function() {
//     document.body.onclick = function(event) {
//          t=event.target;
//          liId = t.id;
//          alert(liId);
//     }
// }
