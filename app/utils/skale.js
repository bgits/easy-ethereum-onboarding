import FileStorage from '@skalenetwork/filestorage.js/src/index'

export const SKALE_ENDPOINT = 'https://ethboston0.skalenodes.com:10018'
export const skaleFileUpload = async e => {
  const accounts = await window.web3Skale.eth.getAccounts()
  const fileStorage = new FileStorage(window.web3Skale);
  let file = document.getElementById('files').files[0];
  let reader = new FileReader(window.web3Skale);

  //file storage method to upload file
  reader.onload = async function(e) {
    const arrayBuffer = reader.result
    const bytes = new Uint8Array(arrayBuffer);
    let link = fileStorage.uploadFile(
      accounts[0],
      file.name,
      bytes,
    );
    console.log({link, file})
  };
  reader.readAsArrayBuffer(file);
}
