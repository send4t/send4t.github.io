    
async function getPoems() {
  try {
    const response = await fetch('https://extinct-jade-bedclothes.cyclic.app/');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getPoems();
