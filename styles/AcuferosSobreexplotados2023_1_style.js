var size = 0;
var placement = 'point';

var style_AcuferosSobreexplotados2023_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    // var labelFont = "13.0px \'Montserrat\', sans-serif";
    var labelFont = "13.0px \'Montserrat\', sans-serif";

    var labelFill = "#9f2241";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NOM_ACUI") !== null && resolution > 0 && resolution < 1452) {
        labelText = String(feature.get("NOM_ACUI"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(3,164,251,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
