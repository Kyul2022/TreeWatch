export class Plant {
    name: string;
    description: string;
    waterLevel : number;
    soilMoistureLevel : number;
    waterThreshold : number;
    soilThreshold : number;
    image : string;


    constructor(name: string, description: string, waterLevel: number, soilMostureLevel : number, waterThreshold : number, soilThreshold : number, image : string) {
        this.description = description;
        this.waterLevel = waterLevel;
        this.soilMoistureLevel = soilMostureLevel;
        this.waterThreshold = waterThreshold;
        this.soilThreshold = soilThreshold;
        this.name = name;
        this.image = image;
      }
}