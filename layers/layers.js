var wms_layers = [];


        var lyr_Imagesatellite_0 = new ol.layer.Tile({
            'title': 'Image satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_CENTROIDE2_1 = new ol.format.GeoJSON();
var features_CENTROIDE2_1 = format_CENTROIDE2_1.readFeatures(json_CENTROIDE2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROIDE2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROIDE2_1.addFeatures(features_CENTROIDE2_1);
var lyr_CENTROIDE2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROIDE2_1, 
                style: style_CENTROIDE2_1,
                popuplayertitle: 'CENTROIDE 2',
                interactive: true,
                title: '<img src="styles/legend/CENTROIDE2_1.png" /> CENTROIDE 2'
            });

lyr_Imagesatellite_0.setVisible(true);lyr_CENTROIDE2_1.setVisible(true);
var layersList = [lyr_Imagesatellite_0,lyr_CENTROIDE2_1];
lyr_CENTROIDE2_1.set('fieldAliases', {'id': 'id', });
lyr_CENTROIDE2_1.set('fieldImages', {'id': 'TextEdit', });
lyr_CENTROIDE2_1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_CENTROIDE2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});