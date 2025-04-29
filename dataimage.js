// DataImage.js

const comboItems = [
    {
        img: "images/Combo/Combo1.jpg",
        title: "Combo 1 - Nhóm 2 Người",
        desc: "1 Pizza bất kỳ tuỳ chọn trong menu + 1 phần gà lạc phô mai cay + 2 phần nước ngọt. Thêm 10.000đ để đổi thành pizza đặc biệt. Thêm 10.000đ/ly để đổi thành trà đào",
        price: 119000,
        id: "combo1"
    },
    {
        img: "images/Combo/Combo2.jpg",
        title: "Combo 2 - Nhóm 3-4 Người",
        desc: "1 Pizza bất kỳ tuỳ chọn trong menu + 3 phần nước ngọt. Thêm 10.000đ để đổi thành pizza đặc biệt. Thêm 10.000đ/ly để đổi thành trà đào",
        price: 179000,
        id: "combo2"
    },
    {
        img: "images/Combo/Combo3.jpg",
        title: "Combo 3 - Nhóm 4-6 Người",
        desc: "2 Pizza bất kỳ tuỳ chọn trong menu + 1 phần khoai tây chiên + 4 phần nước ngọt. Thêm 10.000đ để đổi thành pizza đặc biệt. Thêm 10.000đ/ly để đổi thành trà đào",
        price: 229000,
        id: "combo3"
    },
    {
        img: "images/Combo/Combo4.jpg",
        title: "Combo 4 - Nhóm 2 Người",
        desc: "1 Pizza bất kỳ tuỳ chọn trong menu + 2 phần nước ngọt. Thêm 10.000đ để đổi thành pizza đặc biệt. Thêm 10.000đ/ly để đổi thành trà đào",
        price: 139000,
        id: "combo4"
    },
    {
        img: "images/Combo/Combo5.jpg",
        title: "Combo 5 - Nhóm 4-6 Người",
        desc: "1 Pizza bất kỳ tuỳ chọn trong menu + 1 phần salad cá ngừ + 2 mì Ý + 4 phần nước ngọt. Thêm 10.000đ để đổi thành pizza đặc biệt. Thêm 10.000đ/ly để đổi thành trà đào",
        price: 229000,
        id: "combo5"
    },
    {
        img: "images/Combo/Combo6.jpg",
        title: "Combo 6 - Nhóm 2 Người",
        desc: "1 Pizza bất kỳ tuỳ chọn trong menu + 1 phần salad cá ngừ + 1 mì Ý. Thêm 10.000đ để đổi thành pizza đặc biệt. Thêm 10.000đ/ly để đổi thành trà đào",
        price: 159000,
        id: "combo6"
    },
    {
        img: "images/Combo/Combo7.jpg",
        title: "Combo 7 - 1 Người",
        desc: "1 Pizza size S bất kỳ + 1 phần nước ngọt. Thêm 10.000đ/ly để đổi thành trà đào",
        price: 45000,
        id: "combo7"
    },
    {
        img: "images/Combo/Combo8.jpg",
        title: "Combo 8 - 1 Người",
        desc: "1 Pizza size S bất kỳ + 1 phần khoai tây chiên. Thêm 10.000đ/ly để đổi thành trà đào",
        price: 59000,
        id: "combo8"
    }
];

const mainDishes = [
    // Pizza Truyền Thống
    {
        img: "images/MainDishes/Bo.jpg",
        title: "Pizza Bò",
        desc: "Pizza với thịt bò xay và phô mai",
        price: { S: 39000, L: 89000 },
        id: "m1"
    },
    {
        img: "images/MainDishes/PhoMai.jpg",
        title: "Pizza Phô Mai",
        desc: "Pizza với lớp phô mai tan chảy",
        price: { S: 39000, L: 89000 },
        id: "m2"
    },
    {
        img: "images/MainDishes/GaTeriyaki.jpg",
        title: "Pizza Gà Teriyaki",
        desc: "Pizza với gà sốt teriyaki và phô mai",
        price: { S: 39000, L: 89000 },
        id: "m3"
    },
    {
        img: "images/MainDishes/HaiSan.jpg",
        title: "Pizza Hải Sản",
        desc: "Pizza với hải sản tươi ngon và phô mai",
        price: { L: 89000, "x2 Phô Mai": 20000 },
        id: "m4"
    },
    {
        img: "images/MainDishes/XucXichHeo.jpg",
        title: "Pizza Xúc Xích Heo",
        desc: "Pizza với xúc xích heo và phô mai",
        price: { S: 39000, L: 89000 },
        id: "m5"
    },
    {
        img: "images/MainDishes/PizzaNamRauCu.jpg",
        title: "Pizza Nấm Rau Củ",
        desc: "Pizza với nấm và rau củ tươi",
        price: { L: 89000 },
        id: "m6"
    },
    {
        img: "images/MainDishes/XucXichDuc.jpg",
        title: "Pizza Xúc Xích Đức",
        desc: "Pizza với xúc xích Đức và phô mai",
        price: { L: 89000 },
        id: "m7"
    },
    {
        img: "images/MainDishes/CaNgu.jpg",
        title: "Pizza Cá Ngừ",
        desc: "Pizza với cá ngừ và phô mai",
        price: { S: 39000, L: 89000 },
        id: "m8"
    },
    {
        img: "images/MainDishes/BapSuongKkoi.jpg",
        title: "Pizza Bắp Sườn Khói",
        desc: "Pizza với bắp và sườn khói",
        price: { S: 39000, L: 89000 },
        id: "m9"
    },
    // Pizza Đặc Biệt
    {
        img: "images/MainDishes/Salami.jpg",
        title: "Pizza Salami",
        desc: "Pizza với salami và phô mai",
        price: { L: 109000 },
        id: "m10"
    },
    {
        img: "images/MainDishes/PhoMaiTuoi.jpg",
        title: "Pizza Phô Mai Tươi",
        desc: "Pizza với phô mai tươi và lớp đế mềm",
        price: { L: 999000 },
        id: "m11"
    },
    {
        img: "images/MainDishes/MeatLovers.jpg",
        title: "Pizza Meat Lover's",
        desc: "Pizza với nhiều loại thịt và phô mai",
        price: { L: 109000, "x2 Phô Mai": 20000 },
        id: "m12"
    },
    {
        img: "images/MainDishes/TomThanhCua.jpg",
        title: "Pizza Tôm Thanh Cua",
        desc: "Pizza với tôm và thanh cua",
        price: { L: 99000, "x2 Phô Mai": 20000 },
        id: "m13"
    },
    {
        img: "images/MainDishes/KhoGaLapXuong.jpg",
        title: "Pizza Khô Gà - Lạp Xưởng",
        desc: "Pizza với khô gà và lạp xưởng",
        price: { L: 99000 },
        id: "m14"
    },
    {
        img: "images/MainDishes/ThapCam.jpg",
        title: "Pizza Thập Cẩm",
        desc: "Pizza với nhiều loại topping hỗn hợp",
        price: { L: 109000, "x2 Phô Mai": 20000 },
        id: "m15"
    },
    {
        img: "images/MainDishes/BoSotCay.jpg",
        title: "Pizza Bò Sốt Cay",
        desc: "Pizza với bò sốt cay đặc biệt",
        price: { L: 109000 },
        id: "m16"
    },
    {
        img: "images/MainDishes/HaiSanDacBiet.jpg",
        title: "Pizza Hải Sản Đặc Biệt",
        desc: "Pizza với hải sản cao cấp và phô mai",
        price: { L: 99000, "x2 Phô Mai": 20000 },
        id: "m17"
    }
];

const sideDishes = [
    {
        img: "images/Snacks/GaSotCay.jpg",
        title: "Gà Sốt Cay",
        desc: "Gà chiên giòn với sốt cay",
        price: 29000,
        id: "s1"
    },
    {
        img: "images/Snacks/KhoaiTayChien.jpg",
        title: "Khoai Tây Chiên",
        desc: "Khoai tây chiên giòn rụm",
        price: 15000,
        id: "s2"
    },
    {
        img: "images/Snacks/TokLacPhoMai.jpg",
        title: "Tok Lắc Phô Mai",
        desc: "Bánh gạo Hàn Quốc với phô mai",
        price: 15000,
        id: "s3"
    },
    {
        img: "images/Snacks/BanhMiBoToi.jpg",
        title: "Bánh Mì Bơ Tỏi",
        desc: "Bánh mì nướng với bơ tỏi thơm",
        price: 15000,
        id: "s4"
    },
    {
        img: "images/Snacks/GaLacPhoMaiCay.jpg",
        title: "Gà Lắc Phô Mai Cay",
        desc: "Gà chiên với phô mai cay",
        price: { "25K": 25000, "45K": 45000 },
        id: "s5"
    },
    {
        img: "images/Snacks/GaRanChienGion.jpg",
        title: "Gà Rán Chiên Giòn",
        desc: "Gà rán giòn rụm",
        price: { "25K": 25000, "30K": 30000 },
        id: "s6"
    },
    {
        img: "images/Snacks/MiYdutLo.jpg",
        title: "Mì Ý Đút Lò",
        desc: "Mì Ý nướng với sốt bò bằm",
        price: 59000,
        id: "s7"
    },
    {
        img: "images/Snacks/MiYSotBoBam.jpg",
        title: "Mì Ý Sốt Bò Bằm",
        desc: "Mì Ý với sốt bò bằm đậm đà",
        price: 39000,
        id: "s8"
    },
    {
        img: "images/Snacks/BapPhoMai.jpg",
        title: "Bắp Phô Mai",
        desc: "Bắp trộn phô mai béo ngậy",
        price: 29000,
        id: "s9"
    },
    {
        img: "images/Snacks/SaladCaNgu.jpg",
        title: "Salad Cá Ngừ",
        desc: "Salad với cá ngừ và sốt",
        price: 39000,
        id: "s10"
    },
    {
        img: "images/Snacks/SaladDauGiam.jpg",
        title: "Salad Dầu Giấm",
        desc: "Salad với dầu giấm tươi mát",
        price: 29000,
        id: "s11"
    },
    {
        img: "images/Snacks/BanhMiPhoMai.jpg",
        title: "Bánh Mì Phô Mai",
        desc: "Bánh mì nướng với phô mai tan chảy",
        price: 25000,
        id: "s12"
    }
];

const drinks = [
    {
        img: "images/Drinks/SoftDrink.jpg",
        title: "Soft Drink",
        desc: "Nước ngọt có ga (Coca, Pepsi, Sprite)",
        price: { "Ly Ngọt": 15000, "Lon": 15000 },
        id: "d1"
    },
    {
        img: "images/Drinks/NuocSuoi.jpg",
        title: "Nước Suối",
        desc: "Nước suối tinh khiết",
        price: 9000,
        id: "d2"
    },
    {
        img: "images/Drinks/DaMatMem.jpg",
        title: "Đá Mật Mềm",
        desc: "Nước đá mật mềm tamarind juice",
        price: 15000,
        id: "d3"
    },
    {
        img: "images/Drinks/TraChanh.jpg",
        title: "Trà Chanh",
        desc: "Trà chanh tươi mát",
        price: 15000,
        id: "d4"
    },
    {
        img: "images/Drinks/TraDao.jpg",
        title: "Trà Đào",
        desc: "Trà đào thơm ngon",
        price: 20000,
        id: "d5"
    },
    {
        img: "images/Drinks/Blanc1664.jpg",
        title: "Blanc 1664",
        desc: "Bia Blanc 1664",
        price: 25000,
        id: "d6"
    }
];