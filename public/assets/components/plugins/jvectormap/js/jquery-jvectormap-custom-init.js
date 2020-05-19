$(function() {
    //GDP by country visualization
    $('#world-map-gdp').vectorMap({
        map: 'world_mill',
        series: {
        regions: [{
            values: gdpData,
            scale: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial'
        }]
        },
        onRegionTipShow: function(e, el, code){
        el.html(el.html()+' (GDP - '+gdpData[code]+')');
        }
    });

    // Markers on the world map
    $('#world-map-markers').vectorMap({
        map: 'world_mill',
        scaleColors: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        markerStyle: {
          initial: {
            fill: '#F8E23B',
            stroke: '#383f47'
          }
        },
        backgroundColor: '#383f47',
        markers: [
          {latLng: [41.90, 12.45], name: 'Vatican City'},
          {latLng: [43.73, 7.41], name: 'Monaco'},
          {latLng: [-0.52, 166.93], name: 'Nauru'},
          {latLng: [-8.51, 179.21], name: 'Tuvalu'},
          {latLng: [43.93, 12.46], name: 'San Marino'},
          {latLng: [47.14, 9.52], name: 'Liechtenstein'},
          {latLng: [7.11, 171.06], name: 'Marshall Islands'},
          {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
          {latLng: [3.2, 73.22], name: 'Maldives'},
          {latLng: [35.88, 14.5], name: 'Malta'},
          {latLng: [12.05, -61.75], name: 'Grenada'},
          {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
          {latLng: [13.16, -59.55], name: 'Barbados'},
          {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
          {latLng: [-4.61, 55.45], name: 'Seychelles'},
          {latLng: [7.35, 134.46], name: 'Palau'},
          {latLng: [42.5, 1.51], name: 'Andorra'},
          {latLng: [14.01, -60.98], name: 'Saint Lucia'},
          {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
          {latLng: [1.3, 103.8], name: 'Singapore'},
          {latLng: [1.46, 173.03], name: 'Kiribati'},
          {latLng: [-21.13, -175.2], name: 'Tonga'},
          {latLng: [15.3, -61.38], name: 'Dominica'},
          {latLng: [-20.2, 57.5], name: 'Mauritius'},
          {latLng: [26.02, 50.55], name: 'Bahrain'},
          {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
        ]
    });

    // USA unemployment
    $.getJSON('data/us-unemployment.json', function(data){
      var val = 2009;
          statesValues = jvm.values.apply({}, jvm.values(data.states)),
          metroPopValues = Array.prototype.concat.apply([], jvm.values(data.metro.population)),
          metroUnemplValues = Array.prototype.concat.apply([], jvm.values(data.metro.unemployment));
  
      $('#world-map-gdp').vectorMap({
        map: 'us_aea',
        markers: data.metro.coords,
        series: {
          markers: [{
            attribute: 'fill',
            scale: ['#FEE5D9', '#A50F15'],
            values: data.metro.unemployment[val],
            min: jvm.min(metroUnemplValues),
            max: jvm.max(metroUnemplValues)
          },{
            attribute: 'r',
            scale: [5, 20],
            values: data.metro.population[val],
            min: jvm.min(metroPopValues),
            max: jvm.max(metroPopValues)
          }],
          regions: [{
            scale: ['#DEEBF7', '#08519C'],
            attribute: 'fill',
            values: data.states[val],
            min: jvm.min(statesValues),
            max: jvm.max(statesValues)
          }]
        },
        onMarkerTipShow: function(event, label, index){
          label.html(
            '<b>'+data.metro.names[index]+'</b><br/>'+
            '<b>Population: </b>'+data.metro.population[val][index]+'</br>'+
            '<b>Unemployment rate: </b>'+data.metro.unemployment[val][index]+'%'
          );
        },
        onRegionTipShow: function(event, label, code){
          label.html(
            '<b>'+label.html()+'</b></br>'+
            '<b>Unemployment rate: </b>'+data.states[val][code]+'%'
          );
        }
      });
  
      var mapObject = $('#world-map-gdp').vectorMap('get', 'mapObject');
  
      $("#slider").slider({
        value: val,
        min: 2005,
        max: 2009,
        step: 1,
        slide: function( event, ui ) {
          val = ui.value;
          mapObject.series.regions[0].setValues(data.states[ui.value]);
          mapObject.series.markers[0].setValues(data.metro.unemployment[ui.value]);
          mapObject.series.markers[1].setValues(data.metro.population[ui.value]);
        }
      });
    });

    // Regions selection
    var map,
    markers = [
      {latLng: [52.50, 13.39], name: 'Berlin'},
      {latLng: [53.56, 10.00], name: 'Hamburg'},
      {latLng: [48.13, 11.56], name: 'Munich'},
      {latLng: [50.95, 6.96], name: 'Cologne'},
      {latLng: [50.11, 8.68], name: 'Frankfurt am Main'},
      {latLng: [48.77, 9.17], name: 'Stuttgart'},
      {latLng: [51.23, 6.78], name: 'Düsseldorf'},
      {latLng: [51.51, 7.46], name: 'Dortmund'},
      {latLng: [51.45, 7.01], name: 'Essen'},
      {latLng: [53.07, 8.80], name: 'Bremen'}
    ],
    cityAreaData = [
      887.70,
      755.16,
      310.69,
      405.17,
      248.31,
      207.35,
      217.22,
      280.71,
      210.32,
      325.42
    ]

    map = new jvm.Map({
      container: $('#map'),
      map: 'de_merc',
      regionsSelectable: true,
      markersSelectable: true,
      markers: markers,
      markerStyle: {
        initial: {
          fill: '#4DAC26'
        },
        selected: {
          fill: '#CA0020'
        }
      },
      regionStyle: {
        initial: {
          fill: '#B8E186'
        },
        selected: {
          fill: '#F4A582'
        }
      },
      series: {
        markers: [{
          attribute: 'r',
          scale: [5, 15],
          values: cityAreaData
        }]
      },
      onRegionSelected: function(){
        if (window.localStorage) {
          window.localStorage.setItem(
            'jvectormap-selected-regions',
            JSON.stringify(map.getSelectedRegions())
          );
        }
      },
      onMarkerSelected: function(){
        if (window.localStorage) {
          window.localStorage.setItem(
            'jvectormap-selected-markers',
            JSON.stringify(map.getSelectedMarkers())
          );
        }
      }
    });
    map.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );
    map.setSelectedMarkers( JSON.parse( window.localStorage.getItem('jvectormap-selected-markers') || '[]' ) );

    // France elections
    $.getJSON('/MelisDesign/data/france-elections.json', function(data){
      new jvm.Map({
        map: 'fr_regions_merc',
        container: $('#map2007'),
        series: {
          regions: [{
            scale: {
              '1': '#4169E1',
              '2': '#FF69B4'
            },
            attribute: 'fill',
            values: data['year2007'].results
          }]
        }
      });
  
      new jvm.Map({
        map: 'fr_regions_merc',
        container: $('#map2012'),
        series: {
          regions: [{
            scale: {
              '1': '#FF69B4',
              '2': '#4169E1'
            },
            attribute: 'fill',
            values: data['year2012'].results
          }]
        }
      });
    });
});