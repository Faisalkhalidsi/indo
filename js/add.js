var map, layer;
var tampungKode1, tampungKode2, tampungKode3;
var infoWindow = new google.maps.InfoWindow();
function initialize() {
    google.maps.visualRefresh = true;
    var mapOptions = {
        center: new google.maps.LatLng(-3.337954, 117.320251),
        zoom: 4,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map-container"),
            mapOptions);



    $.ajax({
        type: 'GET',
        url: 'php/data.php',
        dataType: 'json',
        success: function (data) {
            //data dibagi 3
            var kel1, kel2, kel3;
            var min = "";
            var med = "";
            var max = "";
            var jumlah, kode;
            for (var i = 0; i < data.provinsi.length; i++)
            {
                jumlah = data.provinsi[i].jumlah;
                kode = data.provinsi[i].kode;
                if (jumlah <= 3000000)
                {
                    min += kode + ",";
                } else if (jumlah > 3000000 && jumlah < 6000000)
                {
                    med += kode + ",";
                } else if (jumlah >= 6000000)
                {
                    max += kode + ",";
                }
            }
            fusiontablelayer(min, med, max);
        }
    });
    var homeControlDiv = document.createElement('div');
    var homeControls = new legenda(homeControlDiv, map);
    homeControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(homeControlDiv);

}

function fusiontablelayer(kode1, kode2, kode3)
{
    kode1 = removeLastString(kode1);
    kode2 = removeLastString(kode2);
    kode3 = removeLastString(kode3);
    tampungKode1 = kode1;
    tampungKode2 = kode2;
    tampungKode3 = kode3;
    layer = new google.maps.FusionTablesLayer({
        query: {
            select: 'geometry',
            from: '1brw2OcMYI7Ug8tcr1opfEE5UfXazXZI_Y-7Bjv2C',
        },
        options: {
            suppressInfoWindows: true
        },
        styles: [{
                where: 'kode IN (' + kode1 + ')',
                polygonOptions: {
                    fillColor: '#00FF00'
                }
            }, {
                where: 'kode IN (' + kode2 + ')',
                polygonOptions: {
                    fillColor: '#FFFF00'
                }
            }, {
                where: 'kode IN (' + kode3 + ')',
                polygonOptions: {
                    fillColor: '#FF0000'
                }
            }]
    });
    layer.setMap(map);
    google.maps.event.addListener(layer, 'click', function (e) {
        showData(e)
    });
}
//menghapus koma dibelakang
function removeLastString(kode)
{
    kode = kode.substring(0, kode.length - 1) + '';
    return kode;
}
//buat nambahin legenda		
function legenda(controlDiv, map) {
    controlDiv.style.backgroundColor = 'white';
    controlDiv.title = 'Legenda';
    var isi1 = "<table class=\"table table-condensed\"><th><td>Legenda</td></th>";
    var isi2 = "<tr><td style=\"background-color:#00FF00\">&nbsp;&nbsp;&nbsp;</td><td><3 juta</td></tr>";
    var isi3 = "<tr><td style=\"background-color:#FFFF00\">  </td><td>3-6 juta</td></tr>";
    var isi4 = "<tr><td style=\"background-color:#FF0000\">  </td><td>>6 juta</td></tr>";
    var isi5 = "</table>";
    controlDiv.innerHTML = isi1 + isi2 + isi3 + isi4 + isi5;
}

//untuk menampilkan per pulau
function layerByPulau(kodeWilayah)
{

    layer = new google.maps.FusionTablesLayer({
        query: {
            select: 'geometry',
            from: '1brw2OcMYI7Ug8tcr1opfEE5UfXazXZI_Y-7Bjv2C',
            where: 'kode IN (' + kodeWilayah + ')',
        },
        options: {
            suppressInfoWindows: true
        },
        styles: [{
                where: 'kode IN (' + tampungKode1 + ')',
                polygonOptions: {
                    fillColor: '#00FF00'
                }
            }, {
                where: 'kode IN (' + tampungKode2 + ')',
                polygonOptions: {
                    fillColor: '#FFFF00'
                }
            }, {
                where: 'kode IN (' + tampungKode3 + ')',
                polygonOptions: {
                    fillColor: '#FF0000'
                }
            }],
    });

    layer.setMap(map);
    google.maps.event.addListener(layer, 'click', function (e) {
        showData(e)
    });
}
function showData(e)
{
    var kodeBPS = e.row['kode'].value;
    var location = e.latLng;

    $.ajax({
        url: 'php/fetch.php', //This is the current doc
        type: "POST",
        data: ({kode: kodeBPS}),
        success: function (data) {
            var isi = "";
            var json = $.parseJSON(data);

            isi += "<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'><h2><b>Informasi Rinci</b></h2></h4></div><div class='modal-body'>";
            isi += "<table><tr><td><b>Provinsi </b></td><td>: " + json.provinsi[0].provinsi + "</br></td></tr>";
            isi += "<tr><td><b>Ibukota  </b></td><td>: " + json.provinsi[0].ibukota + "</br></td></tr>";
            isi += "<tr><td><b>Jumlah Penduduk </b></td><td>: " + json.provinsi[0].jumlah + " Jiwa</br></td></tr></table>";
            isi += "</div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></div></div>";

            $("#myModal").html(isi);
            $('#myModal').modal('toggle')

//                    infoWindow.setContent("<b>" + data.provinsi[i].provinsi + "</b>");
//                    infoWindow.setPosition(location);
//                    infoWindow.open(map);

        }
    });


}
$(document).ready(function () {
    $('input[name="pulau"]').on('change', function () {
        layer.setMap(null);
        var value = $(this).val();
        var jawa = "31,32,33,34,35,36";
        var sumatera = "11,12,13,15,16,17,18,14";
        var kalimantan = "61,62,63,64";
        var sulawesi = "71,72,73,74,75,76";
        var papua = "91,94";
        switch (value)
        {
            case "Jawa":
                layerByPulau(jawa);
                break;
            case "Sumatera":
                layerByPulau(sumatera);
                break;
            case "Kalimantan":
                layerByPulau(kalimantan);
                break;
            case "Sulawesi":
                layerByPulau(sulawesi);
                break;
            case "Papua":
                layerByPulau(papua);
                break;
            default:
        }
    });

    $('#tipe_data').on('change', function () {
//        var data = $('#tipe_data').val();
//        alert(data);
    });
});