var app = new Vue ({
    el: "#app",
    data: {
        unit: "",
        planet: "this planet",
        weight: 0,
        object: "your object",
    },
    methods: {
        convert() {
            var convertValues = {
                Earth : 1,
                Mars : 0.38,
                Pluto : .06,
                Uranus : .92,
                Jupiter : 2.34,
                Mercury : .38,
                Venus : .91,
                Saturn : 1.06,
                Neptune : 1.19,
            };
            this.weight = Math.round(this.weight * convertValues[this.planet]*100/100);
        }
    }
})