/*jshint esversion: 6 */

function refreshClassmatesRaw() {
    const txtClassmates = document.getElementById("txtClassmates");
    const txtClassmatesUpdated = document.getElementById("txtClassmatesModified");
    txtClassmatesUpdated.value = txtClassmates.value; 
    //must use value, innerHTML doesn't work
    const txtTranscript = document.getElementById("txtTranscript");
    txtTranscript.innerHTML = "refreshed (raw)"
}


function refreshClassmates() {
    const txtClassmates = document.getElementById("txtClassmates");
    const txtClassmatesUpdated = document.getElementById("txtClassmatesModified");
    // txtClassmatesUpdated.value = txtClassmates.value; //must use value, innerHTML doesn't work
    const xmlDocument = new DOMParser().parseFromString(txtClassmates.value, "text/xml");
    const serializer = new XMLSerializer();
    //must use value, innerHTML doesn't work
    txtClassmatesUpdated.value = serializer.serializeToString(xmlDocument); 
    const txtTranscript = document.getElementById("txtTranscript");
    txtTranscript.innerHTML = "refreshed (parsed)"    
}