class SketchPad {
    
    constructor(container, size = 400) {    
        this.canvas = document.createElement("canvas");
        this.canvas.width = size;
        this.canvas.height = size;
        this.canvas.style = `
            background-color: white;
            box-shadow: 0px 0px 10px 2px black;
        `;
        
        container.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");

        this.path = [];
        this.isDrawing = false;

        this.#addEventListeners();
    }

    #addEventListeners(){
        this.canvas.onmousedown = (event) => {
            const rect = this.canvas.getBoundingClientRect();
            const mouse = [
                Math.round(event.clientX - rect.left),
                Math.round(event.clientY, rect.top)
            ];
            this.path = [mouse];
            this.isDrawing = true;
        }

        this.canvas.onmousemove = (event) => {
            if(this.isDrawing){
                const rect = this.canvas.getBoundingClientRect();
                const mouse = [
                    Math.round(event.clientX - rect.left),
                    Math.round(event.clientY, rect.top)
                ];
                this.path.push(mouse);
                console.log(this.path.length)
            }
        }

        this.canvas.onmouseup = () => {
            this.isDrawing = false;
        }
    }
}