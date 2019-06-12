import { number } from "prop-types";

class Life {
    width = 10;
    height = 10;
    celles = [];
    newCelles = [];
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.init();
    }
    getCelles() {
        return this.celles;
    }
    init() {
        this.celles = [];
        for (let x = 0; x < this.width; x++) {
            let line: number[] = [];
            for (let y = 0; y < this.height; y++) {
                line.push(Number(Math.random().toFixed(1)) * 10 % 2)
            }
            this.celles.push(line);
        }
    }
    change() {
        this.newCelles = [];
        let line: number[] = [];
        for (let x = 0; x < this.width; x++) {
            line = [];
            for (let y = 0; y < this.height; y++) {
                line.push(this.changeCell(x, y));
            }
            this.newCelles.push(line)
        }
        this.celles = this.newCelles;
    }
    changeCell(x: number, y: number): number {
        const count = this.getCellAroundState(x, y);
        if (count > 3) {
            return 0;
        }
        if (count == 3) {
            return 1;
        }
        if (count < 2) {
            return 0;
        }
        // if(count ==2)
        return this.getCellState(x, y);
    }
    getCellAroundState(x, y): number {

        const count = [
            [x - 1, y - 1],
            [x - 1, y],
            [x - 1, y + 1],
            [x, y - 1],
            [x, y + 1],
            [x + 1, y - 1],
            [x + 1, y],
            [x + 1, y + 1],
        ];
        let result = 0;
        count.forEach(item => {
            result += this.getCellState(item[0], item[1]);
        })
        return result;
    }
    getCellState(x, y): number {
        try {
            const num = this.celles[x][y];
            return num ? 1 : 0;
        } catch{
            return 0;
        }
    }
}
export default Life;