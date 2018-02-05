var fileExists = true;

let myPromise = new Promise((resolve, reject) => {
	if(fileExists){
  	let fileContents = "This is the file content.";
  	resolve(fileContents)
  }else{
  	let msg = "Could not open the file";
    reject(msg);
  }
});

myPromise.then((fileContents) => {
console.log(fileContents + " " + "I got u the file and kept my promise");
return;
});

myPromise.catch(msg => { 
	console.log(msg);
  return;
  });