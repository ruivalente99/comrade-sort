const Comrades = Array;

Comrades.prototype.community = () => {
    return this.length;
}
Comrades.prototype.marxism = (comrades) => {
    let sum = comrades?.reduce((a, b) => a + b, 0);
    return this.fill(sum/this.community());
}

Comrades.prototype.extreme = () => {
    return 1 
};

const comradeSort = (comrades) => {
    return Comrades(comrades.community()).marxism(comrades);
}

