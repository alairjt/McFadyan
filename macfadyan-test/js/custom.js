// PICTURE FROM FORM - common variables
var iBytesUploaded = 0;
var iBytesTotal = 0;
var iPreviousBytesLoaded = 0;
var iMaxFilesize = 1048576; // 1MB
var oTimer = 0;
var sResultFileSize = '';
// max file size
function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
};

function fileSelected() {
    // hide different warnings
    document.getElementById('upload_response').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    // get selected file element
    var oFile = document.getElementById('image_file').files[0];
    // filter for image files
    var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
    if (!rFilter.test(oFile.type)) {
        document.getElementById('error').style.display = 'block';
        return;
    }
    // little test for filesize
    if (oFile.size > iMaxFilesize) {
        document.getElementById('warnsize').style.display = 'block';
        return;
    }
    // get preview element
    var oImage = document.getElementById('preview');
    // prepare HTML5 FileReader
    var oReader = new FileReader();
    oReader.onload = function(e) {
        // e.target.result contains the DataURL which we will use as a source of the image
        oImage.src = e.target.result;
        oImage.onload = function() { // binding onload event
            // we are going to display some custom image information here
            sResultFileSize = bytesToSize(oFile.size);
            document.getElementById('fileinfo').style.display = 'block';
            document.getElementById('filesize').innerHTML = 'Size: ' + sResultFileSize;
            document.getElementById('filetype').innerHTML = 'Type: ' + oFile.type;
        };
    };
    // read selected file as DataURL
    oReader.readAsDataURL(oFile);
}

// SELECTS FROM COUNTRY AND STATE
$(function() {
    $('#selectAddress').change(function() {
        if ($(this).val() == 'optHome') {
            $('#addressHome').hide();
            $('#addressHome').show();
        }
        if ($(this).val() == 'optCompany') {
            $('#addressCompany').hide();
            $('#addressCompany').show();
        }
    });
});

//SELECTIZE INTERESTS
$('#interestsField').selectize({
		plugins: ['remove_button'],
		persist: false,
		create: true,
		render: {
			item: function(data, escape) {
				return '<div>"' + escape(data.text) + '"</div>';
			}
		},
		onDelete: function(values) {
			return confirm(values.length > 1 ? 'Are you sure you want to remove these ' + values.length + ' items?' : 'Are you sure you want to remove "' + values[0] + '"?');
		}
	});

//FIELD VALIDATION
// document.getElementById("registerForm").onsubmit = function() {
//     var nameValidate = /^(?:[-A-Z]+\.? )+[-A-Z]+$/i.test(x);
//     Validate Name
//     if(document.getElementById("firstNameField").value == "" && > 20) {
//         document.getElementById("nameError").innerHTML = "Please Enter A Name with maximum 20 caracters";
//         document.getElementById("nameError").className = "help-block";
//     }
// }
