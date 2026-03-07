/* 
P7- Extract the domain name from a URL. Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

For example: 
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

                                                    */

// To solve this problem, we can check if the url includes "//" or "www",then we can remove them, and then from the remaining string we can split the string from "." and then we can return the "0th" index item which will be the domain name.

function domainName(url) {
  if (url.includes("//www")) {
    return url.split(".")[1];
  } else if (url.includes("www") && url.indexOf("www") === 0) {
    return url.split(".")[1];
  } else {
    if (url.includes("//")) {
      let inddexNumber = url.indexOf("//") + "//".length;
      return url.slice(inddexNumber).split(".")[0];
    } else {
      return url.split(".")[0];
    }
  }
}


console.log(domainName("http://mysitewww.com'/"));
