window.onload = function() {
    var dpi_inp = document.getElementById('dpi_inp')
    var size_inp = document.getElementById('size_inp')
    var pixel_inp = document.getElementById('pixel_inp')
    var inch_inp = document.getElementById('inch_inp')
    var mill_inp = document.getElementById('mill_inp')
    
    var inch_mm = 25.4;

    dpi_inp.addEventListener('input', function() {
        var dpi = parseFloat(dpi_inp.value);
        var size = parseFloat(size_inp.value);
        var pixel = parseFloat(pixel_inp.value);
        pixel = (dpi / inch_mm * size).toFixed(1)
        size = (pixel / (dpi / inch_mm)).toFixed(1)
        pixel_inp.value = pixel;
        size_inp.value = size;
    })
    size_inp.addEventListener('input', function() {
        var dpi = parseFloat(dpi_inp.value);
        var size = parseFloat(size_inp.value);
        var pixel = parseFloat(pixel_inp.value);
        pixel = (dpi / inch_mm * size).toFixed(1)
        pixel_inp.value = pixel;
    })
    pixel_inp.addEventListener('input', function() {
        var dpi = parseFloat(dpi_inp.value);
        var size = parseFloat(size_inp.value);
        var pixel = parseFloat(pixel_inp.value);
        size = (pixel / (dpi / inch_mm)).toFixed(2)
        size_inp.value = size;
    })
    inch_inp.addEventListener('input', function() {
        var inch = parseFloat(inch_inp.value);
        var mill = parseFloat(mill_inp.value);
        mill = (inch * inch_mm).toFixed(3);
        mill_inp.value = mill;
    })
    mill_inp.addEventListener('input', function() {
        var inch = parseFloat(inch_inp.value);
        var mill = parseFloat(mill_inp.value);
        inch = (mill / inch_mm).toFixed(3);
        inch_inp.value = inch;
    })
}