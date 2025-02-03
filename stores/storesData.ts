export const useStoresData = defineStore("storesData", () => {
    const stores = ref([
        {
            id: 1,
            title: "فضای مهرویلا",
            subtitle: null,
            addressText: "خیابان رودکی غربی، نبش تقاطع سعدی",
            latitude: "35.816672",
            longitude: "50.9564546",
            number: "02633554014",
            image: "/img/mehrvila.jpg"
        },
        {
            id: 2,
            title: "فضای گوهردشت",
            subtitle: null,
            addressText: "فاز دوم، خیابان دکتر حسابی شمالی، نبش نهم غربی",
            latitude: "35.8562872",
            longitude: "50.9744834",
            number: "02634421473",
            image: "/img/gohardasht.jpg"
        },
        {
            id: 3,
            title: "فضای سه‌راه گوهردشت",
            subtitle: "(کارگاه رستری و قهوه فروشی)",
            addressText: "کنار گذر پل سه راه گوهردشت، روبروی ایستگاه تاکسی، پایین‌تر از نانوایی اپامه",
            latitude: "35.8285175",
            longitude: "50.9681076",
            number: "09360767684",
            image: "/img/3rah.jpg"
        },
        {
            id: 4,
            title: "فضای مهرشهر",
            subtitle: null,
            addressText: "فاز ۱ خیابان ۱۰۰ غربی پیچک دوم",
            latitude: "35.8070854",
            longitude: "",
            number: "02633415594",
            image: "/img/mehrshahr.jpg"
        },
        {
            id: 5,
            title: "کارگاه کیک و شیرینی(آنلاین)",
            subtitle: null,
            addressText: null,
            latitude: null,
            longitude: null,
            number: "09351681254",
            image: "/img/pastry.jpg"
        },
    ])
    return {stores}
})