function getRadiusFromArea(area){
    const radius= Math.sqrt(area / Math.PI)
    return radius
}

console.log(getRadiusFromArea(230));
