(async function getData() {
  const response = await fetch("http://localhost:3000/admin/customer");
  const json = await response.json();
  console.log(json);
})();
