var v = new Vue({
    el: "#container",
    data: {
        left: window.innerWidth / 2,
        downflag: false,
        prepos: [0, 0],
        pos: [0, 0],
        left: 0,
        top: 0
    },
    methods: {
        updatePos: function () {
            this.left += this.pos[0] - this.prepos[0];
            this.top += this.pos[1] - this.prepos[1];
        }
    }
});
document.querySelector("#container").addEventListener('mousedown', function (e) {
    v.prepos = [e.offsetX, e.offsetY];
});
document.querySelector("#container").addEventListener('mousemove', function (e) {
    v.pos = [e.offsetX, e.offsetY];
    if(v.downflag){
        v.updatePos();
    }
});