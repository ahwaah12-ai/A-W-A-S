function Darkandwhitemode() {
  let header = document.getElementById("header");

  let bottom1 = document.getElementById("darkmode");

  let buttom2 = document.getElementById("color");

  header.classList.toggle("darkorlightmode")

  bottom1.classList.toggle("body");

  buttom2.classList.toggle("color");

}




// let buttom = document.getElementById("darkmode")
// buttom.addEventListener("click" ,Darkandwhitemode )





// let form = document.getElementById("searchBtn");
// let input = document.getElementById("searchInput");

// form.addEventListener("submit", function(e) {
//     e.preventDefault(); // منع الريلود

//     let term = input.value.trim().toLowerCase();
//     if (term === "") return;

//     // امسح أي هايلايت قديم
//     document.querySelectorAll(".highlight").forEach(el => {
//         el.outerHTML = el.innerText;
//     });

//     let found = false;

//     // نمسك كل النصوص في الصفحة
//     let walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

//     while (walker.nextNode()) {
//         let node = walker.currentNode;
//         let text = node.nodeValue.toLowerCase();

//         if (text.includes(term)) {
//           alert("This Word Are highlight naw")
//             found = true;

//             let newHTML = node.nodeValue.replace(
//                 new RegExp(term, "gi"),
//                 match => `<span class="highlight">${match}</span>`
//             );

//             let span = document.createElement("span");
//             span.innerHTML = newHTML;
//             node.parentNode.replaceChild(span, node);
//         }
//     }

//     if (!found) {
//         alert(`
//                    No results found! ❤️ `);
//     }
// });


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => {
        el.classList.add("reveal"); // إضافة كلاس البداية
        observer.observe(el);
    });
});














let darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");

    // تغيير نص الزرار
    if (document.body.classList.contains("dark-mode")) {
        darkBtn.textContent = "Light Mode";
    } else {
        darkBtn.textContent = "Dark Mode";
    }
});
