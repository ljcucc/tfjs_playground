(()=>{
  var app = new Vue({
    el: "#app",
    data: {
      file_uploaded: null
    },
    methods:{
      handleFileUpload:(event)=>{
        console.log("uploading")
        
        const files = event.target.files;
        for(var index in files){
          const file = files[index];
          
          var reader = new FileReader();
          reader.onload = function(e) {
            // binary data
            const bin = e.target.result
            JSZip.loadAsync(bin).then(zip=>{
              console.log(Object.keys(zip.files))
            })
          };
          reader.onerror = function(e) {
            // error occurred
            console.log('Error : ' + e.type);
          };
	       reader.readAsBinaryString(file);
        }
      }
    }
  });
  //  
  window.addEventListener("load",()=>{
      window.eruda.init();
  });
  
})();