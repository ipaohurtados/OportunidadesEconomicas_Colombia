var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.646000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Geografaassessment_1 = new ol.format.GeoJSON();
var features_Geografaassessment_1 = format_Geografaassessment_1.readFeatures(json_Geografaassessment_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geografaassessment_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geografaassessment_1.addFeatures(features_Geografaassessment_1);
var lyr_Geografaassessment_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geografaassessment_1, 
                style: style_Geografaassessment_1,
                interactive: true,
                title: '<img src="styles/legend/Geografaassessment_1.png" /> Geografía assessment'
            });
var format_Enviromentalareas_2 = new ol.format.GeoJSON();
var features_Enviromentalareas_2 = format_Enviromentalareas_2.readFeatures(json_Enviromentalareas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Enviromentalareas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enviromentalareas_2.addFeatures(features_Enviromentalareas_2);
var lyr_Enviromentalareas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Enviromentalareas_2, 
                style: style_Enviromentalareas_2,
                interactive: true,
                title: '<img src="styles/legend/Enviromentalareas_2.png" /> Enviromental areas'
            });
var format_Densidaddecultivosdecoca_3 = new ol.format.GeoJSON();
var features_Densidaddecultivosdecoca_3 = format_Densidaddecultivosdecoca_3.readFeatures(json_Densidaddecultivosdecoca_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densidaddecultivosdecoca_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densidaddecultivosdecoca_3.addFeatures(features_Densidaddecultivosdecoca_3);
var lyr_Densidaddecultivosdecoca_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Densidaddecultivosdecoca_3, 
                style: style_Densidaddecultivosdecoca_3,
                interactive: true,
    title: 'Densidad de cultivos de coca<br />\
    <img src="styles/legend/Densidaddecultivosdecoca_3_0.png" /> 0,1 - 3,1<br />\
    <img src="styles/legend/Densidaddecultivosdecoca_3_1.png" /> 3,1 - 7,7<br />\
    <img src="styles/legend/Densidaddecultivosdecoca_3_2.png" /> 7,7 - 15<br />\
    <img src="styles/legend/Densidaddecultivosdecoca_3_3.png" /> 15 - 26<br />\
    <img src="styles/legend/Densidaddecultivosdecoca_3_4.png" /> 26 - 55,1<br />'
        });
var format_Subestacioneselctricas_4 = new ol.format.GeoJSON();
var features_Subestacioneselctricas_4 = format_Subestacioneselctricas_4.readFeatures(json_Subestacioneselctricas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subestacioneselctricas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subestacioneselctricas_4.addFeatures(features_Subestacioneselctricas_4);
var lyr_Subestacioneselctricas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Subestacioneselctricas_4, 
                style: style_Subestacioneselctricas_4,
                interactive: true,
                title: '<img src="styles/legend/Subestacioneselctricas_4.png" /> Subestaciones eléctricas'
            });
var format_Plantaselctricas_5 = new ol.format.GeoJSON();
var features_Plantaselctricas_5 = format_Plantaselctricas_5.readFeatures(json_Plantaselctricas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantaselctricas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantaselctricas_5.addFeatures(features_Plantaselctricas_5);
var lyr_Plantaselctricas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Plantaselctricas_5, 
                style: style_Plantaselctricas_5,
                interactive: true,
                title: '<img src="styles/legend/Plantaselctricas_5.png" /> Plantas eléctricas'
            });
var format_Redvialterciaria_6 = new ol.format.GeoJSON();
var features_Redvialterciaria_6 = format_Redvialterciaria_6.readFeatures(json_Redvialterciaria_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvialterciaria_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvialterciaria_6.addFeatures(features_Redvialterciaria_6);
var lyr_Redvialterciaria_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Redvialterciaria_6, 
                style: style_Redvialterciaria_6,
                interactive: true,
    title: 'Red vial terciaria <br />\
    <img src="styles/legend/Redvialterciaria_6_0.png" /> Intermedia<br />\
    <img src="styles/legend/Redvialterciaria_6_1.png" /> Predominantemente rural cercano a una ciudad<br />\
    <img src="styles/legend/Redvialterciaria_6_2.png" /> Predominantemente rural remoto<br />\
    <img src="styles/legend/Redvialterciaria_6_3.png" /> Predominantemente urbano<br />'
        });
var format_Redvialprimaria_7 = new ol.format.GeoJSON();
var features_Redvialprimaria_7 = format_Redvialprimaria_7.readFeatures(json_Redvialprimaria_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvialprimaria_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvialprimaria_7.addFeatures(features_Redvialprimaria_7);
var lyr_Redvialprimaria_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Redvialprimaria_7, 
                style: style_Redvialprimaria_7,
                interactive: true,
                title: '<img src="styles/legend/Redvialprimaria_7.png" /> Red vial primaria'
            });
var format_LneasTransmisnElctrica_8 = new ol.format.GeoJSON();
var features_LneasTransmisnElctrica_8 = format_LneasTransmisnElctrica_8.readFeatures(json_LneasTransmisnElctrica_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LneasTransmisnElctrica_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LneasTransmisnElctrica_8.addFeatures(features_LneasTransmisnElctrica_8);
var lyr_LneasTransmisnElctrica_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LneasTransmisnElctrica_8, 
                style: style_LneasTransmisnElctrica_8,
                interactive: true,
                title: '<img src="styles/legend/LneasTransmisnElctrica_8.png" /> Líneas Transmisón Eléctrica'
            });
var format_Vasfluviales_9 = new ol.format.GeoJSON();
var features_Vasfluviales_9 = format_Vasfluviales_9.readFeatures(json_Vasfluviales_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vasfluviales_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vasfluviales_9.addFeatures(features_Vasfluviales_9);
var lyr_Vasfluviales_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vasfluviales_9, 
                style: style_Vasfluviales_9,
                interactive: true,
                title: '<img src="styles/legend/Vasfluviales_9.png" /> Vías fluviales'
            });
var format_ConexinFluvial_10 = new ol.format.GeoJSON();
var features_ConexinFluvial_10 = format_ConexinFluvial_10.readFeatures(json_ConexinFluvial_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConexinFluvial_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConexinFluvial_10.addFeatures(features_ConexinFluvial_10);
var lyr_ConexinFluvial_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ConexinFluvial_10, 
                style: style_ConexinFluvial_10,
                interactive: true,
                title: '<img src="styles/legend/ConexinFluvial_10.png" /> Conexión Fluvial'
            });
var format_Lugarestursticos_11 = new ol.format.GeoJSON();
var features_Lugarestursticos_11 = format_Lugarestursticos_11.readFeatures(json_Lugarestursticos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lugarestursticos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lugarestursticos_11.addFeatures(features_Lugarestursticos_11);
var lyr_Lugarestursticos_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lugarestursticos_11, 
                style: style_Lugarestursticos_11,
                interactive: true,
                title: '<img src="styles/legend/Lugarestursticos_11.png" /> Lugares turísticos'
            });
var format_Cabecerasmunicipales_12 = new ol.format.GeoJSON();
var features_Cabecerasmunicipales_12 = format_Cabecerasmunicipales_12.readFeatures(json_Cabecerasmunicipales_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cabecerasmunicipales_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cabecerasmunicipales_12.addFeatures(features_Cabecerasmunicipales_12);
var lyr_Cabecerasmunicipales_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cabecerasmunicipales_12, 
                style: style_Cabecerasmunicipales_12,
                interactive: true,
                title: '<img src="styles/legend/Cabecerasmunicipales_12.png" /> Cabeceras municipales'
            });
var format_Aeropuertos_13 = new ol.format.GeoJSON();
var features_Aeropuertos_13 = format_Aeropuertos_13.readFeatures(json_Aeropuertos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aeropuertos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeropuertos_13.addFeatures(features_Aeropuertos_13);
var lyr_Aeropuertos_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aeropuertos_13, 
                style: style_Aeropuertos_13,
                interactive: true,
                title: '<img src="styles/legend/Aeropuertos_13.png" /> Aeropuertos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Geografaassessment_1.setVisible(true);lyr_Enviromentalareas_2.setVisible(false);lyr_Densidaddecultivosdecoca_3.setVisible(false);lyr_Subestacioneselctricas_4.setVisible(false);lyr_Plantaselctricas_5.setVisible(false);lyr_Redvialterciaria_6.setVisible(false);lyr_Redvialprimaria_7.setVisible(false);lyr_LneasTransmisnElctrica_8.setVisible(false);lyr_Vasfluviales_9.setVisible(false);lyr_ConexinFluvial_10.setVisible(false);lyr_Lugarestursticos_11.setVisible(false);lyr_Cabecerasmunicipales_12.setVisible(true);lyr_Aeropuertos_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Geografaassessment_1,lyr_Enviromentalareas_2,lyr_Densidaddecultivosdecoca_3,lyr_Subestacioneselctricas_4,lyr_Plantaselctricas_5,lyr_Redvialterciaria_6,lyr_Redvialprimaria_7,lyr_LneasTransmisnElctrica_8,lyr_Vasfluviales_9,lyr_ConexinFluvial_10,lyr_Lugarestursticos_11,lyr_Cabecerasmunicipales_12,lyr_Aeropuertos_13];
lyr_Geografaassessment_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPTO_CCDGO': 'DPTO_CCDGO', 'CodMonDept': 'CodMonDept', 'DPTO_CNMBR': 'DPTO_CNMBR', 'MPIO_CCDGO': 'MPIO_CCDGO', 'CodMonMpio': 'CodMonMpio', 'MPIO_CNMBR': 'MPIO_CNMBR', 'CSDI': 'CSDI', 'ADAM': 'ADAM', 'MIDAS': 'MIDAS', 'CSDI_USAID': 'CSDI_USAID', 'REGION_PDE': 'REGION_PDE', 'ZonaFuturo': 'ZonaFuturo', 'Selected': 'Selected', 'CENTROID_X': 'CENTROID_X', 'CENTROID_Y': 'CENTROID_Y', 'Pob_total': 'Pob_total', 'ContVSDe': 'ContVSDe', 'Ruta1': 'Ruta1', 'Zona': 'Zona', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Enviromentalareas_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'objectid': 'objectid', 'nombre': 'Nombre', 'id_pnn': 'id_pnn', 'categoria': 'categoria', 'territoria': 'territoria', 'resolucion': 'resolucion', 'hectareas_': 'hectareas_', 'escala': 'escala', 'organizaci': 'organizaci', 'fecha_act': 'fecha_act', 'url': 'url', 'wkid': 'wkid', 'app_id': 'app_id', 'record_id': 'record_id', 'centroid_x': 'centroid_x', 'centroid_y': 'centroid_y', 'fecha_regi': 'fecha_regi', 'validado': 'validado', 'hectareas0': 'hectareas0', 'perimetro_': 'perimetro_', 'globalid': 'globalid', 'administra': 'administra', 'sde_state_': 'sde_state_', 'anio': 'anio', 'tAnio': 'tAnio', 'CATEG': 'Categoría', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Densidaddecultivosdecoca_3.set('fieldAliases', {'grilla1': 'grilla1', 'areacoca': 'Área', 'ano': 'ano', });
lyr_Subestacioneselctricas_4.set('fieldAliases', {'OBJECTID_12': 'OBJECTID_12', 'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'EST': 'Estación', 'MUNICIPIO': 'Municipio', 'DEPARTAMEN': 'Departamento', 'TENSION_NO': 'TENSION_NO', 'CONFIGURAC': 'CONFIGURAC', 'ANOENTRADA': 'ANOENTRADA', 'OPRED': 'OPRED', 'NOTAS': 'NOTAS', 'COD_DEP': 'COD_DEP', 'LONGITUD': 'LONGITUD', 'LATITUD': 'LATITUD', 'NOM_SUBEST': 'Nombre ', 'ORGANIZACI': 'ORGANIZACI', 'TENSION_SU': 'TENSION_SU', 'ESTADO': 'ESTADO', 'FECHA_OPER': 'FECHA_OPER', 'OBSERVACIO': 'OBSERVACIO', 'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'LATITUD_1': 'LATITUD_1', 'LONGITUD_1': 'LONGITUD_1', });
lyr_Plantaselctricas_5.set('fieldAliases', {'OBJECTID_12': 'OBJECTID_12', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'PLA_COD_UP': 'PLA_COD_UP', 'PLA_NOMBRE': 'PLA_NOMBRE', 'PLA_TIPO': 'Tipo de planta', 'PLA_COMBUS': 'Tipo de combustible', 'PLA_PRIVAD': 'PLA_PRIVAD', 'PLA_AÑO_E': 'PLA_AÑO_E', 'PLA_CAP_EF': 'PLA_CAP_EF', 'PLA_AGENTE': 'PLA_AGENTE', 'PLA_ZNI': 'PLA_ZNI', 'PLA_FECHA_': 'PLA_FECHA_', 'PLA_FUENTE': 'PLA_FUENTE', 'PLA_CAP_NO': 'PLA_CAP_NO', 'PLA_FAC_PO': 'PLA_FAC_PO', 'PLA_DISPON': 'PLA_DISPON', 'PLA_CAP_AN': 'PLA_CAP_AN', 'PLA_DEPART': 'PLA_DEPART', 'PLA_MUNICI': 'PLA_MUNICI', 'PLA_TECNOL': 'Tecnología', });
lyr_Redvialterciaria_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'TIPO_VIA': 'Tipo', 'ESTADO_SUP': 'ESTADO_SUP', 'NUMERO_CAR': 'NUMERO_CAR', 'ACCESIBILI': 'ACCESIBILI', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'RULEID': 'RULEID', 'PK_CUE': 'PK_CUE', 'EJE_VIAL': 'EJE_VIAL', 'SHAPE_Leng': 'SHAPE_Leng', 'RedNaciona': 'RedNaciona', 'RedDeparta': 'RedDeparta', 'Tipo_Red': 'Tipo_Red', 'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'DPTO_CNMBR': 'DPTO_CNMBR', 'Municipio': 'Municipio', 'Terri_Func': 'Terri_Func', 'Tama_Terri': 'Tama_Terri', 'Aglom_Sist': 'Aglom_Sist', 'Tama_Aglom': 'Tama_Aglom', 'Poblacion': 'Poblacion', 'E_id_subre': 'E_id_subre', 'E_tipol_En': 'E_tipol_En', 'E_tipol_Es': 'E_tipol_Es', 'E_tipologi': 'E_tipologi', 'E_tipolo_1': 'E_tipolo_1', 'E_tipolo_2': 'E_tipolo_2', 'E_tipolo_3': 'E_tipolo_3', 'Ranking_IN': 'Ranking_IN', 'Ponderacio': 'Ponderacio', 'Jerarquia_': 'Jerarquia_', 'R_Urbano': 'R_Urbano', 'ID': 'ID', 'Long_km': 'Long_km', 'ViaNaciona': 'ViaNaciona', 'ViaDeparta': 'ViaDeparta', 'ViaTerciar': 'ViaTerciar', 'ViaFluvial': 'ViaFluvial', 'ViaAerea': 'ViaAerea', 'Departamen': 'Departamen', 'PDET_ZOMAC': 'PDET_ZOMAC', 'Cabecera_M': 'Cabecera_M', 'P_Poblacio': 'P_Poblacio', 'ICV': 'ICV', 'PobDif': 'PobDif', 'CentSalud': 'CentSalud', 'CentEducat': 'CentEducat', 'CultIlicit': 'CultIlicit', 'InterModal': 'InterModal', 'AMB_01': 'AMB_01', 'AMB_02': 'AMB_02', 'AMB_03': 'AMB_03', 'Puntaje': 'Puntaje', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', });
lyr_Redvialprimaria_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'INODE': 'INODE', 'JNODE': 'JNODE', 'LENGTH': 'LENGTH', 'TYPE_': 'TYPE_', 'MODES': 'MODES', 'LANES': 'LANES', 'VDF': 'VDF', 'DATA1': 'DATA1', 'DATA2': 'DATA2', 'DATA3': 'DATA3', 'VOLAU': 'VOLAU', 'VOLAD': 'VOLAD', 'TIMAU': 'TIMAU', 'F_c1vol': 'F_c1vol', 'F_c2vol': 'F_c2vol', 'F_cost1': 'F_cost1', 'F_cost2': 'F_cost2', 'F_cost_a': 'F_cost_a', 'F_cost_b': 'F_cost_b', 'F_cost_c': 'F_cost_c', 'F_cost_g': 'F_cost_g', 'F_costa': 'F_costa', 'F_costc': 'F_costc', 'F_costg': 'F_costg', 'F_costo': 'F_costo', 'F_cov_a': 'F_cov_a', 'F_cov_b': 'F_cov_b', 'F_cov_c': 'F_cov_c', 'F_cov_g': 'F_cov_g', 'F_idproy': 'F_idproy', 'F_jos1': 'F_jos1', 'F_jos2': 'F_jos2', 'F_jos8': 'F_jos8', 'F_peaja': 'F_peaja', 'F_peajc': 'F_peajc', 'F_peajg': 'F_peajg', 'F_scl': 'F_scl', 'F_sellk': 'F_sellk', 'F_tar_a': 'F_tar_a', 'F_tar_b': 'F_tar_b', 'F_tar_c': 'F_tar_c', 'F_tar_g': 'F_tar_g', 'F_tra_a': 'F_tra_a', 'F_tra_b': 'F_tra_b', 'F_tra_c': 'F_tra_c', 'F_tra_g': 'F_tra_g', 'F_vol_a': 'F_vol_a', 'F_vol_b': 'F_vol_b', 'F_vol_c': 'F_vol_c', 'F_vol_g': 'F_vol_g', 'F_1': 'F_1', 'TPDA': 'TPDA', 'TPDAautos': 'TPDAautos', 'TPDAcpeq': 'TPDAcpeq', 'TPDAcgran': 'TPDAcgran', 'TPDAall': 'TPDAall', 'Shape_Length': 'Shape_Length', });
lyr_LneasTransmisnElctrica_8.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'objectid': 'objectid', 'expediente': 'expediente', 'sector': 'sector', 'operador': 'Operador', 'proyecto': 'proyecto', 'num_act_ad': 'num_act_ad', 'fec_act_ad': 'fec_act_ad', 'descrip': 'descrip', 'region_seg': 'region_seg', 'Shape_Length': 'Shape_Length', });
lyr_Vasfluviales_9.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'ID': 'ID', 'LENGTH': 'LENGTH', 'DIR': 'DIR', 'LONGITUD_T': 'LONGITUD_T', 'NOMBRE_RIO': 'Nombre', 'ORIGEN': 'Origen', 'DESTINO': 'Destino', 'TIME_AB': 'TIME_AB', 'TIME_BA': 'TIME_BA', 'TIEMPO_AJU': 'TIEMPO_AJU', 'TIEMPO_AJ1': 'TIEMPO_AJ1', 'VEL_AJUSTA': 'VEL_AJUSTA', 'VEL_AJUST1': 'VEL_AJUST1', 'CAPACIDAD_': 'CAPACIDAD_', 'CAPACIDAD1': 'CAPACIDAD1', 'NAVEGACION': 'NAVEGACION', 'INSPECCION': 'INSPECCION', 'BETA': 'BETA', 'ALPHA': 'ALPHA', 'ANCHO_MINI': 'ANCHO_MINI', 'MANGA': 'MANGA', 'ESLORA': 'ESLORA', 'VEL_BA': 'VEL_BA', 'VEL_AB': 'VEL_AB', 'TIEMPO_ASC': 'TIEMPO_ASC', 'TIEMPO_DES': 'TIEMPO_DES', 'PROFUNDIDA': 'PROFUNDIDA', 'PROFUNDID1': 'PROFUNDID1', 'VEL_AB1': 'VEL_AB1', 'VEL_BA1': 'VEL_BA1', 'FORMULA_FI': 'FORMULA_FI', 'Layer': 'Layer', 'shape_leng': 'shape_leng', 'Conexion': 'Conexion', 'Tramo': 'Tramo', 'Name': 'Name', 'descriptio': 'descriptio', 'ViaFluvial': 'ViaFluvial', 'RuleID': 'RuleID', 'InLine_FID': 'InLine_FID', 'SimLnFlag': 'SimLnFlag', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', 'RuleID_1': 'RuleID_1', 'Shape_Length': 'Shape_Length', });
lyr_ConexinFluvial_10.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'RuleID': 'RuleID', 'Ruta': 'Ruta', 'Vel_Kmh': 'Vel_Kmh', 'Longitud_K': 'Longitud_K', 'Shape_Length': 'Shape_Length', });
lyr_Lugarestursticos_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nombre': 'Nombre', 'Localizacion': 'Localizacion', 'Caracteristica': 'Actividad', 'Beneficiarios': 'Beneficiarios', 'code_mpio': 'code_mpio', 'name_mpio': 'name_mpio', });
lyr_Cabecerasmunicipales_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_CMun_centroides_2018': 'FID_CMun_centroides_2018', 'FID_': 'FID_', 'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'CLAS_CCDGO': 'CLAS_CCDGO', 'SETR_CCDGO': 'SETR_CCDGO', 'SECR_CCDGO': 'SECR_CCDGO', 'CPOB_CCDGO': 'CPOB_CCDGO', 'CPOB_CNMBR': 'CPOB_CNMBR', 'COD_DANE': 'COD_DANE', 'CPOB_NAREA': 'CPOB_NAREA', 'CPOB_NALT': 'CPOB_NALT', 'Shape_Leng': 'Shape_Leng', 'CPOB_CCNCT': 'CPOB_CCNCT', 'Lon': 'Lon', 'Lat': 'Lat', 'FID_Geografia_OE': 'FID_Geografia_OE', 'DPTO_CCDGO_1': 'DPTO_CCDGO', 'CodMonDept': 'CodMonDept', 'DPTO_CNMBR': 'DPTO_CNMBR', 'MPIO_CCDGO_1': 'MPIO_CCDGO', 'CodMonMpio': 'CodMonMpio', 'MPIO_CNMBR': 'Municipio', 'CSDI': 'CSDI', 'ADAM': 'ADAM', 'MIDAS': 'MIDAS', 'CSDI_USAID': 'CSDI_USAID', 'REGION_PDE': 'REGION_PDE', 'ZonaFuturo': 'ZonaFuturo', 'Selected': 'Selected', 'CENTROID_X': 'CENTROID_X', 'CENTROID_Y': 'CENTROID_Y', 'Pob_total': 'Pob_total', 'ContVSDe': 'ContVSDe', 'Ruta1': 'Ruta1', 'Zona': 'Zona', });
lyr_Aeropuertos_13.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'ESCALA': 'ESCALA', 'GLOBALID': 'Identificador global', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'HOJA': 'HOJA', 'PK_CUE_CAM': 'PK_CUE_CAM', 'RULEID': 'RULEID', 'OBJECT_ID_': 'OBJECT_ID_', });
lyr_Geografaassessment_1.set('fieldImages', {'OBJECTID': 'Hidden', 'DPTO_CCDGO': 'Hidden', 'CodMonDept': 'Hidden', 'DPTO_CNMBR': 'Hidden', 'MPIO_CCDGO': 'Hidden', 'CodMonMpio': 'Hidden', 'MPIO_CNMBR': 'Hidden', 'CSDI': 'Hidden', 'ADAM': 'Hidden', 'MIDAS': 'Hidden', 'CSDI_USAID': 'Hidden', 'REGION_PDE': 'Hidden', 'ZonaFuturo': 'Hidden', 'Selected': 'Hidden', 'CENTROID_X': 'Hidden', 'CENTROID_Y': 'Hidden', 'Pob_total': 'Hidden', 'ContVSDe': 'Hidden', 'Ruta1': 'Hidden', 'Zona': 'Hidden', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Enviromentalareas_2.set('fieldImages', {'OBJECTID_1': 'Hidden', 'objectid': 'Hidden', 'nombre': 'TextEdit', 'id_pnn': 'Hidden', 'categoria': 'Hidden', 'territoria': 'Hidden', 'resolucion': 'Hidden', 'hectareas_': 'Hidden', 'escala': 'Hidden', 'organizaci': 'Hidden', 'fecha_act': 'Hidden', 'url': 'Hidden', 'wkid': 'Hidden', 'app_id': 'Hidden', 'record_id': 'Hidden', 'centroid_x': 'Hidden', 'centroid_y': 'Hidden', 'fecha_regi': 'Hidden', 'validado': 'Hidden', 'hectareas0': 'Hidden', 'perimetro_': 'Hidden', 'globalid': 'Hidden', 'administra': 'Hidden', 'sde_state_': 'Hidden', 'anio': 'Hidden', 'tAnio': 'Hidden', 'CATEG': 'TextEdit', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Densidaddecultivosdecoca_3.set('fieldImages', {'grilla1': 'Hidden', 'areacoca': 'TextEdit', 'ano': 'Hidden', });
lyr_Subestacioneselctricas_4.set('fieldImages', {'OBJECTID_12': 'Hidden', 'OBJECTID': 'Hidden', 'OBJECTID_1': 'Hidden', 'EST': 'Hidden', 'MUNICIPIO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'TENSION_NO': 'Hidden', 'CONFIGURAC': 'Hidden', 'ANOENTRADA': 'Hidden', 'OPRED': 'Hidden', 'NOTAS': 'Hidden', 'COD_DEP': 'Hidden', 'LONGITUD': 'Hidden', 'LATITUD': 'Hidden', 'NOM_SUBEST': 'TextEdit', 'ORGANIZACI': 'Hidden', 'TENSION_SU': 'Hidden', 'ESTADO': 'Hidden', 'FECHA_OPER': 'Hidden', 'OBSERVACIO': 'Hidden', 'COD_DPTO': 'Hidden', 'COD_MPIO': 'Hidden', 'LATITUD_1': 'Hidden', 'LONGITUD_1': 'Hidden', });
lyr_Plantaselctricas_5.set('fieldImages', {'OBJECTID_12': 'Hidden', 'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'PLA_COD_UP': 'Hidden', 'PLA_NOMBRE': 'Hidden', 'PLA_TIPO': 'TextEdit', 'PLA_COMBUS': 'TextEdit', 'PLA_PRIVAD': 'Hidden', 'PLA_AÑO_E': 'Hidden', 'PLA_CAP_EF': 'Hidden', 'PLA_AGENTE': 'Hidden', 'PLA_ZNI': 'Hidden', 'PLA_FECHA_': 'Hidden', 'PLA_FUENTE': 'Hidden', 'PLA_CAP_NO': 'Hidden', 'PLA_FAC_PO': 'Hidden', 'PLA_DISPON': 'Hidden', 'PLA_CAP_AN': 'Hidden', 'PLA_DEPART': 'Hidden', 'PLA_MUNICI': 'Hidden', 'PLA_TECNOL': 'TextEdit', });
lyr_Redvialterciaria_6.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID_2': 'Hidden', 'OBJECTID': 'Hidden', 'TIPO_VIA': 'TextEdit', 'ESTADO_SUP': 'Hidden', 'NUMERO_CAR': 'Hidden', 'ACCESIBILI': 'Hidden', 'NOMBRE_GEO': 'Hidden', 'PROYECTO': 'Hidden', 'SYMBOL': 'Hidden', 'FECHA': 'Hidden', 'RULEID': 'Hidden', 'PK_CUE': 'Hidden', 'EJE_VIAL': 'Hidden', 'SHAPE_Leng': 'Hidden', 'RedNaciona': 'Hidden', 'RedDeparta': 'Hidden', 'Tipo_Red': 'Hidden', 'DPTO_CCDGO': 'Hidden', 'MPIO_CCDGO': 'Hidden', 'MPIO_CNMBR': 'Hidden', 'DPTO_CNMBR': 'Hidden', 'Municipio': 'Hidden', 'Terri_Func': 'Hidden', 'Tama_Terri': 'Hidden', 'Aglom_Sist': 'Hidden', 'Tama_Aglom': 'Hidden', 'Poblacion': 'Hidden', 'E_id_subre': 'Hidden', 'E_tipol_En': 'Hidden', 'E_tipol_Es': 'Hidden', 'E_tipologi': 'Hidden', 'E_tipolo_1': 'Hidden', 'E_tipolo_2': 'Hidden', 'E_tipolo_3': 'Hidden', 'Ranking_IN': 'Hidden', 'Ponderacio': 'Hidden', 'Jerarquia_': 'Hidden', 'R_Urbano': 'Hidden', 'ID': 'Hidden', 'Long_km': 'Hidden', 'ViaNaciona': 'Hidden', 'ViaDeparta': 'Hidden', 'ViaTerciar': 'Hidden', 'ViaFluvial': 'Hidden', 'ViaAerea': 'Hidden', 'Departamen': 'Hidden', 'PDET_ZOMAC': 'Hidden', 'Cabecera_M': 'Hidden', 'P_Poblacio': 'Hidden', 'ICV': 'Hidden', 'PobDif': 'Hidden', 'CentSalud': 'Hidden', 'CentEducat': 'Hidden', 'CultIlicit': 'Hidden', 'InterModal': 'Hidden', 'AMB_01': 'Hidden', 'AMB_02': 'Hidden', 'AMB_03': 'Hidden', 'Puntaje': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Le_2': 'Hidden', });
lyr_Redvialprimaria_7.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'ID': 'Hidden', 'INODE': 'Hidden', 'JNODE': 'Hidden', 'LENGTH': 'Hidden', 'TYPE_': 'Hidden', 'MODES': 'Hidden', 'LANES': 'Hidden', 'VDF': 'Hidden', 'DATA1': 'Hidden', 'DATA2': 'Hidden', 'DATA3': 'Hidden', 'VOLAU': 'Hidden', 'VOLAD': 'Hidden', 'TIMAU': 'Hidden', 'F_c1vol': 'Hidden', 'F_c2vol': 'Hidden', 'F_cost1': 'Hidden', 'F_cost2': 'Hidden', 'F_cost_a': 'Hidden', 'F_cost_b': 'Hidden', 'F_cost_c': 'Hidden', 'F_cost_g': 'Hidden', 'F_costa': 'Hidden', 'F_costc': 'Hidden', 'F_costg': 'Hidden', 'F_costo': 'Hidden', 'F_cov_a': 'Hidden', 'F_cov_b': 'Hidden', 'F_cov_c': 'Hidden', 'F_cov_g': 'Hidden', 'F_idproy': 'Hidden', 'F_jos1': 'Hidden', 'F_jos2': 'Hidden', 'F_jos8': 'Hidden', 'F_peaja': 'Hidden', 'F_peajc': 'Hidden', 'F_peajg': 'Hidden', 'F_scl': 'Hidden', 'F_sellk': 'Hidden', 'F_tar_a': 'Hidden', 'F_tar_b': 'Hidden', 'F_tar_c': 'Hidden', 'F_tar_g': 'Hidden', 'F_tra_a': 'Hidden', 'F_tra_b': 'Hidden', 'F_tra_c': 'Hidden', 'F_tra_g': 'Hidden', 'F_vol_a': 'Hidden', 'F_vol_b': 'Hidden', 'F_vol_c': 'Hidden', 'F_vol_g': 'Hidden', 'F_1': 'Hidden', 'TPDA': 'Hidden', 'TPDAautos': 'Hidden', 'TPDAcpeq': 'Hidden', 'TPDAcgran': 'Hidden', 'TPDAall': 'Hidden', 'Shape_Length': 'Hidden', });
lyr_LneasTransmisnElctrica_8.set('fieldImages', {'OBJECTID_1': 'Hidden', 'objectid': 'Hidden', 'expediente': 'Hidden', 'sector': 'Hidden', 'operador': 'TextEdit', 'proyecto': 'Hidden', 'num_act_ad': 'Hidden', 'fec_act_ad': 'Hidden', 'descrip': 'Hidden', 'region_seg': 'Hidden', 'Shape_Length': 'Hidden', });
lyr_Vasfluviales_9.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'Join_Count': 'Hidden', 'TARGET_FID': 'Hidden', 'ID': 'Hidden', 'LENGTH': 'Hidden', 'DIR': 'Hidden', 'LONGITUD_T': 'Hidden', 'NOMBRE_RIO': 'TextEdit', 'ORIGEN': 'TextEdit', 'DESTINO': 'TextEdit', 'TIME_AB': 'Hidden', 'TIME_BA': 'Hidden', 'TIEMPO_AJU': 'Hidden', 'TIEMPO_AJ1': 'Hidden', 'VEL_AJUSTA': 'Hidden', 'VEL_AJUST1': 'Hidden', 'CAPACIDAD_': 'Hidden', 'CAPACIDAD1': 'Hidden', 'NAVEGACION': 'Hidden', 'INSPECCION': 'Hidden', 'BETA': 'Hidden', 'ALPHA': 'Hidden', 'ANCHO_MINI': 'Hidden', 'MANGA': 'Hidden', 'ESLORA': 'Hidden', 'VEL_BA': 'Hidden', 'VEL_AB': 'Hidden', 'TIEMPO_ASC': 'Hidden', 'TIEMPO_DES': 'Hidden', 'PROFUNDIDA': 'Hidden', 'PROFUNDID1': 'Hidden', 'VEL_AB1': 'Hidden', 'VEL_BA1': 'Hidden', 'FORMULA_FI': 'Hidden', 'Layer': 'Hidden', 'shape_leng': 'Hidden', 'Conexion': 'Hidden', 'Tramo': 'Hidden', 'Name': 'Hidden', 'descriptio': 'Hidden', 'ViaFluvial': 'Hidden', 'RuleID': 'Hidden', 'InLine_FID': 'Hidden', 'SimLnFlag': 'Hidden', 'MaxSimpTol': 'Hidden', 'MinSimpTol': 'Hidden', 'RuleID_1': 'Hidden', 'Shape_Length': 'Hidden', });
lyr_ConexinFluvial_10.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'RuleID': 'Hidden', 'Ruta': 'TextEdit', 'Vel_Kmh': 'Hidden', 'Longitud_K': 'Hidden', 'Shape_Length': 'Hidden', });
lyr_Lugarestursticos_11.set('fieldImages', {'OBJECTID': 'Hidden', 'Nombre': 'TextEdit', 'Localizacion': 'Hidden', 'Caracteristica': 'TextEdit', 'Beneficiarios': 'Hidden', 'code_mpio': 'Hidden', 'name_mpio': 'Hidden', });
lyr_Cabecerasmunicipales_12.set('fieldImages', {'OBJECTID': 'Hidden', 'FID_CMun_centroides_2018': 'Hidden', 'FID_': 'Hidden', 'DPTO_CCDGO': 'Hidden', 'MPIO_CCDGO': 'Hidden', 'CLAS_CCDGO': 'Hidden', 'SETR_CCDGO': 'Hidden', 'SECR_CCDGO': 'Hidden', 'CPOB_CCDGO': 'Hidden', 'CPOB_CNMBR': 'Hidden', 'COD_DANE': 'Hidden', 'CPOB_NAREA': 'Hidden', 'CPOB_NALT': 'Hidden', 'Shape_Leng': 'Hidden', 'CPOB_CCNCT': 'Hidden', 'Lon': 'Hidden', 'Lat': 'Hidden', 'FID_Geografia_OE': 'Hidden', 'DPTO_CCDGO_1': 'Hidden', 'CodMonDept': 'Hidden', 'DPTO_CNMBR': 'Hidden', 'MPIO_CCDGO_1': 'Hidden', 'CodMonMpio': 'Hidden', 'MPIO_CNMBR': 'TextEdit', 'CSDI': 'Hidden', 'ADAM': 'Hidden', 'MIDAS': 'Hidden', 'CSDI_USAID': 'Hidden', 'REGION_PDE': 'Hidden', 'ZonaFuturo': 'Hidden', 'Selected': 'Hidden', 'CENTROID_X': 'Hidden', 'CENTROID_Y': 'Hidden', 'Pob_total': 'Hidden', 'ContVSDe': 'Hidden', 'Ruta1': 'Hidden', 'Zona': 'Hidden', });
lyr_Aeropuertos_13.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'NOMBRE_GEO': 'Hidden', 'PROYECTO': 'Hidden', 'SYMBOL': 'Hidden', 'FECHA': 'Hidden', 'ESCALA': 'Hidden', 'GLOBALID': 'TextEdit', 'PK_CUE': 'Hidden', 'CAMBIO': 'Hidden', 'RESPONSABL': 'Hidden', 'VIGENCIA': 'Hidden', 'FECHA_MODI': 'Hidden', 'HOJA': 'Hidden', 'PK_CUE_CAM': 'Hidden', 'RULEID': 'Hidden', 'OBJECT_ID_': 'Hidden', });
lyr_Geografaassessment_1.set('fieldLabels', {});
lyr_Enviromentalareas_2.set('fieldLabels', {'nombre': 'no label', 'CATEG': 'no label', });
lyr_Densidaddecultivosdecoca_3.set('fieldLabels', {'areacoca': 'no label', });
lyr_Subestacioneselctricas_4.set('fieldLabels', {'MUNICIPIO': 'inline label', 'DEPARTAMEN': 'no label', 'NOM_SUBEST': 'no label', });
lyr_Plantaselctricas_5.set('fieldLabels', {'PLA_TIPO': 'header label', 'PLA_COMBUS': 'header label', 'PLA_TECNOL': 'header label', });
lyr_Redvialterciaria_6.set('fieldLabels', {'TIPO_VIA': 'header label', });
lyr_Redvialprimaria_7.set('fieldLabels', {});
lyr_LneasTransmisnElctrica_8.set('fieldLabels', {'operador': 'header label', });
lyr_Vasfluviales_9.set('fieldLabels', {'NOMBRE_RIO': 'header label', 'ORIGEN': 'header label', 'DESTINO': 'header label', });
lyr_ConexinFluvial_10.set('fieldLabels', {'Ruta': 'header label', });
lyr_Lugarestursticos_11.set('fieldLabels', {'Nombre': 'header label', 'Caracteristica': 'header label', });
lyr_Cabecerasmunicipales_12.set('fieldLabels', {'MPIO_CNMBR': 'header label', });
lyr_Aeropuertos_13.set('fieldLabels', {'GLOBALID': 'header label', });
lyr_Aeropuertos_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});