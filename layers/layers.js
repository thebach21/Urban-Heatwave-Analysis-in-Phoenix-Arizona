var wms_layers = [];


        var lyr_WorldStreetMap_0 = new ol.layer.Tile({
            'title': 'World Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_NDVIPHOENIXWEB_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI PHOENIX WEB<br />\
    <img src="styles/legend/NDVIPHOENIXWEB_1_0.png" /> 0-0.2 Bare Soil & Urban<br />\
    <img src="styles/legend/NDVIPHOENIXWEB_1_1.png" /> 0.2-0.4 Sparse<br />\
    <img src="styles/legend/NDVIPHOENIXWEB_1_2.png" /> 0.4-0.6 Moderate<br />\
    <img src="styles/legend/NDVIPHOENIXWEB_1_3.png" /> 0.6-1 Dense<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVIPHOENIXWEB_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-12476800.480048, 3949776.938627, -12457484.466927, 3959960.048453]
        })
    });
var format_LSTHEATWAVEPHOENIXFINALE1_2 = new ol.format.GeoJSON();
var features_LSTHEATWAVEPHOENIXFINALE1_2 = format_LSTHEATWAVEPHOENIXFINALE1_2.readFeatures(json_LSTHEATWAVEPHOENIXFINALE1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSTHEATWAVEPHOENIXFINALE1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSTHEATWAVEPHOENIXFINALE1_2.addFeatures(features_LSTHEATWAVEPHOENIXFINALE1_2);
var lyr_LSTHEATWAVEPHOENIXFINALE1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSTHEATWAVEPHOENIXFINALE1_2, 
                style: style_LSTHEATWAVEPHOENIXFINALE1_2,
                popuplayertitle: 'LST HEATWAVE PHOENIX FINALE1',
                interactive: true,
    title: 'LST HEATWAVE PHOENIX FINALE1<br />\
    <img src="styles/legend/LSTHEATWAVEPHOENIXFINALE1_2_0.png" /> Lower Intermediate1<br />\
    <img src="styles/legend/LSTHEATWAVEPHOENIXFINALE1_2_1.png" /> Lower Intensity1<br />\
    <img src="styles/legend/LSTHEATWAVEPHOENIXFINALE1_2_2.png" /> Moderate<br />\
    <img src="styles/legend/LSTHEATWAVEPHOENIXFINALE1_2_3.png" /> Higher Intermediate1<br />\
    <img src="styles/legend/LSTHEATWAVEPHOENIXFINALE1_2_4.png" /> Higher Intensity1<br />' });

lyr_WorldStreetMap_0.setVisible(true);lyr_NDVIPHOENIXWEB_1.setVisible(true);lyr_LSTHEATWAVEPHOENIXFINALE1_2.setVisible(true);
var layersList = [lyr_WorldStreetMap_0,lyr_NDVIPHOENIXWEB_1,lyr_LSTHEATWAVEPHOENIXFINALE1_2];
lyr_LSTHEATWAVEPHOENIXFINALE1_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_LSTHEATWAVEPHOENIXFINALE1_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_LSTHEATWAVEPHOENIXFINALE1_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_LSTHEATWAVEPHOENIXFINALE1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});