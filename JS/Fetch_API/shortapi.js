function shortenUrl(url) {
  const apiUrl = `https://api.shrtco.de/v2/shorten?url=${url}`;

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        const shortLink = data.result.full_short_link;
        return shortLink;
      } else {
        throw new Error(`Error: ${data.error}`);
      }
    })
    .catch((error) => {
      throw new Error(`Error: ${error.message}`);
    });
}

const url = "https://www.facebook.com/ducanh.tran.927/";
shortenUrl(url)
  .then((result) => {
    console.log(`Link sau khi rút gọn: ${result}`);
  })
  .catch((error) => {
    console.error(error.message);
  });
