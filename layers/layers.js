var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AcuferosSobreexplotados2023_1 = new ol.format.GeoJSON();
var features_AcuferosSobreexplotados2023_1 = format_AcuferosSobreexplotados2023_1.readFeatures(json_AcuferosSobreexplotados2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcuferosSobreexplotados2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcuferosSobreexplotados2023_1.addFeatures(features_AcuferosSobreexplotados2023_1);
var lyr_AcuferosSobreexplotados2023_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AcuferosSobreexplotados2023_1, 
                style: style_AcuferosSobreexplotados2023_1,
                interactive: true,
                title: '<img src="styles/legend/AcuferosSobreexplotados2023_1.png" /> Acuíferos Sobreexplotados 2023'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_AcuferosSobreexplotados2023_1.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_AcuferosSobreexplotados2023_1];
lyr_AcuferosSobreexplotados2023_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CLV_EDO': 'CLV_EDO', 'NOM_EDO': 'NOM_EDO', 'CLV_REGION': 'CLV_REGION', 'NOM_REGION': 'NOM_REGION', 'CLV_ACUI': 'Clave del Acuífero', 'NOM_ACUI': 'Nombre del Acuífero', 'AREA_KM2': 'AREA_KM2', 'RECARGA_TO': 'RECARGA_TO', 'DESCARGA_N': 'DESCARGA_N', 'VEAS': 'VEAS', 'DMA_POSITI': 'DMA_POSITI', 'DMA_NEGATI': 'DMA_NEGATI', 'BOMBEO': 'BOMBEO', 'CONDICION': 'Condición', 'COND_DMA': 'COND_DMA', 'DDR': 'DDR', });
lyr_AcuferosSobreexplotados2023_1.set('fieldImages', {'OBJECTID': 'Hidden', 'CLV_EDO': 'Hidden', 'NOM_EDO': 'Hidden', 'CLV_REGION': 'Hidden', 'NOM_REGION': 'Hidden', 'CLV_ACUI': 'TextEdit', 'NOM_ACUI': 'TextEdit', 'AREA_KM2': 'Hidden', 'RECARGA_TO': 'Hidden', 'DESCARGA_N': 'Hidden', 'VEAS': 'Hidden', 'DMA_POSITI': 'Hidden', 'DMA_NEGATI': 'Hidden', 'BOMBEO': 'Hidden', 'CONDICION': 'TextEdit', 'COND_DMA': 'Hidden', 'DDR': 'Hidden', });
lyr_AcuferosSobreexplotados2023_1.set('fieldLabels', {'CLV_ACUI': 'inline label', 'NOM_ACUI': 'inline label', 'CONDICION': 'inline label', });
lyr_AcuferosSobreexplotados2023_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});