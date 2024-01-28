const Room = require("../models/room")

const createRoom =  async (req,res) => {
    const data = [
        {
            type: "PRESIDENTIAL SUITE",
            desc: "President Suite  dihadirkan untuk memenuhi kebutuhan tamu yang menginginkan pengalaman menginap dengan kamar eksklusif yang tidak lupa dengan sentuhan desain atmosfer ruangan yang hangat dan nyaman didalamnya. Kamar President Suite dilengkapi dengan interior mewah seperti lantai marmer dan balkoni pribadi yang luas untuk bersantai menikmati cerahnya langit Yogyakarta. Terletak di lantai 6 dengan akses connecting room dan lengkap dengan fasilitas yang menghibur di dalamnya.",
            price: "Rp. 2.000.000",
            image: "/images/presidential.jpg"
        }, 
        {
            type: "EXECUTIVE SUITE",
            desc: "Executive Suite menawarkan pengalaman menginap dengan suasana kamar yang mewah dan memberikan penuh kenyamanan. Dilengkapi dengan balkoni pribadi yang dapat menjadi tempat bersantai di bawah hangatnya matahari saat menikmati pemandangan segarnya warna biru kolam renang. Kamar Executive menghadirkan desain interior yang elegan dari perpaduan warna-warna netral yang hangat dan akan membuat pengalaman menginap menjadi lebih tenang.",
            price: "Rp. 1.500.000",
            image: "/images/executive.jpg"
        }, 
        {
            type: "JUNIOR SUITE",
            desc: "President Suite  dihadirkan untuk memenuhi kebutuhan tamu yang menginginkan pengalaman menginap dengan kamar eksklusif yang tidak lupa dengan sentuhan desain atmosfer ruangan yang hangat dan nyaman didalamnya. Kamar President Suite dilengkapi dengan interior mewah seperti lantai marmer dan balkoni pribadi yang luas untuk bersantai menikmati cerahnya langit Yogyakarta. Terletak di lantai 6 dengan akses connecting room dan lengkap dengan fasilitas yang menghibur di dalamnya.",
            price: "Rp. 800.000",
            image: "/images/junior.jpg"
        }, 
        {
            type: "DELUXE TWIN ROOM",
            desc: "Deluxe Room dihadirkan dengan 2 buah tempat tidur yang mewah beserta kamar mandi yang menyenangkan. Deluxe room menjadi pilihan yang cocok bagi para tamu yang mendambakan kenyamanan dan suasana menenangkan dengan pemandangan langit Yogyakarta dari balkon ruangan. Deluxe Room tersedia dua single bed yang terpisah dan tidak dapat digabungkan. Tersedia kasur anak tambahan gratis di dalam kamar. Kami tidak menyediakan kamar connecting di Deluxe Room namun dapat kami coba untuk mengatur kamar agar bersebelahan atau berhadapan satu sama lain, permintaan hanya berdasarkan ketersediaan.",
            price: "Rp. 1.000.000",
            image: "/images/presidential.jpg"
        }, 
    ]
    try {
        await Room.bulkCreate(data)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {createRoom}