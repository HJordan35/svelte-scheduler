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
      for (var j = 0; j < data.length; j++) {
        lines.push(data[j].split(','));
      }
    }
    broadcastData(lines);
  }

  const broadcastData = (parsed) => {
      let target = document.getElementById("reader");
      const event = new CustomEvent('csv-loaded', {
          detail: parsed,
          bubbles: true
      });
      target.dispatchEvent(event);
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

<div id="reader" class="reader-container">
  <input type="file" id="fileInput" on:change={loadFile} />
</div>
