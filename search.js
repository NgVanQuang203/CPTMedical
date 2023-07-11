const dataSearchListTemplate = document.querySelector(
  "[data-searchlist-template]"
);
const dataSearchListContainer = document.querySelector(
  "[data-searchlist-container]"
);
const dataLoading = document.querySelector("[data-loading]");
const searchInput = document.querySelector("[data-searchlist]");

let listItem = [];
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  dataLoading.classList.add("loading");
  const searchTimeout = setTimeout(() => {
    if (value) {
      listItem.forEach((item) => {
        const isVisible = item.name.toLowerCase().includes(value);
        dataLoading.classList.remove("loading");
        item.element.classList.toggle("searchbar-hide", !isVisible);
      });
    } else {
      listItem.forEach((item) => {
        dataLoading.classList.remove("loading");
        item.element.classList.toggle("searchbar-hide", true);
      });
    }
  }, 1000);
});

const searchList = [
  {
    name: "POLYGLACTIN 910 ANTIBACTERIAL – Chỉ phẫu thuật kháng khuẩn",
    imgSrc: "../img/CARESORB-PLUS-POLYGLACTIN-910-CPT-SUTURES.jpg",
    link: "../chi-phau-thuat-tu-tieu/caresorb-plus-polyglactin-910.html",
    infoDescription:
      "Đa sợi tan trung bình, giữ vết khâu: 30 ngày, tan hoàn toàn: 56 -70 ngày.",
  },
  {
    name: "POLYGLACTIN 910 (R)",
    imgSrc: "../img/CARESORB-RAPID-POLYGLACTIN-910-CPT-SUTURES-2.jpg",
    link: "../chi-phau-thuat-tu-tieu/polyglactin910R.html",
    infoDescription:
      "Đa sợi tan nhanh, giữ vết khâu: 7-10 ngày, tan hoàn toàn trong vòng 42 ngày.",
  },
  {
    name: "POLYGLACTIN 910 (CHỈ VICRYL)",
    imgSrc: "../img/CARESORB-POLYGLACTIN-910-CPT-SUTURES.jpg",
    link: "../chi-phau-thuat-tu-tieu/polyglactin910.html",
    infoDescription:
      "Đa sợi tan trung bình, giữ vết khâu: 30 ngày, tan hoàn toàn: 56 -70 ngày.",
  },
  {
    name: "POLYGLACTIN 910",
    imgSrc:
      "../img/CARESORB-POLYGLACTIN-910-CPT-SUTURES-Chi-khau-mat-800x512.jpg",
    link: "../chi-phau-thuat-mat/mat-caresorb-polyglactin-910.html",
    infoDescription:
      "Đa sợi tan trung bình, giữ vết khâu: 30 ngày, tan hoàn toàn: 56 -70 ngày.",
  },
  {
    name: "POLYGLECAPRONE 25",
    imgSrc: "../img/PROTISORB-POLYDIOXANONE-CPT-SUTURES.jpg",
    link: "../chi-phau-thuat-tu-tieu/Polyglecaprone25.html",
    infoDescription:
      "Đa sợi tan trung bình, giữ vết khâu: 30 ngày, tan hoàn toàn: 56 -70 ngày.",
  },
  {
    name: "POLYDIOXANONE (CHỈ PDS, PDO)",
    imgSrc: "../img/TRUSTISORB-POLYGLECAPRONE-25-CPT-SUTURES-2.jpg",
    link: "../chi-phau-thuat-tu-tieu/Polydioxanone.html",
    infoDescription:
      "Đơn sợi tan chậm, giữ vết khâu: 60-90 ngày, tan hoàn toàn: 180- 210 ngày.",
  },
  {
    name: "PLAIN CATGUT",
    imgSrc: "../img/TRUSTIGUT-N-PLAIN-CATGUT-CPT-SUTURES-1-768x490.jpg",
    link: "../chi-phau-thuat-tu-tieu/PlainCatgut.html",
    infoDescription:
      "Đơn sợi tan nhanh, giữ vết khâu 7-10 ngày, tan hoàn toàn trong vòng 70 ngày.",
  },
  {
    name: "POLYPROPYLENE | CHỈ PROLENE",
    imgSrc: "../img/TRUSTILENE-POLYPROPYLENE-CPT-SUTURES-768x490.jpg",
    link: "../chi-phau-thuat-khong-tieu/trustilene-polypropylene.html",
    infoDescription:
      "Đơn sợi, sử dụng để khâu, nối các mô mềm bao gồm trong phẫu thuật tim mạch, mắt, ngoại thần kinh…",
  },
  {
    name: "POLYPROPYLENE",
    imgSrc:
      "../img/TRUSTILENE-POLYPROPYLENE-CPT-SUTURES-chi-khau-mat-800x512.jpg",
    link: "../chi-phau-thuat-mat/mat-trustilene-polypropylene.html",
    infoDescription:
      "Đơn sợi, sử dụng để khâu, nối các mô mềm bao gồm trong phẫu thuật tim mạch, mắt, ngoại thần kinh…",
  },
  {
    name: "POLYESTER",
    imgSrc: "../img/PROTIBOND-POLYESTER-BOX-CPT-SUTURES-768x490.jpg",
    link: "../chi-phau-thuat-mat/mat-protibond-polyester.html",
    infoDescription:
      "Đa sợi, sử dụng để khâu, nối các mô mềm bao gồm trong phẫu thuật tim mạch, mắt, ngoại thần kinh, làm chỉ buộc…",
  },
  {
    name: "VẬT LIỆU CẦM MÁU CARECEL®",
    imgSrc: "../img/Vat-lieu-cam-mau-CPT-sutures-338x169.jpg",
    link: "../cac-vat-tu-y-te/vat-lieu-cam-mau-carecel.html",
    infoDescription:
      "Vật liệu cầm máu tự tiêu được làm từ Cellulose tái tạo oxi hóa, hỗ trợ cầm máu mao mạch, tĩnh mạch và động mạch nhỏ",
  },
  {
    name: "LƯỠI DAO MỔ",
    imgSrc: "../img/Luoi-dao-mo-CPT-1-338x169.jpg",
    link: "../cac-vat-tu-y-te/luoi-dao-mo-cpt.html",
    infoDescription:
      "Lưỡi dao mổ hay lưỡi dao phẫu thuật vô trùng được làm từ thép carbon (Carbon Steel) hoặc thép không gỉ (Stainless Steel). ",
  },
  {
    name: "LƯỚI THOÁT VỊ TRUSTILENE® MESH",
    imgSrc: "../img/medical-3-338x216.png",
    link: "../cac-vat-tu-y-te/luoi-thoat-vi-trustilene-mesh.html",
    infoDescription: "Mảnh ghép nhân tạo, lưới điều trị thoát vị polypropylene",
  },
  {
    name: "KIM PHẪU THUẬT XTRACOAT®",
    imgSrc: "../img/medical-2-338x216.png",
    link: "../cac-vat-tu-y-te/kim-phau-thuat-xtracoat.html",
    infoDescription:
      "Kim khâu y tế được làm từ hợp kim thép Series 300 chắc khỏe, có khả năng đàn hồi chống cong gãy, thân kim chống xoay khi kẹp kim giúp phẫu thuật viên thao tác dễ dàng.",
  },
];
listItem = searchList.map(function (item) {
  const itemhtml = dataSearchListTemplate.content.cloneNode(true).children[0];
  const infoTitle = itemhtml.querySelector("[data-infoTitle]");
  const infoDesc = itemhtml.querySelector("[data-infoDesc]");
  const infoImgSrc = itemhtml.querySelector("[data-infoImgSrc]");
  const infoLink = itemhtml.querySelector("#info-Link");
  const infoLinks = itemhtml.querySelector(".info-Link");
  infoTitle.textContent = item.name;
  infoDesc.textContent = item.infoDescription;
  infoImgSrc.src = item.imgSrc;
  infoLink.href = item.link;
  infoLinks.href = item.link;
  dataSearchListContainer.append(itemhtml);
  return { name: item.name, element: itemhtml };
});
