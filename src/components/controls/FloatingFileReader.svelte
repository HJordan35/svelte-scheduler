<script>
  let file = "";

  const loadFile = event => {
    file = event.target.files[0];
    let loadedFile = file;
    let textType = /text.*/;

    if (loadedFile.type.match(textType)) {
      var reader = new FileReader();

      reader.onload = function(e) {
        processData(reader.result);
      };

      reader.readAsText(loadedFile);
    } else {
      console.log("File Type Not Supported");
    }
  };

  const processData = (csv) => {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    for (var i = 0; i < allTextLines.length; i++) {
      var data = allTextLines[i].split(";");
      var tarr = [];
      for (var j = 0; j < data.length; j++) {
        tarr.push(data[j]);
      }
      lines.push(tarr);
    }
    console.log(lines);
  }
</script>

<style type="text/scss">
  .reader-container {
    padding: 16px;
  }
  input {
    border: none;
    margin: 0px;
  }
</style>

<div class="reader-container">
  <input type="file" id="fileInput" on:change={loadFile} />
</div>
